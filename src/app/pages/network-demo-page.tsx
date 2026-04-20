import { useState, useCallback, useMemo } from "react";
import {
  FONT,
  FEAT,
  pageTitleStyle,
  cardTitleStyle,
  breadcrumbStyle,
  breadcrumbActiveStyle,
  buttonTextStyle,
  labelStyle,
  bodyStyle,
} from "../components/typography";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-cd8g93t1tj";

/* ─── Breadcrumb ─── */
function Breadcrumb() {
  return (
    <div className="flex items-center shrink-0">
      <p className="shrink-0" style={breadcrumbStyle}>Home</p>
      <ChevronRight />
      <p className="shrink-0" style={breadcrumbStyle}>Netscan</p>
      <ChevronRight />
      <p className="shrink-0" style={breadcrumbActiveStyle}>Large Network Demo</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="overflow-clip shrink-0 size-[14px] relative">
      <div className="absolute inset-[21.25%_33.75%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
          <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Combined Header ─── */
function CombinedHeader() {
  return (
    <div className="bg-card relative w-full">
      <div className="px-[16px] pt-[6px] pb-[2px]"><Breadcrumb /></div>
      <div className="flex items-center justify-between px-[16px] py-[8px] gap-[12px]">
        <div className="min-w-0 flex-1">
          <p className="text-foreground truncate" style={pageTitleStyle}>
            <span>Large Network Demo (</span><span>Zenith Conglomerate Ltd</span><span>)</span>
          </p>
        </div>
        <div className="bg-primary flex items-center justify-center px-[24px] rounded-[var(--radius)] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" style={{ height: "36px" }}>
          <p className="shrink-0 text-center text-primary-foreground whitespace-nowrap" style={buttonTextStyle}>Download Case Report</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
    </div>
  );
}

/* ─── Helpers ─── */
function toCompanySlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

type RiskLevel = "high" | "medium" | "low";

const RISK_COLORS: Record<RiskLevel, string> = {
  high: "var(--risk-high)",
  medium: "var(--risk-medium)",
  low: "var(--risk-low)",
};

const RISK_BG: Record<RiskLevel, string> = {
  high: "rgba(226,51,24,0.08)",
  medium: "rgba(244,172,62,0.08)",
  low: "rgba(76,175,71,0.08)",
};

interface NetworkEntity {
  id: string;
  name: string;
  shortName: string;
  risk: RiskLevel;
  category: string;
  summary: string;
  riskSignals: number;
  directors: string[];
  commonDirectors: string[];
}

/* ─── Primary Entity Directors ─── */
const PRIMARY_DIRECTORS = [
  "Anil M. Kapoor", "Sunita R. Deshmukh", "Vikram P. Jain",
  "Meera A. Iyer", "Karan S. Malhotra", "Nandini G. Rao", "Harish D. Patel",
];

/* ─── 20 Entities Data ─── */
const ENTITIES: NetworkEntity[] = [
  /* ── Inner ring (8 entities — mostly high risk, closer to hub) ── */
  {
    id: "omega-steel",
    name: "Omega Steel Works Ltd",
    shortName: "Omega Steel",
    risk: "high",
    category: "Holding Company",
    summary: "Circular fund routing via subsidiaries. SFIO probe for ₹42 Cr fund diversion across 3 entities.",
    riskSignals: 6,
    directors: ["Anil M. Kapoor", "Prakash T. Bhat", "Sunanda V. Nair"],
    commonDirectors: ["Anil M. Kapoor"],
  },
  {
    id: "zenith-realty",
    name: "Zenith Realty Solutions Pvt Ltd",
    shortName: "Zenith Realty",
    risk: "high",
    category: "Subsidiary",
    summary: "NCLT insolvency proceedings active. ₹12.8 Cr disputed GST claims pending adjudication.",
    riskSignals: 5,
    directors: ["Sunita R. Deshmukh", "Rajiv M. Choudhary", "Lalita P. Menon"],
    commonDirectors: ["Sunita R. Deshmukh"],
  },
  {
    id: "terra-infra",
    name: "Terra Infrastructure Pvt Ltd",
    shortName: "Terra Infra",
    risk: "high",
    category: "Linked by Director",
    summary: "Two active SFIO investigations. Board under regulatory scrutiny for governance failures.",
    riskSignals: 4,
    directors: ["Vikram P. Jain", "Gopal K. Sharma", "Asha R. Deshpande"],
    commonDirectors: ["Vikram P. Jain"],
  },
  {
    id: "vertex-cap",
    name: "Vertex Capital Partners Ltd",
    shortName: "Vertex Capital",
    risk: "high",
    category: "JV Partner",
    summary: "Related-party transactions worth ₹28 Cr without arm's length validation. Revenue down 35% YoY.",
    riskSignals: 4,
    directors: ["Raghav N. Hegde", "Pallavi S. Rane", "Deependra V. Gupta"],
    commonDirectors: [],
  },
  {
    id: "meridian-fin",
    name: "Meridian Finance Corp Ltd",
    shortName: "Meridian Finance",
    risk: "high",
    category: "Linked by Director",
    summary: "Criminal proceedings against MD. ₹8.6 Cr NPA reclassification dispute with RBI.",
    riskSignals: 5,
    directors: ["Meera A. Iyer", "Suresh B. Naidu", "Geeta L. Menon"],
    commonDirectors: ["Meera A. Iyer"],
  },
  {
    id: "skyline-prop",
    name: "Skyline Properties Pvt Ltd",
    shortName: "Skyline Prop.",
    risk: "medium",
    category: "Subsidiary",
    summary: "Delayed statutory filings for 2 years. ₹4.1 Cr GST evasion notice under investigation.",
    riskSignals: 3,
    directors: ["Karan S. Malhotra", "Arvind P. Tiwari", "Seema R. Kulkarni"],
    commonDirectors: ["Karan S. Malhotra"],
  },
  {
    id: "global-trade",
    name: "Global Trade Ventures Ltd",
    shortName: "Global Trade",
    risk: "high",
    category: "Linked by Director",
    summary: "Shell company suspected of layered transactions. ED investigation for ₹15 Cr money laundering.",
    riskSignals: 6,
    directors: ["Farhan J. Qureshi", "Nikhil V. Patwardhan", "Rekha M. Sharma"],
    commonDirectors: [],
  },
  {
    id: "bharat-cement",
    name: "Bharat Cement Industries Ltd",
    shortName: "Bharat Cement",
    risk: "medium",
    category: "Holding Company",
    summary: "Moderate financial stress. Debt-to-equity ratio at 3.2x. Environmental compliance notices pending.",
    riskSignals: 2,
    directors: ["Nandini G. Rao", "Shankar P. Joshi", "Kirti D. Amin"],
    commonDirectors: ["Nandini G. Rao"],
  },

  /* ── Outer ring (12 entities — mixed risk, farther from hub) ── */
  {
    id: "pinnacle-eng",
    name: "Pinnacle Engineering Ltd",
    shortName: "Pinnacle Eng.",
    risk: "medium",
    category: "Subsidiary",
    summary: "₹6.3 Cr outstanding receivables overdue 180+ days. Working capital stress indicators present.",
    riskSignals: 2,
    directors: ["Amit K. Shah", "Mahesh R. Patel", "Lata G. Verma"],
    commonDirectors: [],
  },
  {
    id: "sagar-ship",
    name: "Sagar Shipping Pvt Ltd",
    shortName: "Sagar Shipping",
    risk: "low",
    category: "Linked by Director",
    summary: "Clean compliance record. Minor delayed annual filings. No adverse observations from auditor.",
    riskSignals: 1,
    directors: ["Harish D. Patel", "Pradeep M. Sawant", "Kavitha N. Reddy"],
    commonDirectors: ["Harish D. Patel"],
  },
  {
    id: "nova-pharma",
    name: "Nova Pharmaceuticals Ltd",
    shortName: "Nova Pharma",
    risk: "low",
    category: "Linked by Director",
    summary: "Stable financials. FDA compliance up-to-date. No criminal or financial red flags identified.",
    riskSignals: 0,
    directors: ["Dr. Anand V. Kulkarni", "Smita R. Desai", "Yogesh B. Thakur"],
    commonDirectors: [],
  },
  {
    id: "durga-metals",
    name: "Durga Metals & Alloys Pvt Ltd",
    shortName: "Durga Metals",
    risk: "high",
    category: "Linked by Director",
    summary: "SFIO investigation for fraudulent allotment. Two directors with active criminal cases.",
    riskSignals: 4,
    directors: ["Rajan V. Mehta", "Dinesh K. Agrawal", "Poornima S. Rao"],
    commonDirectors: [],
  },
  {
    id: "ace-logistics",
    name: "Ace Logistics Solutions Ltd",
    shortName: "Ace Logistics",
    risk: "medium",
    category: "JV Partner",
    summary: "₹3.5 Cr GST dispute pending tribunal. Fleet financing under stress due to rate hikes.",
    riskSignals: 2,
    directors: ["Manish P. Singh", "Supriya D. Jha", "Tarun G. Bhatia"],
    commonDirectors: [],
  },
  {
    id: "orient-tex",
    name: "Orient Textiles Pvt Ltd",
    shortName: "Orient Textiles",
    risk: "low",
    category: "Subsidiary",
    summary: "Healthy order book. Minor statutory filing delays. No significant risk indicators found.",
    riskSignals: 1,
    directors: ["Lakshmi B. Menon", "Rajendra K. Pillai", "Chitra V. Hegde"],
    commonDirectors: [],
  },
  {
    id: "sapphire-it",
    name: "Sapphire IT Services Pvt Ltd",
    shortName: "Sapphire IT",
    risk: "low",
    category: "Linked by Director",
    summary: "Well-capitalized tech subsidiary. Clean audit history. Strong cash flow and minimal debt.",
    riskSignals: 0,
    directors: ["Ankur M. Bose", "Neelam S. Joshi", "Ravi T. Krishnan"],
    commonDirectors: [],
  },
  {
    id: "golden-agri",
    name: "Golden Agri Exports Ltd",
    shortName: "Golden Agri",
    risk: "medium",
    category: "Linked by Director",
    summary: "FEMA compliance notice for foreign remittance irregularities. ₹2.1 Cr penalty under appeal.",
    riskSignals: 2,
    directors: ["Prabhat A. Mishra", "Sunaina V. Chauhan", "Harish D. Patel"],
    commonDirectors: ["Harish D. Patel"],
  },
  {
    id: "stellar-energy",
    name: "Stellar Energy Pvt Ltd",
    shortName: "Stellar Energy",
    risk: "medium",
    category: "JV Partner",
    summary: "Environmental clearance revoked for 2 projects. ₹5 Cr penalty imposed by CPCB.",
    riskSignals: 3,
    directors: ["Vivek J. Rawat", "Shalini K. Banerjee", "Omprakash D. Verma"],
    commonDirectors: [],
  },
  {
    id: "prism-chem",
    name: "Prism Chemicals Pvt Ltd",
    shortName: "Prism Chemicals",
    risk: "high",
    category: "Linked by Director",
    summary: "Hazardous waste violations. MoEF show-cause notice pending. Director under PMLA investigation.",
    riskSignals: 5,
    directors: ["Jagdish R. Naik", "Ashwin P. Dalal", "Neeta V. Shah"],
    commonDirectors: [],
  },
  {
    id: "harmony-con",
    name: "Harmony Construction Co Ltd",
    shortName: "Harmony Const.",
    risk: "low",
    category: "Subsidiary",
    summary: "Stable project pipeline. All statutory filings current. Good financial health indicators.",
    riskSignals: 0,
    directors: ["Rohan K. Kapoor", "Divya S. Pillai", "Suresh M. Nambiar"],
    commonDirectors: [],
  },
  {
    id: "crest-auto",
    name: "Crest Automotive Parts Ltd",
    shortName: "Crest Auto",
    risk: "low",
    category: "Linked by Director",
    summary: "Healthy balance sheet. Minor quality recall in Q2. No legal proceedings or compliance issues.",
    riskSignals: 1,
    directors: ["Ajay N. Bhatt", "Leena R. Iyer", "Prashant T. Gaikwad"],
    commonDirectors: [],
  },
];

/* ─── Canvas & Positioning ─── */
const CANVAS_W = 1200;
const CANVAS_H = 800;
const CENTER_X = CANVAS_W / 2;
const CENTER_Y = CANVAS_H / 2;

const INNER_COUNT = 8;
const OUTER_COUNT = 12;

/* Position nodes in two concentric rings */
function computePositions(): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];
  const INNER_RX = 260;
  const INNER_RY = 200;
  const OUTER_RX = 460;
  const OUTER_RY = 330;

  /* Inner ring — 8 nodes */
  for (let i = 0; i < INNER_COUNT; i++) {
    const angle = (2 * Math.PI * i) / INNER_COUNT - Math.PI / 2;
    positions.push({
      x: CENTER_X + INNER_RX * Math.cos(angle),
      y: CENTER_Y + INNER_RY * Math.sin(angle),
    });
  }

  /* Outer ring — 12 nodes */
  for (let i = 0; i < OUTER_COUNT; i++) {
    const angle = (2 * Math.PI * i) / OUTER_COUNT - Math.PI / 2 + Math.PI / OUTER_COUNT;
    positions.push({
      x: CENTER_X + OUTER_RX * Math.cos(angle),
      y: CENTER_Y + OUTER_RY * Math.sin(angle),
    });
  }

  return positions;
}

const NODE_POSITIONS = computePositions();
const CARD_W = 140;

/* ─── AI Summary Card ─── */
function AISummaryCard() {
  const highCount = ENTITIES.filter((e) => e.risk === "high").length;
  const medCount = ENTITIES.filter((e) => e.risk === "medium").length;
  const lowCount = ENTITIES.filter((e) => e.risk === "low").length;
  const commonCount = ENTITIES.filter((e) => e.commonDirectors.length > 0).length;

  return (
    <div className="relative rounded-[var(--radius)] w-full" style={{ border: "1px solid var(--risk-high)" }}>
      <div className="overflow-clip rounded-[inherit] w-full">
        <div className="flex items-center gap-[4px] px-[12px] py-[6px] rounded-br-[20px] shrink-0 w-fit" style={{ backgroundColor: "var(--risk-high)" }}>
          <p className="text-primary-foreground whitespace-nowrap" style={{ fontFeatureSettings: "'case'", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, letterSpacing: "0.056px", fontFamily: FONT }}>
            High Risk Network
          </p>
        </div>
        <div className="mx-[12px] my-[8px] flex items-center gap-[8px] px-[16px] py-[8px] rounded-[var(--radius)]" style={{ backgroundColor: "var(--destructive-light)" }}>
          <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, letterSpacing: "0.056px", fontFamily: FONT, color: "var(--risk-high)" }}>
            <span style={{ fontWeight: 700 }}>Zenith Conglomerate Ltd</span> — Complex network with {highCount} high-risk entities across multiple sectors
          </p>
        </div>
        <div className="px-[12px] py-[4px] pb-[12px]">
          <ul className="flex flex-col gap-[6px] list-disc pl-[16px]" style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.5, letterSpacing: "0.056px", fontFamily: FONT, color: "var(--muted-foreground)" }}>
            <li><span style={{ color: "var(--foreground)" }}>{highCount} high-risk, {medCount} medium-risk, {lowCount} low-risk</span> entities identified in the network</li>
            <li><span style={{ color: "var(--foreground)" }}>SFIO investigations</span> across Omega Steel, Terra Infra & Durga Metals</li>
            <li><span style={{ color: "var(--foreground)" }}>{commonCount} entities share common directors</span> with the primary entity</li>
            <li><span style={{ color: "var(--foreground)" }}>₹42 Cr+ fund diversion</span> suspected through layered transactions</li>
            <li><span style={{ color: "var(--foreground)" }}>ED, PMLA & environmental</span> probes active across linked entities</li>
          </ul>
        </div>
      </div>
      <div className="absolute flex items-center gap-[4px] px-[16px] bg-card" style={{ top: "-10px", left: "50%", transform: "translateX(-50%)" }}>
        <div className="shrink-0 size-[20px] relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g>
              <path clipRule="evenodd" d={svgPaths.p3a548380} fill="url(#ai_grad1d)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pf4b9200} fill="url(#ai_grad2d)" fillRule="evenodd" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="ai_grad1d" x1="2.368" x2="17.632" y1="9.582" y2="9.582">
                <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="ai_grad2d" x1="2.368" x2="17.632" y1="9.582" y2="9.582">
                <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="whitespace-nowrap" style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, letterSpacing: "0.056px", fontFamily: FONT, background: "linear-gradient(90deg, #1C43B9, #041C66)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          AI Summary
        </p>
      </div>
    </div>
  );
}

/* ─── Hub-Spoke Network Graph (20 entities) ─── */
function EntityNetworkGraph() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  const handleClick = useCallback((name: string) => {
    navigate(`/company/${toCompanySlug(name)}`);
  }, [navigate]);

  const connections = useMemo(() => ENTITIES.map((e, i) => ({
    entity: e,
    pos: NODE_POSITIONS[i],
  })), []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.max(0.4, Math.min(2, z - e.deltaY * 0.001)));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0 && !hoveredId) {
      setIsPanning(true);
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  }, [hoveredId, pan]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isPanning) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
    }
  }, [isPanning, panStart]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  const smText: React.CSSProperties = { fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)" as any, lineHeight: 1.4, letterSpacing: "0.048px", fontFamily: FONT };

  return (
    <div className="bg-card rounded-[var(--radius)] w-full relative overflow-hidden" style={{ border: "1px solid var(--border)" }}>
      <style>{`
        @keyframes tooltipIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between p-[12px] relative" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex gap-[4px] items-center">
          <div className="overflow-clip shrink-0 size-[20px] relative">
            <div className="absolute inset-[8.32%_8.33%_8.33%_8.33%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6701">
                <path d={svgPaths.p20e37500} fill="var(--fill-0, #131A25)" />
              </svg>
            </div>
          </div>
          <p className="text-foreground" style={cardTitleStyle}>Entity Network</p>
          <span className="flex items-center justify-center px-[6px] py-[2px] rounded-[4px] ml-[4px]" style={{ backgroundColor: "rgba(23,102,214,0.08)" }}>
            <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: FONT, color: "var(--primary)" }}>
              20 entities
            </p>
          </span>
        </div>

        {/* Legend + zoom controls */}
        <div className="flex items-center gap-[16px]">
          {(["high", "medium", "low"] as RiskLevel[]).map((level) => (
            <div key={level} className="flex items-center gap-[4px]">
              <div className="rounded-full" style={{ width: 8, height: 8, backgroundColor: RISK_COLORS[level] }} />
              <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: FONT, color: "var(--muted-foreground)" }}>
                {level === "high" ? "High" : level === "medium" ? "Medium" : "Low"}
              </p>
            </div>
          ))}
          <div className="flex items-center gap-[4px] ml-[8px]" style={{ borderLeft: "1px solid var(--border)", paddingLeft: 12 }}>
            <button
              className="flex items-center justify-center rounded-[var(--radius)] cursor-pointer"
              style={{ width: 28, height: 28, border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
              onClick={() => setZoom((z) => Math.max(0.4, z - 0.15))}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="2" y1="6" x2="10" y2="6" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
            <p style={{ ...smText, color: "var(--muted-foreground)", width: 36, textAlign: "center" }}>{Math.round(zoom * 100)}%</p>
            <button
              className="flex items-center justify-center rounded-[var(--radius)] cursor-pointer"
              style={{ width: 28, height: 28, border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
              onClick={() => setZoom((z) => Math.min(2, z + 0.15))}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="2" y1="6" x2="10" y2="6" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" /><line x1="6" y1="2" x2="6" y2="10" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
            <button
              className="flex items-center justify-center rounded-[var(--radius)] cursor-pointer ml-[4px]"
              style={{ width: 28, height: 28, border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
              onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4.5V2H4.5" stroke="var(--foreground)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7.5V10H7.5" stroke="var(--foreground)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 4.5V2H7.5" stroke="var(--foreground)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 7.5V10H4.5" stroke="var(--foreground)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Graph area — pannable and zoomable */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "var(--neutral-50)", height: 680, cursor: isPanning ? "grabbing" : "grab" }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: isPanning ? "none" : "transform 0.2s ease-out",
          }}
        >
          {/* SVG Layer — connection lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={CANVAS_W}
            height={CANVAS_H}
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          >
            <defs>
              {connections.map(({ entity, pos }) => {
                const color = entity.risk === "high" ? "#E23318" : entity.risk === "medium" ? "#F4AC3E" : "#4CAF47";
                return (
                  <linearGradient key={`grad-${entity.id}`} id={`dline-grad-${entity.id}`} x1={CENTER_X} y1={CENTER_Y} x2={pos.x} y2={pos.y} gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={color} stopOpacity="0.1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.5" />
                  </linearGradient>
                );
              })}
            </defs>

            {/* Ring indicators */}
            <ellipse cx={CENTER_X} cy={CENTER_Y} rx={260} ry={200} fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" opacity={0.5} />
            <ellipse cx={CENTER_X} cy={CENTER_Y} rx={460} ry={330} fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" opacity={0.3} />

            {/* Connection lines */}
            {connections.map(({ entity, pos }) => {
              const isHovered = hoveredId === entity.id;
              const color = entity.risk === "high" ? "#E23318" : entity.risk === "medium" ? "#F4AC3E" : "#4CAF47";
              const isInner = ENTITIES.indexOf(entity) < INNER_COUNT;
              return (
                <g key={`line-${entity.id}`}>
                  <line
                    x1={CENTER_X} y1={CENTER_Y} x2={pos.x} y2={pos.y}
                    stroke={isHovered ? color : `url(#dline-grad-${entity.id})`}
                    strokeWidth={isHovered ? 2 : isInner ? 1.2 : 0.8}
                    strokeDasharray={isHovered ? "none" : isInner ? "6 4" : "3 4"}
                    style={{ transition: "stroke-width 0.25s ease, stroke 0.25s ease" }}
                  />
                  {/* Category label on line — only on inner ring for clarity */}
                  {isInner && (() => {
                    const t = 0.45;
                    const labelX = CENTER_X + (pos.x - CENTER_X) * t;
                    const labelY = CENTER_Y + (pos.y - CENTER_Y) * t;
                    const labelText = entity.category;
                    const labelWidth = Math.max(70, labelText.length * 5.5 + 14);
                    return (
                      <g transform={`translate(${labelX}, ${labelY})`}>
                        <rect x={-labelWidth / 2} y={-8} width={labelWidth} height={16} rx={3} fill="var(--card)" stroke="var(--border)" strokeWidth="0.5" />
                        <text
                          textAnchor="middle" dominantBaseline="central"
                          style={{ fontSize: 8, fontWeight: 500, fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)", fill: "var(--muted-foreground)", letterSpacing: "0.04px" }}
                        >
                          {entity.category}
                        </text>
                      </g>
                    );
                  })()}
                  {/* Endpoint dot */}
                  <circle cx={pos.x} cy={pos.y} r={isHovered ? 4 : 3} fill={color} style={{ transition: "r 0.2s ease" }} />
                  {isHovered && (
                    <circle cx={pos.x} cy={pos.y} r={5} fill="none" stroke={color} strokeWidth={1.5} opacity={0.3}>
                      <animate attributeName="r" from="5" to="14" dur="1s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.4" to="0" dur="1s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Center hub */}
            <circle cx={CENTER_X} cy={CENTER_Y} r={6} fill="#E23318" />
            <circle cx={CENTER_X} cy={CENTER_Y} r={12} fill="none" stroke="#E23318" strokeWidth={1} opacity={0.2} />
          </svg>

          {/* Primary Entity — center */}
          <div
            className="absolute cursor-pointer"
            style={{
              left: `${(CENTER_X / CANVAS_W) * 100}%`,
              top: `${(CENTER_Y / CANVAS_H) * 100}%`,
              transform: "translate(-50%, -50%)",
              zIndex: hoveredId === "primary" ? 40 : 20,
            }}
            onClick={() => handleClick("Zenith Conglomerate Ltd")}
            onMouseEnter={() => setHoveredId("primary")}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="bg-card flex flex-col gap-[4px] px-[12px] py-[8px] rounded-[var(--radius)] relative" style={{ width: 170, border: "2px solid var(--risk-high)", boxShadow: "0px 4px 16px rgba(226,51,24,0.12)" }}>
              <div className="flex flex-col gap-[2px]">
                <p style={{ fontFeatureSettings: FEAT, fontSize: "8px", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.5px", fontFamily: FONT, color: "var(--muted-foreground)", textTransform: "uppercase" }}>
                  Primary Entity
                </p>
                <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: FONT, color: "var(--foreground)" }}>
                  Zenith Conglomerate Ltd
                </p>
              </div>
              <div className="flex items-center gap-[4px] px-[6px] py-[2px] rounded-[10px] w-fit" style={{ backgroundColor: "var(--risk-high)" }}>
                <p className="text-primary-foreground whitespace-nowrap" style={{ fontFeatureSettings: "'case'", fontSize: "9px", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT }}>
                  High Risk
                </p>
              </div>
            </div>
          </div>

          {/* Entity Nodes */}
          {connections.map(({ entity, pos }, idx) => {
            const isHovered = hoveredId === entity.id;
            const riskColor = RISK_COLORS[entity.risk];
            const riskBg = RISK_BG[entity.risk];
            const riskLabel = entity.risk === "high" ? "High" : entity.risk === "medium" ? "Med" : "Low";
            const isInner = idx < INNER_COUNT;

            return (
              <div
                key={entity.id}
                className="absolute"
                style={{
                  left: `${(pos.x / CANVAS_W) * 100}%`,
                  top: `${(pos.y / CANVAS_H) * 100}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isHovered ? 40 : 10,
                }}
                onMouseEnter={() => setHoveredId(entity.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="bg-card flex flex-col gap-[3px] px-[10px] py-[6px] rounded-[var(--radius)] cursor-pointer"
                  onClick={() => handleClick(entity.name)}
                  style={{
                    width: isInner ? CARD_W : 126,
                    borderTop: isHovered ? `2px solid ${riskColor}` : `1px solid var(--border)`,
                    borderRight: isHovered ? `2px solid ${riskColor}` : `1px solid var(--border)`,
                    borderBottom: isHovered ? `2px solid ${riskColor}` : `1px solid var(--border)`,
                    borderLeft: `3px solid ${riskColor}`,
                    boxShadow: isHovered ? "0px 4px 16px rgba(19,26,37,0.12)" : "0px 1px 4px rgba(19,26,37,0.04)",
                    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <div className="flex items-center justify-between w-full gap-[2px]">
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap flex-1 min-w-0" style={{ fontFeatureSettings: "'case'", fontSize: isInner ? "var(--text-sm)" : "10px", fontWeight: 600, lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT, color: "var(--foreground)" }}>
                      {entity.shortName}
                    </p>
                    <div
                      className="shrink-0 relative"
                      style={{
                        width: 12, height: 12,
                        transform: isHovered ? "rotate(-45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    >
                      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                        <g transform="translate(2.73, 2.73)">
                          <path clipRule="evenodd" d={svgPaths.p8260330} fill="var(--muted-foreground)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p3c197400} fill="var(--muted-foreground)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <div className="flex items-center gap-[2px] px-[4px] py-[1px] rounded-[6px]" style={{ backgroundColor: riskBg }}>
                      <div className="rounded-full" style={{ width: 4, height: 4, backgroundColor: riskColor }} />
                      <p style={{ fontFeatureSettings: FEAT, fontSize: "9px", fontWeight: 600, lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT, color: riskColor }}>
                        {riskLabel}
                      </p>
                    </div>
                    {entity.commonDirectors.length > 0 && (
                      <div className="flex items-center gap-[2px]">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <circle cx="5" cy="5" r="4" stroke="var(--primary)" strokeWidth="1" fill="rgba(23,102,214,0.08)" />
                          <circle cx="5" cy="3.5" r="1.5" fill="var(--primary)" opacity="0.6" />
                          <path d="M2.5 8C2.5 6.5 3.5 5.5 5 5.5C6.5 5.5 7.5 6.5 7.5 8" stroke="var(--primary)" strokeWidth="0.8" fill="none" opacity="0.6" />
                        </svg>
                        <p style={{ fontFeatureSettings: FEAT, fontSize: "9px", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT, color: "var(--primary)" }}>
                          {entity.commonDirectors.length}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tooltip layer */}
        {hoveredId && (() => {
          const PRIMARY_ENTITY: NetworkEntity = {
            id: "primary",
            name: "Zenith Conglomerate Ltd",
            shortName: "Zenith Conglomerate",
            risk: "high",
            category: "Primary Entity",
            summary: "Complex network with SFIO investigations, NCLT proceedings, and ED probes across linked entities. ₹42 Cr+ fund diversion suspected. 7 directors on the board with cross-entity exposure.",
            riskSignals: 12,
            directors: PRIMARY_DIRECTORS,
            commonDirectors: [],
          };

          const isPrimary = hoveredId === "primary";
          const hoveredEntity = isPrimary ? PRIMARY_ENTITY : ENTITIES.find((e) => e.id === hoveredId);
          if (!hoveredEntity) return null;

          const graphAreaTop = 0;
          let nodeX: number;
          let nodeY: number;

          if (isPrimary) {
            nodeX = CENTER_X;
            nodeY = CENTER_Y;
          } else {
            const idx = ENTITIES.findIndex((e) => e.id === hoveredId);
            const pos = NODE_POSITIONS[idx];
            nodeX = pos.x;
            nodeY = pos.y;
          }

          /* Position tooltip relative to viewport, not zoomed canvas */
          const isRightSide = nodeX > CENTER_X;
          const isTopHalf = nodeY < CENTER_Y;

          const tooltipStyle: React.CSSProperties = {
            position: "fixed",
            width: 240,
            boxShadow: "var(--elevation-sm)",
            animation: "tooltipIn 0.18s ease-out",
            border: "1px solid var(--border)",
            zIndex: 100,
            pointerEvents: "none",
          };

          /* Compute approximate screen position from canvas coords + zoom + pan */
          /* We need the graph container's bounding rect for this — use a simpler approach with absolute positioning inside the pannable area */
          const tooltipInnerStyle: React.CSSProperties = {
            position: "absolute",
            width: 240,
            boxShadow: "var(--elevation-sm)",
            animation: "tooltipIn 0.18s ease-out",
            border: "1px solid var(--border)",
            zIndex: 100,
            pointerEvents: "none",
          };

          const cardOffset = isPrimary ? 90 : (ENTITIES.indexOf(hoveredEntity) < INNER_COUNT ? 78 : 70);

          if (isRightSide) {
            tooltipInnerStyle.left = nodeX - 240 - cardOffset;
          } else {
            tooltipInnerStyle.left = nodeX + cardOffset;
          }

          if (isTopHalf) {
            tooltipInnerStyle.top = nodeY - 20;
          } else {
            tooltipInnerStyle.top = nodeY - 180;
          }

          const directorCount = hoveredEntity.commonDirectors.length;

          return (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: CANVAS_W,
                height: CANVAS_H,
                transform: `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: "center center",
                pointerEvents: "none",
                zIndex: 60,
              }}
            >
              <div
                className="bg-card flex flex-col gap-[8px] p-[10px] rounded-[var(--radius)]"
                style={tooltipInnerStyle}
              >
                {/* AI Summary header */}
                <div className="flex items-center gap-[4px]">
                  <div className="shrink-0 size-[12px] relative">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <path clipRule="evenodd" d={svgPaths.p29f9e300} fill="url(#tt_g1d)" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p39aa6b00} fill="url(#tt_g2d)" fillRule="evenodd" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="tt_g1d" x1="1.9" x2="14.1" y1="7.7" y2="7.7">
                          <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="tt_g2d" x1="1.9" x2="14.1" y1="7.7" y2="7.7">
                          <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p style={{ ...smText, fontWeight: 600, background: "linear-gradient(90deg, #1C43B9, #041C66)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    AI Summary
                  </p>
                </div>

                {/* Summary text */}
                <p style={{ ...smText, color: "var(--muted-foreground)", fontSize: "11px" }}>
                  {hoveredEntity.summary}
                </p>

                {/* Directors section */}
                {hoveredEntity.directors.length > 0 && (
                  <>
                    <div className="w-full h-px" style={{ backgroundColor: "var(--border)" }} />
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[3px]">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <circle cx="4.5" cy="3.75" r="1.875" stroke="var(--foreground)" strokeWidth="0.9" fill="none" />
                            <path d="M1.125 10.5C1.125 8.625 2.625 7.125 4.5 7.125C6.375 7.125 7.875 8.625 7.875 10.5" stroke="var(--foreground)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
                            <circle cx="8.25" cy="4.125" r="1.5" stroke="var(--foreground)" strokeWidth="0.9" fill="none" />
                            <path d="M7.875 7.35C8.85 7.35 9.75 8.1 10.125 9.375" stroke="var(--foreground)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
                          </svg>
                          <p style={{ ...smText, fontWeight: 600, color: "var(--foreground)", fontSize: "11px" }}>
                            Directors ({hoveredEntity.directors.length})
                          </p>
                        </div>
                        {directorCount > 0 && (
                          <span className="inline-flex items-center px-[5px] py-[1px] rounded-[3px]" style={{ backgroundColor: "rgba(23,102,214,0.08)" }}>
                            <p style={{ fontFeatureSettings: FEAT, fontSize: "9px", fontWeight: 600, lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT, color: "var(--primary)" }}>
                              {directorCount} common
                            </p>
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        {hoveredEntity.directors.map((d) => {
                          const isCommon = hoveredEntity.commonDirectors.includes(d);
                          return (
                            <div
                              key={d}
                              className="flex items-center gap-[5px] px-[6px] py-[2px] rounded-[3px]"
                              style={{ backgroundColor: isCommon ? "rgba(23,102,214,0.08)" : "transparent" }}
                            >
                              <div className="shrink-0 rounded-full flex items-center justify-center" style={{ width: 14, height: 14, backgroundColor: isCommon ? "var(--primary)" : "var(--muted-foreground)", opacity: isCommon ? 1 : 0.3 }}>
                                <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                                  <circle cx="4" cy="2.8" r="1.4" fill="white" />
                                  <path d="M1.5 7C1.5 5.6 2.6 4.5 4 4.5C5.4 4.5 6.5 5.6 6.5 7" stroke="white" strokeWidth="0.8" fill="none" />
                                </svg>
                              </div>
                              <p style={{ ...smText, fontSize: "11px", color: isCommon ? "var(--primary)" : "var(--foreground)", fontWeight: isCommon ? 600 : 400 }}>
                                {d}
                              </p>
                              {isCommon && (
                                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="shrink-0 ml-auto">
                                  <path d="M2 5.5L4 7.5L8 3" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Bottom stats bar */}
      <div className="flex items-center justify-between px-[12px] py-[8px]" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="flex items-center gap-[16px]">
          {(["high", "medium", "low"] as RiskLevel[]).map((level) => {
            const count = ENTITIES.filter((e) => e.risk === level).length;
            const color = RISK_COLORS[level];
            return (
              <div key={level} className="flex items-center gap-[6px]">
                <div className="flex items-center gap-[3px] px-[6px] py-[2px] rounded-[6px]" style={{ backgroundColor: RISK_BG[level] }}>
                  <div className="rounded-full" style={{ width: 6, height: 6, backgroundColor: color }} />
                  <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: 600, lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: FONT, color: color }}>
                    {count}
                  </p>
                </div>
                <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: FONT, color: "var(--muted-foreground)" }}>
                  {level === "high" ? "High Risk" : level === "medium" ? "Medium Risk" : "Low Risk"}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-[6px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="4.5" cy="3.75" r="1.875" stroke="var(--primary)" strokeWidth="0.9" fill="none" />
            <path d="M1.125 10.5C1.125 8.625 2.625 7.125 4.5 7.125C6.375 7.125 7.875 8.625 7.875 10.5" stroke="var(--primary)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
            <circle cx="8.25" cy="4.125" r="1.5" stroke="var(--primary)" strokeWidth="0.9" fill="none" />
            <path d="M7.875 7.35C8.85 7.35 9.75 8.1 10.125 9.375" stroke="var(--primary)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
          </svg>
          <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: FONT, color: "var(--primary)" }}>
            {ENTITIES.filter((e) => e.commonDirectors.length > 0).length} entities with common directors
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function NetworkDemoPage() {
  return (
    <div className="bg-card flex flex-col w-full min-h-full" style={{ fontFamily: FONT }}>
      <CombinedHeader />
      <div className="flex flex-col gap-[16px] px-[16px] py-[16px]">
        <div className="mt-[14px]">
          <AISummaryCard />
        </div>
        <EntityNetworkGraph />
      </div>
    </div>
  );
}
