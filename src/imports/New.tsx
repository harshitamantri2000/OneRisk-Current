import clsx from "clsx";
import svgPaths from "./svg-kvinlibc9p";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={additionalClassNames}>
      {children}
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper3 additionalClassNames={clsx("flex items-center justify-center relative shrink-0 w-0", additionalClassNames)}>{children}</Wrapper3>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper3 additionalClassNames={clsx("-translate-y-1/2 absolute flex h-[24px] items-center justify-center top-1/2 w-0", additionalClassNames)}>{children}</Wrapper3>;
}
type Control1Props = {
  additionalClassNames?: string;
};

function Control1({ additionalClassNames = "" }: Control1Props) {
  return (
    <div className={clsx("bg-[#fafafb] relative rounded-[8px] size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevron-left">
            <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 5.2 9.2" className="absolute block size-full">
                <path clipRule="evenodd" d={svgPaths.p3d6df80} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
      <Control additionalClassNames="shrink-0" />
      <Control1 additionalClassNames="shrink-0" />
      <Page className="bg-[#1766d6] relative rounded-[8px] shrink-0 size-[32px]" page="1" state="Current" />
      <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="2" />
      <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="3" />
      <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
        <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
            <Text text="..." additionalClassNames="text-[#131a25] text-center" />
          </div>
        </div>
      </div>
      <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="10" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#fafafb] relative rounded-[8px] size-[32px]" data-name="Control">
            <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevron-left">
                  <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 5.2 9.2" className="absolute block size-full">
                      <path clipRule="evenodd" d={svgPaths.p3d6df80} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Control />
        </div>
      </div>
    </div>
  );
}
type VectorStrokeProps = {
  additionalClassNames?: string;
};

function VectorStroke({ additionalClassNames = "" }: VectorStrokeProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53333 7.86667">
        <path clipRule="evenodd" d={svgPaths.p275dd880} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
      </svg>
    </div>
  );
}
type ControlProps = {
  additionalClassNames?: string;
};

function Control({ additionalClassNames = "" }: ControlProps) {
  return (
    <div className={clsx("bg-[#fafafb] relative rounded-[8px] size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevrons-left">
            <VectorStroke additionalClassNames="inset-[25.42%_50.42%_25.42%_21.25%]" />
            <VectorStroke additionalClassNames="inset-[25.42%_21.25%_25.42%_50.42%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
type Helper9Props = {
  additionalClassNames?: string;
};

function Helper9({ additionalClassNames = "" }: Helper9Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText10 text="03AAAC15950L2ZJ" />
      <ContentCell16 />
      <BadgeChipText text="Active" additionalClassNames="bg-white rounded-[8px]" />
      <ContentCell17 />
      <ContentCell18 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:exclamation-circle">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path d={svgPaths.p17117e00} fill="var(--fill-0, #C21B11)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#c21b11] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
              {"Missed Filling"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Helper8Props = {
  additionalClassNames?: string;
};

function Helper8({ additionalClassNames = "" }: Helper8Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText10 text="03AAAC15950L2ZJ" />
      <ContentCell16 />
      <BadgeChipText text="Active" additionalClassNames="bg-white rounded-[8px]" />
      <ContentCell17 />
      <ContentCell18 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:clock">
              <div className="absolute inset-[8.33%_12.5%_8.33%_4.17%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path d={svgPaths.p1c39b380} fill="var(--fill-0, #CB7100)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#cb7100] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
              {"Delayed Filling"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
type ContentCell18Props = {
  additionalClassNames?: string;
};

function ContentCell18({ additionalClassNames = "" }: ContentCell18Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="DD - MM - YY" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell17Props = {
  additionalClassNames?: string;
};

function ContentCell17({ additionalClassNames = "" }: ContentCell17Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="Punjab" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell16Props = {
  additionalClassNames?: string;
};

function ContentCell16({ additionalClassNames = "" }: ContentCell16Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="ITC Limited" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCellText10Props = {
  text: string;
};

function ContentCellText10({ text }: ContentCellText10Props) {
  return (
    <div className="relative shrink-0 w-[249px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:copy">
            <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
                <path d={svgPaths.p22419b00} fill="var(--fill-0, #131A25)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text12Props = {
  text: string;
  additionalClassNames?: string;
};

function Text12({ text, additionalClassNames = "" }: Text12Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText10 text={text} />
      <ContentCell16 />
      <BadgeChipText text="Active" additionalClassNames="bg-white rounded-[8px]" />
      <ContentCell17 />
      <ContentCell18 />
      <div className="flex-[1_0_0] min-h-px min-w-px relative">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:check">
              <div className="absolute inset-[28.81%_20.7%_28.6%_20.74%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.36924 6.8144">
                  <path d={svgPaths.p7298f00} fill="var(--fill-0, #131A25)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
              {"Filled on Time"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Helper7Props = {
  additionalClassNames?: string;
};

function Helper7({ additionalClassNames = "" }: Helper7Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText text="GST No" additionalClassNames="w-[249px]">
        <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
      </ContentCellText>
      <ContentCellText1 text="Entity Name" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
        <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
      </ContentCellText1>
      <ContentCellText1 text="Status" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
        <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
      </ContentCellText1>
      <ContentCellText1 text="State" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
        <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
      </ContentCellText1>
      <div className="bg-[#eceded] flex-[1_0_0] min-h-px min-w-px relative rounded-tr-[4px]" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <Text6 text="Date of Registration" additionalClassNames="px-[8px] py-[12px]" />
        </div>
      </div>
      <ContentCellText1 text="State" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
        <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
      </ContentCellText1>
    </div>
  );
}
type Helper6Props = {
  additionalClassNames?: string;
};

function Helper6({ additionalClassNames = "" }: Helper6Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText2 text="Cash credit" additionalClassNames="w-[308px]" />
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <Text3 text="16 Cr." additionalClassNames="px-[8px] py-[10px]" />
        </div>
      </div>
      <div className="relative shrink-0 w-[223px]" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <Text2 text="AAAA" additionalClassNames="px-[8px] py-[10px]" />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
        <div className="flex flex-row items-center size-full">
          <Text3 text="Upgraded" additionalClassNames="px-[8px] py-[10px]" />
        </div>
      </div>
      <BadgeChipText text="Stable" additionalClassNames="bg-white rounded-[8px]" />
    </div>
  );
}
type Helper5Props = {
  text: string;
  text1: string;
};

function Helper5({ text, text1 }: Helper5Props) {
  return (
    <p style={{ fontFeatureSettings: "'case', 'liga' 0" }} className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#131a25] text-[0px] text-[12px] tracking-[0.048px] w-[min-content] whitespace-pre-wrap">
      <span className="leading-[1.3]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </span>
      <span className="leading-[1.3] text-[#c21b11]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text1}
      </span>
    </p>
  );
}
type Text11Props = {
  text: string;
};

function Text11({ text }: Text11Props) {
  return (
    <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#131a25] text-[14px] tracking-[0.056px]">
      <p className="leading-[1.4] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type LeftContentTextProps = {
  text: string;
};

function LeftContentText({ text }: LeftContentTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <Text11 text={text} />
    </div>
  );
}
type ContentCell15Props = {
  additionalClassNames?: string;
};

function ContentCell15({ additionalClassNames = "" }: ContentCell15Props) {
  return (
    <div className="relative shrink-0 w-[223px]">
      <div className="flex flex-row items-center size-full">
        <Text2 text="15 May, 2024" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}

function Helper4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText7 text="Earnings Before Tax (EBT)" />
      <ContentCell13 />
      <BadgeChipText1 text="40.64 Cr" />
      <ContentCell14 />
    </div>
  );
}
type Text10Props = {
  text: string;
};

function Text10({ text }: Text10Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[8px] pt-[10px] px-[16px] relative shrink-0 w-[415px]">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type Text9Props = {
  text: string;
  additionalClassNames?: string;
};

function Text9({ text, additionalClassNames = "" }: Text9Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center py-[10px] relative w-full", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type ContentCellText9Props = {
  text: string;
};

function ContentCellText9({ text }: ContentCellText9Props) {
  return (
    <div className="relative shrink-0 w-[350px]">
      <div className="flex flex-row items-center size-full">
        <Text9 text={text} additionalClassNames="px-[20px]" />
      </div>
    </div>
  );
}
type Text8Props = {
  text: string;
  additionalClassNames?: string;
};

function Text8({ text, additionalClassNames = "" }: Text8Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText9 text={text} />
      <BadgeChipText text="0" additionalClassNames="rounded-[8px]" />
      <ContentCell5 />
      <ContentCell5 />
    </div>
  );
}
type ContentCellText8Props = {
  text: string;
};

function ContentCellText8({ text }: ContentCellText8Props) {
  return (
    <div className="relative shrink-0 w-[350px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[20px] py-[10px] relative w-full">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] w-[195px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type Text7Props = {
  text: string;
  additionalClassNames?: string;
};

function Text7({ text, additionalClassNames = "" }: Text7Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText8 text={text} />
      <BadgeChipText text="10.05 Cr" additionalClassNames="rounded-[8px]" />
      <ContentCell2 />
      <ContentCell2 />
    </div>
  );
}
type ContentCellText7Props = {
  text: string;
};

function ContentCellText7({ text }: ContentCellText7Props) {
  return (
    <div className="relative shrink-0 w-[350px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[20px] py-[10px] relative w-full">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] w-[195px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type ContentCellText6Props = {
  text: string;
};

function ContentCellText6({ text, children }: React.PropsWithChildren<ContentCellText6Props>) {
  return (
    <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative w-full">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
          <Wrapper1 additionalClassNames="right-[-0.33px]">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]" data-name="Right Separator">
                <div className="absolute inset-[-0.5px_-2.08%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                    {children}
                  </svg>
                </div>
              </div>
            </div>
          </Wrapper1>
          <div className="overflow-clip relative rounded-[5.333px] shrink-0 size-[20px]" data-name="Upload statement">
            <Helper1 />
          </div>
        </div>
      </div>
    </div>
  );
}
type ContentCell14Props = {
  additionalClassNames?: string;
};

function ContentCell14({ additionalClassNames = "" }: ContentCell14Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text6 text="8.33 Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell13Props = {
  additionalClassNames?: string;
};

function ContentCell13({ additionalClassNames = "" }: ContentCell13Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text6 text="183.99 Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell12Props = {
  additionalClassNames?: string;
};

function ContentCell12({ additionalClassNames = "" }: ContentCell12Props) {
  return (
    <div className="relative shrink-0 w-[330px]">
      <div className="flex flex-row items-center size-full">
        <Text6 text="Total Current Liablities" additionalClassNames="px-[44px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell11Props = {
  additionalClassNames?: string;
};

function ContentCell11({ additionalClassNames = "" }: ContentCell11Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="12Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell10Props = {
  additionalClassNames?: string;
};

function ContentCell10({ additionalClassNames = "" }: ContentCell10Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="193.99 Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell9Props = {
  additionalClassNames?: string;
};

function ContentCell9({ additionalClassNames = "" }: ContentCell9Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="3.87 Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell8Props = {
  additionalClassNames?: string;
};

function ContentCell8({ additionalClassNames = "" }: ContentCell8Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="102.91 Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type Frame1989ContentCellProps = {
  additionalClassNames?: string;
};

function Frame1989ContentCell({ additionalClassNames = "" }: Frame1989ContentCellProps) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative self-stretch", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[14px] size-full" />
      </div>
    </div>
  );
}
type BadgeChipText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BadgeChipText1({ text, additionalClassNames = "" }: BadgeChipText1Props) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type ContentCellText5Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellText5({ text, additionalClassNames = "" }: ContentCellText5Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text6 text={text} additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type Text6Props = {
  text: string;
  additionalClassNames?: string;
};

function Text6({ text, additionalClassNames = "" }: Text6Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function Helper3({ text, text1, text2, text3 }: Helper3Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <Text6 text={text} additionalClassNames="px-[20px] py-[10px]" />
        </div>
      </div>
      <ContentCellText5 text={text1} />
      <BadgeChipText1 text={text2} />
      <ContentCellText5 text={text3} />
    </div>
  );
}
type Frame2004TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Frame2004Text({ text, additionalClassNames = "" }: Frame2004TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center py-[10px] relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
    </div>
  );
}
type ContentCell7Props = {
  additionalClassNames?: string;
};

function ContentCell7({ additionalClassNames = "" }: ContentCell7Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="-" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell6Props = {
  additionalClassNames?: string;
};

function ContentCell6({ additionalClassNames = "" }: ContentCell6Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="-0.02" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type Frame2002TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Frame2002Text({ text, additionalClassNames = "" }: Frame2002TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center py-[10px] relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
    </div>
  );
}
type ContentCell5Props = {
  additionalClassNames?: string;
};

function ContentCell5({ additionalClassNames = "" }: ContentCell5Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="0" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell4Props = {
  additionalClassNames?: string;
};

function ContentCell4({ additionalClassNames = "" }: ContentCell4Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="0.37 Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell3Props = {
  additionalClassNames?: string;
};

function ContentCell3({ additionalClassNames = "" }: ContentCell3Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="8.77 Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCell2Props = {
  additionalClassNames?: string;
};

function ContentCell2({ additionalClassNames = "" }: ContentCell2Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="6.35 Cr" additionalClassNames="px-[8px] py-[10px]" />
      </div>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px py-[10px] relative">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
    </div>
  );
}
type ContentCellText4Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellText4({ text, additionalClassNames = "" }: ContentCellText4Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center py-[10px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
    </div>
  );
}

function Helper2() {
  return (
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
  );
}
type ContentCell1Props = {
  additionalClassNames?: string;
};

function ContentCell1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContentCell1Props>) {
  return (
    <div className={clsx("bg-[#f3f3f4] h-[40px] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[10px] relative size-full">
          <Wrapper1 additionalClassNames="right-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]" data-name="Right Separator">
                <div className="absolute inset-[-0.5px_-2.08%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                    {children}
                  </svg>
                </div>
              </div>
            </div>
          </Wrapper1>
        </div>
      </div>
    </div>
  );
}
type ContentCellText3Props = {
  text: string;
};

function ContentCellText3({ text, children }: React.PropsWithChildren<ContentCellText3Props>) {
  return (
    <div className="bg-[#f3f3f4] flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative w-full">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
          <Wrapper1 additionalClassNames="right-[0.33px]">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]" data-name="Right Separator">
                <div className="absolute inset-[-0.5px_-2.08%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                    {children}
                  </svg>
                </div>
              </div>
            </div>
          </Wrapper1>
          <div className="overflow-clip relative rounded-[5.333px] shrink-0 size-[20px]" data-name="Upload statement">
            <Helper1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <div className="absolute inset-[4.17%_13.33%_3.12%_12.5%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8348 18.5435">
        <g id="Group 28">
          <path d={svgPaths.p18cb9800} fill="var(--fill-0, #E23318)" id="contact_page" />
          <g id="PDF">
            <path d={svgPaths.p13351900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1f833500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2512a800} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <IconFiChevronDown className="overflow-clip relative size-[24px]" />
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type BadgeChipProps = {
  additionalClassNames?: string;
};

function BadgeChip({ additionalClassNames = "" }: BadgeChipProps) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <Text3 text="02345678" additionalClassNames="pb-[8px] pt-[10px] px-[12px]" />
      </div>
    </div>
  );
}
type ContentCellProps = {
  additionalClassNames?: string;
};

function ContentCell({ additionalClassNames = "" }: ContentCellProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text2 text="Independent Director" additionalClassNames="pb-[8px] pt-[10px] px-[8px]" />
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center relative w-full", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type BadgeChipTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BadgeChipText({ text, additionalClassNames = "" }: BadgeChipTextProps) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <Text3 text={text} additionalClassNames="px-[12px] py-[10px]" />
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type ContentCellText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellText2({ text, additionalClassNames = "" }: ContentCellText2Props) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <Text2 text={text} additionalClassNames="px-[16px] py-[10px]" />
      </div>
    </div>
  );
}
type ContentCellText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellText1({ text, children, additionalClassNames = "" }: React.PropsWithChildren<ContentCellText1Props>) {
  return (
    <div className={clsx("bg-[#eceded] relative", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
          <Wrapper1 additionalClassNames="right-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]" data-name="Right Separator">
                <div className="absolute inset-[-0.5px_-2.08%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                    {children}
                  </svg>
                </div>
              </div>
            </div>
          </Wrapper1>
        </div>
      </div>
    </div>
  );
}
type ContentCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellText({ text, children, additionalClassNames = "" }: React.PropsWithChildren<ContentCellTextProps>) {
  return (
    <div className={clsx("bg-[#eceded] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
          <Wrapper1 additionalClassNames="right-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]" data-name="Right Separator">
                <div className="absolute inset-[-0.5px_-2.08%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                    {children}
                  </svg>
                </div>
              </div>
            </div>
          </Wrapper1>
        </div>
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
    <div className={clsx("content-stretch flex relative shrink-0 w-full", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className={clsx("flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.056px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[1.4]">{text}</p>
    </div>
  );
}
type PageProps = {
  className?: string;
  page?: string;
  state?: "Default" | "Hover" | "Current" | "More";
  type?: "Circle" | "Default" | "—";
};

function Page({ className, page = "0", state = "Default", type = "Default" }: PageProps) {
  const isAndMore = type === "—" && state === "More";
  const isCircleAndDefault = type === "Circle" && state === "Default";
  const isCircleAndHover = type === "Circle" && state === "Hover";
  const isCurrentAndIsDefaultOrCircle = state === "Current" && ["Default", "Circle"].includes(type);
  const isDefaultAndDefault = type === "Default" && state === "Default";
  const isDefaultAndHover = type === "Default" && state === "Hover";
  return (
    <div className={className || `relative size-[32px] ${type === "Circle" && state === "Current" ? "bg-[#1766d6] rounded-[32px]" : type === "Default" && state === "Current" ? "bg-[#1766d6] rounded-[8px]" : isCircleAndHover ? "bg-[#e7e8e9] rounded-[32px]" : isDefaultAndHover ? "bg-[#e7e8e9] rounded-[8px]" : isCircleAndDefault ? "bg-[#fafafb] rounded-[32px]" : isAndMore ? "bg-white rounded-[8px]" : "bg-[#fafafb] rounded-[8px]"}`}>
      <div aria-hidden={isDefaultAndDefault || isAndMore || isCircleAndDefault || isDefaultAndHover || isCircleAndHover ? "true" : undefined} className={isCurrentAndIsDefaultOrCircle ? "flex flex-col items-center justify-center size-full" : isCircleAndHover ? "absolute border border-[#eceded] border-solid inset-0 pointer-events-none rounded-[32px]" : isDefaultAndHover ? "absolute border border-[#eceded] border-solid inset-0 pointer-events-none rounded-[8px]" : isCircleAndDefault ? "absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[32px]" : "absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]"}>
        {isCurrentAndIsDefaultOrCircle && (
          <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              {page}
            </p>
          </div>
        )}
      </div>
      {(isDefaultAndDefault || isAndMore || isCircleAndDefault || isDefaultAndHover || isCircleAndHover) && (
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
            {state === "Default" && ["Default", "Circle"].includes(type) && (
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#484e56] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                {page}
              </p>
            )}
            {state === "Hover" && ["Default", "Circle"].includes(type) && (
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                {page}
              </p>
            )}
            {isAndMore && (
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                ...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function IconFiChevronDown({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Icon=fi:chevron-down">
      <div className="absolute inset-[33.75%_21.25%]" data-name="Vector (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8 7.8">
          <path clipRule="evenodd" d={svgPaths.p2a263e00} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

export default function New() {
  return (
    <div className="bg-[#f3f3f4] relative size-full" data-name="New">
      <div className="absolute bottom-0 h-[5809px] left-0 pointer-events-none top-0">
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
              <Wrapper2 additionalClassNames="h-[44px]">
                <div className="-rotate-90 flex-none">
                  <div className="h-0 relative w-[44px]">
                    <div className="absolute inset-[-2px_-4.55%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 4">
                        <path d="M2 2H46" id="Line 10" stroke="var(--stroke-0, #FAFAFB)" strokeLinecap="round" strokeWidth="4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Wrapper2>
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
      <div className="absolute bg-white h-[5628px] left-[80px] overflow-clip top-[129px] w-[1360px]">
        <div className="absolute bg-white border-[#e7e8e9] border-l border-solid h-[5612px] left-[250px] overflow-clip top-0 w-[1110px]">
          <div className="absolute content-stretch flex flex-col items-start left-[-1px] top-[-1px] w-[1110px]">
            <div className="content-stretch flex gap-[12px] items-center pb-[12px] pt-[16px] px-[16px] relative shrink-0">
              <Text text="Display ₹ in" additionalClassNames="text-black" />
              <div className="h-[30px] relative shrink-0 w-[74px]" data-name="Dropdown/Simple">
                <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="dropdown">
                    <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
                        <Text text="Cr" additionalClassNames="text-[#0a0d13]" />
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
            <div className="bg-white relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
                  <Text1 text="Financial Markers" additionalClassNames="items-start" />
                  <div className="bg-white relative rounded-[8px] shrink-0 w-[1080px]">
                    <div className="content-start flex flex-wrap items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText text="Field" additionalClassNames="w-[502px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText>
                          <ContentCellText1 text="FY 2024" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <ContentCellText1 text="FY 2023" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText2 text="Revenue" additionalClassNames="w-[502px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative w-full">
                                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
                                  50,00,000
                                </p>
                                <div className="bg-[#effbe7] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Button">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                      <g id="Icon">
                                        <path d={svgPaths.p1bd8fbc0} id="Vector" stroke="var(--stroke-0, #1A7A1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                        <path d={svgPaths.pbe33728} id="Vector_2" stroke="var(--stroke-0, #1A7A1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                      </g>
                                    </svg>
                                  </div>
                                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#1a7a1e] text-[12px] text-center tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                                    15.5%
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <BadgeChipText text="44,00,000" additionalClassNames="bg-white rounded-[8px]" />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="EBITDA" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="12,00,000" additionalClassNames="pb-[8px] pt-[10px] px-[8px]" />
                            </div>
                          </div>
                          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
                            <div className="flex flex-row items-center size-full">
                              <Text3 text="11,00,000" additionalClassNames="pb-[8px] pt-[10px] px-[12px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="PAT" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="8,00,000" additionalClassNames="pb-[8px] pt-[10px] px-[8px]" />
                            </div>
                          </div>
                          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
                            <div className="flex flex-row items-center size-full">
                              <Text3 text="7,50,000" additionalClassNames="pb-[8px] pt-[10px] px-[12px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Net Worth" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="1,00,00,000" additionalClassNames="pb-[8px] pt-[10px] px-[8px]" />
                            </div>
                          </div>
                          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
                            <div className="flex flex-row items-center size-full">
                              <Text3 text="95,00,000" additionalClassNames="pb-[8px] pt-[10px] px-[12px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Total Debt" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="25,00,000" additionalClassNames="pb-[8px] pt-[10px] px-[8px]" />
                            </div>
                          </div>
                          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
                            <div className="flex flex-row items-center size-full">
                              <Text3 text="20,00,000" additionalClassNames="pb-[8px] pt-[10px] px-[12px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Net Margin %" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <ContentCell />
                          <BadgeChip additionalClassNames="bg-white" />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="ROE %" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <ContentCell />
                          <BadgeChip additionalClassNames="bg-white" />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#e23318] border-solid inset-0 pointer-events-none" />
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Debt to Equity" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <ContentCell />
                          <BadgeChip />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="CSR Prescribed Amount" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <ContentCell />
                          <BadgeChip additionalClassNames="bg-white" />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[502px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="CSR Spent Amount" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                            </div>
                          </div>
                          <ContentCell />
                          <BadgeChip additionalClassNames="bg-white" />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#bfc2c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e7e8e9] border-l border-solid inset-0 pointer-events-none" />
            </div>
            <div className="bg-white relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
                  <Text1 text="Financial Statements" additionalClassNames="items-start" />
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[24px] items-start px-[16px] py-[12px] relative w-full">
                          <Text4 text="Balance sheet" />
                          <Helper />
                        </div>
                      </div>
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCell1 additionalClassNames="w-[330px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                          </ContentCell1>
                          <ContentCellText3 text="FY 2024">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                          </ContentCellText3>
                          <ContentCellText3 text="FY 2023">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                          </ContentCellText3>
                          <ContentCellText3 text="FY 2022">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                          </ContentCellText3>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                          <div className="bg-white content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative shrink-0 w-[223px]" data-name="Content Cell">
                            <Helper2 />
                            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#041c66] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Equity & Liabilities `}</p>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#e7e8e9] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
                          <div className="content-stretch flex items-start px-[44px] relative w-full">
                            <ContentCellText4 text="Equities" additionalClassNames="w-[223px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Share Capital" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="10.05 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell2 />
                          <ContentCell2 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Retained Earnings" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="131.05 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell3 />
                          <ContentCell4 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Other Equity" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="0" additionalClassNames="rounded-[8px]" />
                          <ContentCell5 />
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Frame2002Text text="Total" additionalClassNames="px-[44px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Badge/Chip">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[10px] relative w-full">
                                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                                  141.1 Cr
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Frame2002Text text="15.12 Cr" additionalClassNames="px-[8px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Frame2002Text text="3.27 Cr" additionalClassNames="px-[8px]" />
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                          <div className="content-stretch flex items-start px-[44px] relative w-full">
                            <ContentCellText4 text="Liability" additionalClassNames="bg-white w-[223px]" />
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#e7e8e9] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
                          <div className="content-stretch flex items-start px-[44px] relative w-full">
                            <div className="relative self-stretch shrink-0" data-name="Content Cell">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex gap-[4px] h-full items-center px-[16px] py-[10px] relative">
                                  <ol className="block font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] w-[195px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
                                    <li className="ms-[21px] whitespace-pre-wrap">
                                      <span className="leading-[1.4]">{` Long Term Liabilities`}</span>
                                    </li>
                                  </ol>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Long-term Debt" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="0" />
                          <ContentCell5 />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="1.8" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Deferred Tax Liabilities (Net)" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="0.05" />
                          <ContentCell6 />
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Other Long Term Liabilities" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="0.05" />
                          <ContentCell6 />
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Long Term Provisions" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="-" />
                          <ContentCell7 />
                          <ContentCell7 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Frame2004Text text="Total Long-term Liabilities" additionalClassNames="pl-[60px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Badge/Chip">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[10px] relative w-full">
                                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                                  0.05
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Frame2004Text text="-0.02" additionalClassNames="px-[8px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Frame2004Text text="1.5" additionalClassNames="px-[8px]" />
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                          <div className="content-stretch flex items-start pl-[44px] relative w-full">
                            <div className="relative self-stretch shrink-0" data-name="Content Cell">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex gap-[4px] h-full items-center px-[16px] py-[10px] relative">
                                  <ol className="block font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] w-[195px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
                                    <li className="ms-[21px] whitespace-pre-wrap">
                                      <span className="leading-[1.4]">Current Liabilities</span>
                                    </li>
                                  </ol>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Short Term Borrowings" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="0" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="0.26" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="0.46" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Accounts Payable" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="0" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="16.23" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Other Current Liabilities" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="190.99 Cr" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="191.99" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="192.99" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Short Term Provisions" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="193.99 Cr" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="194.99" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="195.99" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Total Current Liablities" additionalClassNames="pl-[60px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="188.99" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="25.54" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="189.99" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <Helper3 text="Total Current Liablities" text1="185.99" text2="186.99" text3="187.99" />
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                          <div className="bg-white content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative shrink-0 w-[223px]" data-name="Content Cell">
                            <Helper2 />
                            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#041c66] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              Assest
                            </p>
                          </div>
                          <Frame1989ContentCell />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Badge/Chip">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[12px] size-full" />
                            </div>
                          </div>
                          <Frame1989ContentCell />
                          <Frame1989ContentCell additionalClassNames="bg-white" />
                          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center p-[8px] size-full" />
                            </div>
                          </div>
                          <div className="bg-white relative self-stretch shrink-0 w-[86px]" data-name="Content Cell">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[14px] size-full" />
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#e7e8e9] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
                          <div className="content-stretch flex items-start px-[44px] relative w-full">
                            <ContentCellText4 text="Fixed assets" additionalClassNames="w-[223px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Tangible Assets" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="102.91 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell8 />
                          <ContentCell9 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Intangible Assets" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="193.99 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell10 />
                          <ContentCell10 />
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div className="content-stretch flex items-start px-[44px] relative w-full">
                            <ContentCellText4 text="Total Fixed Assets" additionalClassNames="w-[285px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Capital Work-in-progress" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="193.99 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell10 />
                          <ContentCell10 />
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                          <div className="content-stretch flex items-start px-[44px] relative w-full">
                            <ContentCellText4 text="Other Long-term Assets" additionalClassNames="w-[223px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Long-term Investments" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="12Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell11 />
                          <ContentCell11 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Deferred Tax Assets (Net)" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="12Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell11 />
                          <ContentCell11 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Long Term Loans and Advances" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="12Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell11 />
                          <ContentCell11 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Other Long-term Assets" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="12Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell11 />
                          <ContentCell11 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCell12 />
                          <ContentCell11 />
                          <BadgeChipText text="12Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell11 />
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                          <div className="content-stretch flex items-start px-[44px] relative w-full">
                            <ContentCellText4 text="Current Assets" additionalClassNames="w-[223px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Current Investments" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="0" additionalClassNames="rounded-[8px]" />
                          <ContentCell5 />
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Inventories" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="0" additionalClassNames="rounded-[8px]" />
                          <ContentCell5 />
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Accounts Receivable" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="102.91 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell9 />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="3.79 Cr" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[44px] py-[10px] relative w-full">
                                <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>{`Cash & Cash Equivalents`}</p>
                              </div>
                            </div>
                          </div>
                          <BadgeChipText text="25.82 Cr" additionalClassNames="rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative w-full">
                                <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>{`25.82 Cr `}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="25.82 Cr" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Short Term Loans and Advances" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="102.91 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell8 />
                          <ContentCell11 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[330px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Other Current Assets" additionalClassNames="px-[44px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="12Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell11 />
                          <ContentCell11 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCell12 />
                          <ContentCell13 />
                          <BadgeChipText1 text="40.64 Cr" />
                          <ContentCell14 />
                        </div>
                        <Helper3 text="Total Current Liablities" text1="183.99 Cr" text2="40.64 Cr" text3="8.33 Cr" />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#bfc2c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[24px] items-start px-[16px] py-[12px] relative w-full">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case'" }}>{`Profit & Loss Statement`}</p>
                          </div>
                          <Helper />
                        </div>
                      </div>
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCell1 additionalClassNames="w-[350px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                          </ContentCell1>
                          <ContentCellText6 text="FY 2024">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                          </ContentCellText6>
                          <ContentCellText6 text="FY 2023">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                          </ContentCellText6>
                          <ContentCellText6 text="FY 2022">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                          </ContentCellText6>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                          <ContentCellText7 text="Revenue from Operations" />
                          <ContentCell13 />
                          <BadgeChipText1 text="40.64 Cr" />
                          <ContentCell14 />
                        </div>
                        <Text7 text="Cost of Materials Consumed" />
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText8 text="Cost of Goods Purchased" />
                          <BadgeChipText text="131.05 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell3 />
                          <ContentCell4 />
                        </div>
                        <Text8 text="Inventory Adjustments / Change in Inventory" />
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText8 text="Employee Benefit Expense" />
                          <BadgeChipText text="0" additionalClassNames="rounded-[8px]" />
                          <ContentCell5 />
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText8 text="Other Expenses" />
                          <BadgeChipText text="0" additionalClassNames="rounded-[8px]" />
                          <ContentCell5 />
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText7 text="Total Cost of Operations" />
                          <ContentCell13 />
                          <BadgeChipText1 text="40.64 Cr" />
                          <ContentCell14 />
                        </div>
                        <Text7 text="Operating Profit" />
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText8 text="Non-operating Income" />
                          <BadgeChipText text="131.05 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell3 />
                          <ContentCell4 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[350px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[20px] py-[10px] relative w-full">
                                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>{`Depreciation & Amortization Expense`}</p>
                              </div>
                            </div>
                          </div>
                          <BadgeChipText text="0" additionalClassNames="rounded-[8px]" />
                          <ContentCell5 />
                          <ContentCell5 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-[350px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[20px] py-[10px] relative w-full">
                                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`EBIT (Earnings Before Interest & Tax)`}</p>
                              </div>
                            </div>
                          </div>
                          <ContentCell13 />
                          <BadgeChipText1 text="40.64 Cr" />
                          <ContentCell14 />
                        </div>
                        <Text7 text="Finance Costs" />
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText9 text="Profit Before Tax (Excl. Exceptional Items)" />
                          <BadgeChipText text="131.05 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell3 />
                          <ContentCell4 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText8 text="Exceptional Items Before Tax" />
                          <BadgeChipText text="0" additionalClassNames="rounded-[8px]" />
                          <ContentCell5 />
                          <ContentCell5 />
                        </div>
                        <Helper4 />
                        <Text7 text="Income Tax Expense" />
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText9 text="Profit from Continuing Operations" />
                          <BadgeChipText text="131.05 Cr" additionalClassNames="rounded-[8px]" />
                          <ContentCell3 />
                          <ContentCell4 />
                        </div>
                        <Text8 text="Profit from Discontinuing Operations After Tax" />
                        <Helper4 />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#bfc2c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e7e8e9] border-l border-solid inset-0 pointer-events-none" />
            </div>
            <div className="bg-white relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Charges & Security`}</p>
                    <div className="bg-[#e8fcfb] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Button">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#003464] text-[0px] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        <span className="leading-[1.4]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Sum of Charges: `}</span>
                        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          50,00,00
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-white relative rounded-[8px] shrink-0 w-[1080px]">
                    <div className="content-start flex flex-wrap items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText text="Holder Name" additionalClassNames="w-[308px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText>
                          <ContentCellText1 text="Type" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <ContentCellText1 text="Filing Date" additionalClassNames="shrink-0 w-[223px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <ContentCellText1 text="Mod/Creation Date" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <ContentCellText1 text="Amount Secured" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText2 text="CATALYST TRUSTEESHIP LIMITED" additionalClassNames="w-[308px]" />
                          <BadgeChipText text="Modification" additionalClassNames="bg-white rounded-[8px]" />
                          <ContentCell15 />
                          <BadgeChipText text="15 May, 2024" additionalClassNames="bg-white rounded-[8px]" />
                          <BadgeChipText text="8,190.8 Cr" additionalClassNames="bg-white rounded-[8px]" />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText2 text="CATALYST TRUSTEESHIP LIMITED" additionalClassNames="w-[308px]" />
                          <BadgeChipText text="Creation" additionalClassNames="bg-white rounded-[8px]" />
                          <ContentCell15 />
                          <BadgeChipText text="15 May, 2024" additionalClassNames="bg-white rounded-[8px]" />
                          <BadgeChipText text="8,190.8 Cr" additionalClassNames="bg-white rounded-[8px]" />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#bfc2c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e7e8e9] border-l border-solid inset-0 pointer-events-none" />
            </div>
            <div className="bg-white relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
                  <Text1 text="Credit Rating" additionalClassNames="items-center" />
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[200px]" data-name="comapny">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#131a25] text-[0px] text-[12px] tracking-[0.048px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        <span className="leading-[1.3]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          Company Name
                        </span>
                        <span className="leading-[1.3] text-[#e23318]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          *
                        </span>
                      </p>
                      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input-Box">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
                            <LeftContentText text="Crisil" />
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="right-content">
                              <IconFiChevronDown className="overflow-clip relative shrink-0 size-[20px]" />
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[130px]" data-name="Input (Box)">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                        <Helper5 text="Date" text1="*" />
                        <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input-Box">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
                              <LeftContentText text="20/10/2024" />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white relative rounded-[8px] shrink-0 w-[1080px]">
                    <div className="content-start flex flex-wrap items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText text="Instrument Type" additionalClassNames="w-[308px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText>
                          <ContentCellText1 text="Amount" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <ContentCellText1 text="Rating" additionalClassNames="shrink-0 w-[223px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <ContentCellText1 text="Action" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <ContentCellText1 text="Outlook" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                        </div>
                        <Helper6 />
                        <Helper6 />
                        <Helper6 />
                        <Helper6 />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#bfc2c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e7e8e9] border-l border-solid inset-0 pointer-events-none" />
            </div>
            <div className="bg-white relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`GST & EPF  Compliance`}</p>
                  </div>
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div className="content-start flex flex-wrap gap-[0px_1062px] items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="content-stretch flex gap-[24px] items-start p-[16px] relative shrink-0 w-[1083px]">
                        <Text4 text="GSTN Details" />
                        <Helper />
                      </div>
                      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                        <Helper7 />
                        <Text12 text="03AAAC15950L2ZJ" />
                        <Helper8 />
                        <Helper9 />
                        <Text12 text="03AAAC15950L2ZJ" />
                        <div className="relative shrink-0 w-full" data-name="Pagination">
                          <Wrapper />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div className="content-start flex flex-wrap gap-[0px_1062px] items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="content-stretch flex gap-[24px] items-start p-[16px] relative shrink-0 w-[1083px]">
                        <Text4 text="EPF Details" />
                        <Helper />
                      </div>
                      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                        <Helper7 />
                        <Text12 text="03AAAC15950L2ZJ" />
                        <Helper8 />
                        <Helper9 />
                        <Text12 text="03AAAC15950L2ZJ" />
                        <div className="relative shrink-0 w-full" data-name="Pagination">
                          <Wrapper />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e7e8e9] border-l border-solid inset-0 pointer-events-none" />
            </div>
            <div className="bg-white relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
                  <Text1 text="Auditor Comments" additionalClassNames="items-center" />
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div className="content-start flex flex-wrap items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-[1080px]">
                        <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                          <div className="content-stretch flex items-start relative shrink-0 w-full">
                            <ContentCellText text="Field" additionalClassNames="w-[431px]">
                              <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                            </ContentCellText>
                            <ContentCellText1 text="Value" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                            </ContentCellText1>
                          </div>
                          <div className="content-stretch flex items-start relative shrink-0 w-full">
                            <ContentCellText2 text="Auditor Name" additionalClassNames="w-[431px]" />
                            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                              <div className="flex flex-row items-center size-full">
                                <Text9 text="Name" additionalClassNames="px-[8px]" />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex items-start relative shrink-0 w-full">
                            <ContentCellText2 text="Year" additionalClassNames="w-[431px]" />
                            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                              <div className="flex flex-row items-center size-full">
                                <Text9 text="2024" additionalClassNames="px-[8px]" />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex items-start relative shrink-0 w-full">
                            <div className="relative shrink-0 w-[431px]" data-name="Content Cell">
                              <div className="flex flex-row items-center size-full">
                                <Text2 text="Adverse Remarks?" additionalClassNames="pb-[8px] pt-[10px] px-[16px]" />
                              </div>
                            </div>
                            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                              <div className="flex flex-row items-center size-full">
                                <Text2 text="Yes" additionalClassNames="pb-[8px] pt-[10px] px-[8px]" />
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                            <div className="content-stretch flex items-start px-[32px] relative w-full">
                              <Text5 text="Comments From Auditor’s Report" />
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start px-[16px] relative w-full">
                              <Text10 text="Auditors Comment" />
                              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                                <div className="content-stretch flex gap-[4px] items-start pb-[8px] pt-[10px] px-[16px] relative w-full">
                                  <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
                                    <span className="leading-[1.4]">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here... `}</span>
                                    <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[#1766d6]" style={{ fontFeatureSettings: "'case'" }}>
                                      View more
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-[-1px] pointer-events-none" />
                            <div className="content-stretch flex items-start px-[32px] relative w-full">
                              <Text5 text="Comments From Auditor’s Report" />
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start px-[16px] relative w-full">
                              <Text10 text="Auditors Comment" />
                              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                                <div className="content-stretch flex gap-[4px] items-start pb-[8px] pt-[10px] px-[16px] relative w-full">
                                  <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
                                    <span className="leading-[1.4]">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here... `}</span>
                                    <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[#1766d6]" style={{ fontFeatureSettings: "'case'" }}>
                                      View more
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start px-[16px] relative w-full">
                              <Text10 text="Auditors Comment" />
                              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                                <div className="content-stretch flex gap-[4px] items-start pb-[8px] pt-[10px] px-[16px] relative w-full">
                                  <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
                                    <span className="leading-[1.4]">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here... `}</span>
                                    <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[#1766d6]" style={{ fontFeatureSettings: "'case'" }}>
                                      View more
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e7e8e9] border-l border-solid inset-0 pointer-events-none" />
            </div>
            <div className="bg-white relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
                  <Text1 text="Related Party Transaction" additionalClassNames="items-center" />
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[200px]" data-name="comapny">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#131a25] text-[0px] text-[12px] tracking-[0.048px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        <span className="leading-[1.3]">Category</span>
                        <span className="leading-[1.3] text-[#e23318]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          *
                        </span>
                      </p>
                      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input-Box">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
                            <LeftContentText text="Company" />
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="right-content">
                              <IconFiChevronDown className="overflow-clip relative shrink-0 size-[20px]" />
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[200px]" data-name="comapny">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#131a25] text-[0px] text-[12px] tracking-[0.048px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        <span className="leading-[1.3]">Relationship</span>
                        <span className="leading-[1.3] text-[#e23318]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          *
                        </span>
                      </p>
                      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input-Box">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
                            <LeftContentText text="Fellow Subsidiary" />
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="right-content">
                              <IconFiChevronDown className="overflow-clip relative shrink-0 size-[20px]" />
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[200px]" data-name="comapny">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#131a25] text-[0px] text-[12px] tracking-[0.048px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        <span className="leading-[1.3]">Transaction Type</span>
                        <span className="leading-[1.3] text-[#e23318]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          *
                        </span>
                      </p>
                      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input-Box">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
                            <LeftContentText text="Revenue" />
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="right-content">
                              <IconFiChevronDown className="overflow-clip relative shrink-0 size-[20px]" />
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div className="content-start flex flex-wrap items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText text="Name" additionalClassNames="w-[249px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText>
                          <ContentCellText1 text="Category" additionalClassNames="shrink-0 w-[117px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <div className="bg-[#eceded] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
                                <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>{`Relationship `}</p>
                                <Wrapper1 additionalClassNames="right-0">
                                  <div className="flex-none rotate-90">
                                    <div className="h-0 relative w-[24px]" data-name="Right Separator">
                                      <div className="absolute inset-[-0.5px_-2.08%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                                          <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </Wrapper1>
                              </div>
                            </div>
                          </div>
                          <ContentCellText1 text="DIN/PAN" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <ContentCellText1 text="Transaction Type" additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <div className="bg-[#eceded] flex-[1_0_0] min-h-px min-w-px relative rounded-tr-[4px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
                                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
                                  Amount
                                </p>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:sorting">
                                  <div className="absolute inset-[22.9%_33.31%_18.73%_33.32%]" data-name="Vector">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33993 9.33993">
                                      <path d={svgPaths.p1ac90180} fill="var(--fill-0, #131A25)" id="Vector" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText2 text="Fresenius Kabi India Private Limited" additionalClassNames="w-[249px]" />
                          <div className="relative shrink-0 w-[117px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Company" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Fellow Subsidiary" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="-" additionalClassNames="bg-white rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Revenue" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="61.29 Cr" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText2 text="Arvind Kumar Sharma" additionalClassNames="w-[249px]" />
                          <div className="relative shrink-0 w-[117px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Individual" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[10px] relative w-full">
                                <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>{`Key Management Personnel & Relatives`}</p>
                              </div>
                            </div>
                          </div>
                          <BadgeChipText text="-" additionalClassNames="bg-white rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Expense" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <ContentCell7 />
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText2 text="Fresenius Finance Ireland PLC" additionalClassNames="w-[249px]" />
                          <div className="relative shrink-0 w-[117px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Others" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Fellow Subsidiary" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText text="-" additionalClassNames="bg-white rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="Others" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="61.29 Cr" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Pagination">
                          <div className="content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
                            <Control1 additionalClassNames="shrink-0" />
                            <Page className="bg-[#1766d6] relative rounded-[8px] shrink-0 size-[32px]" page="1" state="Current" />
                            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="2" />
                            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="3" />
                            <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
                              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                              <div className="flex flex-col items-center justify-center size-full">
                                <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                                  <Text text="..." additionalClassNames="text-[#131a25] text-center" />
                                </div>
                              </div>
                            </div>
                            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="10" />
                            <div className="flex items-center justify-center relative shrink-0">
                              <div className="-scale-y-100 flex-none rotate-180">
                                <Control1 />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e7e8e9] border-l border-solid inset-0 pointer-events-none" />
            </div>
            <div className="bg-white relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`MSME Delayed Payment's`}</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[130px]" data-name="Input (Box)">
                    <Helper5 text="Date" text1="*" />
                    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input-Box">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
                          <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="left-content">
                            <div className="max-h-[24px] max-w-[24px] min-h-[18px] min-w-[18px] overflow-clip relative shrink-0 size-[18px]" data-name="Icon=u:calender">
                              <div className="absolute inset-[8.33%]" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                  <path d={svgPaths.p32d5e900} fill="var(--fill-0, #131A25)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                            <Text11 text="20/10/2024" />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div className="content-start flex flex-wrap items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText text="Supplier Name" additionalClassNames="w-[336px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText>
                          <ContentCellText1 text="Supplier PAN" additionalClassNames="shrink-0 w-[280px]">
                            <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                          </ContentCellText1>
                          <div className="bg-[#eceded] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
                                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
                                  Amount Overdue
                                </p>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=u:sorting">
                                  <div className="absolute inset-[22.9%_33.31%_18.73%_33.32%]" data-name="Vector">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33993 9.33993">
                                      <path d={svgPaths.p1ac90180} fill="var(--fill-0, #131A25)" id="Vector" />
                                    </svg>
                                  </div>
                                </div>
                                <Wrapper1 additionalClassNames="right-0">
                                  <div className="flex-none rotate-90">
                                    <div className="h-0 relative w-[24px]" data-name="Right Separator">
                                      <div className="absolute inset-[-0.5px_-2.08%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                                          <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </Wrapper1>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#eceded] flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
                                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] overflow-hidden relative shrink-0 text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
                                  Reference Period
                                </p>
                                <Wrapper1 additionalClassNames="right-0">
                                  <div className="flex-none rotate-90">
                                    <div className="h-0 relative w-[24px]" data-name="Right Separator">
                                      <div className="absolute inset-[-0.5px_-2.08%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                                          <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #E7E8E9)" strokeLinecap="round" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </Wrapper1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <ContentCellText2 text="Indian Ambika Traders" additionalClassNames="w-[336px]" />
                          <div className="relative shrink-0 w-[280px]" data-name="Content Cell">
                            <div className="flex flex-row items-center size-full">
                              <Text2 text="ABCDE1234F" additionalClassNames="px-[8px] py-[10px]" />
                            </div>
                          </div>
                          <BadgeChipText1 text="1,50,000" additionalClassNames="bg-white" />
                          <BadgeChipText text="H1 2024-25" additionalClassNames="bg-white rounded-[8px]" />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e7e8e9] border-l border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-[5628px] left-0 pointer-events-none top-0">
          <div className="bg-white content-stretch flex flex-col items-start pointer-events-auto sticky top-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250px]">
              <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[8px] py-[12px] relative w-full">
                    <div className="relative shrink-0" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
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
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#131a25] text-[14px]">Identity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="content-stretch flex items-center relative shrink-0" data-name="arrow">
                        <div className="h-[35px] relative shrink-0 w-px" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#1766d6] border-l border-solid inset-0 pointer-events-none" />
                        </div>
                        <div className="h-px relative shrink-0 w-[16px]" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#1766d6] border-solid border-t inset-0 pointer-events-none" />
                        </div>
                        <div className="absolute h-[20px] left-0 top-0 w-px" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#1766d6] border-l border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0 w-[233px]" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#104eb8] text-[14px] w-[170px] whitespace-pre-wrap">Company Overview</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[36px] pr-[4px] rounded-[8px] top-0 w-[230px]" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          Key Management Person..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0 w-[233px]" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px] w-[170px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Ownership structure `}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250px]">
              <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[12px] relative w-full">
                    <div className="relative shrink-0" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
                        <div className="relative shrink-0 size-[20px]" data-name="verified_user">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g clipPath="url(#clip0_39_46881)" id="verified_user">
                              <mask height="20" id="mask0_39_46881" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                                <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
                              </mask>
                              <g mask="url(#mask0_39_46881)">
                                <path d={svgPaths.p1bd4fc80} fill="var(--fill-0, #131A25)" id="verified_user_2" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_39_46881">
                                <rect fill="white" height="20" width="20" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#131a25] text-[14px]">Integrity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex gap-[20px] h-[35px] items-center left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0 w-[233px]" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px] w-[170px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          Legal History
                        </p>
                        <div className="relative shrink-0 size-[10px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                            <circle cx="5" cy="5" fill="var(--fill-0, #E23318)" id="Ellipse 14" r="5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0 w-[233px]" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px] w-[170px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`AML & Adverse Media`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250px]">
              <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[12px] relative w-full">
                    <div className="relative shrink-0" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
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
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#131a25] text-[14px]">Income</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="Container">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center justify-between left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0 w-[362px]" data-name="Button">
                        <div className="h-[21px] relative shrink-0 w-[150.641px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#484e56] text-[14px] top-[0.5px]">Financial Markers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="Container">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center justify-between left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0 w-[362px]" data-name="Button">
                        <div className="h-[21px] relative shrink-0 w-[186.266px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#484e56] text-[14px] top-[0.5px]">Financial Statements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0 w-[233px]" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px] w-[170px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Charges & Security`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex gap-[20px] h-[35px] items-center left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px] w-[170px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`EPF & GST Compliance`}</p>
                        <div className="relative shrink-0 size-[10px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                            <circle cx="5" cy="5" fill="var(--fill-0, #E23318)" id="Ellipse 14" r="5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0 w-[233px]" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px] w-[170px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          Auditor Reports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[36px] pr-[4px] rounded-[8px] top-0" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px] w-[170px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          Related Party Transaction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[12px] relative w-full">
                      <div className="h-[35px] relative shrink-0 w-[24px]" data-name="arrow">
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[35px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-l border-solid h-[20px] left-0 top-0 w-px" data-name="Container" />
                        <div className="absolute border-[#bfc2c4] border-solid border-t h-px left-0 top-[20px] w-[16px]" data-name="Container" />
                      </div>
                      <div className="absolute content-stretch flex h-[35px] items-center left-0 pl-[36px] pr-[10.5px] rounded-[8px] top-0" data-name="Button">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#484e56] text-[14px] w-[170px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          MSME Delayed Payments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[5760px] left-[80px] pointer-events-none top-[49px]">
        <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0 w-[1360px]">
          <div className="bg-white content-stretch flex items-center p-[6px] relative shrink-0 w-[1361px]" data-name="left-container">
            <div aria-hidden="true" className="absolute border-[#eceded] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="breadcrumb">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Home
                </p>
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
                  <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
                      <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Netscan
                </p>
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
                  <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
                      <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Case overview
                </p>
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
                  <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
                      <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Gaboli Online Services Private Limited `}</p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-between p-[8px] relative shrink-0 w-[1359px]">
            <div aria-hidden="true" className="absolute border-[#eceded] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[440px]">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:arrow-left">
                <div className="absolute bottom-[24.98%] left-[25.02%] right-1/4 top-[24.98%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.995 12.0099">
                    <path d={svgPaths.p23964f00} fill="var(--fill-0, #131A25)" id="Vector" />
                  </svg>
                </div>
              </div>
              <Wrapper2 additionalClassNames="h-[24px]">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[24px]">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                        <line id="Line 43" stroke="var(--stroke-0, #214698)" strokeOpacity="0.12" x2="24" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Wrapper2>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
                    Gaboli Online Services Private Limited
                  </p>
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-180">
                      <div className="relative size-[24px]" data-name="arrow_drop_up">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g clipPath="url(#clip0_39_46898)" id="arrow_drop_up">
                            <mask height="24" id="mask0_39_46898" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                              <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                            </mask>
                            <g mask="url(#mask0_39_46898)">
                              <path d={svgPaths.p2c475671} fill="var(--fill-0, #1C1B1F)" id="arrow_drop_up_2" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_39_46898">
                              <rect fill="white" height="24" width="24" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="bg-[#e7e8e9] content-stretch flex items-center justify-center p-[2px] relative rounded-[2px] shrink-0">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                      Holding Entity
                    </p>
                  </div>
                  <div className="bg-[#fef0e6] content-stretch flex items-center justify-center p-[2px] relative rounded-[2px] shrink-0">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#e23318] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                      High Risk
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1766d6] h-[36px] relative rounded-[8px] shrink-0" data-name="button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[24px] relative">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    Download Case Report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[5809px] left-[80px] pointer-events-none top-0">
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
      <div className="absolute bg-white content-stretch flex flex-col gap-[4px] items-start justify-center left-[676px] p-[8px] rounded-[8px] shadow-[0px_0px_8px_0px_rgba(19,26,37,0.04),0px_8px_12px_0px_rgba(19,26,37,0.12)] top-[584px] w-[282px]" data-name="Tooltip - Light">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="main-content">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Recognizing the risks tied to our company's content is essential for upholding.`}</p>
        </div>
        <div className="-translate-x-1/2 absolute h-[11px] left-[calc(50%-111.5px)] overflow-clip top-[-11px] w-[23px]" data-name="notch">
          <div className="absolute flex items-center justify-center left-[0.19px] size-[22.627px] top-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-45 flex-none">
              <div className="bg-white rounded-tr-[3px] size-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}