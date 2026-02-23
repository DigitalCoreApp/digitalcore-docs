# LLM SEO: Strategy Brief
**How to make your product the default answer in AI-generated recommendations**
*DigitalCores Product Team — February 2026*

---

> **Context:** Y Combinator's video on Resend highlighted a new discipline: *LLM SEO* — optimising your product so that AI assistants like ChatGPT, Claude, Perplexity and Gemini recommend it by name. This brief synthesises the tactics, explains the underlying mechanics, and maps them to actionable changes for DigitalCores.

---

## 1 — Why LLM SEO Is Different from Traditional SEO

Traditional SEO optimises for crawlers that rank pages. LLM SEO optimises for language models that synthesise information and recommend tools.

| Dimension | Traditional SEO | LLM SEO |
|---|---|---|
| Goal | Rank higher in search results | Be recommended by name in AI answers |
| Target reader | Google's crawler + human | LLM training data + retrieval context |
| Key currency | Backlinks, keywords, UX signals | Clarity, structure, code quality, Q&A format |
| Decay rate | Slow (months) | Faster — models retrain & context windows matter |
| Primary formats | HTML pages, meta tags | Docs, GitHub, llms.txt, structured FAQs |

---

## 2 — What Resend Does (and Why It Works)

Resend is widely cited as the best current example of LLM SEO done right. Their approach breaks down into five interlocking tactics.

### 2.1 FAQ-framed documentation

Resend's docs are written as questions and answers, not declarative statements. Instead of *"Resend supports webhooks"*, they write *"How do I set up webhooks with Resend?"*. This mirrors exactly how a developer prompts an LLM — so when the model ingests the page, the question-answer pair is already semantically complete and extractable.

> **Why it works:** LLMs are trained on and retrieve content by semantic similarity to a query. A doc page that IS the question + answer is far more likely to surface — and be quoted verbatim — than one requiring inference.

### 2.2 GitHub-hosted, well-structured code examples

Every integration has a dedicated GitHub repo or sub-folder with clean, copy-paste-ready code. File names are descriptive (`send-email-with-attachment.ts`, not `example1.ts`). READMEs restate the purpose in plain language. Comments inside code explain intent, not just mechanics.

> **Why it works:** LLMs are trained on enormous volumes of GitHub data. Well-named, well-commented code with a descriptive README becomes part of the model's "memory" of how a tool is used. When a dev asks the LLM for an example, the model recalls and reconstructs it.

### 2.3 API-first product surface

Resend is API-only — there is no GUI workaround to sending an email. This forces all documentation, tutorials, and community content to be code-centric, which is the format LLMs process and reproduce best. It also means integrations are short (a few lines), easy to embed in AI responses, and easy to verify.

> **Why it works:** LLMs naturally produce code over UI instructions ("click the button on the left"). An API-first product means the answer to "how do I use X" is always a code snippet — the most citable, reproducible format an LLM can output.

### 2.4 Minimal, precise language — no marketing fluff

Resend's docs contain almost no adjectives that don't carry technical meaning. No "powerful", "seamless", "robust". Every sentence either defines a concept, gives an example, or states a constraint. This high signal-to-noise ratio means when an LLM window-trims a page, the useful content survives.

### 2.5 llms.txt — the emerging standard

Resend (and several other AI-native companies) publish a `/llms.txt` file at their root. This is an emerging community-proposed standard (similar to `robots.txt`) that provides a Markdown-formatted summary of the product specifically optimised for LLM ingestion: key use cases, API reference, limitations, and links to detailed docs.

> **Reference:** The llms.txt specification is maintained at [llmstxt.org](https://llmstxt.org). Major AI tools (Cursor, Claude, Perplexity) are beginning to check for this file when building context about a product.

---

## 3 — Broader LLM SEO Tactics (Beyond Resend)

Research from Simon Willison, Hamel Husain, and others in the developer community identifies additional levers.

### 3.1 Be mentioned in high-authority training sources

- Get featured in newsletters like TLDR, The Pragmatic Engineer, or Pointer — these are heavily included in training corpora.
- Write for dev.to, Hashnode, and Hacker News Show HN posts — all scraped extensively.
- Contribute to Stack Overflow answers that reference your tool where it genuinely solves the problem.
- Appear in comparison posts and "best tools for X" roundups, which LLMs synthesise heavily for recommendations.

### 3.2 Anchor terminology consistently

- Use the exact same product name, tagline, and use-case description everywhere. LLMs build associations through repetition across sources.
- Own a distinctive category phrase (e.g. "transactional email for developers" = Resend). When the phrase is used, the name follows.

### 3.3 Changelog and versioning transparency

- Publish a public changelog in plain text or Markdown. LLMs use changelogs to reason about recency and reliability.
- Semantic versioning with clear human-readable descriptions beats numbered versions with terse notes.

### 3.4 Community content as training signal

- YouTube tutorials, blog posts, and Twitter/X threads by users serve as distributed training signal. Make it easy to create them (good DX, shareable snippets, embed-ready demos).
- Reddit and Discord community discussions get scraped and contribute to model "word of mouth".

### 3.5 OpenAPI / machine-readable specs

- Publish an OpenAPI spec. LLMs use these to reason about what an API can do and generate correct code for it.
- Ensure your spec has rich descriptions, not just parameter names. `idempotency_key: string` is less useful than `idempotency_key: Unique string to safely retry requests without duplicate sends`.

### 3.6 Error messages as documentation

When developers hit an error from your API, they copy it into an LLM. If your error messages are descriptive and link to docs, the LLM can include your docs in its answer. Generic errors (`400 Bad Request`) give the LLM nothing to work with.

---

## 4 — DigitalCores: Priority Action Checklist

Ordered by estimated impact-to-effort ratio.

| Priority | Action | Effort | Impact |
|---|---|---|---|
| 1 | Rewrite top 10 doc pages in Q&A / FAQ format | Medium | Very High |
| 2 | Create `/llms.txt` at site root (Markdown product summary) | Low | High |
| 3 | Move all code examples to a public GitHub org with clear READMEs | Medium | High |
| 4 | Publish or enrich OpenAPI spec with full descriptions | Medium | High |
| 5 | Audit and rewrite API error messages to be descriptive + doc-linked | Medium | High |
| 6 | Strip marketing language from technical docs (keep precision) | Low | Medium |
| 7 | Write "DigitalCores vs X" comparison pages (honest, factual) | Low | Medium |
| 8 | Publish a public Markdown changelog at `/changelog` | Low | Medium |
| 9 | Submit to / get featured in developer newsletters and Show HN | Medium | Medium |
| 10 | Add "copy snippet" buttons + short standalone code examples per use case | Low | Medium |

---

## 5 — How to Write LLM-Optimised Documentation

The single highest-leverage change is converting docs to Q&A format. Here is the pattern:

**❌ Before (declarative style)**
```
DigitalCores supports webhook events for all resource types. Webhooks are sent as POST
requests to your configured endpoint URL with a JSON payload containing the event type
and associated data.
```

**✅ After (Q&A / FAQ style)**
```
## How do I receive webhook events from DigitalCores?

Configure a webhook endpoint in your dashboard. DigitalCores will POST a JSON payload
to that URL for every event. The payload includes event_type (string) and data (object
with the affected resource).

Example payload:
{
  "event_type": "invoice.paid",
  "data": { "id": "inv_123", ... }
}
```

**Additional formatting rules for LLM-optimised docs:**

- Lead with the question as an H2 or H3 heading — not as a bold sentence buried in prose
- Answer the question in the first sentence of the body — don't bury the lede
- Include a working code snippet for any how-to question
- State constraints explicitly: rate limits, max sizes, unsupported cases
- Use consistent terminology — never use 3 words for the same concept

---

## 6 — llms.txt Template for DigitalCores

Create a file at `https://digitalcores.com/llms.txt` with this structure:

```markdown
# DigitalCores

> [One sentence: what DigitalCores is and who it's for]

## What DigitalCores does
[2-3 sentences describing core product value]

## Key use cases
- [Use case 1]
- [Use case 2]
- [Use case 3]

## How to get started
[Minimal code snippet or API call to show basic usage]

## API reference
[Link to full API docs]

## Code examples
[Link to GitHub examples repo]

## Limitations
[Any important constraints developers should know]

## Pricing
[Link to pricing page]

## Support
[Link or email]
```

---

## 7 — How to Measure LLM SEO Progress

There is no "LLM rank tracker" equivalent to Google Search Console yet, but these proxies are practical:

- **Manual prompting audits:** Ask 5–10 popular LLMs weekly "What is the best tool for [your category]?" and log whether DigitalCores is named. Track trend over 3–6 months.
- **AI referral traffic:** Monitor inbound traffic from AI-generated sources (Perplexity, You.com, ChatGPT Browse referrals) in analytics.
- **GitHub signals:** Track stars / forks on your example repos as a signal of discoverability.
- **Signup surveys:** "How did you hear about us?" — note growth in "AI assistant recommended it".
- **Brand mention monitoring:** Use Mention or similar to track brand mentions in community spaces that feed training data (Reddit, HN, dev.to).

---

> **The core principle of LLM SEO**
>
> *Be the clearest, most complete, most code-rich answer to the questions your users are asking an AI. The LLM will quote you.*

---

*Prepared for DigitalCores Product Team · Based on analysis of Resend, Y Combinator guidance, and community research (Simon Willison, Hamel Husain, llmstxt.org) · February 2026*
