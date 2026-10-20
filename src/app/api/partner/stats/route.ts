import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const count = await db.partners.count();
    const monthlyTotal = await db.partners.getMonthlyTotal();

    return NextResponse.json({
      success: true,
      stats: {
        totalPartners: count,
        monthlyTotalSEK: monthlyTotal,
        youngAttendeesFunded: count * 3, // Each 150 kr covers venue & acoustics for 3 youth
        transparencyRatio: "100%", // Non-profit direct allocation
      },
    });
  } catch (error) {
    console.error("Partner stats error:", error);
    return NextResponse.json(
      { success: false, error: "Kunde inte hämta partnerstatistik." },
      { status: 500 }
    );
  }
}
