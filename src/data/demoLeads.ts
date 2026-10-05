export interface LeadResult {
  id: string;
  company: string;
  crmIcp: string;
  jevIcp: string;
  verdict: 'HOT' | 'WARM' | 'COLD';
  score: number;
  tokensIn: number;
  tokensOut: number;
  timeMs: number;
  status: 'SUCCESS' | 'ERROR';
  rationale: string;
  signals: string[];
}

export const SAMPLE_LEADS: LeadResult[] = [
  {
    id: "lead-1",
    company: "Cottesloe Dental",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.72,
    tokensIn: 654,
    tokensOut: 145,
    timeMs: 995,
    status: "SUCCESS",
    rationale: "Established multi-chair private dental practice with cosmetic & implant services. High ICP fit for clinical software outreach.",
    signals: ["Cosmetic dentistry provider", "5+ clinicians on staff", "Active patient portal", "High average contract value"]
  },
  {
    id: "lead-2",
    company: "Covent Garden Dental Spa",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.74,
    tokensIn: 656,
    tokensOut: 145,
    timeMs: 494,
    status: "SUCCESS",
    rationale: "High-end central London boutique dental clinic. Dedicated aesthetic surgery department matching tier-1 criteria.",
    signals: ["Boutique clinic", "Central metropolitan location", "Aesthetic treatment focus", "Private billing model"]
  },
  {
    id: "lead-3",
    company: "Carter & George Practice",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.64,
    tokensIn: 656,
    tokensOut: 145,
    timeMs: 1020,
    status: "SUCCESS",
    rationale: "Multidisciplinary physiotherapy & sports rehabilitation clinic founded by Olympian & medical director. Strong buyer persona match.",
    signals: ["Multi-location clinic", "Sports medicine & rehab", "Team of 12+ specialists", "Tech-enabled diagnostics"]
  },
  {
    id: "lead-4",
    company: "Control Centre Health",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.56,
    tokensIn: 654,
    tokensOut: 146,
    timeMs: 506,
    status: "SUCCESS",
    rationale: "Allied health facility with chiropractic, physio, and wellness services. Clear target for practice management upgrades.",
    signals: ["Integrated healthcare facility", "Online booking installed", "Direct patient billing", "Scalable practice setup"]
  },
  {
    id: "lead-5",
    company: "Arca Dental",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.69,
    tokensIn: 656,
    tokensOut: 145,
    timeMs: 549,
    status: "SUCCESS",
    rationale: "Comprehensive general and orthodontic dental center with in-house imaging tech. Verified decision maker contact.",
    signals: ["Orthodontics focus", "Digital X-Ray / 3D imaging", "Verified practice principal", "Rapid response pipeline"]
  },
  {
    id: "lead-6",
    company: "Synergy Dental Care",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.78,
    tokensIn: 654,
    tokensOut: 145,
    timeMs: 483,
    status: "SUCCESS",
    rationale: "Award-winning cosmetic & family dental group. Excellent reviews, verified owner-operator, high email deliverability index.",
    signals: ["Regional dental group", "Multiple clinic sites", "Verified lead email", "Active digital presence"]
  },
  {
    id: "lead-7",
    company: "CAP City Dental",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.73,
    tokensIn: 652,
    tokensOut: 145,
    timeMs: 474,
    status: "SUCCESS",
    rationale: "Financial district dental surgery catering to corporate clients. High billing rates, direct alignment with automated workflows.",
    signals: ["Corporate client focus", "High transaction volume", "Experienced clinical staff", "Strict privacy compliance"]
  },
  {
    id: "lead-8",
    company: "Movement Minded Physiotherapy",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "WARM",
    score: 2.41,
    tokensIn: 666,
    tokensOut: 146,
    timeMs: 537,
    status: "SUCCESS",
    rationale: "Specialized Pilates and musculoskeletal physio studio. Smaller staff footprint (3 therapists); fits secondary campaign sequence.",
    signals: ["Boutique physio practice", "Specialized Pilates equipment", "Moderate practitioner count", "Good prospect for nurture"]
  },
  {
    id: "lead-9",
    company: "Province Realty Group",
    crmIcp: "Real Estate",
    jevIcp: "REAL ESTATE",
    verdict: "WARM",
    score: 2.46,
    tokensIn: 659,
    tokensOut: 146,
    timeMs: 494,
    status: "SUCCESS",
    rationale: "Commercial & residential agency. ICP verified, but categorized warm due to seasonal listing cycle and shared inbox routing.",
    signals: ["Mid-market agency", "Property management wing", "Shared domain contact", "Route to secondary sequence"]
  },
  {
    id: "lead-10",
    company: "Activ Therapy",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "WARM",
    score: 2.45,
    tokensIn: 655,
    tokensOut: 146,
    timeMs: 464,
    status: "SUCCESS",
    rationale: "Network of allied health clinics. High clinic count but regional franchise model requires localized outreach angle.",
    signals: ["Franchise clinic model", "Multiple suburban branches", "Partial centralized buying", "Needs custom campaign copy"]
  },
  {
    id: "lead-11",
    company: "The Ortho Practice",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.72,
    tokensIn: 654,
    tokensOut: 146,
    timeMs: 464,
    status: "SUCCESS",
    rationale: "Specialist orthodontics centre. Dedicated treatment coordinators, high tech adoption, premium candidate for immediate outreach.",
    signals: ["Orthodontic specialist", "Treatment coordinator role", "Modern web presence", "Immediate follow-up target"]
  },
  {
    id: "lead-12",
    company: "Malvern Physiotherapy Clinic",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "WARM",
    score: 2.44,
    tokensIn: 658,
    tokensOut: 145,
    timeMs: 519,
    status: "SUCCESS",
    rationale: "Longstanding community practice. High clinical reputation, moderate tech stack adoption.",
    signals: ["Established local practice", "Clinical team of 5", "Secondary priority queue", "Standard nurture campaign"]
  },
  {
    id: "lead-13",
    company: "Face Clinic London",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.60,
    tokensIn: 654,
    tokensOut: 146,
    timeMs: 495,
    status: "SUCCESS",
    rationale: "Doctor-led aesthetic medicine clinic in Soho. High value per patient, strict email verification passed.",
    signals: ["Doctor-led clinic", "Central London", "High patient LTV", "Active email deliverability"]
  },
  {
    id: "lead-14",
    company: "First Bite Dental",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.87,
    tokensIn: 651,
    tokensOut: 145,
    timeMs: 465,
    status: "SUCCESS",
    rationale: "Top-scoring lead in batch. Modern facility, multiple practitioners, perfect match for clinical integration pitch.",
    signals: ["Highest fit score (2.87)", "Modern facility", "Strong domain reputation", "Direct principal email"]
  },
  {
    id: "lead-15",
    company: "BodyBalance Sports Clinic",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.58,
    tokensIn: 671,
    tokensOut: 146,
    timeMs: 593,
    status: "SUCCESS",
    rationale: "Sports injury and performance clinic with affiliated gym. Validated domain and clear decision maker role.",
    signals: ["Sports injury specialist", "Affiliated gym", "Verified decision maker", "Primary sequence target"]
  },
  {
    id: "lead-16",
    company: "Prahran Market Clinic",
    crmIcp: "Healthcare",
    jevIcp: "HEALTHCARE",
    verdict: "HOT",
    score: 2.56,
    tokensIn: 655,
    tokensOut: 145,
    timeMs: 470,
    status: "SUCCESS",
    rationale: "General medical practice with allied health focus. Strong clinical governance and clear outreach match.",
    signals: ["General practice + allied", "Urban location", "Accredited practice", "High email reliability"]
  }
];

export const CRM_SCREENSHOTS = [
  {
    id: "sheet2",
    title: "CRM Sheet — 10 Leads Classified",
    file: "/screenshots/crm-sheet2.png",
    caption: "The live CRM interface showing the JEV classification table with HOT/WARM verdicts, fit scores, and tokens."
  },
  {
    id: "sheet3",
    title: "CRM Sheet — Real-time Pipeline & Stored Decisions",
    file: "/screenshots/crm-sheet3.png",
    caption: "Pipeline breakdown panel with scored percentages and real-time JEV.DECISIONS stored directly to database."
  },
  {
    id: "status",
    title: "CRM Status Grid — State Progression",
    file: "/screenshots/crm-status.png",
    caption: "Full lifecycle grid demonstrating QUEUED, RUNNING, and COMPLETED states across runs."
  },
  {
    id: "m1",
    title: "Control Panel & Queued State",
    file: "/screenshots/m1_preview.png",
    caption: "Lead selection control panel with scope filter, lead count stepper, and QUEUED state notification."
  },
  {
    id: "m2",
    title: "Running State & Metric Gauges",
    file: "/screenshots/m2_preview.png",
    caption: "Background worker execution, live progress tracking, and latency counters."
  },
  {
    id: "m3",
    title: "Pipeline Verdict Breakdown",
    file: "/screenshots/m3_preview.png",
    caption: "Enriched leads with ICP classification, verdict tags, and fit scores stored inside the CRM."
  }
];
