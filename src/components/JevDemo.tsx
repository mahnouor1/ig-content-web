"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SAMPLE_LEADS, CRM_SCREENSHOTS, LeadResult } from "@/data/demoLeads";
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  Zap, 
  ExternalLink, 
  ChevronRight, 
  X, 
  SlidersHorizontal,
  Layers,
  Sparkles,
  Image as ImageIcon
} from "lucide-react";

type DemoState = "IDLE" | "QUEUED" | "RUNNING" | "COMPLETED";

export function JevDemo() {
  const [scope, setScope] = useState<string>("QUALIFIED");
  const [leadCount, setLeadCount] = useState<number>(10);
  const [demoState, setDemoState] = useState<DemoState>("COMPLETED");
  const [progress, setProgress] = useState<number>(10);
  const [selectedLead, setSelectedLead] = useState<LeadResult | null>(null);
  const [viewMode, setViewMode] = useState<"interactive" | "screenshots">("interactive");
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);

  // Derived current displayed leads
  const displayedLeads = SAMPLE_LEADS.slice(0, Math.min(leadCount, SAMPLE_LEADS.length));

  // Telemetry calculation based on lead count
  const inputTokens = Math.round(leadCount * 655.2);
  const outputTokens = Math.round(leadCount * 145.5);
  const totalTokens = inputTokens + outputTokens;
  const requestTimeSec = (leadCount * 0.557).toFixed(1);
  const wallTimeSec = (leadCount * 0.85).toFixed(1);
  const hotCount = displayedLeads.filter(l => l.verdict === "HOT").length;
  const warmCount = displayedLeads.filter(l => l.verdict === "WARM").length;
  const coldCount = displayedLeads.filter(l => l.verdict === "COLD").length;

  const hotPct = Math.round((hotCount / (displayedLeads.length || 1)) * 100);
  const warmPct = Math.round((warmCount / (displayedLeads.length || 1)) * 100);
  const coldPct = Math.round((coldCount / (displayedLeads.length || 1)) * 100);

  // Handle classification trigger
  const runClassification = () => {
    setDemoState("QUEUED");
    setProgress(0);

    setTimeout(() => {
      setDemoState("RUNNING");
      setProgress(Math.floor(leadCount / 2));
    }, 900);

    setTimeout(() => {
      setProgress(leadCount);
      setDemoState("COMPLETED");
    }, 2200);
  };

  const resetDemo = () => {
    setDemoState("IDLE");
    setProgress(0);
  };

  return (
    <div className="w-full border-2 border-[#111111] bg-[#FFFFFF] shadow-[4px_4px_0px_#111111]">
      {/* Top Header & View Mode Switcher */}
      <div className="border-b-2 border-[#111111] bg-[#ECEAE3] px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs tracking-wider uppercase bg-[#111111] text-[#FFFFFF] px-2 py-0.5">
            JEV
          </span>
          <span className="text-xs font-semibold text-[#111111]">
            LEAD CLASSIFIER · OUTREACH CRM
          </span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1.5 bg-[#FFFFFF] border-2 border-[#111111] p-0.5">
          <button
            onClick={() => setViewMode("interactive")}
            className={`px-2.5 py-1 text-[11px] font-bold transition-all ${
              viewMode === "interactive"
                ? "bg-[#111111] text-[#FFFFFF]"
                : "text-[#111111] hover:bg-[#ECEAE3]"
            }`}
          >
            INTERACTIVE MOCKUP
          </button>
          <button
            onClick={() => setViewMode("screenshots")}
            className={`px-2.5 py-1 text-[11px] font-bold flex items-center gap-1.5 transition-all ${
              viewMode === "screenshots"
                ? "bg-[#111111] text-[#FFFFFF]"
                : "text-[#111111] hover:bg-[#ECEAE3]"
            }`}
          >
            <ImageIcon size={12} />
            <span>REAL CRM SCREENSHOTS ({CRM_SCREENSHOTS.length})</span>
          </button>
        </div>
      </div>

      {viewMode === "interactive" ? (
        <div className="p-3 sm:p-5 flex flex-col gap-4">
          {/* SECTION A: SELECT LEADS CONTROLS */}
          <div className="border-2 border-[#111111] bg-[#ECEAE3] p-3 sm:p-4">
            <div className="text-[11px] font-bold text-[#6B6A64] tracking-wider uppercase mb-2">
              SELECT LEADS (SCOPE & BATCH SIZE)
            </div>

            {/* Scope tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 mb-3">
              {[
                { id: "QUALIFIED", label: "QUALIFIED", note: "CRM qualified" },
                { id: "DISQUALIFIED", label: "DISQUALIFIED", note: "CRM filtered out" },
                { id: "BY_ICP", label: "BY ICP", note: "One ICP" },
                { id: "BY_CAMPAIGN", label: "BY CAMPAIGN", note: "One campaign" },
                { id: "ALL_LIVE", label: "ALL LIVE LEADS", note: "Advanced: many tokens" },
              ].map((tab) => {
                const isSelected = scope === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setScope(tab.id)}
                    className={`text-left p-2 border-2 transition-all font-mono ${
                      isSelected
                        ? "border-[#111111] bg-[#111111] text-[#FFFFFF]"
                        : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-[#FBF3B9]"
                    }`}
                  >
                    <div className="font-bold text-[11px] tracking-wide leading-tight">
                      {tab.label}
                    </div>
                    <div
                      className={`text-[9px] mt-0.5 ${
                        isSelected ? "text-[#ECEAE3]" : "text-[#6B6A64]"
                      }`}
                    >
                      {tab.note}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Controls row: Lead count + Action button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#111111]/20">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#6B6A64] uppercase">
                    NUMBER OF LEADS (1 TO 50)
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    {[3, 10, 16, 25].map((cnt) => (
                      <button
                        key={cnt}
                        onClick={() => setLeadCount(cnt)}
                        className={`px-2.5 py-1 text-xs font-bold border-2 ${
                          leadCount === cnt
                            ? "border-[#111111] bg-[#111111] text-[#FFFFFF]"
                            : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-[#FBF3B9]"
                        }`}
                      >
                        {cnt}
                      </button>
                    ))}
                    <div className="flex items-center border-2 border-[#111111] bg-[#FFFFFF] ml-1">
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={leadCount}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 1;
                          setLeadCount(Math.min(50, Math.max(1, val)));
                        }}
                        className="w-12 px-1.5 py-0.5 text-xs font-mono font-bold text-center focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block pl-3 border-l border-[#111111]/30">
                  <div className="text-xs font-bold text-[#111111]">
                    {leadCount} leads selected
                  </div>
                  <div className="text-[10px] text-[#6B6A64]">
                    Only these leads will be sent to Jev. 25 eligible in total.
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-2">
                {demoState !== "IDLE" && (
                  <button
                    onClick={resetDemo}
                    title="Reset demo state"
                    className="p-2 border-2 border-[#111111] bg-[#FFFFFF] hover:bg-[#ECEAE3] text-[#111111]"
                  >
                    <RotateCcw size={15} />
                  </button>
                )}

                <button
                  onClick={runClassification}
                  disabled={demoState === "QUEUED" || demoState === "RUNNING"}
                  className={`px-4 py-2.5 border-2 border-[#111111] font-bold text-xs tracking-wider transition-all flex items-center gap-2 ${
                    demoState === "QUEUED" || demoState === "RUNNING"
                      ? "bg-[#6B6A64] text-[#FFFFFF] cursor-wait"
                      : "bg-[#1F4FE0] text-[#FFFFFF] hover:bg-[#163db8] active:translate-y-0.5"
                  }`}
                >
                  <Play size={14} className="fill-current" />
                  <span>
                    {demoState === "QUEUED"
                      ? "QUEUED..."
                      : demoState === "RUNNING"
                      ? `CLASSIFYING ${progress}/${leadCount}...`
                      : `CLASSIFY ${leadCount} LEADS WITH JEV`}
                  </span>
                </button>
              </div>
            </div>

            {/* State status line */}
            <div className="mt-3 pt-2 border-t border-[#111111]/20 flex flex-wrap items-center justify-between gap-2 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#6B6A64]">WORKER STATUS:</span>
                <span
                  className={`px-2 py-0.5 font-bold border border-[#111111] ${
                    demoState === "QUEUED"
                      ? "bg-[#FBF3B9] text-[#111111]"
                      : demoState === "RUNNING"
                      ? "bg-[#1F4FE0] text-[#FFFFFF] animate-pulse"
                      : demoState === "COMPLETED"
                      ? "bg-[#FFFFFF] text-[#111111]"
                      : "bg-[#ECEAE3] text-[#6B6A64]"
                  }`}
                >
                  {demoState === "IDLE" && "READY · AWAITING OPERATOR DISPATCH"}
                  {demoState === "QUEUED" && `QUEUED ${leadCount} LEADS. THE WORKER WILL CLASSIFY THEM.`}
                  {demoState === "RUNNING" && `RUNNING · PROCESSING ${progress} / ${leadCount} LEADS VIA JEV API`}
                  {demoState === "COMPLETED" && `RUN COMPLETE · ${leadCount}/${leadCount} SUCCESS (ALL STORED TO CRM)`}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-[#6B6A64]">
                <span>Pipeline mode:</span>
                <span className="font-bold text-[#111111]">JEV-1.13-PRO</span>
              </div>
            </div>
          </div>

          {/* SECTION B: USAGE & TELEMETRY PANEL */}
          <div className="border-2 border-[#111111] bg-[#FFFFFF]">
            <div className="border-b border-[#111111] bg-[#ECEAE3] px-3 py-1 flex items-center justify-between text-[10px] font-bold text-[#6B6A64]">
              <span>USAGE TELEMETRY & RUN METRICS</span>
              <span className="bg-[#FBF3B9] px-1.5 py-0.2 border border-[#111111] text-[#111111]">
                [DEMO DATA · SOURCED FROM RECENT CRM RUN]
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-[#111111] text-xs">
              <div className="p-2.5">
                <div className="text-[10px] text-[#6B6A64] font-bold uppercase">LEADS PROCESSED</div>
                <div className="font-bold text-sm text-[#111111] mt-0.5">
                  {demoState === "COMPLETED" ? leadCount : demoState === "RUNNING" ? progress : 0}
                </div>
                <div className="text-[9px] text-[#6B6A64]">
                  {demoState === "COMPLETED" ? "COMPLETED · 100%" : `${progress} / ${leadCount}`}
                </div>
              </div>

              <div className="p-2.5">
                <div className="text-[10px] text-[#6B6A64] font-bold uppercase">QUALIFIED / FIT</div>
                <div className="font-bold text-sm text-[#111111] mt-0.5">
                  {demoState === "COMPLETED" ? leadCount : "—"}
                </div>
                <div className="text-[9px] text-[#6B6A64]">Jev ICP not none</div>
              </div>

              <div className="p-2.5">
                <div className="text-[10px] text-[#6B6A64] font-bold uppercase">INPUT TOKENS</div>
                <div className="font-bold text-sm text-[#111111] mt-0.5 font-mono">
                  {demoState === "COMPLETED" ? inputTokens.toLocaleString() : "—"}
                </div>
                <div className="text-[9px] text-[#6B6A64]">from API telemetry</div>
              </div>

              <div className="p-2.5">
                <div className="text-[10px] text-[#6B6A64] font-bold uppercase">OUTPUT TOKENS</div>
                <div className="font-bold text-sm text-[#111111] mt-0.5 font-mono">
                  {demoState === "COMPLETED" ? outputTokens.toLocaleString() : "—"}
                </div>
                <div className="text-[9px] text-[#6B6A64]">from API telemetry</div>
              </div>

              <div className="p-2.5">
                <div className="text-[10px] text-[#6B6A64] font-bold uppercase">TOTAL TOKENS</div>
                <div className="font-bold text-sm text-[#111111] mt-0.5 font-mono">
                  {demoState === "COMPLETED" ? totalTokens.toLocaleString() : "—"}
                </div>
                <div className="text-[9px] text-[#6B6A64]">input + output</div>
              </div>

              <div className="p-2.5">
                <div className="text-[10px] text-[#6B6A64] font-bold uppercase">USD COST</div>
                <div className="font-bold text-sm text-[#111111] mt-0.5 font-mono">
                  {demoState === "COMPLETED" ? `$${((totalTokens / 1000) * 0.004).toFixed(4)}` : "—"}
                </div>
                <div className="text-[9px] text-[#6B6A64]">jev-1.13-free</div>
              </div>

              <div className="p-2.5">
                <div className="text-[10px] text-[#6B6A64] font-bold uppercase">PROCESSING TIME</div>
                <div className="font-bold text-sm text-[#111111] mt-0.5 font-mono">
                  {demoState === "COMPLETED" ? `${requestTimeSec} s` : "—"}
                </div>
                <div className="text-[9px] text-[#6B6A64]">avg 557 ms / lead</div>
              </div>
            </div>
          </div>

          {/* SECTION C: RESULTS TABLE & PIPELINE SIDEBAR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Table Area (8 cols) */}
            <div className="lg:col-span-8 border-2 border-[#111111] bg-[#FFFFFF]">
              <div className="border-b-2 border-[#111111] bg-[#FBF3B9] px-3 py-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#111111]">RESULTS</span>
                  <span className="text-[10px] text-[#6B6A64] font-mono">
                    QUALIFIED SAMPLE · {displayedLeads.length}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#111111] bg-[#FFFFFF] px-1.5 py-0.5 border border-[#111111]">
                  CLICK ANY ROW TO INSPECT JEV REASONING
                </span>
              </div>

              <div className="overflow-x-auto max-h-[380px] overflow-y-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead className="bg-[#ECEAE3] text-[#6B6A64] text-[10px] uppercase tracking-wider sticky top-0 border-b border-[#111111] z-10">
                    <tr>
                      <th className="p-2 border-r border-[#111111]/30">COMPANY</th>
                      <th className="p-2 border-r border-[#111111]/30">CRM ICP</th>
                      <th className="p-2 border-r border-[#111111]/30">JEV ICP</th>
                      <th className="p-2 border-r border-[#111111]/30">VERDICT</th>
                      <th className="p-2 border-r border-[#111111]/30">FIT SCORE</th>
                      <th className="p-2 border-r border-[#111111]/30 hidden sm:table-cell">TOKENS</th>
                      <th className="p-2 hidden md:table-cell">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#111111]/20">
                    {demoState === "IDLE" ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-[#6B6A64]">
                          No classification job has been run yet. Click &ldquo;CLASSIFY LEADS WITH JEV&rdquo; above.
                        </td>
                      </tr>
                    ) : demoState === "QUEUED" ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-[#111111] bg-[#FBF3B9]">
                          <div className="font-bold">Job Queued. Worker initializing...</div>
                          <div className="text-[11px] text-[#6B6A64] mt-1">Awaiting batch worker pickup from PostgreSQL queue.</div>
                        </td>
                      </tr>
                    ) : (
                      displayedLeads.map((lead, idx) => {
                        const isHot = lead.verdict === "HOT";
                        const isWarm = lead.verdict === "WARM";
                        const isCold = lead.verdict === "COLD";
                        const isSelected = selectedLead?.id === lead.id;

                        return (
                          <tr
                            key={lead.id}
                            onClick={() => setSelectedLead(lead)}
                            className={`cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-[#FBF3B9]"
                                : idx % 2 === 0
                                ? "bg-[#FFFFFF] hover:bg-[#FBF3B9]/50"
                                : "bg-[#ECEAE3]/40 hover:bg-[#FBF3B9]/50"
                            }`}
                          >
                            <td className="p-2 font-bold text-[#111111] border-r border-[#111111]/20 whitespace-nowrap">
                              {lead.company}
                            </td>
                            <td className="p-2 text-[#6B6A64] border-r border-[#111111]/20 whitespace-nowrap">
                              {lead.crmIcp}
                            </td>
                            <td className="p-2 font-semibold text-[#111111] border-r border-[#111111]/20 whitespace-nowrap">
                              {lead.jevIcp}
                            </td>
                            <td className="p-2 border-r border-[#111111]/20 whitespace-nowrap">
                              <span
                                className={`px-2 py-0.5 text-[10px] font-bold inline-block text-center min-w-[50px] border border-[#111111] ${
                                  isHot
                                    ? "bg-[#E23B2E] text-[#FFFFFF]"
                                    : isWarm
                                    ? "bg-[#F09A1E] text-[#111111]"
                                    : "bg-[#7F9CC9] text-[#111111]"
                                }`}
                              >
                                {lead.verdict}
                              </span>
                            </td>
                            <td className="p-2 border-r border-[#111111]/20 whitespace-nowrap">
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-[#111111]">{lead.score.toFixed(2)}</span>
                                <div className="w-12 h-2 bg-[#ECEAE3] border border-[#111111] overflow-hidden">
                                  <div
                                    className="h-full bg-[#111111]"
                                    style={{ width: `${(lead.score / 3.0) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="p-2 text-[11px] text-[#6B6A64] border-r border-[#111111]/20 whitespace-nowrap hidden sm:table-cell">
                              {lead.tokensIn} / {lead.tokensOut}
                            </td>
                            <td className="p-2 whitespace-nowrap hidden md:table-cell">
                              <span className="text-[10px] font-bold text-[#1F4FE0]">
                                {lead.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pipeline Distribution & Decisions Sidebar (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {/* Distribution Card */}
              <div className="border-2 border-[#111111] bg-[#FFFFFF] p-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#111111] text-xs font-bold text-[#111111]">
                  <span>PIPELINE BREAKDOWN</span>
                  <span className="text-[10px] text-[#6B6A64]">{displayedLeads.length} SCORED</span>
                </div>

                <div className="mt-3 space-y-2 text-xs font-mono">
                  {/* HOT */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-0.5">
                      <span className="font-bold text-[#E23B2E]">HOT</span>
                      <span className="text-[#6B6A64]">{hotCount} · {hotPct}%</span>
                    </div>
                    <div className="w-full h-3 border border-[#111111] bg-[#ECEAE3]">
                      <div className="h-full bg-[#E23B2E]" style={{ width: `${hotPct}%` }} />
                    </div>
                  </div>

                  {/* WARM */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-0.5">
                      <span className="font-bold text-[#F09A1E]">WARM</span>
                      <span className="text-[#6B6A64]">{warmCount} · {warmPct}%</span>
                    </div>
                    <div className="w-full h-3 border border-[#111111] bg-[#ECEAE3]">
                      <div className="h-full bg-[#F09A1E]" style={{ width: `${warmPct}%` }} />
                    </div>
                  </div>

                  {/* COLD */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-0.5">
                      <span className="font-bold text-[#7F9CC9]">COLD</span>
                      <span className="text-[#6B6A64]">{coldCount} · {coldPct}%</span>
                    </div>
                    <div className="w-full h-3 border border-[#111111] bg-[#ECEAE3]">
                      <div className="h-full bg-[#7F9CC9]" style={{ width: `${coldPct}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* JEV.DECISIONS · STORED Log */}
              <div className="border-2 border-[#111111] bg-[#111111] text-[#ECEAE3] p-3 font-mono text-[11px] flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#ECEAE3]/30 text-[10px] text-[#ECEAE3]/70 font-bold">
                    <span>JEV.DECISIONS · PERSISTED</span>
                    <span className="text-[#FBF3B9]">POSTGRESQL</span>
                  </div>

                  <div className="mt-2 space-y-1.5 max-h-[160px] overflow-y-auto">
                    {displayedLeads.slice(0, 5).map((lead) => (
                      <div key={lead.id} className="truncate">
                        <span className="text-[#6B6A64]">&gt;</span>{" "}
                        <span className="text-[#FFFFFF]">{lead.company}</span> —{" "}
                        <span
                          className={
                            lead.verdict === "HOT"
                              ? "text-[#E23B2E] font-bold"
                              : lead.verdict === "WARM"
                              ? "text-[#F09A1E] font-bold"
                              : "text-[#7F9CC9] font-bold"
                          }
                        >
                          {lead.verdict}
                        </span>
                      </div>
                    ))}
                    {displayedLeads.length > 5 && (
                      <div className="text-[10px] text-[#6B6A64]">
                        + {displayedLeads.length - 5} more records updated in CRM
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#ECEAE3]/20 flex items-center justify-between text-[10px]">
                  <span className="text-[#ECEAE3]/60">Lead status &amp; rules:</span>
                  <span className="text-[#FBF3B9] font-bold">UNMODIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SCREENSHOTS PROOF VIEWER */
        <div className="p-3 sm:p-5 flex flex-col gap-4">
          <div className="border-2 border-[#111111] bg-[#ECEAE3] p-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-[#111111]">
                PRODUCTION SYSTEM SCREENSHOTS
              </span>
              <p className="text-[11px] text-[#6B6A64]">
                Direct captures of the JEV classification layer running inside the custom CRM.
              </p>
            </div>
            <div className="flex items-center gap-1">
              {CRM_SCREENSHOTS.map((shot, idx) => (
                <button
                  key={shot.id}
                  onClick={() => setActiveScreenshotIdx(idx)}
                  className={`px-2 py-1 text-xs font-bold border-2 ${
                    activeScreenshotIdx === idx
                      ? "border-[#111111] bg-[#111111] text-[#FFFFFF]"
                      : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-[#FBF3B9]"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="border-2 border-[#111111] bg-[#111111] p-2 flex flex-col items-center">
            <div className="relative w-full h-[400px] sm:h-[500px]">
              <Image
                src={CRM_SCREENSHOTS[activeScreenshotIdx].file}
                alt={CRM_SCREENSHOTS[activeScreenshotIdx].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-full bg-[#FFFFFF] border-t-2 border-[#111111] p-3 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div>
                <strong className="text-[#111111]">{CRM_SCREENSHOTS[activeScreenshotIdx].title}:</strong>{" "}
                <span className="text-[#6B6A64]">{CRM_SCREENSHOTS[activeScreenshotIdx].caption}</span>
              </div>
              <span className="text-[10px] font-mono text-[#6B6A64] shrink-0">
                Capture {activeScreenshotIdx + 1} of {CRM_SCREENSHOTS.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* DETAIL MODAL: X-RAY LEAD INSPECTOR */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-[#111111]/70 flex items-center justify-center p-4">
          <div className="w-full max-w-lg border-2 border-[#111111] bg-[#FFFFFF] p-5 shadow-[6px_6px_0px_#111111]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#6B6A64] uppercase">[X-RAY INSPECTOR]</span>
                <span className="font-bold text-sm text-[#111111] bg-[#FBF3B9] px-2 py-0.5 border border-[#111111]">
                  {selectedLead.company}
                </span>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1 border border-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF]"
              >
                <X size={15} />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-[#ECEAE3] p-2.5 border border-[#111111]">
                <div>
                  <span className="text-[10px] text-[#6B6A64] uppercase font-bold block">VERDICT</span>
                  <span
                    className={`px-2 py-0.5 text-xs font-bold inline-block border border-[#111111] mt-0.5 ${
                      selectedLead.verdict === "HOT"
                        ? "bg-[#E23B2E] text-[#FFFFFF]"
                        : selectedLead.verdict === "WARM"
                        ? "bg-[#F09A1E] text-[#111111]"
                        : "bg-[#7F9CC9] text-[#111111]"
                    }`}
                  >
                    {selectedLead.verdict}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B6A64] uppercase font-bold block">FIT SCORE</span>
                  <span className="font-bold text-sm text-[#111111]">
                    {selectedLead.score.toFixed(2)} <span className="text-[#6B6A64] text-xs">/ 3.00</span>
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#6B6A64] uppercase block mb-1">
                  JEV CLASSIFICATION RATIONALE:
                </span>
                <p className="p-2.5 bg-[#ECEAE3] border border-[#111111] text-[#111111] leading-relaxed">
                  {selectedLead.rationale}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#6B6A64] uppercase block mb-1">
                  EXTRACTED SIGNALS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedLead.signals.map((sig, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[11px] bg-[#FFFFFF] border border-[#111111] font-mono text-[#111111]"
                    >
                      ✓ {sig}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#111111] flex items-center justify-between text-[11px] text-[#6B6A64]">
                <span>Telemetry: {selectedLead.tokensIn} in / {selectedLead.tokensOut} out</span>
                <span>Latency: {selectedLead.timeMs} ms</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-[#111111] flex justify-end">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-1.5 border-2 border-[#111111] bg-[#111111] text-[#FFFFFF] text-xs font-bold hover:bg-[#6B6A64]"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
