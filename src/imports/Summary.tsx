import svgPaths from "./svg-93dpgui3w0";
import { CompanyNetworkGraph } from "../app/components/company-network-graph";

function Breadcrumb() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="breadcrumb">
      <p className="relative shrink-0 text-text-secondary" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Risk Bundles
      </p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
        <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
            <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 text-text-secondary" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Entity Due Diligence
      </p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
        <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
            <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 text-foreground" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.3, letterSpacing: "0.048px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Case overview
      </p>
    </div>
  );
}

function CombinedHeader() {
  return (
    <div className="bg-card relative w-full" data-name="combined-header">
      {/* Row 1: Breadcrumb */}
      <div className="px-[16px] pt-[6px] pb-[2px]">
        <Breadcrumb />
      </div>
      {/* Row 2: Company info block + Download button (vertically centered) */}
      <div className="flex items-center justify-between px-[16px] py-[12px] gap-[12px]">
        <div className="min-w-0 flex-1">
          <p
            className="text-foreground truncate"
            style={{
              fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: "var(--font-weight-medium)",
              fontFeatureSettings: "'case', 'liga' 0",
              fontSize: "var(--text-lg)",
              lineHeight: 1.4,
              letterSpacing: "0.072px",
            }}
          >
            Nexagen Infra Private Limited
          </p>
          <div
            className="flex flex-wrap items-center gap-x-[6px] gap-y-[2px] mt-[4px]"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: 1.3,
              letterSpacing: "0.048px",
              fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)",
              fontFeatureSettings: "'case', 'liga' 0",
            }}
          >
            <span className="flex items-center gap-[3px] shrink-0">
              <span className="text-muted-foreground">CIN:</span>
              <span className="text-foreground">U45201MH2015PTC267890</span>
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-[3px] shrink-0">
              <span className="text-muted-foreground">Inc:</span>
              <span className="text-foreground">12 Aug 2015</span>
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-[3px] shrink-0">
              <span className="text-muted-foreground">Last Filed:</span>
              <span className="text-foreground">31 Mar 2024</span>
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-[3px] shrink-0">
              <span className="text-muted-foreground">Status:</span>
              <span className="text-foreground">Active</span>
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-[3px] min-w-0">
              <span className="text-muted-foreground shrink-0">Address:</span>
              <span className="text-foreground truncate">Plot 47, Sector 18, Vashi, Navi Mumbai, Maharashtra 400703</span>
            </span>
          </div>
        </div>
        <div
          className="bg-primary content-stretch flex items-center justify-center px-[16px] relative rounded-[var(--radius)] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
          style={{ height: "32px" }}
          data-name="button"
        >
          <p
            className="relative shrink-0 text-center text-primary-foreground whitespace-nowrap"
            style={{
              fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: "var(--font-weight-medium)",
              fontFeatureSettings: "'case', 'liga' 0",
              fontSize: "var(--text-sm)",
              lineHeight: 1.4,
            }}
          >
            Download Case Report
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
    </div>
  );
}

/* Dead Figma-imported sidebar/top-bar components removed — using app/components/sidebar.tsx + top-bar.tsx */
function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g id="Frame">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p9279f80} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3ddcd280} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame />
      <p
        className="relative shrink-0 text-primary-darker whitespace-nowrap"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "var(--font-weight-medium)",
          fontFeatureSettings: "'case', 'liga' 0",
          fontSize: "var(--text-base)",
          lineHeight: 1.4,
          letterSpacing: "0.056px",
        }}
      >
        AI Summary
      </p>
    </div>
  );
}

function BadgeChip() {
  return (
    <div className="bg-warning content-stretch flex gap-[4px] items-center justify-end px-[10px] py-[4px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:exclamation-triangle">
        <div className="absolute inset-[8.05%_3.79%_8.33%_4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4409 16.724">
            <path d={svgPaths.p1056a000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <p
        className="relative shrink-0 text-white tracking-[0.048px] whitespace-nowrap"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "var(--font-weight-medium)",
          fontFeatureSettings: "'case', 'liga' 0",
          fontSize: "var(--text-sm)",
          lineHeight: 1.4,
        }}
      >
        Medium Risk Network
      </p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <BadgeChip />
      <ul
        className="flex flex-col gap-[6px] list-disc pl-[18px] w-full"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontFeatureSettings: "'case', 'liga' 0",
        }}
      >
        <li className="text-foreground leading-[1.5] tracking-[0.048px]" style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-sm)" }}>
          The network analysis reveals a <span className="text-destructive" style={{ fontWeight: "var(--font-weight-medium)" }}>MEDIUM</span> risk profile across 7 entities connected to Nexagen Infra Private Limited.
        </li>
        <li className="text-foreground leading-[1.5] tracking-[0.048px]" style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-sm)" }}>
          Pinnacle Realtors Pvt Ltd (subsidiary) presents the highest risk due to 3 active RERA complaints, 2 pending civil suits, and a 42% revenue decline YoY, with delayed GST filings exceeding 6 months.
        </li>
        <li className="text-foreground leading-[1.5] tracking-[0.048px]" style={{ fontWeight: "var(--font-weight-medium)", fontSize: "var(--text-sm)" }}>
          Key risk drivers include unresolved legal proceedings against Pinnacle Realtors, adverse auditor comments for Greenscape Developers LLP, and revenue contraction across 3 entities. Director Raj Kumar Sharma&apos;s common directorship in Pinnacle Realtors amplifies influence risk.
        </li>
      </ul>
    </div>
  );
}

function Frame67() {
  return (
    <div
      className="relative rounded-[var(--radius)] w-full h-full flex flex-col"
      style={{
        backgroundImage: "linear-gradient(101.581deg, var(--ai-summary-start) 0.67593%, var(--ai-summary-end) 117.74%)",
      }}
    >
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[inherit] w-full flex-1">
        <Frame76 />
        <Frame78 />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[var(--radius)]"
        style={{
          padding: '1px',
          background: 'linear-gradient(135deg, var(--warning-border), var(--ai-summary-start), var(--warning-border))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:game-structure">
        <div className="absolute inset-[8.32%_8.33%_8.33%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0041">
            <path d={svgPaths.p3a842900} fill="var(--fill-0, #131A25)" id="Vector" />
          </svg>
        </div>
      </div>
      <p
        className="relative shrink-0 text-foreground"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "var(--font-weight-medium)",
          fontFeatureSettings: "'case', 'liga' 0",
          fontSize: "var(--text-base)",
          lineHeight: 1.4,
          letterSpacing: "0.056px",
        }}
      >
        Network Map ( 7 )
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-card content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:code-branch">
        <div className="absolute inset-[8.55%_16.9%_8.07%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9449 20.0114">
            <path d={svgPaths.p34994800} fill="var(--fill-0, #0B3A9A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:table">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p30ad7900} fill="var(--fill-0, #131A25)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    null
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame23 />
      <Frame36 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative bg-card rounded-[var(--radius)] w-full flex flex-col overflow-hidden h-full">
      {/* Card header */}
      <div className="content-stretch flex flex-col items-start px-[16px] pt-[12px] pb-[8px] relative shrink-0 w-full" style={{ zIndex: 2 }}>
        <Frame25 />
      </div>
      {/* Full-size network graph */}
      <div className="relative w-full flex-1 min-h-[280px]">
        <CompanyNetworkGraph />
      </div>
      {/* Risk legend */}
      <div
        className="absolute bottom-[12px] right-[12px] flex flex-col gap-[6px] bg-card rounded-[var(--radius)] px-[10px] py-[8px] border border-border"
        style={{ zIndex: 3, boxShadow: "var(--elevation-sm)" }}
      >
        <div className="flex items-center gap-[6px]">
          <span
            className="inline-block shrink-0 rounded-full"
            style={{ width: 8, height: 8, backgroundColor: "var(--risk-high)" }}
          />
          <span
            className="text-foreground whitespace-nowrap"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "var(--text-sm, 12px)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: 1.4,
              letterSpacing: "0.048px",
            }}
          >
            High Risk
          </span>
        </div>
        <div className="flex items-center gap-[6px]">
          <span
            className="inline-block shrink-0 rounded-full"
            style={{ width: 8, height: 8, backgroundColor: "var(--risk-medium)" }}
          />
          <span
            className="text-foreground whitespace-nowrap"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "var(--text-sm, 12px)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: 1.4,
              letterSpacing: "0.048px",
            }}
          >
            Medium Risk
          </span>
        </div>
        <div className="flex items-center gap-[6px]">
          <span
            className="inline-block shrink-0 rounded-full"
            style={{ width: 8, height: 8, backgroundColor: "var(--risk-low)" }}
          />
          <span
            className="text-foreground whitespace-nowrap"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "var(--text-sm, 12px)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: 1.4,
              letterSpacing: "0.048px",
            }}
          >
            Low Risk
          </span>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:building">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p8d87100} fill="var(--fill-0, #131A25)" id="Vector" />
          </svg>
        </div>
      </div>
      <p
        className="relative shrink-0 text-foreground"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "var(--font-weight-medium)",
          fontFeatureSettings: "'case', 'liga' 0",
          fontSize: "var(--text-base)",
          lineHeight: 1.4,
          letterSpacing: "0.056px",
        }}
      >
        Entity Listing
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[28px]" data-name="Icon=fi:chevron-down-small">
            <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4333 6.76667">
                <path clipRule="evenodd" d={svgPaths.p19217900} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-card content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0">
      <p className="font-medium leading-[1.4] relative shrink-0 text-primary-dark tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-base)" }}>{`Riskiest Entities (2) `}</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-[140px]">
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        All Entities (7)
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-muted content-stretch flex items-center overflow-clip p-[6px] relative rounded-[8px] shrink-0">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-muted content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[2px] shrink-0">
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
        Subsidiary
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <ol className="block relative shrink-0 text-foreground whitespace-nowrap" start={1} style={{ fontFeatureSettings: "'case'", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, letterSpacing: "0.056px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <li className="ms-[24px] whitespace-pre-wrap">
          <span style={{ lineHeight: 1.4 }}>{`Pinnacle Realtors Private Limited `}</span>
        </li>
      </ol>
      <Frame56 />
    </div>
  );
}

function BadgeChip1() {
  return (
    <div className="bg-destructive content-stretch flex gap-[4px] h-[28px] items-center justify-end px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
      <div className="max-h-[18px] max-w-[18px] min-h-[16px] min-w-[16px] overflow-clip relative shrink-0 size-[18px]" data-name="Icon=u:exclamation-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p3927bd80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 text-white whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        High Risk
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between py-[10px] px-[16px] relative w-full">
          <Frame70 />
          <BadgeChip1 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative w-full">
          <p
            className="flex-1 text-foreground tracking-[0.048px]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: "var(--font-weight-medium)",
              fontFeatureSettings: "'case', 'liga' 0",
              fontSize: "var(--text-sm)",
              lineHeight: 1.5,
            }}
          >
            Pinnacle Realtors has 3 active RERA complaints, 2 pending civil suits, and reported a 42% revenue decline YoY. GST return filings have been delayed by over 6 months, with qualified auditor opinions in the last 2 financial years.
          </p>
        </div>
      </div>
    </div>
  );
}

function CurrencyRupeeCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="currency_rupee_circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency_rupee_circle">
          <mask height="20" id="mask0_1_4550" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4550)">
            <path d={svgPaths.p7edec00} fill="var(--fill-0, #1C1B1F)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[24px] shrink-0">
      <CurrencyRupeeCircle />
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Income Risk
      </p>
    </div>
  );
}

function Badge() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="badge">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="badge">
          <mask height="20" id="mask0_1_4633" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4633)">
            <path d={svgPaths.p2b94e1f0} fill="var(--fill-0, #1C1B1F)" id="badge_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[24px] shrink-0">
      <Badge />
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Identity Risk
      </p>
    </div>
  );
}

function VerifiedUser() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="verified_user">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="verified_user">
          <mask height="20" id="mask0_1_4558" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4558)">
            <path d={svgPaths.p27ff3800} fill="var(--fill-0, #1C1B1F)" id="verified_user_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[24px] shrink-0">
      <VerifiedUser />
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Integrity Risk
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame60 />
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[32px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=fi:arrow-right">
        <div className="absolute inset-[17.08%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 13.1667">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2c8cc600} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2f5a36e0} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <Frame73 />
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-card relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pb-[10px] relative rounded-[inherit] w-full">
        <Frame28 />
        <Frame30 />
        <Frame58 />
        <div className="absolute h-0 left-[16px] top-[58px] w-[112px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 1">
              <line id="Line 44" stroke="var(--stroke-0, #E7E8E9)" x2="112" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-risk-high-border border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-muted content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[2px] shrink-0">
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
        Associate
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <ol className="block relative shrink-0 text-foreground whitespace-nowrap" start={1} style={{ fontFeatureSettings: "'case'", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, letterSpacing: "0.056px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <li className="ms-[24px] whitespace-pre-wrap">
          <span style={{ lineHeight: 1.4 }}>{`Greenscape Developers LLP `}</span>
        </li>
      </ol>
      <Frame57 />
    </div>
  );
}

function BadgeChip2() {
  return (
    <div className="bg-warning content-stretch flex gap-[4px] h-[28px] items-center justify-end px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:exclamation-triangle">
        <div className="absolute inset-[8.05%_3.79%_8.33%_4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4409 16.724">
            <path d={svgPaths.p1056a000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 text-white whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Medium Risk
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between py-[10px] px-[16px] relative w-full">
          <Frame72 />
          <BadgeChip2 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative w-full">
          <p
            className="flex-1 text-foreground tracking-[0.048px]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: "var(--font-weight-medium)",
              fontFeatureSettings: "'case', 'liga' 0",
              fontSize: "var(--text-sm)",
              lineHeight: 1.5,
            }}
          >
            Greenscape Developers shows qualified auditor opinions in the last 2 financial years, negative PAT margins, and a debt-to-equity ratio exceeding 3.5x indicating potential financial distress. Director Sunita Devi Agarwal is a partner in the LLP.
          </p>
        </div>
      </div>
    </div>
  );
}

function CurrencyRupeeCircle1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="currency_rupee_circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency_rupee_circle">
          <mask height="20" id="mask0_1_4550" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4550)">
            <path d={svgPaths.p7edec00} fill="var(--fill-0, #1C1B1F)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[24px] shrink-0">
      <CurrencyRupeeCircle1 />
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Income Risk
      </p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="badge">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="badge">
          <mask height="20" id="mask0_1_4633" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4633)">
            <path d={svgPaths.p2b94e1f0} fill="var(--fill-0, #1C1B1F)" id="badge_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[24px] shrink-0">
      <Badge1 />
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Identity Risk
      </p>
    </div>
  );
}

function VerifiedUser1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="verified_user">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="verified_user">
          <mask height="20" id="mask0_1_4558" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4558)">
            <path d={svgPaths.p27ff3800} fill="var(--fill-0, #1C1B1F)" id="verified_user_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[24px] shrink-0">
      <VerifiedUser1 />
      <p className="font-medium leading-[1.4] relative shrink-0 text-foreground text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Integrity Risk
      </p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame63 />
      <Frame64 />
      <Frame65 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[32px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=fi:arrow-right">
        <div className="absolute inset-[17.08%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 13.1667">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2c8cc600} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2f5a36e0} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <Frame74 />
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-card relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pb-[10px] relative rounded-[inherit] w-full">
        <Frame31 />
        <Frame32 />
        <Frame59 />
        <div className="absolute h-0 left-[16px] top-[58px] w-[112px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 1">
              <line id="Line 44" stroke="var(--stroke-0, #E7E8E9)" x2="112" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-warning-border border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative bg-card rounded-[var(--radius)] w-full">
      
      
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:shield-exclamation">
        <div className="absolute inset-[8.34%_16.67%_8.35%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19.9937">
            <path d={svgPaths.pd70c4c0} fill="var(--fill-0, #131A25)" id="Vector" />
          </svg>
        </div>
      </div>
      <p
        className="relative shrink-0 text-foreground"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "var(--font-weight-medium)",
          fontFeatureSettings: "'case', 'liga' 0",
          fontSize: "var(--text-base)",
          lineHeight: 1.4,
          letterSpacing: "0.056px",
        }}
      >
        Risk Signals Summary
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[28px]" data-name="Icon=fi:chevron-down-small">
            <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4333 6.76667">
                <path clipRule="evenodd" d={svgPaths.p19217900} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="badge">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="badge">
          <mask height="20" id="mask0_1_4633" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4633)">
            <path d={svgPaths.p2b94e1f0} fill="var(--fill-0, #1C1B1F)" id="badge_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-br-[16px] shrink-0">
      <Badge2 />
      <p className="relative shrink-0 text-foreground" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Identity Risk
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:info-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p35475100} fill="var(--fill-0, #484E56)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame66 />
      <Frame87 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[12px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Entity Verification
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            5/7 entities active
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-card flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame86 />
        <Frame52 />
      </div>
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VerifiedUser2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="verified_user">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="verified_user">
          <mask height="20" id="mask0_1_4558" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4558)">
            <path d={svgPaths.p27ff3800} fill="var(--fill-0, #1C1B1F)" id="verified_user_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-br-[16px] shrink-0">
      <VerifiedUser2 />
      <p className="relative shrink-0 text-foreground" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Integrity Risk
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:info-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p35475100} fill="var(--fill-0, #484E56)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame79 />
      <Frame89 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Legal Records (Entity)
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            3/7 entities flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Legal Records (Directors):
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            1/7 directors flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] relative shrink-0 text-muted-foreground text-[14px] tracking-[0.056px] w-full">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Sanctions Records:
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        No flags found
      </p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] relative shrink-0 text-muted-foreground text-[14px] tracking-[0.056px] w-full">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        PEP Records:
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        No flags found
      </p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] relative shrink-0 text-muted-foreground text-[14px] tracking-[0.056px] w-full">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Blacklist Records:
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        No flags found
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Adverse Media Mentions:
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            1/7 entities flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[10px] px-[12px] relative w-full">
        <Frame53 />
        <Frame54 />
        <Frame55 />
        <Frame82 />
        <Frame83 />
        <Frame84 />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-card flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame88 />
        <Frame81 />
      </div>
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame46 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame48 />
      </div>
    </div>
  );
}

function CurrencyRupeeCircle2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="currency_rupee_circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency_rupee_circle">
          <mask height="20" id="mask0_1_4550" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_4550)">
            <path d={svgPaths.p7edec00} fill="var(--fill-0, #1C1B1F)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-br-[16px] shrink-0">
      <CurrencyRupeeCircle2 />
      <p className="relative shrink-0 text-foreground" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Income Risk
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:info-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p35475100} fill="var(--fill-0, #484E56)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame85 />
      <Frame91 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Revenue Change
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            3/7 entities flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Negative Profit After Tax
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            2/7 entities flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Debt to Equity Ratio
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            2/7 entities flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Negative Operating Cash Flow
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            1/7 entities flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Adverse Auditor Comments
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            1/7 entities flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] relative shrink-0 text-muted-foreground text-[14px] tracking-[0.056px] w-full">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        Missed EPF Filings
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        No flags found
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] px-[6px] py-[2px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Missed GST Filings
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            2/7 entities flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[10px] px-[12px] relative w-full">
        <Frame93 />
        <Frame94 />
        <Frame95 />
        <Frame96 />
        <Frame97 />
        <Frame98 />
        <Frame99 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-card flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame90 />
        <Frame92 />
      </div>
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-info-light content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-br-[16px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:channel">
        <div className="absolute inset-[8.3%_4.12%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3428 16.6737">
            <path d={svgPaths.p8910200} fill="var(--fill-0, #131A25)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 text-foreground" style={{ fontFeatureSettings: "'case', 'liga' 0", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: 1.4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Influence Risk
      </p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:info-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p35475100} fill="var(--fill-0, #484E56)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame101 />
      <Frame102 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6px] py-[2px] relative w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            High Risk Common Directorship
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            1/7 flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-destructive-light relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-destructive border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6px] py-[2px] relative w-full">
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            Related Entity With Adverse Status
          </p>
          <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            1/7 flagged
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        High Risk Geography
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        No flags found
      </p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col font-medium gap-[6px] items-start leading-[1.4] px-[12px] relative text-muted-foreground text-[14px] tracking-[0.056px] w-full">
        <Frame104 />
        <Frame105 />
        <Frame106 />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-card flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame100 />
        <Frame103 />
      </div>
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame47 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame49 />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative bg-card rounded-[var(--radius)] w-full">
      
    </div>
  );
}



export default function Summary() {
  return (
    <div className="bg-background flex flex-col w-full min-h-full" data-name="SUMMARY">
      {/* Combined: breadcrumb + page title + company info */}
      <CombinedHeader />
      {/* AI Summary + Network Map stacked vertically */}
      <div className="flex flex-col gap-[12px] px-[16px] pt-[12px]">
        <Frame67 />
        <div className="w-full min-h-[400px]">
          <Frame16 />
        </div>
      </div>
      {/* Remaining cards */}
      <div className="flex flex-col gap-[12px] px-[16px] py-[12px]">
        <Frame69 />
        <Frame77 />
      </div>
    </div>
  );
}
