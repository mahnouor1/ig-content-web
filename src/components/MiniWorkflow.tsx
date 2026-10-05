"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, Cpu, CheckSquare, Database } from "lucide-react";

interface NodeInfo {
  id: string;
  name: string;
  sub: string;
  desc: string;
  icon: React.ElementType;
}

const NODES: NodeInfo[] = [
  {
    id: "leads",
    name: "LEADS",
    sub: "CRM Inbound/Qualified",
    desc: "Raw prospects filtered by CRM rules. Leads enter with basic firmographics, verified emails, and qualification status.",
    icon: Layers
  },
  {
    id: "jev",
    name: "JEV",
    sub: "Classification Layer",
    desc: "Autonomous AI engine evaluating ICP alignment, extracting semantic signals, and computing numeric fit scores (1.00 - 3.00).",
    icon: Cpu
  },
  {
    id: "results",
    name: "RESULTS",
    sub: "Verdict + Usage Telemetry",
    desc: "Structured output: ICP classification, HOT/WARM/COLD verdict, fit score, token counts, latency, and USD compute cost.",
    icon: CheckSquare
  },
  {
    id: "crm",
    name: "CRM",
    sub: "Persisted to PostgreSQL",
    desc: "Enrichment data is saved directly to CRM records. Ready for campaign routing, sequence assignment, and personalized follow-ups.",
    icon: Database
  }
];

export function MiniWorkflow() {
  const [activeNode, setActiveNode] = useState<string>("jev");

  return (
    <div className="w-full">
      {/* Node Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-2 border-[#111111] bg-[#FFFFFF] p-2">
        {NODES.map((node, index) => {
          const isSelected = activeNode === node.id;
          const Icon = node.icon;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`text-left p-3 border-2 transition-all flex flex-col justify-between relative group ${
                isSelected
                  ? "border-[#111111] bg-[#FBF3B9]"
                  : "border-[#111111] bg-[#FFFFFF] hover:bg-[#ECEAE3]"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[11px] font-bold tracking-wider text-[#6B6A64]">
                  0{index + 1}
                </span>
                <Icon
                  size={15}
                  className={isSelected ? "text-[#1F4FE0]" : "text-[#111111]"}
                />
              </div>

              <div>
                <div className="flex items-center gap-1 font-bold text-sm tracking-wide text-[#111111]">
                  <span>{node.name}</span>
                  {index < NODES.length - 1 && (
                    <ArrowRight size={13} className="text-[#6B6A64] hidden md:inline ml-auto" />
                  )}
                </div>
                <div className="text-[11px] text-[#6B6A64] mt-0.5 truncate">
                  {node.sub}
                </div>
              </div>

              {isSelected && (
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#1F4FE0]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Node Detail Explanation */}
      <div className="border-2 border-t-0 border-[#111111] bg-[#FFFFFF] px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-[#111111] text-[#FFFFFF] font-bold text-[10px] tracking-widest uppercase">
            {activeNode}
          </span>
          <span className="text-[#111111] font-medium">
            {NODES.find((n) => n.id === activeNode)?.desc}
          </span>
        </div>
        <span className="text-[11px] text-[#6B6A64] shrink-0 font-mono">
          Click any stage to inspect
        </span>
      </div>
    </div>
  );
}
