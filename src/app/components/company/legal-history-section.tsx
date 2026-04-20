import { useState } from "react";
import {
  FONT,
  FEAT,
  sectionHeadingStyle,
  cardTitleStyle,
  subHeadingStyle,
  bodyStyle,
  labelStyle,
  chipTextStyle,
  tableHeaderStyle,
  tableCellStyle,
} from "../typography";
import { Pagination, RiskBadge, CollapsibleSection } from "./shared";
import { Copy } from "lucide-react";

/* ─── MOCK DATA ─── */
const entityRecords = Array.from({ length: 5 }, (_, i) => ({
  cinNo: "03AAAC15950L...",
  caseType: "Criminal",
  courtType: "Magistrate Court",
  severity: "Income Tax violations",
  risk: "high" as const,
  caseStatus: "Disposed",
}));

const directors = [
  { name: "Reshma", count: 10 },
  { name: "Rajesh Kanubhai Shah", count: 2 },
  { name: "Rajesh Kanubhai Shah", count: null, note: "no record" },
  { name: "Priti Rajesh", count: 2 },
];

const directorRecords = Array.from({ length: 5 }, () => ({
  cinNo: "03AAAC15950L...",
  caseType: "Criminal",
  courtType: "Magistrate Court",
  severity: "Income Tax violations",
  risk: "high" as const,
  caseStatus: "Disposed",
}));

/* ─── Record Table ─── */
function RecordTable({ records, page, totalPages, onPageChange }: {
  records: typeof entityRecords;
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  const columns = ["CIN No", "Case Type", "Court Type", "Severity", "Risk", "Case Status", "Action"];
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "12px 16px", borderBottom: "1px solid var(--border)", whiteSpace: "nowrap" }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ ...tableCellStyle, padding: "12px 16px" }}>
                  <span className="flex items-center gap-[4px]">
                    {r.cinNo}
                    <Copy size={14} style={{ color: "var(--muted-foreground)", cursor: "pointer" }} />
                  </span>
                </td>
                <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{r.caseType}</td>
                <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{r.courtType}</td>
                <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{r.severity}</td>
                <td style={{ padding: "12px 16px" }}><RiskBadge level={r.risk} /></td>
                <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{r.caseStatus}</td>
                <td style={{ padding: "12px 16px" }}>
                  <span style={{ ...bodyStyle, color: "var(--primary)", cursor: "pointer" }}>View Details</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} onPageChange={onPageChange} />}
    </div>
  );
}

/* ─── No Cases Placeholder ─── */
function NoCases({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-[32px] gap-[8px]">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="var(--muted)" />
        <path d="M14 16H26M14 20H22M14 24H18" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span style={{ ...bodyStyle, color: "var(--muted-foreground)", textAlign: "center" }}>{message}</span>
    </div>
  );
}

/* ─── Director Tabs + Table ─── */
function DirectorRecordsSection({ directorIndex: initialDir = 0, showNoRecordState = false, showErrorState = false }: {
  directorIndex?: number;
  showNoRecordState?: boolean;
  showErrorState?: boolean;
}) {
  const [activeDir, setActiveDir] = useState(initialDir);
  const [page, setPage] = useState(1);

  return (
    <CollapsibleSection title="Director Records">
      {/* Director tabs */}
      <div className="flex items-center gap-[12px] px-[16px] py-[8px] flex-wrap" style={{ borderBottom: "1px solid var(--border)" }}>
        {directors.map((d, i) => {
          const isActive = i === activeDir;
          const label = `${i + 1}. ${d.name}${d.count !== null ? ` (${d.count})` : d.note ? ` ( ${d.note})` : ""}`;
          return (
            <button
              key={i}
              onClick={() => { setActiveDir(i); setPage(1); }}
              className="border-0 bg-transparent cursor-pointer px-[8px] py-[4px] rounded-[var(--radius-sm)]"
              style={{
                ...bodyStyle,
                color: isActive ? "var(--primary)" : "var(--muted-foreground)",
                borderBottom: isActive ? "2px solid var(--primary)" : "2px solid transparent",
                backgroundColor: isActive ? "rgba(23,102,214,0.08)" : "transparent",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Content based on director */}
      {activeDir === 2 ? (
        <NoCases message="No cases against director" />
      ) : activeDir === 3 && showErrorState ? (
        <div className="flex flex-col items-center justify-center py-[32px] gap-[8px]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="var(--warning-light)" />
            <circle cx="20" cy="20" r="8" fill="var(--warning)" />
          </svg>
          <span style={{ ...bodyStyle, color: "var(--muted-foreground)", textAlign: "center" }}>
            Cases may exist, we are unable to fetch at<br />this moment.
          </span>
        </div>
      ) : (
        <RecordTable records={directorRecords} page={page} totalPages={10} onPageChange={setPage} />
      )}
    </CollapsibleSection>
  );
}

/* ─── Main export ─── */
export default function LegalHistorySection() {
  const [entityPage, setEntityPage] = useState(1);

  return (
    <div id="legal-history" className="flex flex-col gap-[20px]">
      <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>Legal History</h2>

      {/* Entity Records */}
      <CollapsibleSection title="Entity Records">
        <RecordTable records={entityRecords} page={entityPage} totalPages={10} onPageChange={setEntityPage} />
      </CollapsibleSection>

      {/* Director Records */}
      <DirectorRecordsSection directorIndex={0} />

      {/* Jump to Income */}
      <div className="flex justify-center py-[8px]">
        <button className="flex items-center gap-[6px] px-[16px] py-[8px] rounded-[var(--radius)] bg-card border border-border cursor-pointer hover:bg-muted transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M7 13L13 7M7 13L1 7" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={bodyStyle}>Income</span>
        </button>
      </div>
    </div>
  );
}

/* ─── AML Section (for separate AML nav) ─── */
export function AMLSection() {
  const [entityPage, setEntityPage] = useState(1);
  const entityRecs = entityRecords.slice(0, 2);

  return (
    <div id="aml" className="flex flex-col gap-[20px]">
      <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>AML</h2>

      <CollapsibleSection title="Entity Records">
        <RecordTable records={entityRecs} page={entityPage} totalPages={1} onPageChange={setEntityPage} />
      </CollapsibleSection>

      <CollapsibleSection title="Director Records">
        <NoCases message="No cases against Directors" />
      </CollapsibleSection>
    </div>
  );
}