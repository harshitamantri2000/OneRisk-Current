import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  X,
} from "lucide-react";
import {
  FONT,
  FEAT,
  pageTitleStyle,
  cardTitleStyle,
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

type RiskLevel = "high" | "medium" | "low";

interface CaseRecord {
  id: number;
  risk: RiskLevel;
  petitioner: string;
  respondent: string;
  respondentAddress: string;
  court: string;
  actSection: string;
  caseYear: number;
  type: string;
  status: string;
  nextStage: string;
  riskSummary: string;
  orderSummary: string;
  category: string;
}

const allCases: CaseRecord[] = [
  {
    id: 1, risk: "high", petitioner: "Muskib Khalid Thakur PN Pstn.",
    respondent: "Siddharth @ Siddhu Ashok Ahire",
    respondentAddress: "Chawl No. 41 - 276, Ramabai Ambedkar NagarVasantrao Naik Road, Ghatkopar - W Mumbai",
    court: "Additional Metropolitan Magistrate, Vikroli, Mumbai",
    actSection: "U/S 143, 144, 147, 148, 149, 324, 506,",
    caseYear: 2010, type: "Criminal",
    status: "Pending (Next Hearing Date - 29/ 01/2024)",
    nextStage: "For Statement of accused U/313 Cr.p.c.)",
    riskSummary: "The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon. If convicted, they could face up.",
    orderSummary: "The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon.",
    category: "Serious criminal offences",
  },
  {
    id: 2, risk: "medium", petitioner: "Muskib Khalid Thakur PN Pstn.",
    respondent: "Siddharth @ Siddhu Ashok Ahire",
    respondentAddress: "Chawl No. 41 - 276, Ramabai Ambedkar NagarVasantrao Naik Road, Ghatkopar - W Mumbai",
    court: "Additional Metropolitan Magistrate, Vikroli, Mumbai",
    actSection: "U/S 143, 144, 147, 148, 149, 324, 506,",
    caseYear: 2010, type: "Criminal",
    status: "Pending (Next Hearing Date - 29/ 01/2024)",
    nextStage: "For Statement of accused U/313 Cr.p.c.)",
    riskSummary: "The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon. If convicted, they could face up.",
    orderSummary: "The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon.",
    category: "Serious criminal offences",
  },
  {
    id: 3, risk: "low", petitioner: "Muskib Khalid Thakur PN Pstn.",
    respondent: "Siddharth @ Siddhu Ashok Ahire",
    respondentAddress: "Chawl No. 41 - 276, Ramabai Ambedkar NagarVasantrao Naik Road, Ghatkopar - W Mumbai",
    court: "Additional Metropolitan Magistrate, Vikroli, Mumbai",
    actSection: "U/S 143, 144, 147, 148, 149, 324, 506,",
    caseYear: 2010, type: "Criminal",
    status: "Pending (Next Hearing Date - 29/ 01/2024)",
    nextStage: "For Statement of accused U/313 Cr.p.c.)",
    riskSummary: "The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon. If convicted, they could face up.",
    orderSummary: "The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon.",
    category: "Civil matters",
  },
  ...Array.from({ length: 27 }, (_, i) => ({
    id: i + 4,
    risk: (["high", "medium", "low"] as RiskLevel[])[i % 3],
    petitioner: "Muskib Khalid Thakur PN Pstn.",
    respondent: "Siddharth @ Siddhu Ashok Ahire",
    respondentAddress: "Chawl No. 41 - 276, Ramabai Ambedkar NagarVasantrao Naik Road, Ghatkopar - W Mumbai",
    court: "Additional Metropolitan Magistrate, Vikroli, Mumbai",
    actSection: "U/S 143, 144, 147, 148, 149, 324, 506,",
    caseYear: [2023, 2024, 2025][i % 3],
    type: "Criminal",
    status: "Pending (Next Hearing Date - 29/ 01/2024)",
    nextStage: "For Statement of accused U/313 Cr.p.c.)",
    riskSummary: "The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon. If convicted, they could face up.",
    orderSummary: "The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon.",
    category: (["Serious criminal offences", "Civil matters", "Financial Offences"] as string[])[i % 3],
  })),
];

const categoryOptions = ["Serious criminal offences", "Financial Offences", "Statutory & regulatory matters", "Civil matters", "Other matters"];
const yearOptions = [2025, 2024, 2023, 2022, 2021, 2020];

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

/* ─── RISK CHIP ─── */
function RiskChip({ risk }: { risk: RiskLevel }) {
  const config = {
    high: { bg: "var(--destructive-light)", color: "var(--destructive)", label: "High" },
    medium: { bg: "var(--warning-light)", color: "var(--warning)", label: "Medium" },
    low: { bg: "var(--success-light)", color: "var(--risk-low)", label: "Low" },
  };
  const c = config[risk];
  return (
    <span
      className="inline-flex items-center px-[10px] py-[3px] rounded-[12px]"
      style={{ ...chipTextStyle, backgroundColor: c.bg, color: c.color }}
    >
      {c.label}
    </span>
  );
}

/* ─── FILTER CHIP ─── */
function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span
      className="inline-flex items-center gap-[6px] px-[12px] py-[6px] rounded-[20px] cursor-default"
      style={{ backgroundColor: "var(--foreground)", ...chipTextStyle, color: "var(--primary-foreground)" }}
    >
      {label}
      <button
        onClick={onRemove}
        className="border-0 bg-transparent cursor-pointer p-0 flex items-center justify-center"
        style={{ color: "var(--primary-foreground)" }}
      >
        <X size={14} />
      </button>
    </span>
  );
}

/* ─── SELECT DROPDOWN ─── */
function SelectDropdown({
  placeholder,
  options,
  onSelect,
}: {
  placeholder: string;
  options: (string | number)[];
  onSelect: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between gap-[8px] px-[12px] py-[8px] rounded-[var(--radius-sm)] border bg-card cursor-pointer min-w-[160px]"
        style={{ borderColor: "var(--border)", ...bodyStyle, color: "var(--muted-foreground)" }}
      >
        <span>{placeholder}</span>
        <ChevronDown size={16} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-[calc(100%+4px)] z-50 min-w-[180px] rounded-[var(--radius)] bg-card border border-border py-[4px]"
          style={{ boxShadow: "var(--elevation-sm)" }}
        >
          {options.map((opt) => (
            <button
              key={String(opt)}
              onClick={() => { onSelect(String(opt)); setOpen(false); }}
              className="flex items-center w-full px-[12px] py-[8px] border-0 bg-transparent cursor-pointer hover:bg-muted transition-colors"
              style={{ ...bodyStyle, color: "var(--foreground)" }}
            >
              {String(opt)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── CASE CARD ─── */
function CaseCard({ caseRecord, index }: { caseRecord: CaseRecord; index: number }) {
  return (
    <div className="rounded-[var(--radius)] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
      {/* Header */}
      <div className="px-[16px] py-[8px]" style={{ backgroundColor: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
        <span style={{ ...tableHeaderStyle, color: "var(--foreground)" }}>{index}. Case Number</span>
      </div>
      {/* Rows */}
      <div className="flex flex-col">
        <CaseRow label="Risk"><RiskChip risk={caseRecord.risk} /></CaseRow>
        <CaseRow label="Petitioner">{caseRecord.petitioner}</CaseRow>
        <CaseRow label="Respondent">
          <div>
            <span>{caseRecord.respondent}</span>
            <br />
            <span style={{ color: "var(--muted-foreground)" }}>Address: {caseRecord.respondentAddress}</span>
          </div>
        </CaseRow>
        <CaseRow label="Case details">
          <div className="flex flex-col gap-[2px]">
            <span>Court: {caseRecord.court}</span>
            <span>Act & Section: {caseRecord.actSection}</span>
            <span>Case Year: {caseRecord.caseYear}</span>
            <span>Type: {caseRecord.type}</span>
          </div>
        </CaseRow>
        <CaseRow label="Status">
          <div>
            <span>{caseRecord.status}</span>
            <br />
            <span style={{ color: "var(--muted-foreground)" }}>({caseRecord.nextStage}</span>
          </div>
        </CaseRow>
        <CaseRow label="Risk Summary">{caseRecord.riskSummary}</CaseRow>
        <CaseRow label="Order Summary">{caseRecord.orderSummary}</CaseRow>
      </div>
    </div>
  );
}

function CaseRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start px-[16px] py-[10px]" style={{ borderBottom: "1px solid var(--border)" }}>
      <span className="shrink-0" style={{ ...labelStyle, color: "var(--muted-foreground)", width: 130 }}>{label}</span>
      <div style={{ ...bodyStyle, color: "var(--foreground)", flex: 1 }}>{children}</div>
    </div>
  );
}

/* ─── PRIMARY ENTITY INFO (collapsed) ─── */
function PrimaryEntityInfo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-card rounded-[12px] overflow-hidden px-[16px] py-[8px]">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-[5px] border-0 bg-transparent cursor-pointer p-0 w-full"
      >
        <span style={cardTitleStyle}>Primary Entity Information</span>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {expanded && (
        <div className="flex flex-col gap-[6px] mt-[16px]">
          <InfoRow label="CIN" value="U74900MH2011PTC291275" />
          <InfoRow label="DOB" value="20/10/1998" />
          <InfoRow label="FATHER'S NAME" value="Ramehs Kumar" />
          <InfoRow label="ADDRESS" value="8th Floor, Skyline Icon, Andheri Kurla Road, Chimatpada, Marol, Andheri East, mumbai, Maharashtra 400059" />
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

/* ─── PAGINATION ─── */
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const visiblePages = useMemo(() => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3, "...", totalPages);
    }
    return pages;
  }, [totalPages]);

  const btnBase = "flex items-center justify-center border border-border rounded-[var(--radius-sm)] bg-card cursor-pointer disabled:opacity-40";
  const btnSize = { width: 28, height: 28 };

  return (
    <div className="flex items-center justify-start gap-[4px] px-[16px] py-[12px]">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1} className={btnBase} style={btnSize}>
        <ChevronLeft size={14} /><ChevronLeft size={14} style={{ marginLeft: -8 }} />
      </button>
      <button onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className={btnBase} style={btnSize}>
        <ChevronLeft size={14} />
      </button>
      {visiblePages.map((p, i) =>
        p === "..." ? (
          <span key={`dot-${i}`} className="flex items-center justify-center text-muted-foreground" style={{ ...btnSize, fontFamily: FONT, fontSize: "var(--text-sm)" }}>…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            className="flex items-center justify-center rounded-[var(--radius-sm)] border cursor-pointer"
            style={{
              ...btnSize,
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              fontWeight: 500,
              backgroundColor: p === currentPage ? "var(--primary)" : "var(--card)",
              color: p === currentPage ? "var(--primary-foreground)" : "var(--foreground)",
              borderColor: p === currentPage ? "var(--primary)" : "var(--border)",
            }}
          >
            {p}
          </button>
        )
      )}
      <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className={btnBase} style={btnSize}>
        <ChevronRight size={14} />
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className={btnBase} style={btnSize}>
        <ChevronRight size={14} /><ChevronRight size={14} style={{ marginLeft: -8 }} />
      </button>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function CrimeCheckDetails() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Serious criminal offences"]);
  const [selectedYears, setSelectedYears] = useState<string[]>(["2025"]);

  const addCategory = (cat: string) => {
    if (!selectedCategories.includes(cat)) setSelectedCategories((prev) => [...prev, cat]);
  };
  const removeCategory = (cat: string) => setSelectedCategories((prev) => prev.filter((c) => c !== cat));
  const addYear = (year: string) => {
    if (!selectedYears.includes(year)) setSelectedYears((prev) => [...prev, year]);
  };
  const removeYear = (year: string) => setSelectedYears((prev) => prev.filter((y) => y !== year));
  const resetAll = () => { setSelectedCategories([]); setSelectedYears([]); };

  // Filter
  const filtered = useMemo(() => {
    let result = allCases;
    if (selectedCategories.length > 0) {
      result = result.filter((c) => selectedCategories.includes(c.category));
    }
    if (selectedYears.length > 0) {
      result = result.filter((c) => selectedYears.includes(String(c.caseYear)));
    }
    return result;
  }, [selectedCategories, selectedYears]);

  const pageSize = 3;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageCases = filtered.slice((page - 1) * pageSize, page * pageSize);
  const hasFilters = selectedCategories.length > 0 || selectedYears.length > 0;

  return (
    <div className="bg-background flex flex-col w-full min-h-full" style={{ fontFamily: FONT }}>
      {/* Header */}
      <div className="bg-card relative w-full">
        <div className="px-[16px] pt-[6px] pb-[2px]">
          <Breadcrumb />
        </div>
        <div className="flex items-center justify-between px-[16px] py-[8px] gap-[12px]">
          <div className="flex items-center gap-[10px]">
            <button
              onClick={() => navigate("/crime-check")}
              className="shrink-0 flex items-center justify-center border-0 bg-transparent cursor-pointer p-0 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <p style={pageTitleStyle}>Detailed cases for Aditya Rajesh</p>
          </div>
          <button
            className="flex items-center justify-center px-[24px] rounded-[var(--radius)] shrink-0 cursor-pointer border-0 hover:opacity-90 transition-opacity"
            style={{ height: "36px", backgroundColor: "var(--primary)", ...buttonTextStyle, color: "var(--primary-foreground)" }}
          >
            Download Report
          </button>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[16px] px-[16px] py-[16px] overflow-y-auto flex-1" style={{ maxWidth: 1264, margin: "0 auto", width: "100%" }}>
        <PrimaryEntityInfo />

        {/* Case Details */}
        <div className="bg-card rounded-[var(--radius)] border border-border overflow-hidden p-[16px]">
          <p style={cardTitleStyle} className="mb-[16px]">Case Details</p>

          {/* Filters */}
          <div className="flex items-center gap-[12px] mb-[16px]">
            <SelectDropdown
              placeholder="Select Category"
              options={categoryOptions.filter((c) => !selectedCategories.includes(c))}
              onSelect={addCategory}
            />
            <SelectDropdown
              placeholder="Select Year"
              options={yearOptions.filter((y) => !selectedYears.includes(String(y)))}
              onSelect={addYear}
            />
          </div>

          {/* Active filter chips */}
          {hasFilters && (
            <div className="flex items-center flex-wrap gap-[8px] mb-[16px]">
              {selectedCategories.map((c) => (
                <FilterChip key={c} label={c} onRemove={() => removeCategory(c)} />
              ))}
              {selectedYears.map((y) => (
                <FilterChip key={y} label={y} onRemove={() => removeYear(y)} />
              ))}
              <button
                onClick={resetAll}
                className="flex items-center justify-center px-[16px] py-[6px] rounded-[20px] cursor-pointer border-0"
                style={{ backgroundColor: "var(--foreground)", ...chipTextStyle, color: "var(--primary-foreground)" }}
              >
                Reset All
              </button>
            </div>
          )}

          {/* Case list */}
          <div className="flex flex-col gap-[16px]">
            {pageCases.length > 0 ? (
              pageCases.map((c, i) => (
                <CaseCard key={c.id} caseRecord={c} index={(page - 1) * pageSize + i + 1} />
              ))
            ) : (
              <div className="flex items-center justify-center py-[40px]">
                <p style={{ ...bodyStyle, color: "var(--muted-foreground)" }}>No cases match the selected filters.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          )}
        </div>
      </div>
    </div>
  );
}
