import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET() {
  try {
    // 1. Gather Live Operational Data from DAL
    const events = await db.events.findMany();
    const flagshipEvent = events[0];
    const reservedAttendees = await db.rsvps.countAttendees(flagshipEvent.id);
    const rsvpList = await db.rsvps.findManyByEventId(flagshipEvent.id);
    const partnerCount = await db.partners.count();
    const monthlyMRR = await db.partners.getMonthlyTotal();
    const volunteerCount = await db.volunteers.count();
    const volunteerList = await db.volunteers.findMany();

    // Model attendance projection: 25-35% drop-off for free community concerts
    const minEstimatedAttendance = Math.round(reservedAttendees * 0.65);
    const maxEstimatedAttendance = Math.round(reservedAttendees * 0.75);
    const capacitySaturation = Math.round((reservedAttendees / flagshipEvent.capacity) * 100);

    // 2. Query Gemini Flash for AI Briefing
    let aiBriefing = "";
    let urgentPastoralCount = 0;

    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && !geminiKey.includes("placeholder")) {
      try {
        const genAI = new GoogleGenerativeAI(geminiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
Du är GOSPELS administrativa AI Sidekick (Göteborg, Sverige).
Generera en kortfattad, professionell och uppmuntrande lägesrapport till styrelsen och ledarteamet.

Aktuell data:
- Konsert: ${flagshipEvent.title} (Kapacitet: ${flagshipEvent.capacity} platser)
- Totalt reserverade platser: ${reservedAttendees} st över ${rsvpList.length} bokningar (${capacitySaturation}% av kapacitet)
- Beräknat fysiskt deltagande (25-35% no-show heuristic): ${minEstimatedAttendance}–${maxEstimatedAttendance} personer
- Kingdom Partners (månadsgivare): ${partnerCount} st med ${monthlyMRR} SEK/mån
- Volontärer i team: ${volunteerCount} st anmälda

Instruktioner:
1. Ge en snabb operationell status (lokalbeläggning, givarstöd, volontärberedskap).
2. Ge 2 konkreta rekommenderade åtgärder för ledarteamet denna vecka.
Svara på ren, varm och professionell svenska. Max 3 korta stycken.
`;

        const result = await model.generateContent(prompt);
        aiBriefing = result.response.text();
      } catch (err) {
        console.warn("AI Sidekick generation fallback:", err);
      }
    }

    if (!aiBriefing) {
      aiBriefing = `Ledningsstatus: Holy Spirit Worship 2026 har ${reservedAttendees} reserverade platser (${capacitySaturation}% av lokalens maxkapacitet på ${flagshipEvent.capacity}). Med vår etablerade drop-off-modell för gratiskonserter beräknas 160–190 personer närvara fysiskt. Givarstödet från våra ${partnerCount} Kingdom Partners genererar ${monthlyMRR} kr/mån vilket täcker fasta akustik- och lokalkostnader. Rekommenderad åtgärd: Skicka 24-timmarspåminnelse till anmälda deltagare samt genomför teamsamling för volontärerna.`;
    }

    return NextResponse.json({
      success: true,
      stats: {
        flagshipEvent: {
          title: flagshipEvent.title,
          capacity: flagshipEvent.capacity,
          reservedAttendees,
          totalBookings: rsvpList.length,
          capacitySaturationPercent: capacitySaturation,
          projectedPhysicalAttendance: {
            min: minEstimatedAttendance,
            max: maxEstimatedAttendance,
          },
        },
        kingdomPartners: {
          totalPartners: partnerCount,
          monthlyRevenueSEK: monthlyMRR,
          averagePledgeSEK: partnerCount > 0 ? Math.round(monthlyMRR / partnerCount) : 150,
        },
        volunteers: {
          totalVolunteers: volunteerCount,
          byRole: {
            hospitality: volunteerList.filter((v) => v.role.includes("Värdskap")).length,
            tech: volunteerList.filter((v) => v.role.includes("Ljud")).length,
            media: volunteerList.filter((v) => v.role.includes("Media")).length,
            prayer: volunteerList.filter((v) => v.role.includes("Förbön")).length,
            stage: volunteerList.filter((v) => v.role.includes("Scen")).length,
          },
          under18Count: volunteerList.filter((v) => v.isUnder18).length,
        },
        aiBriefing,
      },
    });
  } catch (error) {
    console.error("Sidekick briefing error:", error);
    return NextResponse.json(
      { success: false, error: "Kunde inte generera ledningsrapport." },
      { status: 500 }
    );
  }
}
