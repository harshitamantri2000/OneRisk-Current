import clsx from "clsx";
import svgPaths from "./svg-2thx3cqjpj";

function MetricsCellBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fafafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[8px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage20({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#484e56] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {children}
      </p>
    </div>
  );
}

function MetricsCellBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[8px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage19({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white shrink-0 sticky top-0 w-full">
      <div className="content-stretch flex items-start p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage18({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage17Props = {
  additionalClassNames?: string;
};

function BackgroundImage17({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage17Props>) {
  return (
    <div className={clsx("overflow-clip relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-[21.25%_33.75%]" data-name="Vector (Stroke)">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage16Props = {
  additionalClassNames?: string;
};

function BackgroundImage16({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage16Props>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#484e56] text-[16px] tracking-[0.064px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {children}
      </p>
    </div>
  );
}

function BackgroundImage15({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[24px] relative">{children}</div>
    </div>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="overflow-clip rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BackgroundImage11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage9({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage12>
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">{children}</div>
    </BackgroundImage12>
  );
}

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage12>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[12px] relative w-full">{children}</div>
    </BackgroundImage12>
  );
}

function PageBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BackgroundImage13>{children}</BackgroundImage13>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage13>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon=fi:chevrons-left">
        {children}
      </div>
    </BackgroundImage13>
  );
}
type BadgeChipBackgroundImageProps = {
  additionalClassNames?: string;
};

function BadgeChipBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BadgeChipBackgroundImageProps>) {
  return (
    <div className={clsx("h-[28px] relative rounded-[20px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center px-[12px] relative">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImage6Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImage6({ children, text, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return (
    <BackgroundImage14 additionalClassNames={additionalClassNames}>
      <BadgeChipBackgroundImage additionalClassNames={clsx("bg-[#e23318]", additionalClassNames)}>
        <BackgroundImageAndText2 text={text} additionalClassNames={clsx("flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.056px] whitespace-nowrap", additionalClassNames)} />
      </BadgeChipBackgroundImage>
    </BackgroundImage14>
  );
}
type BackgroundImageAndText7Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText7({ text, children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageAndText7Props>) {
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
                {children}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage14>
      <div className="bg-white h-[28px] relative rounded-[4px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#214698] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <BackgroundImage15>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#214698] text-[12px] text-center tracking-[0.048px]" style={{ fontFeatureSettings: "'case'" }}>
            {children}
          </p>
        </BackgroundImage15>
      </div>
    </BackgroundImage14>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <BackgroundImage5>{children}</BackgroundImage5>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ additionalClassNames = "" }: BackgroundImage3Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellBackgroundImageAndText3 text="Ashiq Ahmed Nengroo" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <BackgroundImageAndText5 text="20/11/2022" additionalClassNames="px-[8px]" />
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
        <div className="flex flex-row items-center size-full">
          <BackgroundImageAndText5 text="Red Light Jump" additionalClassNames="px-[8px]" />
        </div>
      </div>
      <BadgeChipBackgroundImageAndText text="₹1,000" additionalClassNames="bg-white" />
      <ContentCellBackgroundImage3 />
      <ContentCellBackgroundImageAndText5 text="View Details" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
    </div>
  );
}
type ContentCellBackgroundImageAndText5Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellBackgroundImageAndText5({ text, additionalClassNames = "" }: ContentCellBackgroundImageAndText5Props) {
  return (
    <div className={clsx("relative self-stretch", additionalClassNames)}>
      <BackgroundImage5>{text}</BackgroundImage5>
    </div>
  );
}
type ContentCellBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContentCellBackgroundImage3({ additionalClassNames = "" }: ContentCellBackgroundImage3Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <BackgroundImage14>
        <BadgeChipBackgroundImage additionalClassNames="bg-[rgba(19,26,37,0.1)]">
          <BackgroundImageAndText text="Disposed" additionalClassNames="text-[#131a25]" />
        </BadgeChipBackgroundImage>
      </BackgroundImage14>
    </div>
  );
}
type ContentCellBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContentCellBackgroundImage2({ additionalClassNames = "" }: ContentCellBackgroundImage2Props) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <BackgroundImageAndText5 text="2001" additionalClassNames="px-[8px]" />
      </div>
    </div>
  );
}
type ContentCellBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContentCellBackgroundImage1({ additionalClassNames = "" }: ContentCellBackgroundImage1Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <BackgroundImageAndText5 text="AGJPW5119K (PAN)" additionalClassNames="px-[8px]" />
      </div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellBackgroundImageAndText3 text="Ashiq Ahmed Nengroo" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
      <ContentCellBackgroundImage1 />
      <ContentCellBackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
      <BadgeChipBackgroundImageAndText text="Theft/Seized" />
      <ContentCellBackgroundImage3 />
      <BackgroundImage4>{children}</BackgroundImage4>
    </div>
  );
}
type ContentCellBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContentCellBackgroundImage({ additionalClassNames = "" }: ContentCellBackgroundImageProps) {
  return (
    <div className={clsx("relative self-stretch", additionalClassNames)}>
      <BackgroundImage6 text="Pedning" additionalClassNames="text-white" />
    </div>
  );
}
type BackgroundImageAndText6Props = {
  text: string;
};

function BackgroundImageAndText6({ text }: BackgroundImageAndText6Props) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
type BadgeChipBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BadgeChipBackgroundImageAndText({ text, additionalClassNames = "" }: BadgeChipBackgroundImageAndTextProps) {
  return (
    <div className={clsx("flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]", additionalClassNames)}>
      <BackgroundImageAndText6 text={text} />
    </div>
  );
}
type ContentCellBackgroundImageAndText4Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellBackgroundImageAndText4({ text, additionalClassNames = "" }: ContentCellBackgroundImageAndText4Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <BackgroundImageAndText5 text={text} additionalClassNames="px-[8px]" />
      </div>
    </div>
  );
}
type BackgroundImageAndText5Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText5({ text, additionalClassNames = "" }: BackgroundImageAndText5Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center py-[14px] relative w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px overflow-hidden relative text-[#131a25] text-[14px] text-ellipsis tracking-[0.056px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
        {text}
      </p>
    </div>
  );
}
type ContentCellBackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellBackgroundImageAndText3({ text, additionalClassNames = "" }: ContentCellBackgroundImageAndText3Props) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <BackgroundImageAndText5 text={text} additionalClassNames="px-[16px]" />
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  additionalClassNames?: string;
};

function BackgroundImage1({ text, text1, text2, text3, children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentCellBackgroundImageAndText3 text={text} additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
      <ContentCellBackgroundImageAndText4 text={text1} />
      <ContentCellBackgroundImageAndText4 text={text2} />
      <BadgeChipBackgroundImageAndText text={text3} additionalClassNames="bg-white" />
      <ContentCellBackgroundImage additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
      <BackgroundImage4>{children}</BackgroundImage4>
    </div>
  );
}
type ContentCellBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ContentCellBackgroundImageAndText2({ text, additionalClassNames = "" }: ContentCellBackgroundImageAndText2Props) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px sticky top-0", additionalClassNames)}>
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
type ContentCellBackgroundImageAndText1Props = {
  text: string;
};

function ContentCellBackgroundImageAndText1({ text, children }: React.PropsWithChildren<ContentCellBackgroundImageAndText1Props>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px sticky top-0">
      <div className="flex flex-row items-center size-full">
        <BackgroundImageAndText7 text={text} additionalClassNames="px-[8px]">
          {children}
        </BackgroundImageAndText7>
      </div>
    </div>
  );
}
type ContentCellBackgroundImageAndTextProps = {
  text: string;
};

function ContentCellBackgroundImageAndText({ text, children }: React.PropsWithChildren<ContentCellBackgroundImageAndTextProps>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px rounded-tl-[12px] sticky top-0">
      <div className="flex flex-row items-center size-full">
        <BackgroundImageAndText7 text={text} additionalClassNames="px-[16px]">
          {children}
        </BackgroundImageAndText7>
      </div>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[24px] tracking-[0.096px] w-[92px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return <BackgroundImage16 additionalClassNames="w-full">{text}</BackgroundImage16>;
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage({ text, text1, additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("content-stretch flex items-start relative shrink-0", additionalClassNames)}>
      <p className="leading-[1.3] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] w-[196px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
        {text}
      </p>
      <p className="leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
        {text1}
      </p>
    </div>
  );
}

function BreadcrumbIconFiChevronRightBackgroundImage() {
  return (
    <BackgroundImage17 additionalClassNames="size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55 8.05">
        <path clipRule="evenodd" d={svgPaths.p1cba5000} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
      </svg>
    </BackgroundImage17>
  );
}
type VectorStrokeBackgroundImage1Props = {
  additionalClassNames?: string;
};

function VectorStrokeBackgroundImage1({ additionalClassNames = "" }: VectorStrokeBackgroundImage1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.8 11.8">
        <path clipRule="evenodd" d={svgPaths.p9d7dc00} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
      </svg>
    </div>
  );
}
type PaginationControlBackgroundImage1Props = {
  additionalClassNames?: string;
};

function PaginationControlBackgroundImage1({ additionalClassNames = "" }: PaginationControlBackgroundImage1Props) {
  return (
    <div className={clsx("bg-[#fafafb] relative rounded-[32px] size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <BackgroundImage7>
        <VectorStrokeBackgroundImage1 additionalClassNames="inset-[25.42%_50.42%_25.42%_21.25%]" />
        <VectorStrokeBackgroundImage1 additionalClassNames="inset-[25.42%_21.25%_25.42%_50.42%]" />
      </BackgroundImage7>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return (
    <div style={{ fontFeatureSettings: "'case', 'liga' 0" }} className={additionalClassNames}>
      <p className="leading-[1.4]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return <BackgroundImageAndText2 text={text} additionalClassNames={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.064px] whitespace-nowrap", additionalClassNames)} />;
}

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return <BackgroundImageAndText2 text={text} additionalClassNames={clsx("flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.056px] whitespace-nowrap", additionalClassNames)} />;
}

function PaginationBackgroundImage() {
  return (
    <BackgroundImage13>
      <BackgroundImage17 additionalClassNames="size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2 9.2">
          <path clipRule="evenodd" d={svgPaths.p3d6df80} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </BackgroundImage17>
    </BackgroundImage13>
  );
}
type VectorStrokeBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorStrokeBackgroundImage({ additionalClassNames = "" }: VectorStrokeBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53333 7.86667">
        <path clipRule="evenodd" d={svgPaths.p275dd880} fill="var(--fill-0, #131A25)" fillRule="evenodd" id="Vector (Stroke)" />
      </svg>
    </div>
  );
}
type PaginationControlBackgroundImageProps = {
  additionalClassNames?: string;
};

function PaginationControlBackgroundImage({ additionalClassNames = "" }: PaginationControlBackgroundImageProps) {
  return (
    <div className={clsx("bg-[#fafafb] relative rounded-[8px] size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BackgroundImage7>
        <VectorStrokeBackgroundImage additionalClassNames="inset-[25.42%_50.42%_25.42%_21.25%]" />
        <VectorStrokeBackgroundImage additionalClassNames="inset-[25.42%_21.25%_25.42%_50.42%]" />
      </BackgroundImage7>
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
        <BackgroundImage13>
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
        </BackgroundImage13>
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
        {is1 && showSkipButton && <PaginationControlBackgroundImage additionalClassNames="shrink-0" />}
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
              {is1 && <PaginationBackgroundImage />}
            </div>
            <Page className="bg-[#1766d6] relative rounded-[8px] shrink-0 size-[32px]" page="1" state="Current" />
            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="2" />
            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="3" />
            <PageBackgroundImage>
              <BackgroundImageAndText text="..." additionalClassNames="text-[#131a25] text-center" />
            </PageBackgroundImage>
            <Page className="bg-[#fafafb] relative rounded-[8px] shrink-0 size-[32px]" page="10" />
          </>
        )}
        {["1", "4"].includes(type) && (
          <div className={`flex items-center relative ${is4 ? "content-stretch gap-[10px]" : "justify-center shrink-0"}`}>
            {is1 && (
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-[#fafafb] relative rounded-[8px] size-[32px]" data-name="Control">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <PaginationBackgroundImage />
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
            <div className="-scale-y-100 flex-none rotate-180">{showSkipButton && <PaginationControlBackgroundImage />}</div>
          </div>
        )}
        {is2 && showSkipButton && <PaginationControlBackgroundImage1 additionalClassNames="shrink-0" />}
        {is2 && (
          <>
            <PaginationControlBackgroundImage1 additionalClassNames="shrink-0" />
            <Page className="bg-[#1766d6] relative rounded-[32px] shrink-0 size-[32px]" page="1" state="Current" type="Circle" />
            <Page className="bg-[#fafafb] relative rounded-[32px] shrink-0 size-[32px]" page="2" type="Circle" />
            <Page className="bg-[#fafafb] relative rounded-[32px] shrink-0 size-[32px]" page="3" type="Circle" />
            <PageBackgroundImage>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                ...
              </p>
            </PageBackgroundImage>
            <Page className="bg-[#fafafb] relative rounded-[32px] shrink-0 size-[32px]" page="10" type="Circle" />
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <PaginationControlBackgroundImage1 />
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">{showSkipButton && <PaginationControlBackgroundImage1 />}</div>
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

export default function InsightsState() {
  return (
    <div className="bg-[#f3f3f4] relative size-full" data-name="Insights state">
      <div className="absolute bg-white content-stretch flex items-start left-[80px] p-[8px] top-[73px] w-[1360px]" data-name="left-container">
        <div aria-hidden="true" className="absolute border-[#eceded] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="breadcrumb">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              Search Terminal
            </p>
            <BreadcrumbIconFiChevronRightBackgroundImage />
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#7d8187] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              VehiClear Search
            </p>
            <BreadcrumbIconFiChevronRightBackgroundImage />
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#131a25] text-[12px] tracking-[0.048px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              Details for Vehicle
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[1827px] left-0 pointer-events-none top-0">
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
      <div className="absolute bg-white content-stretch flex items-center justify-between left-[80px] px-[16px] py-[8px] top-[105px] w-[1360px]">
        <div className="content-stretch flex items-center relative shrink-0 w-[1100px]">
          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{` Details for Vehicle - RE4NL2I3`}</p>
          </div>
        </div>
        <div className="bg-[rgba(23,102,214,0.12)] h-[36px] relative rounded-[8px] shrink-0" data-name="button">
          <BackgroundImage15>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-[rgba(23,102,214,0.6)] text-center tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
              Generate Report
            </p>
          </BackgroundImage15>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[128px] top-[173px] w-[1265px]">
        <div className="relative rounded-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(109.204deg, rgb(255, 248, 228) 0.67593%, rgb(253, 224, 151) 117.74%)" }}>
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <BackgroundImage18>
                  <g id="Frame">
                    <g id="Vector">
                      <path clipRule="evenodd" d={svgPaths.p9279f80} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p3ddcd280} fill="var(--fill-0, #041C66)" fillRule="evenodd" />
                    </g>
                  </g>
                </BackgroundImage18>
                <BackgroundImageAndText1 text="Summary" additionalClassNames="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#041c66]" />
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
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.064px] whitespace-nowrap" style={{ fontFeatureSettings: "'case'" }}>
                    <p className="leading-[1.4]">{`Medium Risk `}</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.056px] w-[1192px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  <p className="whitespace-pre-wrap">
                    <span className="leading-[1.3]">{`There are xx FIRs / Court Cases & challans worth INR XX registered. The vehicle has`}</span>
                    <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{` been blacklisted under the RTO.`}</span>
                    <span className="leading-[1.3]">{` Our assessment shows this vehicle poses significant risks. Recommend not to go ahead with financing  / policy issuance / procurement of this vehicle`}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#f4b23d] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-[624px]">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:car">
                  <div className="absolute inset-[12.71%_8.33%_12.5%_8.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.95">
                      <path d={svgPaths.pa75c400} fill="var(--fill-0, #131A25)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Vehicle Details
                </p>
              </div>
              <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                <BackgroundImage text="MANUFACTURER" text1="Daimler India Commercial Vehicles Pvt. Ltd" additionalClassNames="gap-[4px] w-full" />
                <BackgroundImage text="MODEL" text1="BHARATBENZ 3528C 8X4 BSVI - 5" additionalClassNames="gap-[4px]" />
                <BackgroundImage text="VEHICLE TYPE" text1="Heavy Goods Vehicle(HGV)" additionalClassNames="gap-[4px]" />
                <BackgroundImage text="FINANCIER" text1="HDFC Bank Ltd" additionalClassNames="gap-[4px]" />
                <BackgroundImage text="INSURER" text1="Not Available" additionalClassNames="gap-[4px]" />
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] h-[181px] items-start overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-[624px]">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:user-circle">
                  <div className="absolute inset-[8.33%_8.41%_8.42%_8.41%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.962 19.9793">
                      <path d={svgPaths.p343e3cf0} fill="var(--fill-0, #131A25)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Ownership details
                </p>
              </div>
              <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[3px] items-start relative shrink-0 w-full whitespace-pre-wrap">
                  <p className="leading-[1.3] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] w-[196px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    OWNER DETAILS
                  </p>
                  <div className="flex-[1_0_0] leading-[1.4] min-h-px min-w-px relative text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case'" }}>
                    <p className="mb-0">a. Name: Mrs. Majida Mol, Propretix</p>
                    <p>b. Address: 8th Floor, Skyline Icon, Marol, Andheri East,mumbai, Maharashtra 400059</p>
                  </div>
                </div>
                <BackgroundImage text="NO. OWNERSHIP TRANSFERS" text1="3" additionalClassNames="gap-[3px]" />
                <div className="content-stretch flex gap-[3px] items-start relative shrink-0 w-full">
                  <p className="leading-[1.3] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] w-[196px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    LAST OWNERSHIP TRANSFER
                  </p>
                  <p className="leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                    20 Aug’28
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  <BackgroundImage18>
                    <g id="traffic">
                      <mask height="24" id="mask0_39_20970" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                      </mask>
                      <g mask="url(#mask0_39_20970)">
                        <path d={svgPaths.p2d57ec00} fill="var(--fill-0, #1C1B1F)" id="traffic_2" />
                      </g>
                    </g>
                  </BackgroundImage18>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>{`RTO Risk Indicators `}</p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <BackgroundImage8>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        Vehicle Blacklist Status
                      </p>
                      <div className="bg-[#fde4d0] content-stretch flex gap-[4px] h-[28px] items-center justify-end opacity-0 px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
                        <BackgroundImageAndText1 text="Blacklisted" additionalClassNames="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#e23318]" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0">
                        <div className="bg-[#f3f3f4] overflow-clip relative rounded-[6.566px] shrink-0 size-[43.5px]" data-name="Bill discount">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.2px)] overflow-clip size-[28.473px] top-[calc(50%+0.39px)]" data-name="Icon=u:server-alt">
                            <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9818 23.7273">
                                <path d={svgPaths.p3c3d3c00} fill="var(--fill-0, #131A25)" id="Vector" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute left-[22.37px] size-[15.575px] top-[22.16px]" data-name="percent">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5751 15.5751">
                              <g id="percent">
                                <rect fill="var(--fill-0, #C21B11)" height="15.5751" rx="7.78755" width="15.5751" />
                                <path d={svgPaths.p1697d88} fill="var(--fill-0, white)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[209px]">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#0f2046] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                            Unable to reach server.
                          </p>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage8>
                  <BackgroundImage8>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        Compliance Status
                      </p>
                      <div className="bg-[#fef2cb] content-stretch flex gap-[4px] h-[28px] items-center justify-end px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
                        <BackgroundImageAndText1 text="Not Compliant" additionalClassNames="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#cb7100]" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[3px] items-start relative shrink-0 w-full">
                        <p className="leading-[1.3] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] w-[175px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          INSURANCE EXPIRY
                        </p>
                        <p className="leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          20 Aug’28
                        </p>
                      </div>
                      <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[3px] items-start relative shrink-0">
                        <p className="leading-[1.3] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] w-[175px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          PERMIT EXPIRY
                        </p>
                        <p className="leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                          23 Jan’28
                        </p>
                      </div>
                      <div className="bg-[#fef0e6] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e23318] border-l-2 border-solid inset-[0_0_0_-2px] pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[4px] items-center pr-[6px] py-[2px] relative w-full">
                            <p className="leading-[1.3] relative shrink-0 text-[#484e56] text-[12px] tracking-[0.048px] w-[175px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              PUCC EXPIRY
                            </p>
                            <p className="leading-[1.4] relative shrink-0 text-[#131a25] text-[14px] tracking-[0.056px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                              20 Oct’24
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage8>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <BackgroundImage9>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        RC Status
                      </p>
                      <div className="bg-[#fde4d0] content-stretch flex gap-[4px] h-[28px] items-center justify-end px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
                        <BackgroundImageAndText1 text="Fitness Expired" additionalClassNames="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#e23318]" />
                      </div>
                    </div>
                  </BackgroundImage9>
                  <BackgroundImage9>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                        Transfer Details
                      </p>
                      <div className="bg-[#fef2cb] content-stretch flex gap-[4px] h-[28px] items-center justify-end px-[12px] relative rounded-[20px] shrink-0" data-name="Badge/Chip">
                        <BackgroundImageAndText1 text="Inter State Transfer found" additionalClassNames="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#cb7100]" />
                      </div>
                    </div>
                  </BackgroundImage9>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
            <BackgroundImage19>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:balance-scale">
                  <div className="absolute inset-[8.33%_4.17%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                      <path d={svgPaths.p2603b900} fill="var(--fill-0, #131A25)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Legal Cases
                </p>
              </div>
            </BackgroundImage19>
            <div className="content-stretch flex flex-col gap-[16px] h-[438px] items-start py-[8px] relative shrink-0 w-full">
              <BackgroundImage10>
                <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metrics-cell">
                  <div aria-hidden="true" className="absolute border border-[#1766d6] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[8px] relative w-full">
                    <BackgroundImageAndText3 text="All Cases" />
                    <BackgroundImageAndText4 text="100" />
                  </div>
                </div>
                <MetricsCellBackgroundImage>
                  <BackgroundImageAndText3 text="Road Accidents" />
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#e23318] text-[24px] tracking-[0.096px] w-[92px] whitespace-pre-wrap">20</p>
                  </div>
                </MetricsCellBackgroundImage>
                <MetricsCellBackgroundImage>
                  <BackgroundImageAndText3 text="Theft/ Seized" />
                  <BackgroundImageAndText4 text="0" />
                </MetricsCellBackgroundImage>
                <MetricsCellBackgroundImage>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <BackgroundImage16 additionalClassNames="w-[186px]">{`Traffic Violations `}</BackgroundImage16>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#131a25] text-[24px] tracking-[0.096px] w-[45px] whitespace-pre-wrap">5</p>
                  </div>
                </MetricsCellBackgroundImage>
                <MetricsCellBackgroundImage>
                  <BackgroundImageAndText3 text="Other Cases" />
                  <BackgroundImageAndText4 text="0" />
                </MetricsCellBackgroundImage>
              </BackgroundImage10>
              <BackgroundImage11>
                <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative rounded-[12px] shrink-0 w-[1233px]">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="bg-[#f3f3f4] content-stretch flex items-start rounded-tl-[12px] rounded-tr-[12px] shrink-0 sticky top-0 w-[1232px]">
                    <ContentCellBackgroundImageAndText text="Case Type">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </ContentCellBackgroundImageAndText>
                    <ContentCellBackgroundImageAndText1 text="Case Number">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </ContentCellBackgroundImageAndText1>
                    <ContentCellBackgroundImageAndText1 text="Year">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </ContentCellBackgroundImageAndText1>
                    <ContentCellBackgroundImageAndText1 text="Category">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </ContentCellBackgroundImageAndText1>
                    <ContentCellBackgroundImageAndText2 text="Status" additionalClassNames="rounded-tr-[4px]" />
                    <ContentCellBackgroundImageAndText2 text="Status" additionalClassNames="rounded-tr-[4px]" />
                    <ContentCellBackgroundImageAndText2 text="&nbsp;" additionalClassNames="rounded-tl-[20px] rounded-tr-[20px]" />
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
                    <BackgroundImage1 text="Ashiq Ahmed Nengroo" text1="AGJPW5119K (PAN)" text2="2001" text3="Road Accidents">
                      View Details
                    </BackgroundImage1>
                    <BackgroundImage2>View Details</BackgroundImage2>
                    <BackgroundImage2>View Details</BackgroundImage2>
                    <BackgroundImage2>View Details</BackgroundImage2>
                    <BackgroundImage1 text="Ashiq Ahmed Nengroo" text1="AGJPW5119K (PAN)" text2="2001" text3="Road Accidents">
                      View Details
                    </BackgroundImage1>
                    <BackgroundImage1 text="Ashiq Ahmed Nengroo" text1="AGJPW5119K (PAN)" text2="2001" text3="Road Accidents">
                      View Details
                    </BackgroundImage1>
                    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="15">
                      <ContentCellBackgroundImageAndText3 text="Ashiq Ahmed Nengroo" additionalClassNames="shrink-0 w-[289px]" />
                      <ContentCellBackgroundImage1 />
                      <ContentCellBackgroundImage2 additionalClassNames="shrink-0 w-[130px]" />
                      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-[130px]" data-name="Badge/Chip">
                        <BackgroundImageAndText6 text="Road Accidents" />
                      </div>
                      <ContentCellBackgroundImage additionalClassNames="shrink-0 w-[194px]" />
                      <ContentCellBackgroundImageAndText5 text="View Details" additionalClassNames="shrink-0 w-[160px]" />
                    </div>
                  </div>
                </div>
              </BackgroundImage11>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col items-center px-[16px] py-[8px] relative w-full">
                    <Pagination className="relative shrink-0" type="3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
            <BackgroundImage19>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon=u:receipt-alt">
                  <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                      <path d={svgPaths.p2b82f500} fill="var(--fill-0, #131A25)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[18px] tracking-[0.072px]" style={{ fontFeatureSettings: "'case', 'liga' 0" }}>
                  Challan Cases
                </p>
              </div>
            </BackgroundImage19>
            <div className="content-stretch flex flex-col gap-[16px] h-[372px] items-start py-[8px] relative shrink-0 w-full">
              <BackgroundImage10>
                <MetricsCellBackgroundImage1>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <BackgroundImage20>{`Total  Challan `}</BackgroundImage20>
                  </div>
                  <BackgroundImageAndText4 text="4" />
                </MetricsCellBackgroundImage1>
                <MetricsCellBackgroundImage1>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <BackgroundImage20>{`Total  Amount`}</BackgroundImage20>
                  </div>
                  <BackgroundImageAndText4 text="₹3,700" />
                </MetricsCellBackgroundImage1>
                <MetricsCellBackgroundImage1>
                  <BackgroundImageAndText3 text="Pending Challan" />
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#e23318] text-[24px] tracking-[0.096px]">2</p>
                  </div>
                </MetricsCellBackgroundImage1>
                <MetricsCellBackgroundImage1>
                  <BackgroundImageAndText3 text="Pending Amount" />
                  <BackgroundImageAndText4 text="₹3,000" />
                </MetricsCellBackgroundImage1>
              </BackgroundImage10>
              <BackgroundImage11>
                <div className="bg-white content-stretch flex flex-col gap-[8px] h-[253px] items-start relative rounded-[12px] shrink-0 w-[1233px]">
                  <div aria-hidden="true" className="absolute border border-[#e7e8e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="bg-[#f3f3f4] content-stretch flex items-start rounded-tl-[12px] rounded-tr-[12px] shrink-0 sticky top-0 w-[1232px]">
                    <ContentCellBackgroundImageAndText text="Challan Number">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </ContentCellBackgroundImageAndText>
                    <ContentCellBackgroundImageAndText1 text="Filling date">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </ContentCellBackgroundImageAndText1>
                    <ContentCellBackgroundImageAndText1 text="Offense Details">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </ContentCellBackgroundImageAndText1>
                    <ContentCellBackgroundImageAndText1 text="Amount">
                      <path d="M0.5 0.5H24.5" id="Right Separator" stroke="var(--stroke-0, #7D8187)" strokeLinecap="round" />
                    </ContentCellBackgroundImageAndText1>
                    <ContentCellBackgroundImageAndText2 text="Status" additionalClassNames="rounded-tr-[4px]" />
                    <ContentCellBackgroundImageAndText2 text="&nbsp;" additionalClassNames="rounded-tl-[20px] rounded-tr-[20px]" />
                  </div>
                  <div className="content-stretch flex flex-col h-[624px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
                    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="2">
                      <ContentCellBackgroundImageAndText3 text="KL62913240513150816" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                        <div className="flex flex-row items-center size-full">
                          <BackgroundImageAndText5 text="15/06/2022" additionalClassNames="px-[8px]" />
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Cell">
                        <div className="flex flex-row items-center size-full">
                          <BackgroundImageAndText5 text="Over Speeding" additionalClassNames="px-[8px]" />
                        </div>
                      </div>
                      <BadgeChipBackgroundImageAndText text="₹500" additionalClassNames="bg-white" />
                      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content Cell">
                        <BackgroundImage6 text="Pending" additionalClassNames="text-white" />
                      </div>
                      <ContentCellBackgroundImageAndText5 text="View Details" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                    </div>
                    <BackgroundImage3 />
                    <BackgroundImage3 />
                    <BackgroundImage3 />
                  </div>
                </div>
              </BackgroundImage11>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}