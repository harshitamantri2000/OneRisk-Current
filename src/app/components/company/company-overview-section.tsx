import { useState } from "react";
import {
  FONT,
  FEAT,
  pageTitleStyle,
  sectionHeadingStyle,
  cardTitleStyle,
  subHeadingStyle,
  bodyStyle,
  labelStyle,
  chipTextStyle,
  captionStyle,
  tableHeaderStyle,
  tableCellStyle,
} from "../typography";
import { Pagination, RiskBadge, CollapsibleSection } from "./shared";
import svgPaths from "../../../imports/svg-we5gz2rv01";

/* ─── Company overview data ─── */
const companyDetails = {
  about: "ABC Industries Ltd (subsidiary) presents the highest risk due to criminal proceedings and financial distress, with 6 additional companies showing GST non-compliance, declining revenues, and adverse audit findings.",
  cin: "U74900MH2011PTC291275",
  pan: "AAZCT1234M",
  status: "Active",
  classification: "Private Limited",
  incorporationDate: "—",
  companyVintage: "2 Years",
  activeCompliance: "Compliant",
  address: "123, Tech Park, Indiranagar, Bengaluru, 560038, Karnataka",
  lastAGMDate: "30-Sep-2023",
  lastFilingDate: "30-Oct-2023",
};

const contactDetails = {
  website: "www.technova.com",
  primaryEmail: "contact@technova.com",
  primaryPhone: "+91 9876543210",
  otherPhoneNumbers: "+91 9876543210, +91 9876543210",
};

const leiDetails = {
  leiNumber: "www.technova.com",
  leiStatus: "contact@technova.com",
  registrationDate: "01-Jan-2023",
  lastUpdatedDate: "01-Jan-2023",
  nextRenewalDate: "01-Jan-2024",
};

const capitalCharges = {
  authorizedCapital: "10,00,000",
  paidUpCapital: "1,00,000",
  sumOfCharges: "50,00,000",
};

const managementPersonnel = [
  { name: "Rajesh Kumar", designation: "Director", din: "01234567", appointmentDate: "15-Mar-2020", shareholding: "20%", shares: "2345", cessation: "Active" },
  { name: "Priya Sharma", designation: "Managing Director", din: "07654321", appointmentDate: "10-Jan-2019", shareholding: "5%", shares: "212", cessation: "Active" },
  { name: "Sneha Verma", designation: "Executive Director", din: "08765432", appointmentDate: "01-Apr-2020", shareholding: "none", shares: "0", cessation: "Active" },
  { name: "Vikram Singh", designation: "Non-Executive Director", din: "03456789", appointmentDate: "01-Apr-2020", shareholding: "none", shares: "0", cessation: "Active" },
  { name: "Amit Patel", designation: "Independent Director", din: "02345678", appointmentDate: "22-Jun-2021", shareholding: "none", shares: "0", cessation: "22-Jun-2022" },
];

const ownershipData = {
  totalEquityShares: "50,000,000",
  preferenceShares: "5,000,000",
  promoterHolding: "78%",
  promoterCount: 4,
  publicHolding: "21.5%",
  publicCount: 1243,
  topShareholders: [
    { name: "Rajesh Kumar", type: "Individual", shares: "40,000", percentage: "40.00%" },
    { name: "Long entity Name", type: "Entity", shares: "40,000", percentage: "40.00%" },
  ],
  equityDistribution: [
    { category: "Promoters & Promoter Group", equityShares: "39,250,000", equityPercent: "78.5%", prefShares: "0", prefPercent: "0" },
    { category: "Indian Individuals", equityShares: "4,500,000", equityPercent: "9%", prefShares: "500,000", prefPercent: "10%" },
    { category: "Foreign Institutional Investors (FII)", equityShares: "3,250,000", equityPercent: "6.5%", prefShares: "500,000", prefPercent: "30%" },
  ],
};

/* ─── Detail field ─── */
function DetailField({ label, value, isLink = false, isStatus = false, statusColor }: { label: string; value: string; isLink?: boolean; isStatus?: boolean; statusColor?: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <span style={{ ...labelStyle, color: "var(--muted-foreground)" }}>{label}</span>
      {isLink ? (
        <a href={`https://${value}`} target="_blank" rel="noopener noreferrer" style={{ ...bodyStyle, color: "var(--primary)", textDecoration: "none" }}>{value}</a>
      ) : isStatus ? (
        <span style={{ ...bodyStyle, color: statusColor || "var(--risk-low)", fontWeight: 600 }}>{value}</span>
      ) : (
        <span style={bodyStyle}>{value}</span>
      )}
    </div>
  );
}

/* ─── AI Summary Card ─── */
function AISummaryCard() {
  return (
    <div className="relative rounded-[var(--radius)] w-full" style={{ backgroundImage: "linear-gradient(101.581deg, var(--ai-summary-start) 0.67593%, var(--ai-summary-end) 117.74%)" }}>
      <div className="flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <div className="flex items-center justify-between w-full">
          <RiskBadge level="high" />
          <div className="flex gap-[6px] items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p3a548380} fill="var(--primary-dark)" />
            </svg>
            <span style={{ ...labelStyle, color: "var(--primary-dark)" }}>AI Summary</span>
          </div>
        </div>
        <p style={{ ...bodyStyle, color: "var(--foreground)", lineHeight: 1.6 }}>
          {companyDetails.about}
        </p>
      </div>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius)]" style={{ padding: "1px", background: "linear-gradient(135deg, var(--warning-border), var(--ai-summary-start), var(--warning-border))", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
    </div>
  );
}

/* ─── Main export ─── */
export default function CompanyOverviewSection() {
  const [kmpPage, setKmpPage] = useState(1);
  const [eqYear, setEqYear] = useState("2024");

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Section title */}
      <div id="company-overview" className="flex flex-col gap-[20px]">
        <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>Company Overview</h2>

        {/* AI Summary */}
        <AISummaryCard />

        {/* Company Details + Contact Details */}
        <div className="flex gap-[16px]">
          {/* Company Details (left) */}
          <div className="flex-[2] bg-card rounded-[var(--radius)] p-[16px] flex flex-col gap-[16px]" style={{ border: "1px solid var(--border)" }}>
            <span style={cardTitleStyle}>Company Details</span>

            {/* ABOUT */}
            <div className="flex flex-col gap-[4px]">
              <span style={captionStyle}>ABOUT</span>
              <p style={{ ...bodyStyle, color: "var(--foreground)", lineHeight: 1.6 }}>{companyDetails.about}</p>
            </div>

            {/* BASIC INFO */}
            <div className="flex flex-col gap-[8px]">
              <span style={captionStyle}>BASIC INFO</span>
              <div className="grid grid-cols-2 gap-x-[24px] gap-y-[10px]">
                <DetailField label="CIN" value={companyDetails.cin} />
                <DetailField label="PAN" value={companyDetails.pan} />
                <DetailField label="Status" value={companyDetails.status} isStatus statusColor="var(--risk-low)" />
                <DetailField label="Classification" value={companyDetails.classification} />
                <DetailField label="Incorporation Date" value={companyDetails.incorporationDate} />
                <DetailField label="Company Vintage" value={companyDetails.companyVintage} />
                <DetailField label="Active Compliance" value={companyDetails.activeCompliance} isStatus statusColor="var(--primary)" />
                <DetailField label="Address" value={companyDetails.address} />
              </div>
            </div>

            {/* IMPORTANT DATES */}
            <div className="flex flex-col gap-[8px]">
              <span style={captionStyle}>IMPORTANT DATES</span>
              <div className="grid grid-cols-2 gap-x-[24px] gap-y-[10px]">
                <DetailField label="Last AGM Date" value={companyDetails.lastAGMDate} />
                <DetailField label="Last Filing Date" value={companyDetails.lastFilingDate} />
              </div>
            </div>
          </div>

          {/* Right column: Contact + LEI + Capital */}
          <div className="flex-1 flex flex-col gap-[16px]">
            {/* Contact Details */}
            <div className="bg-card rounded-[var(--radius)] p-[16px] flex flex-col gap-[10px]" style={{ border: "1px solid var(--border)" }}>
              <span style={cardTitleStyle}>Contact Details</span>
              <div className="grid grid-cols-2 gap-x-[16px] gap-y-[10px]">
                <DetailField label="Website" value={contactDetails.website} isLink />
                <DetailField label="Primary Email" value={contactDetails.primaryEmail} isLink />
                <DetailField label="Primary Phone" value={contactDetails.primaryPhone} />
                <DetailField label="Other Phone Numbers" value={contactDetails.otherPhoneNumbers} />
              </div>
            </div>

            {/* LEI Details */}
            <div className="bg-card rounded-[var(--radius)] p-[16px] flex flex-col gap-[10px]" style={{ border: "1px solid var(--border)", backgroundColor: "var(--info-light)" }}>
              <span style={cardTitleStyle}>LEI Details</span>
              <div className="grid grid-cols-2 gap-x-[16px] gap-y-[10px]">
                <DetailField label="LEI Number" value={leiDetails.leiNumber} isLink />
                <DetailField label="LEI Status" value={leiDetails.leiStatus} isLink />
                <DetailField label="Registration Date" value={leiDetails.registrationDate} />
                <DetailField label="Last Updated Date" value={leiDetails.lastUpdatedDate} />
                <DetailField label="Next Renewal Date" value={leiDetails.nextRenewalDate} />
              </div>
            </div>

            {/* Capital and Charges */}
            <div className="bg-card rounded-[var(--radius)] p-[16px] flex flex-col gap-[10px]" style={{ border: "1px solid var(--border)", backgroundColor: "var(--muted)" }}>
              <span style={cardTitleStyle}>Capital and Charges</span>
              <div className="grid grid-cols-3 gap-[12px]">
                <DetailField label="Authorized Capital" value={capitalCharges.authorizedCapital} />
                <DetailField label="Paid-up Capital" value={capitalCharges.paidUpCapital} />
                <DetailField label="Sum of Charges" value={capitalCharges.sumOfCharges} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Key Management Personnel ── */}
      <div id="key-management" className="flex flex-col gap-[20px]">
        <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>Key Management Personnel</h2>
        <div className="bg-card rounded-[var(--radius)] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Name", "Present Designation", "DIN", "Appointment D.", "ShareHolding(%)", "Number of shares", "Cessation D."].map((h, i) => (
                    <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {managementPersonnel.map((p, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{p.name}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{p.designation}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{p.din}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{p.appointmentDate}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{p.shareholding}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{p.shares}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{p.cessation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination currentPage={kmpPage} totalPages={3} onPageChange={setKmpPage} />
        </div>
      </div>

      {/* ── Ownership Structure ── */}
      <div id="ownership" className="flex flex-col gap-[20px]">
        <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>Ownership Structure</h2>

        {/* Total Shares + Total Shareholding */}
        <div className="flex gap-[16px]">
          {/* Total Shares */}
          <div className="flex-1 rounded-[var(--radius)] p-[16px] flex flex-col gap-[8px]" style={{ border: "1px solid var(--border)", backgroundColor: "var(--info-light)" }}>
            <div className="flex items-center gap-[8px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14 0.666667L8.33333 6.33333L5 3L0.666667 7.33333" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ ...captionStyle, textTransform: "uppercase" }}>TOTAL SHARES</span>
            </div>
            <div className="flex items-end gap-[32px]">
              <div className="flex flex-col">
                <span style={{ fontFamily: FONT, fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--foreground)" }}>{ownershipData.totalEquityShares}</span>
                <span style={labelStyle}>equity shares</span>
              </div>
              <div className="flex flex-col">
                <span style={{ fontFamily: FONT, fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--foreground)" }}>{ownershipData.preferenceShares}</span>
                <span style={labelStyle}>preference shares</span>
              </div>
            </div>
          </div>

          {/* Total Shareholding */}
          <div className="flex-1 rounded-[var(--radius)] p-[16px] flex flex-col gap-[8px]" style={{ border: "1px solid var(--border)", backgroundColor: "var(--destructive-light)" }}>
            <div className="flex items-center gap-[8px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d={svgPaths.p2b94e1f0} fill="var(--destructive)" />
              </svg>
              <span style={{ ...captionStyle, textTransform: "uppercase" }}>TOTAL SHAREHOLDING</span>
            </div>
            <div className="flex items-end gap-[32px]">
              <div className="flex flex-col">
                <span style={{ fontFamily: FONT, fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--foreground)" }}>{ownershipData.promoterHolding}</span>
                <span style={labelStyle}>promoter holding ({ownershipData.promoterCount} promoters)</span>
              </div>
              <div className="flex flex-col">
                <span style={{ fontFamily: FONT, fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--foreground)" }}>{ownershipData.publicHolding}</span>
                <span style={labelStyle}>public holding ({ownershipData.publicCount} public holders)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Shareholding List */}
        <CollapsibleSection title="Top Shareholding List">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Holder Name", "Holder Type", "No. of shares", "Shareholding %"].map((h, i) => (
                    <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ownershipData.topShareholders.map((s, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{s.name}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{s.type}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{s.shares}</td>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{s.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>

        {/* Equity Distribution */}
        <CollapsibleSection title="Equity Distribution">
          <div>
            {/* Year tabs */}
            <div className="flex items-center gap-[4px] px-[16px] pb-[8px]">
              {["2024", "2023", "2022"].map((y) => (
                <button
                  key={y}
                  onClick={() => setEqYear(y)}
                  className="px-[12px] py-[4px] rounded-[var(--radius-sm)] border-0 cursor-pointer"
                  style={{
                    ...bodyStyle,
                    backgroundColor: eqYear === y ? "var(--primary)" : "var(--muted)",
                    color: eqYear === y ? "var(--primary-foreground)" : "var(--muted-foreground)",
                  }}
                >
                  {y}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
                <thead>
                  <tr>
                    {["Investor Category", "Equity Shares", "Equity %", "Pref. Shares", "Pref. %"].map((h, i) => (
                      <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ownershipData.equityDistribution.map((d, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{d.category}</td>
                      <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{d.equityShares}</td>
                      <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{d.equityPercent}</td>
                      <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{d.prefShares}</td>
                      <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{d.prefPercent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CollapsibleSection>

        {/* Jump to next section */}
        <div className="flex justify-center py-[8px]">
          <button className="flex items-center gap-[6px] px-[16px] py-[8px] rounded-[var(--radius)] bg-card border border-border cursor-pointer hover:bg-muted transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V13M7 13L13 7M7 13L1 7" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={bodyStyle}>Legal History</span>
          </button>
        </div>
      </div>
    </div>
  );
}