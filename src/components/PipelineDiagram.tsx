"use client";

import React, { useState } from "react";
import { ShieldCheck, Info, Check, ArrowDown, Sparkles } from "lucide-react";

interface PipelineStep {
  id: string;
  name: string;
  isJev?: boolean;
  tag: string;
  summary: string;
  details: string[];
  safetyRule?: string;
}

const STEPS: PipelineStep[] = [
  {
    id: "import",
    name: "IMPORT",
    tag: "Source Ingestion",
    summary: "Ingest prospect lists, CSVs, and webhooks into raw staging tables.",
    details: [
      "Staging database with schema validation",
      "Company domain normalization & deduplication",
      "Lead source provenance tracking"
    ]
  },
  {
    id: "qualify",
    name: "QUALIFY",
    tag: "Rule-Based Filter",
    summary: "Hard mechanical qualification before any API calls or spend.",
    details: [
      "Target geography filter (country / metro area)",
      "Industry whitelist / blacklist check",
      "Employee count & seniority threshold matching"
    ],
    safetyRule: "Disqualified leads are rejected here with zero token spend."
  },
  {
    id: "verify",
    name: "VERIFY",
    tag: "Deliverability Gate",
    summary: "Comprehensive multi-step deliverability & mailbox validation.",
    details: [
      "DNS MX record & SMTP handshake tests",
      "Disposable & catch-all domain detection",
      "Internal suppression & bounce list checking"
    ],
    safetyRule: "Leads with invalid mailboxes are stopped immediately before JEV classification."
  },
  {
    id: "jev",
    name: "JEV CLASSIFY",
    isJev: true,
    tag: "AI Intelligence Layer",
    summary: "JEV adds an intelligence and enrichment layer directly inside the outreach pipeline.",
    details: [
      "ICP classification (Healthcare, Real Estate, etc.)",
      "Verdict assignment: HOT / WARM / COLD",
      "Fit score calculation (normalized 1.00 - 3.00)",
      "Telemetry tracking: Input tokens, output tokens, USD cost, latency",
      "Direct persistence into custom CRM database"
    ],
    safetyRule: "CRITICAL: JEV does not bypass my qualification, email verification, suppression, or sending rules."
  },
  {
    id: "campaign",
    name: "CAMPAIGN",
    tag: "Sequence Routing",
    summary: "Route leads into hyper-targeted sequences based on JEV ICP & verdict.",
    details: [
      "HOT leads routed to high-priority direct sequence",
      "WARM leads routed to educational value sequence",
      "Dynamic prompt injection with JEV extracted signals"
    ]
  },
  {
    id: "send",
    name: "SEND",
    tag: "Controlled Dispatch",
    summary: "Rate-limited mailbox dispatch with warmup algorithms.",
    details: [
      "Multi-mailbox pool rotation",
      "Jittered delivery intervals (preventing spam triggers)",
      "Strict daily volume caps per sending account"
    ],
    safetyRule: "Sending volume strictly throttled regardless of JEV batch size."
  },
  {
    id: "followup",
    name: "FOLLOW-UP",
    tag: "Stateful Automation",
    summary: "Automated multi-touch follow-up engine based on recipient actions.",
    details: [
      "Reply detection with instant campaign halt",
      "Out-of-office parsing and scheduled snooze",
      "Event telemetry logging back to CRM"
    ]
  }
];

export function PipelineDiagram() {
  const [selectedStep, setSelectedStep] = useState<string>("jev");

  const current = STEPS.find((s) => s.id === selectedStep) || STEPS[3];

  return (
    <div className="w-full border-2 border-[#111111] bg-[#FFFFFF]">
      {/* Header bar */}
      <div className="border-b-2 border-[#111111] bg-[#ECEAE3] px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs tracking-wider uppercase text-[#111111]">
            [SYSTEM ARCHITECTURE]
          </span>
          <span className="text-xs text-[#6B6A64]">
            Custom Outreach CRM Pipeline
          </span>
        </div>
        <span className="text-[11px] text-[#6B6A64] font-mono">
          Hover or click any node to inspect
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#111111]">
        {/* Left: Interactive pipeline ladder */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-[#FFFFFF] flex flex-col gap-2">
          <div className="text-[11px] font-bold text-[#6B6A64] tracking-wider uppercase mb-1">
            PIPELINE FLOW (TOP TO BOTTOM)
          </div>

          <div className="flex flex-col gap-1.5">
            {STEPS.map((step, idx) => {
              const isSelected = selectedStep === step.id;
              const isJev = step.isJev;

              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setSelectedStep(step.id)}
                    className={`w-full text-left px-3 py-2.5 border-2 transition-all flex items-center justify-between text-xs font-mono group ${
                      isSelected
                        ? isJev
                          ? "border-[#111111] bg-[#1F4FE0] text-[#FFFFFF]"
                          : "border-[#111111] bg-[#FBF3B9] text-[#111111]"
                        : isJev
                        ? "border-[#1F4FE0] bg-[#FFFFFF] text-[#1F4FE0] hover:bg-[#1F4FE0]/5 font-bold"
                        : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-[#ECEAE3]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-[10px] font-bold ${
                          isSelected && isJev ? "text-[#FFFFFF]/80" : "text-[#6B6A64]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="font-bold tracking-wide">
                        {step.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] px-1.5 py-0.5 border ${
                          isSelected && isJev
                            ? "border-[#FFFFFF] text-[#FFFFFF]"
                            : isSelected
                            ? "border-[#111111] text-[#111111]"
                            : "border-[#6B6A64]/40 text-[#6B6A64]"
                        }`}
                      >
                        {step.tag}
                      </span>
                      {isJev && (
                        <span
                          className={`w-2 h-2 ${
                            isSelected ? "bg-[#FFFFFF]" : "bg-[#1F4FE0]"
                          }`}
                        />
                      )}
                    </div>
                  </button>

                  {idx < STEPS.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown size={13} className="text-[#6B6A64]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Right: Technical Inspector for the active node */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-[#FFFFFF] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111]">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#6B6A64] font-bold">NODE:</span>
                <span className="text-base font-bold text-[#111111] bg-[#ECEAE3] px-2 py-0.5 border border-[#111111]">
                  {current.name}
                </span>
                {current.isJev && (
                  <span className="text-[10px] bg-[#1F4FE0] text-[#FFFFFF] font-bold px-1.5 py-0.5">
                    INTEGRATED LAYER
                  </span>
                )}
              </div>
              <span className="text-[11px] text-[#6B6A64]">
                {current.tag}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-[#111111] leading-relaxed">
                {current.summary}
              </p>
            </div>

            {/* What this node returns / performs */}
            <div className="mt-5">
              <div className="text-[11px] font-bold text-[#6B6A64] tracking-wider uppercase mb-2">
                {current.isJev ? "WHAT JEV RETURNS & STORES" : "ENGINEERING SPECIFICATIONS"}
              </div>
              <ul className="space-y-2 text-xs">
                {current.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#ECEAE3] p-2 border border-[#111111]">
                    <Check size={14} className="text-[#1F4FE0] shrink-0 mt-0.5" />
                    <span className="text-[#111111] font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Critical Engineering Distinctions */}
          <div className="mt-6 pt-4 border-t-2 border-[#111111]">
            <div className="border-2 border-[#111111] bg-[#FBF3B9] p-3 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-[#111111] mb-1">
                <ShieldCheck size={15} className="text-[#1F4FE0]" />
                <span>HOW I ACTUALLY ENGINEERED THE SYSTEM:</span>
              </div>
              <p className="text-[#111111] font-bold leading-normal">
                &ldquo;JEV does not bypass my qualification, email verification, suppression or sending rules.&rdquo;
              </p>
              <p className="text-[11px] text-[#6B6A64] mt-1.5 leading-relaxed">
                This distinction is crucial: JEV is an intelligence and enrichment layer that runs inside the outreach pipeline I built. Raw leads must first pass strict mechanical gates before spending tokens, and verified deliverability rules are never compromised.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
