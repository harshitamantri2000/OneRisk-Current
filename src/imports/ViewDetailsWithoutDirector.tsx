import clsx from "clsx";
import svgPaths from "./svg-uikpmh858k";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 w-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type DropdownSimpleProps = {
  text: string;
};

function DropdownSimple({ children, text }: React.PropsWithChildren<DropdownSimpleProps>) {
  return (
    <div className="relative shrink-0 w-[268px]">
      <div className="content-stretch flex flex-col gap-[5px] items-start relative w-full">
        <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
              <Text1 text={text} additionalClassNames="text-[rgba(19,26,37,0.3)]" />
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=fi:chevron-down-small">
                <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.83333">
                    <path clipRule="evenodd" d={svgPaths.p3d116f00} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentCell({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eceded] border-b border-r border-solid inset-[0_-0.5px_-0.5px_0] pointer-events-none" />
      <div className="content-stretch flex gap-[4px] items-start px-[8px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function IconUTimes() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[24.98%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0097 10.0082">
          <path d={svgPaths.p1a25b940} fill="var(--fill-0, #7D8187)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className={clsx("flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.056px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[1.4]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-start px-[8px] py-[12px] relative", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[12px] text-ellipsis tracking-[0.048px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
    </div>
  );
}
type Frame567ContentCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function Frame567ContentCellText({ text, additionalClassNames = "" }: Frame567ContentCellTextProps) {
  return (
    <div className={clsx("bg-white relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#eceded] border-b border-l border-r border-solid inset-[0_-0.5px_-0.5px_-0.5px] pointer-events-none" />
      <Text text={text} additionalClassNames="size-full" />
    </div>
  );
}

function BreadcrumbIconFiChevronRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
          <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

export default function ViewDetailsWithoutDirector() {
  return (
    <div className="bg-[#f3f3f4] relative size-full" data-name="View details without director">
      <div className="absolute bottom-0 h-[900px] left-0 pointer-events-none top-0">
        <div className="bg-[#09132a] h-[900px] pointer-events-auto sticky top-0 w-[80px]" data-name="sidebar/collapsed">
          <div className="absolute contents left-[13px] top-[21.5px]" data-name="IDfy Logo/Product/DF-short">
            <div className="absolute contents left-[13px] top-[21.5px]" data-name="logo/idfy-main">
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
            </div>
          </div>
          <div className="absolute content-start flex flex-wrap gap-[4px] items-start left-0 top-[73px] w-[80px]">
            <div className="content-stretch flex h-[48px] items-center justify-center p-[10px] relative shrink-0 w-[79px]">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=fi:home">
                <div className="absolute inset-[4.58%_8.75%]" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 18.1667">
                    <path clipRule="evenodd" d={svgPaths.p26069680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(23,102,214,0.32)] content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[10px] relative shrink-0 w-[80px]">
              <Wrapper additionalClassNames="h-[44px]">
                <div className="-rotate-90 flex-none">
                  <div className="h-0 relative w-[44px]">
                    <div className="absolute inset-[-2px_-4.55%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 4">
                        <path d="M2 2H46" id="Line 10" stroke="var(--stroke-0, #FAFAFB)" strokeLinecap="round" strokeWidth="4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Wrapper>
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-[73px]">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:search-alt">
                  <div className="absolute inset-[8.52%_8.45%_8.34%_8.73%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5641 16.6264">
                      <path d={svgPaths.p1e8ce0b0} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border-[rgba(255,255,255,0.3)] border-solid border-t h-[65px] left-0 shadow-[0px_-6px_12px_0px_rgba(4,10,21,0.12)] top-[835px] w-[80px]" data-name="bottom section">
            <div className="absolute left-[19px] size-[20px] top-[32px]" />
            <div className="absolute content-stretch flex h-[46px] items-center left-0 py-[8px] top-[6px] w-[80px]" data-name="sidebar-items">
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
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[80px] top-0 w-[1362px]" data-name="All Processing Purposes">
        <div className="bg-[#09132a] h-[73px] relative shadow-[0px_4px_12px_0px_rgba(19,26,37,0.08)] shrink-0 w-full" data-name="top-bar">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[8px] pr-[27px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[20px] text-white tracking-[0.08px]">OneRisk</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[714px]">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
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
                  <div className="content-stretch flex items-start relative shrink-0">
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
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[12px] h-[47px] items-center p-[12px] relative rounded-[31.5px] shrink-0 w-[88px]" data-name="OU Name">
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="bg-[#fc5555] col-1 content-stretch flex items-center ml-0 mt-0 p-[6.4px] relative rounded-[16px] row-1 size-[32px]">
                        <div className="relative shrink-0 size-[19.2px]" data-name="fe:user">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 19.2">
                            <g id="fe:user">
                              <path d={svgPaths.p21edbb00} fill="var(--fill-0, black)" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=fi:chevron-down">
                    <div className="absolute inset-[33.75%_21.25%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8 7.8">
                        <path clipRule="evenodd" d={svgPaths.p2a263e00} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[827px] items-center left-[80px] top-[73px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0 w-[1360px]" data-name="left-container">
            <div aria-hidden="true" className="absolute border-[#eceded] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="breadcrumb">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Search Terminal
                </p>
                <BreadcrumbIconFiChevronRight />
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  CrimeCheck Search
                </p>
                <BreadcrumbIconFiChevronRight />
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Overview of Aditya Rajesh `}</p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-between px-[16px] py-[8px] relative shrink-0 w-[1359px]">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon=u:arrow-left">
                <div className="absolute bottom-[24.98%] left-[25.02%] right-1/4 top-[24.98%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9934 16.0132">
                    <path d={svgPaths.p6df23c0} fill="var(--fill-0, #131A25)" id="Vector" />
                  </svg>
                </div>
              </div>
              <Wrapper additionalClassNames="h-[32px]">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[32px]">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                        <line id="Line 43" stroke="var(--stroke-0, #214698)" strokeOpacity="0.12" x2="32" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Wrapper>
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    Detailed cases for Aditya Rajesh
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1766d6] h-[36px] relative rounded-[8px] shrink-0" data-name="button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[24px] relative">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    Download Report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[1264px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                Primary Entity Information
              </p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-180">
                  <div className="overflow-clip relative size-[24px]" data-name="Icon=fi:chevron-down-up">
                    <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                        <path d={svgPaths.p3f910c80} fill="var(--fill-0, #131A25)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[600px] overflow-clip relative rounded-[8px] shrink-0 w-[1264px]">
          <div className="absolute content-stretch flex flex-col items-start left-0 py-[20px] top-[158px] w-[1264px]">
            <div className="relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
                <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#1766d6] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative rounded-bl-[16px] shrink-0 w-[209px]">
                      <div className="bg-[#e0f0fd] h-[39px] relative rounded-tl-[8px] shrink-0 w-full" data-name="Content Cell">
                        <div aria-hidden="true" className="absolute border border-[#eceded] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[8.5px]" />
                        <div className="content-stretch flex gap-[4px] items-start px-[8px] py-[12px] relative size-full">
                          <ol className="block flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[0] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[12px] text-ellipsis tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                            <li className="ms-[18px] whitespace-pre-wrap">
                              <span className="leading-[1.3]">Case Number</span>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <Frame567ContentCellText text="Risk" additionalClassNames="h-[43px]" />
                      <Frame567ContentCellText text="Petitioner" additionalClassNames="h-[39px]" />
                      <Frame567ContentCellText text="Respondent" additionalClassNames="h-[57px]" />
                      <Frame567ContentCellText text="Case details" additionalClassNames="h-[88px]" />
                      <Frame567ContentCellText text="Status" additionalClassNames="h-[56px]" />
                      <Frame567ContentCellText text="Risk Summary" additionalClassNames="h-[40px]" />
                      <div className="bg-white h-[40px] relative rounded-bl-[8px] shrink-0 w-full" data-name="Content Cell">
                        <div aria-hidden="true" className="absolute border-[#eceded] border-b border-l border-r border-solid inset-[0_-0.5px_-0.5px_-0.5px] pointer-events-none rounded-bl-[8.5px]" />
                        <Text text="Order Summary" additionalClassNames="size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-tr-[8px]">
                      <div aria-hidden="true" className="absolute border border-[#eceded] border-solid inset-0 pointer-events-none rounded-tr-[8px]" />
                      <div className="bg-[#e0f0fd] h-[39px] relative rounded-tr-[8px] shrink-0 w-full" data-name="Content Cell">
                        <div aria-hidden="true" className="absolute border border-[#eceded] border-solid inset-[-0.5px] pointer-events-none rounded-tr-[8.5px]" />
                        <div className="content-stretch flex gap-[4px] items-start px-[8px] py-[12px] relative size-full">
                          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] min-h-px min-w-px opacity-0 overflow-hidden relative text-[#131a25] text-[12px] text-ellipsis tracking-[0.048px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                            Value
                          </p>
                        </div>
                      </div>
                      <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Content Cell">
                        <div aria-hidden="true" className="absolute border-[#eceded] border-b border-r border-solid inset-[0_-0.5px_-0.5px_0] pointer-events-none" />
                        <div className="content-stretch flex gap-[4px] items-start p-[8px] relative size-full">
                          <div className="bg-[#fde4d0] h-[28px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] h-full items-center px-[12px] relative">
                                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e23318] text-[12px] tracking-[0.048px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
                                  <p className="leading-[1.3]">High</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white h-[39px] relative shrink-0 w-full" data-name="Content Cell">
                        <div aria-hidden="true" className="absolute border-[#eceded] border-b border-r border-solid inset-[0_-0.5px_-0.5px_0] pointer-events-none" />
                        <Text text="Muskib Khalid Thakur PN Pstn." additionalClassNames="size-full" />
                      </div>
                      <ContentCell>
                        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[12px] text-ellipsis tracking-[0.048px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          <span className="leading-[1.3]" style={{ fontFeatureSettings: "'liga' 0" }}>
                            Siddharth @ Siddhu Ashok Ahire
                            <br aria-hidden="true" />
                          </span>
                          <span className="leading-[1.3] text-[#484e56]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                            Address:
                          </span>
                          <span className="leading-[1.3]" style={{ fontFeatureSettings: "'liga' 0" }}>{` Chawl No. 41 -276,Ramabai Ambedkar NagarVasantrao Naik Road, Ghatkopar -W Mumbai`}</span>
                        </p>
                      </ContentCell>
                      <ContentCell>
                        <div className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[0px] text-[12px] text-ellipsis tracking-[0.048px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          <p className="mb-0">
                            <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] text-[#484e56] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Court: `}</span>
                            <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] text-[#131a25] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              Additional Metropolitan Magistrate,Vikroli, Mumbai
                            </span>
                            <span className="leading-[1.3] text-[#484e56]" style={{ fontFeatureSettings: "'liga' 0" }}>
                              <br aria-hidden="true" />
                              {`Act & Section: `}
                            </span>
                            <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] text-[#131a25] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              U/S 143, 144, 147, 148, 149, 324, 506,
                            </span>
                          </p>
                          <p className="mb-0">
                            <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] text-[#484e56] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              Case Year:
                            </span>
                            <span className="leading-[1.3] text-[#484e56]" style={{ fontFeatureSettings: "'liga' 0" }}>{` `}</span>
                            <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] text-[#131a25] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              2010
                            </span>
                          </p>
                          <p>
                            <span className="leading-[1.3] text-[#484e56]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              Type:
                            </span>
                            <span className="leading-[1.3] text-[#131a25]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{` Criminal`}</span>
                          </p>
                        </div>
                      </ContentCell>
                      <ContentCell>
                        <div className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[12px] text-ellipsis tracking-[0.048px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          <p className="mb-0">Pending (Next Hearing Date - 29/ 01/2024)</p>
                          <p>(Next stage - For Statement of accused U/313 Cr.p.c.)</p>
                        </div>
                      </ContentCell>
                      <div className="bg-white relative shrink-0 w-full" data-name="Content Cell">
                        <div aria-hidden="true" className="absolute border-[#eceded] border-b border-r border-solid inset-[0_-0.5px_-0.5px_0] pointer-events-none" />
                        <Text text="The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon. If convicted, they could face up." additionalClassNames="w-full" />
                      </div>
                      <div className="bg-white relative rounded-br-[8px] shrink-0 w-full" data-name="Content Cell">
                        <div aria-hidden="true" className="absolute border-[#eceded] border-b border-r border-solid inset-[0_-0.5px_-0.5px_0] pointer-events-none rounded-br-[8.5px]" />
                        <div className="content-stretch flex gap-[4px] items-start px-[8px] py-[12px] relative w-full">
                          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[12px] text-ellipsis tracking-[0.048px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`The subject faces several charges including unlawful assembly, rioting, and causing hurt with a deadly weapon. `}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[14px] items-center left-[16px] top-[54px]">
            <DropdownSimple text="Select Category" />
            <DropdownSimple text="Select Year" />
          </div>
          <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[122px] w-[764px]">
            <div className="bg-[#eceded] content-stretch flex gap-[8px] h-[36px] items-center px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
              <Text1 text="Serious criminal offences" additionalClassNames="text-[#131a25]" />
              <IconUTimes />
            </div>
            <div className="bg-[#eceded] content-stretch flex gap-[8px] h-[36px] items-center px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
              <Text1 text="2025" additionalClassNames="text-[#131a25]" />
              <IconUTimes />
            </div>
            <div className="bg-[#131a25] content-stretch flex gap-[8px] h-[36px] items-center px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafb] text-[14px] tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                <p className="leading-[1.4]">{`Reset All `}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 h-[600px] left-0 pointer-events-none top-0">
            <div className="bg-white content-stretch flex items-start p-[16px] pointer-events-auto sticky top-0 w-[1265px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                Case Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}