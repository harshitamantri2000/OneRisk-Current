import { useState } from "react";
import { ChevronRight, Car, User, AlertTriangle, Scale, FileText } from "lucide-react";
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

const vehicleDetails = {
  manufacturer: "Daimler India Commercial Vehicles Pvt. Ltd",
  model: "BHARATBENZ 3528C 8X4 BSVI - 5",
  vehicleType: "Heavy Goods Vehicle(HGV)",
  financier: "HDFC Bank Ltd",
  insurer: "Not Available",
};

const ownershipDetails = {
  ownerDetails: [
    "a. Name: Mrs. Majida Mol, Propretix",
    "b. Address: 8th Floor, Skyline Icon, Marol, Andheri East,mumbai, Maharashtra 400059",
  ],
  ownershipTransfers: "3",
  lastOwnershipTransfer: "20 Aug'28",
};

const complianceData = {
  insuranceExpiry: "20 Aug'28",
  permitExpiry: "23 Jan'28",
  puccExpiry: "20 Oct'24",
};

const blacklistData = {
  isBlacklisted: true,
  lockedBy: "ALAPPUZHA RTO, Kerala",
  date: "20",
  reason: "unknown",
};

type LegalCase = {
  id: number;
  caseType: string;
  caseNumber: string;
  year: number;
  category: string;
  status: "Pending" | "Disposed";
};

const legalCases: LegalCase[] = [
  { id: 1, caseType: "Ashiq Ahmed Nengroo", caseNumber: "AGJPW5119K (PAN)", year: 2001, category: "Road Accidents", status: "Pending" },
  { id: 2, caseType: "Ashiq Ahmed Nengroo", caseNumber: "AGJPW5119K (PAN)", year: 2001, category: "Theft/Seized", status: "Disposed" },
  { id: 3, caseType: "Ashiq Ahmed Nengroo", caseNumber: "AGJPW5119K (PAN)", year: 2001, category: "Theft/Seized", status: "Disposed" },
  { id: 4, caseType: "Ashiq Ahmed Nengroo", caseNumber: "AGJPW5119K (PAN)", year: 2001, category: "Theft/Seized", status: "Disposed" },
  { id: 5, caseType: "Ashiq Ahmed Nengroo", caseNumber: "AGJPW5119K (PAN)", year: 2001, category: "Road Accidents", status: "Pending" },
  { id: 6, caseType: "Ashiq Ahmed Nengroo", caseNumber: "AGJPW5119K (PAN)", year: 2001, category: "Road Accidents", status: "Pending" },
];

type ChallanCase = {
  id: number;
  challanNumber: string;
  fillingDate: string;
  offenseDetails: string;
  amount: string;
  status: "Pending" | "Disposed";
};

const challanCases: ChallanCase[] = [
  { id: 1, challanNumber: "KL62913240513150816", fillingDate: "15/06/2022", offenseDetails: "Over Speeding", amount: "₹500", status: "Pending" },
  { id: 2, challanNumber: "Ashiq Ahmed Nengroo", fillingDate: "20/11/2022", offenseDetails: "Red Light Jump", amount: "₹1,000", status: "Disposed" },
  { id: 3, challanNumber: "Ashiq Ahmed Nengroo", fillingDate: "20/11/2022", offenseDetails: "Red Light Jump", amount: "₹1,000", status: "Disposed" },
  { id: 4, challanNumber: "Ashiq Ahmed Nengroo", fillingDate: "20/11/2022", offenseDetails: "Red Light Jump", amount: "₹1,000", status: "Disposed" },
];

const legalMetrics = [
  { label: "All Cases", value: "100", highlight: false, color: "var(--primary)" },
  { label: "Road Accidents", value: "20", highlight: true, color: "var(--destructive)" },
  { label: "Theft/ Seized", value: "0", highlight: false, color: "var(--foreground)" },
  { label: "Traffic Violations", value: "5", highlight: false, color: "var(--foreground)" },
  { label: "Other Cases", value: "0", highlight: false, color: "var(--foreground)" },
];

const challanMetrics = [
  { label: "Total Challan", value: "4", color: "var(--foreground)" },
  { label: "Total Amount", value: "₹3,700", color: "var(--foreground)" },
  { label: "Pending Challan", value: "2", color: "var(--destructive)" },
  { label: "Pending Amount", value: "₹3,000", color: "var(--foreground)" },
];

/* ─── BREADCRUMB ─── */
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-[2px]" aria-label="Breadcrumb">
      {["Search Terminal", "VehiClear Search", "Details for Vehicle"].map((item, i, arr) => (
        <span key={i} className="flex items-center gap-[2px]">
          {i > 0 && <ChevronRight size={14} style={{ color: "var(--muted-foreground)" }} />}
          <span style={i === arr.length - 1 ? breadcrumbActiveStyle : breadcrumbStyle}>{item}</span>
        </span>
      ))}
    </nav>
  );
}

/* ─── STATUS BADGE ─── */
function StatusBadge({ status, label }: { status: "pending" | "disposed" | "expired" | "warning" | "blacklisted"; label: string }) {
  const styles: Record<string, { bg: string; color: string }> = {
    pending: { bg: "var(--destructive)", color: "var(--primary-foreground)" },
    disposed: { bg: "rgba(19, 26, 37, 0.1)", color: "var(--foreground)" },
    expired: { bg: "var(--destructive-light)", color: "var(--destructive)" },
    warning: { bg: "var(--warning-light)", color: "var(--warning)" },
    blacklisted: { bg: "var(--destructive-light)", color: "var(--destructive)" },
  };
  const s = styles[status];
  return (
    <span
      className="inline-flex items-center px-[12px] rounded-[20px] shrink-0 whitespace-nowrap"
      style={{ height: 28, backgroundColor: s.bg, ...chipTextStyle, color: s.color }}
    >
      {label}
    </span>
  );
}

/* ─── VIEW DETAILS BUTTON ─── */
function ViewDetailsBtn() {
  return (
    <button
      className="flex items-center justify-center px-[24px] rounded-[var(--radius-sm)] shrink-0 cursor-pointer bg-card hover:opacity-80 transition-opacity"
      style={{ height: 28, border: "1px solid var(--primary)", ...buttonTextStyle, color: "var(--primary)" }}
    >
      View Details
    </button>
  );
}

/* ─── INFO ROW ─── */
function InfoRow({ label, value, labelWidth = 196 }: { label: string; value: string; labelWidth?: number }) {
  return (
    <div className="flex items-start gap-[4px]">
      <span className="shrink-0 whitespace-pre-wrap" style={{ ...labelStyle, width: labelWidth }}>{label}</span>
      <span style={{ ...bodyStyle, color: "var(--foreground)" }}>{value}</span>
    </div>
  );
}

/* ─── METRICS CARD ─── */
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
      <span style={{ fontFamily: FONT, fontSize: "var(--text-xl)", fontWeight: 700, lineHeight: 1.4, letterSpacing: "0.096px", color }}>{value}</span>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function VehiclearPage() {
  const [activeLegalMetric, setActiveLegalMetric] = useState(0);

  return (
    <div className="bg-background flex flex-col w-full min-h-full" style={{ fontFamily: FONT }}>
      {/* Page header */}
      <div className="bg-card relative w-full">
        <div className="px-[16px] pt-[6px] pb-[2px]">
          <Breadcrumb />
        </div>
        <div className="flex items-center justify-between px-[16px] py-[8px] gap-[12px]">
          <p style={pageTitleStyle}>Details for Vehicle – RE4NL2I3</p>
          <button
            className="flex items-center justify-center px-[24px] rounded-[var(--radius)] shrink-0 cursor-pointer border-0 hover:opacity-90 transition-opacity"
            style={{
              height: 36,
              backgroundColor: "rgba(23,102,214,0.12)",
              ...buttonTextStyle,
              color: "rgba(23,102,214,0.6)",
            }}
          >
            Generate Report
          </button>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[16px] px-[16px] py-[16px] overflow-y-auto flex-1" style={{ maxWidth: 1264, margin: "0 auto", width: "100%" }}>

        {/* ── AI SUMMARY ── */}
        <div
          className="relative rounded-[12px] w-full"
          style={{ backgroundImage: "linear-gradient(109.204deg, rgb(255,248,228) 0.676%, rgb(253,224,151) 117.74%)" }}
        >
          <div className="flex flex-col gap-[20px] items-start p-[16px] relative rounded-[inherit] w-full overflow-clip">
            {/* Header */}
            <div className="flex gap-[8px] items-center shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 22 11">
                  <path d={svgPaths.p1e985e00} fill="#041C66" />
                </svg>
              </div>
              <span style={{ ...subHeadingStyle, color: "#041C66" }}>Summary</span>
            </div>
            {/* Risk pill */}
            <div className="flex items-center gap-[4px] px-[12px] py-[6px] rounded-[20px] w-fit" style={{ backgroundColor: "var(--risk-medium)" }}>
              <div className="overflow-clip shrink-0 size-[20px] relative">
                <div className="absolute inset-[8%]">
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 18.44 16.72">
                    <path d={svgPaths.p1056a000} fill="white" />
                  </svg>
                </div>
              </div>
              <span style={{ ...chipTextStyle, color: "var(--primary-foreground)" }}>Medium Risk</span>
            </div>
            {/* Description */}
            <p style={{ ...bodyStyle, color: "#000" }}>
              There are xx FIRs / Court Cases &amp; challans worth INR XX registered. The vehicle has
              <span style={{ fontWeight: 700 }}> been blacklisted under the RTO.</span> Our assessment shows this vehicle poses significant risks. Recommend not to go ahead with financing / policy issuance / procurement of this vehicle
            </p>
          </div>
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]" style={{ border: "1px solid var(--warning)" }} />
        </div>

        {/* ── VEHICLE + OWNERSHIP DETAILS ── */}
        <div className="flex gap-[16px] w-full">
          {/* Vehicle Details */}
          <div className="bg-card flex-1 rounded-[var(--radius)] overflow-clip p-[12px] flex flex-col gap-[16px]">
            <div className="flex items-center gap-[6px]">
              <Car size={24} style={{ color: "var(--foreground)" }} />
              <span style={sectionHeadingStyle}>Vehicle Details</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <InfoRow label="MANUFACTURER" value={vehicleDetails.manufacturer} />
              <InfoRow label="MODEL" value={vehicleDetails.model} />
              <InfoRow label="VEHICLE TYPE" value={vehicleDetails.vehicleType} />
              <InfoRow label="FINANCIER" value={vehicleDetails.financier} />
              <InfoRow label="INSURER" value={vehicleDetails.insurer} />
            </div>
          </div>

          {/* Ownership Details */}
          <div className="bg-card flex-1 rounded-[var(--radius)] overflow-clip p-[12px] flex flex-col gap-[16px]">
            <div className="flex items-center gap-[6px]">
              <User size={24} style={{ color: "var(--foreground)" }} />
              <span style={sectionHeadingStyle}>Ownership details</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-start gap-[3px]">
                <span className="shrink-0 whitespace-pre-wrap" style={{ ...labelStyle, width: 196 }}>OWNER DETAILS</span>
                <div className="flex flex-col flex-1" style={{ ...bodyStyle, color: "var(--foreground)" }}>
                  {ownershipDetails.ownerDetails.map((line, i) => (
                    <p key={i} className="m-0">{line}</p>
                  ))}
                </div>
              </div>
              <InfoRow label="NO. OWNERSHIP TRANSFERS" value={ownershipDetails.ownershipTransfers} />
              <InfoRow label="LAST OWNERSHIP TRANSFER" value={ownershipDetails.lastOwnershipTransfer} />
            </div>
          </div>
        </div>

        {/* ── RTO RISK INDICATORS ── */}
        <div className="bg-card rounded-[var(--radius)] p-[16px] flex flex-col gap-[16px]">
          <div className="flex items-center gap-[5px]">
            <AlertTriangle size={24} style={{ color: "var(--foreground)" }} />
            <span style={sectionHeadingStyle}>RTO Risk Indicators</span>
          </div>

          {/* Top row: Blacklist + Compliance */}
          <div className="flex gap-[16px]">
            {/* Blacklist Status */}
            <div className="flex-1 rounded-[var(--radius)] p-[12px] flex flex-col gap-[16px]" style={{ border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between">
                <span style={subHeadingStyle}>Vehicle Blacklist Status</span>
                {blacklistData.isBlacklisted ? (
                  <StatusBadge status="blacklisted" label="Blacklisted" />
                ) : null}
              </div>
              {blacklistData.isBlacklisted ? (
                <div className="flex flex-col gap-[4px]">
                  <InfoRow label="LOCKED BY" value={blacklistData.lockedBy} labelWidth={175} />
                  <InfoRow label="DATE" value={blacklistData.date} labelWidth={175} />
                  <InfoRow label="REASON" value={blacklistData.reason} labelWidth={175} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-[12px] gap-[12px]">
                  <div className="bg-muted overflow-clip rounded-[6px] size-[44px] flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                  </div>
                  <span style={{ ...bodyStyle, color: "var(--primary-dark)" }}>Unable to reach server.</span>
                </div>
              )}
            </div>

            {/* Compliance Status */}
            <div className="flex-1 rounded-[var(--radius)] p-[12px] flex flex-col gap-[16px]" style={{ border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between">
                <span style={subHeadingStyle}>Compliance Status</span>
                <StatusBadge status="warning" label="Not Compliant" />
              </div>
              <div className="flex flex-col gap-[6px]">
                <InfoRow label="INSURANCE EXPIRY" value={complianceData.insuranceExpiry} labelWidth={175} />
                <InfoRow label="PERMIT EXPIRY" value={complianceData.permitExpiry} labelWidth={175} />
                {/* PUCC row with red left-border highlight */}
                <div className="flex items-center py-[2px] pr-[6px]" style={{ backgroundColor: "var(--destructive-light)", borderLeft: "2px solid var(--destructive)" }}>
                  <InfoRow label="PUCC EXPIRY" value={complianceData.puccExpiry} labelWidth={175} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: RC Status + Transfer Details */}
          <div className="flex gap-[16px]">
            <div className="flex-1 rounded-[var(--radius)] p-[12px] flex items-center justify-between" style={{ border: "1px solid var(--border)" }}>
              <span style={subHeadingStyle}>RC Status</span>
              <StatusBadge status="expired" label="Fitness Expired" />
            </div>
            <div className="flex-1 rounded-[var(--radius)] p-[12px] flex items-center justify-between" style={{ border: "1px solid var(--border)" }}>
              <span style={subHeadingStyle}>Transfer Details</span>
              <StatusBadge status="warning" label="Inter State Transfer found" />
            </div>
          </div>
        </div>

        {/* ── LEGAL CASES ── */}
        <div className="bg-card rounded-[var(--radius)] overflow-hidden flex flex-col">
          {/* Section header */}
          <div className="px-[16px] py-[12px] sticky top-0 bg-card z-10">
            <div className="flex items-center gap-[8px]">
              <Scale size={24} style={{ color: "var(--foreground)" }} />
              <span style={sectionHeadingStyle}>Legal Cases</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex gap-[16px] px-[16px] py-[8px]">
            {legalMetrics.map((m, i) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                color={m.color}
                active={i === activeLegalMetric}
              />
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Case Type", "Case Number", "Year", "Category", "Status", "Status", ""].map((col, i) => (
                    <th
                      key={i}
                      className="text-left sticky top-0 bg-card"
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
                {legalCases.map((c) => (
                  <tr key={c.id} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "14px 8px", paddingLeft: 16 }}>{c.caseType}</td>
                    <td style={{ ...tableCellStyle, padding: "14px 8px" }}>{c.caseNumber}</td>
                    <td style={{ ...tableCellStyle, padding: "14px 8px" }}>{c.year}</td>
                    <td style={{ ...tableCellStyle, padding: "14px 8px" }}>{c.category}</td>
                    <td style={{ padding: "8px" }}>
                      <span
                        className="inline-flex items-center px-[12px] rounded-[20px]"
                        style={{
                          height: 28,
                          backgroundColor: c.status === "Pending" ? "var(--destructive)" : "rgba(19,26,37,0.1)",
                          ...chipTextStyle,
                          color: c.status === "Pending" ? "var(--primary-foreground)" : "var(--foreground)",
                        }}
                      >
                        {c.status === "Pending" ? "Pedning" : "Disposed"}
                      </span>
                    </td>
                    <td style={{ padding: "8px" }} />
                    <td style={{ padding: "8px" }}>
                      <ViewDetailsBtn />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <LegalPagination />
        </div>

        {/* ── CHALLAN CASES ── */}
        <div className="bg-card rounded-[var(--radius)] overflow-hidden flex flex-col">
          {/* Section header */}
          <div className="px-[16px] py-[12px] sticky top-0 bg-card z-10">
            <div className="flex items-center gap-[8px]">
              <FileText size={24} style={{ color: "var(--foreground)" }} />
              <span style={sectionHeadingStyle}>Challan Cases</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex gap-[16px] px-[16px] py-[8px]">
            {challanMetrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} color={m.color} />
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Challan Number", "Filling date", "Offense Details", "Amount", "Status", ""].map((col, i) => (
                    <th
                      key={i}
                      className="text-left"
                      style={{
                        ...tableHeaderStyle,
                        padding: "12px 8px",
                        paddingLeft: i === 0 ? 16 : 8,
                        borderBottom: "1px solid var(--border)",
                        backgroundColor: "var(--destructive-light)",
                        color: "var(--destructive)",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {challanCases.map((c) => (
                  <tr key={c.id} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "14px 8px", paddingLeft: 16 }}>{c.challanNumber}</td>
                    <td style={{ ...tableCellStyle, padding: "14px 8px" }}>{c.fillingDate}</td>
                    <td style={{ ...tableCellStyle, padding: "14px 8px" }}>{c.offenseDetails}</td>
                    <td style={{ ...tableCellStyle, padding: "14px 8px" }}>{c.amount}</td>
                    <td style={{ padding: "8px" }}>
                      <span
                        className="inline-flex items-center px-[12px] rounded-[20px]"
                        style={{
                          height: 28,
                          backgroundColor: c.status === "Pending" ? "var(--destructive)" : "rgba(19,26,37,0.1)",
                          ...chipTextStyle,
                          color: c.status === "Pending" ? "var(--primary-foreground)" : "var(--foreground)",
                        }}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td style={{ padding: "8px" }}>
                      <ViewDetailsBtn />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGINATION ─── */
function LegalPagination() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const pages: (number | "...")[] = [1, 2, 3, "...", 10];

  const btnBase: React.CSSProperties = {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
    backgroundColor: "var(--muted)",
    cursor: "pointer",
    fontFamily: FONT,
    fontSize: "var(--text-base)",
    fontWeight: 500,
  };

  return (
    <div className="flex items-center gap-[4px] px-[16px] py-[12px]">
      {/* First / Prev */}
      <button style={btnBase} onClick={() => setPage(1)} disabled={page === 1}>
        <ChevronRight size={14} style={{ transform: "rotate(180deg)", color: "var(--foreground)" }} />
        <ChevronRight size={14} style={{ transform: "rotate(180deg)", color: "var(--foreground)", marginLeft: -8 }} />
      </button>
      <button style={btnBase} onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
        <ChevronRight size={14} style={{ transform: "rotate(180deg)", color: "var(--foreground)" }} />
      </button>

      {/* Pages */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dot-${i}`} style={{ ...btnBase, border: "1px solid var(--border)", backgroundColor: "var(--card)", color: "var(--foreground)" }}>…</span>
        ) : (
          <button
            key={p}
            onClick={() => setPage(p as number)}
            style={{
              ...btnBase,
              backgroundColor: p === page ? "var(--primary)" : "var(--muted)",
              color: p === page ? "var(--primary-foreground)" : "var(--muted-foreground)",
              borderColor: p === page ? "var(--primary)" : "var(--border)",
            }}
          >
            {p}
          </button>
        )
      )}

      {/* Next / Last */}
      <button style={btnBase} onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}>
        <ChevronRight size={14} style={{ color: "var(--foreground)" }} />
      </button>
      <button style={btnBase} onClick={() => setPage(totalPages)} disabled={page === totalPages}>
        <ChevronRight size={14} style={{ color: "var(--foreground)" }} />
        <ChevronRight size={14} style={{ color: "var(--foreground)", marginLeft: -8 }} />
      </button>
    </div>
  );
}