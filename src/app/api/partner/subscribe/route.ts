import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, amount = 150, provider = "STRIPE" } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Vänligen ange ditt för- och efternamn." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Vänligen ange en giltig e-postadress." },
        { status: 400 }
      );
    }

    const pledgeAmount = Math.max(Number(amount) || 150, 50);

    // Persist new Kingdom Partner record
    const partner = await db.partners.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      amount: pledgeAmount,
      provider: provider === "SWISH" ? "SWISH" : "STRIPE",
    });

    // In local dev mode without live Stripe keys, provide seamless instant confirmation
    return NextResponse.json(
      {
        success: true,
        message: "Varmt tack för att du blir Kingdom Partner med GOSPELS!",
        partner: {
          id: partner.id,
          name: partner.name,
          amount: partner.amount,
          interval: "monthly",
          provider: partner.provider,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Partner subscribe error:", error);
    return NextResponse.json(
      { success: false, error: "Kunde inte registrera partnerskap." },
      { status: 500 }
    );
  }
}
