import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("stripe-signature");

    // 1. Webhook Signature & Replay Defense Verification
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!signature && webhookSecret && !webhookSecret.includes("mock")) {
      return NextResponse.json(
        { error: "Stripe-signature header saknas." },
        { status: 401 }
      );
    }

    // In production with valid secret, compute HMAC SHA256 and verify timestamp
    if (signature && webhookSecret && !webhookSecret.includes("mock")) {
      const parts = signature.split(",").reduce((acc: Record<string, string>, item) => {
        const [k, v] = item.split("=");
        if (k && v) acc[k.trim()] = v.trim();
        return acc;
      }, {});

      const timestamp = parseInt(parts.t, 10);
      const expectedSignature = parts.v1;

      // Replay attack defense: reject events older than 300 seconds
      const now = Math.floor(Date.now() / 1000);
      if (isNaN(timestamp) || Math.abs(now - timestamp) > 300) {
        return NextResponse.json(
          { error: "Webhook timestamp är för gammal eller ogiltig (Replay Attack Guard)." },
          { status: 400 }
        );
      }

      const signedPayload = `${timestamp}.${rawBody}`;
      const computed = crypto
        .createHmac("sha256", webhookSecret)
        .update(signedPayload, "utf8")
        .digest("hex");

      if (computed !== expectedSignature) {
        return NextResponse.json(
          { error: "Ogiltig kryptografisk webhook-signatur." },
          { status: 401 }
        );
      }
    }

    // 2. Parse Event Payload
    let event: { id: string; type: string; data: { object: any } };
    try {
      event = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Ogiltig JSON-data." }, { status: 400 });
    }

    if (!event.id || !event.type) {
      return NextResponse.json({ error: "Saknar nödvändiga händelsefält." }, { status: 400 });
    }

    // 3. Idempotent Guard: Check if event was already handled
    const alreadyProcessed = await db.webhooks.hasProcessed(event.id);
    if (alreadyProcessed) {
      return NextResponse.json(
        { received: true, message: "Händelsen är redan behandlad (Idempotent)." },
        { status: 200 }
      );
    }

    // 4. Handle Specific Stripe Events
    switch (event.type) {
      case "checkout.session.completed":
      case "invoice.payment_succeeded": {
        const session = event.data.object;
        const customerEmail = session.customer_email || session.email;
        const amountTotal = session.amount_total ? session.amount_total / 100 : 150;

        if (customerEmail) {
          await db.partners.create({
            name: session.customer_name || "Kingdom Partner",
            email: customerEmail,
            amount: amountTotal,
            provider: "STRIPE",
          });
        }
        break;
      }

      case "customer.subscription.deleted": {
        // Log cancellation or update partner status
        break;
      }

      default:
        // Acknowledge unhandled event gracefully
        break;
    }

    // Mark event processed in store
    await db.webhooks.markProcessed("STRIPE", event.id);

    return NextResponse.json({ received: true, eventId: event.id }, { status: 200 });
  } catch (error: any) {
    console.error("Stripe webhook processing error:", error);
    return NextResponse.json(
      { error: "Internt serverfel vid hantering av webhook." },
      { status: 500 }
    );
  }
}
