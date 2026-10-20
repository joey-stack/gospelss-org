// scripts/verify-webhooks.mjs
// Verification of Webhook Guards, Replay Attack Defense & Idempotency for GOSPELS

const BASE_URL = process.env.TEST_URL || "http://localhost:3000";

console.log(`\n======================================================`);
console.log(`  GOSPELS — Webhook Guard & Idempotency Verification`);
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

async function runTests() {
  try {
    // -------------------------------------------------------------
    // 1. Stripe Webhook Verification & Idempotency
    // -------------------------------------------------------------
    console.log(`--- 1. Stripe Webhook Guard & Replay Defense ---`);
    const stripeEventId = `evt_test_${Date.now()}`;
    const stripePayload = {
      id: stripeEventId,
      type: "checkout.session.completed",
      data: {
        object: {
          customer_email: "test.donor@gospelss.org",
          customer_name: "Test Donor",
          amount_total: 30000, // 300 SEK
        },
      },
    };

    // First ingestion (Should succeed)
    const res1 = await fetch(`${BASE_URL}/api/webhooks/stripe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stripePayload),
    });
    const data1 = await res1.json();
    assert(res1.status === 200 && data1.received === true && data1.eventId === stripeEventId, "POST /api/webhooks/stripe processes valid transaction");

    // Second ingestion with identical event ID (Idempotency check: should return 200 without duplication)
    const res2 = await fetch(`${BASE_URL}/api/webhooks/stripe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stripePayload),
    });
    const data2 = await res2.json();
    assert(res2.status === 200 && data2.received === true && data2.message?.includes("Idempotent"), "Stripe webhook idempotency guard prevents double processing");

    // Malformed event ID (Negative test)
    const badRes = await fetch(`${BASE_URL}/api/webhooks/stripe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bad: "data" }),
    });
    assert(badRes.status === 400, "Stripe webhook rejects malformed event payload (HTTP 400)");

    // -------------------------------------------------------------
    // 2. Swish Webhook Verification & Idempotency
    // -------------------------------------------------------------
    console.log(`\n--- 2. Swish Payment Callback Guard ---`);
    const swishId = `SWISH_NOTIF_${Date.now()}`;
    const swishPayload = {
      id: swishId,
      paymentReference: `REF_${Date.now()}`,
      payerAlias: "0701234567",
      payeeAlias: "1235574883",
      amount: 150,
      currency: "SEK",
      status: "PAID",
      datePaid: new Date().toISOString(),
    };

    // First Swish ingestion
    const swishRes1 = await fetch(`${BASE_URL}/api/webhooks/swish`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(swishPayload),
    });
    const swishData1 = await swishRes1.json();
    assert(swishRes1.status === 200 && swishData1.received === true && swishData1.status === "PROCESSED", "POST /api/webhooks/swish processes Swedish bank callback");

    // Second Swish ingestion (Idempotency)
    const swishRes2 = await fetch(`${BASE_URL}/api/webhooks/swish`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(swishPayload),
    });
    const swishData2 = await swishRes2.json();
    assert(swishRes2.status === 200 && swishData2.status === "ALREADY_PROCESSED", "Swish callback idempotency guard prevents duplicate donation entry");

    // Summary
    console.log(`\n======================================================`);
    console.log(`  WEBHOOK GUARD AUDIT RESULTS:`);
    console.log(`  Total Checks: ${passedCount + failedCount}`);
    console.log(`  Passed: ${passedCount}`);
    console.log(`  Failed: ${failedCount}`);
    console.log(`======================================================\n`);

    if (failedCount > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error("Webhook test error:", err);
    process.exit(1);
  }
}

runTests();
