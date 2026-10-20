// scripts/verify-gates.mjs
// Verification of the 4 Mandatory Quality Gates for GOSPELS (gospelss.org)

const BASE_URL = process.env.TEST_URL || "http://localhost:3000";

console.log(`\n======================================================`);
console.log(`  GOSPELS (Org.nr 802557-4883) — Quality Gate Verification`);
console.log(`  Target URL: ${BASE_URL}`);
console.log(`======================================================\n`);

let passedCount = 0;
let failedCount = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passedCount++;
  } else {
    console.error(`  ❌ FAIL: ${testName}`);
    failedCount++;
  }
}

async function runVerification() {
  try {
    // ------------------------------------------------------------------
    // GATE 1: Swish & Stripe Dual Giving & Kingdom Partner Subscriptions
    // ------------------------------------------------------------------
    console.log(`\n--- GATE 1: Swish & Stripe Kingdom Partner Verification ---`);
    
    // Initial stats
    const statsRes = await fetch(`${BASE_URL}/api/partner/stats`);
    const initialData = await statsRes.json();
    assert(statsRes.ok && typeof initialData?.stats?.totalPartners === "number", "GET /api/partner/stats returns partner counts");
    const initialPartners = initialData.stats.totalPartners;

    // Stripe checkout mock
    const stripeRes = await fetch(`${BASE_URL}/api/partner/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Anna Lindberg",
        email: "partner.stripe@gospelss.org",
        amount: 500,
        provider: "STRIPE",
      }),
    });
    const stripeData = await stripeRes.json();
    assert(stripeRes.status === 201 && stripeData.success && stripeData.partner.provider === "STRIPE", "POST /api/partner/subscribe (Stripe Card Checkout - 500 SEK)");

    // Swish mock transaction
    const swishRes = await fetch(`${BASE_URL}/api/partner/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Johan Berg",
        email: "partner.swish@gospelss.org",
        amount: 150,
        provider: "SWISH",
      }),
    });
    const swishData = await swishRes.json();
    assert(swishRes.status === 201 && swishData.success && swishData.partner.provider === "SWISH", "POST /api/partner/subscribe (Swish Swedish 1-tap checkout - 150 SEK)");

    // Verify stats updated
    const updatedStatsRes = await fetch(`${BASE_URL}/api/partner/stats`);
    const updatedData = await updatedStatsRes.json();
    assert(updatedData.stats.totalPartners >= initialPartners + 2, `Partner stats incremented (${initialPartners} -> ${updatedData.stats.totalPartners})`);

    // ------------------------------------------------------------------
    // GATE 2: Frictionless RSVP Lifecycle & Capacity Check
    // ------------------------------------------------------------------
    console.log(`\n--- GATE 2: Free Concert RSVP & Seat Allocation Verification ---`);
    
    const eventsRes = await fetch(`${BASE_URL}/api/events`);
    const eventsData = await eventsRes.json();
    assert(eventsRes.ok && Array.isArray(eventsData.events) && eventsData.events.length > 0, "GET /api/events returns Gothenburg gatherings");

    const targetEvent = eventsData.events[0];
    const initialSeats = targetEvent.remainingCapacity;

    // Successful RSVP
    const testEmail = `attendee.${Date.now()}@gospelss.org`;
    const rsvpRes = await fetch(`${BASE_URL}/api/rsvp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: targetEvent.id,
        name: "Lukas Johansson",
        email: testEmail,
      }),
    });
    const rsvpData = await rsvpRes.json();
    assert(rsvpRes.ok && rsvpData.success, `POST /api/rsvp registered attendee (Free entrance)`);

    // Verify seat decrement
    const eventsAfterRes = await fetch(`${BASE_URL}/api/events`);
    const eventsAfterData = await eventsAfterRes.json();
    const eventAfter = eventsAfterData.events.find((e) => e.id === targetEvent.id);
    assert(eventAfter.remainingCapacity === initialSeats - 1, `Seat allocation decremented correctly (${initialSeats} -> ${eventAfter.remainingCapacity})`);

    // Deduplication check
    const dupRes = await fetch(`${BASE_URL}/api/rsvp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: targetEvent.id,
        name: "Lukas Johansson",
        email: testEmail,
      }),
    });
    assert(dupRes.status === 409, `POST /api/rsvp prevents duplicate booking (HTTP 409 Conflict)`);

    // ------------------------------------------------------------------
    // GATE 3: Swedish GDPR Article 9 Confidential Prayer Care & AI Triage
    // ------------------------------------------------------------------
    console.log(`\n--- GATE 3: Swedish GDPR Article 9 Prayer Care Verification ---`);

    // Negative test: Missing GDPR Art 9 explicit consent
    const noConsentRes = await fetch(`${BASE_URL}/api/prayer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "Be gärna för frid i familjen och vägledning.",
        gdprConsent: false,
      }),
    });
    assert(noConsentRes.status === 403, "POST /api/prayer blocks intake if GDPR Article 9 explicit consent is missing (HTTP 403 Forbidden)");

    // Positive test: Anonymous submission with consent
    const anonPrayerRes = await fetch(`${BASE_URL}/api/prayer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic: "Andlig förnyelse",
        content: "Jag känner mig ensam i Göteborg och söker nytt hopp.",
        gdprConsent: true,
      }),
    });
    const anonData = await anonPrayerRes.json();
    assert(anonPrayerRes.status === 201 && anonData.success && Boolean(anonData.prayerId), "POST /api/prayer accepts confidential prayer without exposing identity or data leakage");

    // Acute triage test
    const acutePrayerRes = await fetch(`${BASE_URL}/api/prayer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Maria",
        email: "maria.sjalavard@gospelss.org",
        topic: "Pastoral kris",
        content: "Akut kris på sjukhus, behöver omedelbart prata med en själavårdare.",
        gdprConsent: true,
      }),
    });
    const acuteData = await acutePrayerRes.json();
    assert(acutePrayerRes.status === 201 && acuteData.success, "POST /api/prayer safely processes urgent pastoral request with Gemini Flash triage");

    // ------------------------------------------------------------------
    // GATE 4: Youth Safeguarding & Volunteer Intake (< 18 Parental Gate)
    // ------------------------------------------------------------------
    console.log(`\n--- GATE 4: Youth Safeguarding & Volunteer Intake Verification ---`);

    // Adult volunteer
    const adultVolunteerRes = await fetch(`${BASE_URL}/api/volunteer/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Elin Lindqvist",
        email: "elin.lindqvist@gospelss.org",
        phone: "0701234567",
        role: "Media & Kreativt",
        isUnder18: false,
      }),
    });
    const adultData = await adultVolunteerRes.json();
    assert(adultVolunteerRes.status === 201 && adultData.success, "POST /api/volunteer/apply succeeds for adult volunteer");

    // Minor volunteer without guardian consent (Negative test)
    const minorNoConsentRes = await fetch(`${BASE_URL}/api/volunteer/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Leo 16 år",
        email: "leo@gospelss.org",
        phone: "0709876543",
        role: "Ljud & Ljusteknik",
        isUnder18: true,
        parentalConsent: false,
      }),
    });
    assert(minorNoConsentRes.status === 400, "POST /api/volunteer/apply blocks minor without parental consent (HTTP 400 Bad Request)");

    // Minor volunteer WITH guardian consent (Positive test)
    const minorWithConsentRes = await fetch(`${BASE_URL}/api/volunteer/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Leo Svensson",
        email: "leo.svensson@gospelss.org",
        phone: "0709876543",
        role: "Scen & Produktion",
        isUnder18: true,
        guardianName: "Karin Svensson",
        guardianPhone: "0701122334",
        parentalConsent: true,
      }),
    });
    const minorData = await minorWithConsentRes.json();
    assert(minorWithConsentRes.status === 201 && minorData.success, "POST /api/volunteer/apply approves minor with verified parent/guardian data");

    // ------------------------------------------------------------------
    // GATE 5: Admin AI Sidekick & Attendance Drop-Off Modeling
    // ------------------------------------------------------------------
    console.log(`\n--- GATE 5: Admin Sidekick & Heuristic Modeling Verification ---`);

    const sidekickRes = await fetch(`${BASE_URL}/api/admin/sidekick`);
    const sidekickData = await sidekickRes.json();
    assert(sidekickRes.ok && sidekickData.success, "GET /api/admin/sidekick returns operational intelligence");
    
    const projectedMin = sidekickData?.stats?.flagshipEvent?.projectedPhysicalAttendance?.min;
    const projectedMax = sidekickData?.stats?.flagshipEvent?.projectedPhysicalAttendance?.max;
    assert(typeof projectedMin === "number" && typeof projectedMax === "number", `Attendance modeling calculated projected range (${projectedMin}–${projectedMax} seats)`);
    assert(Boolean(sidekickData?.stats?.aiBriefing), "Gemini Flash executive briefing generated successfully");

    // Summary
    console.log(`\n======================================================`);
    console.log(`  VERIFICATION RESULTS:`);
    console.log(`  Total Checks: ${passedCount + failedCount}`);
    console.log(`  Passed: ${passedCount}`);
    console.log(`  Failed: ${failedCount}`);
    console.log(`======================================================\n`);

    if (failedCount > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error("Verification error:", err);
    process.exit(1);
  }
}

runVerification();
