---
name: keel3-brief-methodology
description: Explain how articles are gathered, triaged, verified, and processed into the Keel3 weekly AI intelligence brief ("Heads Down to Heads Up"). Use this skill whenever someone asks how the newsletter or weekly brief works, how stories are sourced or selected, how the pipeline gathers news, what the editorial process is, "how does the brief get made", "explain your methodology", "how do you pick what goes in the brief", "what's your sourcing process", or asks for a one-page methodology overview, process document, or "how it works" explainer to share with a client, prospect, partner, or teammate. Also trigger when a client or prospect wants reassurance about sourcing rigor, fact-checking, or editorial standards behind the brief. Produces either a conversational explanation or a branded Keel3 .docx methodology document (Navy #0F1E2E, Orange #F25C2A, Cream #F0EFE9, Arial) depending on what the user asks for. This is the explain-the-process skill; it does NOT build or render the weekly brief itself (that is keel3-weekly-brief-pipeline).
---

# Keel3 Brief Methodology Explainer

This skill explains how the Keel3 weekly AI intelligence brief, "Heads Down to Heads Up," gathers and processes articles from raw signal into a finished one-page client brief. It is the skill to reach for when the goal is to *describe the process*, not to *run it*.

Two distinct outputs are possible. Decide which one the user wants before producing anything:

1. **A conversational explanation** in the chat. Use this when the user is asking for their own understanding ("how does this work again?", "walk me through the sourcing"). Keep it natural prose, structured by the five stages below.

2. **A shareable document** (a branded Keel3 .docx). Use this when the user says they want something to send, share, hand to a client or prospect, or "a one-pager on the methodology." This is a standalone deliverable. Follow the document build steps below.

If it is ambiguous which one is wanted, ask one short question: "Do you want this as an explanation here, or as a branded one-pager you can share?"

## What to never include in a shareable version

The internal pipeline has details that are appropriate for Keel3 but not for a client-facing or prospect-facing document. When producing anything shareable, **leave these out**:

- Specific client names and their individual sensitivities (KPS framing rules, Luna financial-figure rules, ChristianaCare safety framing, etc.). Describe client tailoring in the abstract: "each brief is tailored to the reader's industry, role, and decision lens."
- Internal tool names and infrastructure specifics (Notion Story Pool internals, Make.com automation, the names of the scan scripts, data source IDs).
- Internal failure modes and corrections history (the "common pitfalls" list, specific past errors caught).
- The two-layer shared/bespoke production economics, which is an internal efficiency mechanism.

A client should come away understanding the *rigor* of the process (multi-source gathering, triage, human verification against primary sources, tailored analysis) without the internal plumbing. The internal version can be franker.

Always confirm before sharing externally if a draft contains anything from the list above.

## The five stages

The pipeline moves an article from raw signal to finished brief through five stages. The full narrative for each stage is in `references/methodology.md`; read it before writing either output. Summary:

1. **Gather.** A daily automated scan pulls candidate stories from a wide range of AI and industry-trade sources across the open web and curated feeds, supplemented by a sweep of subscribed industry newsletters and a set of curated expert social-media lists. The aim at this stage is breadth: catch everything potentially relevant, accept noise.

2. **Capture and pool.** Candidate stories are logged into a structured story pool with a consistent set of fields (headline, source, date, a plain-language summary, the general "what it means," and an analogy), tagged by relevance to each client's industry and by topic lens. The pool is the running raw material for the week.

3. **Triage and verify.** Before anything is used, stories are checked for accuracy: dollar figures, valuations, revenue numbers, regulatory actions, and named deployments are spot-checked against primary sources. Near-duplicates are consolidated. Wrong framings are corrected. Anything that cannot be verified is softened or dropped.

4. **Select and tailor.** For each client, four to five stories are chosen and the analysis is rewritten for that reader's industry, role, and decision lens. The same underlying story is framed differently for a bank, a wealth manager, a hedge fund, a health system. Selection favors concrete, in-the-tape developments over abstract commentary, and mixes topic lenses so a brief never reads narrow.

5. **Produce and deliver.** The selected, tailored stories are rendered into a one-page, brand-locked brief with a consistent structure (what happened, what it means generally, what it means for you, an analogy, and a one-line summary of the week) and delivered to the client.

The throughline to convey: **breadth at the top, rigor in the middle, tailoring at the end.** Wide gathering, human verification against primary sources, and reader-specific analysis are what separate the brief from a generic news roundup.

## Building the shareable document

When the user wants the branded one-pager:

1. Read `references/methodology.md` for the stage narratives and `references/brand.md` for the exact brand standards.

2. Read the docx skill at `/mnt/skills/public/docx/SKILL.md` before writing any document code. It carries environment-specific constraints for producing Word files.

3. Build the document with: a title block ("Heads Down to Heads Up: How the Brief Is Built" or a title the user prefers), a one-paragraph overview, the five stages as labeled sections, and a short closing statement on editorial standards (multi-source sourcing, primary-source verification, no AI-generated claims that have not been checked). Keep it to one or two pages.

4. Apply Keel3 brand standards: Navy `#0F1E2E` for headers, Orange `#F25C2A` for accent rules and stage numbers, Cream `#F0EFE9` for any callout background, Arial throughout (the shareable methodology doc uses Arial for broad compatibility on recipients' machines, unlike the brief itself which uses Inter).

5. **No em dashes anywhere.** Use colons, commas, or reword. This is a standing Keel3 editorial rule.

6. Save to `/mnt/user-data/outputs/` as `Keel3_Brief_Methodology.docx` (or a name the user prefers) and present it.

## Editorial standards to mention

When describing the process, these standards are worth stating because they are what give the brief its credibility:

- **Multiple independent sources**, not a single feed.
- **Primary-source verification** of every specific number, regulatory action, and named deployment before it reaches a client.
- **Plain-language framing**: no jargon, no hype vocabulary (disrupt, synergy, game-changer, seamless).
- **Tailored analysis**: every story is rewritten for the specific reader, not syndicated.
- **One page**: disciplined selection, not exhaustive coverage.

## Files in this skill

- `SKILL.md` — this file
- `references/methodology.md` — full narrative of the five-stage pipeline, internal and external versions
- `references/brand.md` — Keel3 brand standards for the shareable document