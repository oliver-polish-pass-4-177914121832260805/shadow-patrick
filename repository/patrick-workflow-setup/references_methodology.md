# Brief Methodology: Full Narrative

This reference gives the complete narrative for how the Keel3 weekly AI intelligence brief gathers and processes articles. Two registers are provided for each stage: an **external** version safe for client and prospect documents, and **internal notes** that should stay inside Keel3.

The brief is called "Heads Down to Heads Up." The premise in one line: most professionals are heads-down in their work and cannot track the flood of AI developments; the brief lifts their heads up once a week with only what matters to them, already interpreted.

---

## Stage 1: Gather

**External.** Each day, an automated scan sweeps a wide range of sources: AI trade press, mainstream business and technology news, industry-specific publications, regulatory and agency newsrooms, and curated feeds. This is supplemented by a regular sweep of subscribed industry newsletters and a set of curated expert social-media lists maintained by topic and by industry. The goal of this stage is breadth. It is better to capture a story that later gets cut than to miss one, so the gathering net is deliberately wide and some noise is accepted.

**Internal notes.** The daily scan runs through an automation that files candidates automatically. A second scan pulls from curated expert lists on X. A weekly newsletter sweep reads subscribed sources (Information pieces, Ben's Bites, Every, Turing Post, DealBook, and others) to catch stories that the social-and-trade-press lens misses. Known blind spot: both automated scans systematically under-cover Federal Register and agency procedural notices because those do not travel through social media. A manual agency-newsroom and Federal Register check (FDA, OCC, Fed, FDIC, CISA, SEC) for the prior week is required before finalizing briefs for regulated-industry clients. A second known blind spot: the scans are tuned to AI trade press and miss material developments reported only in regulated-industry trade press (Wall Street, banking, wealth, clinical). A Thursday "did anything material hit our clients' industries" gut check covers this before Friday assembly.

---

## Stage 2: Capture and Pool

**External.** Every candidate story is logged into a structured pool with a consistent set of fields: the headline, the original source and date, a plain-language summary of what happened, a general read on what it means, and a concrete analogy that makes the development intuitive. Each story is tagged by which client industries it is relevant to and by topic category. The pool is the running body of raw material from which each week's briefs are drawn.

**Internal notes.** The pool lives in Notion with per-client filtered views. Critical discipline: the pool, as seen in the Notion UI with its filtered views, is the ground truth, not anyone's memory of what was filed. The semantic search available to Claude ranks by text relevance and does not enumerate every row tagged for a client, so brief-building always starts from a fresh read of the actual pool views, never from recall. Each story carries a shared layer (the fields above, written once) reused across every client who gets that story. Status field tracks Candidate, Used, Archived.

---

## Stage 3: Triage and Verify

**External.** Before any story is used in a client brief, it is checked for accuracy. Specific dollar figures, company valuations, revenue numbers, regulatory actions, and claims that a named product went live somewhere are spot-checked against primary sources: the company's own filing or announcement, the regulator's own notice, the original reporting. Near-duplicate stories covering the same development are consolidated into one. Framings that the automated gathering got wrong are corrected. Anything that cannot be verified against a credible primary source is either softened with explicit attribution or dropped. Nothing unverified goes in front of a client.

**Internal notes.** Recurring verification offenders: AI-company valuations (reported wrong before, e.g. Anthropic at $30B/$900B vs the correct $65B/$965B), enterprise AI ARR figures, professional-services seat counts. Recurring framing offenders: stories that conflate what a platform itself does with what third parties do on the platform (e.g. a chat assistant adding read-only finance features vs third parties wiring trade execution into that chat surface). The automated scan is good signal but has produced both wrong numbers and wrong framings, so headline specifics are always checked by a human before send. Duplicate clusters are common when the same announcement is filed under two valuations or two framings on different days.

---

## Stage 4: Select and Tailor

**External.** For each client, four to five stories are selected from the verified pool and the analysis is written specifically for that reader. The same underlying development is interpreted differently depending on who is reading: a regulatory shift means one thing to a bank, another to a wealth manager, another to a health system. Selection favors concrete, in-the-tape developments (a specific regulatory action, a specific deal, a specific deployment) over abstract commentary, and deliberately mixes topic categories so that a single brief does not read narrow. Most importantly, each story is matched to the actual reader's role and decision lens, not just the client's industry in the abstract.

**Internal notes.** Selection rules: lead with a universal headline if one exists that week, framed per client; prefer concrete over think-piece; mix lenses; match items to the reader (M&T's reader is a regional president, not corporate HQ; ChristianaCare's reader sits on the Quality & Safety Committee); drop research-direction items for operational items when they compete. Per-client lenses and hard sensitivities are documented in the pipeline skill's client_profiles.md. The tailored third column ("what it means for [client]") and the closing one-line summary are the bespoke layer, written fresh per client per week. Hard 2-sentence cap on the heavy fields keeps the one-page brief readable. Client sensitivities (KPS embedded-expert framing, Luna no-financials, ChristianaCare safety framing) are hard rules, not preferences, and are never exposed in any shareable methodology document.

---

## Stage 5: Produce and Deliver

**External.** The selected and tailored stories are rendered into a single-page, brand-locked brief. Every story follows the same structure so the brief is fast to read: what happened, what it means in general, what it means for you specifically, and an analogy that makes it stick. A one-line summary of the week ties the stories together. The finished brief is delivered to the client on a consistent weekly cadence.

**Internal notes.** Rendering is HTML and CSS to PDF via WeasyPrint, brand palette locked in the renderer (Navy, Orange, Cream, Slate, Inter typeface), auto-fit scaling to hold one page. Output naming convention and the full build flow are in the pipeline skill. After delivery, used rows are marked Status=Used in the pool so they do not resurface as candidates.

---

## The one-line pitch for the methodology

Breadth at the top, rigor in the middle, tailoring at the end. Wide daily gathering across many sources, human verification of every specific claim against primary sources, and analysis rewritten for each reader's world. That combination is what separates the brief from an automated news roundup or a generic AI newsletter.