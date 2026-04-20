import { useState, useCallback } from "react";
import { ChevronRight, ChevronDown, ChevronLeft, X, Check } from "lucide-react";
import {
  FONT,
  FEAT,
  pageTitleStyle,
  sectionHeadingStyle,
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

/* ─── TYPES ─── */
type MatchStatus = "True Positive" | "Pending" | "Skipped";

interface ScreeningMatch {
  id: number;
  entityName: string;
  idDetails: string;
  birthYear: number;
  category: string;
  matchType: string;
  status: MatchStatus;
}

interface RecordDetail {
  field: string;
  value: string;
  isLink?: boolean;
}

type BannerType = "success" | "error" | "download" | null;

/* ─── MOCK DATA ─── */
const caseInput = {
  name: "Dhishti Desai (Smart Fuzzy)",
  entityType: "Individual",
  birthYear: "1985 ( 1 year threshold)",
  categories: ["Small", "Small", "Small"],
};

const screeningMetrics = [
  { label: "All Hits", value: "100", color: "var(--foreground)" },
  { label: "Sanctions", value: "20", color: "var(--destructive)" },
  { label: "PEP", value: "0", color: "var(--foreground)" },
  { label: "Warning", value: "0", color: "var(--foreground)" },
  { label: "Adverse media", value: "5", color: "var(--destructive)" },
];

const allMatches: ScreeningMatch[] = [
  { id: 1, entityName: "Ashiq Ahmed Nengroo", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "True Positive" },
  { id: 2, entityName: "abc", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "Skipped" },
  { id: 3, entityName: "Ashiq Ahmed Nengroo", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "True Positive" },
  { id: 4, entityName: "Ashiq Ahmed Nengroo", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "Pending" },
  { id: 5, entityName: "abc", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "Skipped" },
  { id: 6, entityName: "Ashiq Ahmed Nengroo", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "True Positive" },
  { id: 7, entityName: "Ashiq Ahmed Nengroo", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "Pending" },
  { id: 8, entityName: "Ashiq Ahmed Nengroo", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "Pending" },
  { id: 9, entityName: "Ashiq Ahmed Nengroo", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "Pending" },
  { id: 10, entityName: "abc", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "Skipped" },
  { id: 11, entityName: "Ashiq Ahmed Nengroo", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "True Positive" },
  { id: 12, entityName: "abc", idDetails: "AGJPW5119K (PAN)", birthYear: 2001, category: "Sanctions", matchType: "Name Match", status: "Skipped" },
];

const recordDetails: RecordDetail[] = [
  { field: "match_status.birthYearMatch", value: "False" },
  { field: "match_status.panMatch", value: "False" },
  { field: "match_status.matchScore", value: "10.00" },
  { field: "entity_type", value: "Organization" },
  { field: "aliases", value: "-" },
  { field: "birth_date", value: "-" },
  { field: "image_url", value: "-" },
  { field: "description", value: "MGSTD Communication - Folder received" },
  { field: "place_of_birth", value: "-" },
  { field: "citizenship", value: "-" },
  { field: "entity_name", value: "DRASHTI IMPEX" },
  { field: "nationality", value: "India" },
  { field: "identification_details", value: "[object Object], [object Object]" },
  { field: "related_parties", value: "-" },
  { field: "source_url", value: "https://www.mahagst.gov.in/en/list/filers/143", isLink: true },
  { field: "list_names", value: "Department of Goods and Services Tax (Government of Maharashtra) - List of non-existent and non-genuine tax payers" },
  { field: "last_updated", value: "22nd August 2024" },
];

/* ─── SUBCOMPONENTS ─── */

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-[2px]" aria-label="Breadcrumb">
      {["AML Search", "Details for Case"].map((item, i, arr) => (
        <span key={i} className="flex items-center gap-[2px]">
          {i > 0 && <ChevronRight size={14} style={{ color: "var(--muted-foreground)" }} />}
          <span style={i === arr.length - 1 ? breadcrumbActiveStyle : breadcrumbStyle}>{item}</span>
        </span>
      ))}
    </nav>
  );
}

function StatusBadge({ status }: { status: MatchStatus }) {
  const styles: Record<MatchStatus, { bg: string; color: string }> = {
    "True Positive": { bg: "var(--destructive)", color: "var(--primary-foreground)" },
    Pending: { bg: "rgba(19,26,37,0.1)", color: "var(--foreground)" },
    Skipped: { bg: "var(--foreground)", color: "var(--primary-foreground)" },
  };
  const s = styles[status];
  return (
    <span
      className="inline-flex items-center justify-center px-[12px] rounded-[20px] shrink-0 whitespace-nowrap"
      style={{ height: 28, backgroundColor: s.bg, ...chipTextStyle, color: s.color }}
    >
      {status}
    </span>
  );
}

function ViewDetailsBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-[24px] rounded-[var(--radius-sm)] shrink-0 cursor-pointer bg-card hover:opacity-80 transition-opacity"
      style={{ height: 28, border: "1px solid var(--primary)", ...buttonTextStyle, color: "var(--primary)" }}
    >
      View Details
    </button>
  );
}

function MetricCard({ label, value, color, active = false }: { label: string; value: string; color: string; active?: boolean }) {
  return (
    <div
      className="flex-1 min-w-0 rounded-[12px] px-[16px] py-[8px] flex flex-col gap-[2px]"
      style={{
        backgroundColor: active ? "var(--card)" : "var(--muted)",
        border: active ? "1px solid var(--primary)" : "1px solid transparent",
      }}
    >
      <span style={{ ...bodyStyle, color: "var(--muted-foreground)" }}>{label}</span>
      <span style={{ fontFamily: FONT, fontSize: "var(--text-xl)", fontWeight: 700, lineHeight: 1.4, letterSpacing: "0.096px", color }}>
        {value}
      </span>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-[4px]">
      <span className="shrink-0 whitespace-pre-wrap" style={{ ...labelStyle, width: 132 }}>{label}</span>
      <span style={{ ...bodyStyle, color: "var(--foreground)" }}>{value}</span>
    </div>
  );
}

/* ─── SELECT DROPDOWN ─── */
function SelectDropdown({
  value,
  onChange,
  options,
  placeholder,
  dangerValue,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  dangerValue?: string;
}) {
  const isDanger = dangerValue && value === dangerValue;
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-[var(--radius)] px-[12px] py-[10px] pr-[36px] cursor-pointer bg-card"
        style={{
          border: "1px solid var(--border)",
          ...bodyStyle,
          color: isDanger ? "var(--destructive)" : value ? "var(--foreground)" : "var(--muted-foreground)",
          outline: "none",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "var(--muted-foreground)" }}
      />
    </div>
  );
}

/* ─── NOTIFICATION BANNER ─── */
function NotificationBanner({ type, onDismiss }: { type: BannerType; onDismiss: () => void }) {
  if (!type) return null;

  const config: Record<NonNullable<BannerType>, { bg: string; color: string; text: string }> = {
    success: {
      bg: "var(--success-light)",
      color: "#1A7A1E",
      text: "Decision saved successfully! Your report is now available for download.",
    },
    error: {
      bg: "var(--destructive-light)",
      color: "var(--destructive)",
      text: "Oops! Something went wrong while generating the report. Please try again. If it still doesn't work, contact support for help.",
    },
    download: {
      bg: "var(--success-light)",
      color: "#1A7A1E",
      text: "You've successfully downloaded the report.",
    },
  };

  const c = config[type];

  return (
    <div
      className="flex items-center justify-center px-[16px] py-[8px] cursor-pointer"
      style={{ backgroundColor: c.bg }}
      onClick={onDismiss}
    >
      <span style={{ ...bodyStyle, color: c.color, textAlign: "center" }}>{c.text}</span>
    </div>
  );
}

/* ─── DETAILS MODAL ─── */
function DetailsModal({
  onClose,
  matchId,
  markedStatus,
  onMarkTruePositive,
  onSkip,
  onUndo,
  onNavigate,
}: {
  onClose: () => void;
  matchId: string;
  markedStatus: "none" | "marking" | "marked" | "confirmed";
  onMarkTruePositive: () => void;
  onSkip: () => void;
  onUndo: () => void;
  onNavigate: (dir: "prev" | "next") => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Panel */}
      <div
        className="fixed right-0 top-0 bottom-0 z-50 bg-card flex flex-col shadow-2xl"
        style={{ width: 440, maxWidth: "100vw" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-[24px] py-[16px] shrink-0"
          style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--sidebar-dark)" }}
        >
          <p style={{ ...subHeadingStyle, color: "var(--primary-foreground)" }}>
            Details for &ldquo;{matchId}&rdquo;
          </p>
          <button
            onClick={onClose}
            className="p-[4px] bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <X size={20} style={{ color: "var(--primary-foreground)" }} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto relative">
          {/* Navigation arrows */}
          <button
            onClick={() => onNavigate("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-card border-0 cursor-pointer hover:opacity-70"
            style={{ width: 32, height: 40, border: "1px solid var(--border)", borderRadius: "0 var(--radius-sm) var(--radius-sm) 0" }}
          >
            <ChevronLeft size={18} style={{ color: "var(--primary)" }} />
          </button>
          <button
            onClick={() => onNavigate("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-card border-0 cursor-pointer hover:opacity-70"
            style={{ width: 32, height: 40, border: "1px solid var(--border)", borderRadius: "var(--radius-sm) 0 0 var(--radius-sm)" }}
          >
            <ChevronRight size={18} style={{ color: "var(--primary)" }} />
          </button>

          {/* Table */}
          <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
            <thead>
              <tr>
                <th
                  className="text-left"
                  style={{
                    ...tableHeaderStyle,
                    padding: "12px 16px",
                    backgroundColor: "var(--sidebar-dark)",
                    color: "var(--primary-foreground)",
                    position: "sticky",
                    top: 0,
                    zIndex: 5,
                  }}
                >
                  Field
                </th>
                <th
                  className="text-left"
                  style={{
                    ...tableHeaderStyle,
                    padding: "12px 16px",
                    backgroundColor: "var(--sidebar-dark)",
                    color: "var(--primary-foreground)",
                    position: "sticky",
                    top: 0,
                    zIndex: 5,
                  }}
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {recordDetails.map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td
                    style={{
                      ...tableCellStyle,
                      padding: "10px 16px",
                      color: "var(--muted-foreground)",
                      verticalAlign: "top",
                      width: "40%",
                    }}
                  >
                    {r.field}
                  </td>
                  <td style={{ ...tableCellStyle, padding: "10px 16px", verticalAlign: "top" }}>
                    {r.isLink ? (
                      <a
                        href={r.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--primary)", textDecoration: "none" }}
                      >
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer action bar */}
        <div
          className="shrink-0 flex items-center justify-between px-[24px] py-[12px]"
          style={{ backgroundColor: "var(--sidebar-dark)" }}
        >
          {markedStatus === "none" && (
            <>
              <span style={{ ...bodyStyle, color: "var(--primary-foreground)" }}>
                Do you want to mark this record as a true positive?
              </span>
              <div className="flex gap-[8px]">
                <button
                  onClick={onMarkTruePositive}
                  className="px-[24px] py-[8px] rounded-[var(--radius)] border-0 cursor-pointer hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "var(--destructive)",
                    ...buttonTextStyle,
                    color: "var(--primary-foreground)",
                  }}
                >
                  YES
                </button>
                <button
                  onClick={onSkip}
                  className="px-[24px] py-[8px] rounded-[var(--radius)] cursor-pointer hover:opacity-90 transition-opacity bg-transparent"
                  style={{
                    border: "1px solid rgba(255,255,255,0.3)",
                    ...buttonTextStyle,
                    color: "var(--primary-foreground)",
                  }}
                >
                  Skip
                </button>
              </div>
            </>
          )}

          {markedStatus === "marking" && (
            <>
              <span style={{ ...bodyStyle, color: "var(--primary-foreground)" }}>
                Do you want to mark this record as a true positive?
              </span>
              <div className="flex items-center gap-[12px]">
                <span className="flex items-center gap-[4px]" style={{ ...bodyStyle, color: "var(--success-light)" }}>
                  <Check size={16} /> Marked
                </span>
                <button
                  onClick={onUndo}
                  className="px-[24px] py-[8px] rounded-[var(--radius)] cursor-pointer hover:opacity-90 transition-opacity bg-transparent"
                  style={{
                    border: "1px solid rgba(255,255,255,0.3)",
                    ...buttonTextStyle,
                    color: "var(--primary-foreground)",
                  }}
                >
                  Undo
                </button>
              </div>
            </>
          )}

          {markedStatus === "confirmed" && (
            <>
              <span className="flex items-center gap-[6px]" style={{ ...bodyStyle, color: "var(--primary-foreground)" }}>
                <Check size={16} style={{ color: "#4CAF47" }} />
                <span>
                  <span style={{ color: "#4CAF47", fontWeight: 700 }}>Marked as True Positive.</span>{" "}
                  Click &ldquo;Undo&rdquo; if this was a mistake.
                </span>
              </span>
              <button
                onClick={onUndo}
                className="px-[24px] py-[8px] rounded-[var(--radius)] cursor-pointer hover:opacity-90 transition-opacity bg-transparent shrink-0"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  ...buttonTextStyle,
                  color: "var(--primary-foreground)",
                }}
              >
                Undo
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

/* ─── PAGINATION ─── */
function TablePagination({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (p: number) => void }) {
  const pages: (number | "...")[] = [1, 2, 3, "...", totalPages];

  const pBtn: React.CSSProperties = {
    height: 32,
    minWidth: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-sm)",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontFamily: FONT,
    fontFeatureSettings: FEAT,
    fontSize: "var(--text-sm)",
    fontWeight: 500,
    color: "var(--muted-foreground)",
  };

  return (
    <div className="flex items-center justify-center gap-[4px] px-[16px] py-[12px]">
      <button
        style={{ ...pBtn, color: currentPage === 1 ? "var(--border)" : "var(--muted-foreground)" }}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dot-${i}`} style={{ ...pBtn, cursor: "default" }}>…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            style={{
              ...pBtn,
              backgroundColor: p === currentPage ? "var(--primary)" : "var(--muted)",
              color: p === currentPage ? "var(--primary-foreground)" : "var(--muted-foreground)",
              borderRadius: "var(--radius-sm)",
              border: p === currentPage ? "none" : "1px solid var(--border)",
            }}
          >
            {p}
          </button>
        )
      )}
      <button
        style={{ ...pBtn, color: currentPage === totalPages ? "var(--border)" : "var(--foreground)" }}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function AmlCheckPage() {
  const [decision, setDecision] = useState("Pending");
  const [risk, setRisk] = useState("");
  const [assign, setAssign] = useState("");
  const [comments, setComments] = useState("");
  const [activeMetric, setActiveMetric] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [banner, setBanner] = useState<BannerType>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Detail modal state
  const [selectedMatchIdx, setSelectedMatchIdx] = useState<number | null>(null);
  const [markedStatus, setMarkedStatus] = useState<"none" | "marking" | "confirmed">("none");

  const ITEMS_PER_PAGE = 12;
  const totalPages = 10;
  const displayedMatches = allMatches.slice(0, ITEMS_PER_PAGE);

  const handleSave = useCallback(() => {
    if (!risk) return;
    setBanner("success");
    setTimeout(() => setBanner(null), 5000);
  }, [risk]);

  const handleGenerateReport = useCallback(() => {
    if (!risk) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
      return;
    }
    setBanner("download");
    setTimeout(() => setBanner(null), 5000);
  }, [risk]);

  const openDetails = useCallback((idx: number) => {
    setSelectedMatchIdx(idx);
    setMarkedStatus("none");
  }, []);

  const closeDetails = useCallback(() => {
    setSelectedMatchIdx(null);
    setMarkedStatus("none");
  }, []);

  const handleMarkTruePositive = useCallback(() => {
    setMarkedStatus("marking");
    setTimeout(() => setMarkedStatus("confirmed"), 1500);
  }, []);

  const handleSkip = useCallback(() => {
    // Move to next record
    setSelectedMatchIdx((prev) => (prev !== null ? Math.min(prev + 1, displayedMatches.length - 1) : null));
    setMarkedStatus("none");
  }, [displayedMatches.length]);

  const handleUndo = useCallback(() => {
    setMarkedStatus("none");
  }, []);

  const handleNavigateDetail = useCallback(
    (dir: "prev" | "next") => {
      setSelectedMatchIdx((prev) => {
        if (prev === null) return null;
        const next = dir === "prev" ? prev - 1 : prev + 1;
        return Math.max(0, Math.min(next, displayedMatches.length - 1));
      });
      setMarkedStatus("none");
    },
    [displayedMatches.length]
  );

  const isReportDisabled = !risk;

  return (
    <div className="bg-background flex flex-col w-full min-h-full" style={{ fontFamily: FONT }}>
      {/* Page header */}
      <div className="bg-card relative w-full">
        <div className="px-[16px] pt-[6px] pb-[2px]">
          <Breadcrumb />
        </div>
        <div className="flex items-center justify-between px-[16px] py-[8px] gap-[12px]">
          <p style={pageTitleStyle}>Details for Case ID – RE4NL2I3</p>

          {/* Generate Report */}
          <div className="relative">
            <button
              onClick={handleGenerateReport}
              onMouseEnter={() => isReportDisabled && setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex items-center justify-center px-[24px] rounded-[var(--radius)] shrink-0 cursor-pointer border-0 hover:opacity-90 transition-opacity"
              style={{
                height: 36,
                backgroundColor: isReportDisabled ? "rgba(23,102,214,0.12)" : "var(--primary)",
                ...buttonTextStyle,
                color: isReportDisabled ? "rgba(23,102,214,0.6)" : "var(--primary-foreground)",
              }}
            >
              Generate Report
            </button>

            {/* Tooltip */}
            {showTooltip && isReportDisabled && (
              <div
                className="absolute top-[calc(100%+6px)] right-0 z-30 px-[16px] py-[8px] rounded-[var(--radius)] whitespace-nowrap"
                style={{
                  backgroundColor: "var(--sidebar-dark)",
                  ...bodyStyle,
                  color: "var(--primary-foreground)",
                  boxShadow: "var(--elevation-sm)",
                }}
              >
                Select Risk in Case decision for generating report.
              </div>
            )}
          </div>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
      </div>

      {/* Banner */}
      <NotificationBanner type={banner} onDismiss={() => setBanner(null)} />

      {/* Content */}
      <div className="flex flex-col gap-[16px] px-[16px] py-[16px] overflow-y-auto flex-1" style={{ maxWidth: 1264, margin: "0 auto", width: "100%" }}>
        {/* ── Case Input + Case Decision ── */}
        <div className="flex gap-[16px] w-full">
          {/* Case Input */}
          <div className="bg-card flex-1 rounded-[var(--radius)] overflow-clip p-[16px] flex flex-col gap-[12px]" style={{ border: "1px solid var(--border)" }}>
            <span style={subHeadingStyle}>Case Input</span>
            <div className="flex flex-col gap-[6px]">
              <InfoRow label="NAME" value={caseInput.name} />
              <InfoRow label="ENTITY TYPE" value={caseInput.entityType} />
              <InfoRow label="BIRTH YEAR" value={caseInput.birthYear} />
              <div className="flex items-center gap-[4px]">
                <span className="shrink-0 whitespace-pre-wrap" style={{ ...labelStyle, width: 132 }}>CATEGORIES</span>
                <div className="flex gap-[4px] flex-wrap">
                  {caseInput.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-[10px] rounded-[var(--radius-sm)]"
                      style={{
                        height: 24,
                        backgroundColor: "var(--sidebar-dark)",
                        ...chipTextStyle,
                        color: "var(--primary-foreground)",
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Decision */}
          <div className="bg-card flex-[1.4] rounded-[var(--radius)] overflow-clip p-[16px] flex flex-col gap-[12px]" style={{ border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between">
              <span style={subHeadingStyle}>Case Decision</span>
              <button
                onClick={handleSave}
                className="flex items-center justify-center px-[24px] rounded-[var(--radius)] shrink-0 cursor-pointer bg-card hover:opacity-80 transition-opacity"
                style={{
                  height: 32,
                  border: "1px solid var(--primary)",
                  ...buttonTextStyle,
                  color: "var(--primary)",
                }}
              >
                Save
              </button>
            </div>

            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[4px]">
                <span style={labelStyle}>Decision</span>
                <SelectDropdown
                  value={decision}
                  onChange={setDecision}
                  options={["Pending", "Approved", "Rejected"]}
                  placeholder="Select"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <span style={labelStyle}>
                  Risk<span style={{ color: "var(--destructive)" }}>*</span>
                </span>
                <SelectDropdown
                  value={risk}
                  onChange={setRisk}
                  options={["No Risk Selected", "High Risk", "Medium Risk", "Low Risk"]}
                  placeholder="No Risk Selected"
                  dangerValue="High Risk"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <span style={labelStyle}>Assign</span>
                <SelectDropdown value={assign} onChange={setAssign} options={["User A", "User B", "User C"]} placeholder="Select" />
              </div>
              <div className="flex flex-col gap-[4px]">
                <span style={labelStyle}>Comments</span>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Type your comment here ..."
                  rows={1}
                  className="w-full rounded-[var(--radius)] px-[12px] py-[10px] resize-none bg-card"
                  style={{
                    border: "1px solid var(--border)",
                    ...bodyStyle,
                    color: "var(--foreground)",
                    outline: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Screening Matches ── */}
        <div className="bg-card rounded-[var(--radius)] overflow-hidden flex flex-col">
          <div className="px-[16px] py-[12px]">
            <span style={sectionHeadingStyle}>Screening Matches</span>
          </div>

          {/* Metrics */}
          <div className="flex gap-[16px] px-[16px] py-[8px]">
            {screeningMetrics.map((m, i) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                color={m.color}
                active={i === activeMetric}
              />
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto mt-[8px]">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Entity name", "Id details", "Birth year", "Category", "Match Type", "Status", ""].map((col, i) => (
                    <th
                      key={i}
                      className="text-left"
                      style={{
                        ...tableHeaderStyle,
                        padding: "12px 8px",
                        paddingLeft: i === 0 ? 16 : 8,
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedMatches.map((m, idx) => (
                  <tr key={m.id} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "12px 8px", paddingLeft: 16 }}>{m.entityName}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 8px" }}>{m.idDetails}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 8px" }}>{m.birthYear}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 8px" }}>{m.category}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 8px" }}>{m.matchType}</td>
                    <td style={{ padding: "8px" }}>
                      <StatusBadge status={m.status} />
                    </td>
                    <td style={{ padding: "8px" }}>
                      <ViewDetailsBtn onClick={() => openDetails(idx)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>

      {/* ── Details Modal ── */}
      {selectedMatchIdx !== null && (
        <DetailsModal
          onClose={closeDetails}
          matchId="2W6IR17E23"
          markedStatus={markedStatus}
          onMarkTruePositive={handleMarkTruePositive}
          onSkip={handleSkip}
          onUndo={handleUndo}
          onNavigate={handleNavigateDetail}
        />
      )}
    </div>
  );
}