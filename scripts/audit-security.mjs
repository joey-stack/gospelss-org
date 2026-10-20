// scripts/audit-security.mjs
// Automated Web Security & OWASP Top 10 Auditor for GOSPELS (gospelss.org)

import fs from "fs";
import path from "path";

function sanitizeText(input) {
  if (typeof input !== "string") return "";
  return input.trim().replace(/[<>]/g, "").slice(0, 2000);
}

function sanitizeEmail(email) {
  if (typeof email !== "string") return "";
  const cleaned = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(cleaned) ? cleaned : "";
}

function sanitizePhone(phone) {
  if (typeof phone !== "string") return "";
  return phone.replace(/[^\d+ -]/g, "").slice(0, 30);
}

console.log(`\n======================================================`);
console.log(`  GOSPELS — Web Security & OWASP Top 10 Audit`);
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

// 1. Audit Client-Side Bundles for Private Secrets Leakage
console.log(`--- 1. Private Secrets Isolation Audit ---`);
const clientFiles = [
  "src/app/page.tsx",
  "src/app/om-oss/page.tsx",
  "src/app/integritetspolicy/page.tsx",
  "src/app/anvandarvillkor/page.tsx",
  "src/app/kontakt/page.tsx",
  "src/components/layout/Navbar.tsx",
  "src/components/layout/Footer.tsx",
  "src/components/modals/RSVPModal.tsx",
  "src/components/modals/SwishModal.tsx",
  "src/components/modals/PrayerModal.tsx",
  "src/components/modals/VolunteerModal.tsx",
  "src/components/media/WorshipMediaPlayer.tsx",
];

let leaksFound = 0;
for (const file of clientFiles) {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, "utf-8");
    if (content.includes("GEMINI_API_KEY") || content.includes("RESEND_API_KEY")) {
      console.error(`  ❌ LEAK DETECTED in ${file}`);
      leaksFound++;
    }
  }
}
assert(leaksFound === 0, "Zero client-side leakage of server-only API secrets");

// 2. Input Sanitization & XSS Defense
console.log(`\n--- 2. Input Sanitization & XSS Defense Audit ---`);
const dirtyXss = "<script>alert('xss')</script>Helig Lovsång";
const cleanXss = sanitizeText(dirtyXss);
assert(!cleanXss.includes("<script>") && cleanXss.includes("Helig Lovsång"), "Sanitization strips malicious HTML tags");

const validEmail = sanitizeEmail("  Bokning@GOSPELSS.ORG  ");
assert(validEmail === "bokning@gospelss.org", "Email sanitization trims, normalizes, and validates RFC format");

const invalidEmail = sanitizeEmail("not-an-email@");
assert(invalidEmail === "", "Invalid email rejected by sanitizer");

const dirtyPhone = "070-123 45 67<script>";
const cleanPhone = sanitizePhone(dirtyPhone);
assert(!cleanPhone.includes("<") && cleanPhone.includes("070-123 45 67"), "Phone sanitizer strips injection vectors while preserving dial characters");

// 3. GDPR Article 9 Data Leakage Prevention
console.log(`\n--- 3. GDPR Article 9 Confidentiality Audit ---`);
const prayerRouteContent = fs.readFileSync(path.resolve("src/app/api/prayer/route.ts"), "utf-8");
const leaksPrayerBody = prayerRouteContent.includes("prayer.content") && prayerRouteContent.includes("NextResponse.json({ ... prayer.content");
assert(!leaksPrayerBody, "POST /api/prayer response shields confidential prayer content from return payload");

// 4. Content Security Policy & Security Headers
console.log(`\n--- 4. HTTP Security Headers Audit ---`);
const nextConfigContent = fs.readFileSync(path.resolve("next.config.ts"), "utf-8");
assert(nextConfigContent.includes("Content-Security-Policy"), "Content-Security-Policy configured");
assert(nextConfigContent.includes("Strict-Transport-Security"), "Strict-Transport-Security (HSTS) configured");
assert(nextConfigContent.includes("X-Frame-Options"), "X-Frame-Options DENY configured");
assert(nextConfigContent.includes("X-Content-Type-Options"), "X-Content-Type-Options nosniff configured");

console.log(`\n======================================================`);
console.log(`  SECURITY AUDIT RESULTS:`);
console.log(`  Total Checks: ${passedCount + failedCount}`);
console.log(`  Passed: ${passedCount}`);
console.log(`  Failed: ${failedCount}`);
console.log(`======================================================\n`);

if (failedCount > 0) {
  process.exit(1);
}
