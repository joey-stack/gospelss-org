import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const tracks = await db.media.findManyTracks();
    const testimonies = await db.testimonies.findMany();

    return NextResponse.json({
      success: true,
      tracks,
      testimonies,
    });
  } catch (error) {
    console.error("Media route error:", error);
    return NextResponse.json(
      { success: false, error: "Kunde inte hämta media och vittnesbörd." },
      { status: 500 }
    );
  }
}
