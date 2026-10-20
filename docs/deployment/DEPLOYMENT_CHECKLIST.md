# GOSPELS — Production Deployment Checklist

> **Target Domain**: [`gospelss.org`](https://gospelss.org)  
> **Entity**: GOSPELS Musikförening (Org.nr: `802557-4883`, Gothenburg, Sweden)  
> **Target Hosting**: Vercel (Frankfurt / Stockholm EU Region)  
> **Release Target**: v1.0.0

---

## 1. Environment Variables Configuration

Set the following production environment variables in your hosting provider (Vercel Project Settings > Environment Variables):

| Variable Name | Environment | Required | Description |
|---|---|---|---|
| `NODE_ENV` | Production | Yes | Set to `production`. |
| `DATABASE_URL` | Production | Yes | PostgreSQL connection string (Supabase / Neon / AWS RDS EU). |
| `GEMINI_API_KEY` | Production | Yes | Google AI Studio API key for Pastoral Urgency Triage & Sidekick briefings. |
| `RESEND_API_KEY` | Production | Yes | Resend production API key for transactional emails (RSVP & volunteer confirmations). |
| `STRIPE_SECRET_KEY` | Production | Optional | Live Stripe secret key (`sk_live_...`) for Kingdom Partner subscriptions. |
| `STRIPE_WEBHOOK_SECRET` | Production | Optional | Webhook signing secret (`whsec_...`) for `POST /api/webhooks/stripe`. |
| `SWISH_PAYEE_ALIAS` | Production | Optional | Official 10-digit Swish number (`1234567890`) issued by Swedish bank. |
| `SWISH_CALLBACK_URL` | Production | Optional | HTTPS endpoint for Swish notifications (`https://gospelss.org/api/webhooks/swish`). |

---

## 2. DNS & Custom Domain Setup

Configure the following DNS records at your domain registrar for `gospelss.org`:

```dns
# Web Traffic
A      @       76.76.21.21             (Vercel Apex IP)
CNAME  www     cname.vercel-dns.com.   (Vercel Subdomain)

# Resend Transactional Email Delivery (SPF & DKIM)
TXT    resend._domainkey   p=MIGf...   (Resend DKIM Public Key)
TXT    @                   v=spf1 include:amazonses.com ~all
TXT    _dmarc              v=DMARC1; p=reject; rua=mailto:dmarc@gospelss.org

# Security & CAA
CAA    @       0 issue "letsencrypt.org"
```

---

## 3. Pre-Flight Verification Commands

Run these automated verification commands in terminal before promoting to production:

```bash
# 1. Full Production Build (Must finish with 0 errors across all 41 routes)
npm run build

# 2. End-to-End Quality Gate Verification (17/17 checks)
node scripts/verify-gates.mjs

# 3. OWASP Security & Secrets Leakage Audit (10/10 checks)
node scripts/audit-security.mjs

# 4. WCAG 2.1 AA Accessibility & Contrast Audit
node scripts/audit-a11y.mjs

# 5. Payment Webhook Guard Verification (5/5 checks)
node scripts/verify-webhooks.mjs
```

---

## 4. Production Smoke Test Checklist

- [ ] Visit `https://gospelss.org` and confirm SSL certificate is active (A+ rating on SSL Labs).
- [ ] Test mobile drawer on iOS Safari and Android Chrome.
- [ ] Submit a free RSVP booking on `/events/holy-spirit-worship` and verify email arrival via Resend.
- [ ] Submit a confidential prayer request on `/prayer` and verify GDPR Article 9 consent checkbox is strictly enforced.
- [ ] Test Swish copy button and verify quick copy feedback (`Kopierat!`).
- [ ] Verify Schema.org rich results using Google Rich Results Test (`https://search.google.com/test/rich-results`).
- [ ] Check `https://gospelss.org/sitemap.xml` and `https://gospelss.org/llms.txt`.
