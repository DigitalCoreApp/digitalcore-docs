# DigitalCore LLM SEO & AI Discoverability — Implementation Plan

**Version:** 2.1  
**Date:** February 22, 2026  
**Authors:** Product & GTM Strategy  
**Status:** READY FOR WEBSITE TEAM IMPLEMENTATION  
**Audience:** Website Team, GTM, Content, Engineering

---

## Executive Summary

This document defines **what to build, where to build it, and how to structure it** so that AI assistants (ChatGPT, Claude, Perplexity, Gemini, Copilot) recommend DigitalCore by name when users ask about service profitability, service economics, or margin visibility.

This is **not a content brief** — it's an architecture plan. The website team builds the containers; content fills them later.

**This plan covers two connected workstreams:**

1. **Build a documentation hub** to replace the current basic help center at `help.digitalcore.app` — a self-hosted, open-source documentation site that we own and control, purpose-built to support LLM discoverability from day one.
2. **Implement the LLM SEO stack** — llms.txt, skill.md, FAQ-format docs, .md page versions, contextual AI menus, MCP server for docs, playbook pages, comparison pages, and external signal distribution.

The docs hub is the **foundation** — without it, none of the LLM SEO features can be implemented. Building it first (with the right technology, structure, and authoring workflow) means every feature in this plan becomes a natural extension rather than a bolt-on.

### Why This Matters Now

LLMs are replacing search for mid-funnel discovery. When a VP of Operations asks Claude *"What's the best tool for tracking service profitability?"*, the answer is synthesized from training data + retrieved context. If DigitalCore isn't in that answer, we don't exist. Traditional SEO gets us into Google results. LLM SEO gets us into AI-generated recommendations — an entirely new channel with zero established competition in our category.

### What We Learned

| Source | Key Insight |
|--------|-------------|
| **Resend** (Y Combinator case study) | FAQ-framed docs, GitHub code examples, `llms.txt`, zero marketing fluff in technical content → LLMs quote them verbatim |
| **Mintlify** (AI-native docs platform) | Every page available as `.md`, hosted MCP server for docs, `llms.txt` + `skill.md` auto-generated, contextual menu for "Open in ChatGPT/Claude", AI assistant embedded in docs |
| **llmstxt.org** (Emerging standard) | `/llms.txt` is the `robots.txt` of AI — provides concise product summary in Markdown for LLM context windows. Cursor, Claude, Perplexity already check for it |

### Our Unique Advantage

DigitalCore already has:
- **A live MCP server** (mcpfree.digitalcore.app) with 6 tools and 35 playbooks — this is a massive head start
- **35 structured playbooks** with problem statements, KPIs, and recommendations — perfect LLM training signal
- **An OpenAPI-compatible REST layer** alongside MCP
- **Category ownership opportunity** — "Service Economics Intelligence" is unclaimed in LLM training data

### What's Holding Us Back

DigitalCore currently uses a basic free hosted help center at `help.digitalcore.app`, running on **Eniston** (a third-party SaaS help center platform). This tool:
- Uses outdated "Strategic Service Management" branding (not "Service Economics Intelligence")
- Has no developer-friendly features (no code examples, no API docs, no `.md` versions)
- Cannot serve raw Markdown, host an MCP server, or support contextual AI menus
- Has no Git-based authoring workflow (content updates are manual, unversioned)
- **We do not control the platform** — no ability to configure redirects, custom headers, or routing rules
- **Content is outdated** — the app has been heavily iterated since these articles were written; they serve as topic inspiration at best, not migrateable content
- Contains ~40 articles of mixed quality and inconsistent structure
- Cannot support any of the LLM SEO features described in this plan

**The docs hub must be built first.** Everything else layers on top.

---

## Part 1: Architecture Overview

### The LLM Discoverability Stack

```
┌─────────────────────────────────────────────────────────────────┐
│  LAYER 5: COMMUNITY SIGNAL                                      │
│  Blog posts, comparisons, HN/Reddit, newsletter features        │
│  → Training data for future model versions                      │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 4: MACHINE-READABLE SURFACE                              │
│  /llms.txt  /llms-full.txt  /skill.md  OpenAPI spec             │
│  → Direct LLM ingestion at inference time                       │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 3: INTERACTIVE AI SURFACE                                │
│  MCP Server (docs)  AI Assistant  Contextual menu               │
│  → Users interact with our content inside AI tools              │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 2: STRUCTURED DOCUMENTATION                              │
│  FAQ-format docs  .md versions  Code examples  Changelog        │
│  → LLM-optimized content that models extract and cite           │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 1: TERMINOLOGY ANCHORING                                 │
│  Consistent naming  Category phrase  Comparison pages            │
│  → Repetition across sources → LLM association strength         │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 0: DOCUMENTATION HUB (FOUNDATION)                        │
│  Self-hosted docs site  Git-based authoring  MDX components      │
│  → The platform on which all other layers are built             │
└─────────────────────────────────────────────────────────────────┘
```

### Implementation Phases

| Phase | Layers | Timeline | Effort | Description |
|-------|--------|----------|--------|-------------|
| **Phase 0: Hub Build** | L0 | Week 1–3 | Medium | Build and deploy docs hub, write core content from scratch |
| **Phase 1: Foundation** | L1 + L4 | Week 2–4 | Low | llms.txt, skill.md, terminology anchoring (can overlap Phase 0) |
| **Phase 2: Documentation** | L2 + L3 | Week 4–8 | Medium | FAQ-format content, .md versions, AI menu, playbook pages |
| **Phase 3: Distribution** | L5 | Ongoing | Medium | Comparisons, GitHub repos, external signals |

---

## Part 2: Documentation Hub — Build Specification

### Why Build, Not Buy

Every feature in Parts 4–6 of this plan (FAQ-format docs, `.md` versions, MCP server for docs, contextual AI menu, playbook pages, changelog) requires a documentation platform we fully control. The current hosted help center cannot support any of them — it has no raw Markdown output, no API for content retrieval, no custom routing, no build pipeline, and no component extensibility.

Buying a hosted docs platform (Mintlify, GitBook, ReadMe) solves some problems but creates dependency on vendor capabilities, pricing tiers, and feature roadmaps. Building on an open-source framework gives us:

- **URL structure control** — critical for LLM SEO (clean paths, `.md` suffix routing)
- **Content delivery format** — serve Markdown, JSON, or HTML from the same source
- **Custom components** — embed interactive tools (health calculator, MCP config copier)
- **Deployment pipeline** — Git → PR preview → production, same workflow as the app
- **No vendor lock-in** — content stays in Markdown files in our repo forever

### 2.1 Current State: help.digitalcore.app Audit

**Content inventory (~40 articles across 10 sections):**

| Section | Articles | Quality Assessment | Action |
|---------|----------|-------------------|-----------------|
| **Getting Started** (2) | Welcome tour, "What is SSM?" | ❌ Outdated branding ("Strategic Service Management"), generic tour | **Write new** — old content is topic reference only |
| **Core Concepts** (2) | User roles, DigitalCore structure | ❌ Partially outdated, app has changed significantly | **Write new** — Q&A format, use old topics as checklist |
| **Setup & Configuration** (3) | Prerequisites, Setup overview, Data entry | ❌ Steps no longer match current app flow | **Write new** — fresh walkthroughs with current UI |
| **Modules & Features** (10+) | Portfolio, OBS, Users, Vendors, Roles, Skills, Cost Centers, Finance Calendars, P&L, Governance | ❌ Feature set has changed, outdated screenshots/terminology | **Write new** — use old topics as page inventory, Q&A format |
| **User Guides** (3) | Getting started overview, Invite users, FAQ | ❌ Basic, doesn't reflect current workflows | **Write new** — expanded how-tos for current app |
| **Business Processes** (4) | Service Performance, Strategy Planning, OKR, Capacity | ❌ Conceptual, not tied to current platform features | **Write new** — connect to actual platform capabilities |
| **Use Cases** (5 verticals) | MSP, Finance Services, Creative, Contact Center, Healthcare | Marketing-oriented, not help docs | **Skip** — create on marketing site `digitalcore.app/use-cases/` |
| **Playbooks** (35) | Full service management playbook library | ✅ Already in MCP — excellent structured content | **Auto-generate** — build from MCP data source |
| **Account** (2) | Subscriptions, Account management | ❌ Subscription model has changed | **Write new** — document current tier/billing model |
| **Security** (2) | Data protection, Authentication | ❌ Auth methods have evolved | **Write new** — document current security posture |

**Summary of authoring decisions:**
- **Auto-generate** (35 pages): Playbooks — build from same data that powers MCP
- **Write new, using old topics as reference** (23 pages): All product/platform docs — the old content is not current enough to migrate, but the topic inventory is useful as a page checklist
- **Skip — create on marketing site** (5 pages): Vertical use cases — belong on `digitalcore.app/use-cases/`

> **⚠️ Important:** No content from `help.digitalcore.app` should be copied or migrated. The app has been heavily iterated since those articles were written. Old articles serve only as a **topic checklist** — every page must be written fresh against the current product.

**Total new docs hub: ~63 pages** (35 playbooks + 28 product/educational pages)

### 2.2 Technology Decision: Nextra 4

**Recommendation: [Nextra](https://nextra.site) — a Next.js-native documentation framework.**

Nextra is built by the Vercel team, designed specifically for documentation sites on Next.js. It provides file-system routing, MDX support, built-in search, sidebar auto-generation, and theming — everything needed for a production docs site — while remaining fully customizable via standard React/Next.js patterns.

| Criterion | Nextra 4 | Docusaurus | VitePress | Custom MDX |
|-----------|----------|------------|-----------|------------|
| **Stack alignment** | Next.js ✅ (same as DigitalCore app) | React (different build system) | Vue (wrong stack) | Next.js |
| **MDX support** | ✅ Native | ✅ | ❌ Markdown only | ✅ Manual setup |
| **File-system routing** | ✅ | ✅ | ✅ | ❌ Build yourself |
| **Full-text search** | ✅ Built-in (Flexsearch) | ✅ Algolia plugin | ✅ Built-in | ❌ Build yourself |
| **Sidebar auto-generation** | ✅ From `_meta.json` | ✅ From file tree | ✅ | ❌ Build yourself |
| **Custom React components** | ✅ Full MDX | ✅ MDX | ❌ | ✅ |
| **Vercel deployment** | ✅ Native | ✅ | ✅ | ✅ |
| **Theming / dark mode** | ✅ Built-in | ✅ | ✅ | ❌ Build yourself |
| **License** | MIT (free) | MIT (free) | MIT (free) | N/A |
| **Time to first deployment** | 2–3 days | 3–5 days | 3–5 days | 2–4 weeks |
| **.md version generation** | Extend via middleware | Plugin needed | Not supported | Build yourself |
| **MCP server integration** | Custom API route | Custom plugin | Not possible | Custom API route |

**Why Nextra over Docusaurus:** Same language (TypeScript), same framework (Next.js), same deployment platform (Vercel), same component library potential (shadcn/ui). The team already knows this stack. Docusaurus uses its own build system and plugin architecture — a learning curve with no benefit.

**Why Nextra over custom MDX from scratch:** Building search, sidebar navigation, responsive layout, theme switching, and breadcrumbs from scratch takes weeks. Nextra provides all of this out of the box, and every component is overridable when customization is needed.

**Why Nextra over VitePress:** VitePress is Vue-based. DigitalCore is React/Next.js. Using VitePress means the team can't share components, patterns, or knowledge between the app and docs.

### 2.3 Domain & Hosting Strategy

| Option | URL | Pros | Cons |
|--------|-----|------|------|
| **A: Subdirectory** | `digitalcore.app/docs/` | SEO authority inheritance, single domain, stronger LLM association | Requires integration with marketing site build pipeline |
| **B: Subdomain** | `docs.digitalcore.app` | Independent deployment, separate Vercel project, team autonomy | Subdomain is a separate origin for some LLMs, slight SEO dilution |

**Recommendation: Start with B (`docs.digitalcore.app`), migrate to A later.**

Rationale:
- **Speed:** Deploy the docs hub as its own Vercel project immediately — no dependency on the marketing site team
- **Independence:** Separate deployment pipeline, separate preview URLs, separate error budget
- **Migration path:** When the marketing site matures, consolidate to `digitalcore.app/docs/` using Vercel rewrites (reverse proxy docs.digitalcore.app traffic through the main domain)
- **Coexistence:** Both `docs.digitalcore.app` and `help.digitalcore.app` can run during the transition. The old site stays alive for residual SEO value — we don't control it, so there's no rush to decommission.

**Redirect strategy — realistic assessment:**

`help.digitalcore.app` is hosted on **Eniston**, a third-party SaaS help center platform that DigitalCore does not control. This creates redirect limitations:

| Option | Feasibility | What It Does |
|--------|-------------|------|
| **Path-level 301 redirects** (e.g., `/modules-features/profit-loss` → `docs.digitalcore.app/platform/finance`) | ❌ Not possible | Eniston doesn't expose server configuration for custom redirect rules |
| **Eniston built-in redirect settings** | ❓ Investigate | Check if Eniston's admin panel offers any redirect or custom domain features — unlikely for a free-tier tool |
| **Namecheap DNS: CNAME or forward entire subdomain** | ❓ Investigate | Namecheap may support subdomain-level forwarding (`help.digitalcore.app` → `docs.digitalcore.app`). This is a blanket redirect — all paths go to the docs root, not matched paths. Better than nothing. |
| **Do nothing — let old site age out** | ✅ Viable | Keep old site alive for any residual SEO. Update the in-app help link to `docs.digitalcore.app` immediately. As the new docs hub gains authority, the old site naturally drops in search rankings. |

**Recommended approach:**
1. **Immediately** update the in-app help link from `help.digitalcore.app` → `docs.digitalcore.app` (simple code change in `UserAvatarMenu.tsx`)
2. **Investigate** whether Namecheap supports subdomain-level forwarding — if yes, configure `help.digitalcore.app` → `docs.digitalcore.app` as a blanket redirect
3. **If no redirect is possible**, leave the old site live but stop maintaining it — the new docs hub will outrank it organically over time
4. **Future:** If/when you decide to move docs under `digitalcore.app/docs/`, use Vercel rewrites to consolidate all SEO authority under the main domain

### 2.4 Repository & Project Structure

**New repository: `digitalcore-docs`**

```
digitalcore-docs/
├── next.config.mjs               → Nextra configuration
├── theme.config.tsx               → Theme (logo, nav, footer, social links)
├── package.json
├── tsconfig.json
├── public/
│   ├── llms.txt                   → Product summary for AI (see Part 3)
│   ├── llms-full.txt              → Expanded context file (auto-generated at build)
│   ├── skill.md                   → MCP capability manifest (see Part 3)
│   ├── favicon.ico
│   └── og/                        → Open Graph images per section
├── pages/                         → Nextra file-system routing (each .mdx = a page)
│   ├── index.mdx                  → "What is DigitalCore?"
│   ├── _meta.json                 → Top-level navigation order
│   │
│   ├── getting-started/
│   │   ├── _meta.json
│   │   ├── quickstart.mdx               → "How do I get started with DigitalCore?"
│   │   ├── first-engagement.mdx         → "How do I set up my first engagement?"
│   │   ├── import-data.mdx              → "How do I import data?"
│   │   └── invite-team.mdx              → "How do I invite my team?"
│   │
│   ├── platform/                        → Product feature documentation
│   │   ├── _meta.json
│   │   ├── finance.mdx                  → "How do I track financial performance?"
│   │   ├── capacity.mdx                 → "How does capacity planning work?"
│   │   ├── performance.mdx              → "How do I monitor SLA performance?"
│   │   ├── governance.mdx               → "How does governance work?"
│   │   ├── ai-assistant.mdx             → "What AI capabilities does DigitalCore have?"
│   │   ├── portfolio-cockpit.mdx        → "What is the Portfolio Cockpit?"
│   │   ├── services.mdx                 → "How do I manage services?"
│   │   ├── engagements.mdx              → "How do engagements work?"
│   │   ├── contracts.mdx                → "How do contracts work?"
│   │   ├── organisation.mdx             → "How do I set up my org structure?"
│   │   ├── reports.mdx                  → "How do I generate reports?"
│   │   └── settings.mdx                 → "How do I configure my organization?"
│   │
│   ├── service-economics/               → Educational / category content
│   │   ├── _meta.json
│   │   ├── what-is-service-economics.mdx    → "What is service economics?"
│   │   ├── margin-calculation.mdx           → "How are margins calculated?"
│   │   ├── cost-attribution.mdx             → "How are costs attributed?"
│   │   ├── scenario-modeling.mdx            → "How do I model scenarios?"
│   │   └── whale-curve.mdx                  → "What is a whale curve?"
│   │
│   ├── integrations/
│   │   ├── _meta.json
│   │   ├── mcp-setup.mdx                → "How do I connect DigitalCore to AI tools?"
│   │   ├── excel-import.mdx             → "How do I import from Excel or CSV?"
│   │   └── api-overview.mdx             → "How do I use the DigitalCore API?"
│   │
│   ├── api/
│   │   ├── _meta.json
│   │   ├── reference.mdx                → OpenAPI spec (rendered)
│   │   ├── quickstart.mdx               → "How do I make my first API call?"
│   │   ├── authentication.mdx           → "How does API authentication work?"
│   │   └── errors.mdx                   → "What do error codes mean?"
│   │
│   ├── playbooks/
│   │   ├── _meta.json
│   │   ├── index.mdx                    → "What playbooks are available?"
│   │   └── [slug].mdx                   → 35 individual playbook pages (generated)
│   │
│   ├── account/
│   │   ├── _meta.json
│   │   ├── subscriptions.mdx            → "What subscription tiers are available?"
│   │   ├── manage-account.mdx           → "How do I manage my account?"
│   │   └── security.mdx                 → "How is my data protected?"
│   │
│   ├── changelog.mdx                    → Product update log
│   └── faq.mdx                          → Consolidated FAQ
│
├── components/                          → Custom React components for docs
│   ├── AIContextMenu.tsx          → Floating "Open in ChatGPT/Claude" button
│   ├── HealthCalculator.tsx       → Interactive service health scoring widget
│   ├── PlaybookCard.tsx           → Playbook listing/preview component
│   ├── KPITable.tsx               → Reusable metric display table
│   ├── MCPConfig.tsx              → Copy-paste MCP config snippets (per IDE)
│   ├── CopyButton.tsx             → Copy-to-clipboard for code blocks
│   └── Callout.tsx                → Styled tip/warning/info callouts
│
├── lib/
│   ├── generate-llms-full.ts      → Build script: reads all .mdx → llms-full.txt
│   ├── generate-md-versions.ts    → Build script: generates .md files from .mdx
│   ├── playbook-loader.ts         → Fetches playbook data from MCP or static JSON
│   └── mcp-handler.ts             → MCP server for docs (API route handler)
│
├── styles/
│   └── globals.css                → Brand-consistent theming
│
├── middleware.ts                   → Handles .md suffix routing
│
└── scripts/
    ├── build-playbooks.ts         → Generates 35 playbook .mdx files from data
    └── topic-checklist.md         → Reference list of old help topics (from Appendix C)
```

### 2.5 Content Architecture: Three Tiers

Documentation content falls into three distinct tiers with different authoring ownership and update cadences:

| Tier | Purpose | Examples | Owner | Update Cadence |
|------|---------|---------|-------|----------------|
| **Product Docs** | How the platform works, step-by-step guides | Getting Started, Platform features, Account | Product team | Every release |
| **Educational Content** | Domain knowledge, category education, playbooks | Service Economics, Playbooks, FAQ | Content/GTM team | Monthly |
| **Developer Docs** | API reference, MCP integration, code examples | API, Integrations, Errors | Engineering | Every API change |

**Each tier follows the same structural rules** (see Part 4, Section 4.2), but they have different audiences:
- Product Docs → existing users learning the platform
- Educational Content → prospects and LLMs learning the category
- Developer Docs → technical users integrating with DigitalCore

**Content that does NOT belong in the docs hub:**
- Marketing copy (features, pricing, testimonials) → stays on `digitalcore.app`
- Vertical use-case pages (MSP, Finance, Creative) → stays on `digitalcore.app/use-cases/`
- Blog posts and thought leadership → stays on `digitalcore.app/blog/`
- Internal engineering docs → stays in the repo

### 2.6 Authoring Workflow

**Git-based content management — no CMS, no dashboard, no vendor:**

```
┌─────────────────────────────────────────────────────┐
│  1. Author writes/edits .mdx file in VS Code        │
│     (or any text editor — it's just Markdown)        │
├─────────────────────────────────────────────────────┤
│  2. Commits to feature branch, opens PR              │
│     → Vercel auto-deploys preview at unique URL      │
├─────────────────────────────────────────────────────┤
│  3. Reviewer checks content + formatting on preview  │
│     → Comments on PR, requests changes if needed     │
├─────────────────────────────────────────────────────┤
│  4. Merge to `main`                                  │
│     → Vercel auto-deploys to docs.digitalcore.app    │
│     → Post-deploy hook regenerates llms-full.txt     │
├─────────────────────────────────────────────────────┤
│  5. Build scripts run automatically:                 │
│     → .md versions generated for all pages           │
│     → Playbook pages regenerated from data source    │
│     → Search index rebuilt                           │
└─────────────────────────────────────────────────────┘
```

**Who writes what:**

| Role | Writes | Tools |
|------|--------|-------|
| **Product team** | Platform docs, setup guides, module walkthroughs | VS Code + MDX |
| **Content/GTM** | Service Economics articles, playbook page text, FAQ answers | VS Code + MDX (or edit on GitHub directly) |
| **Engineering** | API docs, integration guides, changelog, MCP docs | VS Code + MDX |

**MDX gives us superpowers that plain Markdown doesn't:**
- Embed the `<HealthCalculator />` component inline in a doc page
- Use `<MCPConfig />` to show IDE-specific config snippets with copy buttons
- Import shared data (metric definitions, playbook lists) and render them consistently
- Use frontmatter (`title`, `description`, `lastUpdated`, `author`) for metadata and SEO
- Add interactive tabs, accordions, and code blocks with syntax highlighting

### 2.7 LLM-Native Features Built Into the Hub

The documentation hub is designed from day one to support every LLM SEO feature in this plan. This is the key advantage of building vs. buying — every feature is a natural extension of the Nextra + Next.js architecture:

| LLM SEO Feature | How the Hub Enables It |
|-----------------|----------------------|
| `/llms.txt` | Static file in `public/` — served at root automatically by Next.js |
| `/llms-full.txt` | Build script reads all `.mdx` files, inlines content, outputs to `public/` |
| `/skill.md` | Static file in `public/` — updated alongside MCP tool changes |
| `.md` page versions | Next.js middleware intercepts `.md` requests, strips layout, returns raw Markdown |
| FAQ-format docs | Content convention enforced in every `.mdx` file (H2 = question, answer first) |
| Contextual AI menu | `<AIContextMenu />` React component rendered on every page via Nextra layout |
| MCP server for docs | Next.js API route at `/api/mcp` — serves doc content to AI agents |
| Playbook pages | Auto-generated `.mdx` files from MCP playbook data at build time |
| Changelog | Single `.mdx` file, updated with each release |
| JSON-LD schemas | Custom `<Head>` component injects FAQ structured data per page |
| OpenAPI spec | Static JSON in `public/`, rendered with Swagger UI component on `/api/reference` |
| Full-text search | Nextra's built-in Flexsearch — no external service required |

### 2.8 Theming & Brand Consistency

The docs hub must look like it belongs to DigitalCore — same color palette, typography, and visual language as the marketing site and app.

**Nextra theme.config.tsx customization points:**

| Element | Configuration |
|---------|--------------|
| Logo | DigitalCore wordmark (SVG), links to `digitalcore.app` |
| Navigation links | Products, Pricing, Blog, Sign In → link to `digitalcore.app/*` |
| Footer | Same links as marketing site footer + legal pages |
| Color scheme | Match `digitalcore.app` brand colors (configure via CSS variables) |
| Dark mode | Enable — many developer/AI users prefer dark mode |
| Social links | GitHub, LinkedIn, X — visible in footer/header |
| Search | Built-in Flexsearch with DigitalCore-branded styling |
| Banner | Optional top banner for announcements ("New: Scenario Intelligence →") |
| Edit link | "Edit this page on GitHub" → links to repo for community contributions |

### 2.9 In-App Help Integration

**Current state:** `UserAvatarMenu.tsx` links to `https://help.digitalcore.app/` as "Help & Support"

**Switch-over steps:**

| Step | Change | When |
|------|--------|------|
| 1 | Update `UserAvatarMenu.tsx` href from `help.digitalcore.app` → `docs.digitalcore.app` | Week 5 (when docs hub is live) |
| 2 | Add context-aware help links per app page (e.g., finance module → `/platform/finance`) | Week 6+ |
| 3 | Consider: in-app help panel that loads doc content via API (future enhancement) | Post-launch |

**Enhanced integration (future roadmap):**
- Each app page could include a `?` icon linking to its corresponding doc page
- In-app search widget that queries the docs hub search API
- Help panel overlay that loads doc content inline (API route returns raw content)

### 2.10 Build Timeline

| Week | Hub Build Actions | LLM SEO Actions (can overlap) |
|------|-------------------|-------------------------------|
| **Week 1** | Init `digitalcore-docs` repo, install Nextra, deploy skeleton to Vercel. Configure `docs.digitalcore.app` domain. Set up theme with DigitalCore branding. | Draft `llms.txt` content. Create terminology style guide. |
| **Week 2** | Write Getting Started section (4 pages). Build playbook auto-generation script, deploy all 35 playbook pages. | Finalize `llms.txt`, create `skill.md`. Begin terminology audit on existing pages. |
| **Week 3** | Write Platform docs section — top 10 pages covering modules & features (use old topics as reference, all new content). Build `<AIContextMenu />` component. | Deploy `llms.txt`, `llms-full.txt`, `skill.md` to `public/`. Implement `.md` suffix middleware. |
| **Week 4** | Write remaining platform pages (5 pages). Create Service Economics section (5 new pages). | Finalize `.md` version generation. Test contextual AI menu on all pages. |
| **Week 5** | Create API reference section (4 pages). Create changelog page. Investigate Namecheap subdomain forwarding for `help.digitalcore.app` → `docs.digitalcore.app`. | Build comparison pages (5 pages). Create FAQ hub. |
| **Week 6** | Update in-app help link (`UserAvatarMenu.tsx` → `docs.digitalcore.app`). Configure subdomain redirect if DNS allows; otherwise old site stays live for residual SEO. | Build MCP server for docs. Publish OpenAPI spec. Begin external distribution. |

---

## Part 3: Phase 1 — Foundation (Layers 1 + 4)

### 3.1 Create `/llms.txt` — The Product Summary for AI

**What:** A Markdown file at `https://docs.digitalcore.app/llms.txt` (and mirrored at `https://digitalcore.app/llms.txt`) that concisely describes what DigitalCore is, does, and how to use it.

**Why:** LLMs (Cursor, Claude, Perplexity) are beginning to check for `/llms.txt` when building context. This is the single lowest-effort, highest-impact action.

**Structure specification (follow llmstxt.org format exactly):**

```
# DigitalCore

> Service Economics Intelligence platform for professional services firms.
> Analyzes service delivery costs, margins, and performance to show which
> services and clients are profitable — and recommends what to do about it.

DigitalCore serves mid-market professional services (50-250 FTE):
consultancies, MSPs, MSSPs, IT service providers, and internal shared
services. It replaces spreadsheet-based margin reporting with continuous,
AI-powered economic analysis across finance, capacity, and performance domains.

Key differentiators:
- Automatic P&L calculation: hours × rates = margin, updated continuously
- Cross-domain scenario modeling: change price, staffing, or AI adoption and
  see impact on margin, capacity, and SLA simultaneously
- 35 service management playbooks with KPIs and recommended actions
- MCP-native: built for AI agents from day one (free tier publicly available)
- Governance loop: AI proposes, humans decide, outcomes tracked

## Documentation

- [Product overview](https://docs.digitalcore.app/): What DigitalCore does
  and who it's for
- [Getting started](https://docs.digitalcore.app/getting-started/quickstart):
  Set up your first engagement in 15 minutes
- [Service Economics 101](https://docs.digitalcore.app/service-economics/what-is-service-economics):
  The discipline DigitalCore is built around
- [API documentation](https://docs.digitalcore.app/api/reference): REST API reference
- [MCP integration](https://docs.digitalcore.app/integrations/mcp-setup):
  Connect DigitalCore to AI assistants via Model Context Protocol

## Use Cases

- [Margin visibility](https://digitalcore.app/use-cases/margin-visibility):
  Real-time engagement profitability without spreadsheets
- [Client profitability](https://digitalcore.app/use-cases/client-profitability):
  Which clients generate margin vs. destroy value
- [Scenario planning](https://digitalcore.app/use-cases/scenario-planning):
  Model pricing, staffing, and AI investment decisions
- [SLA economics](https://digitalcore.app/use-cases/sla-economics):
  Connect performance commitments to financial impact

## Free Tools

- [MCP Server](https://mcpfree.digitalcore.app/mcp): Free MCP server with
  service management playbooks, KPI explanations, and health scoring
- [Service Health Calculator](https://digitalcore.app/tools/health-check):
  Input revenue, costs, FTEs, SLA — get instant economics assessment
- [Playbook library](https://docs.digitalcore.app/playbooks): 35 service
  management playbooks with KPIs and action recommendations

## Code Examples

- [GitHub: MCP integration examples](https://github.com/DigitalCoreApp/service-economics):
  Configuration for Claude, Cursor, VS Code, Windsurf, ChatGPT
- [API quickstart](https://docs.digitalcore.app/api/quickstart):
  First API call in 5 minutes

## Pricing

- [Pricing page](https://digitalcore.app/pricing): Free tier available,
  paid plans from $45/user/month

## Limitations

- Focused on service economics, not general project management
- Best fit for professional services with 50-250 FTE
- Currently supports manual data entry and Excel import (API integrations
  for PSA/ERP tools on roadmap)

## Support

- Email: support@digitalcore.app
- Documentation: https://docs.digitalcore.app

## Optional

- [Changelog](https://docs.digitalcore.app/changelog): Product updates and releases
- [Comparison guides](https://digitalcore.app/guides/best-service-profitability-software):
  How DigitalCore compares to Kantata, BigTime, Scoro, and others
- [Service Economics research](https://digitalcore.app/research):
  Industry benchmarks and methodology
```

**Implementation notes for website team:**
- File must be served at the root: `GET /llms.txt` returns raw Markdown (content-type: `text/markdown` or `text/plain`)
- No HTML wrapper, no layout, no JavaScript — raw Markdown only
- Place in `public/llms.txt` in the Nextra project — served automatically
- Also place a copy (or proxy) at `digitalcore.app/llms.txt` on the marketing site
- URLs in the file must resolve to real pages (create stubs if needed; content team fills later)
- Update this file whenever significant docs or pages change
- Keep total file size under 4,000 tokens (~3,000 words) — must fit in one LLM context chunk

### 3.2 Create `/llms-full.txt` — Expanded Context File

**What:** An expanded version of `llms.txt` that inlines the content of the linked pages into a single document, using XML-style delimiters.

**Why:** Some AI tools (Cursor, Claude Projects) can ingest a single large context file. This gives them everything without requiring separate page fetches.

**Structure:**
```
<document>
<source>https://docs.digitalcore.app/</source>
<content>
[Full markdown content of the docs landing page]
</content>
</document>

<document>
<source>https://docs.digitalcore.app/service-economics/what-is-service-economics</source>
<content>
[Full markdown content of the SE guide]
</content>
</document>

[... repeat for all linked pages ...]
```

**Implementation notes:**
- Auto-generate at build time via `lib/generate-llms-full.ts`
- The script reads all `.mdx` files in `pages/`, strips MDX components, extracts Markdown, and wraps each in `<document>` tags
- Target size: 30,000–50,000 tokens (fits Claude's context, Cursor's project context)
- Exclude "Optional" section links to keep primary file focused
- Output to `public/llms-full.txt` — regenerated on every build

### 3.3 Create `/skill.md` — Agent Capability Manifest

**What:** A Markdown file that describes what DigitalCore can do for an AI agent — what tools are available, what parameters they accept, and what results to expect.

**Why:** Mintlify pioneered this. AI coding tools and agent frameworks are starting to look for `skill.md` to understand what a product's agent surface can do. This is our MCP-native advantage.

**Structure:**

```markdown
# DigitalCore Service Economics — Agent Skills

> DigitalCore provides AI agents with service economics analysis tools via
> MCP (Model Context Protocol) and REST API.

## Available via MCP (Free Tier)

Connect: `https://mcpfree.digitalcore.app/mcp`

### list_playbooks
List all 35 service management playbooks.
- No parameters required
- Returns: Array of playbooks with slug, title, category

### get_playbook
Get detailed playbook content.
- `name` (string, required): Playbook slug (e.g. "engagement-margin-protection")
- Returns: Problem statement, key takeaways, KPIs, recommended actions

### explain_metric
Explain a KPI metric with formula and benchmarks.
- `metric_name` (string, required): Metric slug (e.g. "gross_margin")
- Returns: Definition, formula, industry benchmarks, improvement tips

### run_service_reality_check
Calculate service health score from financial and operational data.
- `revenue` (number, required): Annual revenue
- `costs` (number, required): Annual delivery costs
- `ftes` (number, required): Full-time equivalents
- `sla_achievement` (number, required): SLA achievement percentage
- Returns: Overall score (0-100), dimension scores, insights, recommendations

## Available via MCP (Paid Tier)

Connect: Requires API key — see https://docs.digitalcore.app/integrations/mcp-setup

### check_portfolio_health
### check_engagement_health
### record_hours / record_finance_actual / record_performance
### generate_showback_report
### scenario_generate_options / refine_scenario / compare_and_commit_scenario
### summarize_period / generate_executive_summary

## REST API

Base URL: `https://mcpfree.digitalcore.app`

All MCP-free tools are also available as REST endpoints:
- `GET /list_playbooks`
- `GET /get_playbook?name={slug}`
- `GET /explain_metric?metric_name={slug}`
- `POST /run_service_reality_check` (JSON body)
```

**Implementation notes:**
- Place in `public/skill.md` — served at `GET /skill.md` automatically
- Keep in sync with actual MCP tool definitions (update when tools change)
- This becomes the canonical reference for what agents can do with DigitalCore

### 3.4 Anchor Terminology Consistency

**What:** Establish and enforce a controlled vocabulary across all web properties.

**Why:** LLMs build associations through repetition. If we say "Service Economics Intelligence" in some places and "service management platform" in others, we dilute the signal.

**Controlled vocabulary (enforce across docs hub, marketing site, app, and external content):**

| Term | Always use | Never use |
|------|-----------|-----------|
| **Product name** | DigitalCore | Digital Core, digitalcore, DC |
| **Category** | Service Economics Intelligence | Service management platform, PSA tool |
| **Tagline** | "See which services make money — and what to do about it" | (any variation) |
| **Target market** | Professional services firms (50-250 FTE) | SMBs, enterprises, companies |
| **Core action** | Analyzes service economics | Tracks projects, manages services |
| **AI positioning** | AI-native, MCP-native | AI-powered, AI-first, AI-enabled |
| **Decision pattern** | AI proposes, humans decide | AI decides, automated decisions |
| **Free tool** | Service Economics MCP | Free MCP, free server |
| **Former branding** | ❌ Never: "Strategic Service Management" | ❌ "Strategic Command Center" |

**Implementation:**
- Create a style guide page (can be internal or a hidden page in docs for reference)
- Run a find-and-replace audit across all existing pages (the current help center uses "Strategic Service Management" — this must not carry over)
- Add terminology check to content review checklist for all PRs

---

## Part 4: Phase 2 — Documentation Content Architecture (Layers 2 + 3)

### 4.1 Documentation Site Map

**Where this lives:** All content lives in the docs hub built in Part 2 (`docs.digitalcore.app`)

**Full site map:**

```
docs.digitalcore.app/
├── /                              → "What is DigitalCore?"
├── getting-started/
│   ├── quickstart                 → "How do I get started with DigitalCore?"
│   ├── first-engagement           → "How do I set up my first engagement?"
│   ├── import-data                → "How do I import data into DigitalCore?"
│   └── invite-team                → "How do I invite my team?"
├── platform/
│   ├── finance                    → "How do I track financial performance?"
│   ├── capacity                   → "How does capacity planning work?"
│   ├── performance                → "How do I monitor SLA performance?"
│   ├── governance                 → "How does the governance workflow work?"
│   ├── ai-assistant               → "What AI capabilities does DigitalCore have?"
│   ├── portfolio-cockpit          → "What is the Portfolio Cockpit?"
│   ├── services                   → "How do I manage services?"
│   ├── engagements                → "How do engagements work?"
│   ├── contracts                  → "How do contracts work?"
│   ├── organisation               → "How do I set up my org structure?"
│   ├── reports                    → "How do I generate reports?"
│   └── settings                   → "How do I configure my organization?"
├── service-economics/
│   ├── what-is-service-economics  → "What is service economics?"
│   ├── margin-calculation         → "How does DigitalCore calculate margins?"
│   ├── cost-attribution           → "How are costs attributed to engagements?"
│   ├── scenario-modeling          → "How do I model pricing or staffing changes?"
│   └── whale-curve                → "How do I identify unprofitable clients?"
├── integrations/
│   ├── mcp-setup                  → "How do I connect DigitalCore to my AI tools?"
│   ├── excel-import               → "How do I import from Excel or CSV?"
│   └── api-overview               → "How do I use the DigitalCore API?"
├── api/
│   ├── reference                  → Full OpenAPI spec (rendered)
│   ├── quickstart                 → "How do I make my first API call?"
│   ├── authentication             → "How does API authentication work?"
│   └── errors                     → "What do DigitalCore error codes mean?"
├── playbooks/
│   ├── index                      → "What service management playbooks are available?"
│   └── [slug]                     → 35 individual playbook pages
├── account/
│   ├── subscriptions              → "What subscription tiers are available?"
│   ├── manage-account             → "How do I manage my account?"
│   └── security                   → "How is my data protected?"
├── changelog                      → "What's new in DigitalCore?"
└── faq                            → Consolidated FAQ
```

### 4.2 Documentation Content Rules

**Every doc page must follow these structural rules:**

| Rule | Implementation |
|------|---------------|
| **H2 as question** | Every main section heading is a question, not a statement. "How do I set up webhooks?" not "Webhook configuration" |
| **Answer first** | The first sentence after the heading directly answers the question. No preamble |
| **Code within 3 scrolls** | If the page is a how-to, a working code/config snippet appears within the first 3 screen heights |
| **Constraints explicit** | Rate limits, max sizes, unsupported cases, and prerequisites are stated, not hidden |
| **No marketing adjectives** | Zero use of: powerful, seamless, robust, cutting-edge, state-of-the-art, best-in-class in any doc page |
| **Consistent terminology** | Use the controlled vocabulary from Section 3.4 — no synonyms for core concepts |
| **One concept per page** | Each page answers one primary question. Secondary questions get their own pages with cross-links |

**Example transformation (from current help center content):**

```
❌ BEFORE (current help.digitalcore.app style — declarative, generic):
---
# Profit & Loss Terminology and Calculation Logic

## Overview

This knowledge base article explains the key financial metrics used in profit
and loss (P&L) statements, including their definitions and calculation methods.
Understanding these metrics is essential for financial analysis, business
performance evaluation, and decision-making.
---

✅ AFTER (docs hub style — FAQ-framed, answer-first, specific):
---
# How does DigitalCore calculate margins?

DigitalCore computes engagement margins automatically by subtracting delivery
costs from revenue, then dividing by revenue. Every finance template item maps
to a P&L category, so the full income statement builds itself as you enter data.

## What P&L categories does DigitalCore use?

Each finance line item maps to one of three P&L categories via the finance catalog:

| Category | Examples | Calculation Role |
|----------|---------|-----------------|
| Revenue | License fees, Consulting revenue, Managed service fees | Top line |
| COGS | Labor costs, Tool licenses, Subcontractor costs | Direct costs |
| OpEx | Overhead allocation, Travel, Training | Operating expenses |

**Gross Margin** = (Revenue − COGS) / Revenue × 100
**EBITDA Margin** = (All Revenue − All Expenses) / All Revenue × 100

## How does automatic labor costing work?

When a team member logs capacity hours, DigitalCore automatically:
1. Looks up their role's hourly rate from the rate card hierarchy
2. Multiplies hours × rate
3. Posts the result as a finance measure in the COGS Labor category

No manual journal entry required. The rate hierarchy checks:
engagement-specific rate → contract rate → org default rate card.
---
```

### 4.3 Markdown Versions of Every Page

**What:** Every page on docs.digitalcore.app should be available as raw Markdown by appending `.md` to the URL.

**Why:** Mintlify does this by default. AI tools (Cursor, Claude, Perplexity) prefer Markdown over HTML because it's denser, has no noise, and uses fewer tokens.

**Implementation:**

| URL | Returns |
|-----|---------|
| `docs.digitalcore.app/getting-started/quickstart` | Normal HTML page |
| `docs.digitalcore.app/getting-started/quickstart.md` | Raw Markdown (no layout, no nav, no JS) |
| `docs.digitalcore.app/platform/finance` | Normal HTML page |
| `docs.digitalcore.app/platform/finance.md` | Raw Markdown |

**Technical approach (built into the docs hub):**

In `middleware.ts` of the Nextra project:
```typescript
// Pseudo-code for .md suffix handling
if (request.nextUrl.pathname.endsWith('.md')) {
  const pagePath = request.nextUrl.pathname.replace('.md', '');
  // Read the corresponding .mdx file content
  // Strip MDX components, return raw Markdown
  // Set Content-Type: text/markdown
}
```

Alternative: Generate `.md` files at build time via `lib/generate-md-versions.ts` and place them alongside HTML output. This is simpler and more performant (static files, no runtime processing).

### 4.4 Documentation MCP Server

**What:** Host an MCP server that lets AI tools query our documentation directly.

**Why:** When a developer adds our docs MCP to Cursor or VS Code, they can ask questions about DigitalCore and get answers from our docs — not from stale training data.

**Implementation via Next.js API route in the docs hub:**

```
docs.digitalcore.app/api/mcp         → MCP endpoint (streamable-http)

Tools exposed:
├── search_docs(query)            → Full-text search across all doc pages
├── get_page(path)                → Return full Markdown content of a doc page
├── list_playbooks()              → Same as free MCP (bridged or duplicated)
├── get_playbook(slug)            → Same as free MCP (bridged or duplicated)
└── explain_metric(metric_name)   → Same as free MCP (bridged or duplicated)
```

**This is separate from the product MCP.** The docs MCP serves documentation content. The product MCP (mcpfree.digitalcore.app) serves the service economics tools. Users may add both.

**User-facing configuration snippet (for contextual menu and README):**

```json
{
  "servers": {
    "digitalcore-docs": {
      "type": "http",
      "url": "https://docs.digitalcore.app/api/mcp"
    }
  }
}
```

### 4.5 Contextual AI Menu on Every Page

**What:** A floating button or menu on every documentation and content page that lets users instantly use the page content with their preferred AI tool.

**Why:** Mintlify's contextual menu drives direct engagement between content and AI tools. Every "Open in Claude" click is a training signal and a user activation moment.

**Menu options to implement:**

| Option | Action | Priority |
|--------|--------|----------|
| **Copy as Markdown** | Copies page content as clean Markdown to clipboard | Must have |
| **View as Markdown** | Opens `.md` version of the page | Must have |
| **Open in ChatGPT** | Opens ChatGPT with page content pre-loaded as context | Must have |
| **Open in Claude** | Opens Claude with page content pre-loaded as context | Must have |
| **Open in Perplexity** | Opens Perplexity with page content pre-loaded as context | Should have |
| **Copy MCP server URL** | Copies `https://mcpfree.digitalcore.app/mcp` to clipboard | Must have |
| **Add to Cursor** | One-click MCP install for Cursor | Should have |
| **Add to VS Code** | One-click MCP install for VS Code | Should have |

**Technical specification:**

```
┌────────────────────────────────┐
│  [⚡] AI                       │   ← Floating button (bottom-right)
├────────────────────────────────┤
│  📋 Copy as Markdown           │   ← Copies page as MD
│  📄 View as Markdown           │   ← Opens /current-page.md
│  ─────────────────────────     │
│  💬 Open in ChatGPT            │   ← chatgpt.com/chat?q={encoded}
│  🤖 Open in Claude             │   ← claude.ai/new?q={encoded}
│  🔍 Open in Perplexity         │   ← perplexity.ai/search?q={encoded}
│  ─────────────────────────     │
│  🔌 Copy MCP Server URL        │   ← clipboard: mcpfree.digitalcore.app/mcp
│  ⚙️ Add to Cursor              │   ← cursor://install-mcp?url=...
│  ⚙️ Add to VS Code             │   ← vscode://install-mcp?url=...
└────────────────────────────────┘
```

**Implementation:** Build as `<AIContextMenu />` React component in the docs hub (see Part 2, Section 2.4). Nextra supports custom layout wrapping — inject the component on every page via `theme.config.tsx`.

### 4.6 Playbook Pages (Public Web Versions)

**What:** Publish all 35 playbooks as individual web pages at `/playbooks/[slug]`.

**Why:** The playbooks are our highest-quality structured content. Each one is a complete question-answer unit (problem → KPIs → actions). Making them crawlable and individually linkable maximizes LLM training signal.

**Page structure for each playbook:**

```
/playbooks/engagement-margin-protection

## What is the Engagement Margin Protection playbook?

[One-paragraph problem statement]

## When should I use this playbook?

[Trigger conditions — when this becomes relevant]

## What KPIs does this playbook track?

| KPI | Formula | Healthy Range |
| ... | ...     | ...           |

## What are the recommended actions?

1. [Action 1 with explanation]
2. [Action 2 with explanation]
3. [Action 3 with explanation]

## How does DigitalCore automate this?

[How the platform implements this playbook — which features,
which engine, what happens automatically]

## Related playbooks

- [Link to related playbook 1]
- [Link to related playbook 2]
```

**Implementation notes:**
- Auto-generate `.mdx` files from the same data source that powers the MCP `get_playbook` tool (via `scripts/build-playbooks.ts` in the docs repo)
- Each page automatically gets a `.md` version (via the middleware built in Section 4.3)
- Include JSON-LD FAQ schema for traditional SEO benefit
- Cross-link between playbooks and from playbooks to relevant platform docs

### 4.7 Public Changelog

**What:** Markdown changelog at `/changelog` showing product updates in reverse chronological order.

**Why:** LLMs use changelogs to assess recency and active development. A structured changelog signals "this product is alive and improving."

**Format:**

```markdown
# What's new in DigitalCore?

## February 2026

### Scenario Intelligence Engine
- AI-generated scenario options for pricing, staffing, and AI investment changes
- Side-by-side scenario comparison with margin, capacity, and SLA impact
- Commit scenarios to governance tracking with automatic outcome comparison

### MCP Free Tier Updates
- Expanded to 35 playbooks (6 new in February)
- Added REST endpoints alongside MCP for non-MCP clients

## January 2026

### Cross-Domain Automation
- Capacity hours now auto-calculate labor costs (hours × rate → COGS)
- SLA breaches auto-detect and calculate penalty amounts
- Service health scores auto-sync to rollup metrics

[...]
```

**Implementation notes:**
- Single `.mdx` file at `pages/changelog.mdx`
- Also serves as `docs.digitalcore.app/changelog.md` (raw Markdown)
- Update with every release (minimum monthly)
- Use plain language — no internal jargon or ticket numbers

---

## Part 5: Phase 3 — Distribution & Signal Amplification (Layer 5)

### 5.1 Comparison Pages

**What:** Honest, factual comparison pages at `digitalcore.app/compare/[competitor]` and an aggregate at `digitalcore.app/guides/best-service-profitability-software`.

**Note:** These live on the **marketing site** (`digitalcore.app`), not the docs hub — they are marketing content, not product documentation.

**Why:** LLMs heavily synthesize "best tool for X" and "X vs Y" content. Being the source of that comparison (rather than a third party) means our framing gets cited.

**Pages to create:**

| URL | Title |
|-----|-------|
| `/guides/best-service-profitability-software` | "Best Service Profitability Software for 2026" |
| `/compare/kantata` | "DigitalCore vs Kantata" |
| `/compare/bigtime` | "DigitalCore vs BigTime" |
| `/compare/scoro` | "DigitalCore vs Scoro" |
| `/compare/precursive` | "DigitalCore vs Precursive" |
| `/compare/spreadsheets` | "DigitalCore vs Spreadsheets" |

**Structure for each comparison page:**

```
## How does DigitalCore compare to [Competitor]?

[One-paragraph honest summary]

| Dimension | DigitalCore | [Competitor] |
| Focus     | ...         | ...          |
| Pricing   | ...         | ...          |
| Best for  | ...         | ...          |

## Where DigitalCore is stronger
[Factual points]

## Where [Competitor] is stronger
[Honest acknowledgment]

## Which should I choose?
[Decision framework, not a sales pitch]
```

**Content rules:**
- Factual, not adversarial — LLMs will downrank obviously biased comparisons
- Acknowledge competitor strengths honestly
- Position DigitalCore in its lane (mid-market, service economics) not as universally better

### 5.2 Q&A / FAQ Hub

**What:** A dedicated FAQ section at `docs.digitalcore.app/faq` plus FAQ-style structure on every doc page.

**Why:** FAQ format directly mirrors how users prompt LLMs. When a user asks "What is service economics?", an LLM will preferentially surface and cite Q&A content where the question IS the heading.

**Priority questions to answer (based on category research):**

| Question | Maps to |
|----------|---------|
| "What is service economics?" | Category education |
| "How do I calculate service profitability?" | Core use case |
| "What is Total Cost of Delivery (TCD)?" | Differentiator |
| "How do I track margins per client?" | Feature explanation |
| "What is a whale curve in services?" | Knowledge authority |
| "How do I reduce margin leakage in professional services?" | Pain point |
| "What's the difference between utilization and productivity?" | KPI education |
| "How does AI change service delivery costs?" | Thought leadership |
| "What is an MCP server?" | Technical education |
| "What should be in a monthly service review?" | Workflow guidance |

**Each answer must:**
- Be self-contained (readable without context)
- Include one concrete number or data point where possible
- Link to deeper content (docs, playbooks, use-case pages)
- Be under 300 words (extractable by LLM without truncation)

### 5.3 GitHub Presence

**What:** Maintain and expand the public GitHub organization with well-structured repos.

**Why:** LLMs are trained on GitHub data. Well-named files with descriptive READMEs become permanent memory.

**Repos to maintain:**

| Repo | Purpose | Content |
|------|---------|---------|
| `service-economics` | MCP integration examples | Config snippets for Claude, Cursor, VS Code, Windsurf, ChatGPT + usage examples |
| `digitalcore-docs` (new) | The docs hub source code | All 63+ pages as `.mdx` files — maximizes GitHub training signal for docs content |
| `service-economics-playbooks` (new) | Playbook content as Markdown | All 35 playbooks as individual `.md` files in a browsable repo |
| `digitalcore-api-examples` (new) | API usage examples | Code samples in Python, TypeScript, curl for each endpoint |

**Each repo must have:**
- A comprehensive README with product description (consistent with controlled vocabulary)
- Descriptive file names (`calculate-service-health.py`, not `example1.py`)
- Inline code comments explaining intent
- Links back to docs

### 5.4 Structured Error Messages

**What:** Ensure all API and MCP error responses are descriptive and link to documentation.

**Why:** When developers hit an error, they paste it into an LLM. If our error message is descriptive and includes a doc link, the LLM includes our docs in its answer.

**Current state:** MCP free server already uses structured errors (via `shared/core/errors.py` — `not_found_fuzzy()`, `invalid_param()`, `wrong_tool()` patterns).

**Enhancement needed:**

```
❌ BEFORE:
{"error": "Invalid metric name"}

✅ AFTER:
{
  "error": "metric_not_found",
  "message": "No metric found matching 'gros_margin'. Did you mean 'gross_margin'?",
  "available_options": ["gross_margin", "net_margin", "utilization_rate", ...],
  "docs": "https://docs.digitalcore.app/api/errors#metric-not-found",
  "hint": "Use explain_metric with metric_name='gross_margin' to get the formula and benchmarks."
}
```

**This already largely exists** in the MCP free service. The task is to:
1. Ensure all error responses include a `docs` URL pointing to the new docs hub
2. Create the error reference page at `docs.digitalcore.app/api/errors`
3. Verify the pattern is consistent across all endpoints

### 5.5 External Signal Strategy

**What:** Systematic placement of DigitalCore mentions in high-authority sources consumed by LLM training runs.

**Why:** LLMs build brand associations from frequency of mention in training corpora. More mentions in high-authority sources = stronger association.

**Channel plan:**

| Channel | Action | Signal Type | Cadence |
|---------|--------|-------------|---------|
| **Hacker News** | Show HN post for MCP free tools | Training data | Once (then follow up with updates) |
| **Reddit** | Answer questions in r/msp, r/managedservices, r/consulting with genuine value + mention | Training data + community | 2-3x/week |
| **dev.to / Hashnode** | Technical articles about MCP, service economics data modeling | Training data | 2x/month |
| **Product Hunt** | Launch MCP free tier | Training data + traffic | Once |
| **Newsletter features** | Pitch to TLDR, The Pragmatic Engineer, Pointer | High-authority training data | Targeted outreach |
| **Stack Overflow** | Answer relevant questions, reference DigitalCore where genuinely appropriate | High-authority training data | Opportunistic |
| **YouTube** | Short tutorials: "How to check service health with MCP" | Training data (transcripts) | 1x/month |
| **X / LinkedIn** | Share insights, playbook excerpts, category education | Social signal | Daily |

**All external content must use the controlled vocabulary from Section 3.4.**

---

## Part 6: Technical Implementation Checklist

### Hub Build Deliverables (Engineering)

| # | Deliverable | Description | Priority |
|---|-------------|-------------|----------|
| H1 | Initialize `digitalcore-docs` repo | Nextra 4 project, TypeScript, Vercel config | P0 — Week 1 |
| H2 | Configure `docs.digitalcore.app` domain | Vercel custom domain, SSL, DNS | P0 — Week 1 |
| H3 | Theme customization | DigitalCore branding, logo, colors, dark mode, footer | P0 — Week 1 |
| H4 | `.md` suffix middleware | Intercept `.md` requests, return raw Markdown | P1 — Week 3 |
| H5 | `<AIContextMenu />` component | Floating AI menu with copy/open actions | P1 — Week 3 |
| H6 | Playbook build script | `scripts/build-playbooks.ts` — generates 35 `.mdx` files from data | P1 — Week 2 |
| H7 | `llms-full.txt` generator | `lib/generate-llms-full.ts` — runs at build time | P1 — Week 3 |
| H8 | MCP server for docs | API route at `/api/mcp` with `search_docs` and `get_page` tools | P3 — Week 6+ |
| H9 | JSON-LD FAQ schema | Custom component that injects FAQ structured data in `<Head>` | P2 — Week 5 |
| H10 | Subdomain redirect (best-effort) | Investigate Namecheap subdomain forwarding for `help.digitalcore.app` → `docs.digitalcore.app`. If not possible, old site stays live. | P2 — Week 5 |
| H11 | Update in-app help link | Change `UserAvatarMenu.tsx` href to `docs.digitalcore.app` | P1 — Week 5 |

### Website / Marketing Site Deliverables

| # | Deliverable | Route/File | Format | Priority |
|---|-------------|------------|--------|----------|
| W1 | `/llms.txt` on marketing site | Root of `digitalcore.app` | Raw Markdown | P0 — Week 2 |
| W2 | `/compare/[competitor]` | 5 pages on marketing site | HTML | P2 — Week 5 |
| W3 | `/use-cases/[slug]` | New content (old help center verticals as topic reference) | HTML | P2 — Week 5 |
| W4 | Terminology audit | All existing marketing pages | Text updates | P1 — Week 2 |

### Docs Hub Content Deliverables

| # | Deliverable | Route | Source | Priority |
|---|-------------|-------|--------|----------|
| D1 | `llms.txt` | `docs.digitalcore.app/llms.txt` | New (template in Part 3) | P0 — Week 2 |
| D2 | `llms-full.txt` | `docs.digitalcore.app/llms-full.txt` | Auto-generated | P1 — Week 3 |
| D3 | `skill.md` | `docs.digitalcore.app/skill.md` | New (template in Part 3) | P1 — Week 2 |
| D4 | Getting Started section (4 pages) | `/getting-started/*` | Write new (old topics as reference) | P0 — Week 2 |
| D5 | Platform section (12 pages) | `/platform/*` | Write new (old topics as page inventory) | P1 — Week 3-4 |
| D6 | Service Economics section (5 pages) | `/service-economics/*` | New educational content | P1 — Week 4 |
| D7 | API section (4 pages) | `/api/*` | New developer content | P2 — Week 5 |
| D8 | Integrations section (3 pages) | `/integrations/*` | New developer content | P2 — Week 4 |
| D9 | 35 playbook pages | `/playbooks/*` | Auto-generated from MCP data | P1 — Week 2 |
| D10 | Changelog | `/changelog` | New, updated monthly | P2 — Week 3 |
| D11 | FAQ page | `/faq` | New (priority questions in Part 5) | P2 — Week 5 |
| D12 | Account section (3 pages) | `/account/*` | Write new (current billing/security model) | P2 — Week 4 |
| D13 | 10 FAQ answers (priority questions) | Embedded across pages | New writing | P2 — Week 5 |
| D14 | 5 comparison page content | Marketing site `/compare/*` | Existing competitive research | P2 — Week 5 |

### Engineering Deliverables (MCP / API)

| # | Deliverable | Where | Priority |
|---|-------------|-------|----------|
| E1 | Add `docs` URL to all MCP error responses | MCP free service (`shared/core/errors.py`) | P2 — Week 4 |
| E2 | Publish OpenAPI spec | `docs.digitalcore.app/api/openapi.json` | P3 — Week 6 |
| E3 | GitHub repo: `digitalcore-docs` (public) | GitHub organization | P0 — Week 1 |
| E4 | GitHub repo: `service-economics-playbooks` (public) | GitHub organization | P2 — Week 3 |
| E5 | GitHub repo: `digitalcore-api-examples` (public) | GitHub organization | P3 — Week 6 |

---

## Part 7: Measurement

### How to Track LLM SEO Progress

There is no "LLM Search Console" yet. Use these proxies:

| Metric | How to Measure | Cadence |
|--------|----------------|---------|
| **LLM mention audit** | Ask ChatGPT, Claude, Perplexity, Gemini: "What's the best tool for service profitability?" — log whether DigitalCore is mentioned | Weekly |
| **LLM recommendation audit** | Ask: "What is service economics intelligence?" — check if DigitalCore is named | Weekly |
| **MCP free usage** | Dashboard: unique sessions, tool calls, playbook views | Daily |
| **AI referral traffic** | Analytics: traffic from perplexity.ai, chatgpt.com referrers | Weekly |
| **GitHub signals** | Stars, forks, clones on public repos | Monthly |
| **Signup source** | "How did you hear about us?" survey — track "AI assistant" as option | Ongoing |
| **Brand mention volume** | Mention.com or similar for Reddit, HN, dev.to, X | Monthly |
| **/llms.txt fetch logs** | Server logs: how often `/llms.txt` and `/skill.md` are fetched | Monthly |
| **Docs hub traffic** | Analytics on docs.digitalcore.app — total visits, top pages, search queries | Weekly |
| **Docs search queries** | What users search for in the built-in search — reveals content gaps | Weekly |

### Success Criteria (3-month horizon)

| Indicator | Baseline (Feb 2026) | Target (May 2026) |
|-----------|---------------------|-------------------|
| Named in "best service profitability tool" LLM queries | 0 of 4 major LLMs | 2+ of 4 |
| Named in "what is service economics" LLM queries | 0 of 4 | 3+ of 4 |
| MCP free monthly active sessions | Current baseline | 3x |
| /llms.txt monthly fetches | 0 (doesn't exist) | Track and trend |
| GitHub stars (service-economics repo) | Current | 2x |
| Docs hub monthly visitors | 0 (doesn't exist) | Establish baseline, then grow |
| help.digitalcore.app status | Active (Eniston-hosted, not controlled by us) | Old site stays live for residual SEO; in-app link points to docs.digitalcore.app. Investigate Namecheap subdomain forwarding as best-effort redirect. |
| In-app help link updated | Points to help.digitalcore.app | Points to docs.digitalcore.app |

---

## Appendix A: Reference Architecture Comparison

| Capability | Resend | Mintlify | DigitalCore (current) | DigitalCore (target) |
|-----------|--------|----------|----------------------|---------------------|
| **Self-hosted docs** | ✅ Custom | N/A (they ARE the platform) | ❌ Basic hosted help center (Eniston — not controlled by us) | ✅ Nextra-based docs hub |
| `/llms.txt` | ✅ | ✅ (auto) | ❌ | ✅ |
| `/llms-full.txt` | ✅ | ✅ (auto) | ❌ | ✅ |
| `/skill.md` | ❌ | ✅ (auto) | ❌ | ✅ |
| `.md` page versions | ❌ | ✅ (auto) | ❌ | ✅ |
| MCP server for docs | ❌ | ✅ (auto) | ❌ | ✅ |
| MCP server for product | ❌ | N/A | ✅ (live!) | ✅ |
| Contextual AI menu | ❌ | ✅ | ❌ | ✅ |
| FAQ-format docs | ✅ | Varies | ❌ | ✅ |
| Public GitHub examples | ✅ | ✅ | ✅ (partial) | ✅ |
| OpenAPI spec | ✅ | N/A | ❌ | ✅ |
| Structured error messages | ✅ | N/A | ✅ (partial) | ✅ |
| Public changelog | ✅ | ✅ | ❌ | ✅ |
| Comparison pages | ❌ | ❌ | ✅ (draft) | ✅ |
| AI assistant in docs | ❌ | ✅ | ❌ | P3 |
| Git-based authoring | ✅ | ✅ (managed) | ❌ (manual CMS) | ✅ |
| Dark mode | ✅ | ✅ | ❌ | ✅ |
| Built-in search | ✅ | ✅ | ❌ (basic) | ✅ (Flexsearch) |

## Appendix B: What We Have That They Don't

DigitalCore has a structural advantage that neither Resend nor Mintlify possess:

1. **A live, public MCP server with genuine utility** — mcpfree.digitalcore.app serves real tools (health scoring, 35 playbooks, KPI explanations) that AI assistants actively call. Resend has docs an LLM can read. We have tools an LLM can use. This is a generational difference.

2. **Domain-specific structured knowledge** — 35 playbooks, each a self-contained problem-solution unit with KPIs and actions. This is exactly the format LLMs extract and cite best.

3. **Category creation opportunity** — "Service Economics Intelligence" returns near-zero results in current LLM training data. First mover owns the association.

The plan above builds the connective tissue (docs hub, llms.txt, .md versions, contextual menu) to expose these existing assets to the AI discovery layer.

## Appendix C: Old Help Center → New Docs Hub Topic Reference

> **⚠️ These are topic references only, NOT migration candidates.** The old help center content at `help.digitalcore.app` is outdated — the app has been heavily iterated since those articles were written. Use this table as a **page inventory checklist** when writing new docs. Every page must be authored fresh against the current product.

| Old Topic (help.digitalcore.app) | New Docs Hub Page (docs.digitalcore.app) | Notes |
|------------------------------------|-------------------------------------------|---------|
| Welcome tour (`/getting-started/welcome-to-digitalcore-...`) | `/getting-started/quickstart` | Reframe as "5-minute quickstart" |
| "What is Strategic Service Management" (`/getting-started/what-is-strategic-service-management`) | `/service-economics/what-is-service-economics` | Complete rewrite — new terminology |
| User roles and permissions (`/core-concepts/user-roles-permissions-in-digitalcore`) | `/platform/settings` (roles section) | Document current RBAC model |
| Core concepts of DigitalCore (`/core-concepts/core-concepts-of-digitalcore`) | `/` (docs landing page) | Landing page should cover core concepts |
| Initial setup prerequisites (`/setup-configuration/initial-setup-prerequisites`) | `/getting-started/quickstart` (merged) | Fold into quickstart |
| Setup configuration overview (`/setup-configuration/setup-configuration-overview`) | `/getting-started/quickstart` (merged) | Fold into quickstart |
| How to enter data (`/setup-configuration/how-to-enter-data`) | `/getting-started/import-data` | Fresh walkthrough of current import UX |
| Portfolio cockpit (`/modules-features/navigating-the-portfolio-cockpit-...`) | `/platform/portfolio-cockpit` | Document current portfolio view |
| Organisation breakdown structure (`/modules-features/organisation-breakdown-structure`) | `/platform/organisation` | Document current OBS features |
| Users (`/modules-features/users`) | `/getting-started/invite-team` | Fresh team management guide |
| 3rd parties / vendors (`/modules-features/3rd-parties-vendors`) | `/platform/organisation` (section) | Subsection of org docs |
| Locations (`/modules-features/locations`) | `/platform/organisation` (section) | Subsection of org docs |
| Roles (`/modules-features/roles`) | `/platform/organisation` (section) | Subsection of org docs |
| Skills (`/modules-features/skills`) | `/platform/organisation` (section) | Subsection of org docs |
| Cost centers (`/modules-features/cost-centers`) | `/platform/finance` (section) | Subsection of finance docs |
| Finance calendars (`/modules-features/finance-calendars`) | `/platform/finance` (section) | Subsection of finance docs |
| P&L (`/modules-features/profit-loss`) | `/service-economics/margin-calculation` | Completely different approach — write from scratch |
| Governance / escalations (`/modules-features/open-topics-escalations-cases`) | `/platform/governance` | Document current governance features |
| Data catalogs overview (`/data-catalogs/overview-getting-the-most-out-...`) | `/getting-started/quickstart` | Fold key points into quickstart |
| How to invite users (`/data-catalogs/how-to-invite-users`) | `/getting-started/invite-team` | Fresh invitation guide |
| FAQ (`/data-catalogs/frequently-asked-questions-...`) | `/faq` | New FAQ written for current product |
| Service performance (`/business-processes/service-performance`) | `/platform/performance` | Document current KPI/SLA features |
| Organisation strategical planning (`/business-processes/organisation-strategical-planning`) | `/platform/governance` (section) | Subsection of governance docs |
| Objectives & key results (`/business-processes/objectives-key-results-okr`) | `/platform/governance` (section) | Subsection of governance docs |
| Capacity planning (`/business-processes/capacity-planning`) | `/platform/capacity` | Document current capacity features |
| Subscription tiers (`/account/subscription-tier-options`) | `/account/subscriptions` | Write for current pricing model |
| Account management (`/account/how-to-manage-my-account`) | `/account/manage-account` | Fresh account guide |
| Data protection (`/security/data-protection`) | `/account/security` | Write for current security posture |
| Authentication (`/security/authentication-options`) | `/account/security` (section) | Document current auth methods |
| Use cases (5 verticals) (`/use-cases/*`) | `digitalcore.app/use-cases/*` | Create on marketing site, not docs hub |
| Playbooks (35) (`/playbooks/*`) | `/playbooks/*` | Auto-generate from MCP data source |

---

*Prepared for DigitalCore Website & GTM Teams — February 2026 (v2.1)*
