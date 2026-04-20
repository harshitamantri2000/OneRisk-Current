import { useState } from "react";
import { ChevronDown, ChevronRight, Maximize2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart as RechartsBarChart,
} from "recharts";
import svgPaths from "../../imports/svg-g4lsonu61q";
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

const bankStatements = [
  { id: 1, holder: "Mr Wasim Akbar Khan", number: "50100480267270", bank: "HDFC Bank Limited", period: "01/05/2023 & 24/05/2023", address: "Rd No18 Cross Rd No 10 Green Valley Mango Azadnagar, Jamshedpur, 832110, Jharkhand", status: "Tempering Detected", statusType: "error" as const },
  { id: 2, holder: "Mr Wasim Akbar Khan", number: "50100480267270", bank: "HDFC Bank Limited", period: "01/05/2023 & 24/05/2023", address: "Rd No18 Cross Rd No 10 Green Valley Mango Azadnagar, Jamshedpur, 832110, Jharkhand", status: "Reconciliation Failure", statusType: "error" as const },
  { id: 3, holder: "Mr Wasim Akbar Khan", number: "50100480267270", bank: "HDFC Bank Limited", period: "01/05/2023 & 24/05/2023", address: "Rd No18 Cross Rd No 10 Green Valley Mango Azadnagar, Jamshedpur, 832110, Jharkhand", status: "Not applicable (Scanned Stat.)", statusType: "neutral" as const },
  { id: 4, holder: "Mr Wasim Akbar Khan", number: "50100480267270", bank: "HDFC Bank Limited", period: "01/05/2023 & 24/05/2023", address: "Rd No18 Cross Rd No 10 Green Valley Mango Azadnagar, Jamshedpur, 832110, Jharkhand", status: "Genuine Statement", statusType: "success" as const },
];

const transactionData = [
  { month: "Jan", avgCredit: 3000, avgDebit: 2500, avgEOD: 8500 },
  { month: "Feb", avgCredit: 1500, avgDebit: 1500, avgEOD: 9000 },
  { month: "Mar", avgCredit: 10000, avgDebit: 5000, avgEOD: 9200 },
];

const incomeVsObligationData = [
  { month: "Jan", totalIncome: 5200, totalObligations: 3200 },
  { month: "Feb", totalIncome: 4800, totalObligations: 3400 },
  { month: "Mar", totalIncome: 5000, totalObligations: 3500 },
];

const riskTriggerData = [
  { name: "High Value Txn", count: 12, fill: "#E23318" },
  { name: "EMI Bounce", count: 8, fill: "#ED704E" },
  { name: "Circular Transaction", count: 5, fill: "#F69872" },
  { name: "Refunds Inc", count: 3, fill: "#FCC3A1" },
  { name: "Cash Spikes", count: 1, fill: "#FDE4D0" },
];

const topCreditors = [
  { name: "Sigma Components", value: 12, unit: "%", color: "#1766D6" },
  { name: "Hexa Utilities", value: 20, unit: "%", color: "#5CD4E6" },
  { name: "Delta Finserv", value: 85, unit: "₹", color: "#B67AE5" },
  { name: "Tristar Bank | EMI", value: 52, unit: "₹", color: "#704DD6" },
  { name: "Others Vertex Leasing", value: 25, unit: "₹", color: "#7FD771" },
];

/* ─── STATUS CHIP ─── */
function StatusChip({ status, type }: { status: string; type: "error" | "neutral" | "success" }) {
  const bgMap = { error: "var(--destructive-light)", neutral: "var(--muted)", success: "var(--success-light)" };
  const colorMap = { error: "var(--destructive)", neutral: "var(--foreground)", success: "#1A7A1E" };
  return (
    <span
      className="inline-flex items-center px-[8px] py-[4px] rounded-[var(--radius-sm)] whitespace-nowrap"
      style={{ ...chipTextStyle, backgroundColor: bgMap[type], color: colorMap[type] }}
    >
      {status}
    </span>
  );
}

/* ─── BREADCRUMB ─── */
function Breadcrumb() {
  const crumbs = [
    { label: "Home", active: false },
    { label: "BSA", active: false },
    { label: "Summary Page", active: true },
  ];
  return (
    <nav className="flex items-center gap-[2px]" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={c.label} className="flex items-center gap-[2px]">
          {i > 0 && <ChevronRight size={14} style={{ color: "var(--muted-foreground)" }} />}
          <span style={c.active ? breadcrumbActiveStyle : breadcrumbStyle}>{c.label}</span>
        </span>
      ))}
    </nav>
  );
}

/* ─── PAGE HEADER ─── */
function PageHeader() {
  return (
    <div className="bg-card relative w-full">
      <div className="px-[16px] pt-[6px] pb-[2px]">
        <Breadcrumb />
      </div>
      <div className="flex items-center justify-between px-[16px] py-[8px] gap-[12px]">
        <p style={pageTitleStyle}>Name of First Entity</p>
        <button
          className="flex items-center justify-center px-[24px] rounded-[var(--radius)] shrink-0 cursor-pointer border-0 hover:opacity-90 transition-opacity"
          style={{ height: "36px", backgroundColor: "var(--primary)", ...buttonTextStyle, color: "var(--primary-foreground)" }}
        >
          Download Excel
        </button>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
    </div>
  );
}

/* ─── AI SUMMARY CARD ─── */
function AISummaryCard() {
  return (
    <div className="relative rounded-[var(--radius)] w-full" style={{ border: "1px solid var(--risk-high-border)" }}>
      <div className="overflow-clip rounded-[inherit] w-full">
        {/* Risk badge */}
        <div className="flex items-center gap-[4px] px-[12px] py-[6px] rounded-br-[20px] shrink-0 w-fit" style={{ backgroundColor: "var(--risk-high)" }}>
          <div className="overflow-clip shrink-0 size-[14px] relative">
            <div className="absolute inset-[8.33%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                <path d={svgPaths.p2e25ed80} fill="white" />
              </svg>
            </div>
          </div>
          <span style={{ ...chipTextStyle, color: "var(--primary-foreground)" }}>High Risk</span>
        </div>
        {/* Summary text */}
        <div className="px-[12px] py-[10px]">
          <p style={{ ...bodyStyle, color: "var(--foreground)" }}>
            Summary will need form Product team
          </p>
        </div>
      </div>
      {/* AI Summary floating label */}
      <div className="absolute flex items-center gap-[4px] px-[16px] bg-card" style={{ top: "-10px", left: "50%", transform: "translateX(-50%)" }}>
        <div className="shrink-0 size-[20px] relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g>
              <path clipRule="evenodd" d={svgPaths.p3fdbb400} fill="url(#bsa_ai_grad1)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p8d54200} fill="url(#bsa_ai_grad2)" fillRule="evenodd" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="bsa_ai_grad1" x1="2.368" x2="17.632" y1="9.582" y2="9.582">
                <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="bsa_ai_grad2" x1="2.368" x2="17.632" y1="9.582" y2="9.582">
                <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p
          className="whitespace-nowrap"
          style={{
            ...labelStyle,
            background: "linear-gradient(90deg, #1C43B9, #041C66)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: undefined,
          }}
        >
          AI Summary
        </p>
      </div>
    </div>
  );
}

/* ─── BANK STATEMENTS TABLE ─── */
function BankStatementsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? bankStatements : bankStatements.slice(0, 4);
  return (
    <div>
      <p style={sectionHeadingStyle} className="mb-[16px]">
        Bank Statements({bankStatements.length})
      </p>
      <div className="bg-card rounded-[var(--radius)] border border-border overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ fontFamily: FONT }}>
            <thead>
              <tr style={{ backgroundColor: "var(--muted)" }}>
                {["Holder Name", "Number", "Bank Name", "Start & End", "Address", ""].map((h) => (
                  <th
                    key={h || "status"}
                    className="text-left"
                    style={{
                      ...tableHeaderStyle,
                      padding: "12px 16px",
                      borderBottom: "1px solid var(--border)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayed.map((row) => (
                <tr key={row.id} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "8px 12px" }}>
                    <span style={tableCellStyle}>1. {row.holder}</span>
                  </td>
                  <td style={{ padding: "8px 12px" }}>
                    <span style={tableCellStyle}>{row.number}</span>
                  </td>
                  <td style={{ padding: "8px 12px" }}>
                    <span style={tableCellStyle}>{row.bank}</span>
                  </td>
                  <td style={{ padding: "8px 12px" }}>
                    <span style={tableCellStyle}>{row.period}</span>
                  </td>
                  <td style={{ padding: "8px 12px", maxWidth: "200px" }}>
                    <span style={{ ...tableCellStyle }} className="block truncate">{row.address}</span>
                  </td>
                  <td style={{ padding: "8px" }}>
                    <StatusChip status={row.status} type={row.statusType} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* View All */}
        <button
          onClick={() => setShowAll((v) => !v)}
          className="flex items-center justify-center gap-[4px] w-full border-0 bg-transparent cursor-pointer py-[8px]"
          style={{ ...tableHeaderStyle }}
        >
          <span>View All</span>
          <ChevronDown size={16} className={showAll ? "rotate-180 transition-transform" : "transition-transform"} />
        </button>
      </div>
    </div>
  );
}

/* ─── STAT CARD ─── */
function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-card flex-1 rounded-[var(--radius-sm)] overflow-hidden p-[8px]">
      <p style={labelStyle} className="mb-[4px]">{label}</p>
      <div className="flex items-center gap-[6px]">
        <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: "var(--text-xl)", lineHeight: 1.4, letterSpacing: "0.08px", color: "var(--foreground)" }}>
          {value}
        </span>
        {sub && (
          <span
            style={{
              fontFamily: FONT,
              fontWeight: "var(--font-weight-medium)" as any,
              fontSize: "var(--text-sm)",
              fontStyle: "italic",
              lineHeight: 1.4,
              letterSpacing: "0.048px",
              color: "var(--foreground)",
              backgroundColor: "var(--muted)",
              padding: "0 4px",
            }}
          >
            {sub}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── CHART CARD WRAPPER ─── */
function ChartCard({ title, children, expandable = false }: { title: string; children: React.ReactNode; expandable?: boolean }) {
  return (
    <div className="bg-card rounded-[var(--radius)] p-[16px] flex flex-col gap-[16px] flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <p style={cardTitleStyle}>{title}</p>
        {expandable && (
          <button className="border-0 bg-transparent cursor-pointer p-0 text-foreground">
            <Maximize2 size={16} />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

/* ─── TRANSACTION BEHAVIOUR CHART ─── */
function TransactionBehaviourChart() {
  return (
    <ChartCard title="Transaction Behaviour Analysis" expandable>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={transactionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fontFamily: FONT, fill: "var(--muted-foreground)" }}
              axisLine={{ stroke: "var(--muted-foreground)" }}
              tickLine={{ stroke: "var(--muted-foreground)" }}
            />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 12, fontFamily: FONT, fill: "var(--muted-foreground)" }}
              axisLine={{ stroke: "var(--muted-foreground)" }}
              tickLine={{ stroke: "var(--muted-foreground)" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 12, fontFamily: FONT, fill: "var(--muted-foreground)" }}
              axisLine={{ stroke: "var(--muted-foreground)" }}
              tickLine={{ stroke: "var(--muted-foreground)" }}
            />
            <Tooltip
              contentStyle={{ fontFamily: FONT, fontSize: 12, borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}
            />
            <Bar yAxisId="left" dataKey="avgCredit" fill="#1766D6" barSize={24} name="Avg Credit" />
            <Bar yAxisId="left" dataKey="avgDebit" fill="#5CD4E6" barSize={24} name="Avg Debit" />
            <Line yAxisId="right" type="monotone" dataKey="avgEOD" stroke="#041C66" strokeWidth={2} dot={{ fill: "white", stroke: "#041C66", strokeWidth: 2 }} name="Avg EOD Balance" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <LegendItem color="#1766D6" label="Avg Credit" type="rect" />
        <LegendItem color="#5CD4E6" label="Avg Debit" type="rect" />
        <LegendItem color="#041C66" label="Avg EOD Balance" type="line" />
      </div>
    </ChartCard>
  );
}

/* ─── INCOME VS OBLIGATION CHART ─── */
function IncomeVsObligationChart() {
  return (
    <ChartCard title="Income Vs Obligation Trend">
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={incomeVsObligationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fontFamily: FONT, fill: "var(--muted-foreground)" }}
              axisLine={{ stroke: "var(--muted-foreground)" }}
              tickLine={{ stroke: "var(--muted-foreground)" }}
            />
            <YAxis
              tick={{ fontSize: 12, fontFamily: FONT, fill: "var(--muted-foreground)" }}
              axisLine={{ stroke: "var(--muted-foreground)" }}
              tickLine={{ stroke: "var(--muted-foreground)" }}
            />
            <Tooltip
              contentStyle={{ fontFamily: FONT, fontSize: 12, borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}
            />
            <defs>
              <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1766D6" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#1766D6" stopOpacity={0.08} />
              </linearGradient>
              <linearGradient id="oblGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E23318" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#E23318" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="totalIncome" stroke="#1766D6" strokeWidth={3} fill="url(#incomeGrad)" dot={{ fill: "white", stroke: "#1766D6", strokeWidth: 2 }} name="Total Income" />
            <Area type="monotone" dataKey="totalObligations" stroke="#E23318" strokeWidth={3} fill="url(#oblGrad)" dot={{ fill: "white", stroke: "#E23318", strokeWidth: 2 }} name="Total Obligations" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <LegendItem color="#4C92E6" label="Total Income" type="line" />
        <LegendItem color="#E23318" label="Total Obligations" type="line" />
      </div>
    </ChartCard>
  );
}

/* ─── LEGEND ITEM ─── */
function LegendItem({ color, label, type }: { color: string; label: string; type: "rect" | "line" }) {
  return (
    <div className="flex items-center gap-[7px] shrink-0">
      {type === "rect" ? (
        <div className="shrink-0" style={{ width: 14, height: 10, backgroundColor: color, borderRadius: 1 }} />
      ) : (
        <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
          <line x1="0" y1="7" x2="14" y2="7" stroke={color} strokeWidth={1.75} />
        </svg>
      )}
      <span style={{ ...bodyStyle, color: "var(--foreground)" }}>{label}</span>
    </div>
  );
}

/* ─── MAJOR RISK TRIGGERS ─── */
function MajorRiskTriggersChart() {
  return (
    <ChartCard title="Major Risk Triggers">
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={riskTriggerData} layout="vertical" margin={{ left: 80, right: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
            <XAxis
              type="number"
              hide
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 12, fontFamily: FONT, fill: "var(--muted-foreground)" }}
              axisLine={{ stroke: "var(--muted-foreground)" }}
              tickLine={false}
              width={100}
            />
            <Tooltip
              contentStyle={{ fontFamily: FONT, fontSize: 12, borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={30} label={{ position: "right", fontSize: 12, fontFamily: FONT, fill: "var(--muted-foreground)" }}>
              {riskTriggerData.map((entry, idx) => (
                <Cell key={idx} fill={entry.fill} />
              ))}
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

/* ─── TOP DEBTORS (EMPTY STATE) ─── */
function TopDebtorsCard() {
  return (
    <ChartCard title="Top Debtors">
      <div className="flex flex-col flex-1 items-center justify-center gap-[4px] pb-[16px]" style={{ minHeight: 200 }}>
        <div className="rounded-[6px] shrink-0 size-[34px] flex items-center justify-center" style={{ backgroundColor: "var(--warning-light)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d={svgPaths.p13bb9e80} fill="var(--foreground)" />
          </svg>
        </div>
        <p style={{ ...labelStyle, textAlign: "center" }} className="max-w-[248px]">
          Details may exist, we are unable to fetch at this moment.
        </p>
      </div>
    </ChartCard>
  );
}

/* ─── TOP CREDITORS (DONUT + LEGEND) ─── */
function TopCreditorsCard() {
  const pieData = topCreditors.map((c) => ({ name: c.name, value: c.value }));
  return (
    <ChartCard title="Top Creditors">
      <div className="flex flex-col items-center gap-[8px]">
        <div style={{ width: 120, height: 120 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={55}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {topCreditors.map((c, idx) => (
                  <Cell key={idx} fill={c.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-[2px] w-full">
          {topCreditors.map((c) => (
            <div key={c.name} className="flex items-center justify-between w-full" style={{ height: 21 }}>
              <div className="flex items-center gap-[7px]">
                <div className="shrink-0 rounded-[4px]" style={{ width: 10.5, height: 10.5, backgroundColor: c.color }} />
                <span style={{ ...bodyStyle, color: "var(--foreground)" }}>{c.name}</span>
              </div>
              <span style={{ ...bodyStyle, color: "var(--muted-foreground)" }}>
                {c.unit === "₹" ? `₹${c.value}` : `${c.value}%`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}

/* ─── ANALYSIS OVERVIEW SECTION ─── */
function AnalysisOverviewSection() {
  const [period, setPeriod] = useState("3 Months");
  return (
    <div className="rounded-[var(--radius)] p-[16px] flex flex-col gap-[16px]" style={{ backgroundColor: "var(--background)" }}>
      {/* Header row */}
      <div className="flex items-center justify-between">
        <p style={sectionHeadingStyle}>Analysis Overview</p>
        {/* Period dropdown */}
        <div
          className="bg-card flex items-center gap-[12px] px-[8px] py-[6px] rounded-[var(--radius-sm)] cursor-pointer"
          style={{ border: "1px solid rgba(19,26,37,0.2)" }}
        >
          <span style={{ ...labelStyle, color: "var(--foreground)" }}>{period}</span>
          <ChevronDown size={16} style={{ color: "var(--foreground)" }} />
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-[13px]">
        <StatCard label="Total Debits" value="₹42,85,400" sub="1,245 Transactions" />
        <StatCard label="Total Credits" value="48,12,000" sub="249 Transactions" />
        <StatCard label="EMI/ Income Ratios" value="42%" />
        <StatCard label="Income Volatility" value="18.2%" />
      </div>

      {/* Charts row 1 */}
      <div className="flex gap-[16px]">
        <TransactionBehaviourChart />
        <IncomeVsObligationChart />
      </div>

      {/* Charts row 2 */}
      <div className="flex gap-[16px]">
        <MajorRiskTriggersChart />
        <div className="flex gap-[16px] flex-1 min-w-0">
          <TopDebtorsCard />
          <TopCreditorsCard />
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function BsaSummaryPage() {
  return (
    <div className="bg-card flex flex-col w-full min-h-full" style={{ fontFamily: FONT }}>
      <PageHeader />
      <div className="flex flex-col gap-[16px] px-[16px] py-[16px] overflow-y-auto flex-1">
        <div className="mt-[4px]">
          <AISummaryCard />
        </div>
        <BankStatementsSection />
        <AnalysisOverviewSection />
      </div>
    </div>
  );
}
