import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const events = await db.events.findMany();
    const enrichedEvents = await Promise.all(
      events.map(async (event) => {
        const reservedSeats = await db.rsvps.countAttendees(event.id);
        const remainingCapacity = Math.max(0, event.capacity - reservedSeats);
        return {
          ...event,
          reservedSeats,
          remainingCapacity,
          isFull: remainingCapacity === 0,
        };
      })
    );

    return NextResponse.json({
      success: true,
      events: enrichedEvents,
    });
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return NextResponse.json(
      { success: false, error: "Kunde inte hämta evenemang." },
      { status: 500 }
    );
  }
}
