# JEV / Outreach CRM — Technical Case Study

A single-page, compact interactive technical case-study landing page showcasing the integration of **JEV** as an autonomous lead classification layer inside a custom-built outreach CRM.

## Core Architecture & Flow

```
IMPORT → QUALIFY → VERIFY → JEV CLASSIFY → CAMPAIGN → SEND → FOLLOW-UP
```

- **Custom Outreach CRM**: Ingests, qualifies, and validates outbound leads.
- **JEV Intelligence Layer**: Evaluates leads for ICP classification, assigns HOT/WARM/COLD verdicts, computes fit scores (1.00 - 3.00), and tracks token usage, latency, and costs.
- **Defense in Depth**: Deliverability verification, catch-all detection, spam suppression, and rate-limited dispatch rules remain strictly enforced and are never bypassed.

## Features

- **Interactive JEV Workflow Mockup**: Scope selector, lead count stepper (1–50), and one-click classification trigger.
- **State Progression**: Real-time worker lifecycle (`QUEUED` → `RUNNING` → `COMPLETED`).
- **Telemetry & Metrics**: Live tracking of input tokens, output tokens, USD cost, and per-lead latency.
- **X-Ray Inspector**: Click any lead result row to inspect qualitative classification reasoning and extracted signals.
- **Production Screenshots**: Direct captures from the live CRM production build.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS tokens
- **Typography**: JetBrains Mono
- **Icons**: Lucide React

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or configured port) in your browser.

## Production Build & Deployment

```bash
npm run build
npm run start
```

### Vercel Deployment
This project is fully optimized for Vercel deployment with zero required environment variables.
