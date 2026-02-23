# DigitalCore Documentation Hub — Structure Proposal

**Version:** 2.2 — Deduplicated Against Main Site  
**Date:** February 23, 2026  
**Status:** DRAFT — Ready for content authoring prioritization  
**Purpose:** Define every page and subheader for `digitalcore.app/docs/`

> **Note for docs team:** This document defines the complete structure. Every heading below will become a real heading in the final docs. Write content that explains the *business value* and *user workflow* — not technical architecture. The reader is a service management professional, not a developer.

> **v2.2 changes:** Deduplicated against content already published on the main site (`digitalcore.app`). Playbooks now link to `/learn/playbooks` (29 live pages). Glossary deferred to `/learn/glossary` (73+ terms already published). FAQ trimmed to product-specific questions. Security trimmed to how-to guidance — authoritative security claims live at `/security`. Landing page comparison blocks replaced with links to `/compare/*`. MCP section kept in full per editorial decision.

---

## Context: What's Wrong with the Current Structure

The current docs site was deployed as a placeholder without product context. Key issues:

| Problem | Impact |
|---------|--------|
| **Flat "Platform" section** with 11 pages alphabetically listed | No hierarchy — user can't distinguish core workflow from configuration |
| **"API" section** describes a REST API that doesn't exist publicly | Misleads developers |
| **"Service Economics" is buried** as one section among many | This is our core category — it should be prominently discoverable |
| **Playbooks page is a stub** telling users to "ask the AI" | 35 playbooks exist — each should be a standalone, crawlable page |
| **Missing critical topics**: templates, catalogs, rate cards, check-ins, scenarios, cost attribution | These are DigitalCore's most differentiated capabilities — invisible to users |
| **No separation between "learn the concepts" and "use the product"** | A prospect evaluating and an operator entering data need completely different content |

---

## Design Principles

### Three Audiences, One Site

| Audience | What they need | Typical entry point |
|----------|---------------|-------------------|
| **Prospects & LLMs** | "What does DigitalCore do? How does it work conceptually?" | Landing, Concepts, Playbooks |
| **Users (operators, managers)** | "How do I do X in the product?" | Getting Started, Guides, Platform Reference |
| **Integrators (technical)** | "How do I connect to DigitalCore?" | MCP & Integrations |

### LLM Optimization
- Every section uses Q&A framing — LLMs extract question-answer pairs efficiently
- Each page is self-contained — citable without needing context from other pages
- Playbooks link to the 29 pages already live at `digitalcore.app/learn/playbooks/[slug]` — no duplication
- Concepts before product — explain the domain, then the tool

---

## Full Site Map with Subheaders

### Notation Guide

```
📄  = Page (has its own URL, appears in sidebar)
  ## = H2 subheader within that page
    ### = H3 subheader within that page
🏷️  = Auto-generated (from structured data, no manual authoring)
📂  = Section folder (sidebar group label)
```

---

## 1. Landing Page — `/docs/`

📄 **What is DigitalCore?**

## What is DigitalCore?

### The Problem: Invisible Service Economics

Most service businesses don't know which engagements make money and which ones quietly drain it. Margins erode through scope creep, untracked hours, missed SLA penalties, and cost overruns — but the spreadsheet only tells you after it's too late. Finance sees the P&L at month-end. Delivery sees utilisation numbers. Nobody sees the full picture per engagement, in real time.

### What DigitalCore Does

DigitalCore is a service economics platform that gives you real-time visibility into the financial health of every service engagement. It connects three data domains — Finance, Performance, and Capacity — into a single workspace where planned values meet actual results, automated calculations replace manual formulas, and AI-powered analysis surfaces what needs attention.

You track what you planned. You record what actually happened. DigitalCore shows you the gap — and helps you decide what to do about it.

### Who It's For

DigitalCore is built for organisations that deliver services and need to understand the economics behind them:

- **Managed Service Providers (MSPs)** managing device-based or per-user contracts
- **Professional services and consulting firms** tracking project margins and utilisation
- **IT service desks** measuring SLA compliance and cost-per-ticket
- **Creative and marketing agencies** managing fixed-fee engagements against actual effort
- **NGOs and grant-funded organisations** tracking program costs against budgets

It's used by operations leaders, finance managers, delivery managers, and service desk leads — anyone who needs to answer "are we making money on this engagement?"

## How It Works

### The Engagement-Centric Model (30-second version)

Everything in DigitalCore centres around **engagements** — a specific service delivered to a specific customer over a defined period. Each engagement tracks its own financials, performance metrics, and capacity allocation. Engagements are grouped under services, linked to contracts, and organised into portfolios for a top-down strategic view.

### Three Data Domains: Finance, Performance, Capacity

Each engagement tracks three types of data:

- **Finance** — Revenue, costs, and margins. P&L line items with planned and actual values per month. Categories include revenue, cost of goods sold (COGS), and operating expenses.
- **Performance** — KPIs and SLAs. Metrics like response time, resolution rate, or customer satisfaction, each with targets and thresholds. When actuals breach SLA thresholds, penalties are calculated automatically.
- **Capacity** — Hours by role. Planned and actual hours for each role assigned to the engagement. FTE equivalents are derived automatically from logged hours.

### Automated Cost and Penalty Calculations

DigitalCore automates the calculations that typically require manual spreadsheet work:

- **Capacity → Finance:** When you log hours for a role, DigitalCore multiplies hours by the applicable rate (from rate cards or contract overrides) and creates the corresponding labour cost entry in Finance automatically.
- **Performance → Finance:** When a KPI actual breaches an SLA threshold defined in the contract, DigitalCore calculates the penalty amount (fixed, percentage, or tiered) and creates a penalty cost entry in Finance automatically.

No manual formulas. No copy-paste between sheets. Cross-domain triggers keep everything in sync.

## Key Capabilities

### Monthly Check-ins — Record and track service economics

Check-ins are the core operational rhythm. Each month, you enter actuals for finance, performance, and capacity. DigitalCore compares them against your plans, calculates variances, assigns RAG status (Red / Amber / Green), and updates health scores — all in real time as you enter data.

### Scenario Intelligence — What-if modelling for service decisions

Before committing to a pricing change, staffing adjustment, or contract renegotiation, use scenarios to model the impact. DigitalCore's AI can generate multiple scenario variants with different economic drivers, project the financial effects, and let you compare options side by side. When you're ready, commit a scenario and its values become your new plan.

### Executive Summaries — AI-generated stakeholder reports

Generate narrative reports for any engagement or set of engagements. Choose your audience (executive, operational, financial), select the period, and DigitalCore drafts a structured summary with health indicators, key findings, and recommended actions. Edit, finalize, and export as PDF.

### 29 Playbooks — Operational response guides

Playbooks are structured guides for common service management challenges: margin erosion, capacity shortfalls, SLA breaches, renewal risk, and more. Each playbook includes warning signs, diagnostics, a phased action plan, and the metrics to track. Browse all playbooks at [digitalcore.app/learn/playbooks](https://digitalcore.app/learn/playbooks).

### MCP Integration — Connect your AI tools directly

DigitalCore supports the Model Context Protocol (MCP), allowing you to query your service data, record actuals, generate reports, and run scenarios directly from AI tools like Claude Desktop, Cursor, VS Code, ChatGPT, and Windsurf. A free MCP server with 6 tools is available without an account. Paid MCP access connects to your live data.

## How It Compares

See how DigitalCore differs from other approaches:

- [vs. Spreadsheets](https://digitalcore.app/compare/excel) — Why spreadsheet-based service tracking breaks down at scale
- [vs. ServiceNow](https://digitalcore.app/compare/servicenow) — ITSM tools track tickets, not economics
- [vs. Monday.com](https://digitalcore.app/compare/monday) — Project management tools miss the financial layer
- [vs. Jira](https://digitalcore.app/compare/jira) — Issue tracking without service economics context

## Getting Started

### Free Tier — Start in 5 minutes

Create an account at no cost. The free tier includes core service economics tracking for a single user — enough to set up your first service, create an engagement, and run a check-in.

### View Pricing

See all plans, features, and pricing at [digitalcore.app/pricing](https://digitalcore.app/pricing).

### Connect Your AI Tools

Set up DigitalCore's MCP integration to query your data from Claude, Cursor, VS Code, ChatGPT, or Windsurf. See [MCP & Integrations](/docs/mcp-and-integrations/) for setup instructions.

---

## 2. Getting Started — `/docs/getting-started/`

📂 **Getting Started** (6 pages, sequential order)

### 2.1 📄 Quickstart Overview — `/docs/getting-started/`

## What You'll Set Up

### The 30-Minute Path to First Value

This guide walks you through everything you need to go from a blank account to your first service economics check-in. By the end, you'll have:

- An organisation with at least one team member
- A service with an active engagement
- Templates configured to track finance, performance, and capacity
- Your first monthly check-in entered
- A dashboard showing the health of your engagement

### Prerequisites

All you need is an email address and a modern web browser. No installation, no downloads, no credit card required for the free tier.

## Step-by-Step Overview

### Step 1: Create Your Organisation

Sign up, confirm your email, and set up your organisation details. This takes about 2 minutes. See [Create Your Organisation](/docs/getting-started/organisation).

### Step 2: Define a Service

Create your first service — the thing you deliver to customers. Give it a name, description, category, and owner. See [Services, Engagements & Contracts](/docs/getting-started/core-entities).

### Step 3: Create an Engagement

An engagement is a specific instance of delivering that service to a specific customer. Create one, link it to your service, and assign delivery parties. See [Services, Engagements & Contracts](/docs/getting-started/core-entities).

### Step 4: Configure Templates

Templates define what you track per engagement. Set up finance line items (revenue, costs), performance KPIs, and capacity roles from the catalog. Assign templates to your engagement. See [Configure Your Templates](/docs/getting-started/templates).

### Step 5: Enter Your First Check-in

Go to Operations, open your engagement, and enter actual values for the current month. Watch automated calculations fire — labour costs from hours, SLA penalties from breaches. See [Your First Check-in](/docs/getting-started/first-checkin).

### Step 6: Read Your Dashboard

Return to the dashboard to see health scores, variance indicators, and attention items. See [Reading Your Dashboard](/docs/getting-started/dashboard).

## The Onboarding Checklist

### Essential Steps (5 required)

1. Create your organisation
2. Add at least one service
3. Create an engagement under that service
4. Assign a finance, performance, or capacity template
5. Enter at least one month of actuals

### Optional Steps (6 recommended)

1. Invite team members and assign roles
2. Create a contract and link it to your engagement
3. Set up rate cards for automatic labour cost calculation
4. Define SLA terms in your contract for automatic breach detection
5. Organise services into portfolios
6. Connect your AI tools via MCP

## What to Do Next

Once you've completed your first check-in, explore [Guides](/docs/guides/) for deeper workflows like running scenarios, generating executive summaries, and setting up cross-domain automations.

---

### 2.2 📄 Create Your Organisation — `/docs/getting-started/organisation`

## Sign Up and First Login

### Creating Your Account

Go to [digitalcore.app](https://digitalcore.app) and click **Start Free**. Enter your email address and choose a password. You'll receive a confirmation email within a few minutes.

### Confirming Your Email

Click the confirmation link in the email. This verifies your identity and activates your account. If you don't receive the email, check your spam folder or request a new one from the login page.

### Choosing Your Plan

New accounts start on the free tier automatically. You can upgrade to a paid plan at any time from Settings → Subscription. See [Pricing & Plans](/docs/account/pricing) or visit [digitalcore.app/pricing](https://digitalcore.app/pricing) for details.

## Set Up Your Organisation

### Organisation Name and Details

After your first login, you'll be prompted to name your organisation. This is the company or entity that owns the data. All services, engagements, and users belong to this organisation. Your data is fully isolated — other organisations cannot see it.

### Organisational Structure (Units / Departments)

Optionally, define your internal structure by adding organisational units or departments. These can be used later to group services, assign ownership, and filter dashboards.

### Adding External Partners

If you work with external delivery partners, contractors, or customer organisations, add them under Configuration → Partners. Partners can be assigned as delivery parties on engagements, enabling you to track which external organisation is responsible for specific costs or metrics.

## Invite Your Team

### User Roles: Admin, Manager, Operator, Viewer

DigitalCore uses four roles that control what each user can see and do:

| Role | What They Can Do |
|------|-----------------|
| **Admin** | Full access. Manage users, organisation settings, templates, catalogs, and all data. |
| **Manager** | View and edit engagements, run scenarios, generate summaries. Cannot manage organisation settings. |
| **Operator** | Enter check-in data, view dashboards and reports. Cannot create or modify templates. |
| **Viewer** | Read-only access to dashboards, reports, and engagement data. |

### Sending Invitations

Go to Organisation → Users and click **Invite User**. Enter the person's email and select their role. They'll receive an email invitation with a link to set up their account.

### What Invited Users See

Invited users land on the same dashboard as everyone else, but their available actions depend on their role. An Operator sees the check-in grid but can't create new services. A Viewer can browse dashboards but can't edit data.

### Invitation Expiry and Resending

Invitations expire after a set period. If someone hasn't accepted, you can resend the invitation or cancel it from the Pending Invitations page.

---

### 2.3 📄 Services, Engagements & Contracts — `/docs/getting-started/core-entities`

## Create a Service

### What is a Service in DigitalCore?

A service is the thing you deliver — "Managed IT Support," "Brand Strategy Consulting," "Cloud Infrastructure Management," or "Fundraising Program." Services are organisation-level entities that can have multiple engagements under them.

### Service Fields

- **Name** — A clear, descriptive name for the service
- **Description** — What this service delivers
- **Category** — Group services by type (e.g., Managed Services, Consulting, Support)
- **Owner** — The person responsible for this service's overall performance

### Assigning to a Portfolio

Portfolios are optional groupings that cut across services. You might have a "Key Accounts" portfolio or a "Public Sector" portfolio. Assign a service to one or more portfolios for top-level health views and strategic grouping.

## Create an Engagement

### What is an Engagement?

An engagement is a specific instance of delivering a service to a specific customer over a defined period. If "Managed IT Support" is the service, then "Managed IT Support for Acme Corp — 2025" is the engagement. All financial tracking, performance measurement, and capacity planning in DigitalCore happens at the engagement level.

### Engagement Fields

- **Name** — Identifies this specific engagement
- **Service** — Which service this engagement belongs to
- **Status** — Draft, Active, On Hold, Completed, or Archived
- **Period** — Start and end dates for the engagement

### Linking Engagements to Services

Every engagement must be linked to exactly one service. This creates the hierarchy: Organisation → Service → Engagement. The service provides the grouping; the engagement provides the data.

### Delivery Parties: Who Consumes vs. Who Delivers

Each engagement can have delivery parties assigned — the customer (who receives the service) and the deliverer (who provides it). These parties, drawn from your Engagement Delivery configuration, enable tracking which organisation is responsible for each cost line, KPI, or capacity allocation.

## Create a Contract

### What is a Contract?

A contract is the commercial wrapper around one or more engagements. It defines the financial terms: contract value, type (fixed-fee, time-and-materials, etc.), billing dates, rate overrides, and SLA terms with penalty definitions.

### Contract Fields

- **Name** — Identifies the contract
- **Type** — Fixed-fee, time-and-materials, milestone-based, or other
- **Value** — Total contract value
- **Dates** — Start date, end date, renewal date

### Linking Contracts to Engagements

Link a contract to one or more engagements. When linked, the contract's rate overrides apply to labour cost calculations for those engagements, and SLA terms trigger automatic penalty detection when performance actuals are entered.

---

### 2.4 📄 Configure Your Templates — `/docs/getting-started/templates`

## What Are Templates?

### Templates Define What You Track per Engagement

A template is a reusable configuration that defines the specific items you want to track. Without a template, an engagement has no data to collect. Templates answer the question: "What exactly do we measure for this type of service?"

### Organisation-Level Reusability — Define Once, Apply Many

Templates are defined at the organisation level and can be assigned to multiple engagements. If all your managed services engagements track the same P&L structure, create one finance template and assign it to every managed services engagement.

## Set Up a Finance Template

### Adding P&L Line Items from the Catalog

Go to Configuration → Templates → Finance Templates. Create a new template and add line items from the finance catalog. The catalog contains standard P&L categories that your organisation has defined — or you can generate defaults to get started quickly.

### Revenue, Costs, and Other Categories

Finance template items are organized by P&L category:

- **Revenue** — Monthly recurring revenue, project fees, ad-hoc charges
- **Cost of Goods Sold (COGS)** — Direct labour, subcontractor costs, materials
- **Operating Expenses** — Overhead, tooling, travel

Each item has planned and actual values per month. Some items (like labour costs) can be populated automatically from capacity data.

## Set Up a Performance Template

### Adding KPIs from the Catalog

Create a performance template and add KPIs from the performance catalog — metrics like First Call Resolution, Response Time, Customer Satisfaction, or Uptime. Each KPI comes from the catalog with a standard definition.

### Targets and Measurement Direction

For each KPI, configure:

- **Target value** — What "good" looks like
- **Amber threshold** — The warning zone
- **Red threshold** — The failure zone
- **Direction** — Higher-is-better (e.g., satisfaction score), Lower-is-better (e.g., response time), or Target-is-best (e.g., utilisation %)

## Set Up a Capacity Template

### Adding Roles from the Catalog

Create a capacity template and add roles from the roles & rates catalog — positions like "Senior Consultant," "Service Desk Analyst," or "Project Manager." Each role has an associated hourly rate used for automatic cost calculations.

### Planned Hours per Role

Set the planned hours per month for each role. This becomes your capacity baseline. When actuals are entered, DigitalCore calculates FTE equivalents and utilisation rates automatically.

## Assign Templates to Engagements

### How Template Assignment Works

Go to your engagement and assign the finance, performance, and capacity templates you've created. You can assign different templates to different engagements — a managed services engagement might use a different KPI set than a consulting engagement.

### What Happens When You Assign a Template

When you assign a template, DigitalCore creates engagement-level configuration for each item. You can then set monthly targets (plans), and the check-in grid becomes available for entering actual values. Default settings from the template are inherited but can be overridden per engagement.

---

### 2.5 📄 Your First Check-in — `/docs/getting-started/first-checkin`

## What is a Check-in?

### Monthly Data Entry — The Core Operational Rhythm

A check-in is the monthly process of recording what actually happened on an engagement. You enter actual values for finance, performance, and capacity — and DigitalCore compares them against your plans, calculates variances, detects SLA breaches, derives labour costs, and updates health scores.

Check-ins are how DigitalCore stays current. Without them, the platform only has your plans. With them, you get the full plan-vs-actual picture.

### What Data Goes In, What Insights Come Out

| You enter | DigitalCore calculates |
|-----------|----------------------|
| Revenue actuals | Revenue variance against plan |
| Cost actuals | Cost variance, margin impact |
| KPI actuals | SLA breach detection, penalty amounts |
| Hours by role | Labour costs (hours × rate), FTE, utilisation |

## Enter Finance Actuals

### The Multi-Period Finance Grid

Navigate to Operations → your engagement → Check-in tab → Finance. You'll see a grid with your template line items as rows and months as columns. Each cell shows the planned value (target) and has a field for the actual value.

### Planned vs. Actual Values

Enter the actual amount for each finance line item for the current month. The grid immediately shows the variance (actual minus planned) and colour-codes it:

- **Green** — Actual is on track or better than plan
- **Amber** — Variance is within the warning band
- **Red** — Significant deviation from plan

### What Updates Automatically

You don't need to enter everything manually. Two types of entries are created automatically:

- **Labour costs** — When capacity hours are logged, DigitalCore creates a finance entry for the corresponding cost using the applicable hourly rate
- **SLA penalties** — When a KPI breaches its SLA threshold, DigitalCore creates a finance entry for the calculated penalty amount

These automatic entries appear in your finance grid with a source indicator showing they were system-generated.

## Enter Performance Metrics

### Recording KPI Actuals

Switch to the Performance tab. Enter actual values for each KPI — for example, 95.2% for First Call Resolution or 4.3 hours for Average Response Time.

### What Happens When an SLA is Breached

If a KPI actual breaches the SLA threshold defined in the engagement's linked contract, DigitalCore:

1. Detects the breach based on the operator (greater than, less than, or equals)
2. Calculates the penalty amount based on the contract terms (fixed amount, percentage of contract value, or tiered)
3. Creates a penalty event for audit trail
4. Optionally creates a corresponding finance entry for the penalty cost

This happens automatically as you enter the actual value.

## Enter Capacity Hours

### Recording Hours by Role

Switch to the Capacity tab. Enter the actual hours worked for each role for the current month.

### Seeing Labour Costs Appear in Finance Automatically

As soon as capacity hours are saved, DigitalCore:

1. Looks up the applicable hourly rate (from contract rate overrides, rate cards, or organisation defaults)
2. Calculates: labour cost = hours × rate
3. Creates a finance entry in the corresponding COGS labour line item

Switch back to the Finance tab to see the automatically generated cost entry.

## Review Your Results

### Domain Summary Cards

At the top of the check-in view, summary cards show the overall status for each domain: total revenue and costs for Finance, KPIs met vs. breached for Performance, and hours planned vs. actual for Capacity.

### RAG Status Indicators (Red / Amber / Green)

Every metric has a RAG status based on its variance from plan. Domain-level and engagement-level RAG statuses roll up from individual items. A single red KPI can make the entire performance domain show as red.

### Effects Across Domains

The cross-domain effects are visible immediately: capacity hours generate finance costs, performance breaches generate finance penalties. The engagement health score reflects all three domains combined.

---

### 2.6 📄 Reading Your Dashboard — `/docs/getting-started/dashboard`

## The Dashboard Overview

### What You See on First Login

The dashboard is your home screen. It provides a high-level view of everything that needs your attention across all your services and engagements.

### Quick Stats: Active Services, Due This Week, Overdue

At the top, quick stat cards show: how many services are active, how many check-ins are due this week, and how many are overdue. These numbers update as you and your team complete check-ins.

## Dashboard Sections

### Attention Required — Overdue and Upcoming Items

The Attention Required section lists engagements that need action: overdue check-ins, recently breached SLAs, or engagements with deteriorating health scores. Items are sorted by urgency.

### Portfolio Health — Overall Score and Domain Breakdowns

If you've organised services into portfolios, the portfolio health section shows aggregate health scores. Each portfolio displays its overall score (0-100) and breakdowns by finance, performance, and capacity domains.

### Workspace Launchers — Jump to Operations, Decisions, Strategy

Quick-access cards let you jump directly to the three core workspaces:

- **Operations** — Manage engagements and check-ins
- **Decisions** — View and manage governance cases with scenarios
- **Strategy** — OKRs, cockpit, and AI initiatives

### AI Insights — Recommendations Based on Your Data

The AI Insights section surfaces observations and recommendations generated from your data: margin trends, capacity warnings, anomaly detection, and suggested actions.

### Quick Actions — New Check-in, Log Decision, View Summaries

Shortcut buttons for the most common tasks: start a new check-in, create a governance decision, or view recent executive summaries.

## Understanding Health Scores

### What 0-100 Means

Health scores range from 0 (critical) to 100 (excellent). They aggregate multiple factors including plan-vs-actual variance, data freshness, trend direction, and coverage (how many items have data entered).

### Finance, Performance, Capacity Sub-Scores

The overall health score is composed of three sub-scores — one per data domain. Each sub-score weighs the variance and RAG status of items in that domain. You can drill into any sub-score to see which specific items are driving it up or down.

### Data Freshness and Service Coverage

Health scores also factor in recency: an engagement with stale data (no check-in for 2+ months) will see its score decay. Service coverage measures what percentage of your services have active engagements with current data.

## What to Do Next

### Recommended Workflows for Week 1

After your first check-in and dashboard review:

1. **Invite at least one team member** — Delegate check-in duties to operators
2. **Set up a second engagement** — Compare two engagements side by side
3. **Explore scenarios** — Model a pricing change or staffing adjustment (see [Scenario Intelligence guide](/docs/guides/scenarios))
4. **Generate an executive summary** — Create a stakeholder-ready report from your data (see [Executive Summaries guide](/docs/guides/executive-summaries))
5. **Connect an AI tool via MCP** — Query your data from Claude, Cursor, or VS Code (see [MCP & Integrations](/docs/mcp-and-integrations/))

---

## 3. Concepts — `/docs/concepts/`

📂 **Concepts** (11 pages)

> **Writing guidance for this section:** Focus on *why this matters to a service business* and *what DigitalCore does about it*. Avoid implementation details. Every concept page should be useful even to someone who hasn't signed up — this is the section LLMs and prospects read first.

### 3.1 📄 Service Economics in DigitalCore — `/docs/concepts/service-economics`

## What is Service Economics?

### Quick Definition

Service economics is the discipline of understanding how services make or lose money. It combines revenue tracking, cost attribution, performance measurement, and capacity management into a unified view of financial health — per engagement, per service, and across your portfolio.

### Learn More

For a comprehensive introduction to service economics as a discipline, see the 10-part learning guide on the main site:

- [What is Service Economics?](https://digitalcore.app/learn/guides/what-is-service-economics) — Foundational overview
- [The Complete Guide to Service Economics](https://digitalcore.app/learn/guides/service-economics) — 10 chapters covering the full framework

This page focuses on how DigitalCore implements these concepts in practice.

## How DigitalCore Implements Service Economics

### Real-Time P&L per Engagement

Every engagement in DigitalCore has its own profit-and-loss statement. Revenue, costs, and margins are tracked monthly with planned (target) and actual values. Unlike spreadsheet-based reporting that lags by weeks or months, DigitalCore's P&L updates as soon as data is entered.

### Automated Cost Attribution — Hours × Rates = COGS, Automatically

When someone logs capacity hours for a role, DigitalCore multiplies those hours by the applicable hourly rate and creates the corresponding labour cost entry in the finance domain. No spreadsheet formulas. No manual copying between sheets. The cost appears instantly.

### SLA-Linked Financial Penalties — Breach Detection Triggers Cost Entries

When a KPI actual falls below (or exceeds) the threshold defined in the contract, DigitalCore detects the breach, calculates the penalty amount, and creates a penalty cost entry in finance. The penalty calculation supports fixed amounts, percentage of contract value, and tiered structures.

### Scenario-Based Decision Making — What-if Modelling Before You Commit

Before making a pricing change, staffing decision, or contract renegotiation, model the financial impact with scenarios. DigitalCore projects the effects across all three domains and lets you compare options side by side. Commit a scenario to adopt it as your plan.

## The Three Pillars in Practice

### Revenue Attribution — Track Who Pays for What, per Engagement

Each finance template item categorises revenue by type. Combined with delivery attribution, you can answer not just "how much revenue did this engagement generate?" but "which customer or business unit is responsible for that revenue?"

### Cost Visibility — Direct, Indirect, and Labour Costs with Delivery Party Tracking

Costs are categorised by P&L type (COGS, operating expenses) and can be attributed to specific delivery parties. Labour costs are auto-calculated from capacity hours. External costs are entered manually. Every cost is traceable to its source.

### Margin Analysis — Gross, Contribution, and Net Margins Updated Monthly

With revenue and costs tracked per engagement per month, margins are always current:

- **Gross margin** = Revenue minus direct costs (COGS)
- **Contribution margin** = Gross margin minus allocated operating expenses
- **Net margin** = The bottom line after all attributed costs

## What Makes This Different from a Spreadsheet

### Automated Calculations Replace Manual Formulas

In a spreadsheet, every formula is a point of failure. DigitalCore's automated triggers mean capacity hours always produce the correct cost entry, using the correct rate, in the correct finance line — without anyone writing or maintaining a formula.

### Cross-Domain Triggers Link Capacity, Performance, and Finance

Spreadsheets silo data by tab. DigitalCore connects the three domains: capacity drives finance costs, performance drives finance penalties. A change in one domain immediately reflects in the others.

### Real-Time Variance Tracking Instead of Month-End Surprises

Spreadsheet-based P&Ls are typically assembled at month-end, often with a 2-4 week lag. DigitalCore calculates variance as soon as actuals are entered, showing you the gap between plan and reality immediately.

> This page focuses on *how DigitalCore applies* service economics. The educational "what is service economics?" content lives on the main site in the 10-part learning guide — we link there rather than duplicate.

---

### 3.2 📄 The Engagement-Centric Model — `/docs/concepts/engagements`

## What is an Engagement?

### A Service Instance Between Two Parties

An engagement represents a specific service being delivered to a specific customer over a defined period. If you run a "Managed IT Support" service, each customer contract is a separate engagement — "Managed IT Support for Acme Corp — 2025."

Engagements are the fundamental unit of tracking in DigitalCore. All financial data, performance metrics, and capacity allocations attach to engagements.

### How Engagements Relate to Services, Contracts, and Portfolios

- **Services** are the parent — an engagement always belongs to exactly one service
- **Contracts** are the commercial wrapper — an engagement can be linked to a contract that defines rates and SLA terms
- **Portfolios** are groupings — services (and their engagements) can be organised into portfolios for strategic views

## The Entity Hierarchy

### Organisation → Service → Engagement → Data Tracking

The hierarchy is straightforward:

1. **Organisation** — Your company. All data belongs to one organisation and is isolated from others.
2. **Service** — A type of offering you deliver (e.g., "Cloud Hosting," "Brand Consulting")
3. **Engagement** — A specific delivery of that service (e.g., "Cloud Hosting for Contoso FY2025")
4. **Data** — Finance plans/actuals, performance KPIs, capacity hours — all at the engagement level

### Portfolios as Cross-Cutting Groups

Portfolios group services across natural organisational lines. You might have a "Key Accounts" portfolio spanning multiple service types, or a "Government" portfolio grouping all public sector work.

### Contracts as Commercial Wrappers

Contracts define the commercial terms for one or more engagements: contract value, type (fixed-fee, T&M), dates, rate overrides, and SLA terms with penalty definitions.

## Engagement Lifecycle

### Statuses: Draft → Active → On Hold → Completed → Archived

| Status | Meaning |
|--------|---------|
| **Draft** | Set up in progress. Not yet accepting check-in data. |
| **Active** | Live and accepting monthly check-ins. |
| **On Hold** | Temporarily paused. Data preserved but no new check-ins expected. |
| **Completed** | Service delivery finished. Historical data preserved for reporting. |
| **Archived** | Removed from active views. Still accessible for historical queries. |

### What Happens at Each Stage

- **Draft → Active**: Templates must be assigned before activating. Once active, the engagement appears in the Operations workspace for check-ins.
- **Active → On Hold**: Health scores stop decaying for data freshness. Check-ins can resume when re-activated.
- **Active/On Hold → Completed**: Final check-in should be entered. Engagement moves to historical views.
- **Completed → Archived**: Engagement is hidden from standard lists but remains in the database for reporting and analytics.

## Delivery Attribution

### Customer Party vs. Deliverer Party

Each engagement can track two types of parties:

- **Customer (Consumer)** — The organisation receiving the service
- **Deliverer (Provider)** — The organisation delivering the service

### Tracking Who Is Responsible for Each Cost or Metric

Delivery parties are assigned at the engagement level and can be overridden per item or per period. This enables granular tracking: "Who is responsible for this cost line?" or "Which delivery partner owns this KPI?"

### Multi-Party Engagements

For complex engagements involving multiple delivery partners, each can be assigned as a separate delivery party. Costs and metrics can be attributed to specific partners, enabling showback and multi-vendor management.

---

### 3.3 📄 The Three Data Domains — `/docs/concepts/data-domains`

## Finance Domain

### What It Tracks: P&L per Engagement

The Finance domain tracks profit-and-loss data for each engagement: revenue, costs, and the resulting margins. Every finance item has a planned value (target) and an actual value per month.

### Categories: Revenue, Cost of Goods Sold, Operating Expenses

Finance items are categorised following standard P&L structure:

- **Revenue** — Recurring fees, project revenue, ad-hoc charges
- **Cost of Goods Sold (COGS)** — Direct costs: labour, materials, subcontractors
- **Operating Expenses** — Indirect costs: tooling, overhead, management

### Planned vs. Actual Values

For each item, each month, you set a planned value (what you expect) and record an actual value (what happened). DigitalCore calculates the variance and assigns a RAG status.

### How Costs Can Be Entered Manually or Calculated Automatically

Most cost items are entered manually during monthly check-ins. However, two categories are calculated automatically:

- **Labour costs** — Generated from capacity hours × hourly rates
- **SLA penalties** — Generated from performance breach detection

## Performance Domain

### What It Tracks: KPIs and SLAs per Engagement

The Performance domain tracks key performance indicators and service level agreements. Each KPI has a target, thresholds, and monthly actual values.

### Measurement Direction: Higher-is-Better, Lower-is-Better, Target-is-Best

Each KPI is configured with a direction:

- **Higher-is-better** — e.g., Customer Satisfaction (CSAT): 95% is better than 90%
- **Lower-is-better** — e.g., Average Response Time: 2 hours is better than 4 hours
- **Target-is-best** — e.g., Utilisation Rate: 80% target, both over and under are bad

### Targets, Amber Bands, and Thresholds

Each KPI can have:

- **Target** — The ideal value
- **Amber threshold** — The warning zone (not yet failed, but needs attention)
- **Red threshold** — The failure zone (SLA breach if exceeded/missed)

### What Happens When an SLA Is Breached

When an actual value crosses the SLA threshold defined in the contract, DigitalCore automatically detects the breach, calculates the penalty, logs a penalty event, and optionally creates a finance entry.

## Capacity Domain

### What It Tracks: Hours per Role per Engagement

The Capacity domain tracks how many hours each role spends on each engagement. "Senior Consultant — 160 hours planned, 172 hours actual" for a given month.

### FTE Derivation from Hours

DigitalCore automatically converts hours to FTE equivalents based on standard working hours per month. If your standard is 160 hours/month and someone logs 80 hours, that's 0.5 FTE.

### Utilisation and Billable/Non-Billable Split

Utilisation rate compares actual hours against available capacity. Capacity items can distinguish billable from non-billable hours, enabling accurate utilisation tracking.

### How Logged Hours Automatically Generate Finance Costs

When actual hours are entered, DigitalCore multiplies them by the applicable hourly rate and creates a corresponding finance entry. The rate is looked up from (in priority order): contract-specific engagement rates, contract-level rates, rate card defaults.

## How the Three Domains Connect

### Capacity Feeds Finance: Hours Become Labour Costs

This is the primary cross-domain automation. Every capacity hour entry potentially creates a finance cost entry. The linking is automatic — the system knows which finance line item corresponds to which capacity role through the catalog.

### Performance Feeds Finance: SLA Breaches Become Penalty Costs

The second cross-domain automation. When a performance KPI breaches its SLA threshold, the resulting penalty amount is posted to the finance domain as a cost entry.

### Unified Health Scoring Across All Three

Engagement health is scored across all three domains. A healthy engagement has good financial margins, KPIs meeting targets, and capacity utilisation in the right range. A problem in any domain affects the overall health score.

---

### 3.4 📄 How DigitalCore Tracks What You Plan vs. What Actually Happens — `/docs/concepts/planning-and-actuals`

## The Problem with Simple "Budget vs. Actual"

### Why One-Size-Fits-All Doesn't Work for Services

Traditional budgeting tools give you a single budget line and a single actual line. But service businesses need more nuance: each engagement has different line items, different KPIs, different roles. A consulting engagement tracks different P&L items than a managed services engagement.

### What Happens When Every Engagement Needs Different Config

Without per-engagement configuration, you end up with either: (a) a bloated universal template where most fields don't apply, or (b) dozens of custom spreadsheets, each with its own structure.

## How DigitalCore Solves This

### Organisation-Level Templates — Define What to Track Once

Templates define the structure: which line items, which KPIs, which roles. They're created once at the organisation level and reused across engagements of the same type.

### Engagement-Level Configuration — Override Where Needed

When a template is assigned to an engagement, DigitalCore creates engagement-level configurations that inherit the template defaults. You can override targets, thresholds, or delivery parties per engagement without changing the template.

### Monthly Targets — Set Goals per Period

For each active engagement, set monthly target values (plans) for finance items, KPI targets, and planned hours. These targets become the baseline for variance analysis.

### Monthly Actuals — Record What Really Happened

During monthly check-ins, enter what actually happened: real revenue, real costs, real KPI values, real hours. DigitalCore calculates the variance against plan automatically.

## How It Works in Practice

### Creating a Template with Standard Items from the Catalog

Go to Configuration → Templates and create a new template. Add items from the catalog — each item maps to a standard definition. For finance, add revenue and cost lines. For performance, add KPIs. For capacity, add roles.

### Assigning a Template to an Engagement

Open an engagement and assign the appropriate templates. You can assign one template per domain (finance, performance, capacity) per engagement.

### Setting Monthly Targets

After assigning templates, set target values per item per month. These can be set in bulk for the entire period or adjusted month by month.

### Recording Monthly Actuals During Check-in

Each month, enter actual values in the Operations → Check-in tab. The grid shows plan vs. actual side by side, with variance calculated automatically.

## The Same Pattern Across All Three Domains

### Finance: Track Revenue and Costs

Planned revenue and cost line items per month. Actual values entered during check-in. Variance = actual − planned. Margins derived from revenue minus costs.

### Performance: Track KPIs and SLA Compliance

Target KPI values set per month. Actual values entered during check-in. RAG status based on thresholds. Breach detection if contract SLA terms are defined.

### Capacity: Track Hours and Utilisation

Planned hours per role per month. Actual hours entered during check-in. FTE and utilisation calculated automatically. Labour costs generated in finance.

---

### 3.5 📄 Catalogs & Libraries — `/docs/concepts/catalogs`

## What Are Catalogs?

### Organisation-Wide Definitions for Consistency

Catalogs are your organisation's library of standard definitions. Instead of typing "Labour Cost" as free text on every engagement (and ending up with "Labour Cost," "Labor Costs," "Staff Cost," and "Labour"), you select it from the catalog. One definition, consistent everywhere.

### Why Catalogs Matter: Comparing Apples to Apples Across Engagements

When every engagement uses the same catalog items, you can compare and aggregate across engagements meaningfully. "What's our total Labour Cost across all managed services engagements?" only works if every engagement uses the same catalog entry for labour costs.

## Finance Catalog (P&L Line Items)

### Standard Line Items

The finance catalog defines your standard P&L line items. Common examples:

- Monthly Recurring Revenue
- Project Revenue
- Labour Cost — COGS
- Software Licensing
- Subcontractor Costs
- Travel & Expenses

### Categories: Revenue, Cost of Goods Sold, Operating Expenses

Each catalog item belongs to a P&L category. This categorisation drives margin calculations — revenue minus COGS gives gross margin, minus operating expenses gives net margin.

## Performance Catalog (KPI Definitions)

### Standard KPIs

The performance catalog defines your standard metrics. Common examples:

- Availability / Uptime (%)
- First Call Resolution (%)
- Average Response Time (hours)
- Customer Satisfaction Score
- Ticket Volume
- Mean Time to Resolution (hours)

### Measurement Direction and Default Targets

Each KPI definition includes its measurement direction (higher-is-better, lower-is-better, target-is-best) and optionally a default target value that can be overridden per engagement.

## Capacity Catalog (Roles)

### Standard Roles

The capacity catalog (Roles & Rates) defines your organisation's standard roles:

- Senior Consultant
- Project Manager
- Service Desk Analyst
- Developer
- Solutions Architect

Each role has an associated default hourly rate, which is used for automatic labour cost calculations when no contract-specific rate override exists.

## AI Use Case Catalog

### Tracking AI Usage Across Engagements

The AI use case catalog lets you define and track AI initiatives across your organisation — which engagements use AI, for what purpose, and with what economic impact.

## Why This Matters

### Consistent Reporting Across All Engagements

Same catalog items, same categories, same definitions. Reports and dashboards can aggregate across engagements with confidence.

### Cross-Engagement Benchmarking

Because engagements reference the same catalog items, you can benchmark: "How does Labour Cost compare across my top 10 engagements?"

### One Change Updates All Templates That Use It

If you rename or recategorise a catalog item, every template that references it reflects the change. No need to update 50 spreadsheets.

---

### 3.6 📄 Automated Cost and Penalty Calculations — `/docs/concepts/automation`

## What Happens Automatically?

### Why Automation Matters for Service Economics

Manual cross-referencing between capacity data, rate cards, and finance sheets is a primary source of errors in service organisations. Automation eliminates this by linking data entry directly to financial outcomes.

### Two Key Automations

DigitalCore has two automated cross-domain calculations that trigger as you enter check-in data:

1. **Hours → Labour Costs** (Capacity domain feeds Finance domain)
2. **KPI Breaches → SLA Penalties** (Performance domain feeds Finance domain)

## Hours Become Labour Costs

### When You Log Capacity Hours, DigitalCore Calculates the Cost

Enter actual hours for a role on an engagement. DigitalCore immediately multiplies those hours by the applicable hourly rate and creates a cost entry in the finance domain.

### How It Picks the Right Rate

The system uses a priority hierarchy to find the most specific rate:

1. **Contract rate with engagement match** — Rate specific to this engagement's contract
2. **Contract rate** — General rate defined in the linked contract
3. **Rate card default** — Organisation-level default rate for this role
4. **Any matching rate card** — Fallback if no default is specifically flagged

The most specific rate always wins.

### Where the Cost Appears in Your Finance View

The labour cost appears as an entry in the finance grid, in the line item that matches the role's catalog link (typically a COGS Labour line). It's clearly marked as system-generated so you can distinguish it from manual entries.

## SLA Breaches Become Financial Penalties

### When a KPI Falls Below the Agreed Threshold

If you enter a KPI actual that breaches the SLA threshold defined in the engagement's linked contract, DigitalCore detects the breach automatically.

### How DigitalCore Determines If It's a Breach

The breach check uses the SLA operator defined in the contract terms:

- "Greater than" — Actual exceeds the threshold (e.g., response time > 4 hours)
- "Less than" — Actual falls below the threshold (e.g., availability < 99.5%)

### Penalty Calculation: Fixed Amount, Percentage, or Tiered

The contract defines how the penalty is calculated:

- **Fixed amount** — A flat penalty per breach (e.g., €5,000)
- **Percentage** — A percentage of contract value (e.g., 2% of monthly contract value)
- **Tiered** — Different penalty amounts depending on the severity of the breach

### Where the Penalty Appears in Your Finance View

The penalty creates a cost entry in the finance domain, in the line item linked to the SLA term. It's marked as system-generated with a reference to the specific penalty event.

## Traceability

### Every Auto-Generated Cost is Clearly Labelled

Automated entries are tagged with their source: "Generated from capacity hours" or "Generated from SLA breach." You can trace any automated cost back to the original data that triggered it.

### Manual Entries vs. Automated Entries — Easy to Tell Apart

The finance grid distinguishes manual entries (entered by a user during check-in) from automated entries (generated by triggers). Both contribute to totals and margins equally.

---

### 3.7 📄 Rate Cards & Contract Pricing — `/docs/concepts/rate-cards`

## What Are Rate Cards?

### Organisation-Level Default Rates per Role

A rate card defines the default hourly rate for each role in your organisation. For example: Senior Consultant = €150/hour, Service Desk Analyst = €85/hour. Rate cards provide the fallback pricing used when no contract-specific override exists.

### When Rate Cards Apply

Rate cards are used in automatic labour cost calculations. When DigitalCore needs to calculate the cost of logged hours, it looks for the most specific rate — starting from contract-level overrides and falling back to the rate card if no override exists.

## How DigitalCore Picks the Right Rate

### The Most Specific Rate Wins

The rate lookup follows a priority hierarchy:

| Priority | Source | When It Applies |
|----------|--------|----------------|
| 1 (highest) | Contract rate with engagement match | Rate defined in the contract specifically for this engagement |
| 2 | Contract rate | General rate in the linked contract for this role |
| 3 | Rate card default | Organisation-level default rate (flagged as default) |
| 4 (lowest) | Any matching rate card | Fallback to any rate card with this role |

### Contract-Specific Rates Override Organisation Defaults

When you define a rate in a contract, it takes precedence over the rate card. This allows you to have a standard rate card for internal planning while honouring contracted rates for specific customers.

### Engagement-Specific Rates Are the Most Precise

For maximum granularity, rates can be set at the contract level with specific engagement matching. This handles cases where the same contract covers multiple engagements but with different rate structures.

## Contract SLA Terms

### Defining Performance Thresholds and Consequences

Contract SLA terms define the performance expectations and financial consequences for each KPI:

- **Which KPI** — maps to a performance catalog entry
- **Threshold value** — the minimum (or maximum) acceptable level
- **Operator** — greater-than or less-than
- **Penalty type** — fixed, percentage, or tiered

### Penalty Types: Fixed Amount, Percentage, Tiered

- **Fixed** — A flat euro/dollar amount per breach occurrence
- **Percentage** — A percentage of the monthly or total contract value
- **Tiered** — Multiple penalty levels based on the severity of the breach (e.g., <99.5% = €1,000; <99.0% = €5,000; <98.0% = €15,000)

## How Rates and Terms Flow Through the System

### Rates Power Automatic Labour Cost Calculations

Every time capacity hours are logged, the rate lookup runs. The correct rate is applied and a labour cost entry is created in finance. No manual calculation needed.

### SLA Terms Power Automatic Breach Detection

Every time a performance actual is entered, it's checked against the contract SLA terms. If a breach is detected, the penalty is calculated and posted to finance automatically.

---

### 3.8 📄 Scenario Intelligence — `/docs/concepts/scenarios`

## What is Scenario Intelligence?

### What-If Modelling for Service Economics

Scenario Intelligence lets you model potential changes — pricing adjustments, staffing changes, contract renegotiations — and see their projected financial impact before committing to them.

### How Scenarios Differ from Budgets and Forecasts

A budget is a fixed plan. A forecast is a single revision. A scenario is an explorable option: "What happens if we add 2 FTEs?" "What if revenue drops 15%?" Scenarios let you compare multiple options side by side before deciding which one becomes your plan.

## How Scenarios Work

### Scenarios Model Changes Without Affecting Live Data

A scenario is a sandbox. When you create one, your current plan data is used as the baseline. Drivers (changes) are applied hypothetically — they don't touch your live plan until you explicitly commit.

### Common Scenario Types

- **Reforecast** — Adjusting plans based on emerging actuals
- **Risk Response** — Modelling mitigation strategies for identified risks
- **Growth** — Projecting the impact of winning new business or expanding
- **Cost Reduction** — Evaluating the impact of cutting costs or roles

### Scope: Apply to a Single Engagement or Across a Portfolio

Scenarios can target a single engagement or span multiple engagements for portfolio-level decision-making.

## How Drivers Work

### Percentage Changes

"Increase Revenue by 10%" — applies a percentage multiplier to planned values. Useful for modelling growth or contraction.

### Absolute Changes

"Add 2 FTEs" — adds a fixed amount to the current plan. Useful for modelling specific resource additions or reductions.

### Fixed Values

"Set availability target to 99.9%" — replaces the planned value with a specific number. Useful for modelling contract renegotiations.

## Scenario Lifecycle

### Create → Evaluate → Compare → Commit → Track Accuracy

1. **Create** — Build a scenario with drivers applied to your current plan
2. **Evaluate** — Review projected values and financial impact
3. **Compare** — Place multiple scenarios side by side to see trade-offs
4. **Commit** — Adopt the chosen scenario as your new plan
5. **Track Accuracy** — Later, compare what the scenario predicted vs. what actually happened

### What "Commit" Means — Adopting the Plan

Committing a scenario writes its projected values into your live plan. Your old plan values are preserved for historical comparison.

### Reversing a Commit

Committed scenarios can be undone. Reversing restores the previous plan values.

### Later: Checking How Accurate the Prediction Was

After actuals are recorded, you can review a committed scenario's accuracy: how close were the projections to what actually happened?

## AI-Powered Scenario Generation

### Ask DigitalCore to Generate Options Based on Your Data

Instead of manually building scenarios, ask the AI to generate multiple options. Describe the situation — "margins are dropping, what can we do?" — and DigitalCore creates several scenario variants with different approaches.

### Review Multiple AI-Suggested Approaches

The AI generates 2-4 distinct options — for example, a conservative cost-cutting scenario, an aggressive growth scenario, and a balanced approach. Each comes with projected financial impact.

### Refine Through Conversation

Adjust AI-generated scenarios through natural language: "Make the cost reduction more aggressive" or "Add a revenue increase to option B."

---

### 3.9 📄 Health Scores & RAG Status — `/docs/concepts/health-scores`

## What Are Health Scores?

### 0-100 Score per Engagement, per Domain

Every engagement in DigitalCore has a health score from 0 (critical) to 100 (excellent). The score is calculated separately for each domain (Finance, Performance, Capacity) and combined into an overall engagement health score.

### RAG Status: Red, Amber, Green — What Each Means

| RAG | Meaning | Typical Score Range |
|-----|---------|-------------------|
| **Green** | Healthy — actuals are on track with plans | 70-100 |
| **Amber** | Warning — notable variance from plan, needs monitoring | 40-69 |
| **Red** | Critical — significant deviation, action needed | 0-39 |

## What Drives Each Score

### Finance Health: How Close Are Actuals to Plan?

Finance health measures the variance between planned and actual values for revenue and cost items. Large cost overruns or revenue shortfalls drive the score down. Meeting or exceeding revenue targets while keeping costs on plan drives the score up.

### Performance Health: How Many KPIs Are Below Target?

Performance health counts how many KPIs are meeting their targets vs. in the amber or red zone. A single red KPI (SLA breach) can significantly impact the domain score.

### Capacity Health: Is Utilisation in the Right Range?

Capacity health evaluates whether utilisation is in the healthy range. Both under-utilisation (paying people who aren't productive) and over-utilisation (burnout risk) drive the score down.

### Overall Health: Weighted Combination

The overall engagement health score combines the three domain scores. The weighting ensures that a critical failure in any single domain is visible in the overall score.

## Portfolio Health

### Aggregated Across All Services

Portfolio health aggregates the health scores of all services (and their engagements) within the portfolio. It provides a strategic view: "Overall, how healthy is my Key Accounts portfolio?"

### Distribution: How Many Engagements Are Red / Amber / Green

Beyond the average score, portfolio health shows the distribution: 12 green, 5 amber, 2 red. The distribution matters — an average score of 65 could mean everything is mediocre, or it could mean most are healthy with a few in crisis.

### Trends: Improving, Declining, Stable

Health scores are tracked over time. Trend indicators show whether each engagement and portfolio is improving, declining, or stable compared to the previous period.

## Attention Flags

### What Triggers a Flag on the Dashboard

The dashboard highlights engagements that need attention:

- Health score dropped by more than a configurable threshold
- Check-in is overdue
- SLA breach detected
- Significant variance from plan

### Overdue vs. Upcoming Items

Attention items are split into **overdue** (past-due check-ins, unresolved breaches) and **upcoming** (check-ins due this week, approaching contract renewals).

## Customisable Thresholds

### Adjusting What "Red" and "Green" Mean for Your Organisation

The default RAG thresholds work for most organisations, but you can customise them. If your organisation considers a 5% variance acceptable, you can widen the green band. If you're in a high-SLA environment, you might narrow it.

---

### 3.10 📄 AI Capabilities — `/docs/concepts/ai-capabilities`

## What the AI Can Do

### 7 Capabilities That Follow the Management Workflow

DigitalCore's AI is organised around the natural workflow of service management. Rather than a generic chatbot, it provides seven specific capabilities — each designed for a distinct step in the management cycle.

### Monitor → Record → Diagnose → Plan → Decide → Learn → Communicate

| Capability | What It Does |
|-----------|-------------|
| **Monitor** | Get health snapshots for portfolios and engagements |
| **Record** | Log hours, finance actuals, and KPI values via natural language |
| **Diagnose** | Generate showback reports and variance analysis |
| **Plan** | Create and refine what-if scenarios |
| **Decide** | Compare scenarios and commit to plans |
| **Learn** | Explore KPI definitions, playbooks, and benchmarks |
| **Communicate** | Generate period summaries and executive reports |

## Monitor — Health Snapshots

### Get an Instant Overview of Portfolio or Engagement Health

Ask the AI to check the health of your portfolio or a specific engagement. It returns the current health score, domain breakdowns, top concerns, trend direction, and anomalies — without navigating through multiple screens.

## Record — Enter Data via Natural Language

### Log Hours, Finance Actuals, or KPI Values by Asking

Instead of navigating to the check-in grid, tell the AI: "Record 160 hours for Senior Consultant on the Acme engagement for January." The AI validates the input, confirms with you, and records the data.

### Automated Cost and Penalty Calculations Still Apply

Data entered via AI goes through the same automation triggers as data entered through the UI. Hours still generate labour costs. KPI values still trigger breach detection.

## Diagnose — Understand What's Happening

### Showback Reports: See How IT Costs Allocate to Departments

Ask the AI to generate a showback report for a specific period. It breaks down costs by delivery party, showing which department or customer carries which portion of the costs.

## Plan — Model What-If Scenarios

### Ask AI to Generate Scenario Options from Your Data

Describe your situation: "Margins on the Contoso engagement are declining. What are my options?" The AI analyses the data and generates 2-4 scenario variants with projected financial impact.

### Create and Adjust Scenarios via Conversation

Refine scenarios through natural dialogue: "Make the cost reduction more aggressive" or "What if we also increased the price by 5%?"

## Decide — Compare and Commit

### Compare Scenarios Side-by-Side

Ask the AI to compare two or more scenarios. It presents the key differences: projected margin change, capacity impact, risk factors.

### Commit a Scenario to Adopt the Plan

When you've decided, tell the AI to commit the chosen scenario. It writes the projected values into your live plan.

## Learn — Education and Playbooks

### Explore Metrics with Formulas and Benchmarks

Ask the AI about any KPI: "What is First Call Resolution? How do I calculate it? What's a good target?" It returns the definition, formula, benchmarks by industry, and tips for improvement.

### Browse 29 Service Management Playbooks

Ask for a playbook by topic: "Show me the playbook for renewal risk" or "What playbooks do you have for capacity planning?" See all playbooks at [digitalcore.app/learn/playbooks](https://digitalcore.app/learn/playbooks).

### Run a Quick Service Reality Check

Provide basic numbers (revenue, costs, FTEs, SLA achievement) and the AI calculates a health score with commentary — no account needed.

## Communicate — Generate Reports

### Period Summaries Tailored to Different Audiences

Generate a narrative summary for a specific period and audience: "Summarise Q4 for the Acme engagement, written for an executive audience." The AI produces a structured summary with key highlights, concerns, and recommendations.

### Executive Summary Generation

Create multi-section reports covering multiple engagements. The AI drafts each section with data-backed analysis, health indicators, and recommended actions. Edit, finalize, and export as PDF.

---

### 3.11 📄 Delivery Attribution — `/docs/concepts/delivery-attribution`

## What is Delivery Attribution?

### Tracking Which Party is Responsible for Each Cost or Metric

In many service engagements, costs and responsibilities are shared between multiple parties. Delivery attribution in DigitalCore lets you track which party — customer side or deliverer side — is responsible for each specific cost line, KPI, or capacity allocation.

### Customer Side vs. Deliverer Side

- **Customer (Consumer)** — The organisation receiving and paying for the service
- **Deliverer (Provider)** — The organisation delivering the service (could be your own team or a subcontractor)

## How It Works

### Assign Delivery Parties to an Engagement

Go to the engagement and configure delivery parties. Each party is drawn from your engagement delivery records — typically your organisation (the deliverer) and the customer's organisation (the consumer).

### Set a Default Party When Configuring the Engagement

When configuring the engagement, set a default delivery party. This default applies to all items unless specifically overridden. Most engagements have a single deliverer, making the default sufficient.

### Override for Specific Items or Periods When Needed

For complex engagements, override the delivery party on specific plan or measure entries. For example, in a co-managed service, some cost lines might be attributed to the customer's team and others to your team.

## Use Cases

### Showback: Allocating IT Costs to Consuming Departments

Internal IT shared services can use delivery attribution to show each business unit how much of the service cost they're consuming. This powers chargeback and showback reporting.

### Multi-Vendor: Splitting Costs Across Delivery Partners

When multiple vendors deliver parts of a service, attribute costs and metrics to each vendor. This enables accurate vendor performance comparison and cost management.

### Internal: Tracking Shared Service Centre Economics

Shared service centres can track the economics of services delivered to internal business units, with each unit tracked as a delivery party for accurate cost allocation.

## Attribution in Reports

### Filtering by Delivery Party

Dashboards and reports can be filtered by delivery party, showing only the costs, metrics, and hours attributed to a specific customer or deliverer.

### Aggregating Across Engagements by Party

Cross-engagement reporting aggregates by delivery party: "What is the total cost attributed to Acme Corp across all engagements?" This enables customer-level profitability analysis.

---

## 4. Guides — `/docs/guides/`

📂 **Guides** (11 pages — task-oriented workflows for active users)

> **Writing guidance for this section:** Step-by-step instructions with screenshots. Focus on *what the user clicks* and *what they should see*. Reference product screens by name, not by code component.

### 4.1 📄 Running a Monthly Check-in — `/docs/guides/monthly-checkin`

## Overview

### What is the Monthly Check-in?

The monthly check-in is how you record what actually happened on each engagement: revenue received, costs incurred, KPI results, and hours worked. It takes 20-30 minutes per engagement, depending on how many line items you track. Think of it as filling in the "actuals" column next to your plan.

### What You'll Need Before Starting

- **Templates assigned** — Finance, performance, and/or capacity templates must be assigned to the engagement
- **Monthly targets set** — Planned values should be in place so DigitalCore can calculate variance
- **Actual data** — The real numbers from the month: invoiced amounts, costs, KPI readings, hours logged

## Step 1: Open the Engagement Workspace

### Navigating to Operations → Workspace → Engagement

From the left sidebar, go to **Operations → Workspace**. Find your engagement using the search bar or engagement list. Click into it to open the engagement workspace.

### Selecting the Period Range

At the top of the check-in tab, use the period range picker to select the months you want to work with. Presets include **Last 3 months**, **Last 6 months**, **Year to Date**, or **Custom Range**. The grid shows columns for each selected month.

## Step 2: Enter Finance Actuals

### Using the Multi-Period Finance Grid

The Finance tab shows a grid with rows for each finance template item (revenue lines, cost lines) and columns for each month. For each cell, you can see the planned value and enter the actual value.

### Entering Revenue, Costs, and Other Line Items

Click into a cell and type the actual amount. Revenue items show income, cost items show expenses. The grid auto-saves as you move between cells.

### Understanding Auto-Populated Labour Costs

Some cost cells may already have values — these are labour costs automatically calculated from capacity hours (entered in Step 4 or a previous check-in). Auto-generated entries are visually distinguished from manual entries.

## Step 3: Enter Performance Metrics

### Using the Multi-Period Performance Grid

Switch to the Performance tab. The grid shows rows for each KPI and columns for each month. Each cell has the target value displayed alongside the actual input field.

### Recording KPI Actuals

Enter the measured value for each KPI in each month. For example, enter 99.2% for Availability or 3.5 hours for Average Response Time.

### What Happens When an SLA Is Breached

If the actual value you enter breaches the SLA threshold defined in the engagement's linked contract, DigitalCore immediately:
1. Detects the breach based on the threshold and operator
2. Calculates the penalty amount (fixed, percentage, or tiered)
3. Logs a penalty event for audit purposes
4. Creates a cost entry in the finance domain (if auto-create is enabled)

You'll see the RAG indicator change to red, and the penalty amount appears in the finance grid.

## Step 4: Enter Capacity Hours

### Using the Multi-Period Capacity Grid

Switch to the Capacity tab. The grid shows rows for each role and columns for each month. Enter the actual hours worked by each role.

### Recording Hours per Role

Enter the total hours for each role on this engagement for the month. For example: Senior Consultant — 160 hours, Service Desk Analyst — 80 hours.

### Watching Labour Costs Appear in Finance

As you enter hours, DigitalCore multiplies them by the applicable hourly rate and creates a corresponding cost entry in the finance grid. Switch back to the Finance tab to see the auto-generated labour costs.

## Step 5: Review the Results

### Opening the Domain Summary

After entering data across all three domains, open the **Domain Summary** to see the consolidated view: total revenue, total costs, margin, KPI status, and utilisation metrics for the period.

### Understanding RAG Status Changes

Each item and each domain now shows an updated RAG indicator based on the variance between plan and actual. Green means on track, amber means needs monitoring, red means significant deviation.

### Checking Attention Items on the Dashboard

Return to the Dashboard to see updated attention items. Any engagement with significant variance, SLA breaches, or overdue data will appear in the Attention Required section.

## Tips

### Compact vs. Comfortable View Density

Toggle between **Compact** (more rows visible, less whitespace) and **Comfortable** (easier to read, more spacing) view modes depending on your preference and screen size.

### Using Period Presets (Last 3, Last 6, YTD, Custom)

Use period presets to quickly focus the grid on the relevant months. **Last 3** is ideal for monthly check-ins. **YTD** is useful for quarterly reviews.

---

### 4.2 📄 Setting Up Templates for a New Engagement — `/docs/guides/template-setup`

## Before You Start

### Ensure Catalog Items Exist

Before creating templates, verify that the catalog items you need are already in the system:

- **Finance Catalog** — P&L line items (revenue types, cost categories)
- **Performance Catalog** — KPI definitions (metrics, measurement direction, default targets)
- **Capacity Catalog** — Roles (job titles with default hourly rates)

If you need new catalog items, add them first in **Configuration → Library / Catalogs**.

### Understand How Templates Flow to Engagements

Templates are reusable configurations that define what to track. When you assign a template to an engagement, engagement-level copies are created that inherit the template defaults but can be customised per engagement.

## Create a Finance Template

### Adding P&L Line Items from the Finance Catalog

Go to **Configuration → Templates → Finance**. Create a new template and give it a descriptive name (e.g., "Managed Services — Standard P&L"). Add items from the finance catalog: select revenue lines, COGS items, and operating expense items.

### Configuring Default Values per Item

For each item, you can optionally set default values — default planned amounts that pre-populate when the template is assigned. Leave defaults blank if targets vary per engagement.

## Create a Performance Template

### Adding KPIs from the Performance Catalog

Go to **Configuration → Templates → Performance**. Create a new template and add KPIs from the performance catalog. Each KPI inherits its measurement direction and default target from the catalog.

### Setting Targets

Override the default targets if needed for this template. For example, a premium service template might set Availability to 99.9% while a standard template uses 99.5%.

## Create a Capacity Template

### Adding Roles from the Capacity Catalog

Go to **Configuration → Templates → Capacity**. Create a new template and add roles from the capacity catalog. Each role inherits its default hourly rate.

### Setting Planned Hours and FTE Targets

For each role, set the baseline planned hours per month. DigitalCore automatically calculates the FTE equivalent.

## Assign Templates to an Engagement

### What Gets Created Automatically

When you assign a template to an engagement, DigitalCore creates engagement-level configurations for each template item. These are individual copies that can be customised without affecting the original template.

### Verifying the Assignment

After assignment, open the engagement's check-in tab. You should see the finance grid populated with the template's line items, the performance grid with KPIs, and the capacity grid with roles. All ready for targets and actuals.

## Advanced: Project Templates

### Pre-Configured Workstreams, Milestones, and Deliverables

Project templates are separate from the three data-domain templates. They define the timeline structure for project-based engagements: workstreams (phases), milestones (gates), and deliverables.

### Reusing Project Structures Across Engagements

Assign a project template to an engagement to create a pre-populated timeline. Adjust dates and details per engagement while maintaining a consistent project structure.

---

### 4.3 📄 Creating and Evaluating Scenarios — `/docs/guides/scenarios`

## When to Create a Scenario

### Common Triggers

Create a scenario when you identify a potential change or risk:

- **Cost overrun** — Actuals exceeding plan, need to model corrective actions
- **Revenue change** — Customer requesting pricing revision, need to model impact
- **Capacity shift** — Team member leaving or joining, need to model cost effects
- **Contract renewal** — Renegotiating terms, need to compare options

### Choosing the Right Scenario Type

| Type | When to Use |
|------|------------|
| **Reforecast** | Update projections based on recent actuals |
| **Risk Response** | Model mitigation strategies for identified problems |
| **Growth** | Project impact of expansion or new business |
| **Cost Reduction** | Evaluate impact of efficiency measures |

## Option A: AI-Generated Scenarios

### Using "Generate Options" for an Engagement

Navigate to the engagement's scenario section and select **Generate Options**. Describe the situation or goal: "Margins are declining, what options do I have?" The AI analyses the engagement's current data and generates 2-4 distinct scenario variants.

### Reviewing the AI-Suggested Approaches

Each AI-generated scenario comes with:
- A descriptive label (e.g., "Conservative Cost Cut," "Balanced Approach," "Growth Bet")
- The specific drivers applied
- Projected financial impact (revenue, cost, and margin changes)

## Option B: Manual Scenario Creation

### Creating a Blank Scenario

Create a new scenario from the Decisions workspace. Give it a name and description, and select the target engagement(s). The scenario starts with your current plan as the baseline.

### Adding Drivers (Percentage, Absolute, or Fixed Value)

Add drivers to model changes:
- **Percentage**: Revenue +10%, or All Costs −5%
- **Absolute**: +2 FTEs (adds hours and corresponding labour costs)
- **Fixed Value**: Set availability target to 99.9%

Each driver specifies which domain, which items, and what change to apply.

## Evaluating and Refining

### Reading the Impact View

The Impact tab shows the projected effects of all drivers combined: how revenue, costs, margins, KPIs, and capacity would change if the scenario were adopted.

### Adjusting Driver Values

Edit individual drivers to fine-tune the scenario. Increase or decrease percentages, change which items are affected, or add new drivers. The Impact view updates immediately.

### Comparing Multiple Scenarios Side-by-Side

Open the comparison view to place two or more scenarios next to each other. See the key differences: projected margin, capacity requirement, risk factors. This is where you make the decision.

## Committing a Scenario

### What "Commit" Does — Adopting the Plan

Committing a scenario writes its projected values into your live plan. Your old plan values are preserved in the scenario history for reference.

### Undoing a Commit

If you change your mind, reverse the commit. DigitalCore restores the previous plan values and marks the scenario as reverted.

## Checking Accuracy Later

### Comparing Predictions to Actuals

After actuals are recorded for the scenario's period, return to the scenario and check accuracy. How close were the projections to reality? This feedback loop improves your modelling intuition over time.

---

### 4.4 📄 Building an Executive Summary — `/docs/guides/executive-summaries`

## What is an Executive Summary?

### Multi-Section Report with AI-Generated Narratives

An executive summary is a structured report covering one or more engagements over a defined period. It includes sections for financial performance, KPI status, team utilisation, and more — each with AI-generated narrative text tailored to your chosen audience.

### When to Create One

- **Monthly** — Summarise the past month for internal stakeholders
- **Quarterly** — Provide a comprehensive review for management or customers
- **Client-Facing** — Create a report tailored for external audiences

## Create a New Summary

### Step 1: Select Engagement

Navigate to **Intelligence → Summaries** and click **Create New**. Select the engagement (or engagements) to include.

### Step 2: Select Timelines to Include

Choose which timelines (engagements, workstreams) should contribute data to the report.

### Step 3: Choose Report Template

Select a report template that defines the structure: **Weekly Update**, **Monthly Review**, or **Client Report**. Each template includes different section types.

### Step 4: Set Period

Define the period the summary covers — a single month, a quarter, or a custom date range.

## Using the Summary Editor

### Available Section Types

The editor presents a list of sections, each covering a different aspect:

- Financial Snapshot — Revenue, costs, margins, variance
- KPI Overview — Performance metrics with RAG status
- Team Utilisation — Capacity hours and FTE allocation
- Highlights — Notable achievements or milestones
- Risks & Issues — Items needing attention
- Recommendations — Suggested actions

### Toggling Section Visibility

Show or hide sections depending on your audience. A customer-facing report might hide internal utilisation data, while an internal review shows everything.

### Health Banner

The summary header shows a health banner — **Healthy**, **At Risk**, or **Critical** — based on the engagement's current health score.

## AI Narratives

### Generating AI Text for Individual Sections

Click the AI generation button on any section to produce narrative prose. The AI analyses the data for that section and writes a clear summary: "Revenue was 8% above plan in Q4, driven primarily by project work on the cloud migration initiative…"

### Regenerating All Sections

Click **Regenerate All** to produce fresh AI text for every section at once.

### Audience Targeting

Select the target audience before generating:

| Audience | Style |
|----------|-------|
| **Internal** | Candid, includes internal metrics, references team names |
| **Customer** | Professional, focuses on service delivery and SLA compliance |
| **Executive** | High-level, emphasises strategic implications and decisions needed |
| **Board** | Condensed, focuses on financials and risk |

## Finalising and Sharing

### Finalise and Lock

When the summary is ready, click **Finalise**. This locks the content, preventing further edits, and records the finalised date.

### Download PDF

Export the finalised summary as a PDF for distribution. The PDF includes all visible sections, health banner, and data tables.

---

### 4.5 📄 Configuring Rate Cards and Contract Pricing — `/docs/guides/rate-cards`

## Set Up Organisation Rate Cards

### Creating Roles in the Capacity Catalog

Go to **Configuration → Library / Catalogs → Roles & Rates**. Add your organisation's standard roles: Senior Consultant, Project Manager, Service Desk Analyst, Developer, etc.

### Adding Default Rates per Role

For each role, set the default hourly rate. This rate is used for automatic labour cost calculations when no contract-specific override exists.

## Configure Contract-Specific Rates

### Overriding Rates for Specific Contracts

Open a contract's detail page and go to the **Rates** tab. Add rate overrides for specific roles. For example, if the standard rate for Senior Consultant is €150/hour but this contract specifies €135/hour, add the override here.

### Engagement-Specific Rate Variants

For maximum granularity, rates can be set with engagement-level specificity within a contract. This handles multi-engagement contracts where different engagements may have different pricing.

## Configure SLA Terms

### Adding Performance Terms to a Contract

In the contract detail, go to the **SLA Terms** tab. Add terms for each KPI that carries financial consequences:

1. **Select the KPI** — from the performance catalog
2. **Set the threshold** — the value that triggers a breach
3. **Choose the operator** — greater than or less than
4. **Define the penalty** — fixed amount, percentage, or tiered

### Setting Thresholds and Penalty Types

For tiered penalties, define multiple levels. Example for Availability:
- Below 99.5%: €1,000 penalty
- Below 99.0%: €5,000 penalty
- Below 98.0%: €15,000 penalty

## Verify Your Setup

### Testing: How DigitalCore Selects the Right Rate

Enter test capacity hours and verify that the automatic labour cost uses the expected rate. Check the finance grid to see which rate was applied.

### Common Issues and Troubleshooting

- **Wrong rate applied?** Check whether the contract rate is linked to the correct engagement. Contract-level rates override organisation defaults.
- **No cost generated?** Verify that the capacity role has a linked finance catalog item (typically "Labour Cost — COGS").

---

### 4.6 📄 Importing Data from Excel/CSV — `/docs/guides/data-import`

## Supported Import Types

### Entity Import

Import core entities in bulk: services, engagements, contracts, partners, and stakeholders. Useful when onboarding an existing portfolio into DigitalCore.

### Financial Data Bulk Import

Import historical financial data (planned and actual values) for existing engagements. Useful for migrating from spreadsheet-based tracking.

### Download a Template

For each import type, download a pre-formatted Excel template from the Bulk Upload page. The template includes all required and optional columns with example data.

## Using the Bulk Upload Page

### Accessing Configuration → Bulk Upload

Navigate to **Configuration → Bulk Upload** from the left sidebar. Select the entity type you want to import.

### Uploading a File

Drag and drop your Excel or CSV file, or click to browse. Supported formats: `.xlsx`, `.xls`, `.csv`.

### Reviewing the Staging Screen

After upload, the data appears in a staging table. Each row is validated against the expected schema. Valid rows are marked green, errors are highlighted in red with explanatory messages.

### Validating and Confirming Import

Review any errors and fix them in the staging table or go back to your original file. Once all rows validate, click **Confirm Import** to write the data.

## Common Issues

### Column Mapping Errors

If column headers in your file don't match the expected names, the staging screen will show mapping warnings. Rename columns to match the template headers.

### Duplicate Detection

The system checks for duplicates based on key fields (e.g., engagement name + service). Duplicates are flagged and can be skipped or updated.

### Validation Error Messages

Common errors include missing required fields (e.g., organisation reference), invalid date formats (use YYYY-MM-DD), and invalid references (e.g., service name doesn't match an existing service).

---

### 4.7 📄 Managing SLA Penalties and Contract Terms — `/docs/guides/sla-management`

## Understanding SLA Breach Detection

### When Does DigitalCore Check for Breaches?

Breach detection runs automatically every time a performance actual is entered — either through the check-in grid or via the AI assistant. It checks the entered value against the contract's SLA terms for that KPI.

### How Thresholds and Operators Work

Each SLA term defines a threshold value and an operator:

- **"Less than" operator**: A breach occurs when the actual is *below* the threshold (e.g., Availability < 99.5%)
- **"Greater than" operator**: A breach occurs when the actual *exceeds* the threshold (e.g., Response Time > 4 hours)

## Configuring Contract Performance Terms

### Linking a KPI to a Contract

In the contract detail, add a performance term for each KPI with financial consequences. You select the KPI from the performance catalog, ensuring consistency with the engagement's performance template.

### Setting Threshold Values

Set the threshold that defines the boundary between compliance and breach. This should match the agreed contractual SLA target.

### Choosing Penalty Type

- **Fixed** — A flat amount per breach (simple, predictable)
- **Percentage** — Based on the contract's monthly or total value (scales with contract size)
- **Tiered** — Multiple penalty levels based on severity (rewards near-misses, penalises major failures)

## What Happens When a Breach Occurs

### Penalty Event Created

A penalty event record is created with the details: which KPI, what was the actual value, what was the threshold, and the calculated penalty amount. This provides a complete audit trail.

### Auto-Generated Finance Entry

If the SLA term has auto-create enabled, a corresponding cost entry is added to the finance domain. The cost amount equals the calculated penalty and is attributed to the correct finance line item.

### Where to Find Penalty Records

Penalty events are visible in the engagement's detail view. Each event links to the originating performance measure and (if applicable) the resulting finance entry.

## Reviewing and Overriding

### Viewing Penalty Events

Navigate to the engagement and look for SLA penalty events. Each shows the KPI, period, actual value, threshold, and calculated penalty.

### Manual Adjustments

In some cases, contractual negotiations may result in waived or reduced penalties. You can manually adjust the finance entry amount without deleting the penalty event, preserving the audit trail.

---

### 4.8 📄 Using Governance and Decisions — `/docs/guides/governance`

## What is the Decisions Workspace?

### Structured Decision-Making for Service Management

The Decisions workspace provides a framework for making and tracking important service management decisions. Instead of decisions living in email threads or meeting notes, they're recorded with full context, options, and outcomes.

### The 4-Step Framework

Every governance case follows four steps:

1. **Situation** — What's happening? What triggered this decision?
2. **Options & Analysis** — What are the alternatives? What does scenario modelling show?
3. **Decision** — What was decided? Who made the call?
4. **Next Steps** — What actions follow? Who's responsible?

## Creating a Governance Case

### Describing the Situation

Create a new governance case from the **Decisions** workspace. Describe the situation: what's happening, why it matters, and what data supports the assessment. Link to specific engagements or services for context.

### Linking to Engagements or Services

Associate the governance case with one or more engagements or services. This enables context-aware analysis and scenario modelling specific to the affected engagements.

## Evaluating Options

### Scenarios as Decision Options

Link scenarios to the governance case. Each scenario represents a potential course of action. The scenario's Impact tab shows the projected financial and operational effects.

### Comparing Scenario Impacts

Use the comparison view to evaluate scenarios side by side. Key metrics: projected margin change, cost delta, capacity requirement, risk level.

## Recording the Decision

### Documenting the Chosen Path

Record which option was selected, who made the decision, and the rationale. This becomes part of the permanent audit trail.

### Accountability and Audit Trail

Every governance case records who created it, who contributed to analysis, and who made the final decision. The timeline tracks all actions and changes.

## Follow-Up

### Next Steps and Action Items

After a decision is recorded, add specific action items with owners and due dates. These appear in the responsible person's attention items on the dashboard.

### Risks and Issues Tracking

Link identified risks and issues to the governance case. Track their status as the decision is implemented.

### Monitoring Progress via Timeline

The engagement timeline shows governance events alongside check-ins, milestones, and other activities. This provides a complete chronological view of what happened and why.

---

### 4.9 📄 Using the AI Assistant — `/docs/guides/ai-assistant`

## What Can the AI Do?

### Seven Capabilities Following the Management Workflow

The AI assistant is organised around the service management workflow: Monitor, Record, Diagnose, Plan, Decide, Learn, Communicate. Each capability is accessed through natural language conversation.

### Natural Language Interface

Interact with the AI using plain language — no special commands or syntax needed. The AI understands context from your conversation and can work with your live data.

## Example Conversations

### Health Monitoring
Ask: *"How is the Acme Cloud Hosting engagement doing?"*

The AI returns the current health score, domain breakdowns, top concerns, and trend direction.

### Recording Data
Ask: *"Record 160 hours for Senior Developer on the Acme engagement for January"*

The AI validates the role, engagement, and period, then records the hours. Automated labour cost calculations trigger normally.

Ask: *"Record €50,000 revenue for the Acme engagement in January"*

The AI identifies the correct revenue line item and records the actual value.

### Generating Reports
Ask: *"Summarise the Acme engagement for Q4, written for the customer"*

The AI generates a structured narrative summary with audience-appropriate language, covering financial performance, KPI status, and recommendations.

### Scenario Modelling
Ask: *"What if we reduce costs by 10% on the Acme engagement?"*

The AI creates a scenario with a 10% cost reduction driver and shows the projected financial impact.

### Learning
Ask: *"What does gross margin mean?"*

The AI explains the metric, provides the formula, includes industry benchmarks, and offers tips for improvement.

Ask: *"Show me the playbook for margin erosion"*

The AI retrieves the relevant playbook with context on when to use it and what data to examine.

---

### 4.10 📄 Reading the Portfolio Dashboard — `/docs/guides/portfolio-dashboard`

## Navigating to the Dashboard

### What Shows by Default

The dashboard is the first screen after login. It shows a personalised greeting, quick stats, attention items, portfolio health, and workspace launchers.

### Personalised Greeting and Quick Stats

The top section shows your name, role, and key metrics: number of active services, check-ins due this week, and overdue items.

## Attention Required

### Overdue Items — What Needs Immediate Action

Overdue items include past-due check-ins, unresolved SLA breaches, and engagements with declining health scores. Each item links directly to the relevant engagement or action.

### Upcoming Items — What's Coming Soon

Upcoming items show check-ins due this week, approaching contract renewals, and scheduled milestones. This helps you plan your workload.

## Portfolio Health

### Overall Score (0-100)

The portfolio health card shows an aggregated health score across all your services and engagements. The score combines finance, performance, and capacity health.

### Domain Sub-Scores

Below the overall score, see the breakdown by domain: Finance health, Performance health, Capacity health. Identify which domain is dragging the score down.

### Number of Services Reporting

See how many of your services have recent data. Services without recent check-ins may need attention — their health scores may be stale.

## AI Insights

### AI-Generated Recommendations

The dashboard may show AI-generated insights highlighting trends, anomalies, or recommended actions across your portfolio.

### Acting on Insights

Each insight links to the relevant engagement or capability. Click through to take action — run a check-in, create a scenario, or generate a summary.

## Quick Actions

### New Check-in, Log Decision, View Summaries

Quick action buttons provide one-click access to common tasks. Start a new check-in, create a governance case, or navigate to your latest executive summaries.

---

### 4.11 📄 Strategy, OKRs & AI Initiatives — `/docs/guides/strategy`

## The Strategy Workspace

### Cockpit — High-Level Strategic Visibility

The Strategy Cockpit provides strategic-level visibility across your portfolio. It aggregates health scores, financial performance, and capacity utilisation into a single view for leadership.

### OKRs — Objectives and Key Results

Track organisational objectives and link them to operational delivery. Each objective has measurable key results that can be connected to specific engagements.

### AI Initiatives — Tracking AI Adoption

Monitor AI initiative adoption across your organisation — which engagements use AI, what types of AI use cases are deployed, and what economic impact they have.

## Setting Up OKRs

### Creating Objectives

Go to **Strategy → OKRs** and create a new objective. Give it a clear description (e.g., "Improve portfolio margin to 35%") and a target date.

### Linking Key Results to Engagements

Add key results to each objective. Key results are measurable outcomes (e.g., "Reduce labour costs by 10% across managed services") that can be linked to specific engagements for operational tracking.

## Managing AI Initiatives

### What Counts as an AI Initiative

An AI initiative is any use of AI within your service delivery — from AI-assisted monitoring and reporting to AI-augmented operations. The AI Use Case Catalog defines your standard initiative types.

### Tracking AI Usage Across Engagements

Assign AI use cases to engagements to track adoption. See which engagements are using AI, what capabilities are deployed, and track associated costs and benefits.

## Using the Cockpit

### Strategic Overview Dashboard

The Cockpit aggregates data across the portfolio: total revenue, total margin, FTE count, average health score, and strategic KPIs. Charts and trends show direction over time.

### Connecting Strategy to Operations

The Cockpit links strategic objectives to operational data. Click through from a strategic metric to the underlying engagements and check-ins that drive it.

---

## 5. Platform Reference — `/docs/platform/`

📂 **Platform** (14 pages — screen-by-screen reference, mirrors app navigation)

> **Writing guidance:** Each page documents one product area. Include field descriptions, available actions, and tips. Use screenshots. This is the reference manual.

### 5.1 📄 Dashboard — `/docs/platform/dashboard`

## Welcome Hero and Onboarding Checklist

The Dashboard is the first screen you see after logging in. New users see a **Welcome Hero** panel with an onboarding checklist guiding them through initial setup: create your first service, set up an engagement, assign templates, and run your first check-in. Each step links directly to the relevant page. Once all steps are complete (or dismissed), the hero panel hides and the full dashboard takes over.

## Quick Stats

Three key numbers across the top of the dashboard:

- **Active Services** — Total services your organisation is currently managing
- **Due This Week** — Number of check-ins that should be completed this week
- **Overdue** — Check-ins that are past due and need attention

These stats update in real time as you work.

## Dashboard Cards

### Attention Required

The most actionable card on the dashboard. Shows items that need your attention right now: overdue check-ins, engagements with declining health, recent SLA breaches, and upcoming contract renewals. Each item links directly to the relevant engagement or action.

### Portfolio Health

A summary card showing the overall health score (0-100) for your entire portfolio, with sub-scores for Finance, Performance, and Capacity domains. The RAG indicator (Green/Amber/Red) gives an instant visual read on portfolio status.

### Workspace Launchers

Quick-access tiles for the main workspaces: **Operations** (check-ins and engagement management), **Decisions** (governance cases and scenarios), **Intelligence** (executive summaries), and **Strategy** (OKRs and cockpit).

### AI Insights

AI-generated observations about your portfolio — trends, anomalies, or recommended actions. Each insight links to the relevant engagement or capability for follow-up.

### Quick Actions

One-click buttons for the most common tasks: start a new check-in, log a governance decision, or view your latest executive summaries.

---

### 5.2 📄 Strategy Workspace — `/docs/platform/strategy`

## Cockpit Tab

The Strategy Cockpit provides leadership-level visibility across the entire portfolio. It aggregates financial performance, health scores, and capacity utilisation into a single strategic view. Key metrics include total revenue, total margin, average health score, FTE count, and trend direction over time.

## OKRs Tab

### Objectives List

View all organisational objectives with their status, progress percentage, owner, and target date. Filter by status (Active, Completed, At Risk) or search by keyword.

### Key Results

Each objective expands to show its key results — measurable outcomes linked to specific engagements. Key results display current value vs. target, progress bar, and the contributing engagements.

## AI Initiatives Tab

Track AI adoption across your organisation. View which engagements have AI use cases assigned, the types of AI capabilities deployed, and aggregate adoption metrics. The AI Use Case Catalog defines the standard initiative types tracked here.

---

### 5.3 📄 Operations Workspace — `/docs/platform/operations`

## Engagement List and Search

The Operations workspace shows all engagements your organisation manages. Use the search bar to find engagements by name, or filter by service, status, or health score. The list displays key information at a glance: engagement name, service, status indicator, health score, and last check-in date.

## Engagement Workspace Tabs

Click into an engagement to open the workspace, which is organised into tabs:

### Pulse Tab — Health Snapshot

The Pulse tab shows the engagement's current health score with domain breakdowns (Finance, Performance, Capacity), trend direction, top concerns, and a timeline of key events.

### Check-in Tab — Data Entry (Finance, Performance, Capacity)

The Check-in tab is where you enter monthly data. It contains three sub-tabs — Finance, Performance, and Capacity — each showing a multi-period grid with planned values and actual input fields. See the [Monthly Check-in Guide](/docs/guides/monthly-checkin) for the detailed workflow.

### Timeline Tab — Deliverables, Milestones, Governance

The Timeline tab shows the chronological view of everything that has happened on this engagement: milestones, deliverables, governance decisions, check-in events, and scenario commits. For project-based engagements, this is where you track workstreams, milestones, and deliverables.

## Check-in Grid Controls

### Period Range Picker

Select which months to display in the grid. Presets: **Last 3 Months**, **Last 6 Months**, **Year to Date**, or **Custom Range**. The grid dynamically adjusts columns.

### View Density

Toggle between **Compact** (more data visible, smaller cells) and **Comfortable** (larger text, more whitespace) view modes.

### Domain Summary

A collapsible panel showing totals across all visible periods: total revenue, total costs, margin percentage, achievement rate, and utilisation rate.

---

### 5.4 📄 Decisions — `/docs/platform/decisions`

## Governance Cases List

The Decisions workspace lists all governance cases with their status, linked engagements, creation date, and decision owner. Filter by status: Open, In Progress, Decided, Closed.

## The Decision Framework

Each governance case follows a structured four-step process:

### Step 1: Situation

Describe what's happening and why a decision is needed. Link to relevant engagements and include supporting data — health scores, variance reports, or trend observations.

### Step 2: Options & Analysis (Scenarios)

Attach scenarios to the governance case. Each scenario represents a potential course of action with projected financial and operational impacts. Use the AI to generate options or create them manually.

### Step 3: Decision

Record the chosen option, who decided, and the rationale. This becomes part of the permanent audit trail.

### Step 4: Next Steps

Define action items with owners, due dates, and descriptions. Track risks and issues that may arise during implementation.

## Scenario Detail View

### Overview Tab — What-If Drivers

Shows all drivers applied to the scenario: type (percentage, absolute, fixed), target domain and items, and the magnitude of change.

### Impact Tab — Projected Effects

Displays the projected financial and operational effects if the scenario is adopted: revenue delta, cost delta, margin impact, capacity changes, and KPI projections.

### Details Tab — Metadata and Status

Status lifecycle (Draft, Active, Committed, Reverted), creation date, last modified, linked governance case, and commit/revert history.

## Available Actions by Status

| Status | Available Actions |
|--------|------------------|
| **Draft** | Edit drivers, delete scenario |
| **Active** | Refine, compare, commit |
| **Committed** | Revert, check accuracy |
| **Reverted** | View history (read-only) |

---

### 5.5 📄 Intelligence: Executive Summaries — `/docs/platform/intelligence`

## Summaries Landing Page

### Filters and Search

Filter summaries by engagement, status (Draft, Finalised), period, or audience type. Search by title or engagement name.

### Summary Cards with Status Badges

Each summary appears as a card showing the title, engagement name, period covered, status badge (Draft/Finalised), and creation date.

## Create Summary Wizard

A four-step wizard: **Select Engagement** → **Select Timelines** → **Choose Report Template** (Weekly, Monthly, Client Report) → **Set Period**. Each step guides you through the configuration before entering the editor.

## Summary Editor

### Section Types

The editor presents sections based on the chosen template: Financial Snapshot, KPI Overview, Team Utilisation, Highlights, Risks & Issues, and Recommendations. Each section has a header, data table (where applicable), and a narrative area.

### Health Banner

The summary header displays a health banner — **Healthy** (green), **At Risk** (amber), or **Critical** (red) — based on the engagement's current health score at the time of creation.

### AI Narrative Generation

Click the AI button on any section to generate narrative text. The AI analyses the underlying data and produces a clear, audience-appropriate summary. Select the target audience (Internal, Customer, Executive, Board) before generating. Use **Regenerate All** to refresh every section at once.

### Finalise and Download PDF

When the summary is ready, click **Finalise** to lock it (preventing further edits) and record the finalised date. Export as PDF for distribution.

---

### 5.6 📄 Configuration: Services — `/docs/platform/services`

## Services List

### Search and Filtering

The Services page lists all services in your organisation. Use the search bar to find services by name, or filter by category and status.

### Status Indicators

Each service shows a status badge: **Active**, **Inactive**, or **Draft**. Active services have engagements currently running; draft services are still being configured.

## Service Detail

### Overview: Name, Description, Category, Owner

The service detail page shows the service name, description, category classification, and the assigned owner (a user within your organisation).

### Related Engagements

A list of all engagements linked to this service, with their status, health score, and last check-in date. Click through to any engagement's workspace.

### Related Portfolios

Shows which portfolios include this service. Useful for understanding how a service fits into the broader organisational structure.

## Creating and Editing a Service

Click **Create Service** to add a new service. Fill in the name, description, category, and owner. Save to create — you can then create engagements under this service. Edit any field at any time from the service detail page.

---

### 5.7 📄 Configuration: Portfolios — `/docs/platform/portfolios`

## Portfolios List

View all portfolios with their name, description, owner, number of services, and overall health score. Portfolios group related services for organisational and reporting purposes.

## Portfolio Detail

### Name, Description, Owner

Basic portfolio information: name, description text, and the portfolio owner (typically a service director or VP).

### Services in This Portfolio

A list of all services assigned to this portfolio. Each service shows its health score and number of active engagements.

### Portfolio Health Rollup

An aggregated health score for the portfolio, calculated from the health scores of all constituent services. Domain sub-scores (Finance, Performance, Capacity) are also rolled up.

## Creating and Editing a Portfolio

Click **Create Portfolio** to add a new portfolio. Assign a name, description, and owner. Then add services to the portfolio. Edit the portfolio or its service membership at any time.

---

### 5.8 📄 Configuration: Contracts — `/docs/platform/contracts`

## Contracts List

View all contracts with their name, type, total value, start/end dates, and linked engagements. Filter by type (Fixed Price, Time & Materials, Managed Service) or status (Active, Expired, Draft).

## Contract Detail

### Overview: Name, Type, Value, Dates

The contract header shows the contract name, commercial type, total value, currency, start date, end date, and renewal date (if applicable).

### Linked Engagements

Lists all engagements operating under this contract. A contract can cover multiple engagements.

### Rate Overrides

The Rates tab shows any role-based rate overrides specific to this contract. Default organisation rates apply for roles without overrides. See [Rate Cards Guide](/docs/guides/rate-cards) for configuration details.

### SLA Terms

The SLA Terms tab lists all performance terms with financial consequences: the KPI, threshold, operator, penalty type, and penalty amount. See [SLA Management Guide](/docs/guides/sla-management) for configuration details.

## Creating and Editing a Contract

Click **Create Contract** to add a new contract. Fill in name, type, value, dates, and link to existing engagements. Add rate overrides and SLA terms as needed.

---

### 5.9 📄 Configuration: Templates — `/docs/platform/templates`

## Templates Page

Templates are reusable configurations that define what to track on engagements. The Templates page organises them by type:

### Finance Templates — P&L Line Items

Each finance template contains a list of P&L line items drawn from the finance catalog. Items are categorised into revenue, COGS, operating expenses, and other categories.

### Performance Templates — KPI Metrics

Each performance template contains KPIs drawn from the performance catalog. Each item includes the metric definition, measurement direction, and default target.

### Capacity Templates — Roles and Hours

Each capacity template contains roles drawn from the capacity catalog (roles and rates). Each item includes the role, default planned hours, and FTE equivalent.

### AI Templates

Define which AI use cases apply to engagements using this template. Used for tracking AI adoption across the portfolio.

### Project Templates — Workstreams, Milestones, Deliverables

Project templates define the timeline structure for project-based engagements: workstreams (phases), milestones (gates), and deliverables. Assigned to engagements to pre-populate the project timeline.

## Template Detail View

### Items Table

A table listing all items in the template with their catalog reference, default values, and configuration options. Add, edit, or remove items.

### Engagements Using This Template

A list of engagements that have this template assigned. Changes to the template do not affect existing engagement configurations — only new assignments inherit the latest template structure.

## Creating and Editing Template Items

Add items from the relevant catalog. Configure default values. Reorder items to control display order. Remove items that are no longer needed.

---

### 5.10 📄 Configuration: Library / Catalogs — `/docs/platform/catalogs`

## Catalogs Page

Catalogs define the master list of items available when building templates. Four catalog types:

### Finance Line Items

P&L categories: revenue types (Subscription Revenue, Project Revenue, Licensing), cost categories (Labour Cost — COGS, Software Licences, Travel, Subcontracting), and operating expenses. Each entry has a name, category, and optional description.

### Performance KPIs

Metric definitions: Availability, Response Time, Resolution Time, Customer Satisfaction, and others. Each entry defines the metric name, measurement direction (higher-is-better or lower-is-better), default target, and unit of measurement.

### Roles & Rates

Job roles with default hourly rates: Senior Consultant, Project Manager, Service Desk Analyst, Developer, etc. Each role has a name, default rate, and currency. Roles link to the finance catalog via a default finance line item (typically "Labour Cost — COGS") for automatic cost calculations.

### AI Use Cases

Predefined AI initiative types: AI-Assisted Monitoring, AI-Augmented Reporting, AI-Powered Automation, etc. Used with AI templates for tracking AI adoption.

## Getting Started with Catalogs

### Generate Standard Defaults

New organisations can generate a standard set of catalog entries with one click. This populates common P&L categories, standard KPIs, typical roles, and default AI use cases — giving you a working starting point to customise.

## Adding and Editing Catalog Entries

Add new entries to any catalog at any time. Edit existing entries — changes to catalog entries do not retroactively affect templates or engagements that already reference them. Catalog entries can be deactivated but not deleted if they're in use.

---

### 5.11 📄 Configuration: Bulk Upload & Integrations — `/docs/platform/bulk-upload`

## Bulk Upload Page

### Supported Entity Types

Import the following entities in bulk: **Services**, **Engagements**, **Contracts**, **Partners**, **Stakeholders**, and **Financial Data**. Each type has a downloadable Excel template.

### Upload Flow: File → Staging → Validate → Confirm

1. **Select entity type** and download the template
2. **Upload** your completed file (Excel or CSV)
3. **Review** the staging table — valid rows are green, errors are red with messages
4. **Fix** any errors in the staging view or re-upload a corrected file
5. **Confirm** to write all validated rows to the database

See the [Data Import Guide](/docs/guides/data-import) for detailed instructions and troubleshooting.

## Integrations Page

### QuickBooks Connection (when available)

Connect your QuickBooks account to sync financial data between the two systems. The integration maps QuickBooks items to your finance catalog entries.

### Sync Status and History

View the status of the QuickBooks connection, last sync date, and a log of past sync operations. See any errors or conflicts that need resolution.

---

### 5.12 📄 Organisation: Users, Partners & Structure — `/docs/platform/organisation`

## Users Page

### User List with Status Indicators

View all users in your organisation with their name, email, role (Admin, Manager, Operator, Viewer), and status (Active, Invited, Disabled).

### Invite User

Click **Invite User** to send an email invitation. Specify the user's email and assign a role. The invitation email contains a link to set up their account.

### Edit User, Reset Password

Edit a user's role or profile details. Admins can trigger a password reset email for any user.

## Pending Invitations Page

### Invitation Status

View all pending invitations: who was invited, when, their assigned role, and whether the invitation has been accepted, is pending, or has expired.

### Resend and Cancel

Resend an expired or unacknowledged invitation, or cancel it to remove access.

## Partners Page

### External Partners List and Detail

Manage external partners — vendors, subcontractors, or collaborators that participate in service delivery. Each partner has a name, description, and contact information.

## Stakeholders Page

### Stakeholder Contacts

Manage stakeholder contacts associated with your projects and engagements: client contacts, sponsor names, technical leads, etc.

## Organisational Structure

### Units / Departments

Define your organisation's internal structure: business units, departments, or teams. Used for delivery attribution and showback reporting.

---

### 5.13 📄 System: Roles & Administration — `/docs/platform/system`

## App Roles

### Role Definitions: Admin, Manager, Operator, Viewer

DigitalCore uses four roles to control access:

| Role | Description |
|------|-------------|
| **Admin** | Full access: user management, organisation settings, all configuration, all data |
| **Manager** | Manage services, engagements, contracts, templates, decisions, and reports. Cannot manage users or organisation settings. |
| **Operator** | Enter data (check-ins, hours, actuals), view dashboards and reports. Cannot create or modify configuration. |
| **Viewer** | Read-only access to dashboards, reports, and engagement data. Cannot enter or modify data. |

### What Each Role Can Do

Access is enforced throughout the application — navigation items, action buttons, and data entry fields are shown or hidden based on the user's role. Operators see the check-in grids but not the template configuration pages. Viewers see dashboards and reports but cannot edit anything.

## System Account

### Organisation-Level Settings

Admins access organisation settings from the System menu: organisation name, default currency, fiscal year start month, and other global preferences. These settings affect all users in the organisation.

---

### 5.14 📄 Settings: Profile, Security, API Keys — `/docs/platform/settings`

## Profile Tab

### Display Name, Avatar, Email

Update your display name and upload an avatar image. Your email address is shown but can only be changed through the account security flow.

## Security Tab

### Change Password

Change your password from the Security tab. You'll need to enter your current password and choose a new one meeting the minimum requirements. See [Security](/docs/account/security) for password requirements.

## Notifications Tab

### Notification Preferences

Configure which notifications you receive: check-in reminders, SLA breach alerts, governance case updates, and AI insight notifications. Toggle email and in-app notifications independently.

## API Keys Tab

### Generating an API Key

Generate API keys for programmatic access to DigitalCore — primarily for the Paid MCP server. Each key has a name, permissions scope, and expiration date.

### Key Permissions

Keys can be scoped to specific capabilities: read-only, read-write, or admin. Use the minimum permissions needed for each integration.

### Key Expiration

All keys have an expiration date. Expired keys stop working automatically. Set expiration based on your security policy — 90 days is recommended.

### Revoking Keys

Revoke a key at any time from the API Keys tab. Revoked keys stop working immediately. The revocation is logged for audit purposes.

See the [API Keys Guide](/docs/mcp-and-integrations/api-keys) for detailed setup instructions.

---

## 6. Playbooks — `/docs/playbooks/`

📂 **Playbooks** (1 page — cross-reference to main site)

> **Note:** 29 full playbook pages are already published at `digitalcore.app/learn/playbooks/[slug]`. Rather than duplicate them in docs, this section provides a single index page that explains what playbooks are, how they connect to the platform, and links out to the full content.

### 6.0 📄 Playbooks in DigitalCore — `/docs/playbooks/`

## What Are Playbooks?

### Operational Response Guides for Service Management

Playbooks are structured response guides for common service management challenges. Each playbook addresses a specific situation — declining margins, capacity imbalance, client churn risk, scope creep — and provides a step-by-step framework for diagnosis and response.

DigitalCore includes 29 playbooks covering the full range of service economics challenges. Each playbook follows a consistent structure: warning signs, confirmed issue indicators, diagnostic questions, recommended actions, and expected outcomes.

### When to Activate — Warning Signs, Confirmed Issues, Diagnostics

Each playbook defines when to activate it:

- **Warning Signs** — Early indicators that something may be developing (e.g., margin declining for 2 consecutive months)
- **Confirmed Issues** — Definitive evidence the problem exists (e.g., margin below 20% for a quarter)
- **Diagnostics** — Questions to ask and data to examine before deciding on a response

### How Each Playbook Connects to Your Data in DigitalCore

Playbooks reference specific data you track in DigitalCore: finance actuals, KPI results, capacity utilisation, and health scores. When a playbook says "check cost variance," you can go directly to the engagement's finance grid and see the relevant numbers.

## Browse All Playbooks

The full collection of 29 playbooks is published on the main site with detailed content for each:

**→ [Browse all playbooks at digitalcore.app/learn/playbooks](https://digitalcore.app/learn/playbooks)**

## Categories Overview

### Margin & Profitability
Protecting and improving engagement margins: gross margin erosion, cost overruns, pricing misalignment.

### Pricing & Revenue
Rate reviews, revenue leakage, contract pricing optimisation, and discount management.

### Capacity & Staffing
Resource planning, utilisation optimisation, bench management, and skills gap analysis.

### Client & Renewal Risk
Churn prevention, account health monitoring, stakeholder engagement, and renewal preparation.

### Operational Efficiency
Process optimisation, SLA improvement, automation opportunities, and delivery acceleration.

### Scope & Contract Management
Scope creep identification, change order processes, vendor management, and contract compliance.

### Crisis & Escalation
Delivery recovery plans, escalation frameworks, incident response, and crisis communication.

## Using Playbooks with the Platform

### How Check-in Data Triggers Playbook Recommendations

As you enter check-in data, DigitalCore's health scoring and AI capabilities can identify situations that match playbook activation criteria. The AI assistant can recommend relevant playbooks based on your engagement's current performance.

### Connecting Playbook Actions to Scenarios

Many playbooks recommend modelling the response before implementing it. Use [Scenario Intelligence](/docs/guides/scenarios) to create what-if models of the playbook's recommended actions — test the financial impact of a rate review, a staffing change, or a service redesign before committing.

### Tracking Playbook Outcomes in Your Dashboard

After implementing a playbook's recommendations, track the results through your regular check-in process. Compare pre-intervention and post-intervention metrics to measure effectiveness.

## Access via MCP

Playbooks are also available through the free MCP server tools:

- **`list_playbooks`** — Returns the full directory of all 29 playbooks
- **`get_playbook`** — Retrieves a specific playbook by slug with full content

See [Free MCP Server Setup](/docs/mcp-and-integrations/free-mcp) for configuration instructions.

---

## 7. MCP & Integrations — `/docs/mcp-and-integrations/`

📂 **MCP & Integrations** (7 pages)

### 7.1 📄 Overview — `/docs/mcp-and-integrations/`

## What is the Model Context Protocol (MCP)?

### MCP in 30 Seconds

The Model Context Protocol (MCP) is an open standard that lets AI assistants connect to external tools and data sources. Instead of copy-pasting information into a chat window, MCP lets your AI assistant query DigitalCore directly — checking engagement health, recording data, running scenarios, and generating reports through natural language.

### Why MCP Matters for Service Management

Service managers work across multiple tools and data sources. MCP eliminates the context switching: ask your AI assistant about margin trends, record this month's hours, or generate a client-facing summary — all without leaving your AI tool of choice.

## DigitalCore MCP Offering

### Free Server — 6 Tools, No Account Needed

The free MCP server provides access to DigitalCore's knowledge base: 29 service management playbooks, KPI definitions with formulas and benchmarks, and a quick health score calculator. No account or API key required — anyone can connect.

### Paid Server — Full Data Access with Your Account

The paid MCP server connects to your DigitalCore account and provides full operational capabilities: monitor health, record data, generate reports, run scenarios, and build executive summaries — all through your AI assistant.

## Supported Clients

DigitalCore MCP works with all major AI clients:

| Client | Free Server | Paid Server |
|--------|------------|-------------|
| **Claude Desktop** | ✅ | ✅ |
| **Cursor** | ✅ | ✅ |
| **VS Code / GitHub Copilot** | ✅ | ✅ |
| **ChatGPT** | ✅ | ✅ |
| **Windsurf** | ✅ | ✅ |

## What You Can Do

### Query Playbooks and KPI Definitions (Free)

Browse the playbook library, get detailed guidance on any service management challenge, understand KPI formulas, and run a quick health check on any service — all without an account.

### Monitor, Record, Diagnose, Plan, Decide, Communicate (Paid)

With a paid account and API key, access the full set of 13+ tools covering all seven AI capabilities. See [Paid MCP Tools Reference](/docs/mcp-and-integrations/paid-mcp) for the complete tool list.

---

### 7.2 📄 Free MCP Server Setup — `/docs/mcp-and-integrations/free-mcp`

## What's Included (6 Free Tools)

| Tool | What It Does |
|------|-------------|
| **`get_playbook`** | Browse 29 service management playbooks with full content, warning signs, diagnostics, and recommended actions |
| **`explain_metric`** | Get KPI formulas, calculation methods, industry benchmarks, and improvement tips for any service management metric |
| **`run_service_reality_check`** | Calculate a quick health score from basic inputs: revenue, costs, FTEs, and SLA achievement percentage |
| **`list_playbooks`** | Quick directory of all available playbooks with slugs and descriptions |
| **`submit_email`** | Register to receive the Service Economics Guide and DigitalCore updates |
| **`submit_feedback`** | Rate and comment on tool results to help improve the service |

## Quick Setup (Copy-Paste Configs)

### Claude Desktop Configuration

Add the following to your Claude Desktop config file (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "digitalcore-free": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-remote", "https://mcpfree.digitalcore.app/mcp"]
    }
  }
}
```

### Cursor Configuration

In your Cursor MCP settings, add:

```json
{
  "mcpServers": {
    "digitalcore-free": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-remote", "https://mcpfree.digitalcore.app/mcp"]
    }
  }
}
```

### VS Code / GitHub Copilot Configuration

Add to your VS Code `settings.json` under `mcp.servers`:

```json
{
  "mcp": {
    "servers": {
      "digitalcore-free": {
        "command": "npx",
        "args": ["-y", "@anthropic-ai/mcp-remote", "https://mcpfree.digitalcore.app/mcp"]
      }
    }
  }
}
```

### ChatGPT Configuration

Use the ChatGPT app's MCP integration to connect to `https://mcpfree.digitalcore.app/mcp` using the streamable HTTP transport.

### Windsurf Configuration

Add to your Windsurf MCP settings:

```json
{
  "mcpServers": {
    "digitalcore-free": {
      "serverUrl": "https://mcpfree.digitalcore.app/mcp"
    }
  }
}
```

## Try It Now — Example Conversations

Once connected, try these prompts in your AI client:

- **"What's a healthy gross margin for managed services?"** — The AI uses `explain_metric` to return the formula, benchmarks (typically 40-60% for managed services), and improvement strategies.
- **"Show me the playbook for capacity planning"** — The AI retrieves the capacity planning playbook with warning signs, diagnostics, and recommended actions.
- **"Check my service: €500k revenue, €400k costs, 5 FTEs"** — The AI uses `run_service_reality_check` to calculate your margin (20%), revenue per FTE (€100k), and health score with improvement suggestions.

## REST API Access (Alternative to MCP)

If your AI client doesn't support MCP, you can access the same tools via REST:

### Available Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/list_playbooks` | GET | List all 29 playbooks |
| `/get_playbook?slug={slug}` | GET | Get full playbook content |
| `/explain_metric?metric_slug={slug}` | GET | Get KPI explanation |
| `/run_service_reality_check` | POST | Calculate health score |
| `/health` | GET | Server health check |

### cURL Examples

```bash
# List all playbooks
curl https://mcpfree.digitalcore.app/list_playbooks

# Get a specific playbook
curl https://mcpfree.digitalcore.app/get_playbook?slug=margin-erosion

# Explain a metric
curl https://mcpfree.digitalcore.app/explain_metric?metric_slug=gross_margin

# Run a health check
curl -X POST https://mcpfree.digitalcore.app/run_service_reality_check \
  -H "Content-Type: application/json" \
  -d '{"revenue": 500000, "costs": 400000, "ftes": 5, "sla_achievement": 95}'
```

---

### 7.3 📄 Paid MCP Tools Reference — `/docs/mcp-and-integrations/paid-mcp`

## Authentication

### API Key Requirement

All paid MCP tools require an API key generated from your DigitalCore account. Include the key in your MCP client configuration. See [API Keys](/docs/mcp-and-integrations/api-keys) for setup instructions.

## Monitor Tools

### Check Portfolio Health — Overview with Trends and Top Concerns

Returns your organisation's overall health score, domain sub-scores, trend direction, top concerns (engagements needing attention), and the number of services reporting.

### Check Engagement Health — Domain Breakdowns and Anomalies

Returns a specific engagement's health score with domain breakdowns (Finance, Performance, Capacity), attention flags, variance analysis, and anomaly detection.

## Record Tools

### Record Hours — Log Hours by Role

Record capacity hours for a specific role on an engagement for a given month. Automatically triggers labour cost calculation (hours × rate → finance entry).

### Record Finance Actual — Enter P&L Actuals

Record a financial actual value (revenue or cost) for a specific line item, engagement, and month.

### Record Performance — Enter KPI Values

Record a KPI actual value. Automatically triggers SLA breach detection — if the value breaches the contract threshold, a penalty event and (optionally) a finance entry are created.

## Diagnose Tools

### Generate Showback Report — IT Cost Allocation by Department

Generates a showback report showing how IT costs are allocated across business units/customers based on delivery attribution data. Useful for chargeback and transparency.

## Plan Tools

### Generate Scenario Options — AI Creates Multiple What-If Variants

Describe a situation or goal, and the AI generates 2-4 distinct scenario variants with different approaches (conservative, balanced, aggressive) and projected impacts.

### Create Scenario — Build a Blank Scenario Manually

Creates a new empty scenario for a specified engagement, ready for drivers to be added.

### Add Driver — Apply an Economic Driver to a Scenario

Adds a driver to an existing scenario: type (percentage, absolute, fixed), target domain, target items, and the value of the change.

## Decide Tools

### Refine Scenario — Adjust and Recalculate

Modify an existing scenario's drivers and recalculate the projected impact.

### Compare and Commit — Side-by-Side Comparison and Adoption

Compare two or more scenarios side by side and commit the chosen one, writing its projections into your live plan.

### Undo Commit — Reverse a Previous Commitment

Revert a committed scenario, restoring the previous plan values.

### Check Accuracy — How Good Was the Prediction?

After actuals are recorded, compare a scenario's projections against what actually happened to measure prediction accuracy.

## Communicate Tools

### Summarise Period — Narrative Summary with Audience Targeting

Generates a narrative summary of an engagement's performance for a specified period, tailored to the target audience (Internal, Customer, Executive, Board).

### Generate Executive Summary — Multi-Section Report Draft

Creates a full multi-section executive summary report with AI-generated narratives for each section.

---

### 7.4 📄 API Keys — `/docs/mcp-and-integrations/api-keys`

## What Are API Keys?

### Authentication for Paid MCP Access

API keys authenticate your identity when using DigitalCore's paid MCP tools or programmatic API access. Each key is tied to your user account and inherits your organisation's data access permissions.

## Generating a Key

### Settings → API Keys Tab

Navigate to **Settings → API Keys** in the DigitalCore app. Click **Generate New Key**. Give the key a descriptive name (e.g., "Claude Desktop — Work Laptop").

### Key Permissions

Select the permission scope for the key:

- **Read** — Monitor, diagnose, and query data only
- **Read-Write** — All read permissions plus recording data and managing scenarios
- **Admin** — Full access including configuration changes

Use the minimum permission level needed for each use case.

### Expiration Settings

Set an expiration date for the key. Options include 30 days, 90 days, 180 days, 1 year, or a custom date. 90 days is recommended as a balance between security and convenience.

## Managing Keys

### Viewing Active Keys

The API Keys tab shows all your active keys with their names, permission level, creation date, expiration date, and last used date.

### Revoking a Key

Click **Revoke** to immediately disable a key. The key stops working instantly and cannot be re-enabled. Revocation is logged for audit purposes.

### Key Rotation Best Practice

Rotate keys before they expire. Generate a new key, update your MCP client configuration, verify connectivity, then revoke the old key. This avoids any downtime.

## Security Best Practices

### Never Share Keys in Code Repositories

API keys should never be committed to version control. Store them in your MCP client's local configuration file or in environment variables.

### Use Scoped Permissions

Create separate keys for different tools or workstations, each with the minimum required permissions. If one key is compromised, revoke it without affecting other integrations.

### Rotate Keys Periodically

Even if keys haven't expired, rotate them on a regular schedule (quarterly recommended). This limits the window of exposure if a key is silently compromised.

---

### 7.5 📄 Excel / CSV Import — `/docs/mcp-and-integrations/excel-import`

## Supported Import Types

### Entity Import: Services, Engagements, Contracts, Partners

Import core entities in bulk when onboarding an existing portfolio. Each entity type has a dedicated import template with the required and optional fields.

### Financial Data Bulk Import

Import historical financial data (planned and actual values) for existing engagements. Useful for migrating from spreadsheets or other tracking systems.

## Preparing Your File

### Download a Template

Download the pre-formatted Excel template for your import type from the Bulk Upload page. Templates include column headers, data types, example rows, and validation notes.

### Required and Optional Columns

Each template clearly marks which columns are required (e.g., entity name, reference ID) and which are optional (e.g., description, category). Required fields that are empty will generate validation errors.

### Format Requirements

- **File formats**: `.xlsx`, `.xls`, `.csv`
- **Date format**: `YYYY-MM-DD`
- **Currency**: Numeric values without currency symbols
- **Text encoding**: UTF-8 (for CSV files)

## Upload Workflow

### Configuration → Bulk Upload

Navigate to **Configuration → Bulk Upload** and select the entity type to import.

### Staging, Validation, and Confirmation Steps

Upload your file to enter the staging view. Each row is validated against the schema — valid rows are green, errors are highlighted in red with messages. Fix errors in the staging table or re-upload. Click **Confirm** when all rows validate.

## Troubleshooting Imports

### Common Errors and How to Fix Them

- **"Required field missing"** — Check the template for required columns and fill them in
- **"Invalid date format"** — Use YYYY-MM-DD format
- **"Reference not found"** — The entity you reference (e.g., a service name) doesn't exist yet — create it first or fix the spelling
- **"Duplicate detected"** — An entity with the same key fields already exists — choose to skip or update

---

### 7.6 📄 QuickBooks Integration — `/docs/mcp-and-integrations/quickbooks`

## Overview

### What Data Syncs Between QuickBooks and DigitalCore

The QuickBooks integration syncs financial data between the two systems: invoices, expenses, and payments from QuickBooks can be mapped to DigitalCore's finance line items. This enables you to use QuickBooks as your system of record for accounting while using DigitalCore for service-level financial analysis.

## Setup

### Connecting Your QuickBooks Account

Navigate to **Configuration → Integrations** and click **Connect QuickBooks**. You'll be redirected to QuickBooks for OAuth authorisation. Grant access to the relevant QuickBooks company.

### Mapping QuickBooks Items to Your Catalogs

After connecting, map QuickBooks accounts and items to your DigitalCore finance catalog entries. For example, map your QuickBooks "Professional Services Revenue" account to DigitalCore's "Consulting Revenue" catalog item.

## Sync Behaviour

### What Syncs Automatically

Once configured, new invoices and expenses in QuickBooks are automatically picked up during the sync cycle and matched to the corresponding DigitalCore engagement and finance line item.

### Manual Sync Triggers

Trigger a manual sync at any time from the Integrations page. Use this when you need fresh data immediately rather than waiting for the next automatic sync.

### Conflict Resolution

If data exists in both systems for the same period and item, the sync highlights the conflict and lets you choose which value to keep.

## Troubleshooting

### Common Connection Issues

- **"Connection expired"** — QuickBooks OAuth tokens expire periodically. Re-authenticate from the Integrations page.
- **"Company mismatch"** — Ensure you're connected to the correct QuickBooks company.

### Re-authenticating

If the connection drops, go to **Configuration → Integrations**, disconnect the existing QuickBooks link, and reconnect. Your mappings are preserved.

---

### 7.7 📄 Webhooks & API (Future) — `/docs/mcp-and-integrations/webhooks`

## Planned Capabilities

### Event Types Coming Soon

DigitalCore is developing a webhook system that will notify external systems when key events occur:

- **Engagement health change** — When a health score crosses a RAG threshold
- **SLA breach detected** — When a performance actual triggers a breach
- **Check-in completed** — When a monthly check-in is finished
- **Decision recorded** — When a governance case is decided
- **Scenario committed** — When a scenario is adopted as the new plan

### Target Use Cases

Webhooks will enable integrations with notification services (Slack, Teams), workflow automation tools (Zapier, Make), and custom internal systems.

## Current Status

### What's Available Now vs. What's Coming

| Capability | Status |
|-----------|--------|
| MCP servers (Free + Paid) | ✅ Available |
| REST API for free tools | ✅ Available |
| Excel/CSV import | ✅ Available |
| QuickBooks integration | ✅ Available |
| Webhooks | 🔜 Planned |
| Custom API endpoints | 🔜 Planned |
| Zapier/Make integration | 🔜 Planned |

Check the [Changelog](/docs/changelog/) for updates on new integration capabilities as they launch.

---

## 8. Account — `/docs/account/`

📂 **Account** (4 pages)

### 8.1 📄 Pricing & Plans — `/docs/account/pricing`

> **Important:** This page should link to the canonical pricing page at `digitalcore.app/pricing` for all specific prices, tier names, and feature lists. Do NOT hardcode prices here — they may change.

## Plans Overview

### Link to Current Pricing

For the latest pricing, tier names, and feature comparison, visit **[digitalcore.app/pricing](https://digitalcore.app/pricing)**. The information below provides a general overview of the pricing structure.

### Free Tier — Get Started at No Cost

DigitalCore offers a free tier that lets you set up your organisation, configure services and engagements, and begin tracking operational data. The free tier includes limited users and core features — enough to evaluate the platform with real data.

### Paid Plans — More Users, AI Features, and Integrations

Paid plans unlock additional users, AI capabilities (scenario generation, executive summaries, AI assistant), API access for MCP tools, and advanced analytics features.

## High-Level Feature Differences

### What's Included in Free

- Organisation setup and configuration
- Service and engagement management
- Basic check-in and data entry
- Dashboard and health scores
- Limited users

### What Paid Plans Add

- AI-powered scenario generation and executive summaries
- API access and MCP tool connectivity
- Excel/CSV bulk import
- QuickBooks integration
- More users and advanced role management
- Priority support

### Enterprise Features

- SSO (Single Sign-On) integration
- Dedicated success manager
- Custom onboarding
- SLA on platform availability

## Billing Basics

### Monthly vs. Annual Pricing

Paid plans are available with monthly or annual billing. Annual billing offers a discount compared to monthly pricing.

### How Seat-Based Pricing Works

Pricing is based on the number of users (seats) in your organisation. Each user who needs access counts as one seat. Add or remove seats at any time — billing adjusts proportionally.

### Upgrading and Downgrading

Upgrade from the free tier or between paid plans at any time from **Settings → Subscription**. Downgrades take effect at the end of the current billing period.

## Free Trial

### How the Trial Works

New paid subscriptions include a 14-day free trial. During the trial, you have full access to all paid features. No payment is charged until the trial ends.

### What Happens When It Ends

After the trial, your subscription converts to a paid plan automatically if a payment method is on file. If no payment method is provided, your account reverts to the free tier — your data is preserved, but paid features become unavailable.

---

### 8.2 📄 Managing Your Subscription — `/docs/account/subscription`

## Current Plan Details

### Viewing Your Active Subscription

Navigate to **Settings → Subscription** to see your current plan: tier name, billing cycle, number of seats, next billing date, and payment method on file.

### Subscription Statuses

| Status | Meaning |
|--------|---------|
| **Active** | Subscription is paid and current |
| **Trialing** | In the 14-day free trial period |
| **Past Due** | Payment failed — action needed |
| **Cancelled** | Subscription will end at the billing period close |
| **Free** | Using the free tier (no active paid subscription) |

## Changing Plans

### Upgrading or Downgrading

Click **Change Plan** to select a different tier. Upgrades take effect immediately with prorated billing. Downgrades take effect at the end of the current billing period.

### Adding or Removing Seats

Adjust seat count from the Subscription page. Added seats are billed immediately (prorated). Removed seats take effect at the next billing cycle.

## Payment Methods

### Adding a Card

Add a credit or debit card from the Payment Methods section. DigitalCore uses Stripe for secure payment processing — your card details are never stored on DigitalCore servers.

### Setting a Default Payment Method

If you have multiple payment methods, set one as the default for automatic billing.

### Removing a Payment Method

Remove a payment method at any time, provided at least one method remains on file for active paid subscriptions.

## Invoices and Billing History

View and download invoices from the Billing History section. Each invoice shows the billing period, amount, payment method used, and status.

---

### 8.3 📄 Security — `/docs/account/security`

> **Note:** The authoritative security page (GDPR, data residency, encryption, compliance, audit logging) is published at `digitalcore.app/security`. This docs page covers practical how-to guidance only.

## Authentication

### Email / Password Login

DigitalCore uses email and password authentication. Enter your email and password at the login page to access your account.

### Password Requirements

Passwords must be at least 8 characters and include a mix of letters and numbers. Stronger passwords (12+ characters with special characters) are recommended.

## Password Management

### Changing Your Password

Go to **Settings → Security → Change Password**. Enter your current password and choose a new one.

### Reset Password Flow

If you've forgotten your password, click **Forgot Password** on the login page. Enter your email to receive a reset link. The link expires after 24 hours. Click the link, set a new password, and log in.

## Account Security Best Practices

### Use Strong, Unique Passwords

Use a password manager to generate and store a unique password for your DigitalCore account. Don't reuse passwords across services.

### Rotate API Keys Periodically

If you use API keys for MCP or programmatic access, rotate them quarterly. See [API Keys](/docs/mcp-and-integrations/api-keys) for the rotation procedure.

## Data Isolation

### Your Data is Isolated — Other Organisations Cannot See It

DigitalCore enforces strict data isolation at the database level. Every query is filtered by your organisation's identity. Users in one organisation can never see, access, or modify data belonging to another organisation — even at the database level.

## Security & Compliance Details

### Full Security Information

For comprehensive details on data residency, encryption, GDPR compliance, SOC 2 readiness, penetration testing, and audit logging, visit **[digitalcore.app/security](https://digitalcore.app/security)**.

---

### 8.4 📄 Profile Settings — `/docs/account/profile`

## Personal Information

### Display Name, Email, Avatar

Update your display name from **Settings → Profile**. Your name appears in navigation, comments, and reports. Upload a profile photo (avatar) — it displays next to your name throughout the application. Your email address is shown but changes go through the security flow.

## Notification Preferences

### Email Notifications

Configure which events trigger email notifications: check-in reminders, SLA breach alerts, governance updates, and AI-generated insights.

### In-App Notifications

Toggle in-app notifications for real-time alerts within the DigitalCore interface. In-app notifications appear in the notification bell in the top navigation.

---

## 9. Changelog — `/docs/changelog/`

📄 **Changelog** (single page, growing)

## Format

Each release entry follows a consistent format:

- **Date** — When the release was deployed
- **Version** — Semantic version number
- **What's New** — New features and capabilities
- **What's Changed** — Improvements to existing features
- **What's Fixed** — Bug fixes and corrections

## February 2026

### New Features
- **AI Narrative Generation (Ollama-powered)** — Executive summaries and period narratives now use on-premise AI for faster, more private text generation with automatic cloud fallback.
- **Redis Task Queue** — Background processing for AI workloads: narrative generation and period summaries run asynchronously without blocking the interface.
- **4-Service Microservice Architecture** — Backend services split into independent containers (MCP, AI, Ingest, Sync) for isolated scaling and deployment.
- **Delivery Attribution on Plans and Measures** — Track which party (customer or deliverer) is responsible for each planned and actual value across all three data domains.

### Improvements
- Capacity check-in grid now shows FTE calculations alongside hours
- Scenario comparison view redesigned with clearer financial impact summaries
- Health score algorithm updated with configurable organisation-level RAG thresholds

### Bug Fixes
- Fixed profile settings loading race condition in production
- Fixed performance check-in tabs passing null instead of omitting delivery party field
- Fixed React Query hanging on initial load

## January 2026

### New Features
- **Scenario Intelligence** — Create, evaluate, and commit what-if scenarios with AI-generated options
- **Executive Summary Builder** — Multi-section reports with AI-generated narratives and PDF export
- **Free MCP Server** — 6 public tools for playbook browsing, KPI education, and service health checks
- **Paid MCP Server** — 13+ tools covering Monitor, Record, Diagnose, Plan, Decide, and Communicate capabilities

### Improvements
- Aggregation engine with cooldown-based refresh and org-level threshold configuration
- SLA breach detection upgraded to catalog-driven architecture (V3) for better cross-domain consistency
- Labour cost automation upgraded to catalog-driven architecture (V2) with source tracking

### Bug Fixes
- Middleware session refresh now runs for all routes including public paths
- Password reset flow rebuilt with correct token handling
- Avatar upload fixed with correct environment variable naming

---

> **Note:** This changelog will be updated with each release. For the latest status, check the live changelog at `digitalcore.app/docs/changelog`.

---

## 10. FAQ Hub — `/docs/faq/`

📄 **FAQ** (single index page with ~15 product-focused questions)

> **Note:** General questions (what is DigitalCore, pricing, security, free tier) are already answered on the main site homepage FAQ, pricing FAQ, and security page. This FAQ focuses on product-specific operational questions that only docs should answer.

> Use FAQ schema markup (`application/ld+json`) so AI tools can extract these Q&A pairs.

## Getting Started

### How do I create an account?

Visit [digitalcore.app](https://digitalcore.app) and click **Get Started**. Enter your email, create a password, and follow the setup wizard to name your organisation. No credit card required for the free tier. Full walkthrough: [Create Your Organisation](/docs/getting-started/create-organisation).

### How do I invite my team?

Go to **Organisation → Users → Invite User**. Enter their email and assign a role (Admin, Manager, Operator, or Viewer). They'll receive an email invitation with a link to set up their account. Full details: [Create Your Organisation → Inviting Users](/docs/getting-started/create-organisation).

### How long does setup take?

A basic setup (one service, one engagement, one template) takes about 30 minutes. You can start entering data immediately after. For organisations with large portfolios, use [bulk import](/docs/guides/data-import) to accelerate onboarding.

### Can I import data from spreadsheets?

Yes. DigitalCore supports Excel (.xlsx, .xls) and CSV imports for services, engagements, contracts, partners, stakeholders, and financial data. Download a template, fill it in, upload, and validate. Full guide: [Importing Data from Excel/CSV](/docs/guides/data-import).

## Core Features

### What is a check-in?

A check-in is the monthly process of entering actual data — revenue received, costs incurred, KPI results, and hours worked — against your planned targets. It takes 20-30 minutes per engagement. Full guide: [Running a Monthly Check-in](/docs/guides/monthly-checkin).

### How does DigitalCore track what I plan vs. what actually happens?

Every data item follows the **Plan → Actual** pattern. You set planned values (targets) and later enter actual values (results). DigitalCore calculates the variance and updates health scores automatically. Full explanation: [Planning and Actuals](/docs/concepts/planning-actuals).

### How do automated cost calculations work?

When you enter capacity hours for a role, DigitalCore multiplies the hours by the applicable hourly rate and creates a cost entry in the finance domain automatically. Rates follow a priority hierarchy: engagement-specific > contract-level > organisation default. Full explanation: [Automated Cost and Penalty Calculations](/docs/concepts/automation).

### How does scenario modelling work?

Create a scenario, add drivers (percentage changes, absolute adjustments, or fixed values), and see the projected financial impact. Compare multiple scenarios side by side, then commit the chosen one to your live plan. Full guide: [Creating and Evaluating Scenarios](/docs/guides/scenarios).

### What is an executive summary?

A multi-section report covering financial performance, KPI status, team utilisation, and recommendations for a specific period and engagement. AI generates the narrative text, and you can target the audience (internal, customer, executive, board). Full guide: [Building an Executive Summary](/docs/guides/executive-summaries).

### What are templates and catalogs?

**Catalogs** define the master list of things you can track (P&L line items, KPIs, roles). **Templates** are reusable configurations that select items from catalogs and set defaults. Assign templates to engagements to set up what you'll track. Full explanation: [Catalogs & Libraries](/docs/concepts/catalogs).

### How does delivery attribution work?

Each planned and actual value can be tagged with a delivery party — the customer or deliverer responsible. This enables cost allocation, showback reporting, and multi-vendor tracking. Full explanation: [Delivery Attribution](/docs/concepts/delivery-attribution).

## AI & MCP

### What MCP tools can I connect?

DigitalCore offers two MCP servers: a **free server** with 6 knowledge tools (no account needed) and a **paid server** with 13+ operational tools (requires API key). Both work with Claude Desktop, Cursor, VS Code, ChatGPT, and Windsurf. Full details: [MCP & Integrations Overview](/docs/mcp-and-integrations/).

### How do I get an API key for paid MCP?

Go to **Settings → API Keys** in the DigitalCore app, click **Generate New Key**, set permissions and expiration, and copy the key into your MCP client configuration. Full guide: [API Keys](/docs/mcp-and-integrations/api-keys).

## General (Links to Main Site)

For frequently asked questions about DigitalCore as a company and service:

- **What is DigitalCore?** → [digitalcore.app](https://digitalcore.app)
- **What is Service Economics?** → [digitalcore.app/learn/guides/service-economics](https://digitalcore.app/learn/guides/service-economics)
- **How much does it cost?** → [digitalcore.app/pricing](https://digitalcore.app/pricing)
- **Is my data secure?** → [digitalcore.app/security](https://digitalcore.app/security)
- **What are playbooks?** → [digitalcore.app/learn/playbooks](https://digitalcore.app/learn/playbooks)

---

## Summary Statistics

| Section | Pages | Auto-Generated? | Authoring Priority |
|---------|-------|-----------------|-------------------|
| Landing | 1 | No | P0 — Core identity |
| Getting Started | 6 | No | P0 — Onboarding |
| Concepts | 11 | No | P0 — Highest LLM value |
| Guides | 11 | No | P1 — User workflows |
| Platform Reference | 14 | No | P2 — Screen reference |
| Playbooks | 1 | No | P1 — Cross-reference to main site |
| MCP & Integrations | 7 | No | P1 — Developer adoption |
| Account | 4 | No | P2 — Standard SaaS |
| Changelog | 1 | No | P2 — Ongoing |
| FAQ | 1 | No | P1 — LLM magnet |
| **Total** | **57** | **0 auto** | **57 to author** |

### Suggested Authoring Order

| Phase | Pages | Rationale |
|-------|-------|-----------|
| **Phase 1 — Foundation** | Landing, Concepts (all 11), Playbooks index (1), FAQ | Establishes discoverability. Concepts = highest-value unique content. Playbooks index links to 29 existing pages on main site. |
| **Phase 2 — Activation** | Getting Started (6), Free MCP Setup, Paid MCP Reference, API Keys | Enables new users to onboard and integrators to connect. |
| **Phase 3 — Depth** | Guides (11) | Active user workflows. |
| **Phase 4 — Polish** | Platform Reference (14), Account (4), Integrations (2), Changelog, Webhooks placeholder | Screen-level reference for power users. |

---

## Comparison: Current vs. Proposed

| Current Section | Pages | Proposed Replacement | Pages |
|----------------|-------|---------------------|-------|
| Getting Started (placeholder) | 4 | **Getting Started** (real onboarding flow) | 6 |
| Platform (flat, incomplete) | 11 | **Concepts** + **Guides** + **Platform Reference** | 36 |
| Service Economics (buried) | 5 | Absorbed into **Concepts** (product-focused, links to main site guide) | — |
| API (fictional) | 4 | **Removed** — replaced by MCP docs | — |
| Integrations (placeholder) | 3 | **MCP & Integrations** | 7 |
| Playbooks (1 stub) | 1 | **Playbooks** (1 index page linking to 29 main site pages) | 1 |
| Account (placeholder) | 3 | **Account** | 4 |
| FAQ (placeholder) | 1 | **FAQ** (~15 product-specific questions with deep links) | 1 |
| Changelog (empty) | 1 | **Changelog** | 1 |
| System (empty) | 0 | Folded into **Platform Reference** | — |
| *(missing)* Concepts | — | **Concepts** — highest value new section | 11 |
| *(missing)* Guides | — | **Guides** — workflow-oriented how-tos | 11 |
| **Total** | **~32** | | **57** |

---

## LLM-Specific Deliverables

| Asset | Location | Purpose |
|-------|----------|---------|
| `/llms.txt` | Root | Product summary for LLM context windows |
| `/llms-full.txt` | Root | Auto-generated full content dump |
| `/skill.md` | Root | MCP capability declaration |
| `.md` suffix routes | Every page | Raw Markdown at `[url].md` for LLM consumption |
| FAQ JSON-LD schema | `/docs/faq/` | Structured data for AI extraction |
| Playbook cross-links | `/docs/playbooks/` | Links to 29 live playbooks at `digitalcore.app/learn/playbooks/[slug]` |
| MCP config snippets | `/docs/mcp-and-integrations/free-mcp` | Copy-paste configs for 5 AI clients |

---

## Next Step

1. **Review this structure** — confirm sections, pages, and subheaders
2. **Begin content authoring** following the Phase 1-4 priority order
3. **Set up `/llms.txt` and `.md` suffix routes** in the Nextra config
4. **Add cross-links** to main site content: `/learn/playbooks`, `/learn/glossary`, `/learn/guides/service-economics`, `/security`, `/compare/*`

---

*Prepared for DigitalCore Documentation Team — February 2026 (v2.2)*
