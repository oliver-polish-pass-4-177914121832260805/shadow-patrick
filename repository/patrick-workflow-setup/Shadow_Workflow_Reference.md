# Shadow Workflows — Reference Document

This is a plain-English summary of the two Shadows drafted on June 11, 2026. Both are currently **drafts** — they won't run until you activate them from the Builder. Open them there to test, tweak, or activate.

---

## Shadow 1: Daily AI Brief Gather

**Schedule:** Monday–Thursday, 6:00 AM Eastern  
**Builder link:** `?builder=a7d24863-2359-496d-b5fb-b55c4943a45e`

### Step-by-Step

| Step | What It Does |
|------|-------------|
| **1. Web Sweep** | Firecrawl sweeps AI trade press, mainstream business/tech news, industry publications, and regulator newsrooms (FDA, OCC, Fed, FDIC, CISA, SEC, FTC, HHS, CMS, Treasury) for the last 24 hours. Captures headline, source, URL, and date for each candidate. |
| **2. Read Newsletters** | Pulls AI newsletter emails from Gmail — Ben's Bites, The Information, Every, Turing Post, DealBook, Stratechery, and any other AI-focused subscriptions. Extracts stories not already caught by the web sweep. |
| **3. Triage & Verify** | An editor (powered by Claude) processes all candidates: deduplicates near-duplicates, spot-checks specific claims against primary sources (dollar figures, valuations, regulatory actions, FDA clearances), corrects wrong numbers/framings, writes the shared analysis layer (headline, announcement summary, what-it-means, analogy, source), and tags each story with Lens, Relevance, Resonance, Week, and Capture Source. Flags items needing human review (rumors, contested numbers). |
| **4. File to Notion** | Creates rows in the AI Brief Story Pool with all 14 properties populated: Story Title, Announcement Summary, What It Means, Analogy, Source, Source Link, Source Date, Capture Source, Lens, Relevance, Resonance, Week, Date Added, and Status = Candidate. Leaves "If Used, Why?" empty (filled during Friday assembly). |
| **5. Email Digest** | Sends you a short daily email: total stories filed, breakdown by Lens category, top 3 stories with one-line significance, flagged items for review, skipped items with reasons. |

### Permissions
- Notion writes: **Automatic**
- Digest email: **Automatic**

---

## Shadow 2: Friday Brief Assembly

**Schedule:** Friday, 9:00 AM Eastern  
**Builder link:** `?builder=db4fc4a2-da81-487b-b706-221594f6f8db`

### Step-by-Step

| Step | What It Does |
|------|-------------|
| **1. Pull from Notion** | Reads all Candidate rows for the current week from the Story Pool. Groups by client. Loads the full client profiles with all hard rules and sensitivities for all 7 clients (see below). |
| **2. Select & Tailor** | An editor (powered by Claude) picks 4–5 stories per client using selection rules: lead with universal headline, prefer concrete over abstract, mix Lens categories, match to reader's role. Then rewrites the analysis for each client: rewrites "What It Means" for that reader, writes the bespoke "What It Means For [Client]" column with a concrete action, writes "The Week In One Line" synthesis, and produces a one-line "If Used, Why?" rationale for every selected story. All hard client sensitivities are enforced. |
| **3. Render PDFs** | Produces 7 branded one-page PDFs — Letter portrait, Navy/Orange/Cream/Slate palette, Inter font, three-column layout (Announcements / What It Means / What It Means For [Client]), category-label pills, analogy boxes, Week-In-One-Line footer. One page per brief, no exceptions. |
| **4. Save & Mark** | Uploads all 7 PDFs to a "Keel3 Briefs" folder in Google Drive (creates it if needed). Then updates the Notion Story Pool — sets Status to "Used" and fills "If Used, Why?" for every story selected. Leaves unselected Candidate rows untouched. |

### Permissions
- Google Drive uploads: **Automatic**
- Notion writes (marking Used): **Automatic**

---

## 7 Client Profiles (Baked Into the Friday Assembly)

| Client | Business | Reader | Top Lens | Hard Sensitivity |
|--------|----------|--------|----------|-----------------|
| **Incserv** | Registered agent / compliance filings | CEO/owner | Risk & Regulatory, Cyber | — |
| **M&T Bank** | Regional bank (~$200B) | Regional president | Risk & Regulatory, Cyber | No pure investment-banking items |
| **Brown Advisory** | Investment management | CIO / investment strategist | Capital & Deals, Cyber | — |
| **Alpine Associates** | Activist hedge fund | Managing partner / analyst | Capital & Deals, Risk & Regulatory | Frame through activist lens: dislocation, forced change |
| **KPS Life** | Clinical trial FSP | Firm leader | Clinical & Trials, Risk & Regulatory | **Never** frame AI as headcount replacement. Always as embedded-expert leverage. |
| **ChristianaCare** | Mid-Atlantic health system | Quality & Safety Committee | Clinical & Trials, Risk & Regulatory | **Always** frame through patient safety & clinical accountability. Never cost-cutting. |
| **Luna Diabetes** | Pre-FDA medtech (insulin delivery) | Founder / senior leader | Capital/Regulatory, Engineering Velocity | **Never** assert revenue, headcount, or runway. "Lean team scaling toward commercialization." |

---

## Notion Database Properties (14 Fields)

| Property | Type | Filled By |
|----------|------|-----------|
| Story Title | title | Daily Gather (triage) |
| Announcement Summary | rich_text | Daily Gather (triage) |
| What It Means | rich_text | Daily Gather (triage) |
| Analogy | rich_text | Daily Gather (triage) |
| Source | rich_text | Daily Gather (triage) |
| Source Link | url | Daily Gather (triage) |
| Source Date | date | Daily Gather (triage) |
| Capture Source | select | Daily Gather (triage) |
| Lens | multi_select | Daily Gather (triage) |
| Relevance | multi_select | Daily Gather (triage) |
| Resonance | select | Daily Gather (triage) |
| Week | select | Daily Gather (triage) |
| Date Added | date | Daily Gather (file-to-notion) |
| Status | select | Daily Gather → Candidate; Friday Assembly → Used |
| **If Used, Why?** | rich_text | Friday Assembly (save-and-mark) |
