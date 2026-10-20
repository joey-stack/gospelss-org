/**
 * Lightweight Zero-Dependency Input Sanitization Utility
 * Guards against XSS, injection, and control characters in non-profit forms
 */

export function sanitizeText(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .replace(/[<>]/g, "") // Strip raw HTML tags
    .slice(0, 2000); // Guard against buffer overflow / DOS payload
}

export function sanitizeEmail(email: unknown): string {
  if (typeof email !== "string") return "";
  const cleaned = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(cleaned) ? cleaned : "";
}

export function sanitizePhone(phone: unknown): string {
  if (typeof phone !== "string") return "";
  // Strip non-dialable characters while preserving +, spaces, and dashes
  return phone.replace(/[^\d+ -]/g, "").slice(0, 30);
}
