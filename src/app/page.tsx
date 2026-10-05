import React from "react";
import { MiniWorkflow } from "@/components/MiniWorkflow";
import { JevDemo } from "@/components/JevDemo";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { HowItWorks } from "@/components/HowItWorks";
import { BuildSummary } from "@/components/BuildSummary";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECEAE3] text-[#111111] font-mono flex flex-col items-center">
      {/* Container with crisp borders and max-w layout */}
      <div className="w-full max-w-5xl px-3 sm:px-6 py-6 sm:py-10 flex flex-col gap-8 sm:gap-12">

        {/* 1. SMALL HERO */}
        <header className="w-full flex flex-col gap-4 border-2 border-[#111111] bg-[#FFFFFF] p-5 sm:p-7 shadow-[4px_4px_0px_#111111]">
          {/* Top meta strip */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs tracking-wider uppercase text-[#111111] bg-[#ECEAE3] px-2 py-0.5 border border-[#111111]">
                JEV / OUTREACH CRM
              </span>
              <span className="hidden sm:inline text-xs text-[#6B6A64]">
                Technical Case Study
              </span>
            </div>

            <div className="flex items-center gap-2 border border-[#111111] bg-[#ECEAE3] px-2.5 py-0.5 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#1F4FE0] animate-pulse" />
              <span className="tracking-wide">● LIVE BUILD</span>
            </div>
          </div>

          {/* Main Headline & Subtext */}
          <div className="pt-2">
            <h1 className="text-2xl sm:text-4xl font-black text-[#111111] tracking-tight leading-tight">
              &ldquo;I built JEV into my own outreach CRM.&rdquo;
            </h1>
            <p className="mt-2 text-xs sm:text-base text-[#6B6A64] font-medium max-w-2xl leading-relaxed">
              A lead classification layer that runs directly inside the outreach pipeline I built.
            </p>
          </div>

          {/* Interactive mini workflow */}
          <div className="mt-2 pt-4 border-t border-[#111111]/20">
            <div className="text-[10px] font-bold text-[#6B6A64] tracking-wider uppercase mb-2">
              MINI PIPELINE WORKFLOW:
            </div>
            <MiniWorkflow />
          </div>
        </header>

        {/* 2. INTERACTIVE JEV DEMO (CENTERPIECE) */}
        <section id="demo" className="w-full flex flex-col gap-2 scroll-mt-6">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs bg-[#111111] text-[#FFFFFF] px-2 py-0.5 uppercase tracking-wider">
                02 / DEMO
              </span>
              <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                Interactive JEV Workflow Mockup
              </span>
            </div>
            <span className="text-[11px] text-[#6B6A64] hidden sm:inline">
              Select leads → classify → inspect results
            </span>
          </div>

          <JevDemo />
        </section>

        {/* 3. WHAT I ACTUALLY BUILT */}
        <section className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs bg-[#111111] text-[#FFFFFF] px-2 py-0.5 uppercase tracking-wider">
                03 / PIPELINE
              </span>
              <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                What I Actually Built
              </span>
            </div>
            <span className="text-[11px] text-[#6B6A64] hidden sm:inline">
              Enrichment layer within full delivery pipeline
            </span>
          </div>

          <PipelineDiagram />
        </section>

        {/* 4. HOW IT WORKS (4 COMPACT STEPS) */}
        <section className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs bg-[#111111] text-[#FFFFFF] px-2 py-0.5 uppercase tracking-wider">
                04 / LIFECYCLE
              </span>
              <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                How It Works
              </span>
            </div>
            <span className="text-[11px] text-[#6B6A64] hidden sm:inline">
              4-step asynchronous execution flow
            </span>
          </div>

          <HowItWorks />
        </section>

        {/* 5. FINAL COMPACT SECTION */}
        <section className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs bg-[#111111] text-[#FFFFFF] px-2 py-0.5 uppercase tracking-wider">
                05 / SYSTEM
              </span>
              <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                CRM Architecture &amp; Stack
              </span>
            </div>
          </div>

          <BuildSummary />
        </section>

        {/* FOOTER */}
        <footer className="w-full border-t-2 border-[#111111] pt-4 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B6A64]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#111111]">JEV CASE STUDY</span>
            <span>·</span>
            <span>Independent Outreach CRM Integration</span>
          </div>
          <div className="font-mono text-[11px]">
            Designed &amp; engineered with Next.js, TypeScript &amp; PostgreSQL.
          </div>
        </footer>

      </div>
    </main>
  );
}
