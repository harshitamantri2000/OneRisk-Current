import clsx from "clsx";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex items-center justify-center left-[37px] top-[7px] w-[4px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#2e3a59] text-[12px] whitespace-pre-wrap">{children}</p>
      <Text2 text="Very high risk" />
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="-rotate-90 flex-none">
      <div className="h-[7.487px] relative w-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7.48735">
          {children}
        </svg>
      </div>
    </div>
  );
}
type Helper4Props = {
  additionalClassNames?: string;
};

function Helper4({ additionalClassNames = "" }: Helper4Props) {
  return (
    <div className={clsx("relative rounded-[2px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <Text5 text="Average risk" />
      </div>
    </div>
  );
}
type Text8Props = {
  text: string;
};

function Text8({ text }: Text8Props) {
  return (
    <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#2e3a59] text-[12px] whitespace-pre-wrap">
      <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">{text}</span>
      <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: Bombay police act `}</span>
      <span className="leading-[1.3]">{` -  1 case as a Respondent`}</span>
    </p>
  );
}
type Helper3Props = {
  additionalClassNames?: string;
};

function Helper3({ additionalClassNames = "" }: Helper3Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("absolute flex h-[8px] items-center justify-center w-[7.487px]", additionalClassNames)}>
      <Wrapper>
        <ellipse cx="4" cy="3.74368" fill="var(--fill-0, #115D76)" id="Ellipse 74" rx="4" ry="3.74368" />
      </Wrapper>
    </div>
  );
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
      <Helper2 text="DC" text1=": Criminal theft" />
      <div className="bg-[#f5faed] relative rounded-[2px] shrink-0 w-[59px]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[4px] py-px relative w-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#9cc948] text-[8px] whitespace-nowrap">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#2e3a59] text-[0px] whitespace-pre-wrap">
      <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3] text-[12px]">{text}</span>
      <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] text-[12px]">{text1}</span>
      <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] text-[12px]">{` `}</span>
      <span className="leading-[1.3] text-[12px]">{` -  1 case as a `}</span>
      <span className="leading-[1.3] text-[11px]">{`Respondent `}</span>
    </p>
  );
}
type Text6Props = {
  text: string;
  additionalClassNames?: string;
};

function Text6({ text, additionalClassNames = "" }: Text6Props) {
  return (
    <div className={clsx("absolute content-stretch flex items-center left-[51px] py-[2px] w-[488px]", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#2e3a59] text-[12px] whitespace-pre-wrap">
        <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">{text}</span>
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: Voluntarily causing hurt `}</span>
        <span className="leading-[1.3]">{` -  1 case as a Respondent`}</span>
      </p>
      <Text2 text="Very high risk" />
    </div>
  );
}
type Text5Props = {
  text: string;
  additionalClassNames?: string;
};

function Text5({ text, additionalClassNames = "" }: Text5Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[4px] py-px relative", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#cca226] text-[8px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#2e3a59] text-[12px] whitespace-pre-wrap">
      <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">{text}</span>
      <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: Robbery `}</span>
      <span className="leading-[1.3]">{` -  1 case as a Respondent`}</span>
    </p>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <Wrapper1>
      <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">{text}</span>
      <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{text1}</span>
      <span className="leading-[1.3]">{` -  1 filing as a Respondent`}</span>
    </Wrapper1>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#2e3a59] text-[12px] whitespace-pre-wrap">
      <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">{text}</span>
      <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: `}</span>
      <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3]">{text1}</span>
      <span className="leading-[1.3]">{` -  1 case as a Petitioner`}</span>
    </p>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[4px] py-px relative", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#c9594f] text-[8px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="bg-[#faeeed] relative rounded-[2px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <Text3 text={text} />
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
    <div className={clsx("absolute content-stretch flex flex-col items-center", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#115d76] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#115d76] text-[14px] underline uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative rounded-[8px] size-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[8px] pt-px relative rounded-[inherit] size-full">
        <div className="bg-[#eaeff4] content-stretch flex items-center px-[8px] py-[4px] relative rounded-br-[8px] shrink-0">
          <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
            <Text text="Serious criminal offences" />
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
            <div className="h-[346px] overflow-clip relative shrink-0 w-full">
              <Wrapper2 additionalClassNames="h-[335px]">
                <div className="bg-[#ebf2f2] h-[4px] rounded-[4px] w-[335px]" />
              </Wrapper2>
              <Text1 text="2021" additionalClassNames="left-0 top-0 w-[29.013px]" />
              <div className="absolute content-stretch flex flex-col items-center left-px top-[190px] w-[26.206px]">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-[26.206px]">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#115d76] text-[12px] whitespace-nowrap">2016</p>
                </div>
              </div>
              <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] left-px text-[#115d76] text-[12px] top-[75px] whitespace-nowrap">2020</p>
              <Text1 text="2015" additionalClassNames="left-px top-[235px] w-[26.206px]" />
              <Text1 text="2017" additionalClassNames="left-[5px] top-[148px] w-[26.206px]" />
              <Text1 text="2010" additionalClassNames="left-[3px] top-[303px] w-[26.206px]" />
              <Text1 text="2009" additionalClassNames="left-px top-[329px] w-[29.949px]" />
              <Helper3 additionalClassNames="left-[35.56px] top-[4.03px]" />
              <Helper3 additionalClassNames="left-[36px] top-[81px]" />
              <Helper3 additionalClassNames="left-[37px] top-[198px]" />
              <Helper3 additionalClassNames="left-[37px] top-[239px]" />
              <Helper3 additionalClassNames="left-[36px] top-[148px]" />
              <Helper3 additionalClassNames="left-[35px] top-[307px]" />
              <div className="absolute flex h-[8px] items-center justify-center left-[35.56px] top-[333px] w-[7.487px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                <Wrapper>
                  <ellipse cx="4" cy="3.74368" fill="var(--fill-0, #115D76)" id="Ellipse 80" rx="4" ry="3.74368" />
                </Wrapper>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[51px] top-[4px] w-[488px]">
                <Wrapper1>
                  <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">DC</span>
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: Robbery `}</span>
                  <span className="leading-[1.3]">{` -  2 cases`}</span>
                </Wrapper1>
                <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
                  <Helper text="DC" text1="Bail Application" />
                  <Text2 text="Very high risk" />
                </div>
                <Helper1 text="FIR" text1=": Criminal matter" />
                <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
                  <Text4 text="DC" />
                  <Text2 text="Very high risk" />
                </div>
                <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
                  <Helper text="DC" text1="Bail Application" />
                  <div className="bg-[#faeeed] relative rounded-[2px] shrink-0 w-[58px]">
                    <div className="flex flex-row items-center justify-center size-full">
                      <Text3 text="Very high risk" additionalClassNames="w-full" />
                    </div>
                  </div>
                </div>
                <Helper1 text="FIR" text1=": Criminal matter" />
              </div>
              <div className="absolute content-stretch flex items-center left-[51px] py-[2px] top-[170px] w-[488px]">
                <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#2e3a59] text-[12px] whitespace-pre-wrap">
                  <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">FIR</span>
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">: Criminal matter</span>
                  <span className="leading-[1.3]">{` -  3 filing as a Respondent`}</span>
                </p>
                <Text2 text="Very high risk" />
              </div>
              <div className="absolute content-stretch flex items-center left-[51px] py-[2px] top-[148px] w-[488px]">
                <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#2e3a59] text-[12px] whitespace-pre-wrap">
                  <span className="font-['Plus_Jakarta_Sans:Italic',sans-serif] italic leading-[1.3]">DC</span>
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{`: `}</span>
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">Narcotic drug violations</span>
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3]">{` `}</span>
                  <span className="leading-[1.3]">{` -  1 case as a Respondent`}</span>
                </p>
                <div className="bg-[rgba(255,202,48,0.12)] relative rounded-[2px] shrink-0 w-[59px]">
                  <div className="flex flex-row items-center justify-center size-full">
                    <Text5 text="Average risk" additionalClassNames="w-full" />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center left-[51px] py-[2px] top-[252px] w-[488px]">
                <Text4 text="DC" />
                <Text2 text="Very high risk" />
              </div>
              <Text6 text="DC" additionalClassNames="top-[193px]" />
              <Text6 text="DC" additionalClassNames="top-[229px]" />
              <div className="absolute content-stretch flex flex-col items-start left-[51px] top-[301px] w-[488px]">
                <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
                  <Helper2 text="DC" text1=": Rioting" />
                  <Text2 text="Very high risk" />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[51px] top-[326px] w-[488px]">
                <Text7 text="Low risk" />
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[51px] top-[275px] w-[488px]">
                <Text7 text="Low risk" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#eaeff4] content-stretch flex items-center px-[8px] py-[4px] relative rounded-br-[8px] shrink-0">
          <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
            <Text text="Other matters" />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0">
          <div className="h-[63px] overflow-clip relative shrink-0 w-[539px]">
            <Wrapper2 additionalClassNames="h-[61px]">
              <div className="bg-[#ebf2f2] h-[4px] rounded-[4px] w-[61px]" />
            </Wrapper2>
            <Text1 text="2016" additionalClassNames="left-0 top-0 w-[29.013px]" />
            <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] left-px text-[#115d76] text-[12px] top-[24px] whitespace-nowrap">2012</p>
            <Text1 text="2011" additionalClassNames="left-[4px] top-[46px] w-[26.206px]" />
            <Helper3 additionalClassNames="left-[35.56px] top-[4.03px]" />
            <Helper3 additionalClassNames="left-[35px] top-[28px]" />
            <Helper3 additionalClassNames="left-[35px] top-[51px]" />
            <div className="absolute content-stretch flex flex-col items-start left-[50px] top-[-3px] w-[488px]">
              <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
                <Text8 text="DC" />
                <div className="bg-[rgba(255,202,48,0.2)] relative rounded-[2px] shrink-0">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[4px] py-px relative">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#ffca30] text-[8px] whitespace-nowrap">Average risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[50px] top-[-3px] w-[488px]">
              <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
                <Text8 text="DC" />
                <Helper4 additionalClassNames="bg-[rgba(255,202,48,0.05)]" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
                  <Text8 text="DC" />
                  <Helper4 additionalClassNames="bg-[rgba(255,202,48,0.2)]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full">
                  <Text8 text="DC" />
                  <Helper4 additionalClassNames="bg-[rgba(255,202,48,0.2)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebf2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}