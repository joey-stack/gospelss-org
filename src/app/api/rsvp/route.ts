import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventId = "evt-hsw-2026", name, email, attendees = 1 } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Vänligen ange ett giltigt namn." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Vänligen ange en giltig e-postadress." },
        { status: 400 }
      );
    }

    const attendeeCount = Math.min(Math.max(Number(attendees) || 1, 1), 4);

    // 2. Event existence check
    const event = await db.events.findById(eventId);
    if (!event) {
      return NextResponse.json(
        { success: false, error: "Evenemanget hittades inte." },
        { status: 404 }
      );
    }

    // 3. Persist RSVP record
    let newRsvp;
    try {
      newRsvp = await db.rsvps.create({
        eventId,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        attendees: attendeeCount,
      });
    } catch (dbError: any) {
      return NextResponse.json(
        { success: false, error: dbError.message || "Bokningen kunde inte sparas." },
        { status: 409 }
      );
    }

    // 4. Dispatch Email Confirmation via Resend (with graceful fallback)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey && !resendApiKey.includes("mock")) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "info@gospelss.org",
          to: email.trim().toLowerCase(),
          subject: `Bekräftelse: Din plats till ${event.title} är reserverad!`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #18181B; padding: 20px;">
              <h2 style="color: #0D9488;">Välkommen till ${event.title}!</h2>
              <p>Hej ${name.trim()},</p>
              <p>Din bokning är bekräftad för <strong>${attendeeCount} ${attendeeCount === 1 ? "person" : "personer"}</strong>.</p>
              <div style="background-color: #F5F5F3; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0;"><strong>Datum:</strong> Lördag 14 November 2026</p>
                <p style="margin: 0 0 8px 0;"><strong>Tid:</strong> Dörrarna öppnas ${event.doorsOpen}</p>
                <p style="margin: 0;"><strong>Plats:</strong> ${event.location}</p>
              </div>
              <p>Fri entré för alla. Vi ser fram emot en helig kväll av tillbedjan och gemenskap!</p>
              <p style="color: #71717A; font-size: 12px; margin-top: 30px;">
                Gospels (Org.nr: 802557-4883) · Göteborg, Sverige
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.warn("Resend email delivery skipped or mocked:", emailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Plats reserverad!",
        rsvp: newRsvp,
        event: {
          title: event.title,
          date: event.date,
          venue: event.venue,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("RSVP route error:", error);
    return NextResponse.json(
      { success: false, error: "Ett oväntat fel uppstod." },
      { status: 500 }
    );
  }
}
