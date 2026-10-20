import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-swish-signature") || req.headers.get("swish-signature");

    let payload: {
      id: string;
      paymentReference: string;
      payerAlias: string;
      payeeAlias: string;
      amount: number;
      currency: string;
      status: "PAID" | "DECLINED" | "ERROR" | "CANCELLED";
      datePaid?: string;
    };

    try {
      payload = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Ogiltig JSON-data." }, { status: 400 });
    }

    if (!payload.id || !payload.paymentReference) {
      return NextResponse.json({ error: "Saknar id eller paymentReference." }, { status: 400 });
    }

    // 1. Idempotency Check: Guard against duplicate Swish notifications
    const alreadyProcessed = await db.webhooks.hasProcessed(payload.id);
    if (alreadyProcessed) {
      return NextResponse.json(
        { received: true, status: "ALREADY_PROCESSED" },
        { status: 200 }
      );
    }

    // 2. Process Paid Donations
    if (payload.status === "PAID") {
      const swishPayerEmail = `swish.${payload.payerAlias.slice(-4)}@gospelss.org`;
      await db.partners.create({
        name: `Swish Givare (${payload.payerAlias.slice(-4)})`,
        email: swishPayerEmail,
        amount: payload.amount || 150,
        provider: "SWISH",
      });
    }

    // Mark event processed
    await db.webhooks.markProcessed("SWISH", payload.id);

    return NextResponse.json(
      { received: true, status: "PROCESSED", swishId: payload.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Swish webhook processing error:", error);
    return NextResponse.json(
      { error: "Internt fel vid hantering av Swish-callback." },
      { status: 500 }
    );
  }
}
