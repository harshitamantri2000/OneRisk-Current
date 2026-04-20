import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FONT,
  FEAT,
  tableHeaderStyle,
  tableCellStyle,
  bodyStyle,
  chipTextStyle,
} from "../typography";

/* ─── Pagination ─── */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  const pages: (number | "...")[] = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1, 2, 3, "...", totalPages);
  }

  const btn: React.CSSProperties = {
    height: 28,
    minWidth: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--border)",
    backgroundColor: "var(--card)",
    cursor: "pointer",
    fontFamily: FONT,
    fontFeatureSettings: FEAT,
    fontSize: "var(--text-sm)",
    fontWeight: 500,
    color: "var(--foreground)",
    padding: "0 4px",
  };

  return (
    <div className="flex items-center gap-[4px] px-[16px] py-[12px]">
      <button
        style={{ ...btn, color: currentPage === 1 ? "var(--border)" : "var(--foreground)" }}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={14} />
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dot-${i}`} style={{ ...btn, cursor: "default", border: "none" }}>
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            style={{
              ...btn,
              backgroundColor: p === currentPage ? "var(--primary)" : "var(--card)",
              color: p === currentPage ? "var(--primary-foreground)" : "var(--foreground)",
              borderColor: p === currentPage ? "var(--primary)" : "var(--border)",
            }}
          >
            {p}
          </button>
        )
      )}
      <button
        style={{ ...btn, color: currentPage === totalPages ? "var(--border)" : "var(--foreground)" }}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

/* ─── Risk badge ─── */
export function RiskBadge({ level }: { level: "high" | "medium" | "low" }) {
  const cfg = {
    high: { bg: "var(--destructive)", label: "High Risk" },
    medium: { bg: "var(--warning)", label: "Medium Risk" },
    low: { bg: "var(--risk-low)", label: "Low Risk" },
  };
  const c = cfg[level];
  return (
    <span
      className="inline-flex items-center justify-center px-[8px] rounded-[20px] shrink-0 whitespace-nowrap"
      style={{ height: 24, backgroundColor: c.bg, ...chipTextStyle, color: "var(--primary-foreground)" }}
    >
      {c.label}
    </span>
  );
}

/* ─── Collapsible section ─── */
export function CollapsibleSection({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-card rounded-[var(--radius)] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-[16px] py-[12px] border-0 bg-transparent cursor-pointer"
      >
        <span style={{ ...bodyStyle, fontWeight: 600, fontSize: "var(--text-md)" }}>{title}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
          <path d="M5 8L10 13L15 8" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && children}
    </div>
  );
}

/* ─── Data table ─── */
export function DataTable({
  columns,
  rows,
  page = 1,
  totalPages = 1,
  onPageChange,
}: {
  columns: string[];
  rows: (string | React.ReactNode)[][];
  page?: number;
  totalPages?: number;
  onPageChange?: (p: number) => void;
}) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="text-left"
                  style={{
                    ...tableHeaderStyle,
                    padding: "12px 16px",
                    borderBottom: "1px solid var(--border)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: "1px solid var(--border)" }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{ ...tableCellStyle, padding: "12px 16px" }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && onPageChange && <Pagination currentPage={page} totalPages={totalPages} onPageChange={onPageChange} />}
    </div>
  );
}
