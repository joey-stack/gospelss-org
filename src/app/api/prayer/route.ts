import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, topic, content, gdprConsent } = body;

    // 1. Mandatory Swedish GDPR Article 9 Consent Check
    if (!gdprConsent) {
      return NextResponse.json(
        {
          success: false,
          error: "Samtycke krävs enligt GDPR Artikel 9 för att vi ska kunna behandla ditt böneämne.",
        },
        { status: 403 }
      );
    }

    if (!content || typeof content !== "string" || content.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Vänligen beskriv vad du önskar förbön för." },
        { status: 400 }
      );
    }

    // 2. AI Pastoral Urgency Triage (Gemini 2.5 Flash)
    let urgencyScore = 1;
    let isUrgent = false;

    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && !geminiKey.includes("placeholder")) {
      try {
        const genAI = new GoogleGenerativeAI(geminiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          generationConfig: { responseMimeType: "application/json" },
        });

        const prompt = `
Du är en erfaren och omsorgsfull pastoral triagescreener för den kristna ideella organisationen GOSPELS i Göteborg.
Analysera följande konfidentiella böneämne enbart för att avgöra brådskande pastoral uppföljning.
Sekretess är strikt: exponera inga personuppgifter.

Ämne: "${topic || "Allmänt"}"
Böneinnehåll: "${content.trim()}"

Bedöm brådskandegrad (urgencyScore):
1 = Standard förbön (andlig tillväxt, vardagsbön, tacksägelse)
2 = Pastoral omsorg önskvärd (sjukdom, sorg, ensamhet, relationskris)
3 = Akut kris (uttalad förtvivlan, risk för självskada, akut nödsituation)

Svara enbart med strikt JSON i formatet:
{
  "urgencyScore": 1 | 2 | 3,
  "isUrgent": true | false,
  "pastoralCategory": "string"
}
`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const parsed = JSON.parse(responseText);

        urgencyScore = parsed.urgencyScore || 1;
        isUrgent = Boolean(parsed.isUrgent || urgencyScore >= 2);
      } catch (aiErr) {
        console.warn("Pastoral AI triage fallback triggered:", aiErr);
        // Fallback heuristic
        const lower = content.toLowerCase();
        if (
          lower.includes("sjukhus") ||
          lower.includes("akut") ||
          lower.includes("död") ||
          lower.includes("sorg") ||
          lower.includes("orkar inte")
        ) {
          urgencyScore = 2;
          isUrgent = true;
        }
      }
    }

    // 3. Persist Prayer Record in Secure Store
    const prayer = await db.prayers.create({
      name: name?.trim() || undefined,
      email: email?.trim() || undefined,
      topic: topic || "Allmänt",
      content: content.trim(),
      isUrgent,
      gdprConsent: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Ditt böneämne har mottagits i förtroende. Vårt förbönsteam ber för dig.",
        prayerId: prayer.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Prayer route error:", error);
    return NextResponse.json(
      { success: false, error: "Ett oväntat fel uppstod vid mottagande av böneämne." },
      { status: 500 }
    );
  }
}
