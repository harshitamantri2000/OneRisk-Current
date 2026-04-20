import React, { useState } from "react";
import { ChevronRight, AlertCircle, AlertTriangle, CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
import {
  FONT,
  pageTitleStyle,
  cardTitleStyle,
  bodyStyle,
  labelStyle,
  breadcrumbStyle,
  buttonTextStyle,
} from "../components/typography";


// ─── COMPONENT: SIGNAL CARD ──────────────────────────────────────────────────
interface SignalCardProps {
  level: "high" | "medium" | "low" | "pass";
  title: string;
  sources: string[];
  description: string;
  factor: string;
  children?: React.ReactNode;
}

function SignalCard({ level, title, sources, description, factor, children }: SignalCardProps) {
  const getLevelColors = () => {
    switch (level) {
      case "high": return { text: "var(--risk-high)", icon: <AlertCircle size={14} /> };
      case "medium": return { text: "var(--risk-medium)", icon: <AlertTriangle size={14} /> };
      case "pass": return { text: "var(--risk-low)", icon: <CheckCircle2 size={14} /> };
      default: return { text: "var(--muted-foreground)", icon: <AlertCircle size={14} /> };
    }
  };
  const getFactorColors = () => {
    switch (level) {
      case "high": return { bg: "#ffffff", border: "var(--risk-high)", text: "var(--risk-high)" };
      case "medium": return { bg: "#ffffff", border: "var(--risk-medium)", text: "var(--risk-medium)" };
      default: return { bg: "#ffffff", border: "var(--border)", text: "var(--muted-foreground)" };
    }
  };
  const lc = getLevelColors();
  const fc = getFactorColors();
  return (
    <div className="flex flex-col rounded-[12px] border overflow-hidden bg-card border-border">
      {/* Header */}
      <div className="px-[14px] py-[10px] flex items-start justify-between border-b border-border bg-white">
        <div className="flex flex-col gap-[4px]">
          <div className="flex items-center gap-[8px]">
            <span style={{ color: lc.text, display: "flex", alignItems: "center" }}>{lc.icon}</span>
            <span style={{ ...cardTitleStyle, fontSize: "14px", fontWeight: 600 }}>{title}</span>
          </div>
          <div className="flex items-center gap-[6px] pl-[22px]">
            {sources.map(s => (
              <span key={s} className="px-[6px] py-[2px] rounded bg-muted border border-border" style={{ ...labelStyle, color: "var(--muted-foreground)" }}>{s}</span>
            ))}
          </div>
        </div>
        <div className="px-[10px] py-[4px] rounded-full border shrink-0" style={{ backgroundColor: fc.bg, borderColor: fc.border }}>
          <span style={{ ...labelStyle, color: fc.text }}>{factor}</span>
        </div>
      </div>

      <div className="px-[14px] py-[12px] flex flex-col gap-[10px] bg-white">
        <p style={{ ...bodyStyle, color: "var(--muted-foreground)", lineHeight: 1.5, margin: 0 }}>{description}</p>
        {children && <div className="mt-[2px]">{children}</div>}
      </div>
    </div>
  );
}

function CompareRow({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-[12px] bg-muted/20 p-[10px] rounded-[8px] border border-border">
      {items.map(item => (
        <div key={item.label} className="flex flex-col gap-[2px]">
          <span style={{ ...labelStyle, color: "var(--muted-foreground)" }}>{item.label}</span>
          <span style={{ ...bodyStyle, fontWeight: 700 }}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

// ─── RESULTS VIEW ────────────────────────────────────────────────────────────
function ResultsView({ onBack }: { onBack: () => void }) {
  const [selectedRiskType, setSelectedRiskType] = useState<string>("All Factors");

  const riskTypes = ["All Factors", "Integrity Risk", "Compliance Risk", "Credit Behaviour Risk", "Business Risk"];

  const shouldShow = (category: string) => {
    if (selectedRiskType === "All Factors") return true;
    return selectedRiskType === category;
  };

  const getPillStyles = (_type: string, active: boolean) => {
    if (!active) return { bg: "transparent", border: "var(--border)", text: "var(--muted-foreground)" };
    return { bg: "var(--info-light)", border: "rgba(23, 102, 214, 0.3)", text: "var(--primary)" };
  };

  return (
    <div className="flex flex-col min-h-full" style={{ fontFamily: FONT, backgroundColor: "#ffffff" }}>
      {/* Breadcrumb */}
      <div className="flex items-center gap-[8px] py-[10px] px-[16px] border-b border-border bg-card">
        <span style={{ ...breadcrumbStyle }}>Home</span>
        <ChevronRight size={14} style={{ color: "var(--border)" }} />
        <span style={{ ...breadcrumbStyle }}>Cases</span>
        <ChevronRight size={14} style={{ color: "var(--border)" }} />
        <span style={{ ...breadcrumbStyle, color: "var(--foreground)" }}>Risk Triangulation</span>
      </div>
      {/* Header */}
      <div className="bg-card w-full shrink-0 border-b border-border">
        <div className="px-[16px] py-[10px] flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <button onClick={onBack} className="p-[6px] rounded-[var(--radius-sm)] border-none bg-transparent cursor-pointer hover:bg-muted transition-colors flex items-center shrink-0">
              <ArrowLeft size={16} style={{ color: "var(--muted-foreground)" }} />
            </button>
            <div className="flex items-center gap-[10px]">
              <p style={{ ...pageTitleStyle, margin: 0, fontSize: "18px" }}>Risk Triangulation Results</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <button className="flex items-center gap-[6px] rounded-[8px] px-[16px] py-[8px] text-white cursor-pointer hover:opacity-90 transition-opacity" style={{ ...buttonTextStyle, fontWeight: 600, backgroundColor: "var(--primary)" }}>
              Download Excel
            </button>
          </div>
        </div>
      </div>

      {/* Entity Info Line */}
      <div className="px-[16px] py-[12px] bg-muted/20 border-b border-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-[12px]">
          <span style={{ ...bodyStyle, fontSize: "15px", fontWeight: 700 }}>Baldor Technologies Pvt Ltd</span>
          <div className="w-px h-[14px] bg-border" />
          <span style={{ ...labelStyle, fontSize: "12px" }}>PAN: ABCCB1234F</span>
          <div className="w-px h-[14px] bg-border" />
          <span style={{ ...labelStyle, fontSize: "12px" }}>CIN: U12300DL2024PTC123456</span>
        </div>
        <div className="flex items-center gap-[12px]">
          <span style={{ ...labelStyle, fontSize: "11px", fontWeight: 600 }}>DOCUMENTS UPLOADED:</span>
          <div className="flex items-center gap-[6px]">
            {["Bank Statement", "ITR Filing", "MCA Fetch"].map(doc => (
              <span key={doc} className="px-[10px] py-[4px] rounded-full bg-card border border-border" style={{ ...labelStyle, color: "var(--muted-foreground)" }}>{doc}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Filters — segmented control */}
      <div className="px-[16px] py-[10px] bg-card border-b border-border flex items-center gap-[12px] shrink-0 overflow-x-auto">
        <span style={{ ...labelStyle, fontSize: "11px", fontWeight: 700, color: "var(--muted-foreground)" }}>FILTER BY DIMENSION:</span>
        <div className="flex items-center border border-border rounded-[6px] overflow-hidden shrink-0">
          {riskTypes.map((type, i) => {
            const isActive = selectedRiskType === type;
            const s = getPillStyles(type, isActive);
            return (
              <button
                key={type}
                onClick={() => setSelectedRiskType(type)}
                className="px-[12px] cursor-pointer whitespace-nowrap transition-colors leading-none"
                style={{
                  fontFamily: FONT,
                  paddingTop: "6px",
                  paddingBottom: "4px",
                  backgroundColor: isActive ? s.bg : "var(--muted)",
                  color: isActive ? s.text : "var(--muted-foreground)",
                  borderRight: i < riskTypes.length - 1 ? "1px solid var(--border)" : "none",
                  borderLeft: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  outline: "none",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                }}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 px-[24px] py-[24px] overflow-auto" style={{ backgroundColor: "#ffffff" }}>
        <div className="flex flex-col gap-[40px] w-full">
          
          {/* SECTION 1: Document Integrity & Authenticity */}
          {(selectedRiskType === "All Factors" || selectedRiskType === "Integrity Risk") && (
            <div className="flex flex-col gap-[16px]">
              <div className="border-b border-border pb-[8px]">
                <p style={{ ...cardTitleStyle, margin: 0, fontSize: "12px", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Document Integrity & Authenticity
                </p>
              </div>
              <div className="grid grid-cols-3 gap-[20px]">
                <SignalCard 
                  level="high" 
                  title="Document Forgery/Tamper" 
                  sources={["Bank Statement"]} 
                  factor="Integrity Risk" 
                  description="Bank_Statement_Jan_March.pdf failed anti-forgery checks. Metadata indicates the file was edited outside the source system and PDF font subsets mismatch." 
                />
              </div>
            </div>
          )}

          {/* SECTION 2: Individual Document Health */}
          {(selectedRiskType === "All Factors" || selectedRiskType === "Compliance Risk" || selectedRiskType === "Credit Behaviour Risk") && (
            <div className="flex flex-col gap-[16px]">
              <div className="border-b border-border pb-[8px]">
                <p style={{ ...cardTitleStyle, margin: 0, fontSize: "12px", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Individual Document Health
                </p>
              </div>
              <div className="grid grid-cols-3 gap-[20px]">
                {shouldShow("Credit Behaviour Risk") && (
                  <SignalCard
                    level="high"
                    title="High-Frequency Cheque Bounces"
                    sources={["Bank Statement"]}
                    factor="Credit Behaviour Risk"
                    description="Multiple inward cheque returns detected in February 2024 due to insufficient funds."
                  />
                )}
                {shouldShow("Compliance Risk") && (
                  <SignalCard
                    level="medium"
                    title="Delayed Statutory Filing"
                    sources={["ITR Filing"]}
                    factor="Compliance Risk"
                    description="ITR-3 for AY 2024-25 was filed as a belated return under Section 139(4)."
                  />
                )}
                {shouldShow("Credit Behaviour Risk") && (
                  <SignalCard
                    level="medium"
                    title="Suspicious Narration Keywords"
                    sources={["Bank Statement"]}
                    factor="Credit Behaviour Risk"
                    description="Multiple cash withdrawals found with narrations 'Self' and 'Personal Use' exceeding ₹50k."
                  />
                )}
              </div>
            </div>
          )}

          {/* SECTION 3: Cross-Document Triangulation */}
          {(selectedRiskType === "All Factors" || selectedRiskType === "Business Risk" || selectedRiskType === "Integrity Risk") && (
            <div className="flex flex-col gap-[16px]">
              <div className="border-b border-border pb-[8px]">
                <p style={{ ...cardTitleStyle, margin: 0, fontSize: "12px", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Cross-Document Triangulation
                </p>
              </div>
              <div className="grid grid-cols-3 gap-[20px]">
                {shouldShow("Business Risk") && (
                  <SignalCard 
                    level="high" 
                    title="Revenue Verification Mismatch" 
                    sources={["BSA", "MCA", "ITR"]} 
                    factor="Business Risk" 
                    description="Significant variance between annualised Bank credits and Turnover declared in MCA filings."
                  >
                    <CompareRow items={[{ label: "BSA Credits", value: "₹1.82Cr" }, { label: "MCA Turnover", value: "₹2.54Cr" }]} />
                  </SignalCard>
                )}
                {shouldShow("Credit Behaviour Risk") && (
                  <SignalCard level="medium" title="Undisclosed EMI Obligations" sources={["BSA", "MCA"]} factor="Credit Behaviour Risk" description="Monthly debits of ₹45,000 found to 'XYZ Finance' without a corresponding charge in MCA.">
                    <CompareRow items={[{ label: "Monthly Debit", value: "₹45,000" }, { label: "Annual Exposure", value: "₹5.4L" }]} />
                  </SignalCard>
                )}
                {shouldShow("Integrity Risk") && (
                  <SignalCard level="high" title="Circular/Related Party Trading" sources={["MCA", "BSA"]} factor="Integrity Risk" description="Entity 'Baldor Technologies' flagged as both a Top-3 Supplier and a Top-3 Customer in MCA filings.">
                    <CompareRow items={[{ label: "As Supplier (BSA)", value: "₹78L" }, { label: "As Customer (MCA)", value: "₹83L" }]} />
                  </SignalCard>
                )}
              </div>
            </div>
          )}

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
      <div className="flex flex-col flex-1 items-center justify-center gap-[16px] min-h-screen" style={{ fontFamily: FONT, backgroundColor: "var(--card)" }}>
        <Loader2 size={36} className="animate-spin text-primary" />
        <p style={{ ...pageTitleStyle, margin: 0 }}>Triangulating Risk Signals…</p>
        <p style={{ ...labelStyle, maxWidth: 360, textAlign: "center", lineHeight: 1.6 }}>Cross-referencing bank statements against ITR filings and MCA records.</p>
      </div>
    );
  }

  if (viewState === "results") {
    return <ResultsView onBack={() => setViewState("input")} />;
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center" style={{ fontFamily: FONT, backgroundColor: "var(--card)" }}>
      <button onClick={handleInitiate} className="bg-primary text-white border-none px-[32px] py-[12px] rounded-[10px] cursor-pointer" style={{ ...buttonTextStyle, fontWeight: 600 }}>
        Initiate Risk Triangulation
      </button>
    </div>
  );
}
