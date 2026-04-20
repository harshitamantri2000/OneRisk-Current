import svgPaths from "./svg-06d7tpl0lv";

function Group() {
  return (
    <div className="absolute h-[34px] left-[13px] top-[21.5px] w-[53.04px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.0401 34">
        <g id="Group 2">
          <ellipse cx="16.9646" cy="17" fill="var(--fill-0, white)" id="Ellipse 5" rx="16.9646" ry="17" />
          <g id="Group 1">
            <g id="Vector">
              <path d={svgPaths.p2a9ce700} fill="var(--fill-0, #CE1417)" />
              <path d={svgPaths.p3cd9e980} fill="var(--fill-0, #CE1417)" />
            </g>
            <path d={svgPaths.p198bdc80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LogoIdfyMain() {
  return (
    <div className="absolute contents left-[13px] top-[21.5px]" data-name="logo/idfy-main">
      <Group />
    </div>
  );
}

function IDfyLogoProductDfShort() {
  return (
    <div className="absolute contents left-[13px] top-[21.5px]" data-name="IDfy Logo/Product/DF-short">
      <LogoIdfyMain />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center p-[10px] relative shrink-0 w-[79px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=fi:home">
        <div className="absolute inset-[4.58%_8.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 18.1667">
            <path clipRule="evenodd" d={svgPaths.p26069680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[73px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:search-alt">
        <div className="absolute inset-[8.52%_8.45%_8.34%_8.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5641 16.6264">
            <path d={svgPaths.p1e8ce0b0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(23,102,214,0.32)] content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[10px] relative shrink-0 w-[80px]">
      <div className="flex h-[44px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[44px]">
            <div className="absolute inset-[-2px_-4.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 4">
                <path d="M2 2H46" id="Line 10" stroke="var(--stroke-0, #FAFAFB)" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[4px] items-start left-0 top-[73px] w-[80px]">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return <div className="absolute left-[19px] size-[20px] top-[32px]" />;
}

function NameIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[80px]" data-name="name + icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=fi:log-out">
        <div className="absolute inset-[25.42%_8.75%_25.42%_62.92%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 9.83333">
            <path clipRule="evenodd" d={svgPaths.p3bbfdd00} fill="var(--fill-0, #BDBEC2)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[46.25%_8.75%_46.25%_33.75%]" data-name="Line (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 1.5">
            <path clipRule="evenodd" d={svgPaths.pc649f0} fill="var(--fill-0, #BDBEC2)" fillRule="evenodd" id="Line (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[8.75%_58.75%_8.75%_8.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 16.5">
            <path clipRule="evenodd" d={svgPaths.p2c3e8900} fill="var(--fill-0, #BDBEC2)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SidebarItems() {
  return (
    <div className="absolute content-stretch flex h-[46px] items-center left-0 py-[8px] top-[6px] w-[80px]" data-name="sidebar-items">
      <NameIcon />
    </div>
  );
}

function BottomSection() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.3)] border-solid border-t h-[65px] left-0 shadow-[0px_-6px_12px_0px_rgba(4,10,21,0.12)] top-[835px] w-[80px]" data-name="bottom section">
      <Frame1 />
      <SidebarItems />
    </div>
  );
}

function SidebarCollapsed() {
  return (
    <div className="bg-[#09132a] h-[900px] pointer-events-auto sticky top-0 w-[80px]" data-name="sidebar/collapsed">
      <IDfyLogoProductDfShort />
      <Frame5 />
      <BottomSection />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[20px] text-white tracking-[0.08px]">OneRisk</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start p-[2px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[27px]" data-name="Icon=fi:help-circle">
        <div className="absolute inset-[4.58%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.525 24.525">
            <path clipRule="evenodd" d={svgPaths.p37f14800} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[67.08%_46.21%_25.42%_46.25%]" data-name="Line (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.03625 2.025">
            <path clipRule="evenodd" d={svgPaths.p35208900} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Line (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[25.4%_34.08%_42.08%_34.12%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.58403 8.78031">
            <path clipRule="evenodd" d={svgPaths.p125b1400} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[31px] relative shrink-0 w-[29px]">
      <div className="absolute left-[2px] overflow-clip size-[27px] top-[2px]" data-name="Icon=fi:bell">
        <div className="absolute inset-[4.58%_8.75%_25.42%_8.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2752 18.9">
            <path clipRule="evenodd" d={svgPaths.p1a6c4300} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[83.75%_39.04%_4.6%_39.04%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.91783 3.14618">
            <path clipRule="evenodd" d={svgPaths.p13c8f100} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[17px] size-[9px] top-px">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F4C963)" id="Ellipse 7" r="4" stroke="var(--stroke-0, #FAFAFB)" />
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame10 />
      <Frame6 />
    </div>
  );
}

function FeUser() {
  return (
    <div className="relative shrink-0 size-[19.2px]" data-name="fe:user">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 19.2">
        <g id="fe:user">
          <path d={svgPaths.pdb47700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#fc5555] col-1 content-stretch flex items-center ml-0 mt-0 p-[6.4px] relative rounded-[16px] row-1 size-[32px]">
      <FeUser />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame50 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group1 />
    </div>
  );
}

function OuName() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[12px] h-[47px] items-center p-[12px] relative rounded-[31.5px] shrink-0 w-[88px]" data-name="OU Name">
      <Frame51 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=fi:chevron-down">
        <div className="absolute inset-[33.75%_21.25%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8 7.8">
            <path clipRule="evenodd" d={svgPaths.p2a263e00} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[714px]">
      <Frame11 />
      <OuName />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-[#09132a] h-[73px] relative shadow-[0px_4px_12px_0px_rgba(19,26,37,0.08)] shrink-0 w-full" data-name="top-bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[27px] relative size-full">
          <Frame7 />
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function AllProcessingPurposes() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[79px] top-0 w-[1362px]" data-name="All Processing Purposes">
      <TopBar />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "\'case\'" }}>
        ShareHolding
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
        <Frame53 />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down">
              <div className="absolute inset-[33.75%_21.25%]" data-name="Vector (Stroke)">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8 7.8">
                  <path clipRule="evenodd" d={svgPaths.p2a263e00} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[#f3f3f4] content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          CaseID
        </p>
        <div className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]" data-name="Right Separator">
              <div className="absolute inset-[-0.5px_-2.08%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                  <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              Name/ ID
            </p>
            <div className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[24px]" data-name="Right Separator">
                  <div className="absolute inset-[-0.5px_-2.08%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              Risk Definition
            </p>
            <div className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[24px]" data-name="Right Separator">
                  <div className="absolute inset-[-0.5px_-2.08%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              Created date
            </p>
            <div className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[24px]" data-name="Right Separator">
                  <div className="absolute inset-[-0.5px_-2.08%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tr-[4px]" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              Network Entities
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              Overall Risk status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[14px] relative shrink-0 w-[130px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:copy">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
              <path d={svgPaths.p22419b00} fill="var(--fill-0, #131A25)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
            <div className="bg-white content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[24px] relative rounded-[4px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border border-[#214698] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#214698] text-[12px] text-center tracking-[0.048px]" style={{ fontFeatureSettings: "\'case\'" }}>
                View Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[14px] relative shrink-0 w-[130px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:copy">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
              <path d={svgPaths.p22419b00} fill="var(--fill-0, #131A25)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
            <div className="bg-white content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[24px] relative rounded-[4px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border border-[#214698] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#214698] text-[12px] text-center tracking-[0.048px]" style={{ fontFeatureSettings: "\'case\'" }}>
                View Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[14px] relative shrink-0 w-[130px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:copy">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
              <path d={svgPaths.p22419b00} fill="var(--fill-0, #131A25)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
            <div className="bg-white content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[24px] relative rounded-[4px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border border-[#214698] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#214698] text-[12px] text-center tracking-[0.048px]" style={{ fontFeatureSettings: "\'case\'" }}>
                View Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[14px] relative shrink-0 w-[130px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:copy">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
              <path d={svgPaths.p22419b00} fill="var(--fill-0, #131A25)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
            <div className="bg-white content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[24px] relative rounded-[4px] shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border border-[#214698] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#214698] text-[12px] text-center tracking-[0.048px]" style={{ fontFeatureSettings: "\'case\'" }}>
                View Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame12 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute bg-white left-[20px] rounded-[8px] top-[423px] w-[1224px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame75 />
        <Frame54 />
        <div className="relative shrink-0 w-full" data-name="Pagination">
          <div className="content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
            <div className="bg-[#fafafb] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Control">
              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevrons-left">
                <div className="absolute inset-[25.42%_50.42%_25.42%_21.25%]" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53333 7.86667">
                    <path clipRule="evenodd" d={svgPaths.p275dd880} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
                <div className="absolute inset-[25.42%_21.25%_25.42%_50.42%]" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53333 7.86667">
                    <path clipRule="evenodd" d={svgPaths.p275dd880} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#fafafb] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Control">
              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevron-left">
                <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2 9.2">
                    <path clipRule="evenodd" d={svgPaths.p3d6df80} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#1766d6] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
                1
              </p>
            </div>
            <div className="bg-[#fafafb] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#484e56] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
                2
              </p>
            </div>
            <div className="bg-[#fafafb] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#484e56] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
                3
              </p>
            </div>
            <div className="bg-white content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131a25] text-[14px] text-center tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
                <p className="leading-[1.4]">...</p>
              </div>
            </div>
            <div className="bg-[#fafafb] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#484e56] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
                10
              </p>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-[#fafafb] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] size-[32px]" data-name="Control">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevron-left">
                    <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2 9.2">
                        <path clipRule="evenodd" d={svgPaths.p3d6df80} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-[#fafafb] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[8px] size-[32px]" data-name="Control">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevrons-left">
                    <div className="absolute inset-[25.42%_50.42%_25.42%_21.25%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53333 7.86667">
                        <path clipRule="evenodd" d={svgPaths.p275dd880} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                    <div className="absolute inset-[25.42%_21.25%_25.42%_50.42%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53333 7.86667">
                        <path clipRule="evenodd" d={svgPaths.p275dd880} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "\'case\'" }}>
        Balance sheet
      </p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
        <Frame55 />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down">
              <div className="absolute inset-[33.75%_21.25%]" data-name="Vector (Stroke)">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8 7.8">
                  <path clipRule="evenodd" d={svgPaths.p2a263e00} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[#f3f3f4] content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <div className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]" data-name="Right Separator">
              <div className="absolute inset-[-0.5px_-2.08%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                  <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              FY 2024
            </p>
            <div className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[24px]" data-name="Right Separator">
                  <div className="absolute inset-[-0.5px_-2.08%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              FY 2023
            </p>
            <div className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[24px]" data-name="Right Separator">
                  <div className="absolute inset-[-0.5px_-2.08%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              FY 2022
            </p>
            <div className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[24px]" data-name="Right Separator">
                  <div className="absolute inset-[-0.5px_-2.08%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </svg>
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

function ContentCell() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[16px] py-[14px] relative shrink-0 w-[223px]" data-name="Content Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down-small">
            <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.8">
                <path clipRule="evenodd" d={svgPaths.p22a6800} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#041c66] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>{`Equity & Liabilities `}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
      <ContentCell />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] size-full" />
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] size-full" />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] size-full" />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] self-stretch shrink-0 w-[86px]" data-name="Content Cell" />
    </div>
  );
}

function ContentCell1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[12px] relative shrink-0 w-[223px]" data-name="Content Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down-small">
            <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.8">
                <path clipRule="evenodd" d={svgPaths.p22a6800} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
        Equities
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[44px] relative w-full">
        <ContentCell1 />
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] self-stretch shrink-0 w-[86px]" data-name="Content Cell" />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          Total
        </p>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentCell2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center py-[12px] relative shrink-0 w-[223px]" data-name="Content Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down-small">
            <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.8">
                <path clipRule="evenodd" d={svgPaths.p22a6800} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Liability
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[44px] relative w-full">
        <ContentCell2 />
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] self-stretch shrink-0 w-[86px]" data-name="Content Cell" />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[44px] relative w-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative self-stretch shrink-0" data-name="Content Cell">
          <ol className="block font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] w-[195px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
            <li className="ms-[21px] whitespace-pre-wrap">
              <span className="leading-[1.4]">{` Long term liabilities`}</span>
            </li>
          </ol>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] self-stretch shrink-0 w-[86px]" data-name="Content Cell" />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center pl-[60px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center pl-[60px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center pl-[60px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[60px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          Total
        </p>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start pl-[44px] py-[4px] relative w-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative self-stretch shrink-0" data-name="Content Cell">
          <ol className="block font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] w-[195px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
            <li className="ms-[21px] whitespace-pre-wrap">
              <span className="leading-[1.4]">Current liabilities</span>
            </li>
          </ol>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] self-stretch shrink-0 w-[86px]" data-name="Content Cell" />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center pl-[60px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center pl-[60px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center pl-[60px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[60px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          Total
        </p>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          Total
        </p>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentCell3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[16px] py-[14px] relative shrink-0 w-[223px]" data-name="Content Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down-small">
            <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.8">
                <path clipRule="evenodd" d={svgPaths.p22a6800} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#041c66] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Assest
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
      <ContentCell3 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] size-full" />
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] size-full" />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] size-full" />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] self-stretch shrink-0 w-[86px]" data-name="Content Cell" />
    </div>
  );
}

function ContentCell4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[12px] relative shrink-0 w-[223px]" data-name="Content Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down-small">
            <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.8">
                <path clipRule="evenodd" d={svgPaths.p22a6800} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
        Fixed assets
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[44px] relative w-full">
        <ContentCell4 />
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] self-stretch shrink-0 w-[86px]" data-name="Content Cell" />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          Total
        </p>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentCell5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[12px] relative shrink-0 w-[223px]" data-name="Content Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down-small">
            <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.8">
                <path clipRule="evenodd" d={svgPaths.p22a6800} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
        Other long term
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[44px] relative w-full">
        <ContentCell5 />
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] w-full" />
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] self-stretch shrink-0 w-[86px]" data-name="Content Cell" />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[14px] relative shrink-0 w-[330px]" data-name="Content Cell">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
          bbbbcf...
        </p>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
              XXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              DD - MM - YY
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] relative w-full">
            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame18 />
      <Frame23 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame25 />
      <Frame27 />
      <Frame24 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame34 />
      <Frame26 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame35 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute bg-white left-[20px] rounded-[8px] top-[791px] w-[1224px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame76 />
        <Frame56 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VerifiedUser() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="verified_user">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="verified_user">
          <mask height="20" id="mask0_26_13157" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_26_13157)">
            <path d={svgPaths.p27ff3800} fill="var(--fill-0, #1766D6)" id="verified_user_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white relative shrink-0">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[16px] relative rounded-[inherit]">
        <VerifiedUser />
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#1766d6] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>{`Integrity Risk `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1766d6] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Badge() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="badge">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="badge">
          <mask height="20" id="mask0_26_13149" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_26_13149)">
            <path d={svgPaths.p2b94e1f0} fill="var(--fill-0, #131A25)" id="badge_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[16px] relative shrink-0">
      <Badge />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Identity Risk
      </p>
    </div>
  );
}

function CurrencyRupeeCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="currency_rupee_circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency_rupee_circle">
          <mask height="20" id="mask0_26_13153" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_26_13153)">
            <path d={svgPaths.p7edec00} fill="var(--fill-0, #131A25)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[16px] relative shrink-0">
      <CurrencyRupeeCircle />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Income Risk
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[16px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:channel">
        <div className="absolute inset-[8.3%_4.12%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3428 16.6737">
            <path d={svgPaths.p8910200} fill="var(--fill-0, #131A25)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Affluence Risk
      </p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[204px] w-[1264px]">
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
      <Frame66 />
      <Frame67 />
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
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

function Frame77() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#041c66] text-[16px] tracking-[0.064px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        <p className="leading-[1.4]">AI Summary</p>
      </div>
    </div>
  );
}

function BadgeChip() {
  return (
    <div className="bg-[#e23318] content-stretch flex gap-[4px] items-center justify-end px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:exclamation-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p320405f0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        <p className="leading-[1.4]">Medium Risk Network</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <BadgeChip />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.056px] w-[1192px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">{`ABC Industries Ltd (subsidiary) presents the highest risk due to criminal proceedings and financial distress, with 6 additional companies showing GST non-compliance, declining revenues, and adverse audit findings. `}</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="absolute left-[20px] rounded-[12px] top-[20px] w-[1224px]" style={{ backgroundImage: "linear-gradient(100.864deg, rgb(254, 240, 230) 1.2535%, rgb(252, 195, 161) 105.54%)" }}>
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Frame77 />
        <Frame78 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ed704e] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 529 1">
            <line id="Line 48" stroke="var(--stroke-0, #A1D1FA)" x2="529" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4c92e6] text-[14px] tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        <p className="leading-[1.4]">HIGHLIGHTS</p>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 529 1">
            <line id="Line 48" stroke="var(--stroke-0, #A1D1FA)" x2="529" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-center justify-between leading-[1.4] p-[8px] relative w-full">
          <p className="relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
            Missed EPF Filings
          </p>
          <p className="relative shrink-0 text-[16px] text-black tracking-[0.064px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
            No
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border-[#1766d6] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-center justify-between leading-[1.4] p-[8px] relative w-full">
          <p className="relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
            Income Risk
          </p>
          <p className="relative shrink-0 text-[16px] text-black tracking-[0.064px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
            2
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-center justify-between leading-[1.4] p-[8px] relative w-full">
          <p className="relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
            Missed GST Filings
          </p>
          <p className="relative shrink-0 text-[16px] text-black tracking-[0.064px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
            No
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border-[#1766d6] border-l-3 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium items-center justify-between leading-[1.4] p-[8px] relative w-full">
          <p className="relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
            Debt to Equity Ratio
          </p>
          <p className="relative shrink-0 text-[16px] text-black tracking-[0.064px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
            2.47
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame71 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="absolute bg-[#ebf6fe] content-stretch flex flex-col gap-[16px] items-start left-[20px] overflow-clip px-[16px] py-[24px] top-[281px] w-[1224px]">
      <Frame79 />
      <Frame85 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[2627px] left-[calc(50%+40px)] overflow-clip top-[296px] w-[1264px]">
      <Frame65 />
      <Frame72 />
      <Frame74 />
      <Frame73 />
      <Frame84 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Entity Details
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] gap-[3px] items-start relative shrink-0 w-full">
      <p className="relative shrink-0 text-[#7d8187] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        CIN
      </p>
      <p className="relative shrink-0 text-[#131a25]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        U74900MH2011PTC291275
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] relative shrink-0 text-[#7d8187] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        REGISTERED ADDRESS
      </p>
      <p className="font-['Plus_Jakarta_Sans:Medium','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[#131a25]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        8th Floor, Skyline Icon, Andheri  Kurla Road, Chimatpada, Marol, Andheri East,mumbai, Maharashtra 400059
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[6px] items-start leading-[1.3] relative shrink-0 text-[12px] tracking-[0.048px] w-full">
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[128px] overflow-clip px-[16px] py-[12px] top-[177px] w-[1264px]">
      <Frame63 />
      <Frame62 />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="breadcrumb">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Home
      </p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
        <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
            <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Netscan
      </p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
        <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
            <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Case overview
      </p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
        <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
            <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>{`Gaboli Online Services Private Limited `}</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Breadcrumb />
    </div>
  );
}

function LeftContainer() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[80px] p-[8px] top-[73px] w-[1361px]" data-name="left-container">
      <div aria-hidden="true" className="absolute border-[#eceded] border-b border-solid inset-0 pointer-events-none" />
      <Frame57 />
    </div>
  );
}

function ArrowDropUp() {
  return (
    <div className="relative size-[24px]" data-name="arrow_drop_up">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_up">
          <mask height="24" id="mask0_26_13135" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_26_13135)">
            <path d={svgPaths.p2c475671} fill="var(--fill-0, #1C1B1F)" id="arrow_drop_up_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Gaboli Online Services Private Limited
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowDropUp />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#e7e8e9] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[2px] shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\'" }}>
        Holding company
      </p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame88 />
      <Frame70 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon=u:arrow-left">
        <div className="absolute bottom-[24.98%] left-[25.02%] right-1/4 top-[24.98%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9934 16.0132">
            <path d={svgPaths.p6df23c0} fill="var(--fill-0, #131A25)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[32px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line 43" stroke="var(--stroke-0, #214698)" strokeOpacity="0.12" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame64 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[80px] px-[16px] py-[8px] top-[105px] w-[1359px]">
      <Frame87 />
      <div className="bg-[#1766d6] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[24px] relative rounded-[8px] shrink-0" data-name="button">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[0.056px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
          Download Case Report
        </p>
      </div>
    </div>
  );
}

export default function DetailedPageStructure() {
  return (
    <div className="bg-[#fafafb] relative size-full" data-name="Detailed page structure">
      <div className="absolute bottom-0 h-[2952px] left-0 pointer-events-none top-0">
        <SidebarCollapsed />
      </div>
      <AllProcessingPurposes />
      <Frame58 />
      <Frame83 />
      <LeftContainer />
      <Frame86 />
    </div>
  );
}