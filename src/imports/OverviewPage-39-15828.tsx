import clsx from "clsx";
import svgPaths from "./svg-eu2bkmo8vh";

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}
type TimelineTabBackgroundImageProps = {
  additionalClassNames?: string;
};

function TimelineTabBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<TimelineTabBackgroundImageProps>) {
  return (
    <BackgroundImage13 additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[16px] relative w-full">{children}</div>
    </BackgroundImage13>
  );
}
type BackgroundImage12Props = {
  additionalClassNames?: string;
};

function BackgroundImage12({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage12Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[4px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return (
    <BackgroundImage12 additionalClassNames={additionalClassNames}>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#2e3a59] text-[0px] text-[14px]">{children}</p>
      <BackgroundImageAndText3 text="Very high risk" />
      <IconUArrowRightBackgroundImage />
    </BackgroundImage12>
  );
}
type BackgroundImage10Props = {
  text: string;
  text1: string;
};

function BackgroundImage10({ text, text1 }: BackgroundImage10Props) {
  return (
    <BackgroundImage11 additionalClassNames="relative shrink-0 w-full">
      <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">{text}</span>
      <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{text1}</span>
      <span className="leading-[1.3]">{` -  1 filing as a Respondent`}</span>
    </BackgroundImage11>
  );
}
type BackgroundImage9Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage9({ text, text1, additionalClassNames = "" }: BackgroundImage9Props) {
  return (
    <BackgroundImage11 additionalClassNames={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">{text}</span>
      <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: `}</span>
      <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3]">{text1}</span>
      <span className="leading-[1.3]">{` -  1 case as a Petitioner`}</span>
    </BackgroundImage11>
  );
}

function IconUArrowRightBackgroundImage() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute bottom-[24.98%] left-1/4 right-[25.02%] top-[24.98%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99584 10.0082">
          <path d={svgPaths.p37de08f0} fill="var(--fill-0, #484E56)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="bg-[#faeeed] relative rounded-[2px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-px relative">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#c9594f] text-[11px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type BackgroundImage8Props = {
  text: string;
  text1: string;
  text2: string;
};

function BackgroundImage8({ text, text1, text2 }: BackgroundImage8Props) {
  return (
    <BackgroundImage12 additionalClassNames="relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#2e3a59] text-[0px] text-[14px]">
        <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">{text}</span>
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: Robbery `}</span>
        <span className="leading-[1.3]">{` -  `}</span>
        <span className="leading-[1.3]">{text1}</span>
        <span className="leading-[1.3]">{` cases`}</span>
      </p>
      <BackgroundImageAndText3 text={text2} />
      <IconUArrowRightBackgroundImage />
    </BackgroundImage12>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ additionalClassNames = "" }: BackgroundImage7Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative self-stretch shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
      <BackgroundImageAndText2 text="2" additionalClassNames="bg-[#4c92e6]" />
    </div>
  );
}

function BackgroundImage6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative size-full">
          <BackgroundImage3 />
        </div>
      </div>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ additionalClassNames = "" }: BackgroundImage5Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative self-stretch shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ additionalClassNames = "" }: BackgroundImage4Props) {
  return (
    <div className={clsx("bg-white content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative self-stretch shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
      <BackgroundImage3 />
    </div>
  );
}

function BackgroundImage3() {
  return (
    <div className="bg-[#f3f3f4] content-stretch flex items-center justify-center opacity-0 px-[4px] py-[2px] relative rounded-[2px] shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>{`5 `}</p>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative self-stretch shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
      <BackgroundImageAndText2 text="2" additionalClassNames="bg-[#1766d6] shadow-[0px_1px_4px_0px_rgba(19,26,37,0.2)]" />
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return (
    <div className={clsx("content-stretch flex h-[24px] items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0 w-[25px]", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("bg-[#f3f3f4] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative self-stretch shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#050709] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
    </div>
  );
}
type TimelineBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TimelineBackgroundImageAndText({ text, additionalClassNames = "" }: TimelineBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[12px] items-center px-[20px] py-[16px] relative", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className={clsx("flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[1.4]">{text}</p>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[3px] items-start leading-[1.3] relative shrink-0 text-[12px] tracking-[0.048px]">
      <p className="relative shrink-0 text-[#7d8187] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
      <p className="relative shrink-0 text-[#131a25]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text1}
      </p>
    </div>
  );
}

function BreadcrumbIconFiChevronRightBackgroundImage() {
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

export default function OverviewPage() {
  return (
    <div className="bg-[#f3f3f4] relative size-full" data-name="Overview page">
      <div className="absolute bottom-0 h-[1176px] left-0 pointer-events-none top-0">
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
      <div className="absolute content-stretch flex flex-col gap-[16px] h-[1516px] items-center left-[80px] top-[73px] w-[1360px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0 w-[1360px]" data-name="left-container">
            <div aria-hidden="true" className="absolute border-[#eceded] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="breadcrumb">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Search Terminal
                </p>
                <BreadcrumbIconFiChevronRightBackgroundImage />
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  CrimeCheck Search
                </p>
                <BreadcrumbIconFiChevronRightBackgroundImage />
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Overview of Aditya Rajesh `}</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
                <div className="content-stretch flex items-center relative shrink-0 w-[1100px]">
                  <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{` Overview of Primary enity`}</p>
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
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[1264px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                Primary Entity Information
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=fi:chevron-down-up">
                <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                    <path d={svgPaths.p3f910c80} fill="var(--fill-0, #131A25)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <BackgroundImage text="CIN" text1="U74900MH2011PTC291275" />
            <BackgroundImage text="DOB" text1="20/10/1998" />
            <BackgroundImage text="FATHER’S NAME" text1="Ramehs Kumar" />
            <div className="content-stretch flex font-medium gap-[3px] items-start leading-[1.3] relative shrink-0 text-[12px] tracking-[0.048px] w-full">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] relative shrink-0 text-[#7d8187] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                REGISTERED ADDRESS
              </p>
              <p className="font-['Plus_Jakarta_Sans:Medium','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[#131a25]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                8th Floor, Skyline Icon, Andheri  Kurla Road, Chimatpada, Marol, Andheri East,mumbai, Maharashtra 400059
              </p>
            </div>
            <div className="content-stretch flex gap-[3px] items-start relative shrink-0 w-full">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                DIRECTOR DETAILS
              </p>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-h-px min-w-px relative">
                <div className="content-stretch flex items-start relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    4 directors
                  </p>
                  <div className="relative shrink-0 size-[18px]" data-name="arrow_drop_down">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="arrow_drop_down">
                        <mask height="18" id="mask0_39_15939" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                          <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
                        </mask>
                        <g mask="url(#mask0_39_15939)">
                          <path d={svgPaths.p38abb180} fill="var(--fill-0, #1C1B1F)" id="arrow_drop_down_2" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[1213px] overflow-clip relative rounded-[8px] shrink-0 w-[1264px]">
          <div className="absolute left-[20px] rounded-[12px] top-[20px] w-[1224px]" style={{ backgroundImage: "linear-gradient(107deg, rgb(255, 248, 228) 0.67593%, rgb(253, 224, 151) 117.74%)" }}>
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[24px]" data-name="Frame">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="Frame">
                      <g id="Vector">
                        <path clipRule="evenodd" d={svgPaths.p2d8ced00} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p1e985e00} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
                      </g>
                    </g>
                  </svg>
                </div>
                <BackgroundImageAndText text="AI Summary" additionalClassNames="text-[#041c66] text-[18px] tracking-[0.072px]" />
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
                <div className="bg-[#ed8e00] content-stretch flex gap-[4px] items-center justify-end px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=u:exclamation-triangle">
                    <div className="absolute inset-[8.05%_3.79%_8.33%_4%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4409 16.724">
                        <path d={svgPaths.p1056a000} fill="var(--fill-0, white)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <BackgroundImageAndText text="Medium Risk Network" additionalClassNames="text-[14px] text-white tracking-[0.056px]" />
                </div>
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[1.3] relative shrink-0 text-[14px] text-black tracking-[0.056px] w-[1192px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  <p className="mb-0">{`ABC Industries Ltd (subsidiary) presents the highest risk due to criminal proceedings and financial distress, with 6 additional companies showing GST non-compliance, declining revenues, and adverse audit findings. `}</p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#f4b23d] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
          <div className="absolute bg-white left-[20px] rounded-[8px] top-[223px] w-[1224px]">
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex items-start justify-between p-[16px] relative w-full">
                  <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:balance-scale">
                      <div className="absolute inset-[8.33%_4.17%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                          <path d={svgPaths.p2603b900} fill="var(--fill-0, #131A25)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                      Case Overview
                    </p>
                  </div>
                  <div className="bg-white h-[32px] relative rounded-[8px] shrink-0" data-name="button">
                    <div aria-hidden="true" className="absolute border border-[#1766d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[16px] relative">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#1766d6] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
                          View Details
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon=u:arrow-up-right">
                          <div className="absolute bottom-[24.98%] left-[24.98%] right-1/4 top-1/4" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00435 9.00435">
                              <path d={svgPaths.p36c02180} fill="var(--fill-0, #1766D6)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white relative shrink-0 w-[1224px]">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Timeline">
                      <TimelineTabBackgroundImage additionalClassNames="bg-white w-[105px]">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] opacity-0 relative shrink-0 text-[#050709] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          2024
                        </p>
                      </TimelineTabBackgroundImage>
                      <BackgroundImage13 additionalClassNames="bg-white">
                        <TimelineBackgroundImageAndText text="Serious criminal offences (5)" />
                      </BackgroundImage13>
                      <TimelineTabBackgroundImage additionalClassNames="bg-[rgba(255,255,255,0)] w-[203px]">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case'" }}>{`Financial Offences (2) `}</p>
                      </TimelineTabBackgroundImage>
                      <BackgroundImage13 additionalClassNames="bg-white">
                        <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[16px] relative">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case'" }}>{`Statutory & regulatory matters (1)`}</p>
                        </div>
                      </BackgroundImage13>
                      <BackgroundImage13 additionalClassNames="bg-[rgba(255,255,255,0)] w-[164px]">
                        <TimelineBackgroundImageAndText text="Civil Matters" additionalClassNames="w-full" />
                      </BackgroundImage13>
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <TimelineBackgroundImageAndText text="Other matters (3)" additionalClassNames="w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-[#f3f3f4] content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid border-t inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2018" />
                        </div>
                      </div>
                      <BackgroundImage1 additionalClassNames="w-[257px]" />
                      <div className="bg-[#f3f3f4] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative self-stretch shrink-0 w-[203px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid border-t inset-0 pointer-events-none" />
                        <BackgroundImageAndText2 text="2" additionalClassNames="bg-[#4c92e6]" />
                      </div>
                      <BackgroundImage1 additionalClassNames="w-[293px]" />
                      <BackgroundImage1 additionalClassNames="w-[164px]" />
                      <BackgroundImage1 additionalClassNames="w-[202px]" />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2017" />
                        </div>
                      </div>
                      <BackgroundImage2 additionalClassNames="bg-white w-[257px]" />
                      <BackgroundImage4 additionalClassNames="w-[203px]" />
                      <BackgroundImage5 additionalClassNames="bg-white w-[293px]" />
                      <BackgroundImage4 additionalClassNames="w-[164px]" />
                      <BackgroundImage6 />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-[#f3f3f4] content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2018" />
                        </div>
                      </div>
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[257px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[203px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[293px]" />
                      <BackgroundImage7 additionalClassNames="bg-[#f3f3f4] w-[164px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[202px]" />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2017" />
                        </div>
                      </div>
                      <BackgroundImage5 additionalClassNames="bg-white w-[257px]" />
                      <BackgroundImage4 additionalClassNames="w-[203px]" />
                      <BackgroundImage5 additionalClassNames="bg-white w-[293px]" />
                      <BackgroundImage4 additionalClassNames="w-[164px]" />
                      <BackgroundImage6 />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-[#f3f3f4] content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2018" />
                        </div>
                      </div>
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[257px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[203px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[293px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[164px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[202px]" />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2017" />
                        </div>
                      </div>
                      <BackgroundImage5 additionalClassNames="bg-white w-[257px]" />
                      <BackgroundImage4 additionalClassNames="w-[203px]" />
                      <BackgroundImage5 additionalClassNames="bg-white w-[293px]" />
                      <BackgroundImage4 additionalClassNames="w-[164px]" />
                      <BackgroundImage6 />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-[#f3f3f4] content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2018" />
                        </div>
                      </div>
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[257px]" />
                      <BackgroundImage7 additionalClassNames="bg-[#f3f3f4] w-[203px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[293px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[164px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[202px]" />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2017" />
                        </div>
                      </div>
                      <BackgroundImage7 additionalClassNames="bg-white w-[257px]" />
                      <BackgroundImage4 additionalClassNames="w-[203px]" />
                      <BackgroundImage5 additionalClassNames="bg-white w-[293px]" />
                      <BackgroundImage4 additionalClassNames="w-[164px]" />
                      <BackgroundImage6 />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-[#f3f3f4] content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2018" />
                        </div>
                      </div>
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[257px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[203px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[293px]" />
                      <BackgroundImage2 additionalClassNames="bg-[#f3f3f4] w-[164px]" />
                      <BackgroundImage5 additionalClassNames="bg-[#f3f3f4] w-[202px]" />
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#f3f3f4] border-b border-solid inset-0 pointer-events-none" />
                      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative self-stretch shrink-0 w-[105px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
                          <BackgroundImageAndText1 text="2017" />
                        </div>
                      </div>
                      <BackgroundImage5 additionalClassNames="bg-white w-[257px]" />
                      <BackgroundImage4 additionalClassNames="w-[203px]" />
                      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative self-stretch shrink-0 w-[293px]">
                        <div aria-hidden="true" className="absolute border-[#e7e8e9] border-r border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText2 text="1" additionalClassNames="bg-[#4c92e6]" />
                      </div>
                      <BackgroundImage4 additionalClassNames="w-[164px]" />
                      <BackgroundImage6 />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none" />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[361px] top-[535px]">
        <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-[361px] p-[8px] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(19,26,37,0.1)] top-[535px]">
          <BackgroundImage8 text="DC" text1="1" text2="Very high risk" />
          <BackgroundImage9 text="DC" text1="Bail Application" additionalClassNames="bg-[#e0f0fd]" />
          <BackgroundImage10 text="FIR" text1=": Criminal matter" />
          <BackgroundImage11 additionalClassNames="relative shrink-0 w-full">
            <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">DC</span>
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: Robbery `}</span>
            <span className="leading-[1.3]">{` -  1 case as a Respondent`}</span>
          </BackgroundImage11>
          <BackgroundImage10 text="FIR" text1=": Criminal matter" />
        </div>
        <div className="absolute flex h-[18px] items-center justify-center left-[370px] top-[724px] w-[20px]">
          <div className="flex-none rotate-180">
            <div className="h-[18px] relative w-[20px]">
              <div className="absolute inset-[-17.49%_-29.16%_-41.67%_-29.16%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.6646 28.648">
                  <g filter="url(#filter0_d_39_16185)" id="Polygon 1">
                    <path d={svgPaths.p13dff700} fill="var(--fill-0, white)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.648" id="filter0_d_39_16185" width="31.6646" x="0" y="5.96046e-08">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="4" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0745098 0 0 0 0 0.101961 0 0 0 0 0.145098 0 0 0 0.1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_39_16185" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_39_16185" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[640px] top-[1014px]">
        <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-[640px] p-[8px] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(19,26,37,0.1)] top-[1014px]">
          <BackgroundImage8 text="DC" text1="1" text2="Very high risk" />
          <BackgroundImage9 text="DC" text1="Bail Application" />
        </div>
        <div className="absolute flex h-[20px] items-center justify-center left-[1051px] top-[1070px] w-[18px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[18px] relative w-[20px]">
              <div className="absolute bottom-1/4 left-[10.84%] right-[10.84%] top-[4.73%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6646 12.648">
                  <path d={svgPaths.p1fc67940} fill="var(--fill-0, white)" id="Polygon 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}