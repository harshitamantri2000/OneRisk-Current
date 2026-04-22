import { useState } from "react";
import { ChevronRight, Loader2, ArrowLeft } from "lucide-react";
import {
  FONT,
  pageTitleStyle,
  bodyStyle,
  labelStyle,
  breadcrumbStyle,
  buttonTextStyle,
} from "../components/typography";


// ─── MOCK DATA ────────────────────────────────────────────────────────────────

const UPLOADED_DOCS = ["BSA", "ITR Filing", "MCA Fetch"];

interface SegmentData {
  label: string;
  severity: "high" | "medium" | "pass";
  flagCount: number;
  checksRun: number;
  factor: string;
}

interface FlagData {
  level: "high" | "medium" | "pass";
  title: string;
  sources: string[];
  factor: string;
  description: string;
  compareItems?: { label: string; value: string }[];
}

const SEGMENTS: SegmentData[] = [
  { label: "Integrity Risk", severity: "high", flagCount: 2, checksRun: 24, factor: "Integrity Risk" },
  { label: "Compliance Risk", severity: "medium", flagCount: 1, checksRun: 5, factor: "Compliance Risk" },
  { label: "Credit Behaviour Risk", severity: "high", flagCount: 3, checksRun: 4, factor: "Credit Behaviour Risk" },
  { label: "Business Risk", severity: "high", flagCount: 1, checksRun: 20, factor: "Business Risk" },
];

const FLAGS: FlagData[] = [
  {
    level: "high",
    title: "Document Forgery / Tamper",
    sources: ["BSA"],
    factor: "Integrity Risk",
    description:
      "Bank_Statement_Jan_March.pdf failed anti-forgery checks. Metadata indicates the file was edited outside the source system and PDF font subsets mismatch.",
  },
  {
    level: "high",
    title: "Circular / Related Party Trading",
    sources: ["MCA", "BSA"],
    factor: "Integrity Risk",
    description:
      "Entity 'Baldor Technologies' flagged as both a Top-3 Supplier and a Top-3 Customer in MCA filings.",
    compareItems: [
      { label: "As Supplier (BSA)", value: "₹78L" },
      { label: "As Customer (MCA)", value: "₹83L" },
    ],
  },
  {
    level: "medium",
    title: "Delayed Statutory Filing",
    sources: ["ITR Filing"],
    factor: "Compliance Risk",
    description: "ITR-3 for AY 2024-25 was filed as a belated return under Section 139(4).",
  },
  {
    level: "high",
    title: "High-Frequency Cheque Bounces",
    sources: ["BSA"],
    factor: "Credit Behaviour Risk",
    description:
      "Multiple inward cheque returns detected in February 2024 due to insufficient funds.",
  },
  {
    level: "medium",
    title: "Suspicious Narration Keywords",
    sources: ["BSA"],
    factor: "Credit Behaviour Risk",
    description:
      "Multiple cash withdrawals found with narrations 'Self' and 'Personal Use' exceeding ₹50k.",
  },
  {
    level: "medium",
    title: "Undisclosed EMI Obligations",
    sources: ["BSA", "MCA"],
    factor: "Credit Behaviour Risk",
    description:
      "Monthly debits of ₹45,000 found to 'XYZ Finance' without a corresponding charge in MCA.",
    compareItems: [
      { label: "Monthly Debit", value: "₹45,000" },
      { label: "Annual Exposure", value: "₹5.4L" },
    ],
  },
  {
    level: "high",
    title: "Revenue Verification Mismatch",
    sources: ["BSA", "MCA", "ITR"],
    factor: "Business Risk",
    description:
      "Significant variance between annualised Bank credits and Turnover declared in MCA filings.",
    compareItems: [
      { label: "BSA Credits", value: "₹1.82Cr" },
      { label: "MCA Turnover", value: "₹2.54Cr" },
    ],
  },
];

// ─── COMPONENT: FLAG ROW ─────────────────────────────────────────────────────

function FlagRow({ title, sources, description, compareItems, index }: FlagData & { index: number }) {
  return (
    <div className="py-[14px] flex flex-col gap-[8px]">
      <div className="flex items-center gap-[10px]">
        <span
          className="shrink-0 flex items-center justify-center rounded-full border border-border bg-muted"
          style={{ fontFamily: FONT, fontSize: "10px", fontWeight: 700, color: "var(--muted-foreground)", width: "20px", height: "20px" }}
        >
          {index}
        </span>
        <span style={{ ...bodyStyle, fontWeight: 600, color: "var(--foreground)", flex: 1 }}>
          {title}
        </span>
        <div className="flex items-center gap-[4px] shrink-0">
          {sources.map((s) => (
            <span
              key={s}
              className="px-[6px] py-[2px] rounded bg-muted border border-border"
              style={{ fontFamily: FONT, fontSize: "10px", color: "var(--muted-foreground)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <p style={{ ...bodyStyle, color: "var(--muted-foreground)", lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
      {compareItems && (
        <div className="grid grid-cols-2 gap-[12px] bg-muted/20 p-[10px] rounded-[8px] border border-border">
          {compareItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-[2px]">
              <span style={{ ...labelStyle, color: "var(--muted-foreground)" }}>{item.label}</span>
              <span style={{ ...bodyStyle, fontWeight: 700 }}>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── RESULTS DASHBOARD ───────────────────────────────────────────────────────

function ResultsDashboard({ onBack }: { onBack: () => void }) {
  // Build global signal index: flag title → 1-based number
  const flagIndex = new Map<string, number>();
  let counter = 1;
  for (const seg of SEGMENTS) {
    for (const flag of FLAGS.filter((f) => f.factor === seg.factor)) {
      flagIndex.set(flag.title, counter++);
    }
  }

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ fontFamily: FONT, backgroundColor: "#ffffff" }}
    >
      {/* Zone 1a — Breadcrumb */}
      <div className="flex items-center gap-[8px] py-[10px] px-[16px] border-b border-border bg-white shrink-0">
        <span style={breadcrumbStyle}>Home</span>
        <ChevronRight size={14} style={{ color: "var(--border)" }} />
        <span style={breadcrumbStyle}>Cases</span>
        <ChevronRight size={14} style={{ color: "var(--border)" }} />
        <span style={{ ...breadcrumbStyle, color: "var(--foreground)" }}>Risk Triangulation</span>
      </div>

      {/* Zone 1b — Header bar */}
      <div className="bg-white border-b border-border shrink-0">
        <div className="px-[16px] py-[10px] flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <button
              onClick={onBack}
              className="p-[6px] rounded-[var(--radius-sm)] border-none bg-transparent cursor-pointer hover:bg-muted transition-colors flex items-center shrink-0"
            >
              <ArrowLeft size={16} style={{ color: "var(--muted-foreground)" }} />
            </button>
            <p style={{ ...pageTitleStyle, margin: 0, fontSize: "18px" }}>
              Risk Triangulation Results
            </p>
          </div>
          <button
            className="flex items-center gap-[6px] rounded-[8px] px-[16px] py-[8px] text-white cursor-pointer transition-colors"
            style={{
              ...buttonTextStyle,
              fontWeight: 600,
              backgroundColor: "#1766D6",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#104EB8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1766D6")}
          >
            Download CAM Excel
          </button>
        </div>
      </div>

      {/* Zone 1c — Entity info bar */}
      <div className="px-[16px] py-[11px] bg-white border-b border-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-[10px]">
          <span style={{ ...bodyStyle, fontSize: "14px", fontWeight: 700 }}>
            Baldor Technologies Pvt Ltd
          </span>
          <div className="w-px h-[14px] bg-border" />
          <span style={{ ...labelStyle, fontSize: "12px" }}>PAN: ABCCB1234F</span>
          <div className="w-px h-[14px] bg-border" />
          <span style={{ ...labelStyle, fontSize: "12px" }}>CIN: U12300DL2024PTC123456</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <span
            style={{
              fontFamily: FONT,
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "var(--muted-foreground)",
            }}
          >
            DOCUMENTS:
          </span>
          <div className="flex items-center gap-[5px]">
            {UPLOADED_DOCS.map((doc) => (
              <span
                key={doc}
                className="px-[8px] py-[3px] rounded-full bg-muted border border-border"
                style={{ ...labelStyle, color: "var(--muted-foreground)", fontSize: "11px" }}
              >
                {doc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main scroll area */}
      <div className="flex-1 overflow-auto px-[24px] py-[24px]">

        {/* Summary cards */}
        <div className="grid grid-cols-4 gap-[16px] mb-[24px]">
          {SEGMENTS.map((seg) => (
            <div key={seg.factor} className="rounded-[10px] border border-border bg-white p-[16px] flex flex-col gap-[6px]">
              <span style={{ fontFamily: FONT, fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
                {seg.label}
              </span>
              <div className="flex items-baseline gap-[4px]">
                <span style={{ fontFamily: FONT, fontSize: "24px", fontWeight: 700, lineHeight: 1, color: "var(--foreground)" }}>
                  {seg.flagCount}
                </span>
                <span style={{ fontFamily: FONT, fontSize: "13px", color: "var(--muted-foreground)" }}>
                  / {seg.checksRun} flagged
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[16px]">
          {SEGMENTS.map((seg) => {
            const segFlags = FLAGS.filter((f) => f.factor === seg.factor);
            if (segFlags.length === 0) return null;
            return (
              <div key={seg.factor} className="rounded-[12px] border border-border overflow-hidden bg-white">
                {/* Section header */}
                <div
                  className="flex items-center justify-between px-[20px] py-[12px] border-b border-border"
                  style={{ backgroundColor: "#F7F8F9" }}
                >
                  <span
                    style={{
                      fontFamily: FONT,
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--foreground)",
                    }}
                  >
                    {seg.label}
                  </span>
                  <span
                    className="px-[8px] py-[2px] rounded-full bg-white border border-border"
                    style={{
                      fontFamily: FONT,
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {seg.flagCount} / {seg.checksRun} flagged
                  </span>
                </div>

                {/* Flag rows */}
                <div className="divide-y divide-border">
                  {segFlags.map((flag) => (
                    <div key={flag.title} className="px-[20px]">
                      <FlagRow {...flag} index={flagIndex.get(flag.title)!} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE COMPONENT ─────────────────────────────────────────────────────

type ViewState = "input" | "processing" | "results";

export default function RiskTriangulationPage() {
  const [viewState, setViewState] = useState<ViewState>("input");

  const handleInitiate = () => {
    setViewState("processing");
    setTimeout(() => setViewState("results"), 1800);
  };

  if (viewState === "processing") {
    return (
      <div
        className="flex flex-col flex-1 items-center justify-center gap-[16px] min-h-screen"
        style={{ fontFamily: FONT, backgroundColor: "var(--card)" }}
      >
        <Loader2 size={36} className="animate-spin text-primary" />
        <p style={{ ...pageTitleStyle, margin: 0 }}>Triangulating Risk Signals…</p>
        <p
          style={{
            ...labelStyle,
            maxWidth: 360,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Cross-referencing bank statements against ITR filings and MCA records.
        </p>
      </div>
    );
  }

  if (viewState === "results") {
    return <ResultsDashboard onBack={() => setViewState("input")} />;
  }

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center"
      style={{ fontFamily: FONT, backgroundColor: "var(--card)" }}
    >
      <button
        onClick={handleInitiate}
        className="border-none px-[32px] py-[12px] rounded-[10px] cursor-pointer text-white transition-colors"
        style={{ ...buttonTextStyle, fontWeight: 600, backgroundColor: "#1766D6" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#104EB8")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1766D6")}
      >
        Initiate Risk Triangulation
      </button>
    </div>
  );
}
