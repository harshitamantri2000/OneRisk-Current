import clsx from "clsx";
import svgPaths from "./svg-ebdel3r5hx";
type BadgeChipProps = {
  additionalClassNames?: string;
  text: string;
  additionalClassNames1?: string;
};

function BadgeChip({ children, additionalClassNames = "", text, additionalClassNames1 = "" }: React.PropsWithChildren<BadgeChipProps>) {
  return (
    <div className={clsx("h-[28px] relative rounded-[20px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center px-[12px] relative">
          <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className={clsx("flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.056px] whitespace-nowrap", additionalClassNames)}>
            <p className="leading-[1.4]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative self-stretch shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className={clsx("bg-[rgba(23,102,214,0.12)] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[24px] relative">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-[rgba(23,102,214,0.6)] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

function ContentCell3({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3 additionalClassNames="w-[160px]">
      <div className="bg-white h-[28px] relative rounded-[4px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#214698] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[24px] relative">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#214698] text-[12px] text-center tracking-[0.048px]" style={{ fontFeatureSettings: "'case'" }}>
              {children}
            </p>
          </div>
        </div>
      </div>
    </Wrapper3>
  );
}
type LeftContentTextProps = {
  text: string;
};

function LeftContentText({ text }: LeftContentTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#bfc2c4] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}
type Frame1597882045BadgeChipTextProps = {
  text: string;
};

function Frame1597882045BadgeChipText({ text }: Frame1597882045BadgeChipTextProps) {
  return (
    <div className="bg-[#eceded] relative rounded-[20px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[2px] relative">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] whitespace-nowrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
            <p className="leading-[1.3]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[3px] items-start leading-[1.4] relative shrink-0 text-[14px] tracking-[0.056px] w-full">
      <p className="relative shrink-0 text-[#7d8187] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
      <p className="relative shrink-0 text-[#131a25]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text1}
      </p>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText text="Ashiq Ahmed Nengroo" />
      <ContentCell />
      <ContentCell1 />
      <BadgeChipText text="Sanctions" />
      <ContentCell2 />
      <Wrapper3 additionalClassNames="w-[194px]">
        <BadgeChip additionalClassNames="bg-[rgba(19,26,37,0.1)]" text="Pending" additionalClassNames1="text-[#131a25]" />
      </Wrapper3>
      <ContentCell3>{children}</ContentCell3>
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
        <Text3 text="Name Match" additionalClassNames="px-[8px]" />
      </div>
    </div>
  );
}
type ContentCell1Props = {
  additionalClassNames?: string;
};

function ContentCell1({ additionalClassNames = "" }: ContentCell1Props) {
  return (
    <div className="relative shrink-0 w-[130px]">
      <div className="flex flex-row items-center size-full">
        <Text3 text="2001" additionalClassNames="px-[8px]" />
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
        <Text3 text="AGJPW5119K (PAN)" additionalClassNames="px-[8px]" />
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText text="abc" />
      <ContentCell />
      <ContentCell1 />
      <BadgeChipText text="Sanctions" />
      <ContentCell2 />
      <Wrapper3 additionalClassNames="w-[194px]">
        <BadgeChip additionalClassNames="bg-[#131a25]" text="Skipped" additionalClassNames1="text-white" />
      </Wrapper3>
      <ContentCell3>{children}</ContentCell3>
    </div>
  );
}
type BadgeChipTextProps = {
  text: string;
};

function BadgeChipText({ text }: BadgeChipTextProps) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[130px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type ContentCellText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellText1({ text, additionalClassNames = "" }: ContentCellText1Props) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <Text3 text={text} additionalClassNames="px-[8px]" />
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
    <div className={clsx("content-stretch flex gap-[4px] items-center py-[14px] relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type ContentCellTextProps = {
  text: string;
};

function ContentCellText({ text }: ContentCellTextProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <Text3 text={text} additionalClassNames="px-[16px]" />
      </div>
    </div>
  );
}
type WrapperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  additionalClassNames?: string;
};

function Wrapper({ text, text1, text2, text3, text4, children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellText text={text} />
      <ContentCellText1 text={text1} additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
      <ContentCellText1 text={text2} additionalClassNames="shrink-0 w-[130px]" />
      <BadgeChipText text={text3} />
      <ContentCellText1 text={text4} additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
      <Wrapper3 additionalClassNames="w-[194px]">
        <BadgeChip additionalClassNames="bg-[#1766d6]" text="True Positive" additionalClassNames1="text-white" />
      </Wrapper3>
      <ContentCell3>{children}</ContentCell3>
    </div>
  );
}
type Frame1943ContentCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function Frame1943ContentCellText({ text, additionalClassNames = "" }: Frame1943ContentCellTextProps) {
  return (
    <div className={clsx("shrink-0 sticky top-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
            {text}
          </p>
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
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
        {text}
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
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[24px] tracking-[0.096px] w-[92px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#484e56] text-[16px] tracking-[0.064px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
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
    <div className={clsx("content-stretch flex gap-[5px] items-center relative", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
    </div>
  );
}
type VectorStroke1Props = {
  additionalClassNames?: string;
};

function VectorStroke1({ additionalClassNames = "" }: VectorStroke1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.8 11.8">
        <path clipRule="evenodd" d={svgPaths.p9d7dc00} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
      </svg>
    </div>
  );
}
type PaginationControl1Props = {
  additionalClassNames?: string;
};

function PaginationControl1({ additionalClassNames = "" }: PaginationControl1Props) {
  return (
    <div className={clsx("bg-[#fafafb] relative rounded-[32px] size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevrons-left">
            <VectorStroke1 additionalClassNames="inset-[25.42%_50.42%_25.42%_21.25%]" />
            <VectorStroke1 additionalClassNames="inset-[25.42%_21.25%_25.42%_50.42%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginationHelper() {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevron-left">
          <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2 9.2">
              <path clipRule="evenodd" d={svgPaths.p3d6df80} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
            </svg>
          </div>
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
type PaginationControlProps = {
  additionalClassNames?: string;
};

function PaginationControl({ additionalClassNames = "" }: PaginationControlProps) {
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
type PaginationProps = {
  className?: string;
  showSkipButton?: boolean;
  type?: "1" | "2" | "3" | "4";
};

function Pagination({ className, showSkipButton = true, type = "1" }: PaginationProps) {
  const is1 = type === "1";
  const is1Or3 = ["1", "3"].includes(type);
  const is2 = type === "2";
  const is3 = type === "3";
  const is4 = type === "4";
  return (
    <div className={className || "relative"}>
      <div className={`flex ${is4 ? "flex-row items-center size-full" : "content-stretch gap-[4px] items-start relative"}`}>
        {is1 && showSkipButton && <PaginationControl additionalClassNames="shrink-0" />}
        {is1Or3 && (
          <>
            <div className={`relative shrink-0 ${is3 ? "h-[32px] rounded-[4px]" : "bg-[#fafafb] rounded-[8px] size-[32px]"}`} data-name="Control">
              <div aria-hidden={is1 ? "true" : undefined} className={is3 ? "flex flex-col items-center justify-center size-full" : "absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]"}>
                {is3 && (
                  <div className="content-stretch flex flex-col h-full items-center justify-center px-[8px] py-[10px] relative">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#bfc2c4] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                      Prev
                    </p>
                  </div>
                )}
              </div>
              {is1 && <PaginationHelper />}
            </div>
            <Page className="bg-[#1766d6] relative rounded-[8px] shrink-0 size-[32px]" page="1" state="Current" />
            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="2" />
            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="3" />
            <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                  <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.056px] whitespace-nowrap text-[#131a25] text-center">
                    <p className="leading-[1.4]">{"..."}</p>
                  </div>
                </div>
              </div>
            </div>
            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="10" />
          </>
        )}
        {["1", "4"].includes(type) && (
          <div className={`flex items-center relative ${is4 ? "content-stretch gap-[10px]" : "justify-center shrink-0"}`}>
            {is1 && (
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-[#fafafb] relative rounded-[8px] size-[32px]" data-name="Control">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <PaginationHelper />
                </div>
              </div>
            )}
            {is4 && (
              <>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Page
                </p>
                <div className="bg-[#fafafb] relative rounded-[6px] shrink-0" data-name="Page Select">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative">
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px] w-[16px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        <p className="leading-[1.4] whitespace-pre-wrap">1</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevron-down-small">
                        <div className="absolute inset-[42.08%_29.58%_33.75%_29.58%]" data-name="Vector (Stroke)">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 5.8">
                            <path clipRule="evenodd" d={svgPaths.p22a6800} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  of 10
                </p>
              </>
            )}
          </div>
        )}
        {is1 && (
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">{showSkipButton && <PaginationControl />}</div>
          </div>
        )}
        {is2 && showSkipButton && <PaginationControl1 additionalClassNames="shrink-0" />}
        {is2 && (
          <>
            <PaginationControl1 additionalClassNames="shrink-0" />
            <Page className="bg-[#1766d6] relative rounded-[32px] shrink-0 size-[32px]" page="1" state="Current" type="Circle" />
            <Page className="bg-[#fafafb] relative rounded-[32px] shrink-0 size-[32px]" page="2" type="Circle" />
            <Page className="bg-[#fafafb] relative rounded-[32px] shrink-0 size-[32px]" page="3" type="Circle" />
            <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Page">
              <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    ...
                  </p>
                </div>
              </div>
            </div>
            <Page className="bg-[#fafafb] relative rounded-[32px] shrink-0 size-[32px]" page="10" type="Circle" />
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <PaginationControl1 />
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">{showSkipButton && <PaginationControl1 />}</div>
            </div>
          </>
        )}
        {is3 && (
          <div className="h-[32px] relative rounded-[4px] shrink-0" data-name="Control">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col h-full items-center justify-center p-[10px] relative">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Next
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DefaultResult() {
  return (
    <div className="bg-[#f3f3f4] relative size-full" data-name="Default Result">
      <div className="absolute bg-white content-stretch flex items-start left-[80px] p-[8px] top-[73px] w-[1360px]" data-name="left-container">
        <div aria-hidden="true" className="absolute border-[#eceded] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="breadcrumb">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              AML Search
            </p>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon=fi:chevron-right">
              <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
                  <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              Details for Case
            </p>
          </div>
        </div>
      </div>
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
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[128px] top-[403px] w-[1265px]">
        <div className="bg-white shrink-0 sticky top-0 w-full">
          <div className="content-stretch flex items-start p-[16px] relative w-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              Screening Matches
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] h-[438px] items-start py-[8px] relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center px-[16px] relative w-full">
                <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metrics-cell">
                  <div aria-hidden="true" className="absolute border border-[#1766d6] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[8px] relative w-full">
                    <Text1 text="All Hits" additionalClassNames="w-full" />
                    <Text2 text="100" />
                  </div>
                </div>
                <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metrics-cell">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[8px] relative w-full">
                    <Text1 text="Sanctions" additionalClassNames="w-full" />
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#e23318] text-[24px] tracking-[0.096px] w-[92px] whitespace-pre-wrap">20</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metrics-cell">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[8px] relative w-full">
                    <Text1 text="PEP" additionalClassNames="w-full" />
                    <Text2 text="0" />
                  </div>
                </div>
                <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metrics-cell">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[8px] relative w-full">
                    <Text1 text="Warning" additionalClassNames="w-full" />
                    <Text2 text="0" />
                  </div>
                </div>
                <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metrics-cell">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[8px] relative w-full">
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <Text1 text="Adverse media" additionalClassNames="w-[186px]" />
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#e23318] text-[24px] tracking-[0.096px] w-[45px] whitespace-pre-wrap">5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[12px] shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
                <div className="bg-white content-stretch flex flex-col gap-[8px] h-[676px] items-start relative rounded-[12px] shrink-0 w-[1233px]">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="bg-[#f3f3f4] content-stretch flex items-start rounded-tl-[12px] rounded-tr-[12px] shrink-0 sticky top-0 w-[1232px]">
                    <div className="flex-[1_0_0] min-h-px min-w-px rounded-tl-[12px] sticky top-0" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Entity name" additionalClassNames="px-[16px]" />
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-h-px min-w-px sticky top-0" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Id details" additionalClassNames="px-[8px]" />
                      </div>
                    </div>
                    <div className="shrink-0 sticky top-0 w-[130px]" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Birth year" additionalClassNames="px-[8px]" />
                      </div>
                    </div>
                    <div className="shrink-0 sticky top-0 w-[130px]" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Category" additionalClassNames="px-[8px]" />
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-h-px min-w-px sticky top-0" data-name="Content Cell">
                      <div className="flex flex-row items-center size-full">
                        <Frame1943Text text="Match Type" additionalClassNames="px-[8px]" />
                      </div>
                    </div>
                    <Frame1943ContentCellText text="Status" additionalClassNames="rounded-tr-[4px] w-[194px]" />
                    <Frame1943ContentCellText text="&nbsp;" additionalClassNames="rounded-tl-[20px] rounded-tr-[20px] w-[160px]" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[8px] w-full">
                    <Wrapper text="Ashiq Ahmed Nengroo" text1="AGJPW5119K (PAN)" text2="2001" text3="Sanctions" text4="Name Match">
                      View Details
                    </Wrapper>
                    <Wrapper1>View Details</Wrapper1>
                    <Wrapper text="Ashiq Ahmed Nengroo" text1="AGJPW5119K (PAN)" text2="2001" text3="Sanctions" text4="Name Match">
                      View Details
                    </Wrapper>
                    <Wrapper2>View Details</Wrapper2>
                    <Wrapper1>View Details</Wrapper1>
                    <Wrapper text="Ashiq Ahmed Nengroo" text1="AGJPW5119K (PAN)" text2="2001" text3="Sanctions" text4="Name Match">
                      View Details
                    </Wrapper>
                    <Wrapper2>View Details</Wrapper2>
                    <Wrapper2>View Details</Wrapper2>
                    <Wrapper2>View Details</Wrapper2>
                    <Wrapper1>View Details</Wrapper1>
                    <Wrapper text="Ashiq Ahmed Nengroo" text1="AGJPW5119K (PAN)" text2="2001" text3="Sanctions" text4="Name Match">
                      View Details
                    </Wrapper>
                    <Wrapper1>View Details</Wrapper1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[16px] py-[8px] relative w-full">
                <Pagination className="relative shrink-0" type="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-between left-[80px] px-[16px] py-[8px] top-[105px] w-[1360px]">
        <div className="content-stretch flex items-center relative shrink-0 w-[1100px]">
          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{` Details for Case ID - RE4NL2I3`}</p>
          </div>
        </div>
        <Button additionalClassNames="h-[36px] rounded-[8px]">Generate Report</Button>
      </div>
      <div className="absolute content-stretch flex gap-[16px] items-center left-[128px] top-[177px]">
        <div className="bg-white content-stretch flex flex-col h-[206px] items-start overflow-clip px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[481px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <Text text="Case Input" additionalClassNames="shrink-0" />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[3px] items-start leading-[1.4] relative shrink-0 text-[14px] tracking-[0.056px] w-full">
                <p className="relative shrink-0 text-[#7d8187] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  NAME
                </p>
                <p className="relative shrink-0 text-[#131a25]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`Dhishti Desai  (Smart Fuzzy)`}</p>
              </div>
              <Helper text="ENTITY TYPE" text1="Individual" />
              <Helper text="BIRTH YEAR" text1="1985 ( 1 year threshold)" />
              <div className="content-stretch flex gap-[3px] items-start relative shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#7d8187] text-[14px] tracking-[0.056px] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  CATEGORIES
                </p>
                <Frame1597882045BadgeChipText text="Small" />
                <Frame1597882045BadgeChipText text="Small" />
                <Frame1597882045BadgeChipText text="Small" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[767px]">
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <Text text="Case Decision" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
            <Button additionalClassNames="h-[28px] rounded-[4px]">{`Save `}</Button>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="h-[69px] relative shrink-0 w-[251px]" data-name="Input (Box)">
                <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-w-full relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
                    Decision
                  </p>
                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input-Box">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[4px] relative size-full">
                        <LeftContentText text="Pending" />
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="right-content">
                          <IconFiChevronDown className="overflow-clip relative shrink-0 size-[20px]" />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div className="h-[69px] relative shrink-0 w-[291px]" data-name="Input (Box)">
                <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
                    <span className="leading-[1.4]">Risk</span>
                    <span className="leading-[1.4] text-[#e23318]">*</span>
                  </p>
                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input-Box">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[4px] relative size-full">
                        <LeftContentText text="No Risk Selected" />
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="right-content">
                          <IconFiChevronDown className="overflow-clip relative shrink-0 size-[20px]" />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              <div className="h-[69px] relative shrink-0 w-[249px]" data-name="Input (Box)">
                <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-w-full relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
                    Assign
                  </p>
                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input-Box">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[4px] relative size-full">
                        <LeftContentText text="Select" />
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="right-content">
                          <IconFiChevronDown className="overflow-clip relative shrink-0 size-[20px]" />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div className="h-[69px] relative shrink-0 w-[289px]" data-name="Input(rich-text-editor)">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-w-full relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case'" }}>
                    Comments
                  </p>
                  <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input-Box">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="text-area">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center pb-[12px] pt-[8px] px-[12px] relative size-full">
                            <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px relative text-[#bfc2c4] text-[14px] tracking-[0.056px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              Type your comment here ...
                            </p>
                            <div className="absolute bottom-0 right-0 size-[16px]" data-name="handle">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g id="handle">
                                  <path clipRule="evenodd" d={svgPaths.p3938d080} fill="var(--fill-0, #BFC2C4)" fillRule="evenodd" id="Vector (Stroke)" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(19,26,37,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
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