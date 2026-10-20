# MASTER_PROMPT.md — Universal Software Factory

You are running the Universal Software Factory in SPOON-FEED MODE with 
PERSISTENT MEMORY and COMPETITIVE INTELLIGENCE. The user wants to be guided 
step by step. The factory must remember everything across sessions. And it 
must study competitors to beat them.

Read this file in full. Begin at the Memory System section. Pause at every 
"STOP AND ASK". Do not skip phases.

================================================================================
MEMORY SYSTEM (READ FIRST — GOVERNS EVERY SESSION)
================================================================================

## The State File

One file at `.factory/state.json` tracks everything. Every session begins by 
reading it. Every phase updates it. If missing, create it.

## State File Schema

```json
{
  "version": "1.0",
  "created_at": "ISO timestamp",
  "updated_at": "ISO timestamp",
  "session_count": 0,
  "project": {
    "name": "",
    "category": "A | B | C",
    "mode": "single-brand | multi-brand",
    "phase_count": 1,
    "current_phase": "",
    "status": "in_progress"
  },
  "phases": {
    "0.4": { "status": "pending", "started_at": null, "completed_at": null, "notes": "", "artifacts": [], "decisions": [], "blockers": [] },
    "0.5": { "status": "pending" },
    "1": { "status": "pending" },
    "2": { "status": "pending" },
    "2.5": { "status": "pending" },
    "2.6": { "status": "pending" },
    "2.64": { "status": "pending" },
    "2.65": { "status": "pending" },
    "2.66": { "status": "pending" },
    "2.67": { "status": "pending" },
    "2.68": { "status": "pending" },
    "2.68.5": { "status": "pending" },
    "2.69": { "status": "pending" },
    "2.69.5": { "status": "pending" },
    "2.69.7": { "status": "pending" },
    "2.70": { "status": "pending" },
    "2.70.5": { "status": "pending" },
    "2.71": { "status": "pending" },
    "2.72": { "status": "pending" },
    "2.73": { "status": "pending" },
    "2.74": { "status": "pending" },
    "2.75": { "status": "pending" },
    "2.7": { "status": "pending" },
    "2.8": { "status": "pending" },
    "3": { "status": "pending" },
    "4": { "status": "pending" },
    "5": { "status": "pending" },
    "6": { "status": "pending" },
    "7": { "status": "pending" },
    "8": { "status": "pending" },
    "9": { "status": "pending" },
    "10": { "status": "pending" },
    "10.5": { "status": "pending" },
    "11": { "status": "pending" },
    "12": { "status": "pending" },
    "13": { "status": "pending" },
    "14": { "status": "pending" },
    "15": { "status": "pending" },
    "16": { "status": "pending" },
    "17": { "status": "pending" },
    "18": { "status": "pending" }
  },
  "credentials_collected": {},
  "source_files": {},
  "skills_installed": {},
  "user_preferences": {
    "mode": "spoon_feed",
    "verbose": true,
    "auto_proceed": false
  },
  "blockers": [],
  "next_action": ""
}
```

## Session Startup Protocol

```
═══════════════════════════════════════════════════════════════
FACTORY MEMORY LOADED
═══════════════════════════════════════════════════════════════

Welcome back.

SESSION [N] — [timestamp]

PROJECT: [name]
MODE: [single-brand / multi-brand]
CATEGORY: [A / B / C]
CURRENT PHASE: [phase number and name]

PROGRESS
✓ Complete: [list phases]
⚠ In progress: [phase]
⏸ Blocked: [phase + reason]
○ Pending: [count] phases remaining

WHERE WE LEFT OFF
[1–2 sentences]

NEXT ACTION
[What needs to happen next]

BLOCKERS
[Any items needing user input]

WHAT WOULD YOU LIKE TO DO?
A. Continue from where we left off
B. Jump to a specific phase
C. Review what's been completed
D. Change user preferences

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

## State Update Protocol

After every phase:
1. Set phase status (complete / in_progress / skipped / pending / blocked)
2. Record timestamps
3. Add notes, artifacts, decisions
4. Add or remove blockers
5. Update next_action
6. Update updated_at
7. Write to disk

Never store API key values — only "collected" or "pending".

## Commands the User Can Use

- "status" — show current state
- "resume" — continue from where we left off
- "reset" — clear memory (with confirmation)
- "skip phase X" — mark phase X as skipped
- "go back to phase X" — revisit phase X
- "show memory" — print raw state.json
- "just do it" — switch to autonomous mode
- "start asking again" — return to spoon-feed mode
- "help" — show command list

================================================================================
SPOON-FEED PROTOCOL (GOVERNS EVERY INTERACTION)
================================================================================

Every phase follows this pattern. No exceptions.

1. Check memory — read state file
2. Explain what the phase does in 1–3 sentences
3. Show exactly what you'll install, create, or change
4. Estimate time
5. Present options with a recommendation
6. Wait for the user's response
7. Run the phase if approved
8. Update memory
9. Report what happened
10. Ask before the next step

## Format for Every Phase

```
═══════════════════════════════════════════════════════════════
PHASE [X.Y] — [Phase Name]
═══════════════════════════════════════════════════════════════

WHERE WE ARE
[1 sentence from memory]

WHAT THIS PHASE DOES
[1–3 sentences]

WHAT I'LL DO
1. [Step 1]
2. [Step 2]

WHAT I'LL INSTALL OR CREATE
- [Item 1]
- [Item 2]

TIME ESTIMATE
[X minutes]

PREREQUISITES
- [What needs to be true]

OPTIONS
A. Proceed (recommended)
B. Skip this phase
C. Modify

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

## After Every Phase

```
✓ PHASE [X.Y] COMPLETE

WHAT HAPPENED
- [Result 1]

MEMORY UPDATED
- phase marked complete

NEXT: Phase [X.Z] — [Name]

READY?
A. Continue
B. Wait, I need to check something
C. Skip to a specific phase
D. Show me full status
```

## Autonomous Mode

If user says "just do it", "stop asking", "batch everything":
- Stop presenting options
- Proceed through phases automatically
- Still update memory after every phase
- Still STOP at gates requiring input (API keys, uploads, destructive actions)
- Report in groups of 3–5 phases
- Resume spoon-feed if user says "start asking again"

## Never Skip

- API key requests
- Credential collection
- Image or file uploads
- Destructive operations
- Paid service signups
- Legal or compliance decisions
- Memory updates

================================================================================
PHASE 0 — TWO-PHASE STRATEGY
================================================================================

Every project ships in one of three categories:

- Category A: Single phase, no gate. Full store. Ship.
- Category B: Single phase + compliance banners. Full store with disclosures.
- Category C: Two phase, per-product gating. Phase 1 ships brand + Notify Me 
  + any already-registered products. Phase 2 activates remaining products.

Powered by:
NEXT_PUBLIC_SITE_PHASE = 'prelaunch' | 'live'

Same codebase, same database, one switch.

================================================================================
PHASE 0.4 — PROJECT INIT
================================================================================

Check repo root for PROJECT.md. If exists, read and skip to Phase 0.5.
If missing, run interview.

```
═══════════════════════════════════════════════════════════════
PHASE 0.4 — PROJECT INIT (INTERVIEW)
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
I'll interview you about your project — business, brand, products, 
regulatory. Then I'll write PROJECT.md.

HOW IT WORKS
Six batches of 3–5 questions. After each batch, save your answers and confirm.

TIME ESTIMATE
30–45 minutes

OPTIONS
A. Proceed with the interview (recommended)
B. I already have a PROJECT.md — skip
C. Skip and use placeholders

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

## Batch 1 — Identity

1. Project name?
2. Primary domain?
3. Client (legal name, founder, contact)?
4. What the business does (one sentence)?
5. Where is the business registered?

## Batch 2 — Brand

1. Visual reference site? (URL or screenshots)
2. Existing brand system or new?
3. Three words the brand should evoke?
4. Primary customer?
5. Brand admired most, why?

## Batch 3 — Source Images

1. Founder portrait?
2. Product photos?
3. Existing logo?
4. Lifestyle photos?
5. Other assets?

## Batch 4 — Domain, Tech, Compliance, Catalog

Business model:
1. What does the business sell?
2. Single-brand or multi-brand retailer?
3. Physical, digital, or service?

Catalog (if multi-brand):
4. How many brands?
5. Which brands?
6. All registered with local regulator?
7. Own vs third-party?

Jurisdiction:
8. Where are target users?
9. Which countries accept orders?
10. Where is customer data stored?

Product:
11. Ingested, applied to body, worn, device?
12. Health, medical, or efficacy claims?
13. Payments, health data, children's data?

Then run COMPLIANCE DETECTOR.

## Batch 5 — Slices & Data

1. What pages does Phase 1 need?
2. What entities in the domain model?
3. What activates Phase 2?

## Batch 6 — Architecture & Scope

1. ADRs to record? (propose 5)
2. Extra gates beyond standard 21?
3. Explicitly out of scope?

## COMPLIANCE DETECTOR (MULTI-BRAND MODE)

Categories:
- A: No regulatory barrier. Full store.
- B: Products sell with disclaimers.
- C: Per-product gating.

Jurisdiction matrix:
| Jurisdiction | Industry | Frameworks | Gate Type |

Pre-sale triggers:
- Nigeria cosmetics: NAFDAC per SKU
- EU cosmetics: CPNP + EU Responsible Person
- UK cosmetics: SCPN + UK Responsible Person
- US cosmetics: FDA MoCRA
- Canada cosmetics: Health Canada CNF
- Australia cosmetics: TGA or AICIS
- Food, drugs, alcohol, financial: pre-sale approval per jurisdiction

Multi-brand rules:
- Every SKU needs its own registration number
- Brand-level registration does not cover all products
- Third-party products require retailer authorisation
- Unregistered products must be removed, not hidden

Verification tools:
- NAFDAC Greenbook: greenbook.nafdac.gov.ng
- NAPAMS: registration.nafdac.gov.ng
- VerifyProduct.ng
- 9jaCheckr SDK

Decision tree:
1. Classify each product: registered / pending / unregistered
2. registered → full listing
3. pending → Notify Me only
4. unregistered → hidden
5. All registered → Category A. Some pending → Category C.

Write `docs/compliance/COMPLIANCE-SURFACE.md` with Decision, Matrix, Triggers, 
Frameworks, Cross-Border, Activation Criteria, Rules, Out-of-Scope.

## COMPILE PROJECT.md

15 sections:
1. Identity
2. Client
3. Design Reference
4. Source Images
5. Brand Questions
6. Domain Skills
7. Brand Source
8. Project-Specific Gates
9. ADRs
10. Build Slices
11. Tech Stack
12. Legal & Compliance
13. Data Models
14. Phase 2 Trigger
15. Out of Scope

Mark missing [PLACEHOLDER]. Delete draft. Update memory.

**STOP AND ASK** before Phase 0.5.

================================================================================
PHASE 0.5 — PRE-FLIGHT CHECKLIST
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 0.5 — PRE-FLIGHT CHECKLIST
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Verify you have all accounts, tools, and source files needed.

ACCOUNTS NEEDED
- InsForge (database)
- Resend (email)
- Sentry (error tracking)
- Payment provider
- Domain email
- Vercel (hosting)
- Google AI Studio (Gemini key)
- Paper.design
- GitHub
- Anthropic API key (AI Sidekick)
- Firecrawl API key (reference study)
- 9jaCheckr API key (NAFDAC verification)
- DataForSEO or Ahrefs API key (competitive intel)
- Aptos account (AI visibility tracking)

TOOLS
- node v20+, npm v10+, uvx, agy, claude, docker (optional)

SOURCE FILES
- public/source/ with founder portrait, product photos, logo
- docs/design/references/ with reference screenshots

TIME ESTIMATE
15–30 minutes

OPTIONS
A. Start the checklist (recommended)
B. Skip (I have everything)
C. Show me only what's missing

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Walk through each item one at a time. Update memory as credentials collected.

**STOP AND ASK** before Phase 1.

================================================================================
PHASE 1 — JSM SKILLS
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 1 — JSM SKILLS
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Installs the JavaScript Mastery workflow skills.

WHAT I'LL RUN
git clone https://github.com/jsmastery-pro/skills.git .workflow-skills
npx skills@latest add jsmastery-pro/skills --agent antigravity

TIME ESTIMATE
2–3 minutes

OPTIONS
A. Proceed (recommended)
B. Skip

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Update memory.

**STOP AND ASK** before Phase 2.

================================================================================
PHASE 2 — FACTORY BLUEPRINT
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2 — FACTORY BLUEPRINT
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Installs the antigravity-factory blueprint for Tech Lead / Developer / QA 
orchestration.

WHAT I'LL RUN
git clone https://github.com/ydnikolaev/antigravity-factory.git .factory-blueprint
cp -r .factory-blueprint/blueprint/* .agents/

TIME ESTIMATE
2 minutes

OPTIONS
A. Proceed
B. Skip

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Update memory.

================================================================================
PHASE 2.5 — PONYTAIL + CONTEXT7
================================================================================

Same pattern. Install, update memory, ask next.

================================================================================
PHASE 2.6 — SUPERPOWERS
================================================================================

Same pattern. Add Superpowers Discipline to AGENTS.md.

================================================================================
PHASE 2.64 — PRODUCT DISCOVERY & PLANNING
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.64 — PRODUCT DISCOVERY & PLANNING
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Installs five skills: market research, requirements elicitation, PRD writing, 
vertical slicing, module boundary enforcement.

WHAT I'LL INSTALL
- product-discovery
- requirements-discovery
- prd-master
- slicing-into-tracer-bullets
- architecture-guardrails

TIME ESTIMATE
5 minutes

OPTIONS
A. Install all five (recommended)
B. Install four, skip product-discovery
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Install per user choice. Update memory.

================================================================================
PHASE 2.65 — DOMAIN SKILLS
================================================================================

Read PROJECT.md §6. Ask which domain group applies. Install.

Standard:
npx skills add coreyhaines31/marketingskills
npx skills add nexscope-ai/eCommerce-Skills --skill ecommerce-growth-strategy -g
git clone https://github.com/andmarios/zendesk-skill zendesk-skill
cd zendesk-skill && uv sync && cd ..
npx skills add nbashaw/claude-cs

E-commerce:
npx skills add vridhilabs/commerce-skills/customer-growth-crm
uv pip install stocktrim-mcp-server
pip install inventory_management_ai_mcp
npx skills add vridhilabs/commerce-skills/core-commerce
npx metaharness my-bot --template vertical:support

Update memory.

================================================================================
PHASE 2.66 — QUALITY & SECURITY
================================================================================

npx --yes web-app-security-skill audit . --fail-on never
mkdir -p .claude/skills/web-security-audit
git clone https://github.com/jscriptcoder/web-security-audit.git .claude/skills/web-security-audit
npx skills add diegosouzapw/awesome-omni-skill/skills/testing-security/a11y-ally-majiayu000
npx skills add vercel-labs/agent-skills
npx skills add kgelster/awesome-ecom-skills
npx skills add immamdouhaboammar/direct-response-funnel-auditor

If payments:
npx skills add hookdeck/webhook-skills --skill paystack-webhooks

Update memory.

================================================================================
PHASE 2.67 — PHOTOGRAPHY GENERATOR
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.67 — PHOTOGRAPHY GENERATOR
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Sets up the AI photography generator using Nano Banana.

WHAT I'LL INSTALL
- gemini-image-mcp
- photography-generator skill

WHAT I NEED
Your Gemini API key from aistudio.google.com/apikey

OPTIONS
A. I have my key (paste it)
B. Show me how to get one
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Install. Update memory.

================================================================================
PHASE 2.68 — PAPER.DESIGN
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.68 — PAPER.DESIGN
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Connects Paper.design to Antigravity for visual design review.

PREREQUISITE
Paper Desktop must be downloaded and running with a file open.

IS PAPER DESKTOP RUNNING?
A. Yes, connect
B. Not yet — show me how to install
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Install MCP + skills. Update memory.

================================================================================
PHASE 2.68.5 — REA + REFERENCE STUDY TOOLS
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.68.5 — REA + REFERENCE STUDY TOOLS
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Installs REA (functional study), Firecrawl (structural), Playwright (visual). 
Together they let the agent study any reference without copying.

WHAT I'LL INSTALL
- rea-agents (npm global)
- firecrawl-mcp
- @playwright/mcp
- reference-study skill

WHAT I NEED
Firecrawl API key from firecrawl.dev

OPTIONS
A. I have my key (paste it)
B. Show me how to get one
C. Skip Firecrawl (REA + Playwright only)

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Install. Create reference-study skill with SKILL.md. Update memory.

Add to AGENTS.md:

## REA Rules
- Use REA for functional study only
- Use Firecrawl for structural
- Use Playwright for visual
- REA does not extract visual tokens or download assets
- Never clone functionality 1:1

## Reference Study Rules
- Screenshot references, never scrape for assets
- Extract token distributions (ranges), not values
- Generate ORIGINAL tokens with same feel
- Document every reference in an ADR
- Every reference-derived design needs a distinctive move

================================================================================
PHASE 2.69 — BRAND IDENTITY
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.69 — BRAND IDENTITY
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Builds a full brand identity system: refined logo, colour palette, 
typography, guidelines, asset pack.

WHAT I'LL INSTALL
- brand-identity-skill, logo-design-skill, visual-system
- taste-skills, taste-skill, everything-design-taste
- awesome-design-skills, designly, afa-brand

WHAT I NEED FROM YOU
1. Confirm the three brand answers from PROJECT.md §5 are final
2. Do you have a logo to rework, or start fresh?
3. Should I show identity cards (3–4 options) before committing?

OPTIONS
A. Install and run full workflow
B. Install only, run later
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Install. Run workflow. Update memory.

================================================================================
PHASE 2.69.5 — RUN REFERENCE STUDY
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.69.5 — RUN REFERENCE STUDY
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Studies each reference site and produces an original design translation.

WHAT I'LL DO
1. Screenshot each reference (desktop + mobile)
2. Extract structure via Firecrawl
3. Analyze patterns in writing
4. Generate ORIGINAL tokens
5. Run differential check
6. Save translation to docs/references/

REFERENCES FROM PROJECT.md §3
[list]

OPTIONS
A. Study all references
B. Study only primary reference
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Run. Update memory.

================================================================================
PHASE 2.69.7 — COMPETITIVE INTELLIGENCE
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.69.7 — COMPETITIVE INTELLIGENCE
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Studies your competitors' stores for UI, copy, keywords, SEO, and GEO. 
Produces a Competitor Intelligence Report with gaps, opportunities, and an 
action brief the agent builds from.

WHY IT MATTERS
You can't outperform competitors without knowing where they're strong, weak, 
and where AI engines ignore them.

TIME ESTIMATE
45–90 minutes

WHAT I NEED
- 3–5 competitor URLs (or I'll discover them)
- Target product focus
- Target geography

OPTIONS
A. Full analysis (recommended)
B. Quick (UI + keywords only)
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

## Install Tools

MCP servers:
```json
{
  "mcpServers": {
    "competitor-radar": { "command": "uvx", "args": ["competitor-radar"] },
    "similarweb": { "url": "https://mcp.similarweb.com/mcp" },
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": { "FIRECRAWL_API_KEY": "<key>" }
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    },
    "dataforseo": {
      "url": "https://mcp.dataforseo.com/mcp",
      "env": { "DATAFORSEO_API_KEY": "<key>" }
    },
    "ahrefs": {
      "url": "https://mcp.ahrefs.com/mcp",
      "env": { "AHREFS_API_KEY": "<key>" }
    }
  }
}
```

## Create competitive-intel Skill

Create `.agents/skills/competitive-intel/SKILL.md`:

---
name: competitive-intel
description: Study competitor stores for UI, copy, keywords, SEO, GEO. Produces Competitor Intelligence Report with gaps, opportunities, action brief. Triggers on "analyze competitors", "beat competitors", "keyword gap", "SEO analysis", "GEO analysis".
---

# Competitive Intelligence

## Process

### Step 1 — Discover competitors
Use Similarweb + Google + competitor-radar. Confirm top 3–5 with user.

### Step 2 — UI & structure capture (Playwright)
Screenshot homepage, shop, product, cart, checkout (desktop + mobile). 
Extract section order, nav, UX patterns.
Save to `docs/competitors/[name]/ui/`.

### Step 3 — Content capture (Firecrawl)
Scrape product pages to markdown. Extract titles, meta, H1s, descriptions, 
blog structure, FAQs.
Save to `docs/competitors/[name]/content/`.

### Step 4 — Keyword research (DataForSEO or Ahrefs)
Pull ranked keywords (top 100), volumes, gaps, opportunities.
Save to `docs/competitors/[name]/keywords.md`.

### Step 5 — SEO/GEO audit
Check schema (Product, Organization, LocalBusiness, FAQPage, BreadcrumbList), 
llms.txt, robots.txt AI crawlers, content freshness, GEO signals.
Save to `docs/competitors/[name]/geo-audit.md`.

### Step 6 — AI visibility check (Aptos)
Run prompts in ChatGPT, Gemini, Perplexity, Claude:
- "best [product] in [geography]"
- "[product] for [concern] in [city]"
- "where to buy [product] online [country]"

Record brands cited, order, language, sources.
Save to `docs/competitors/ai-visibility.md`.

### Step 7 — Competitor Intelligence Report
Write `docs/competitors/REPORT.md` with:
- Competitors studied
- UI comparison table
- Content comparison table
- Keyword gap analysis (they rank/you don't, nobody ranks, long-tail)
- SEO/GEO audit table
- AI visibility (prompts, competitors, sources)
- Action brief:
  - UI improvements with reasons
  - Copy improvements
  - Keyword targets (primary, secondary, long-tail)
  - SEO/GEO improvements
  - Content calendar

## Rules
- Never copy competitor copy. Study structure, write original.
- Never download assets.
- Record findings with evidence.
- Prioritize by impact.
- Update monthly.

## Output
- docs/competitors/REPORT.md
- docs/competitors/[name]/ui/
- docs/competitors/[name]/content/
- docs/competitors/[name]/keywords.md
- docs/competitors/[name]/geo-audit.md
- docs/competitors/ai-visibility.md

## Run the Skill

For each competitor: capture UI, content, keywords, SEO/GEO, AI visibility.

## Handoff

The action brief feeds:
- Phase 4.2 (IA): UI improvements
- Phase 4.3 (Design system): spacing, components
- Phase 4.4 (Backend): schema additions
- Phase 4.5 (Emails): subject line patterns
- Phase 9 (Slices): content pieces

## Add to AGENTS.md

## Competitive Intelligence Rules
- Study competitors before building any store slice
- Never copy copy, design, or assets
- Extract structure, tokens, patterns for analysis
- Generate original decisions with distinctive move
- Run differential check before shipping
- Update competitor report monthly

## Keyword Strategy Rules
- Every product page: 1 primary + 3–5 secondary keywords
- Every blog post: keyword cluster
- Every page: Product or Organization schema
- Every product page: FAQPage schema for top 5 questions
- llms.txt exists and is current
- AI crawlers have access in robots.txt

## GEO Rules
- Front-load facts in first 30% (44.2% of ChatGPT citations)
- Definitive language
- Cite sources (+115% AI visibility)
- Include quotations (+30–40%)
- Match visible copy to schema
- Product, Organization, LocalBusiness, FAQPage schema
- Get mentions on Reddit, review sites, editorial
- Track AI visibility monthly via Aptos

## Competitor Tracking Rules
- competitor-radar runs weekly
- Similarweb monthly
- AI visibility biweekly
- Report updated monthly

Report findings. Update memory.

**STOP AND ASK** before Phase 2.70.

================================================================================
PHASE 2.70 — UI DESIGN TASTE
================================================================================

Install six skills:
- ux-ui-design-taste
- h3nryprod01/design-taste
- Leonxlnx/taste-skill
- plugin87/ux-ui-agent-skills
- DonkeyKing01/tasteful-ui-skill
- memi-design/design-skills

Add UI Taste Rules, Taste Audit Workflow, Anti-Slop Rules to AGENTS.md.

Update memory.

================================================================================
PHASE 2.70.5 — PRODUCT UX EVALUATION
================================================================================

npx skills add https://github.com/majiayu000/spellbook --skill product-ux-expert

Add UX Evaluation Rule to AGENTS.md. Update memory.

================================================================================
PHASE 2.71 — FACTORY HARDENING
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.71 — FACTORY HARDENING
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Installs quality-control layer: skill validation, agent memory, dependency 
firewall, cost control, gates, review loops.

WHAT I'LL INSTALL
- agentskills-ci
- memcrumbs
- dependency firewall workflow
- context-garden
- arize-ax
- code-review-and-quality
- converging-and-polishing
- spawning-reviewers
- qa-demo-stand
- comprehensive-testing
- documentation-authoring
- tech-writing-skills
- skill-hardening

OPTIONS
A. Install everything (recommended for long-term)
B. Install core only (skill CI, memory, firewall, gates)
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Install per choice. Create gates.md with 21 gates + project gates + 
multi-brand gates G22–G27. Update memory.

================================================================================
PHASE 2.72 — ARCHITECTURE
================================================================================

Install:
- tamir-agent-skills (system design)
- db-architect-skills
- api-skills (ecommerce, webhooks, platform-core)
- backendpro
- architecture-decision-records
- c4-skills
- application-performance-performance-optimization
- skill-observability-monitoring
- devops-ai-skill

Record ADRs from PROJECT.md §9. Add Architecture/Database/API Rules to 
AGENTS.md. Update memory.

================================================================================
PHASE 2.73 — GITHUB GOVERNANCE
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.73 — GITHUB GOVERNANCE
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Sets up branch protection, required reviews, CI pipeline, community health 
files.

WHAT I NEED
GitHub owner and repo name from PROJECT.md §1

OPTIONS
A. Full governance (recommended)
B. Minimal (branch protection + CI only)
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Install GitHub skills, agent-project-control, coding-rules. Configure. Update 
memory.

================================================================================
PHASE 2.74 — PRE-FLIGHT VERIFICATION
================================================================================

Install:
- claude-skill-prereq-audit
- gsd-health-check
- mcp-audit-skill
- agentic-preflight

Create scripts/preflight.sh. Run. Update memory.

================================================================================
PHASE 2.75 — AI SIDEKICK
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.75 — AI SIDEKICK
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Builds an AI assistant for the admin. Answers questions, executes tasks, 
verifies NAFDAC numbers, surfaces compliance issues.

WHAT I'LL INSTALL
- Vercel AI SDK
- Anthropic SDK
- 9jaCheckr SDK
- MCP server for admin tools
- Sidekick chat component
- Proactive insights cron

WHAT I NEED
- Anthropic API key
- 9jaCheckr API key

OPTIONS
A. I have the keys (paste them)
B. Show me how to get them
C. Skip Sidekick for now

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Build the Sidekick. Add rules to AGENTS.md. Update memory.

================================================================================
PHASE 2.7 — SUPERBOARD
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 2.7 — SUPERBOARD
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Sets up visual task board for tracking slices.

PREREQUISITE
Open a separate terminal.

READY?
A. Yes, run this
B. Explain Superboard first
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Start Superboard, create cards from PROJECT.md §10. Update memory.

================================================================================
PHASE 2.8 — VERIFY SKILL INSTALLS
================================================================================

Run verification across .agents/skills/, .agent/skills/, .claude/skills/.

Retry MISSING with --verbose. Remove failures.

Write report to docs/scope/skill-status.md.

Update memory.

================================================================================
PHASE 3 — BACKEND SETUP
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 3 — BACKEND SETUP
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Connects InsForge, configures backups, sets up business email domain.

WHAT I NEED
- InsForge project ID (from Phase 0.5)
- Domain registrar access

OPTIONS
A. Proceed
B. Skip DNS setup for now
C. Show me first

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Link InsForge. Set up MCP. Configure backups. Configure business email/DNS. 
Update memory.

================================================================================
PHASE 4 — DOCUMENTATION
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 4 — DOCUMENTATION
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Writes all documentation: brief, IA, two design systems, backend architecture, 
legal docs, PRD, slices, C4 diagrams.

WHAT I'LL CREATE
- docs/brief.md (includes competitive positioning)
- docs/ia/ (one file per page)
- docs/design/store/ (store design system)
- docs/design/admin/ (admin design system)
- docs/architecture/backend.md
- docs/emails/
- docs/legal/
- docs/architecture/c4/
- docs/adr/
- PRD.md and SLICES.md

This is a big phase. I'll show you each file.

OPTIONS
A. Write everything
B. Write in stages, pause for review
C. Skip documentation

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

## Phase 4 Structure

4.0 Client Info Gate — mark missing [PLACEHOLDER]
4.1 Write docs/brief.md — includes competitive positioning summary
4.2 Write IA Files — reads docs/competitors/REPORT.md for UI improvements
4.3 Write Dual Design Systems:
  - 4.3.1 Store design system (editorial reference)
  - 4.3.2 Admin design system (Linear + Stripe reference)
  - 4.3.3 Shared rules (separate namespaces, no shared components)
  - 4.3.4 Sync tokens to Paper
4.4 Write Backend Architecture — keyword strategy for routes
4.5 Write Email Templates — subject line patterns from REPORT.md
4.6 Write Legal Documentation — from COMPLIANCE-SURFACE.md
4.7 Write PRD.md + SLICES.md — content pieces from REPORT.md
4.8 Generate Diagrams + ADRs
4.9 Documentation Polish — documentation-authoring + tech-writing
4.10 Report

Store tokens:
Colors: bg #F4EFE6, bg-deep #2A3B26, surface #EAE4D8, surface-alt #DDE3D4, 
forest #3D5433, sage #9BA88C, bark #4A3D2E, gold #B89B5E, text #1F2A1C, 
text-muted #6B7361, text-inverse #F4EFE6, overlay rgba(20,28,18,0.72)
Typography: serif headings weight 400, sans body, uppercase labels +0.12em
Spacing: section 80/128, block 48/72, max-width 1280
Components: text+arrow buttons, no-border cards, small uppercase filters, 
data overlays

Admin tokens:
Colors: bg #FAFAFA, bg-dark #0F0F0F, surface #FFFFFF, surface-dark #1A1A1A, 
border #E5E5E5, text #0A0A0A, text-muted #737373, accent #3D5433
Status: success #16A34A, warning #CA8A04, error #DC2626, info #0284C7, 
pending #F59E0B
Compliance: registered #16A34A, pending #F59E0B, unregistered #DC2626
Typography: sans only, weight 600 headings, 14px body, 11px labels +0.05em
Sizing: base 14px, row 44px, input 36px, button 32/40px, sidebar 240px
Layout: sidebar fixed, top bar, full-width content, 12-column grid
Motion: 100ms fast / 200ms base, ease-out

Update memory.

================================================================================
PHASE 5 — DATABASE SCHEMA
================================================================================

```
═══════════════════════════════════════════════════════════════
PHASE 5 — DATABASE SCHEMA
═══════════════════════════════════════════════════════════════

WHAT THIS PHASE DOES
Creates database tables for products, orders, customers, subscribers, 
compliance, sidekick.

WHAT I'LL CREATE
Tables from PROJECT.md §13 + multi-brand additions:
- users, products, product_variants, orders, order_items
- reviews, blog_posts, popups, content, addresses, contact_submissions
- webhook_events, subscribers
- sidekick_insights, sidekick_audit

Multi-brand additions:
ALTER TABLE products ADD COLUMN brand_type, brand_name, nafdac_number, 
nafdac_verified_at, nafdac_verification_url, supplier_authorisation_url, 
supplier_name, cost_price, compliance_status, compliance_notes

RLS: registered products in public shop; pending as Notify Me; unregistered 
hidden.

⚠ THIS CHANGES YOUR DATABASE.

OPTIONS
A. Create tables
B. Show me the schema first
C. Skip this phase

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

Run database-design audit before creating. Update memory.

================================================================================
PHASE 6 — FACTORY TECH LEAD
================================================================================

Create factory_tech_lead.py with developer_agent, qa_agent, tech_lead.

Developer: full-stack, Ponytail, Superpowers, dual design tokens, backend 
architecture, multi-brand compliance gating, design-taste, Design Read, dials.

QA: skeptical, independent, per-product compliance verification, NAFDAC 
validation, supplier authorisation, phase gating, security + a11y + performance, 
holdout tests, adversarial validation, Build Check (store + admin), taste 
audits, UX evaluation, code review, converging.

Update memory.

================================================================================
PHASE 7 — AGENTS.md
================================================================================

Append all rules sections:
- Dual Design System Rule
- Multi-Brand Compliance Rule
- Two-Phase Rule
- Design Reference Rule
- Photography Generation Rule
- Paper.design Rules + Limitations
- REA Rules + Reference Study Rules
- Competitive Intelligence Rules + Keyword Strategy Rules + GEO Rules + 
  Competitor Tracking Rules
- Brand Identity Rules + Brand Designer Skill Rules
- UI Taste Rules + Taste Audit Workflow + Anti-Slop Rules
- UX Evaluation Rule
- Discovery Rules + Architecture Guardrails Rule
- Code Review Rules + Documentation Rules + Skill Hardening Rule
- Approval Gate Rules
- AI Sidekick Rules + Sidekick Tool Permissions
- Factory Workflow
- IA Reference Rule
- Design System Rule
- Backend Architecture Rule
- Architecture Rules + Database Rules + API Rules
- GitHub Governance Rules + GitHub MCP Rules
- Pre-Flight Verification Rules
- Compliance Rules
- Placeholder Rule
- Superpowers Discipline
- Ponytail Mode
- Library Documentation
- Domain Skills
- Quality & Security Skills
- Skill Boundaries
- Superboard Sync
- Product Variants
- Backup Policy
- Factory Correctness
- Pre-Flight Gate
- Skill CI Rule
- Memory Rule
- Context Pruning Rule
- Gate Rule
- Helical Pipeline Rule

Update memory.

================================================================================
PHASE 8 — SCAFFOLD
================================================================================

npx create-next-app@latest <project> --typescript --tailwind --app --eslint
npm install @insforge/sdk resend @react-email/components react-email @serwist/next
npm install ai @ai-sdk/anthropic zod @9jacheckr/sdk

Add payment SDK if applicable.

.env.local with NEXT_PUBLIC_SITE_PHASE=prelaunch.

Folders:
app/ (store)/, app/(admin)/, app/api/
components/store/ui/, components/admin/ui/, components/shared/
lib/design/store.ts, lib/design/admin.ts, lib/compliance.ts
docs/design/store/, docs/design/admin/, docs/design/references/
docs/references/, docs/competitors/, docs/architecture/c4/, docs/adr/
docs/compliance/, docs/scope/, docs/quality-skills/, docs/domain-skills/
docs/legal/, docs/runbook/, docs/factory/
public/source/, public/images/, public/brand/
.agents/skills/, .taste-skills/, .agent/

Update memory.

================================================================================
PHASE 9 — RUN /scope
================================================================================

Use /scope to turn docs/brief.md + PRD.md + SLICES.md + 
docs/competitors/REPORT.md into docs/scope/.

The scope includes:
- Content pieces scheduled from action brief
- Keyword targets per slice
- Schema requirements per page
- GEO signals per page

Update memory.

**STOP AND ASK** to approve.

================================================================================
PHASE 10 — BUILD PHASE 1
================================================================================

For each slice:

```
═══════════════════════════════════════════════════════════════
SLICE [N] of [M] — [Slice Name]
═══════════════════════════════════════════════════════════════

WHAT THIS SLICE DELIVERS
[2–3 sentences]

FILES TO CREATE
- [file 1]

DEPENDENCIES
[what must exist first]

TIME ESTIMATE
[X hours]

PLAN
1. [Step 1]
2. [Step 2]

ACCEPTANCE CRITERIA
- [Criterion]

OPTIONS
A. Approve and build
B. Modify the plan
C. Skip this slice

YOUR DECISION?
═══════════════════════════════════════════════════════════════
```

## Per Slice Workflow

1. /architect reads IA + design system + brand + architecture + ADRs + 
   compliance surface + reference translation + competitor report
2. Write spec. STOP AND ASK.
3. Delegate to developer_agent. Enforce architecture-guardrails.
4. Fresh QA session verifies.
5. code-review-and-quality + converging-and-polishing
6. product-ux-expert evaluation
7. taste audit
8. Build Check against reference (store or admin)
9. Fix loop
10. /document and /sync

## Visual Design Review

Store slice:
- Use docs/design/store/reference-spec.md + reference screenshots

Admin slice:
- Use docs/design/admin/reference-spec.md + Linear/Stripe screenshots

## Build Check

Store:
1. Section rhythm (80/128)
2. Cards (no borders, muted bg, no buttons in grid)
3. Typography (editorial serif, small uppercase labels)
4. Colour (warm cream, muted sage)
5. CTAs (text-with-arrow)

Admin:
1. Density (44px rows, 14px base, 16px padding)
2. Sidebar fixed 240px
3. Tables full-width, keyboard navigable
4. Status badges with dots
5. Compliance colors
6. Dark mode toggle
7. Cmd+K palette
8. No editorial serif
9. No decorative animation
10. Every list has bulk actions

After each slice:

```
✓ SLICE [N] COMPLETE

WHAT WAS BUILT
- [file 1]

QA RESULT
✓ Passed

CODE REVIEW
✓ Converged after [N] rounds

MEMORY UPDATED

NEXT: Slice [N+1]

READY?
A. Continue
B. Review first
C. Rebuild

YOUR DECISION?
```

Update memory after every slice.

================================================================================
PHASE 10.5 — SELF-HEALING PIPELINE
================================================================================

Install Sentry, super-board, fixloop-agent (optional), babysit-pr.

Wire .github/workflows/sentry-to-issue.yml and autofix-pipeline.yml.

Run qa-demo-stand before Phase 11.

Update memory.

================================================================================
PHASE 11 — BUILD PHASE 2 (if Category C)
================================================================================

If A or B: skip. Note "single phase — no Phase 2".

If C: DO NOT START until PROJECT.md §14 trigger confirmed.

When confirmed:
1. Update env: NEXT_PUBLIC_SITE_PHASE=live
2. Activate live branch
3. Deploy

Build Phase 2 slices. Full review per slice.

Update memory.

================================================================================
PHASE 12 — MCP BRIDGE
================================================================================

npm install -g antigravity-mcp
claude mcp add --scope user antigravity -- npx -y antigravity-mcp
claude mcp list

Update memory.

================================================================================
PHASE 13 — SELF-HEALING CYCLE
================================================================================

Create .auto-fix.yaml with project config, signal, orchestration, agent, 
verification, retry.

Add to .gitignore.

Update memory.

================================================================================
PHASE 14 — DOMAIN SKILL ACTIVATION
================================================================================

Create docs/domain-skills/ with configs from PROJECT.md §6.

Update memory.

================================================================================
PHASE 15 — QUALITY & SECURITY ACTIVATION
================================================================================

Create docs/quality-skills/ with security.md, accessibility.md, performance.md, 
seo.md, cro.md, payment.md, compliance.md, brand-safety.md.

Update memory.

================================================================================
PHASE 16 — LEGAL ACTIVATION
================================================================================

Create docs/legal/ from COMPLIANCE-SURFACE.md.

Update memory.

================================================================================
PHASE 17 — OPERATIONAL DOCUMENTATION
================================================================================

Create docs/runbook/:
- deploy.md, incident.md, backup-restore.md
- admin-guide.md, content-guide.md
- phase-flip.md (if C)
- product-onboarding.md (multi-brand)
- compliance-audit.md (multi-brand)
- nafdac-verification.md (multi-brand)
- supplier-authorisation.md (multi-brand)
- sidekick-guide.md

Also docs/factory/runbook.md, docs/factory/self-improvement.md.

Update memory.

================================================================================
PHASE 18 — GO/NO-GO AND FINAL REPORT
================================================================================

18.1 Pre-Launch Checklist:

Standard:
- InsForge linked, tables, RLS
- Superboard cards
- Paper.design connected
- Brand identity reworked
- PRD.md and SLICES.md generated
- Reference study complete with differential check passed
- Competitive intelligence report complete
- Architecture guardrails enforced
- Skill CI passing
- Memory wiki created
- Dependency firewall active
- ADRs recorded (including reference and competitive ADRs)
- C4 diagrams generated
- GitHub branch protection active, CODEOWNERS, CI pipeline, code review, 
  merge queue
- Pre-flight verification passing
- Phase 1 slices built and QA'd
- UX evaluation passed
- Code review converged
- All gates passed
- Deployed to production
- Domain points to Vercel
- Compliance caveats on required pages
- Cookie consent banner shows
- a11y-ally, vercel-optimize, web-app-security-skill pass
- Build Check passes (store + admin)
- taste-audit passes

Competitive Intelligence:
- Competitor report complete
- Keyword strategy documented per page
- Schema deployed (Product, Organization, LocalBusiness, FAQPage)
- llms.txt created and current
- AI crawlers allowed
- GEO signals present
- AI visibility baseline captured
- First month's content calendar ready

Multi-brand:
- Every product has compliance_status
- No unregistered products visible
- Every registered product has NAFDAC number + verification screenshot
- Every third-party product has supplier authorisation
- Shop filters by compliance status
- Product page displays NAFDAC number + Greenbook link
- Admin save gate prevents listing without required fields
- Compliance summary in admin dashboard

AI Sidekick:
- Vercel AI SDK, 9jaCheckr SDK installed
- MCP server with tools
- Sidekick chat component
- Sidekick server route
- Proactive insights cron
- Sidekick visible on every admin page
- Tool permissions enforced
- Audit log active

18.2 Phase 2 Readiness (C only):
- Phase 2 trigger confirmed
- Payment live keys
- Products active and registered
- Variants finalized
- Shipping policy finalized
- Refund policy live
- Cookie consent working
- Legal review complete

18.3 Final Report:

Report:
- Category (A / B / C)
- Phase count
- Mode (single-brand / multi-brand)
- Phase 1 Status
- Phase 2 Status
- Factory Layer
- Discovery Layer
- Reference Study Layer (analyses, translations, differential)
- Competitive Intelligence Status (competitors studied, keyword gaps, 
  content pieces scheduled, schema deployed, llms.txt, AI visibility baseline)
- Domain Skills Layer
- Quality & Security Layer
- Legal Layer
- Operational Layer
- Self-Healing Layer
- Design Reference Status (store + admin)
- Brand Assets Status
- UX Evaluation Status
- Code Review Status
- Documentation Status
- Factory Hardening Status
- Architecture Status
- GitHub Governance Status
- Pre-Flight Verification Status
- AI Sidekick Status
- Multi-Brand Compliance Status (total, registered, pending, unregistered, 
  verified screenshots, supplier authorisations)
- Cost Report
- Gate Report
- Remaining Gaps

Update memory with status: "complete".

Then STOP. System complete.

================================================================================
START NOW
================================================================================

Check `.factory/state.json`.

If missing: create it. Begin Phase 0.4.

If present: read it. Present the FACTORY MEMORY LOADED block. Wait for user 
choice.

Pause at every **STOP AND ASK**.