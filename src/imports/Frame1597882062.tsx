function Frame3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#131a25] text-[16px] tracking-[0.064px]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Primary Entity Information
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] gap-[3px] items-start relative shrink-0 w-[226px]">
      <p className="relative shrink-0 text-[#7d8187] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        CIN
      </p>
      <p className="relative shrink-0 text-[#131a25]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        U74900MH2011PTC291275
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] gap-[3px] items-start relative shrink-0 w-[227px]">
      <p className="relative shrink-0 text-[#7d8187] w-[156px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        ENTITY NAME
      </p>
      <p className="relative shrink-0 text-[#131a25]" style={{ fontFeatureSettings: "\'case\', \'liga\' 0" }}>
        Baldor Technologies Private Limited
      </p>
    </div>
  );
}

function Frame2() {
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[6px] items-start leading-[1.3] relative shrink-0 text-[12px] tracking-[0.048px] w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[16px] py-[8px] relative rounded-[12px] size-full">
      <Frame5 />
      <Frame4 />
    </div>
  );
}