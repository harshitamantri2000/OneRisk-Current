import { useState } from "react";
import { ChevronDown, ChevronRight, Copy } from "lucide-react";
import {
  FONT,
  FEAT,
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

/* ─── FINANCIAL MARKERS DATA ─── */
const financialMarkers = [
  { label: "Sales", fy2024: "4,91,80,135", fy2023: "4,28,80,135", change: "+14.7%", flag: false },
  { label: "Net Profit", fy2024: "1,81,445", fy2023: "1,47,456", change: "+23.0%", flag: false },
  { label: "Total Assets", fy2024: "1,47,456", fy2023: "1,21,349", change: "+21.5%", flag: false },
];

const financialRatios = [
  { label: "Net Profit Margin", fy2024: "18.48%", fy2023: "16.52%", flag: false },
  { label: "Debt to Equity", fy2024: "0.38", fy2023: "0.45", flag: true },
  { label: "Current Ratio", fy2024: "1.92", fy2023: "1.78", flag: false },
  { label: "Return on Equity", fy2024: "12.3%", fy2023: "10.8%", flag: false },
];

/* ─── Balance Sheet Data ─── */
const balanceSheetSections = [
  {
    title: "Equity & Liabilities",
    subsections: [
      {
        title: "Equities",
        rows: [
          { label: "Share Capital", fy2024: "15,00,000", fy2023: "15,00,000", fy2022: "10,00,000" },
          { label: "Other Equity", fy2024: "8,42,300", fy2023: "6,18,900", fy2022: "4,55,200" },
          { label: "Money Received Against Share Warrants", fy2024: "0", fy2023: "0", fy2022: "0" },
        ],
        total: { label: "Total", fy2024: "25,92,300", fy2023: "21,18,900", fy2022: "14,55,200" },
      },
      {
        title: "Liability",
        rows: [
          { label: "Long Term Borrowings", fy2024: "42,00,000", fy2023: "38,50,000", fy2022: "30,00,000" },
          { label: "Deferred Tax Liabilities", fy2024: "1,25,600", fy2023: "98,400", fy2022: "76,200" },
          { label: "Other Long Term Liabilities", fy2024: "3,80,000", fy2023: "2,90,000", fy2022: "2,10,000" },
        ],
        total: { label: "Total", fy2024: "47,05,600", fy2023: "42,38,400", fy2022: "32,86,200" },
      },
      {
        title: "Current liabilities",
        rows: [
          { label: "Short Term Borrowings", fy2024: "8,50,000", fy2023: "7,20,000", fy2022: "5,80,000" },
          { label: "Trade Payables", fy2024: "6,75,400", fy2023: "5,42,100", fy2022: "4,10,300" },
          { label: "Other Current Liabilities", fy2024: "3,25,000", fy2023: "2,88,000", fy2022: "2,15,000" },
        ],
        total: { label: "Total", fy2024: "18,50,400", fy2023: "15,50,100", fy2022: "12,05,300" },
      },
    ],
  },
  {
    title: "Asset",
    subsections: [
      {
        title: "Fixed assets",
        rows: [
          { label: "Tangible Assets", fy2024: "32,45,000", fy2023: "28,90,000", fy2022: "22,50,000" },
          { label: "Intangible Assets", fy2024: "1,85,000", fy2023: "1,50,000", fy2022: "1,20,000" },
          { label: "Capital Work-in-Progress", fy2024: "5,60,000", fy2023: "4,20,000", fy2022: "3,80,000" },
        ],
        total: { label: "Total", fy2024: "40,65,000", fy2023: "35,10,000", fy2022: "27,80,000" },
      },
      {
        title: "Other long term",
        rows: [
          { label: "Non-Current Investments", fy2024: "8,20,000", fy2023: "7,50,000", fy2022: "5,80,000" },
          { label: "Long Term Loans & Advances", fy2024: "4,15,000", fy2023: "3,60,000", fy2022: "2,90,000" },
        ],
      },
    ],
  },
  {
    title: "Profit & Loss Statement",
    subsections: [
      {
        title: "Revenue from Operations",
        rows: [
          { label: "Sale of Products/services", fy2024: "87,100", fy2023: "74,240", fy2022: "0" },
          { label: "Interest & Discounts on Advances", fy2024: "0", fy2023: "0", fy2022: "0" },
          { label: "Income from Investments/Dividends", fy2024: "0", fy2023: "0", fy2022: "0" },
        ],
        total: { label: "Total Revenue from Operations", fy2024: "87,100", fy2023: "74,240", fy2022: "0" },
      },
      {
        title: "Total Expenses",
        rows: [
          { label: "Employee Benefit Expenses", fy2024: "13,481", fy2023: "12,170", fy2022: "0" },
          { label: "Depreciation", fy2024: "5,432", fy2023: "4,827", fy2022: "0" },
          { label: "Other Expenses", fy2024: "18,200", fy2023: "16,500", fy2022: "0" },
        ],
        total: { label: "Total Expenses", fy2024: "37,113", fy2023: "33,497", fy2022: "0" },
      },
    ],
  },
];

/* ─── Charges & Security Data ─── */
const chargesData = [
  { id: "CAHC:0174006124516", date: "05-Jan-2023", type: "Pledge/ctr", amount: "Pledge-umb", status: "Open", holder: "Pledge Created", dateReg: "05-Jan-2023" },
];

/* ─── Credit Rating ─── */
const creditRatings = [
  { ratingType: "Long Term", rating: "A+", outlook: "Stable" },
  { ratingType: "Short Term", rating: "A1", outlook: "Stable" },
];

/* ─── GST & EPF ─── */
const gstRecords = [
  { gstin: "03AAAC15950L...", city: "IPC stores", status: "Active", date: "21-Aug-2023", dateReg: "01-Jul-2017", returnStatus: "Filed" },
  { gstin: "03AAAC15950L...", city: "IPC stores", status: "Active", date: "21-Aug-2023", dateReg: "01-Jul-2017", returnStatus: "Not Filed" },
  { gstin: "03AAAC15950L...", city: "IPC stores", status: "Active", date: "21-Aug-2023", dateReg: "01-Jul-2017", returnStatus: "Filed" },
];

const epfRecords = [
  { code: "MH/BOM/00001", factory: "PO store", establishment: "Pvt. Ltd", doe: "3 May, 2009", dateReg: "15-May-2024" },
  { code: "MH/BOM/00002", factory: "PO store", establishment: "Pvt. Ltd", doe: "3 May, 2009", dateReg: "15-May-2024" },
  { code: "MH/BOM/00003", factory: "PO store", establishment: "Pvt. Ltd", doe: "3 May, 2009", dateReg: "15-May-2024" },
];

/* ─── Related Party Transaction ─── */
const relatedPartyTransactions = [
  { party: "Ramana Enterprises Pvt Ltd", relationship: "Company", transactionType: "Sales" },
  { party: "Pinnacle Infrastructure Ltd", relationship: "Subsidiary", transactionType: "Purchase" },
  { party: "Green Valley Co-op Society", relationship: "Equity Method", transactionType: "Rental Income" },
];

/* ─── MSME Delayed Payments ─── */
const msmePayments = [
  { supplier: "Krishna Industries Pvt Ltd", amount: "1,90,417.97", dueDate: "1,48,348", delayedPeriod: "9 Days 18" },
  { supplier: "Pooja Supplies & Co", amount: "2,95,000", dueDate: "2,14,230", delayedPeriod: "12 Days 8" },
];

/* ─── Auditor Commentary ─── */
const auditorComments = {
  name: "CA Vikas Mehta",
  firm: "Mehta & Associates",
  summary: "The company's books of accounts present a true and fair view of the financial statements as at March 31, 2024. There are no qualifications or modifications to the audit report. The internal controls are adequate and operating effectively for safeguarding the assets of the company.",
  qualifications: [
    "Emphasis of matter in relation to uncertain tax positions relating to indirect tax claims.",
    "Attention is drawn to note 32 of the financial statements regarding outstanding receivables from promoter group entities for which management considers as fully collectible.",
  ],
  caroSummary: "No observations under CARO 2020 clauses (i), (ii), (iv) and (vii) relevant to the Company's operations.",
};

/* ─── Financial Statement Row Component ─── */
function BSRow({ label, fy2024, fy2023, fy2022, isTotal = false, indent = 0 }: {
  label: string; fy2024: string; fy2023: string; fy2022: string; isTotal?: boolean; indent?: number;
}) {
  return (
    <div className="flex items-center" style={{ borderBottom: "1px solid var(--border)", backgroundColor: isTotal ? "var(--muted)" : "transparent" }}>
      <div className="flex-1 truncate" style={{ padding: `8px 16px 8px ${16 + indent}px`, ...bodyStyle, fontWeight: isTotal ? 600 : 500 }}>{label}</div>
      {[fy2024, fy2023, fy2022].map((v, i) => (
        <div key={i} className="text-right" style={{ width: 140, padding: "8px 16px", ...bodyStyle, fontWeight: isTotal ? 600 : 500 }}>{v}</div>
      ))}
    </div>
  );
}

/* ─── MAIN SECTION ─── */
export default function IncomeSection() {
  const [bsSectionOpen, setBsSectionOpen] = useState<Record<string, boolean>>({ "Equity & Liabilities": true, "Asset": true, "Profit & Loss Statement": true });
  const [subOpen, setSubOpen] = useState<Record<string, boolean>>({});
  const [gstPage, setGstPage] = useState(1);

  const toggleSection = (title: string) => setBsSectionOpen(prev => ({ ...prev, [title]: !prev[title] }));
  const toggleSub = (key: string) => setSubOpen(prev => ({ ...prev, [key]: prev[key] === undefined ? false : !prev[key] }));

  return (
    <div className="flex flex-col gap-[20px]">
      {/* ─── Financial Markers ─── */}
      <div id="financial-markers" className="flex flex-col gap-[20px]">
        <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>Financial Markers</h2>
        <div className="bg-card rounded-[var(--radius)] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["", "FY 2024", "FY 2023", "Change"].map((h, i) => (
                    <th key={i} className={i === 0 ? "text-left" : "text-right"} style={{ ...tableHeaderStyle, padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {financialMarkers.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "12px 16px", fontWeight: 600 }}>{m.label}</td>
                    <td className="text-right" style={{ ...tableCellStyle, padding: "12px 16px" }}>{m.fy2024}</td>
                    <td className="text-right" style={{ ...tableCellStyle, padding: "12px 16px" }}>{m.fy2023}</td>
                    <td className="text-right" style={{ ...tableCellStyle, padding: "12px 16px", color: m.change.startsWith("+") ? "var(--risk-low)" : "var(--destructive)" }}>{m.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Ratios */}
        <div className="bg-card rounded-[var(--radius)] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
            <span style={subHeadingStyle}>Financial Ratios/KPIs</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Ratio", "FY 2024", "FY 2023"].map((h, i) => (
                    <th key={i} className={i === 0 ? "text-left" : "text-right"} style={{ ...tableHeaderStyle, padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {financialRatios.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "12px 16px" }}>{r.label}</td>
                    <td className="text-right" style={{ ...tableCellStyle, padding: "12px 16px", color: r.flag ? "var(--destructive)" : "var(--foreground)" }}>{r.fy2024}</td>
                    <td className="text-right" style={{ ...tableCellStyle, padding: "12px 16px" }}>{r.fy2023}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── Financial Statements (Balance Sheet) ─── */}
      <div id="operational-markers" className="flex flex-col gap-[20px]">
        <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>Financial Statements</h2>
        <div className="bg-card rounded-[var(--radius)] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="px-[16px] py-[12px] flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)" }}>
            <span style={subHeadingStyle}>Balance Sheet</span>
            <div className="flex items-center gap-[8px]">
              {["FY 2024", "FY 2023", "FY 2022"].map((fy) => (
                <span key={fy} className="px-[12px] py-[4px] rounded-[var(--radius-sm)]" style={{ ...labelStyle, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>{fy}</span>
              ))}
            </div>
          </div>

          {/* FY Headers */}
          <div className="flex items-center" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="flex-1" />
            {["FY 2024", "FY 2023", "FY 2022"].map((fy) => (
              <div key={fy} className="text-right" style={{ width: 140, padding: "8px 16px", ...labelStyle, color: "var(--muted-foreground)" }}>{fy}</div>
            ))}
          </div>

          {/* Sections */}
          {balanceSheetSections.map((section) => {
            const isOpen = bsSectionOpen[section.title] !== false;
            return (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center gap-[6px] w-full px-[16px] py-[10px] border-0 bg-transparent cursor-pointer"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  {isOpen ? <ChevronDown size={16} style={{ color: "var(--primary)" }} /> : <ChevronRight size={16} style={{ color: "var(--primary)" }} />}
                  <span style={{ ...bodyStyle, color: "var(--primary)" }}>{section.title}</span>
                </button>

                {isOpen && section.subsections.map((sub) => {
                  const subKey = `${section.title}-${sub.title}`;
                  const subIsOpen = subOpen[subKey] !== false;
                  return (
                    <div key={sub.title}>
                      <button
                        onClick={() => toggleSub(subKey)}
                        className="flex items-center gap-[6px] w-full px-[32px] py-[8px] border-0 bg-transparent cursor-pointer"
                        style={{ borderBottom: "1px solid var(--border)" }}
                      >
                        {subIsOpen ? <ChevronDown size={14} style={{ color: "var(--muted-foreground)" }} /> : <ChevronRight size={14} style={{ color: "var(--muted-foreground)" }} />}
                        <span style={bodyStyle}>{sub.title}</span>
                      </button>
                      {subIsOpen && (
                        <>
                          {sub.rows.map((row, ri) => (
                            <BSRow key={ri} label={row.label} fy2024={row.fy2024} fy2023={row.fy2023} fy2022={row.fy2022} indent={48} />
                          ))}
                          {sub.total && <BSRow label={sub.total.label} fy2024={sub.total.fy2024} fy2023={sub.total.fy2023} fy2022={sub.total.fy2022} isTotal indent={32} />}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Charges & Security ─── */}
      <div id="charges-security" className="flex flex-col gap-[20px]">
        <CollapsibleSection title="Charges & Security">
          <div className="px-[16px] pb-[4px]">
            <div className="flex items-center gap-[8px]">
              <span style={labelStyle}>Total Charges:</span>
              <span style={{ ...bodyStyle, fontWeight: 600 }}>1</span>
              <span className="px-[8px] py-[2px] rounded-[var(--radius-sm)]" style={{ ...chipTextStyle, backgroundColor: "var(--risk-low)", color: "var(--primary-foreground)" }}>Satisfied/Modified</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Charge ID", "Date", "Type", "Mtg. No.", "Status", "Charge Holder", "Date of registration"].map((h, i) => (
                    <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {chargesData.map((c, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.id}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.date}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.type}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.amount}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.status}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.holder}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.dateReg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>

        {/* ─── Credit Rating ─── */}
        <CollapsibleSection title="Credit Rating">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Rating Type", "Rating", "Outlook"].map((h, i) => (
                    <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {creditRatings.map((c, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.ratingType}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px", fontWeight: 600 }}>{c.rating}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{c.outlook}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>
      </div>

      {/* ─── Auditor Comments ─── */}
      <div id="auditor-reports" className="flex flex-col gap-[20px]">
        <CollapsibleSection title="Auditor Comments">
          <div className="px-[16px] py-[12px] flex flex-col gap-[12px]">
            <div className="flex gap-[16px]">
              <DetailField label="Name" value={auditorComments.name} />
              <DetailField label="Firm" value={auditorComments.firm} />
            </div>
            <div className="flex flex-col gap-[4px]">
              <span style={labelStyle}>Summary</span>
              <p style={{ ...bodyStyle, lineHeight: 1.6 }}>{auditorComments.summary}</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span style={labelStyle}>Qualifications / Emphasis of Matter</span>
              <ul className="flex flex-col gap-[4px] pl-[18px] m-0">
                {auditorComments.qualifications.map((q, i) => (
                  <li key={i} style={{ ...bodyStyle, lineHeight: 1.6 }}>{q}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span style={labelStyle}>CARO Summary</span>
              <p style={{ ...bodyStyle, lineHeight: 1.6 }}>{auditorComments.caroSummary}</p>
            </div>
          </div>
        </CollapsibleSection>
      </div>

      {/* ─── GST & EPF Compliance ─── */}
      <div id="epf-gst" className="flex flex-col gap-[20px]">
        <h2 style={{ ...sectionHeadingStyle, margin: 0 }}>GST & EPF Compliance</h2>

        {/* GST Records */}
        <div className="bg-card rounded-[var(--radius)] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
            <span style={subHeadingStyle}>GST Records</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["GSTIN", "City / Name", "Status", "Date", "Date of Registration", "Return Status"].map((h, i) => (
                    <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gstRecords.map((g, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>
                      <span className="flex items-center gap-[4px]">
                        {g.gstin}
                        <Copy size={14} style={{ color: "var(--muted-foreground)", cursor: "pointer" }} />
                      </span>
                    </td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{g.city}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>
                      <span style={{ color: g.status === "Active" ? "var(--risk-low)" : "var(--destructive)" }}>{g.status}</span>
                    </td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{g.date}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{g.dateReg}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>
                      <span className="px-[8px] py-[2px] rounded-[var(--radius-sm)]" style={{
                        ...chipTextStyle,
                        backgroundColor: g.returnStatus === "Filed" ? "var(--success-light)" : "var(--destructive-light)",
                        color: g.returnStatus === "Filed" ? "#1A7A1E" : "var(--destructive)",
                      }}>
                        {g.returnStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* EPF Records */}
        <div className="bg-card rounded-[var(--radius)] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="px-[16px] py-[12px]" style={{ borderBottom: "1px solid var(--border)" }}>
            <span style={subHeadingStyle}>EPF Records</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Code", "Factory Name", "Establishment", "DOE", "Date of Registration"].map((h, i) => (
                    <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {epfRecords.map((e, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{e.code}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{e.factory}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{e.establishment}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{e.doe}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{e.dateReg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── Related Party Transaction ─── */}
      <div id="related-party" className="flex flex-col gap-[20px]">
        <CollapsibleSection title="Related Party Transaction">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Name", "Company", "Transaction Type"].map((h, i) => (
                    <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {relatedPartyTransactions.map((t, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{t.party}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{t.relationship}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{t.transactionType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>
      </div>

      {/* ─── MSME Delayed Payments ─── */}
      <div id="msme" className="flex flex-col gap-[20px]">
        <CollapsibleSection title="MSME Delayed Payments">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
              <thead>
                <tr>
                  {["Supplier Name", "Amount (INR)", "Due Date", "Delayed Period"].map((h, i) => (
                    <th key={i} className="text-left" style={{ ...tableHeaderStyle, padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {msmePayments.map((p, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{p.supplier}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{p.amount}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{p.dueDate}</td>
                    <td style={{ ...tableCellStyle, padding: "10px 16px" }}>{p.delayedPeriod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}

/* ─── Helper ─── */
function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <span style={labelStyle}>{label}</span>
      <span style={bodyStyle}>{value}</span>
    </div>
  );
}