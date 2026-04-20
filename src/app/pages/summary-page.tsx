import { useState, useCallback, useMemo } from "react";
import {
  FONT,
  FEAT,
  pageTitleStyle,
  cardTitleStyle,
  breadcrumbStyle,
  breadcrumbActiveStyle,
  buttonTextStyle,
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
      <p className="shrink-0" style={breadcrumbActiveStyle}>Case overview</p>
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
            <span>Case Overview (</span><span>Nexagen Infra Private Limited</span><span>)</span>
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

/* ─── AI Summary Card ─── */
function AISummaryCard() {
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
            <span style={{ fontWeight: 700 }}>Nexagen Infra Pvt Ltd</span> — criminal proceedings, SFIO investigation, severe financial distress
          </p>
        </div>
        <div className="px-[12px] py-[4px]">
          <ul className="flex flex-col gap-[6px] list-disc pl-[16px]" style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.5, letterSpacing: "0.056px", fontFamily: FONT, color: "var(--muted-foreground)" }}>
            <li><span style={{ color: "var(--foreground)" }}>NCLT insolvency</span> proceedings — Nexagen Infra & Nexagen Realty Solutions</li>
            <li><span style={{ color: "var(--foreground)" }}>₹14.2 Cr GST evasion</span> notices pending across network</li>
            <li><span style={{ color: "var(--foreground)" }}>SFIO investigation</span> — Meridian Holdings & Vantage Steels (fund diversion)</li>
            <li><span style={{ color: "var(--foreground)" }}>5 common directors</span> identified across linked entities in the network</li>
            <li><span style={{ color: "var(--foreground)" }}>40% YoY revenue decline</span> with adverse audit qualifications</li>
          </ul>
        </div>
      </div>
      <div className="absolute flex items-center gap-[4px] px-[16px] bg-card" style={{ top: "-10px", left: "50%", transform: "translateX(-50%)" }}>
        <div className="shrink-0 size-[20px] relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g>
              <path clipRule="evenodd" d={svgPaths.p3a548380} fill="url(#ai_grad1)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pf4b9200} fill="url(#ai_grad2)" fillRule="evenodd" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="ai_grad1" x1="2.368" x2="17.632" y1="9.582" y2="9.582">
                <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="ai_grad2" x1="2.368" x2="17.632" y1="9.582" y2="9.582">
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

/* ─── Director Risk Data ─── */
interface DirectorRiskInfo {
  risk: RiskLevel;
  flags: string[];
}

const DIRECTOR_RISK: Record<string, DirectorRiskInfo> = {
  "Rajesh K. Mehta": { risk: "high", flags: ["Criminal proceedings", "SFIO probe"] },
  "Sunil D. Agrawal": { risk: "high", flags: ["Criminal cases", "Fund diversion"] },
  "Priya S. Nair": { risk: "medium", flags: ["Delayed filings"] },
};

/* ─── 6 Entities Data ─── */
const ENTITIES: NetworkEntity[] = [
  {
    id: "meridian",
    name: "Meridian Holdings Ltd",
    shortName: "Meridian Holdings",
    risk: "high",
    category: "Holding Company",
    summary: "Shell company with circular fund routing. SFIO probe ongoing for fund diversion via layered transactions.",
    riskSignals: 5,
    directors: ["Rajesh K. Mehta", "Vikram T. Joshi", "Anita R. Desai"],
    commonDirectors: ["Rajesh K. Mehta"],
  },
  {
    id: "nexagen-realty",
    name: "Nexagen Realty Solutions Pvt Ltd",
    shortName: "Nexagen Realty",
    risk: "high",
    category: "Subsidiary",
    summary: "NCLT insolvency admitted. ₹8.4 Cr in disputed GST claims. Adverse audit qualification.",
    riskSignals: 4,
    directors: ["Priya S. Nair", "Deepak M. Sharma", "Kavita P. Rao"],
    commonDirectors: ["Priya S. Nair"],
  },
  {
    id: "vantage",
    name: "Vantage Steels & Alloys Ltd",
    shortName: "Vantage Steels",
    risk: "high",
    category: "Linked by Director",
    summary: "SFIO investigation for fund diversion. Two directors with active criminal proceedings.",
    riskSignals: 3,
    directors: ["Sunil D. Agrawal", "Manoj V. Pillai", "Harish G. Shetty"],
    commonDirectors: ["Sunil D. Agrawal"],
  },
  {
    id: "apex",
    name: "Apex Capital Partners Pvt Ltd",
    shortName: "Apex Capital",
    risk: "high",
    category: "JV Partner",
    summary: "Significant related-party transactions with no arm's length validation. Revenue dropped 40% YoY.",
    riskSignals: 3,
    directors: ["Ramesh B. Kulkarni", "Neha S. Gupta", "Farhan J. Qureshi"],
    commonDirectors: [],
  },
  {
    id: "primecore",
    name: "Primecore Constructions Ltd",
    shortName: "Primecore Const.",
    risk: "medium",
    category: "Subsidiary",
    summary: "Delayed statutory filings. ₹3.2 Cr GST evasion notice pending. Moderate financial stress.",
    riskSignals: 2,
    directors: ["Amit V. Shah", "Arun K. Patel", "Sanjay R. Bhat"],
    commonDirectors: ["Amit V. Shah"],
  },
  {
    id: "bharat",
    name: "Bharat Infracon Pvt Ltd",
    shortName: "Bharat Infracon",
    risk: "low",
    category: "Linked by Director",
    summary: "Clean compliance record. Minor delayed filings. No criminal or financial red flags identified.",
    riskSignals: 1,
    directors: ["Geeta R. Krishnan", "Pooja L. Iyer", "Ashok N. Reddy"],
    commonDirectors: ["Geeta R. Krishnan"],
  },
];

/* ─── Node positions — hub at center, 6 nodes in a ring ─── */
/* Coordinates are percentages of the canvas (viewBox 0 0 960 520) */
const CANVAS_W = 960;
const CANVAS_H = 520;
const CENTER_X = CANVAS_W / 2;
const CENTER_Y = CANVAS_H / 2;

/* 6 positions: 3 above, 3 below — inset enough so cards never clip */
const NODE_POSITIONS: { x: number; y: number }[] = [
  /* Top-left */     { x: 150, y: 100 },
  /* Top-center */   { x: 480, y: 70 },
  /* Top-right */    { x: 810, y: 100 },
  /* Bottom-right */ { x: 810, y: 420 },
  /* Bottom-center */{ x: 480, y: 450 },
  /* Bottom-left */  { x: 150, y: 420 },
];

/* Card dimensions for offset calculations */
const CARD_W = 170;
const CARD_H = 72;

/* ─── Hub-Spoke Network Graph ─── */
function EntityNetworkGraph() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleClick = useCallback((name: string) => {
    navigate(`/company/${toCompanySlug(name)}`);
  }, [navigate]);

  /* Connection lines from center to each node */
  const connections = useMemo(() => ENTITIES.map((e, i) => ({
    entity: e,
    pos: NODE_POSITIONS[i],
  })), []);

  return (
    <div className="bg-card rounded-[var(--radius)] w-full relative overflow-visible">
      <style>{`
        @keyframes tooltipIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius)]" style={{ border: "1px solid var(--border)" }} />

      {/* Header */}
      <div className="flex items-center justify-between p-[12px] relative">
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{ backgroundColor: "var(--border)" }} />
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
              6 entities
            </p>
          </span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-[16px]">
          {(["high", "medium", "low"] as RiskLevel[]).map((level) => (
            <div key={level} className="flex items-center gap-[4px]">
              <div className="rounded-full" style={{ width: 8, height: 8, backgroundColor: RISK_COLORS[level] }} />
              <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: FONT, color: "var(--muted-foreground)" }}>
                {level === "high" ? "High Risk" : level === "medium" ? "Medium Risk" : "Low Risk"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Graph Area — uses clip-path instead of overflow-hidden so tooltips can escape */}
      <div className="relative w-full" style={{ backgroundColor: "var(--neutral-50)", borderRadius: "0 0 var(--radius) var(--radius)", height: 520 }}>

        {/* SVG Layer — connection lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gradient definitions for lines */}
            {connections.map(({ entity, pos }) => {
              const color = entity.risk === "high" ? "#E23318" : entity.risk === "medium" ? "#F4AC3E" : "#4CAF47";
              return (
                <linearGradient key={`grad-${entity.id}`} id={`line-grad-${entity.id}`} x1={CENTER_X} y1={CENTER_Y} x2={pos.x} y2={pos.y} gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor={color} stopOpacity="0.15" />
                  <stop offset="100%" stopColor={color} stopOpacity="0.6" />
                </linearGradient>
              );
            })}
          </defs>

          {/* Connection lines */}
          {connections.map(({ entity, pos }) => {
            const isHovered = hoveredId === entity.id;
            const color = entity.risk === "high" ? "#E23318" : entity.risk === "medium" ? "#F4AC3E" : "#4CAF47";
            return (
              <g key={`line-${entity.id}`}>
                {/* Base line */}
                <line
                  x1={CENTER_X} y1={CENTER_Y} x2={pos.x} y2={pos.y}
                  stroke={isHovered ? color : `url(#line-grad-${entity.id})`}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  strokeDasharray={isHovered ? "none" : "6 4"}
                  style={{ transition: "stroke-width 0.25s ease, stroke 0.25s ease, stroke-dasharray 0.25s ease" }}
                />
                {/* Category label on line */}
                {(() => {
                  const labelX = CENTER_X + (pos.x - CENTER_X) * 0.48;
                  const labelY = CENTER_Y + (pos.y - CENTER_Y) * 0.48;
                  const labelText = entity.category;
                  const labelWidth = Math.max(80, labelText.length * 6.5 + 16);
                  return (
                    <g transform={`translate(${labelX}, ${labelY})`}>
                      <rect x={-labelWidth / 2} y={-9} width={labelWidth} height={18} rx={4} fill="var(--card)" stroke="var(--border)" strokeWidth="0.5" />
                      <text
                        textAnchor="middle" dominantBaseline="central"
                        style={{ fontSize: 9, fontWeight: 500, fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)", fill: "var(--muted-foreground)", letterSpacing: "0.04px" }}
                      >
                        {entity.category}
                      </text>
                    </g>
                  );
                })()}
                {/* Endpoint dot */}
                <circle cx={pos.x} cy={pos.y} r={isHovered ? 5 : 4} fill={color} style={{ transition: "r 0.2s ease" }} />
                {isHovered && (
                  <circle cx={pos.x} cy={pos.y} r={6} fill="none" stroke={color} strokeWidth={1.5} opacity={0.3}>
                    <animate attributeName="r" from="6" to="16" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="1s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Center hub dot */}
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
          onClick={() => handleClick("Nexagen Infra Pvt Ltd")}
          onMouseEnter={() => setHoveredId("primary")}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="bg-card flex flex-col gap-[6px] px-[14px] py-[10px] rounded-[var(--radius)] relative" style={{ width: 180, border: "2px solid var(--risk-high)", boxShadow: "0px 4px 16px rgba(226,51,24,0.12)" }}>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-[2px]">
                <p style={{ fontFeatureSettings: FEAT, fontSize: "9px", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.5px", fontFamily: FONT, color: "var(--muted-foreground)", textTransform: "uppercase" }}>
                  Primary Entity
                </p>
                <p style={{ fontFeatureSettings: FEAT, fontSize: "var(--text-base)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "0.056px", fontFamily: FONT, color: "var(--foreground)" }}>
                  Nexagen Infra Pvt Ltd
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-[12px] w-fit" style={{ backgroundColor: "var(--risk-high)" }}>
              <p className="text-primary-foreground whitespace-nowrap" style={{ fontFeatureSettings: "'case'", fontSize: "10px", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT }}>
                High Risk
              </p>
            </div>
          </div>
        </div>

        {/* Entity Nodes */}
        {connections.map(({ entity, pos }) => {
          const isHovered = hoveredId === entity.id;
          const riskColor = RISK_COLORS[entity.risk];
          const riskBg = RISK_BG[entity.risk];
          const riskLabel = entity.risk === "high" ? "High" : entity.risk === "medium" ? "Med" : "Low";

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
              {/* Node card */}
              <div
                className="bg-card flex flex-col gap-[4px] px-[12px] py-[8px] rounded-[var(--radius)] cursor-pointer"
                onClick={() => handleClick(entity.name)}
                style={{
                  width: CARD_W,
                  borderTop: isHovered ? `2px solid ${riskColor}` : `1px solid var(--border)`,
                  borderRight: isHovered ? `2px solid ${riskColor}` : `1px solid var(--border)`,
                  borderBottom: isHovered ? `2px solid ${riskColor}` : `1px solid var(--border)`,
                  borderLeft: `4px solid ${riskColor}`,
                  boxShadow: isHovered ? "0px 4px 16px rgba(19,26,37,0.12)" : "0px 1px 4px rgba(19,26,37,0.04)",
                  transition: "box-shadow 0.2s ease, border-color 0.2s ease, border-width 0.2s ease",
                }}
              >
                <div className="flex items-center justify-between w-full gap-[4px]">
                  <p className="text-ellipsis overflow-hidden whitespace-nowrap flex-1 min-w-0" style={{ fontFeatureSettings: "'case'", fontSize: "var(--text-sm)", fontWeight: 600, lineHeight: 1.4, letterSpacing: "0.048px", fontFamily: FONT, color: "var(--foreground)" }}>
                    {entity.shortName}
                  </p>
                  {/* Animated arrow */}
                  <div
                    className="shrink-0 relative"
                    style={{
                      width: 14, height: 14,
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
                <div className="flex items-center gap-[6px]">
                  {/* Risk pill */}
                  <div className="flex items-center gap-[3px] px-[6px] py-[1px] rounded-[8px]" style={{ backgroundColor: riskBg }}>
                    <div className="rounded-full" style={{ width: 5, height: 5, backgroundColor: riskColor }} />
                    <p style={{ fontFeatureSettings: FEAT, fontSize: "10px", fontWeight: 600, lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT, color: riskColor }}>
                      {riskLabel}
                    </p>
                  </div>
                  {/* Common director indicator */}
                  {entity.commonDirectors.length > 0 && (
                    <div className="flex items-center gap-[2px]">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4" stroke="var(--primary)" strokeWidth="1" fill="rgba(23,102,214,0.08)" />
                        <circle cx="5" cy="3.5" r="1.5" fill="var(--primary)" opacity="0.6" />
                        <path d="M2.5 8C2.5 6.5 3.5 5.5 5 5.5C6.5 5.5 7.5 6.5 7.5 8" stroke="var(--primary)" strokeWidth="0.8" fill="none" opacity="0.6" />
                      </svg>
                      <p style={{ fontFeatureSettings: FEAT, fontSize: "10px", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT, color: "var(--primary)" }}>
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

      {/* Tooltip layer — rendered OUTSIDE the graph area so it is not clipped */}
      {hoveredId && (() => {
        /* Primary entity data */
        const PRIMARY_ENTITY: NetworkEntity = {
          id: "primary",
          name: "Nexagen Infra Pvt Ltd",
          shortName: "Nexagen Infra",
          risk: "high",
          category: "Primary Entity",
          summary: "Criminal proceedings, SFIO investigation, severe financial distress. NCLT insolvency proceedings active. ₹14.2 Cr GST evasion notices pending. 40% YoY revenue decline with adverse audit qualifications.",
          riskSignals: 8,
          directors: ["Rajesh K. Mehta", "Sunil D. Agrawal", "Priya S. Nair", "Amit V. Shah", "Geeta R. Krishnan"],
          commonDirectors: [],
        };

        const isPrimary = hoveredId === "primary";
        const hoveredEntity = isPrimary ? PRIMARY_ENTITY : ENTITIES.find((e) => e.id === hoveredId);
        if (!hoveredEntity) return null;

        const headerOffset = 44;
        let nodeLeftPct: number;
        let nodeTopPx: number;
        let isRightSide: boolean;
        let isTopHalf: boolean;

        if (isPrimary) {
          nodeLeftPct = (CENTER_X / CANVAS_W) * 100;
          nodeTopPx = (CENTER_Y / CANVAS_H) * 520 + headerOffset;
          isRightSide = false; // show tooltip to the right
          isTopHalf = true;
        } else {
          const idx = ENTITIES.findIndex((e) => e.id === hoveredId);
          const pos = NODE_POSITIONS[idx];
          nodeLeftPct = (pos.x / CANVAS_W) * 100;
          nodeTopPx = (pos.y / CANVAS_H) * 520 + headerOffset;
          isRightSide = pos.x > CENTER_X;
          isTopHalf = pos.y < CENTER_Y;
        }

        const tooltipStyle: React.CSSProperties = {
          position: "absolute",
          width: 240,
          boxShadow: "var(--elevation-sm)",
          animation: "tooltipIn 0.18s ease-out",
          border: "1px solid var(--border)",
          zIndex: 60,
          pointerEvents: "none",
        };

        if (isRightSide) {
          tooltipStyle.right = `calc(${100 - nodeLeftPct}% + ${CARD_W / 2 + 12}px)`;
        } else {
          tooltipStyle.left = `calc(${nodeLeftPct}% + ${CARD_W / 2 + 12}px)`;
        }

        if (isTopHalf) {
          tooltipStyle.top = nodeTopPx - 30;
        } else {
          tooltipStyle.bottom = `calc(100% - ${nodeTopPx + 30}px)`;
        }

        const riskColor = RISK_COLORS[hoveredEntity.risk];
        const riskBg = RISK_BG[hoveredEntity.risk];
        const riskLabel = hoveredEntity.risk === "high" ? "High" : hoveredEntity.risk === "medium" ? "Medium" : "Low";

        const directorCount = hoveredEntity.commonDirectors.length;
        const riskyDirectors = hoveredEntity.commonDirectors.filter((d) => {
          const info = DIRECTOR_RISK[d];
          return info && (info.risk === "high" || info.risk === "medium");
        });
        const riskyCount = riskyDirectors.length;

        const smText: React.CSSProperties = { fontFeatureSettings: FEAT, fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)" as any, lineHeight: 1.4, letterSpacing: "0.048px", fontFamily: FONT };

        return (
          <div
            className="bg-card flex flex-col gap-[10px] p-[12px] rounded-[var(--radius)]"
            style={tooltipStyle}
          >
            {/* AI Summary header */}
            <div className="flex items-center gap-[4px]">
              <div className="shrink-0 size-[14px] relative">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path clipRule="evenodd" d={svgPaths.p29f9e300} fill="url(#tt_g1)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39aa6b00} fill="url(#tt_g2)" fillRule="evenodd" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="tt_g1" x1="1.9" x2="14.1" y1="7.7" y2="7.7">
                      <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="tt_g2" x1="1.9" x2="14.1" y1="7.7" y2="7.7">
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
            <p style={{ ...smText, color: "var(--muted-foreground)" }}>
              {hoveredEntity.summary}
            </p>

            {/* Directors section */}
            {hoveredEntity.directors.length > 0 && (
              <>
                <div className="w-full h-px" style={{ backgroundColor: "var(--border)" }} />
                <div className="flex flex-col gap-[6px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[4px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="4.5" cy="3.75" r="1.875" stroke="var(--foreground)" strokeWidth="0.9" fill="none" />
                        <path d="M1.125 10.5C1.125 8.625 2.625 7.125 4.5 7.125C6.375 7.125 7.875 8.625 7.875 10.5" stroke="var(--foreground)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
                        <circle cx="8.25" cy="4.125" r="1.5" stroke="var(--foreground)" strokeWidth="0.9" fill="none" />
                        <path d="M7.875 7.35C8.85 7.35 9.75 8.1 10.125 9.375" stroke="var(--foreground)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
                      </svg>
                      <p style={{ ...smText, fontWeight: 600, color: "var(--foreground)" }}>
                        Directors ({hoveredEntity.directors.length})
                      </p>
                    </div>
                    {directorCount > 0 && (
                      <span className="inline-flex items-center px-[6px] py-[1px] rounded-[4px]" style={{ backgroundColor: "rgba(23,102,214,0.08)" }}>
                        <p style={{ fontFeatureSettings: FEAT, fontSize: "10px", fontWeight: 600, lineHeight: 1.3, letterSpacing: "0.04px", fontFamily: FONT, color: "var(--primary)" }}>
                          {directorCount} common
                        </p>
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-[3px]">
                    {hoveredEntity.directors.map((d) => {
                      const isCommon = hoveredEntity.commonDirectors.includes(d);
                      return (
                        <div
                          key={d}
                          className="flex items-center gap-[6px] px-[8px] py-[3px] rounded-[4px]"
                          style={{ backgroundColor: isCommon ? "rgba(23,102,214,0.08)" : "transparent" }}
                        >
                          <div className="shrink-0 rounded-full flex items-center justify-center" style={{ width: 16, height: 16, backgroundColor: isCommon ? "var(--primary)" : "var(--muted-foreground)", opacity: isCommon ? 1 : 0.3 }}>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <circle cx="4" cy="2.8" r="1.4" fill="white" />
                              <path d="M1.5 7C1.5 5.6 2.6 4.5 4 4.5C5.4 4.5 6.5 5.6 6.5 7" stroke="white" strokeWidth="0.8" fill="none" />
                            </svg>
                          </div>
                          <p style={{ ...smText, color: isCommon ? "var(--primary)" : "var(--foreground)", fontWeight: isCommon ? 600 : 400 }}>
                            {d}
                          </p>
                          {isCommon && (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 ml-auto">
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
        );
      })()}
    </div>
  );
}

/* ─── Main Summary Page ─── */
export default function SummaryPage() {
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