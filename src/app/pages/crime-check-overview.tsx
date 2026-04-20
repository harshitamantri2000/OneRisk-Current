import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, ChevronUp, ChevronDown, ExternalLink } from "lucide-react";
import svgPaths from "../../imports/svg-chrilx3rdq";
import {
  FONT,
  FEAT,
  pageTitleStyle,
  sectionHeadingStyle,
  cardTitleStyle,
  subHeadingStyle,
  bodyStyle,
  labelStyle,
  breadcrumbStyle,
  breadcrumbActiveStyle,
  chipTextStyle,
  buttonTextStyle,
  tableHeaderStyle,
  tableCellStyle,
} from "../components/typography";

/* ─── DATA ─── */

const entityInfo = {
  cin: "U74900MH2011PTC291275",
  dob: "20/10/1998",
  fatherName: "Ramehs Kumar",
  address: "8th Floor, Skyline Icon, Andheri Kurla Road, Chimatpada, Marol, Andheri East, mumbai, Maharashtra 400059",
  directors: [
    { name: "Sample director long name", address: "8, Jogani Estate, S Bapat Road, Dadar (w), Mumbai, Maharashtra", totalCases: 5 },
    { name: "Sample director long name", address: "8, Jogani Estate, S Bapat Road, Dadar (w), Mumbai, Maharashtra", totalCases: 5 },
    { name: "Sample director long name", address: "8, Jogani Estate, S Bapat Road, Dadar (w), Mumbai, Maharashtra", totalCases: 5 },
    { name: "Sample director long name", address: "8, Jogani Estate, S Bapat Road, Dadar (w), Mumbai, Maharashtra", totalCases: 5 },
  ],
};

const categories = [
  "Serious criminal offences (5)",
  "Financial Offences (2)",
  "Statutory & regulatory matters (1)",
  "Civil Matters",
  "Other matters (3)",
];

type CaseOverviewRow = {
  year: number;
  counts: (number | null)[];
};

const caseOverviewData: CaseOverviewRow[] = [
  { year: 2018, counts: [null, 2, null, null, null] },
  { year: 2017, counts: [2, null, null, null, null] },
  { year: 2018, counts: [null, null, null, 2, null] },
  { year: 2017, counts: [null, null, null, null, null] },
  { year: 2018, counts: [null, null, null, null, null] },
  { year: 2017, counts: [null, null, null, null, null] },
  { year: 2018, counts: [null, 2, null, null, null] },
  { year: 2017, counts: [2, null, null, null, null] },
  { year: 2018, counts: [null, null, null, null, null] },
  { year: 2017, counts: [null, null, 1, null, null] },
];

/* Whether we show cases or "no records" state */
const HAS_RECORDS = true;

/* ─── BREADCRUMB ─── */
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-[2px]" aria-label="Breadcrumb">
      {["Search Terminal", "CrimeCheck Search", "Overview of Aditya Rajesh"].map((item, i, arr) => (
        <span key={i} className="flex items-center gap-[2px]">
          {i > 0 && <ChevronRight size={14} style={{ color: "var(--muted-foreground)" }} />}
          <span style={i === arr.length - 1 ? breadcrumbActiveStyle : breadcrumbStyle}>{item}</span>
        </span>
      ))}
    </nav>
  );
}

/* ─── PAGE HEADER ─── */
function PageHeader() {
  return (
    <div className="bg-card relative w-full">
      <div className="px-[16px] pt-[6px] pb-[2px]">
        <Breadcrumb />
      </div>
      <div className="flex items-center justify-between px-[16px] py-[8px] gap-[12px]">
        <p style={pageTitleStyle}>Overview of Aditya Rajesh</p>
        <button
          className="flex items-center justify-center px-[24px] rounded-[var(--radius)] shrink-0 cursor-pointer border-0 hover:opacity-90 transition-opacity"
          style={{ height: "36px", backgroundColor: "var(--primary)", ...buttonTextStyle, color: "var(--primary-foreground)" }}
        >
          Download Report
        </button>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
    </div>
  );
}

/* ─── PRIMARY ENTITY INFO ─── */
function PrimaryEntityInfo() {
  const [expanded, setExpanded] = useState(true);
  const [directorsExpanded, setDirectorsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-[12px] overflow-hidden px-[16px] py-[8px]">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-[5px] border-0 bg-transparent cursor-pointer p-0 w-full"
      >
        <span style={cardTitleStyle}>Primary Entity Information</span>
        {expanded ? <ChevronUp size={20} style={{ color: "var(--foreground)" }} /> : <ChevronDown size={20} style={{ color: "var(--foreground)" }} />}
      </button>

      {expanded && (
        <div className="flex flex-col gap-[6px] mt-[16px]">
          <InfoRow label="CIN" value={entityInfo.cin} />
          <InfoRow label="DOB" value={entityInfo.dob} />
          <InfoRow label="FATHER'S NAME" value={entityInfo.fatherName} />
          <InfoRow label="REGISTERED ADDRESS" value={entityInfo.address} />
          <div className="flex items-start gap-[3px]" style={labelStyle}>
            <span className="shrink-0" style={{ width: 156, color: "var(--muted-foreground)" }}>DIRECTOR DETAILS</span>
            <button
              onClick={(e) => { e.stopPropagation(); setDirectorsExpanded((v) => !v); }}
              className="flex items-center gap-[2px] border-0 bg-transparent cursor-pointer p-0"
              style={{ ...labelStyle, color: "var(--foreground)" }}
            >
              <span>4 directors</span>
              <ChevronDown size={16} className={directorsExpanded ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
          </div>

          {directorsExpanded && (
            <div className="grid grid-cols-2 gap-[12px] mt-[8px]">
              {entityInfo.directors.map((d, i) => (
                <div
                  key={i}
                  className="rounded-[var(--radius)] p-[12px] flex flex-col gap-[4px]"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <span style={{ ...bodyStyle, color: "var(--foreground)" }}>Director1: {d.name}</span>
                  <span style={labelStyle}>Address: {d.address}</span>
                  <span style={labelStyle}>Total cases: {d.totalCases}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-[3px]" style={labelStyle}>
      <span className="shrink-0" style={{ width: 156, color: "var(--muted-foreground)" }}>{label}</span>
      <span style={{ color: "var(--foreground)" }}>{value}</span>
    </div>
  );
}

/* ─── AI SUMMARY CARD ─── */
function AISummaryCard() {
  return (
    <div
      className="relative rounded-[var(--radius)] w-full"
      style={{
        backgroundImage: "linear-gradient(101.581deg, var(--ai-summary-start) 0.67593%, var(--ai-summary-end) 117.74%)",
      }}
    >
      <div className="flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        {/* AI Summary header */}
        <div className="flex gap-[8px] items-center shrink-0">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" viewBox="0 0 22 11">
              <path d={svgPaths.p1e985e00} fill="url(#cc_ai1)" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="cc_ai1" x1="13.84" x2="21.16" y1="6.5" y2="6.5">
                  <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span
            style={{ ...labelStyle, color: undefined, background: "linear-gradient(90deg, #1C43B9, #041C66)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            AI Summary
          </span>
        </div>

        {/* Risk pill */}
        <div className="flex items-center gap-[4px] px-[12px] py-[6px] rounded-[20px] w-fit" style={{ backgroundColor: "var(--risk-medium)" }}>
          <div className="overflow-clip shrink-0 size-[14px] relative">
            <div className="absolute inset-[8.33%]">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 18.44 16.72">
                <path d={svgPaths.p1056a000} fill="white" />
              </svg>
            </div>
          </div>
          <span style={{ ...chipTextStyle, color: "var(--primary-foreground)" }}>Medium Risk Network</span>
        </div>

        {/* Description */}
        <p style={{ ...bodyStyle, color: "var(--foreground)" }}>
          ABC Industries Ltd (subsidiary) presents the highest risk due to criminal proceedings and financial distress, with 6 additional companies showing GST non-compliance, declining revenues, and adverse audit findings.
        </p>
      </div>

      {/* Gradient border */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[var(--radius)]"
        style={{
          padding: "1px",
          background: "linear-gradient(135deg, var(--warning-border), var(--ai-summary-start), var(--warning-border))",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </div>
  );
}

/* ─── CASE OVERVIEW TABLE ─── */
function CaseOverviewSection() {
  const navigate = useNavigate();
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

  return (
    <div className="bg-card rounded-[var(--radius)] border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center gap-[8px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
          </svg>
          <span style={cardTitleStyle}>Case Overview</span>
        </div>
        <button
          onClick={() => navigate("/crime-check/details")}
          className="flex items-center gap-[4px] px-[16px] py-[6px] rounded-[var(--radius)] cursor-pointer bg-transparent transition-colors hover:bg-muted"
          style={{ border: "1px solid var(--border)", ...buttonTextStyle, color: "var(--foreground)" }}
        >
          View Details <ExternalLink size={14} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
          <thead>
            <tr>
              <th style={{ ...tableHeaderStyle, padding: "12px 16px", borderBottom: "1px solid var(--border)", width: 100, textAlign: "left" }}>&nbsp;</th>
              {categories.map((cat) => (
                <th key={cat} style={{ ...tableHeaderStyle, padding: "12px 16px", borderBottom: "1px solid var(--border)", textAlign: "center" }}>
                  {cat}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {caseOverviewData.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ ...tableCellStyle, padding: "12px 16px", textAlign: "center" }}>{row.year}</td>
                {row.counts.map((count, ci) => (
                  <td
                    key={ci}
                    className="relative"
                    style={{ padding: "12px 16px", textAlign: "center" }}
                    onMouseEnter={() => count ? setHoveredCell({ row: ri, col: ci }) : null}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    {count && (
                      <span
                        className="inline-flex items-center justify-center rounded-full cursor-pointer"
                        style={{
                          width: 24,
                          height: 24,
                          backgroundColor: ci === 0 ? "var(--risk-high)" : ci === 3 ? "var(--risk-low)" : "var(--primary)",
                          ...chipTextStyle,
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {count}
                      </span>
                    )}
                    {/* Tooltip on hover */}
                    {hoveredCell?.row === ri && hoveredCell?.col === ci && count && (
                      <CaseTooltip category={categories[ci]} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── CASE TOOLTIP ─── */
function CaseTooltip({ category }: { category: string }) {
  const tooltipCases = [
    { prefix: "DC", type: "Robbery", detail: "1 cases", risk: "Very high risk" },
    { prefix: "DC", type: "Bail Application", detail: "1 case as a Petitioner", risk: "Very high risk" },
    { prefix: "FIR", type: "Criminal matter", detail: "1 filing as a Respondent", risk: "Very high risk" },
  ];

  return (
    <div
      className="absolute z-50 bg-card rounded-[var(--radius)] flex flex-col gap-[4px] p-[8px] min-w-[320px]"
      style={{ boxShadow: "var(--elevation-sm)", top: "calc(100% + 4px)", left: "50%", transform: "translateX(-50%)" }}
    >
      {tooltipCases.map((c, i) => (
        <div key={i} className="flex items-center gap-[6px] px-[8px] py-[4px] rounded-[var(--radius-sm)] hover:bg-muted cursor-pointer">
          <span style={{ ...labelStyle, color: "var(--foreground)" }}>
            {c.prefix}: <span style={{ fontWeight: 700, textDecoration: "underline" }}>{c.type}</span> – {c.detail}
          </span>
          <span
            className="inline-flex items-center px-[6px] py-[1px] rounded-[4px]"
            style={{ ...chipTextStyle, fontSize: "10px", backgroundColor: "var(--destructive-light)", color: "var(--destructive)" }}
          >
            {c.risk}
          </span>
          <ChevronRight size={12} style={{ color: "var(--foreground)" }} />
        </div>
      ))}
    </div>
  );
}

/* ─── NO RECORDS STATE ─── */
function NoRecordsState() {
  return (
    <div className="bg-card rounded-[var(--radius)] flex flex-col items-center justify-center py-[80px] px-[16px]">
      {/* Illustration */}
      <div className="relative size-[200px] mb-[12px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Simplified "No Records" illustration */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="85" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <g transform="translate(50, 35) rotate(-8)">
              <rect x="0" y="0" width="80" height="100" rx="4" fill="white" stroke="var(--border)" strokeWidth="1" />
              <line x1="15" y1="25" x2="65" y2="25" stroke="var(--muted)" strokeWidth="2" />
              <line x1="15" y1="35" x2="55" y2="35" stroke="var(--muted)" strokeWidth="2" />
              <line x1="15" y1="45" x2="60" y2="45" stroke="var(--muted)" strokeWidth="2" />
            </g>
            <circle cx="90" cy="60" r="22" fill="var(--risk-low)" />
            <path d="M80 60 L87 67 L100 54" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="90" y="130" textAnchor="middle" fill="var(--risk-low)" fontSize="18" fontWeight="bold" fontFamily="serif" letterSpacing="1">NO RECORDS</text>
          </svg>
        </div>
      </div>
      <p style={{ fontFamily: FONT, fontSize: "var(--text-xl)", fontWeight: 700, lineHeight: 1.4, letterSpacing: "0.08px", color: "var(--foreground)", textAlign: "center" }}>
        No case record found !
      </p>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function CrimeCheckOverview() {
  return (
    <div className="bg-background flex flex-col w-full min-h-full" style={{ fontFamily: FONT }}>
      <PageHeader />
      <div className="flex flex-col gap-[16px] px-[16px] py-[16px] overflow-y-auto flex-1" style={{ maxWidth: 1264, margin: "0 auto", width: "100%" }}>
        <PrimaryEntityInfo />
        {HAS_RECORDS ? (
          <>
            <AISummaryCard />
            <CaseOverviewSection />
          </>
        ) : (
          <NoRecordsState />
        )}
      </div>
    </div>
  );
}