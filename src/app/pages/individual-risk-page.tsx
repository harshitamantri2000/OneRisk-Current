import type React from "react";
import svgPaths from "../../imports/svg-apukiw61gl";
import imgPaytmIcon from "figma:asset/76a6da96803afff87f5271b9b8ea7d1ac69d677c.png";
import imgWhatsappIcon from "figma:asset/3d603c962587fb02da22f99b937eb7e37a5e5083.png";
import {
  FONT,
  pageTitleStyle,
  sectionHeadingStyle,
  cardTitleStyle,
  subHeadingStyle,
  bodyStyle,
  labelStyle,
  breadcrumbStyle,
  breadcrumbActiveStyle,
  chipTextStyle,
} from "../components/typography";

/* ─── Chevron separator ─── */
function ChevronRight() {
  return (
    <div className="overflow-clip shrink-0 size-[14px] relative">
      <div className="absolute inset-[21.25%_33.75%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
          <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Breadcrumb ─── */
function Breadcrumb() {
  return (
    <div className="flex items-center shrink-0">
      <p className="shrink-0" style={{ ...breadcrumbStyle }}>Home</p>
      <ChevronRight />
      <p className="shrink-0" style={{ ...breadcrumbStyle }}>Case Management</p>
      <ChevronRight />
      <p className="shrink-0" style={{ ...labelStyle, color: "var(--foreground)" }}>Case Overview (Rajesh Khanna)</p>
    </div>
  );
}

/* ─── Page Header ─── */
function PageHeader() {
  return (
    <div className="bg-card relative w-full">
      <div className="px-[16px] pt-[6px] pb-[2px]">
        <Breadcrumb />
      </div>
      <div className="flex items-center gap-[12px] px-[16px] py-[8px]">
        <p style={pageTitleStyle}>
          InstaScreen Assessment (Rajesh Khanna)
        </p>
        {/* High Risk badge */}
        <div className="flex items-center justify-center px-[8px] py-[4px] rounded-[4px]" style={{ backgroundColor: "var(--destructive-light)" }}>
          <p style={{ ...chipTextStyle, color: "var(--destructive)" }}>
            High Risk
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
    </div>
  );
}

/* ─── Key-Value Field ─── */
function InfoField({ label, value, hasBorder = false }: { label: string; value: string; hasBorder?: boolean }) {
  return (
    <div className="flex flex-1 flex-col gap-[8px] items-start relative min-w-0">
      {hasBorder && (
        <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-px pointer-events-none" style={{ backgroundColor: "var(--neutral-200, #BFC2C4)" }} />
      )}
      <p style={labelStyle}>{label}</p>
      <p style={bodyStyle}>{value}</p>
    </div>
  );
}

/* ─── Input Details Card ─── */
function InputDetailsCard() {
  return (
    <div className="bg-card rounded-[var(--radius)] relative w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius)]" style={{ border: "1px solid var(--border)" }} />
      {/* Header */}
      <div className="px-[16px] py-[8px]">
        <p style={cardTitleStyle}>Input Details</p>
      </div>
      {/* Values */}
      <div className="flex gap-[20px] px-[16px] py-[8px]">
        <div className="flex flex-1 flex-col gap-[8px] relative min-w-0">
          <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-px pointer-events-none" style={{ backgroundColor: "var(--neutral-200, #BFC2C4)" }} />
          <p style={labelStyle}>Full Name</p>
          <p style={bodyStyle}>Rajesh Khanna</p>
        </div>
        <div className="flex flex-1 flex-col gap-[8px] relative min-w-0">
          <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-px pointer-events-none" style={{ backgroundColor: "var(--neutral-200, #BFC2C4)" }} />
          <p style={labelStyle}>Mobile Number</p>
          <p style={bodyStyle}>{`+91  79870 00000`}</p>
        </div>
        <div className="flex flex-1 flex-col gap-[8px] relative min-w-0">
          <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-px pointer-events-none" style={{ backgroundColor: "var(--neutral-200, #BFC2C4)" }} />
          <p style={labelStyle}>Email Address</p>
          <p style={bodyStyle}>rajesh_khanna@gmail.com</p>
        </div>
        <div className="flex flex-1 flex-col gap-[8px] min-w-0">
          <p style={labelStyle}>PAN Number</p>
          <p style={bodyStyle}>ABCD7766J1</p>
        </div>
      </div>
    </div>
  );
}

/* ─── AI Summary Card ─── */
function AISummaryCard() {
  return (
    <div className="relative rounded-[var(--radius)] w-full" style={{ border: "1px solid var(--risk-high-border)" }}>
      <div className="overflow-clip rounded-[inherit] w-full">
        {/* Risk badge top-left — no icon, red highlight bg with padding */}
        <div className="flex items-center px-[12px] py-[6px] rounded-br-[20px] shrink-0 w-fit" style={{ backgroundColor: "var(--risk-high)" }}>
          <p className="whitespace-nowrap" style={{ ...labelStyle, color: "var(--card)" }}>
            High Risk
          </p>
        </div>

        {/* Bullet points */}
        <div className="px-[12px] py-[10px]">
          <ul className="flex flex-col gap-[4px] list-disc pl-[21px]" style={{ ...bodyStyle, color: "var(--muted-foreground)" }}>
            <li><span style={{ fontWeight: 700, color: "var(--foreground)" }}>Mobile number flagged as 'Revoked'</span> due to reported forged documentation.</li>
            <li><span style={{ fontWeight: 700, color: "var(--foreground)" }}>Discrepancy in employer name match</span> against EPF records.</li>
            <li><span style={{ fontWeight: 700, color: "var(--foreground)" }}>Disposable email address</span> detected.</li>
            <li><span style={{ fontWeight: 700, color: "var(--foreground)" }}>Low digital footprint</span> presence observed on major platforms.</li>
          </ul>
        </div>
      </div>

      {/* AI Summary label centered on top */}
      <div className="absolute flex items-center gap-[4px] px-[16px] bg-card" style={{ top: "-10px", left: "50%", transform: "translateX(-50%)" }}>
        <div className="shrink-0 size-[20px] relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p3fdbb400} fill="url(#ai_grad_ir1)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8d54200} fill="url(#ai_grad_ir2)" fillRule="evenodd" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="ai_grad_ir1" x1="2.368" x2="17.632" y1="9.582" y2="9.582">
                <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="ai_grad_ir2" x1="2.368" x2="17.632" y1="9.582" y2="9.582">
                <stop stopColor="#1C43B9" /><stop offset="1" stopColor="#041C66" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="whitespace-nowrap" style={{ ...labelStyle, background: "linear-gradient(90deg, #1C43B9, #041C66)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          AI Summary
        </p>
      </div>
    </div>
  );
}

/* ─── Status Chip ─── */
type ChipVariant = "success" | "danger" | "warning";

function StatusChip({ label, variant }: { label: string; variant: ChipVariant }) {
  const bgMap: Record<ChipVariant, string> = {
    success: "var(--success-light)",
    danger: "var(--destructive-light)",
    warning: "var(--warning-light)",
  };
  const colorMap: Record<ChipVariant, string> = {
    success: "var(--success-700, #1A7A1E)",
    danger: "var(--destructive-700, #A20C0F)",
    warning: "var(--warning-700, #AA5800)",
  };
  return (
    <div className="flex items-center justify-center px-[8px] py-[4px] rounded-[4px]" style={{ backgroundColor: bgMap[variant] }}>
      <p style={{ ...chipTextStyle, color: colorMap[variant] }}>{label}</p>
    </div>
  );
}

/* ─── Status Field ─── */
function StatusField({ label, chipLabel, chipVariant, hasBorder = false }: { label: string; chipLabel: string; chipVariant: ChipVariant; hasBorder?: boolean }) {
  return (
    <div className="flex flex-1 flex-col gap-[8px] items-start p-[8px] relative min-w-0 self-stretch">
      {hasBorder && (
        <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-px pointer-events-none" style={{ backgroundColor: "var(--border)" }} />
      )}
      <p style={labelStyle}>{label}</p>
      <StatusChip label={chipLabel} variant={chipVariant} />
    </div>
  );
}

/* ─── Identity Risks Section ─── */
function IdentityRisksSection() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      {/* Section heading */}
      <div className="flex gap-[12px] items-center py-[4px] w-full">
        <div className="shrink-0 size-[24px] relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <mask height="24" id="mask_badge" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
              <rect fill="#D9D9D9" height="24" width="24" />
            </mask>
            <g mask="url(#mask_badge)">
              <path d={svgPaths.pbcfc200} fill="var(--fill-0, var(--primary))" />
            </g>
          </svg>
        </div>
        <p style={sectionHeadingStyle}>Identity Risks</p>
      </div>

      {/* Main identity card */}
      <div className="rounded-[var(--radius)] w-full relative">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius)]" style={{ border: "1px solid var(--neutral-200, #BFC2C4)" }} />
        <div className="overflow-clip rounded-[inherit] w-full">
          {/* Status indicators row */}
          <div className="px-[16px] pt-[16px] pb-[8px]">
            <div className="rounded-[var(--radius)] w-full" style={{ backgroundColor: "var(--muted)" }}>
              <div className="flex gap-[16px] items-start p-[8px]">
                <StatusField label="Phone Number Validity" chipLabel="Valid" chipVariant="success" hasBorder />
                <StatusField label="Name Match" chipLabel="Exact Match" chipVariant="success" hasBorder />
                <StatusField label="Phone Revocation Status" chipLabel="Revoked" chipVariant="danger" hasBorder />
                <StatusField label="Digital Footprint" chipLabel="Low Presence" chipVariant="danger" hasBorder />
                <StatusField label="Email Validity" chipLabel="Valid" chipVariant="success" hasBorder />
                <StatusField label="Disposable Email" chipLabel="Disposable" chipVariant="danger" />
              </div>
            </div>
          </div>

          {/* Telecom Details subsection */}
          <div className="px-[16px] pb-[8px]">
            <div className="flex flex-col items-start pb-[8px] w-full relative">
              <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{ backgroundColor: "var(--border)" }} />
              {/* Subsection header */}
              <div className="py-[8px]">
                <p style={subHeadingStyle}>Telecom Details</p>
              </div>
              {/* Row 1 */}
              <div className="flex flex-col gap-[16px] p-[8px] w-full">
                <div className="flex gap-[20px] items-start w-full">
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Carrier/Network</p>
                    <p style={bodyStyle}>Reliance Jio (Maharashtra)</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Registered Name</p>
                    <p style={bodyStyle}>Rajesh Khanna</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Phone Revocation Reason</p>
                    <p style={{ ...bodyStyle, color: "var(--foreground)" }}>DOT reported fake or forged cases</p>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="flex gap-[20px] items-start w-full">
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Mobile Tenure</p>
                    <p style={bodyStyle}>48 Months</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Porting History</p>
                    <p style={bodyStyle}>No (Original Operator)</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Digital Footprint</p>
                    <div className="flex gap-[8px] items-start">
                      <div className="shrink-0 size-[28px] rounded-[8px] relative">
                        <img alt="Paytm" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPaytmIcon} />
                      </div>
                      <div className="shrink-0 size-[28px] rounded-[8px] relative">
                        <img alt="WhatsApp" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgWhatsappIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Details subsection */}
          <div className="px-[16px] pb-[8px]">
            <div className="flex flex-col items-start w-full">
              {/* Subsection header */}
              <div className="py-[8px]">
                <p style={subHeadingStyle}>Email Details</p>
              </div>
              {/* Email fields */}
              <div className="p-[8px] w-full">
                <div className="flex gap-[20px] items-start w-full">
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Risk Signals</p>
                    <div className="flex gap-[8px] items-start">
                      <StatusChip label="Disposable" variant="danger" />
                      <StatusChip label="Leaked" variant="danger" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>First Seen</p>
                    <p style={bodyStyle}>2025-06-01</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Domain Age</p>
                    <p style={bodyStyle}>25 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Income Risks Section ─── */
function IncomeRisksSection() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      {/* Section heading */}
      <div className="flex gap-[12px] items-center py-[4px] w-full">
        <div className="shrink-0 size-[24px] relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <mask height="24" id="mask_currency" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
              <rect fill="#D9D9D9" height="24" width="24" />
            </mask>
            <g mask="url(#mask_currency)">
              <path d={svgPaths.p1611d400} fill="var(--fill-0, var(--primary))" />
            </g>
          </svg>
        </div>
        <p style={sectionHeadingStyle}>Income Risks</p>
      </div>

      {/* Income card */}
      <div className="rounded-[var(--radius)] w-full relative">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius)]" style={{ border: "1px solid var(--neutral-200, #BFC2C4)" }} />
        <div className="overflow-clip rounded-[inherit] w-full">
          <div className="px-[16px] py-[8px] flex flex-col gap-[8px]">
            {/* Employment Details */}
            <div className="flex flex-col items-start pb-[8px] w-full relative">
              <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{ backgroundColor: "var(--border)" }} />
              <div className="py-[8px]">
                <p style={subHeadingStyle}>Employment Details</p>
              </div>
              <div className="flex gap-[8px] items-center py-[8px] px-[8px]">
                {/* Briefcase icon */}
                <div className="overflow-clip shrink-0 size-[20px] relative">
                  <div className="absolute inset-[10.42%_8.33%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
                      <path d={svgPaths.pfd74000} fill="var(--fill-0, var(--text-secondary))" />
                    </svg>
                  </div>
                </div>
                <p style={{ ...labelStyle }}>No employment details found</p>
              </div>
            </div>

            {/* Business Details */}
            <div className="flex flex-col items-start w-full">
              <div className="py-[8px]">
                <p style={subHeadingStyle}>Business Details</p>
              </div>
              <div className="flex flex-col gap-[16px] p-[8px] w-full">
                {/* Row 1 */}
                <div className="flex gap-[20px] items-start w-full">
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>GST linked to PAN</p>
                    <p style={bodyStyle}>Yes</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Active GSTINs</p>
                    <p style={bodyStyle}>4</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Registration Date</p>
                    <p style={{ ...bodyStyle, color: "var(--foreground)" }}>2021-02-20</p>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="flex gap-[20px] items-start w-full">
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Legal Name</p>
                    <p style={bodyStyle}>Rajesh L Khanna</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Trade Name</p>
                    <p style={bodyStyle}>Rajesh Traders</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Turnover Slab (2024 - 2025)</p>
                    <p style={{ ...bodyStyle, color: "var(--foreground)" }}>Rs 1.5 Cr to 5 Cr</p>
                  </div>
                </div>
                {/* Row 3 */}
                <div className="flex gap-[20px] items-start w-full">
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p style={labelStyle}>Promoters</p>
                    <p style={bodyStyle}>Rajesh Khanna, Surya Kumar Sharma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Integrity Risks Section ─── */
function IntegrityRisksSection() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      {/* Section heading */}
      <div className="flex gap-[12px] items-center py-[4px] w-full">
        <div className="shrink-0 size-[24px] relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <clipPath id="clip_shield">
              <rect fill="white" height="24" width="24" />
            </clipPath>
            <g clipPath="url(#clip_shield)">
              <mask height="25" id="mask_shield" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="-1">
                <rect fill="#D9D9D9" height="24" width="24" y="-0.5" />
              </mask>
              <g mask="url(#mask_shield)">
                <path d={svgPaths.p19bb9400} fill="var(--fill-0, var(--primary))" />
              </g>
            </g>
          </svg>
        </div>
        <p style={sectionHeadingStyle}>Integrity Risks</p>
      </div>

      {/* Green success card */}
      <div className="rounded-[var(--radius)] w-full relative self-stretch">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius)]" style={{ border: "1px solid var(--success-700, #1A7A1E)" }} />
        <div className="overflow-clip rounded-[inherit] w-full">
          <div className="flex items-center gap-[4px] p-[16px]">
            {/* Check circle icon */}
            <div className="overflow-clip shrink-0 size-[24px] relative">
              <div className="absolute inset-[8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p318ad000} fill="var(--fill-0, #1A7A1E)" />
                </svg>
              </div>
            </div>
            <p style={{ ...bodyStyle, color: "var(--foreground)" }}>
              No records found on the National Cybercrime Reporting Portal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function IndividualRiskPage() {
  return (
    <div className="bg-card flex flex-col w-full min-h-full" style={{ fontFamily: FONT }}>
      <PageHeader />
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-[20px] px-[48px] py-[20px]">
          {/* Main content card */}
          <div className="bg-card rounded-[var(--radius)] w-full relative">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius)]" style={{ border: "1px solid var(--border)" }} />
            <div className="overflow-clip rounded-[inherit] w-full">
              <div className="flex flex-col gap-[24px] p-[20px]">
                {/* AI Summary */}
                <div className="mt-[4px]">
                  <AISummaryCard />
                </div>

                {/* Identity Risks */}
                <IdentityRisksSection />

                {/* Income Risks */}
                <IncomeRisksSection />

                {/* Integrity Risks */}
                <IntegrityRisksSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}