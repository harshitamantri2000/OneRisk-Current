import React, { useState, useRef, Fragment } from "react";
import { Search, ChevronRight, ChevronDown, ChevronUp, UploadCloud, Trash2, FileText, AlertCircle, AlertTriangle, CheckCircle2, ShieldAlert, ShieldCheck, Loader2, ArrowLeft, FileSpreadsheet } from "lucide-react";
import {
  FONT,
  pageTitleStyle,
  cardTitleStyle,
  bodyStyle,
  labelStyle,
  breadcrumbStyle,
  captionStyle,
  chipTextStyle,
  buttonTextStyle,
} from "../components/typography";

interface FileData {
  id: string;
  name: string;
  size: string;
  sizeBytes: number;
}

function Breadcrumb() {
  return (
    <div className="flex items-center gap-[8px] py-[12px] px-[16px] border-b border-border bg-card">
      <span style={{ ...breadcrumbStyle }}>Home</span>
      <ChevronRight size={14} style={{ color: "var(--border)" }} />
      <span style={{ ...breadcrumbStyle }}>Cases</span>
      <ChevronRight size={14} style={{ color: "var(--border)" }} />
      <span style={{ ...breadcrumbStyle, color: "var(--foreground)" }}>Risk Triangulation</span>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="bg-card w-full shrink-0 border-b border-border">
      <div className="px-[16px] py-[10px] flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <p style={{ ...pageTitleStyle, margin: 0, fontSize: "18px" }}>Initiate Risk Triangulation</p>
        </div>
      </div>
    </div>
  );
}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function SectionHeader({ title, isRequired, isAdded, isOpen, onToggle }: { title: string; isRequired?: boolean; isAdded?: boolean; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-between px-[16px] py-[14px] cursor-pointer hover:bg-muted/30 transition-colors" onClick={onToggle}>
      <div className="flex items-center gap-[12px]">
        <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border ${isAdded ? "bg-success border-success text-white" : "border-border bg-muted/20"}`}>
          {isAdded ? <CheckCircle2 size={14} /> : <div className="w-[8px] h-[8px] rounded-full bg-border" />}
        </div>
        <span style={{ ...bodyStyle, fontWeight: 600 }}>{title}{isRequired && <span className="text-destructive ml-1">*</span>}</span>
      </div>
      {isOpen ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
    </div>
  );
}

function FileUploadArea({ files, setFiles }: { files: FileData[], setFiles: React.Dispatch<React.SetStateAction<FileData[]>> }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRemove = (id: string) => setFiles(prev => prev.filter(f => f.id !== id));

  return (
    <div className="flex flex-col gap-[12px]">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-[var(--radius)] py-[32px] flex flex-col items-center gap-[12px] hover:border-primary/40 hover:bg-primary/[0.02] transition-all cursor-pointer group"
      >
        <div className="w-[40px] h-[40px] rounded-full bg-muted/40 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
          <UploadCloud size={20} />
        </div>
        <div className="flex flex-col items-center">
          <span style={{ ...bodyStyle, fontWeight: 600 }}>Click to upload or drag and drop</span>
          <span style={{ ...captionStyle, color: "var(--muted-foreground)" }}>Maximum file size 50 MB (PDF, JPG, PNG)</span>
        </div>
        <input type="file" ref={fileInputRef} className="hidden" multiple onChange={(e) => {
          if (e.target.files) {
            const newFiles = Array.from(e.target.files).map(f => ({
              id: Math.random().toString(36).substr(2, 9),
              name: f.name,
              size: (f.size / (1024 * 1024)).toFixed(1) + " MB",
              sizeBytes: f.size
            }));
            setFiles(prev => [...prev, ...newFiles]);
          }
        }} />
      </div>

      {files.length > 0 && (
        <div className="flex flex-col gap-[8px]">
          {files.map(file => (
            <div key={file.id} className="flex items-center justify-between p-[12px] bg-muted/20 border border-border rounded-[var(--radius-sm)]">
              <div className="flex items-center gap-[12px]">
                <FileText size={18} className="text-muted-foreground" />
                <div className="flex flex-col">
                  <span style={{ ...bodyStyle, fontSize: "13.5px", fontWeight: 500 }}>{file.name}</span>
                  <span style={{ ...captionStyle, fontSize: "11px" }}>{file.size}</span>
                </div>
              </div>
              <button onClick={() => handleRemove(file.id)} className="p-[6px] rounded hover:bg-destructive/10 text-destructive border-none bg-transparent cursor-pointer transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
    <div className="flex flex-col rounded-[12px] border overflow-hidden bg-card transition-all hover:shadow-sm border-border">
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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between py-[4px]">
      <span style={{ ...labelStyle, fontSize: "11px", fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase" }}>{label}</span>
      <span style={{ ...bodyStyle, fontSize: "13px", textAlign: "right", maxWidth: "240px" }}>{value}</span>
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
    return { bg: "var(--primary)", border: "var(--primary)", text: "var(--primary-foreground)" };
  };

  return (
    <div className="flex flex-col min-h-full" style={{ fontFamily: FONT, backgroundColor: "#ffffff" }}>
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
              <FileSpreadsheet size={15} />
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
              <span key={doc} className="px-[10px] py-[4px] rounded-full bg-card border border-border" style={{ ...chipTextStyle, fontSize: "11px", color: "var(--muted-foreground)" }}>{doc}</span>
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
  const [bankFiles, setBankFiles] = useState<FileData[]>([{ id: "1", name: "Bank_Statement_Jan_March.pdf", size: "4.2MB", sizeBytes: 4404019 }]);
  const [itrFiles, setItrFiles] = useState<FileData[]>([{ id: "2", name: "ITR_Filing_2024.pdf", size: "2.1MB", sizeBytes: 2202009 }]);
  const [itrType, setItrType] = useState("ITR-3");
  const [panNumber, setPanNumber] = useState("ABCDE1234R");
  const [mcaCinNumber, setMcaCinNumber] = useState("U12300MH2011PTC291789");
  const [entityFound, setEntityFound] = useState(true);
  const [bankOpen, setBankOpen] = useState(true);
  const [itrOpen, setItrOpen] = useState(true);
  const [mcaOpen, setMcaOpen] = useState(true);
  const [accountType, setAccountType] = useState("Current Account");
  const [mcaEntityName, setMcaEntityName] = useState("");

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
    <div className="flex flex-col min-h-screen" style={{ fontFamily: FONT, backgroundColor: "var(--card)" }}>
      <Breadcrumb />
      <PageHeader />
      <div className="px-[16px] py-[14px] bg-muted/20 border-b border-border flex items-center gap-[24px]">
        <div className="flex items-center gap-[10px] bg-card border border-border rounded-full px-[16px] py-[8px] min-w-[380px]">
          <Search size={14} className="text-muted-foreground" />
          <input type="text" placeholder="Search Entity Name..." className="border-none bg-transparent outline-none flex-1" style={{ ...bodyStyle, fontSize: "14px", fontWeight: 600 }} />
        </div>
        <div className="ml-auto flex items-center gap-[8px]">
          <span style={{ ...labelStyle, fontSize: "11px", fontWeight: 600 }}>DOCUMENTS PREVIEW:</span>
          <div className="px-[10px] py-[4px] border border-border rounded-full bg-card">
            <span style={{ ...labelStyle, fontSize: "12px", color: "var(--foreground)" }}>{bankFiles.length + itrFiles.length + (entityFound ? 1 : 0)} Documents</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-[16px] flex flex-col gap-[12px]">
        {/* Bank */}
        <div className="bg-card rounded-[12px] border border-border overflow-hidden">
          <SectionHeader title="Upload Bank Statements" isRequired isAdded={bankFiles.length > 0} isOpen={bankOpen} onToggle={() => setBankOpen(!bankOpen)} />
          {bankOpen && (
            <div className="p-[16px] border-t border-border flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <label style={bodyStyle}>Account Type</label>
                <div className="flex gap-[12px]">
                  {["Savings Account", "Current Account"].map(opt => (
                    <label key={opt} className="flex items-center gap-[8px] border rounded-[8px] px-[12px] py-[10px] cursor-pointer" style={{ borderColor: accountType === opt ? "var(--primary)" : "var(--border)", backgroundColor: accountType === opt ? "rgba(23,102,214,0.05)" : "transparent" }}>
                      <input type="radio" className="hidden" checked={accountType === opt} onChange={() => setAccountType(opt)} />
                      <div className={`w-[14px] h-[14px] rounded-full border flex items-center justify-center ${accountType === opt ? "border-primary" : "border-muted-foreground"}`}>
                        {accountType === opt && <div className="w-[8px] h-[8px] rounded-full bg-primary" />}
                      </div>
                      <span style={bodyStyle}>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <FileUploadArea files={bankFiles} setFiles={setBankFiles} />
            </div>
          )}
        </div>

        {/* ITR */}
        <div className="bg-card rounded-[12px] border border-border overflow-hidden">
          <SectionHeader title="Income Tax Return Details" isAdded={itrFiles.length > 0} isOpen={itrOpen} onToggle={() => setItrOpen(!itrOpen)} />
          {itrOpen && (
            <div className="p-[16px] border-t border-border flex flex-col gap-[16px]">
              <div className="grid grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <label style={bodyStyle}>ITR Type</label>
                  <select value={itrType} onChange={(e) => setItrType(e.target.value)} className="w-full border rounded-[8px] px-[12px] py-[10px] bg-card outline-none" style={{ fontFamily: FONT, borderColor: "var(--border)" }}>
                    <option value="ITR-3">ITR-3</option>
                    <option value="ITR-6">ITR-6</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label style={bodyStyle}>PAN Number</label>
                  <input type="text" value={panNumber} onChange={(e) => setPanNumber(e.target.value)} className="w-full border rounded-[8px] px-[12px] py-[10px] bg-card outline-none" style={{ fontFamily: FONT, borderColor: "var(--border)" }} />
                </div>
              </div>
              <FileUploadArea files={itrFiles} setFiles={setItrFiles} />
            </div>
          )}
        </div>

        {/* MCA */}
        <div className="bg-card rounded-[12px] border border-border overflow-hidden">
          <SectionHeader title="Entity MCA Filings" isAdded={entityFound} isOpen={mcaOpen} onToggle={() => setMcaOpen(!mcaOpen)} />
          {mcaOpen && (
            <div className="p-[16px] border-t border-border flex flex-col gap-[16px]">
              <div className="flex gap-[12px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label style={bodyStyle}>Search Legal Name</label>
                  <div className="flex gap-[8px]">
                    <input type="text" value={mcaEntityName} onChange={(e) => setMcaEntityName(e.target.value)} className="flex-1 border rounded-[8px] px-[12px] py-[10px] bg-card outline-none" style={{ fontFamily: FONT, borderColor: "var(--border)" }} />
                    <button onClick={() => setEntityFound(true)} className="px-[16px] py-[10px] bg-muted border border-border rounded-[8px] font-semibold cursor-pointer" style={buttonTextStyle}>Search</button>
                  </div>
                </div>
              </div>
              {entityFound && (
                <div className="p-[16px] bg-muted/20 border border-border rounded-[8px] flex flex-col gap-[8px]">
                   <InfoRow label="Company Name" value="Baldor Technologies Private Limited" />
                   <InfoRow label="CIN" value="U12300MH2011PTC291789" />
                   <InfoRow label="Status" value="Active" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 bg-card border-t border-border px-[16px] py-[12px] flex justify-end gap-[12px]">
        <button onClick={handleInitiate} className="bg-primary text-white border-none px-[24px] py-[10px] rounded-[10px] cursor-pointer font-semibold shadow-sm" style={buttonTextStyle}>Initiate Case</button>
      </div>
    </div>
  );
}
