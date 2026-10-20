import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      role = "Värdskap & Välkomnande",
      isUnder18 = false,
      guardianName,
      guardianPhone,
      parentalConsent = false,
    } = body;

    // 1. Basic Validation
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

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: "Vänligen ange ett giltigt telefonnummer." },
        { status: 400 }
      );
    }

    // 2. Youth Safeguarding Validation (< 18)
    if (isUnder18) {
      if (!guardianName || typeof guardianName !== "string" || guardianName.trim().length < 2) {
        return NextResponse.json(
          {
            success: false,
            error: "Målsmans namn är obligatoriskt för volontärer under 18 år.",
          },
          { status: 400 }
        );
      }

      if (!guardianPhone || typeof guardianPhone !== "string" || guardianPhone.trim().length < 6) {
        return NextResponse.json(
          {
            success: false,
            error: "Målsmans telefonnummer krävs för volontärer under 18 år.",
          },
          { status: 400 }
        );
      }

      if (!parentalConsent) {
        return NextResponse.json(
          {
            success: false,
            error: "Målsmans godkännande måste bekräftas för volontärer under 18 år.",
          },
          { status: 400 }
        );
      }
    }

    // 3. Persist Volunteer Record
    const volunteer = await db.volunteers.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      role,
      isUnder18: Boolean(isUnder18),
      guardianName: guardianName?.trim(),
      guardianPhone: guardianPhone?.trim(),
      parentalConsent: Boolean(parentalConsent),
    });

    // 4. Send Confirmation via Resend (with graceful fallback)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey && !resendApiKey.includes("mock")) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "info@gospelss.org",
          to: email.trim().toLowerCase(),
          subject: `Välkommen till teamet i GOSPELS, ${name.trim()}!`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #18181B; padding: 20px;">
              <h2 style="color: #0D9488;">Tack för din volontäransökan!</h2>
              <p>Hej ${name.trim()},</p>
              <p>Vi är så tacksamma för din längtan att tjäna inom <strong>${role}</strong> under våra lovsångssamlingar i Göteborg.</p>
              <div style="background-color: #F5F5F3; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0;"><strong>Team:</strong> ${role}</p>
                <p style="margin: 0 0 8px 0;"><strong>Status:</strong> Under granskning av teamledare</p>
                ${
                  isUnder18
                    ? `<p style="margin: 0; color: #0D9488;"><strong>Ungdomsintyg:</strong> Registrerad med målsman (${guardianName.trim()})</p>`
                    : ""
                }
              </div>
              <p>Vår volontärsamordnare kommer att höra av sig till dig med information om teamsamling och schema.</p>
              <p style="color: #71717A; font-size: 12px; margin-top: 30px;">
                Gospels (Org.nr: 802557-4883) · Göteborg, Sverige
              </p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.warn("Volunteer email confirmation skipped or mocked:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Tack för din ansökan! Vårt team kontaktar dig inom kort.",
        volunteerId: volunteer.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Volunteer route error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Kunde inte spara volontäransökan." },
      { status: 500 }
    );
  }
}
