"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Clock, Play, Database } from "lucide-react";

interface Step {
  num: string;
  title: string;
  action: string;
  description: string;
  systemDetail: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "SELECT",
    action: "Choose scope + number of leads",
    description: "Operator specifies lead scope (Qualified, Disqualified, By ICP, By Campaign) and batch size (1 to 50 leads).",
    systemDetail: "Frontend queries eligible leads from PostgreSQL using indexed status filters.",
    icon: CheckCircle2
  },
  {
    num: "02",
    title: "QUEUE",
    action: "The CRM creates a JEV job",
    description: "The CRM creates a queued job row with payload hashes and transitions state to QUEUED.",
    systemDetail: "Inserts into `jev_jobs` table; emits background task event without blocking UI thread.",
    icon: Clock
  },
  {
    num: "03",
    title: "PROCESS",
    action: "A background worker sends the job to JEV",
    description: "A detached background worker picks up the job, executes batch requests against JEV, and processes the leads.",
    systemDetail: "Worker streams batch evaluations, tracks per-lead latency (avg ~557ms), and calculates token usage.",
    icon: Play
  },
  {
    num: "04",
    title: "SAVE",
    action: "Results and usage data stored in CRM",
    description: "Results, ICP tags, verdict (HOT/WARM/COLD), fit scores, and exact USD token costs are stored directly into the CRM database.",
    systemDetail: "Atomic batch commit updates `leads` records and appends to run history log.",
    icon: Database
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  // Subtle auto-advance cycle every 4 seconds if untouched
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          const Icon = step.icon;

          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer border-2 p-4 transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? "border-[#111111] bg-[#FFFFFF] shadow-[3px_3px_0px_#111111]"
                  : "border-[#111111] bg-[#ECEAE3] hover:bg-[#FFFFFF]"
              }`}
            >
              <div>
                {/* Step header */}
                <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-[#111111]">
                  <span
                    className={`font-black text-sm tracking-wider ${
                      isActive ? "text-[#1F4FE0]" : "text-[#6B6A64]"
                    }`}
                  >
                    {step.num}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs tracking-wider text-[#111111]">
                      {step.title}
                    </span>
                    <Icon size={14} className={isActive ? "text-[#1F4FE0]" : "text-[#6B6A64]"} />
                  </div>
                </div>

                <div className="text-xs font-bold text-[#111111] mb-2 leading-snug">
                  {step.action}
                </div>

                <p className="text-[11px] text-[#6B6A64] leading-relaxed mb-3">
                  {step.description}
                </p>
              </div>

              {/* Technical detail chip */}
              <div className="mt-3 pt-2 border-t border-[#111111]/20">
                <span className="text-[10px] text-[#111111] font-mono block bg-[#ECEAE3] p-1.5 border border-[#111111]">
                  <strong className="text-[#1F4FE0]">SYS:</strong> {step.systemDetail}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
