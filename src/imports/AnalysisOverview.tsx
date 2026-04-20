import clsx from "clsx";
import svgPaths from "./svg-g4lsonu61q";
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("h-[21px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">{children}</div>
    </div>
  );
}

function TransactionBehaviourChart({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] w-[111.91px]">
      <p className="leading-[1.3] whitespace-pre-wrap">{children}</p>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] overflow-hidden relative shrink-0 text-[#0a0d13] text-[12px] text-ellipsis tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {children}
      </p>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px relative text-[#131a25] text-[16px] tracking-[0.064px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
        {children}
      </p>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("h-[21px] relative", additionalClassNames)}>{children}</Wrapper4>;
}

function Surface({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[14px] top-[5.25px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Surface">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className="h-[40px] relative shrink-0 w-[228px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative size-full">
          <div className={clsx("relative rounded-[4px] shrink-0", additionalClassNames)}>
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.51562 1">
          {children}
        </svg>
      </div>
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
type TextText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText2({ text, additionalClassNames = "" }: TextText2Props) {
  return (
    <Wrapper4 additionalClassNames={clsx("h-[21px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#484e56] text-[14px] top-[0.5px] w-[27px] whitespace-pre-wrap">{text}</p>
    </Wrapper4>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <Wrapper3 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#131a25] text-[14px] top-[0.5px]">{text}</p>
    </Wrapper3>
  );
}
type Vector6Props = {
  additionalClassNames?: string;
};

function Vector6({ additionalClassNames = "" }: Vector6Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
        </svg>
      </div>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return <Wrapper5>{text}</Wrapper5>;
}
type Vector5Props = {
  additionalClassNames?: string;
};

function Vector5({ additionalClassNames = "" }: Vector5Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.75412 1">
          <path d="M0 0.5H7.75412" id="Vector" stroke="var(--stroke-0, #484E56)" />
        </svg>
      </div>
    </div>
  );
}
type Vector4Props = {
  additionalClassNames?: string;
};

function Vector4({ additionalClassNames = "" }: Vector4Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6.22641">
          <path d="M0.5 6.22641V0" id="Vector" stroke="var(--stroke-0, #484E56)" />
        </svg>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[17.5px] items-start left-[18px] top-[1.5px]", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#131a25] text-[14px]">{text}</p>
    </div>
  );
}
type Vector3Props = {
  additionalClassNames?: string;
};

function Vector3({ additionalClassNames = "" }: Vector3Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d="M3.51562 0.5H0" id="Vector" stroke="var(--stroke-0, #484E56)" />
    </Wrapper>
  );
}
type Vector2Props = {
  additionalClassNames?: string;
};

function Vector2({ additionalClassNames = "" }: Vector2Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 209">
          <path d="M0.5 0V209" id="Vector" stroke="var(--stroke-0, #484E56)" />
        </svg>
      </div>
    </div>
  );
}
type Vector1Props = {
  additionalClassNames?: string;
};

function Vector1({ additionalClassNames = "" }: Vector1Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d="M0 0.5H3.51562" id="Vector" stroke="var(--stroke-0, #484E56)" />
    </Wrapper>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ additionalClassNames = "" }: VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #484E56)" />
        </svg>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[20px] tracking-[0.08px] whitespace-nowrap">
        <p className="leading-[1.4]">{text}</p>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="bg-[#f3f3f4] content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium_Italic',sans-serif] font-medium h-[15px] italic justify-center leading-[0] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px] w-[106.52px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

function ContentCell1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="bg-[#fde7da]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e23318] text-[12px] tracking-[0.048px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
        <p className="leading-[1.3]">{children}</p>
      </div>
    </Wrapper1>
  );
}

function ContentCell() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative size-full">
          <div className="content-stretch flex items-start relative shrink-0">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] overflow-hidden relative shrink-0 text-[#0a0d13] text-[12px] text-ellipsis tracking-[0.048px] w-[169px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Rd No18 Cross Rd No 10 Green Valley Mango Azadnagar, Jamshedpur, 832110, Jharkhand `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Helper1() {
  return <Wrapper6>{`01/05/2023 & 24/05/2023`}</Wrapper6>;
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return <Wrapper6>{text}</Wrapper6>;
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <ol className="block font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] overflow-hidden relative shrink-0 text-[#0a0d13] text-[12px] text-ellipsis tracking-[0.048px] whitespace-nowrap" start="1" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        <li className="ms-[18px] whitespace-pre-wrap">
          <span className="leading-[1.3]">{text}</span>
        </li>
      </ol>
    </div>
  );
}

function Helper() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className="-translate-y-1/2 absolute flex h-[24px] items-center justify-center right-0 top-1/2 w-0">
      <div className="flex-none rotate-90">
        <div className="h-0 relative w-[24px]" data-name="Right Separator">
          <div className="absolute inset-[-0.5px_-2.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
              <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type Frame1943TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Frame1943Text({ text, additionalClassNames = "" }: Frame1943TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center py-[12px] relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[12px] text-ellipsis tracking-[0.048px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
      <Helper />
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return <Wrapper7>{text}</Wrapper7>;
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className={clsx("flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] tracking-[0.048px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[1.3]">{text}</p>
    </div>
  );
}

export default function AnalysisOverview() {
  return (
    <div className="bg-white relative size-full" data-name="Analysis Overview">
      <div className="absolute bg-white h-[1323px] left-[80px] overflow-x-clip overflow-y-auto top-[130px] w-[1360px]">
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[20px] top-[19px] w-[1320px]">
          <div className="content-stretch flex flex-col h-[97px] items-center relative shrink-0 w-full">
            <div className="h-[97px] relative rounded-[8px] shrink-0 w-full">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[12px] text-[14px] text-black top-[63px] tracking-[0.056px] w-[1081px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  <p className="leading-[1.3] whitespace-pre-wrap">Summary will need form Product team</p>
                </div>
                <div className="absolute bg-[#e23318] content-stretch flex gap-[4px] items-center justify-end left-0 px-[12px] py-[6px] rounded-br-[20px] top-px" data-name="Badge/Chip">
                  <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=u:exclamation-circle">
                    <div className="absolute inset-[8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                        <path d={svgPaths.p2e25ed80} fill="var(--fill-0, white)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <Text text="High Risk" additionalClassNames="text-white" />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#ed704e] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[4px] items-center left-[calc(50%+5px)] px-[16px] top-[-10px]">
              <div className="relative shrink-0 size-[20px]" data-name="Frame">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Frame">
                    <g id="Vector">
                      <path clipRule="evenodd" d={svgPaths.p3fdbb400} fill="url(#paint0_linear_39_8844)" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p8d54200} fill="url(#paint1_linear_39_8844)" fillRule="evenodd" />
                    </g>
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_39_8844" x1="2.36719" x2="17.6307" y1="9.58228" y2="9.58228">
                      <stop stopColor="#1C43B9" />
                      <stop offset="1" stopColor="#041C66" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_39_8844" x1="2.36719" x2="17.6307" y1="9.58228" y2="9.58228">
                      <stop stopColor="#1C43B9" />
                      <stop offset="1" stopColor="#041C66" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium from-[#1c43b9] justify-center leading-[0] relative shrink-0 text-[12px] text-[transparent] to-[#041c66] tracking-[0.048px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0", WebkitTextFillColor: "transparent" }}>
                <p className="leading-[1.3]">AI Summary</p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip py-[12px] relative shrink-0 w-full">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              Bank Statements(8)
            </p>
            <div className="bg-white relative rounded-[8px] shrink-0 w-full">
              <div className="content-start flex flex-wrap items-start overflow-clip relative rounded-[inherit] w-full">
                <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="bg-[#eceded] relative shrink-0 w-[270px]" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Holder Name" additionalClassNames="px-[16px]" />
                      </div>
                    </div>
                    <div className="bg-[#eceded] relative shrink-0 w-[158px]" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Number" additionalClassNames="px-[8px]" />
                      </div>
                    </div>
                    <div className="bg-[#eceded] relative shrink-0 w-[198px]" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Bank Name" additionalClassNames="px-[8px]" />
                      </div>
                    </div>
                    <div className="bg-[#eceded] relative shrink-0 w-[210px]" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
                          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[12px] text-ellipsis tracking-[0.048px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Start & End `}</p>
                          <Helper />
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#eceded] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Address" additionalClassNames="px-[8px]" />
                      </div>
                    </div>
                    <div className="bg-[#eceded] flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative size-full">
                          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
                            &nbsp;
                          </p>
                          <Helper />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e7e8e9] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[270px]" data-name="Content Cell">
                      <Text2 text="Mr Wasim Akbar Khan" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[158px]" data-name="Content Cell">
                      <Text3 text="50100480267270" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[198px]" data-name="Content Cell">
                      <Text3 text="HDFC Bank Limited" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[210px]" data-name="Content Cell">
                      <Helper1 />
                    </div>
                    <ContentCell />
                    <ContentCell1>Tempering Detected</ContentCell1>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e7e8e9] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[270px]" data-name="Content Cell">
                      <Text2 text="Mr Wasim Akbar Khan" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[158px]" data-name="Content Cell">
                      <Text3 text="50100480267270" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[198px]" data-name="Content Cell">
                      <Text3 text="HDFC Bank Limited" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[210px]" data-name="Content Cell">
                      <Helper1 />
                    </div>
                    <ContentCell />
                    <ContentCell1>Reconciliation Failure</ContentCell1>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e7e8e9] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[270px]" data-name="Content Cell">
                      <Text2 text="Mr Wasim Akbar Khan" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[158px]" data-name="Content Cell">
                      <Text3 text="50100480267270" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[198px]" data-name="Content Cell">
                      <Text3 text="HDFC Bank Limited" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[210px]" data-name="Content Cell">
                      <Helper1 />
                    </div>
                    <ContentCell />
                    <Wrapper1 additionalClassNames="bg-[#e7e8e9]">
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0e141c] text-[12px] tracking-[0.048px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
                        <p className="leading-[1.3]">Not applicable (Scanned Stat.)</p>
                      </div>
                    </Wrapper1>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e7e8e9] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[270px]" data-name="Content Cell">
                      <Text2 text="Mr Wasim Akbar Khan" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[158px]" data-name="Content Cell">
                      <Text3 text="50100480267270" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[198px]" data-name="Content Cell">
                      <Text3 text="HDFC Bank Limited" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[12px] py-[8px] relative self-stretch shrink-0 w-[210px]" data-name="Content Cell">
                      <Helper1 />
                    </div>
                    <ContentCell />
                    <Wrapper1 additionalClassNames="bg-[#e6f9dd]">
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a7a1e] text-[12px] tracking-[0.048px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
                        <p className="leading-[1.3]">Genuine Statement</p>
                      </div>
                    </Wrapper1>
                  </div>
                  <div className="h-[32px] relative shrink-0 w-full" data-name="Content Cell">
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative size-full">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] overflow-hidden relative shrink-0 text-[#0a0d13] text-[12px] text-ellipsis tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                            View All
                          </p>
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
              </div>
              <div aria-hidden="true" className="absolute border border-[#bfc2c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
          <div className="bg-[#fafafb] h-[856px] overflow-clip relative shrink-0 w-full">
            <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] left-[16px] text-[#131a25] text-[18px] top-[16px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              Analysis Overview
            </p>
            <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[57px] w-[1288px]">
              <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
                <Wrapper2>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <Wrapper7>{`Total Debits `}</Wrapper7>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[20px] tracking-[0.08px] whitespace-nowrap">
                      <p>
                        <span className="leading-[1.4]"></span>
                        <span className="font-['Plus_Jakarta_Sans:Regular','Noto_Sans:Bold',sans-serif] font-normal leading-[1.4]">₹</span>
                        <span className="leading-[1.4]">42,85,400</span>
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <Text4 text="1,245 Transactions" />
                    </div>
                  </div>
                </Wrapper2>
                <Wrapper2>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <Text1 text="Total Credits" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[20px] tracking-[0.08px] whitespace-nowrap">
                      <p className="leading-[1.4]">48,12,000</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <Text4 text="249 Transactions" />
                    </div>
                  </div>
                </Wrapper2>
                <Wrapper2>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <Text1 text="EMI/ Income Ratios" />
                    </div>
                  </div>
                  <ContainerText text="42%" />
                </Wrapper2>
                <Wrapper2>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <Text text="Income Volatility" additionalClassNames="text-[#484e56]" />
                    </div>
                  </div>
                  <ContainerText text="18.2%" />
                </Wrapper2>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0" data-name="TransactionBehaviourChart">
                  <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full">
                    <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px relative text-[#131a25] text-[16px] tracking-[0.064px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
                      Transaction Behaviour Analysis
                    </p>
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=fi:maximize-2">
                      <div className="absolute inset-[8.75%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                          <g id="Vector">
                            <path clipRule="evenodd" d={svgPaths.p10a5aa80} fill="var(--fill-0, #131A25)" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p26f05e80} fill="var(--fill-0, #131A25)" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p2df79a00} fill="var(--fill-0, #131A25)" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p3396300} fill="var(--fill-0, #131A25)" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="h-[258px] overflow-clip relative shrink-0 w-[600px]" data-name="Surface">
                    <div className="absolute contents inset-[9.3%_6.33%_9.69%_7.62%]" data-name="Group">
                      <div className="absolute inset-[9.3%_6.33%_9.69%_7.62%]" data-name="Group">
                        <div className="absolute inset-[-0.24%_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 516.278 210">
                            <g id="Group">
                              <path d="M0 209.5H516.278" id="Vector" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                              <path d="M0 157.25H516.278" id="Vector_2" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                              <path d="M0 105H516.278" id="Vector_3" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                              <path d="M0 52.75H516.278" id="Vector_4" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                              <path d="M0 0.5H516.278" id="Vector_5" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[9.3%_6.33%_9.69%_7.62%]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517.278 209">
                          <g id="Group">
                            <path d="M84.5332 0V209" id="Vector" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                            <path d="M260.612 0V209" id="Vector_2" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                            <path d="M435.691 0V209" id="Vector_3" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                            <path d="M0.5 0V209" id="Vector_4" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                            <path d="M516.778 0V209" id="Vector_5" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute contents inset-[90.31%_5.83%_2.12%_7%]" data-name="Group">
                      <div className="absolute inset-[90.31%_5.83%_9.69%_7%]" data-name="Vector">
                        <div className="absolute inset-[-0.5px_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 523 1">
                            <path d="M0 0.5H523" id="Vector" stroke="var(--stroke-0, #484E56)" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute contents inset-[90.31%_18.34%_2.12%_20.03%]" data-name="Group">
                        <div className="absolute contents inset-[90.31%_76.81%_2.12%_20.03%]" data-name="Group">
                          <Vector additionalClassNames="inset-[90.31%_78.42%_7.36%_21.58%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[92.06%_76.81%_2.12%_20.03%] leading-[normal] text-[#484e56] text-[12px] text-center">Jan</p>
                        </div>
                        <div className="absolute contents inset-[90.31%_47.22%_2.12%_48.95%]" data-name="Group">
                          <Vector additionalClassNames="inset-[90.31%_49.16%_7.36%_50.84%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[92.06%_47.22%_2.12%_48.95%] leading-[normal] text-[#484e56] text-[12px] text-center">Feb</p>
                        </div>
                        <div className="absolute contents inset-[90.31%_18.34%_2.12%_78.16%]" data-name="Group">
                          <Vector additionalClassNames="inset-[90.31%_19.9%_7.36%_80.1%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[92.06%_18.34%_2.12%_78.16%] leading-[normal] text-[#484e56] text-[12px] text-center">Mar</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[6.3%_92.4%_6.88%_-0.06%]" data-name="Group">
                      <Vector2 additionalClassNames="inset-[9.3%_92.4%_9.69%_7.6%]" />
                      <div className="absolute contents inset-[6.3%_92.4%_6.88%_-0.06%]" data-name="Group">
                        <div className="absolute contents inset-[87.31%_92.4%_6.88%_5.2%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[90.31%_92.4%_9.69%_7.01%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[87.31%_93.3%_6.88%_5.2%] leading-[normal] text-[#484e56] text-[12px] text-right">0</p>
                        </div>
                        <div className="absolute contents inset-[67.06%_92.4%_27.13%_1.14%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[70.06%_92.4%_29.94%_7.01%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[67.06%_93.36%_27.13%_1.14%] leading-[normal] text-[#484e56] text-[12px] text-right">2500</p>
                        </div>
                        <div className="absolute contents inset-[46.81%_92.4%_47.38%_0.98%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[49.81%_92.4%_50.19%_7.01%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[46.81%_93.36%_47.38%_0.98%] leading-[normal] text-[#484e56] text-[12px] text-right">5000</p>
                        </div>
                        <div className="absolute contents inset-[26.55%_92.4%_67.63%_1.31%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[29.55%_92.4%_70.45%_7.01%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[26.55%_93.36%_67.63%_1.31%] leading-[normal] text-[#484e56] text-[12px] text-right">7500</p>
                        </div>
                        <div className="absolute contents inset-[6.3%_92.4%_87.88%_-0.06%]" data-name="Group">
                          <Vector1 additionalClassNames="inset-[9.3%_92.4%_90.7%_7.01%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[6.3%_93.39%_87.88%_-0.06%] leading-[normal] text-[#484e56] text-[12px] text-right">10000</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[6.3%_-0.01%_6.88%_92.89%]" data-name="Group">
                      <Vector2 additionalClassNames="inset-[9.3%_6.27%_9.69%_93.73%]" />
                      <div className="absolute contents inset-[6.3%_-0.01%_6.88%_92.89%]" data-name="Group">
                        <div className="absolute contents inset-[87.31%_3.99%_6.88%_92.89%]" data-name="Group">
                          <Vector3 additionalClassNames="inset-[90.31%_6.52%_9.69%_92.89%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[87.31%_3.99%_6.88%_94.51%] leading-[normal] text-[#484e56] text-[12px]">0</p>
                        </div>
                        <div className="absolute contents inset-[67.06%_1.33%_27.13%_93.73%]" data-name="Group">
                          <Vector3 additionalClassNames="inset-[70.06%_5.69%_29.94%_93.73%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[67.06%_1.33%_27.13%_94.51%] leading-[normal] text-[#484e56] text-[12px]">600</p>
                        </div>
                        <div className="absolute contents inset-[46.81%_0.49%_47.38%_93.73%]" data-name="Group">
                          <Vector3 additionalClassNames="inset-[49.81%_5.69%_50.19%_93.73%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[46.81%_0.49%_47.38%_94.51%] leading-[normal] text-[#484e56] text-[12px]">1200</p>
                        </div>
                        <div className="absolute contents inset-[26.55%_0.49%_67.63%_93.73%]" data-name="Group">
                          <Vector3 additionalClassNames="inset-[29.55%_5.69%_70.45%_93.73%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[26.55%_0.49%_67.63%_94.51%] leading-[normal] text-[#484e56] text-[12px]">1800</p>
                        </div>
                        <div className="absolute contents inset-[6.3%_-0.01%_87.88%_93.73%]" data-name="Group">
                          <Vector3 additionalClassNames="inset-[9.3%_5.69%_90.7%_93.73%]" />
                          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[6.3%_-0.01%_87.88%_94.51%] leading-[normal] text-[#484e56] text-[12px]">2400</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[57.75%_20.33%_9.69%_17.17%]" data-name="Group">
                      <div className="absolute contents inset-[57.75%_20.33%_9.69%_17.17%]" data-name="Group">
                        <div className="absolute contents inset-[57.75%_20.33%_9.69%_17.17%]" data-name="Group">
                          <div className="absolute inset-[57.75%_78.83%_9.69%_17.17%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 84">
                              <g id="Group">
                                <path d="M0 0H24V84H0V0Z" fill="var(--fill-0, #1766D6)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[65.89%_49.33%_9.69%_46.67%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 63">
                              <g id="Group">
                                <path d="M0 0H24V63H0V0Z" fill="var(--fill-0, #1766D6)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[74.03%_20.33%_9.69%_75.67%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 42">
                              <g id="Group">
                                <path d="M0 0H24V42H0V0Z" fill="var(--fill-0, #1766D6)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[10.85%_15.5%_9.69%_22%]" data-name="Group">
                      <div className="absolute contents inset-[10.85%_15.5%_9.69%_22%]" data-name="Group">
                        <div className="absolute contents inset-[10.85%_15.5%_9.69%_22%]" data-name="Group">
                          <div className="absolute inset-[70.93%_74%_9.69%_22%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 50">
                              <g id="Group">
                                <path d="M0 0H24V50H0V0Z" fill="var(--fill-0, #5CD4E6)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[79.07%_44.83%_9.69%_51.17%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 29">
                              <g id="Group">
                                <path d="M0 0H24V29H0V0Z" fill="var(--fill-0, #5CD4E6)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[10.85%_15.5%_9.69%_80.5%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 205">
                              <g id="Group">
                                <path d="M0 0H24V205H0V0Z" fill="var(--fill-0, #5CD4E6)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-[8.14%_19.33%_82.95%_21.17%]" data-name="Group">
                      <div className="absolute inset-[-4.35%_-0.28%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 359 25">
                          <g id="Group">
                            <path d={svgPaths.pa77df80} id="Vector" stroke="var(--stroke-0, #003464)" strokeWidth="2" />
                            <g id="Group_2">
                              <path d={svgPaths.p1e531d00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #003464)" strokeWidth="2" />
                              <path d={svgPaths.p324f8b80} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #003464)" strokeWidth="2" />
                              <path d={svgPaths.p35f0a300} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #003464)" strokeWidth="2" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[10px] h-[21px] items-center justify-center relative shrink-0 w-full">
                    <div className="h-[21px] relative shrink-0 w-[88.57px]" data-name="List Item">
                      <Surface>
                        <path d="M0 1.75H14V12.25H0V1.75Z" fill="var(--fill-0, #1766D6)" id="Vector" />
                      </Surface>
                      <TextText text="Avg Credit" additionalClassNames="w-[70.57px]" />
                    </div>
                    <div className="h-[21px] relative shrink-0 w-[83.148px]" data-name="List Item">
                      <Surface>
                        <path d="M0 1.75H14V12.25H0V1.75Z" fill="var(--fill-0, #33AFCD)" id="Vector" />
                      </Surface>
                      <TextText text="Avg Debit" additionalClassNames="w-[65.148px]" />
                    </div>
                    <div className="h-[21px] relative shrink-0 w-[133.773px]" data-name="List Item">
                      <Surface>
                        <path d={svgPaths.pd6b84c0} id="Vector" stroke="var(--stroke-0, #041C66)" strokeWidth="1.75" />
                      </Surface>
                      <TextText text="Avg EOD Balance" additionalClassNames="w-[115.773px]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <TransactionBehaviourChart>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case'" }}>
                      Income Vs Obligation Trend
                    </p>
                    <div className="h-[254px] relative shrink-0 w-full" data-name="LineChart">
                      <div className="absolute h-[275px] left-0 overflow-clip top-0 w-[605px]" data-name="Surface">
                        <div className="absolute contents inset-[7.55%_4.27%_13.59%_9.86%]" data-name="Group">
                          <div className="absolute inset-[7.55%_4.27%_13.59%_9.86%]" data-name="Group">
                            <div className="absolute inset-[-0.23%_0]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 519.526 217.887">
                                <g id="Group">
                                  <path d="M1.60038e-06 217.387H519.526" id="Vector" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 163.164H519.526" id="Vector_2" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 108.945H519.526" id="Vector_3" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 54.7227H519.526" id="Vector_4" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 0.5H519.526" id="Vector_5" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[7.55%_4.27%_13.59%_9.86%]" data-name="Group">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520.526 216.887">
                              <g id="Group">
                                <path d="M0.5 0V216.887" id="Vector" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                <path d="M260.263 0V216.887" id="Vector_2" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                <path d="M520.026 0V216.887" id="Vector_3" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute contents inset-[86.41%_1.92%_6.22%_7.61%]" data-name="Group">
                          <div className="absolute inset-[86.41%_4.27%_13.59%_9.86%]" data-name="Vector">
                            <div className="absolute inset-[-0.5px_0]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 519.526 1">
                                <path d="M0 0.5H519.526" id="Vector" stroke="var(--stroke-0, #484E56)" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute contents inset-[86.41%_1.92%_6.22%_7.61%]" data-name="Group">
                            <div className="absolute contents inset-[86.41%_87.9%_6.22%_7.61%]" data-name="Group">
                              <Vector4 additionalClassNames="inset-[86.41%_90.14%_11.32%_9.86%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[88.12%_87.9%_6.22%_7.61%] leading-[normal] text-[#484e56] text-[12px] whitespace-pre-wrap">Jan</p>
                            </div>
                            <div className="absolute contents inset-[86.41%_44.97%_6.22%_50.55%]" data-name="Group">
                              <Vector4 additionalClassNames="inset-[86.41%_47.21%_11.32%_52.79%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[88.12%_44.97%_6.22%_50.55%] leading-[normal] text-[#484e56] text-[12px] whitespace-pre-wrap">Feb</p>
                            </div>
                            <div className="absolute contents inset-[86.41%_1.92%_6.22%_93.38%]" data-name="Group">
                              <Vector4 additionalClassNames="inset-[86.41%_4.27%_11.32%_95.73%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[88.12%_1.92%_6.22%_93.38%] leading-[normal] text-[#484e56] text-[12px] whitespace-pre-wrap">Mar</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[4.63%_90.14%_10.85%_1.52%]" data-name="Group">
                          <div className="absolute inset-[7.55%_90.14%_13.59%_9.86%]" data-name="Vector">
                            <div className="absolute inset-[0_-0.5px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 216.887">
                                <path d="M0.5 0V216.887" id="Vector" stroke="var(--stroke-0, #484E56)" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute contents inset-[4.63%_90.14%_10.85%_1.52%]" data-name="Group">
                            <div className="absolute contents inset-[83.49%_90.14%_10.85%_6.44%]" data-name="Group">
                              <Vector5 additionalClassNames="inset-[86.41%_90.14%_13.59%_8.57%]" />
                              <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.49%_91.85%_10.85%_6.44%] leading-[normal] not-italic text-[#484e56] text-[12px] text-right whitespace-pre-wrap">0</p>
                            </div>
                            <div className="absolute contents inset-[63.78%_90.14%_30.56%_2.17%]" data-name="Group">
                              <Vector5 additionalClassNames="inset-[66.7%_90.14%_33.3%_8.57%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[63.78%_91.85%_30.56%_2.17%] leading-[normal] text-[#484e56] text-[12px] whitespace-pre-wrap">1500</p>
                            </div>
                            <div className="absolute contents inset-[44.06%_90.14%_50.28%_1.52%]" data-name="Group">
                              <Vector5 additionalClassNames="inset-[46.98%_90.14%_53.02%_8.57%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[44.06%_91.85%_50.28%_1.52%] leading-[normal] text-[#484e56] text-[12px] whitespace-pre-wrap">3000</p>
                            </div>
                            <div className="absolute contents inset-[24.34%_90.14%_70%_1.74%]" data-name="Group">
                              <Vector5 additionalClassNames="inset-[27.26%_90.14%_72.74%_8.57%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[24.34%_91.85%_70%_1.74%] leading-[normal] text-[#484e56] text-[12px] whitespace-pre-wrap">4500</p>
                            </div>
                            <div className="absolute contents inset-[4.63%_90.14%_89.71%_1.74%]" data-name="Group">
                              <Vector5 additionalClassNames="inset-[7.55%_90.14%_92.45%_8.57%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[4.63%_91.85%_89.71%_1.74%] leading-[normal] text-[#484e56] text-[12px] whitespace-pre-wrap">6000</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-[13.09%_3.97%_75.64%_9.26%]" data-name="Group">
                          <div className="absolute inset-[-3.23%_-0.19%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 527 33">
                              <g id="Group">
                                <path d={svgPaths.p213a5780} id="Vector" stroke="var(--stroke-0, #1766D6)" strokeWidth="3" />
                                <g id="Group_2">
                                  <path d={svgPaths.p36ea0380} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #1766D6)" strokeWidth="2" />
                                  <path d={svgPaths.p2e1bcd00} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #1766D6)" strokeWidth="2" />
                                  <path d={svgPaths.p278ea800} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #1766D6)" strokeWidth="2" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[13.82%_4.3%_53.09%_9.92%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 519 91">
                            <path d={svgPaths.p39be880} fill="url(#paint0_linear_39_8783)" id="Vector 1" />
                            <defs>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_39_8783" x1="259.5" x2="259.5" y1="-5.51828e-07" y2="200">
                                <stop stopColor="#1766D6" stopOpacity="0.5" />
                                <stop offset="1" stopColor="#1766D6" stopOpacity="0.08" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="absolute inset-[39.27%_3.97%_13.27%_9.26%]" data-name="Group">
                          <div className="absolute inset-[-0.77%_-0.19%_0_-0.19%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 527 131.5">
                              <g id="Group">
                                <path d={svgPaths.peeffe00} id="Vector" stroke="var(--stroke-0, #E23318)" strokeWidth="3" />
                                <g id="Group_2">
                                  <path d={svgPaths.p36ea0380} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #E23318)" strokeWidth="2" />
                                  <path d={svgPaths.p86cc980} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #E23318)" strokeWidth="2" />
                                  <path d={svgPaths.p36c31700} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #E23318)" strokeWidth="2" />
                                  <path d="M523 5L4 24V131.5H523V5Z" fill="url(#paint0_linear_39_8918)" id="Vector 2" />
                                </g>
                              </g>
                              <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_39_8918" x1="263.5" x2="263.5" y1="5" y2="131.5">
                                  <stop stopColor="#E23318" stopOpacity="0.3" />
                                  <stop offset="1" stopColor="#E23318" stopOpacity="0.1" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-name="Legend">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[10px] items-center justify-center px-[104px] relative w-full">
                          <div className="h-[21px] relative shrink-0 w-[103.352px]" data-name="List Item">
                            <Surface>
                              <path d={svgPaths.pd6b84c0} id="Vector" stroke="var(--stroke-0, #4C92E6)" strokeWidth="1.75" />
                            </Surface>
                            <TextText text="Total Income" additionalClassNames="w-[85.352px]" />
                          </div>
                          <div className="h-[21px] relative shrink-0 w-[131.25px]" data-name="List Item">
                            <Surface>
                              <path d={svgPaths.pd6b84c0} id="Vector" stroke="var(--stroke-0, #E23318)" strokeWidth="1.75" />
                            </Surface>
                            <TextText text="Total Obligations" additionalClassNames="w-[113.25px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TransactionBehaviourChart>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <TransactionBehaviourChart>
                    <Text5 text="Major Risk Triggers" />
                    <div className="h-[250px] relative shrink-0 w-full" data-name="BarChart">
                      <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[604px]" data-name="Surface">
                        <div className="absolute contents inset-[11.6%_0_-0.4%_15.4%]" data-name="Group">
                          <div className="absolute inset-[11.6%_0_-0.4%_15.4%]" data-name="Group">
                            <div className="absolute inset-[-0.23%_0]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 511 223">
                                <g id="Group">
                                  <path d="M0 0.5H511" id="Vector" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 49.5H511" id="Vector_2" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 98.5H511" id="Vector_3" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 148.5H511" id="Vector_4" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 198.5H511" id="Vector_5" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                  <path d="M0 222.5H511" id="Vector_6" stroke="var(--stroke-0, #E4E9F2)" strokeDasharray="3 3" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[2%_84.6%_2%_0]" data-name="Group">
                          <div className="absolute inset-[2%_84.6%_2%_15.4%]" data-name="Vector">
                            <div className="absolute inset-[0_-0.5px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 240">
                                <path d="M0.5 0V240" id="Vector" stroke="var(--stroke-0, #666666)" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute contents inset-[8.3%_84.6%_6.5%_0]" data-name="Group">
                            <div className="absolute contents inset-[8.3%_84.6%_85.7%_0.83%]" data-name="Group">
                              <Vector6 additionalClassNames="inset-[11.6%_84.6%_88.4%_14.4%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[8.3%_85.93%_85.7%_0.83%] leading-[normal] text-[#484e56] text-[12px] text-right">High Value Txn</p>
                            </div>
                            <div className="absolute contents inset-[28.3%_84.6%_65.7%_2.81%]" data-name="Group">
                              <Vector6 additionalClassNames="inset-[31.2%_84.6%_68.8%_14.4%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[28.3%_85.93%_65.7%_2.81%] leading-[normal] text-[#484e56] text-[12px] text-right">EMI Bounce</p>
                            </div>
                            <div className="absolute contents inset-[44.3%_84.6%_43.7%_0]" data-name="Group">
                              <Vector6 additionalClassNames="inset-[50.8%_84.6%_49.2%_14.4%]" />
                              <div className="absolute contents inset-[44.3%_85.93%_43.7%_0]" data-name="Group">
                                <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[44.3%_85.93%_43.7%_0] leading-[normal] text-[#484e56] text-[12px] text-right whitespace-pre-wrap">Circular Transaction</p>
                              </div>
                            </div>
                            <div className="absolute contents inset-[67.5%_84.6%_26.5%_2.98%]" data-name="Group">
                              <Vector6 additionalClassNames="inset-[70.8%_84.6%_29.2%_14.4%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[67.5%_85.93%_26.5%_2.98%] leading-[normal] text-[#484e56] text-[12px] text-right">Refunds Inc</p>
                            </div>
                            <div className="absolute contents inset-[87.5%_84.6%_6.5%_2.48%]" data-name="Group">
                              <Vector6 additionalClassNames="inset-[90.8%_84.6%_9.2%_14.4%]" />
                              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal inset-[87.5%_85.93%_6.5%_2.48%] leading-[normal] text-[#484e56] text-[12px] text-right">Cash Spikes</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[4%_14.4%_2%_15.4%]" data-name="Group">
                          <div className="absolute contents inset-[4%_14.4%_2%_15.4%]" data-name="Group">
                            <div className="absolute contents inset-[4%_14.4%_2%_15.4%]" data-name="Group">
                              <div className="absolute inset-[4%_14.4%_80.72%_15.4%]" data-name="Group">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424 38.202">
                                  <g id="Group">
                                    <path d={svgPaths.p28e0ce00} fill="var(--fill-0, #E23318)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <div className="absolute inset-[23.45%_32.03%_60.81%_15.4%]" data-name="Group">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317.545 39.3596">
                                  <g id="Group">
                                    <path d={svgPaths.pe8ddc00} fill="var(--fill-0, #ED704E)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <div className="absolute inset-[43.36%_58.24%_41.36%_15.4%]" data-name="Group">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159.227 38.202">
                                  <g id="Group">
                                    <path d={svgPaths.p1fcf5c00} fill="var(--fill-0, #F69872)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <div className="absolute inset-[62.81%_66.98%_21.45%_15.4%]" data-name="Group">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.455 39.3597">
                                  <g id="Group">
                                    <path d={svgPaths.p25ff0ca0} fill="var(--fill-0, #FCC3A1)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <div className="absolute inset-[82.26%_75.87%_2%_15.4%]" data-name="Group">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.7725 39.3596">
                                  <g id="Group">
                                    <path d={svgPaths.p1ca8f080} fill="var(--fill-0, #FDE4D0)" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[8%_10.26%_86%_87.58%] leading-[normal] not-italic text-[#484e56] text-[12px] text-right whitespace-pre-wrap">12</p>
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[28.4%_28.81%_65.6%_69.87%] leading-[normal] not-italic text-[#484e56] text-[12px] text-right whitespace-pre-wrap">8</p>
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.6%_54.8%_46.4%_43.87%] leading-[normal] not-italic text-[#484e56] text-[12px] text-right whitespace-pre-wrap">5</p>
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[67.6%_63.58%_26.4%_35.1%] leading-[normal] not-italic text-[#484e56] text-[12px] text-right whitespace-pre-wrap">3</p>
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[87.6%_72.85%_6.4%_26.16%] leading-[normal] not-italic text-[#484e56] text-[12px] text-right whitespace-pre-wrap">1</p>
                    </div>
                  </TransactionBehaviourChart>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <TransactionBehaviourChart>
                      <Wrapper5>{`Top Debtors `}</Wrapper5>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[16px] relative w-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                          <div className="bg-[#fff8e4] overflow-clip relative rounded-[6px] shrink-0 size-[34px]" data-name="Bank Cuarntee">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="data_table">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="data_table">
                                  <mask height="24" id="mask0_39_8791" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" x="1.2207e-05" y="-1.2207e-05" />
                                  </mask>
                                  <g mask="url(#mask0_39_8791)">
                                    <path d={svgPaths.p13bb9e80} fill="var(--fill-0, #131A25)" id="data_table_2" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="absolute left-[17px] overflow-clip size-[15px] top-[17px]" data-name="Icon=u:exclamation-filled">
                              <div className="absolute inset-[8.33%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
                                  <circle cx="6.25" cy="6.25" fill="var(--fill-0, #ED8E00)" id="Ellipse 11" r="6.25" />
                                </svg>
                              </div>
                              <div className="absolute inset-[30.95%_46.22%_29.36%_45.83%]" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.19268 5.95252">
                                  <g id="Vector">
                                    <path d={svgPaths.p116bcbf0} fill="var(--fill-0, #DBE9FA)" />
                                    <path d={svgPaths.p2d1491f0} fill="var(--fill-0, #DBE9FA)" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#484e56] text-[12px] text-center tracking-[0.048px] w-[248px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                            Details may exist, we are unable to fetch at this moment.
                          </p>
                        </div>
                      </div>
                    </TransactionBehaviourChart>
                  </div>
                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="TransactionBehaviourChart">
                    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                      <Text5 text="Top Creditors" />
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                          <div className="content-stretch flex items-center overflow-clip px-[13.982px] py-[13.108px] relative shrink-0" data-name="Surface">
                            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                                <div className="col-1 h-[52.391px] ml-[19.38%] mt-0 relative row-1 w-[84.478px]" data-name="Group">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.4776 52.3916">
                                    <g id="Group">
                                      <path d={svgPaths.p14a40380} fill="var(--fill-0, #1766D6)" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="col-1 h-[78.311px] ml-0 mt-[11.57%] relative row-1 w-[30.05px]" data-name="Group">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0501 78.3114">
                                    <g id="Group">
                                      <path d={svgPaths.p7ea5a80} fill="var(--fill-0, #5CD4E6)" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="col-1 h-[26.209px] ml-[16.91%] mt-[74.99%] relative row-1 w-[56.299px]" data-name="Group">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.2996 26.2091">
                                    <g id="Group">
                                      <path d={svgPaths.p38f89300} fill="var(--fill-0, #B67AE5)" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="col-1 h-[33.089px] ml-[64.81%] mt-[63.22%] relative row-1 w-[32.581px]" data-name="Group">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5807 33.0892">
                                    <g id="Group">
                                      <path d={svgPaths.p335c1080} fill="var(--fill-0, #704DD6)" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="col-1 h-[17.862px] ml-[81.04%] mt-[51.16%] relative row-1 w-[19.831px]" data-name="Group">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8307 17.8621">
                                    <g id="Group">
                                      <path d={svgPaths.p29e9f300} fill="var(--fill-0, #7FD771)" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <Container additionalClassNames="w-[83.969px]">
                              <div className="bg-[#1766d6] rounded-[4px] shrink-0 size-[10.5px]" data-name="Container" />
                              <TextText1 text="Sigma Components" />
                            </Container>
                            <Wrapper3 additionalClassNames="shrink-0 w-[31.766px]">
                              <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#484e56] text-[14px] top-[0.5px] w-[32px] whitespace-pre-wrap">12%</p>
                            </Wrapper3>
                          </div>
                          <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <Container additionalClassNames="w-[106.023px]">
                              <div className="bg-[#5cd4e6] rounded-[4px] shrink-0 size-[10.5px]" data-name="Container" />
                              <TextText1 text="Hexa Utilities" />
                            </Container>
                            <Wrapper3 additionalClassNames="shrink-0 w-[31.914px]">
                              <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-[33px] text-[#484e56] text-[14px] text-right top-[0.5px]">20%</p>
                            </Wrapper3>
                          </div>
                          <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <Container additionalClassNames="w-[69.859px]">
                              <div className="bg-[#b67ae5] rounded-[4px] shrink-0 size-[10.5px]" data-name="Container" />
                              <TextText1 text="Delta Finserv" />
                            </Container>
                            <TextText2 text="₹85" additionalClassNames="w-[26.992px]" />
                          </div>
                          <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <Container additionalClassNames="w-[112.969px]">
                              <div className="bg-[#704dd6] rounded-[4px] shrink-0 size-[10.5px]" data-name="Container" />
                              <TextText1 text="Tristar Bank | EMI" />
                            </Container>
                            <TextText2 text="₹52" additionalClassNames="w-[26.57px]" />
                          </div>
                          <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <Container additionalClassNames="w-[64.102px]">
                              <div className="bg-[#7fd771] rounded-[4px] shrink-0 size-[10.5px]" data-name="Container" />
                              <Wrapper3 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                                <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] left-0 text-[#131a25] text-[14px] top-[0.5px]">
                                  <span className="leading-[21px]">{`Others `}</span>
                                  <span className="leading-[21px]">Vertex Leasing</span>
                                </p>
                              </Wrapper3>
                            </Container>
                            <TextText2 text="₹25" additionalClassNames="w-[26.57px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white left-[1203px] rounded-[4px] top-[12px] w-[101px]" data-name="Input-Box">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[8px] relative rounded-[inherit] w-full">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="left-content">
                  <Text text="3 Months" additionalClassNames="text-[#131a25]" />
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 size-[16px]" data-name="right-content">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon=fi:chevron-down">
                    <div className="absolute inset-[33.75%_21.25%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8 7.8">
                        <path clipRule="evenodd" d={svgPaths.p2a263e00} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[1453px] left-0 pointer-events-none top-0">
        <div className="bg-[#09132a] h-[900px] pointer-events-auto sticky top-0 w-[80px]" data-name="sidebar/collapsed">
          <div className="absolute contents left-[19px] top-[12px]" data-name="IDfy Logo/Product/DF-short">
            <div className="absolute contents left-[19px] top-[12px]" data-name="logo/idfy-main">
              <div className="absolute h-[26.282px] left-[19px] top-[12px] w-[41px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.0001 26.282">
                  <g id="Group 2">
                    <ellipse cx="13.1136" cy="13.141" fill="var(--fill-0, white)" id="Ellipse 5" rx="13.1136" ry="13.141" />
                    <g id="Group 1">
                      <g id="Vector">
                        <path d={svgPaths.p3fe90c80} fill="var(--fill-0, #CE1417)" />
                        <path d={svgPaths.p1cabea00} fill="var(--fill-0, #CE1417)" />
                      </g>
                      <path d={svgPaths.p238b9b80} fill="var(--fill-0, white)" id="Vector_2" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute content-start flex flex-wrap gap-[4px] items-start left-0 top-[50px] w-[80px]">
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
      <div className="absolute bottom-0 h-[1453px] left-[80px] pointer-events-none top-0">
        <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0 w-[1362px]" data-name="All Processing Purposes">
          <div className="bg-[#09132a] relative shadow-[0px_4px_12px_0px_rgba(19,26,37,0.08)] shrink-0 w-full" data-name="top-bar">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[20px] text-white tracking-[0.08px]">OneRisk</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] h-[33px] items-center justify-end relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=fi:help-circle">
                    <div className="absolute inset-[4.58%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8 21.8">
                        <path clipRule="evenodd" d={svgPaths.p2a0e0900} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                    <div className="absolute inset-[67.08%_46.21%_25.42%_46.25%]" data-name="Line (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81 1.8">
                        <path clipRule="evenodd" d={svgPaths.p577300} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Line (Stroke)" />
                      </svg>
                    </div>
                    <div className="absolute inset-[25.4%_34.08%_42.08%_34.12%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.63025 7.80472">
                        <path clipRule="evenodd" d={svgPaths.p11805600} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=fi:bell">
                      <div className="absolute inset-[4.58%_8.75%_25.42%_8.75%]" data-name="Vector (Stroke)">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8001 16.8">
                          <path clipRule="evenodd" d={svgPaths.p33aa7380} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
                        </svg>
                      </div>
                      <div className="absolute inset-[83.75%_39.04%_4.6%_39.04%]" data-name="Vector (Stroke)">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2603 2.7966">
                          <path clipRule="evenodd" d={svgPaths.p37658400} fill="var(--fill-0, #DBE9FA)" fillRule="evenodd" id="Vector (Stroke)" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute left-[14px] size-[9px] top-[-2.5px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                        <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F4C963)" id="Ellipse 7" r="4" stroke="var(--stroke-0, #FAFAFB)" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="bg-white col-1 content-stretch flex items-center ml-0 mt-0 p-[5px] relative rounded-[12.5px] row-1 size-[25px]">
                        <div className="relative shrink-0 size-[15px]" data-name="fe:user">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                            <g id="fe:user">
                              <path d={svgPaths.p266191f0} fill="var(--fill-0, #09132A)" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[1404px] left-[80px] pointer-events-none top-[49px]">
        <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0 w-[1360px]">
          <div className="bg-white content-stretch flex items-center p-[6px] relative shrink-0 w-[1361px]" data-name="left-container">
            <div aria-hidden="true" className="absolute border-[#eceded] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="breadcrumb">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Home
                </p>
                <BreadcrumbIconFiChevronRight />
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  BSA
                </p>
                <BreadcrumbIconFiChevronRight />
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Summary Page
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-between p-[8px] relative shrink-0 w-[1359px]">
            <div className="content-stretch flex items-center relative shrink-0 w-[440px]">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
                    Name of First Entity
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1766d6] h-[36px] relative rounded-[8px] shrink-0" data-name="button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[24px] relative">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    Download Excel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}