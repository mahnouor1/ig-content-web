"use client";

import React, { useState } from "react";
import { ExternalLink, Terminal, Mail, MessageSquare, Check, X, Shield, ArrowUpRight } from "lucide-react";

const TECH_TAGS = [
  "Next.js",
  "Supabase",
  "PostgreSQL",
  "JEV",
  "Background Worker",
  "Lead Qualification",
  "Email Verification",
  "Campaigns",
  "Sequences",
  "Follow-ups"
];

export function BuildSummary() {
  const [showTalkModal, setShowTalkModal] = useState(false);
  const [showBuildModal, setShowBuildModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dev@outreach-crm.internal");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full border-2 border-[#111111] bg-[#FFFFFF] p-5 sm:p-8 shadow-[4px_4px_0px_#111111]">
      <div className="max-w-2xl">
        <div className="text-[11px] font-bold text-[#6B6A64] tracking-wider uppercase mb-1">
          SYSTEM CONTEXT
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
          One layer of a CRM I built from scratch.
        </h2>

        {/* Technical tags */}
        <div className="flex flex-wrap gap-2 my-5">
          {TECH_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono font-bold bg-[#ECEAE3] text-[#111111] border-2 border-[#111111]"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-[#6B6A64] font-medium leading-relaxed mb-6">
          This is just one part of the outreach system I&apos;m building. The CRM handles lead ingestion, DNS/SMTP deliverability verification, rate-limited mailbox dispatch, and stateful automated follow-ups. JEV acts as the specialized intelligence layer within that engine.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowBuildModal(true)}
            className="px-5 py-3 border-2 border-[#111111] bg-[#111111] text-[#FFFFFF] font-bold text-xs tracking-wider flex items-center gap-2 hover:bg-[#1F4FE0] transition-colors"
          >
            <Terminal size={14} />
            <span>VIEW MY BUILD</span>
          </button>

          <button
            onClick={() => setShowTalkModal(true)}
            className="px-5 py-3 border-2 border-[#111111] bg-[#FFFFFF] text-[#111111] font-bold text-xs tracking-wider flex items-center gap-2 hover:bg-[#FBF3B9] transition-colors"
          >
            <MessageSquare size={14} />
            <span>LET&apos;S TALK</span>
          </button>
        </div>
      </div>

      {/* LET'S TALK MODAL */}
      {showTalkModal && (
        <div className="fixed inset-0 z-50 bg-[#111111]/70 flex items-center justify-center p-4">
          <div className="w-full max-w-md border-2 border-[#111111] bg-[#FFFFFF] p-6 shadow-[6px_6px_0px_#111111]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs bg-[#1F4FE0] text-[#FFFFFF] px-2 py-0.5">
                  CONTACT
                </span>
                <span className="font-bold text-sm text-[#111111]">LET&apos;S TALK</span>
              </div>
              <button
                onClick={() => setShowTalkModal(false)}
                className="p-1 border border-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF]"
              >
                <X size={15} />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <p className="text-[#111111] leading-relaxed">
                Interested in how I architected this custom outreach engine or want to discuss AI integration patterns for outbound systems?
              </p>

              <div className="bg-[#ECEAE3] p-3 border-2 border-[#111111] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#6B6A64] uppercase block font-bold">DIRECT CHANNEL</span>
                  <span className="font-mono font-bold text-xs text-[#111111]">
                    hello@outreach-engineer.dev
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1 bg-[#111111] text-[#FFFFFF] text-[11px] font-bold border border-[#111111] hover:bg-[#1F4FE0]"
                >
                  {copied ? "COPIED" : "COPY"}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="#demo"
                  onClick={() => setShowTalkModal(false)}
                  className="p-2.5 text-center border-2 border-[#111111] bg-[#FFFFFF] font-bold hover:bg-[#FBF3B9]"
                >
                  REPLAY DEMO
                </a>
                <a
                  href="mailto:hello@outreach-engineer.dev?subject=JEV%20CRM%20Case%20Study%20Discussion"
                  className="p-2.5 text-center border-2 border-[#111111] bg-[#1F4FE0] text-[#FFFFFF] font-bold hover:bg-[#163db8]"
                >
                  SEND EMAIL
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MY BUILD MODAL */}
      {showBuildModal && (
        <div className="fixed inset-0 z-50 bg-[#111111]/70 flex items-center justify-center p-4">
          <div className="w-full max-w-xl border-2 border-[#111111] bg-[#FFFFFF] p-6 shadow-[6px_6px_0px_#111111]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs bg-[#111111] text-[#FFFFFF] px-2 py-0.5">
                  SPEC
                </span>
                <span className="font-bold text-sm text-[#111111]">ARCHITECTURE NOTES</span>
              </div>
              <button
                onClick={() => setShowBuildModal(false)}
                className="p-1 border border-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF]"
              >
                <X size={15} />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="bg-[#ECEAE3] p-3 border border-[#111111]">
                <div className="font-bold text-[#111111] mb-1">Stack Components:</div>
                <div className="text-[11px] text-[#6B6A64] space-y-1">
                  <div>• <strong>Next.js + TypeScript:</strong> High-performance operational frontend.</div>
                  <div>• <strong>Supabase + PostgreSQL:</strong> Row-level security, lead tables, and atomic batch updates.</div>
                  <div>• <strong>Detached Node Worker:</strong> Handles queued classification tasks asynchronously without blocking UX.</div>
                  <div>• <strong>JEV API:</strong> Zero-shot ICP identification, qualitative rationale, and confidence scoring.</div>
                </div>
              </div>

              <div className="bg-[#FBF3B9] p-3 border border-[#111111]">
                <div className="font-bold text-[#111111] mb-1">Defense in Depth:</div>
                <div className="text-[11px] text-[#111111] leading-relaxed">
                  JEV is intentionally decoupled from deliverability gating. A lead can be scored 2.90 HOT by JEV, but if its MX server drops or catch-all status fails verification, the campaign dispatch engine automatically halts sending.
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowBuildModal(false)}
                  className="px-4 py-2 border-2 border-[#111111] bg-[#111111] text-[#FFFFFF] font-bold"
                >
                  CLOSE SPEC
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
