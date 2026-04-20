import { useState } from "react";
import { useNavigate } from "react-router";
import type React from "react";
import {
  Search,
  ArrowUpRight,
  AlertTriangle,
  Shield,
  FileText,
  Building2,
  TrendingUp,
  TrendingDown,
  Clock,
  ChevronRight,
  Plus,
  BarChart3,
  Radar,
  Scale,
  Fingerprint,
  Banknote,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  FONT,
  pageTitleStyle,
  sectionHeadingStyle,
  cardTitleStyle,
  bodyStyle,
  labelStyle,
  chipTextStyle,
  buttonTextStyle,
  tableHeaderStyle,
  tableCellStyle,
} from "../components/typography";

/* ─────────────────────── MOCK DATA ─────────────────────── */

const summaryStats = [
  {
    label: "Total Cases",
    value: "1,247",
    change: "+12.3%",
    trend: "up" as const,
    icon: <FileText size={20} />,
    color: "var(--primary)",
    bgColor: "var(--info-light)",
  },
  {
    label: "High Risk Alerts",
    value: "38",
    change: "+4.1%",
    trend: "up" as const,
    icon: <AlertTriangle size={20} />,
    color: "var(--risk-high)",
    bgColor: "var(--destructive-light)",
  },
  {
    label: "Entities Scanned",
    value: "3,842",
    change: "+8.7%",
    trend: "up" as const,
    icon: <Building2 size={20} />,
    color: "var(--risk-low)",
    bgColor: "var(--success-light)",
  },
  {
    label: "Pending Reviews",
    value: "156",
    change: "-5.2%",
    trend: "down" as const,
    icon: <Clock size={20} />,
    color: "var(--risk-medium)",
    bgColor: "var(--warning-light)",
  },
];

const riskDistribution = [
  { name: "High", value: 38, color: "var(--risk-high)" },
  { name: "Medium", value: 94, color: "var(--risk-medium)" },
  { name: "Low", value: 215, color: "var(--risk-low)" },
];

const weeklyTrend = [
  { week: "W1", entity: 45, individual: 32, bsa: 18 },
  { week: "W2", entity: 52, individual: 28, bsa: 24 },
  { week: "W3", entity: 38, individual: 41, bsa: 15 },
  { week: "W4", entity: 61, individual: 35, bsa: 22 },
  { week: "W5", entity: 48, individual: 38, bsa: 28 },
  { week: "W6", entity: 55, individual: 44, bsa: 20 },
];

type RiskLevel = "high" | "medium" | "low";

interface RecentCase {
  id: string;
  name: string;
  type: "Entity" | "Individual" | "BSA";
  risk: RiskLevel;
  date: string;
  status: "Completed" | "In Progress" | "Pending";
  signals: number;
}

const recentCases: RecentCase[] = [
  { id: "C-2026-1247", name: "Nexagen Infra Pvt Ltd", type: "Entity", risk: "high", date: "Feb 25, 2026", status: "Completed", signals: 12 },
  { id: "C-2026-1246", name: "Rajesh Khanna", type: "Individual", risk: "medium", date: "Feb 25, 2026", status: "In Progress", signals: 5 },
  { id: "C-2026-1245", name: "Meridian Holdings Ltd", type: "Entity", risk: "high", date: "Feb 24, 2026", status: "Completed", signals: 9 },
  { id: "C-2026-1244", name: "Wasim Akbar Khan", type: "BSA", risk: "low", date: "Feb 24, 2026", status: "Completed", signals: 2 },
  { id: "C-2026-1243", name: "Vantage Steels & Alloys Ltd", type: "Entity", risk: "high", date: "Feb 23, 2026", status: "Pending", signals: 7 },
  { id: "C-2026-1242", name: "Priya Malhotra", type: "Individual", risk: "low", date: "Feb 23, 2026", status: "Completed", signals: 1 },
];

interface QuickAction {
  label: string;
  description: string;
  icon: React.ReactNode;
  route: string;
  accentColor: string;
  bgColor: string;
}

const quickActions: QuickAction[] = [
  {
    label: "Entity Due Diligence",
    description: "Company network analysis with risk profiling across Identity, Integrity & Income dimensions.",
    icon: <Building2 size={22} />,
    route: "/",
    accentColor: "var(--primary)",
    bgColor: "var(--info-light)",
  },
  {
    label: "Individual Risk",
    description: "Comprehensive individual background verification — criminal, financial & digital footprint.",
    icon: <Fingerprint size={22} />,
    route: "/individual-risk",
    accentColor: "var(--chart-2)",
    bgColor: "var(--info-light)",
  },
  {
    label: "Netscan",
    description: "Deep network scanning to map entity relationships and uncover hidden risk connections.",
    icon: <Radar size={22} />,
    route: "/netscan",
    accentColor: "var(--primary-dark)",
    bgColor: "var(--info-light)",
  },
  {
    label: "BSA Summary",
    description: "Bank statement analysis with tampering detection, reconciliation & transaction patterns.",
    icon: <Banknote size={22} />,
    route: "/bsa",
    accentColor: "var(--risk-low)",
    bgColor: "var(--success-light)",
  },
  {
    label: "Court Check",
    description: "Criminal & civil litigation screening across all Indian courts and tribunals.",
    icon: <Scale size={22} />,
    route: "/crime-check",
    accentColor: "var(--risk-medium)",
    bgColor: "var(--warning-light)",
  },
  {
    label: "AML Check",
    description: "Anti-money laundering screening against global sanctions, PEP lists & adverse media.",
    icon: <Shield size={22} />,
    route: "/aml-check",
    accentColor: "var(--risk-high)",
    bgColor: "var(--destructive-light)",
  },
];

/* ─────────────────────── COMPONENTS ─────────────────────── */

/* ─── Search Bar ─── */
function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div
      className="flex items-center gap-[10px] w-full rounded-[var(--radius)]"
      style={{
        height: 40,
        border: "1px solid var(--border)",
        backgroundColor: "var(--input-background)",
        padding: "0 14px",
      }}
    >
      <Search size={18} style={{ color: "var(--muted-foreground)", flexShrink: 0 }} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search cases, entities, individuals..."
        className="flex-1 border-0 bg-transparent outline-none"
        style={{
          ...bodyStyle,
          color: "var(--foreground)",
          padding: 0,
        }}
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="border-0 bg-transparent cursor-pointer p-0"
          style={{ ...labelStyle, color: "var(--primary)" }}
        >
          Clear
        </button>
      )}
    </div>
  );
}

/* ─── Stat Card ─── */
function StatCard({ stat }: { stat: (typeof summaryStats)[number] }) {
  return (
    <div
      className="bg-card flex flex-col gap-[12px] p-[16px] rounded-[var(--radius)] flex-1 min-w-[200px]"
      style={{ border: "1px solid var(--border)" }}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex items-center justify-center rounded-[var(--radius-sm)]"
          style={{ width: 36, height: 36, backgroundColor: stat.bgColor }}
        >
          <span style={{ color: stat.color }}>{stat.icon}</span>
        </div>
        <div className="flex items-center gap-[4px]">
          {stat.trend === "up" ? (
            <TrendingUp size={14} style={{ color: stat.color }} />
          ) : (
            <TrendingDown size={14} style={{ color: stat.color }} />
          )}
          <span style={{ ...labelStyle, color: stat.color }}>{stat.change}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[2px]">
        <span style={labelStyle}>{stat.label}</span>
        <span
          style={{
            fontFamily: FONT,
            fontSize: "var(--text-xl)",
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: "0.1px",
            color: "var(--foreground)",
          }}
        >
          {stat.value}
        </span>
      </div>
    </div>
  );
}

/* ─── Quick Action Card ─── */
function QuickActionCard({ action }: { action: QuickAction }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(action.route)}
      className="bg-card flex flex-col gap-[12px] p-[16px] rounded-[var(--radius)] cursor-pointer border-0 text-left transition-all group"
      style={{
        border: "1px solid var(--border)",
        minWidth: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = action.accentColor;
        e.currentTarget.style.boxShadow = "var(--elevation-sm)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div
          className="flex items-center justify-center rounded-[var(--radius-sm)]"
          style={{ width: 40, height: 40, backgroundColor: action.bgColor }}
        >
          <span style={{ color: action.accentColor }}>{action.icon}</span>
        </div>
        <ArrowUpRight
          size={18}
          style={{ color: "var(--muted-foreground)", opacity: 0.5, transition: "opacity 0.2s" }}
          className="group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <span style={cardTitleStyle}>{action.label}</span>
        <span
          style={{
            ...bodyStyle,
            color: "var(--muted-foreground)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {action.description}
        </span>
      </div>
    </button>
  );
}

/* ─── Risk Badge ─── */
function RiskBadge({ risk }: { risk: RiskLevel }) {
  const config = {
    high: { bg: "var(--destructive-light)", color: "var(--risk-high)", label: "High" },
    medium: { bg: "var(--warning-light)", color: "var(--risk-medium)", label: "Medium" },
    low: { bg: "var(--success-light)", color: "var(--risk-low)", label: "Low" },
  };
  const c = config[risk];

  return (
    <span
      className="inline-flex items-center px-[8px] py-[2px] rounded-[20px]"
      style={{ ...chipTextStyle, backgroundColor: c.bg, color: c.color, height: 24 }}
    >
      {c.label}
    </span>
  );
}

/* ─── Status Badge ─── */
function StatusBadge({ status }: { status: RecentCase["status"] }) {
  const config = {
    Completed: { bg: "var(--success-light)", color: "var(--risk-low)" },
    "In Progress": { bg: "var(--info-light)", color: "var(--primary)" },
    Pending: { bg: "var(--warning-light)", color: "var(--risk-medium)" },
  };
  const c = config[status];

  return (
    <span
      className="inline-flex items-center px-[8px] py-[2px] rounded-[20px]"
      style={{ ...chipTextStyle, backgroundColor: c.bg, color: c.color, height: 24 }}
    >
      {status}
    </span>
  );
}

/* ─── Recent Cases Table ─── */
function RecentCasesCard() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-card rounded-[var(--radius)] w-full flex flex-col"
      style={{ border: "1px solid var(--border)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-[16px] py-[12px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-[8px]">
          <FileText size={18} style={{ color: "var(--foreground)" }} />
          <span style={cardTitleStyle}>Recent Cases</span>
        </div>
        <button
          className="flex items-center gap-[4px] border-0 bg-transparent cursor-pointer p-0"
          style={{ ...bodyStyle, color: "var(--primary)" }}
        >
          View All <ChevronRight size={14} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: 700 }}>
          <thead>
            <tr style={{ backgroundColor: "var(--muted)" }}>
              {["Case ID", "Name", "Type", "Risk", "Date", "Status", "Signals"].map((h) => (
                <th
                  key={h}
                  className="text-left px-[16px] py-[10px]"
                  style={tableHeaderStyle}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentCases.map((c) => (
              <tr
                key={c.id}
                className="cursor-pointer transition-colors"
                style={{ borderBottom: "1px solid var(--border)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--muted)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                onClick={() => {
                  if (c.type === "Entity") {
                    const slug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    navigate(`/company/${slug}`);
                  } else if (c.type === "Individual") {
                    navigate("/individual-risk");
                  } else {
                    navigate("/bsa");
                  }
                }}
              >
                <td className="px-[16px] py-[10px]">
                  <span style={{ ...tableCellStyle, color: "var(--primary)" }}>{c.id}</span>
                </td>
                <td className="px-[16px] py-[10px]">
                  <span style={tableCellStyle}>{c.name}</span>
                </td>
                <td className="px-[16px] py-[10px]">
                  <span
                    className="inline-flex items-center px-[8px] py-[2px] rounded-[var(--radius-sm)]"
                    style={{ ...chipTextStyle, backgroundColor: "var(--muted)", color: "var(--muted-foreground)", height: 24 }}
                  >
                    {c.type}
                  </span>
                </td>
                <td className="px-[16px] py-[10px]">
                  <RiskBadge risk={c.risk} />
                </td>
                <td className="px-[16px] py-[10px]">
                  <span style={{ ...tableCellStyle, color: "var(--muted-foreground)" }}>{c.date}</span>
                </td>
                <td className="px-[16px] py-[10px]">
                  <StatusBadge status={c.status} />
                </td>
                <td className="px-[16px] py-[10px]">
                  <div className="flex items-center gap-[4px]">
                    <AlertTriangle size={14} style={{ color: c.signals > 5 ? "var(--risk-high)" : "var(--muted-foreground)" }} />
                    <span style={{ ...tableCellStyle, color: c.signals > 5 ? "var(--risk-high)" : "var(--foreground)" }}>{c.signals}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── Risk Distribution Pie ─── */
function RiskDistributionCard() {
  const total = riskDistribution.reduce((a, b) => a + b.value, 0);

  return (
    <div
      className="bg-card rounded-[var(--radius)] flex flex-col"
      style={{ border: "1px solid var(--border)" }}
    >
      <div
        className="flex items-center gap-[8px] px-[16px] py-[12px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <Shield size={18} style={{ color: "var(--foreground)" }} />
        <span style={cardTitleStyle}>Risk Distribution</span>
      </div>

      <div className="flex items-center gap-[24px] px-[16px] py-[16px] flex-1">
        <div style={{ width: 140, height: 140, flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={riskDistribution}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={65}
                strokeWidth={0}
              >
                {riskDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-[12px] flex-1">
          {riskDistribution.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <span
                  className="rounded-full"
                  style={{ width: 10, height: 10, backgroundColor: item.color, flexShrink: 0 }}
                />
                <span style={bodyStyle}>{item.name} Risk</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <span style={{ ...bodyStyle, fontWeight: 600 }}>{item.value}</span>
                <span style={labelStyle}>({Math.round((item.value / total) * 100)}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Weekly Trend Chart ─── */
function WeeklyTrendCard() {
  return (
    <div
      className="bg-card rounded-[var(--radius)] flex flex-col"
      style={{ border: "1px solid var(--border)" }}
    >
      <div
        className="flex items-center justify-between px-[16px] py-[12px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-[8px]">
          <BarChart3 size={18} style={{ color: "var(--foreground)" }} />
          <span style={cardTitleStyle}>Weekly Case Volume</span>
        </div>
        <div className="flex items-center gap-[16px]">
          {[
            { label: "Entity DD", color: "var(--primary)" },
            { label: "Individual DD", color: "var(--chart-3)" },
            { label: "BSA", color: "var(--risk-low)" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-[6px]">
              <span className="rounded-[2px]" style={{ width: 10, height: 10, backgroundColor: item.color, flexShrink: 0 }} />
              <span style={labelStyle}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[16px] py-[16px]" style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyTrend} barGap={2} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="week"
              tick={{ fill: "var(--muted-foreground)", fontSize: 12, fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)" }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 12, fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)",
                fontSize: "var(--text-sm)",
              }}
            />
            <Bar dataKey="entity" name="Entity DD" fill="var(--primary)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="individual" name="Individual DD" fill="var(--chart-3)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="bsa" name="BSA" fill="var(--risk-low)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ─── Section Title ─── */
function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      <span style={{ color: "var(--foreground)" }}>{icon}</span>
      <span style={sectionHeadingStyle}>{title}</span>
    </div>
  );
}

/* ─────────────────────── MAIN PAGE ─────────────────────── */

export default function NewHomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex flex-col w-full min-h-full" style={{ fontFamily: FONT }}>
      {/* Page Header */}
      <div className="bg-card relative w-full">
        <div className="flex items-center justify-between px-[24px] py-[16px] gap-[16px]">
          <div className="flex flex-col gap-[4px] min-w-0 flex-1">
            <h1 style={{ ...pageTitleStyle, margin: 0 }}>
              Welcome back, Raj
            </h1>
            <p style={{ ...bodyStyle, color: "var(--muted-foreground)" }}>
              Here's what's happening across your risk assessment pipeline today.
            </p>
          </div>
          <div className="flex items-center gap-[10px] shrink-0">
            <div style={{ width: 320 }}>
              <SearchBar />
            </div>
            <button
              className="flex items-center gap-[6px] px-[16px] rounded-[var(--radius)] shrink-0 cursor-pointer border-0 hover:opacity-90 transition-opacity"
              style={{
                height: 40,
                backgroundColor: "var(--primary)",
                ...buttonTextStyle,
                color: "var(--primary-foreground)",
              }}
              onClick={() => navigate("/")}
            >
              <Plus size={16} />
              New Case
            </button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ backgroundColor: "var(--border)" }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[24px] px-[24px] py-[24px]">
        {/* Summary Stats Row */}
        <div className="flex gap-[16px] flex-wrap">
          {summaryStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-[12px]">
          <SectionTitle icon={<Radar size={20} />} title="Quick Actions" />
          <div className="grid gap-[16px]" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            {quickActions.map((action) => (
              <QuickActionCard key={action.label} action={action} />
            ))}
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid gap-[16px]" style={{ gridTemplateColumns: "2fr 1fr" }}>
          <WeeklyTrendCard />
          <RiskDistributionCard />
        </div>

        {/* Recent Cases Table */}
        <RecentCasesCard />
      </div>
    </div>
  );
}
