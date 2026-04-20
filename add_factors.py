import re

with open("src/app/pages/risk-triangulation-page.tsx", "r") as f:
    content = f.read()

# Replace Right Sidebar Analysis Summary
old_summary = """          <div className="bg-white border border-[#ECEDED] rounded-[12px] p-[24px] flex flex-col gap-[20px]">
            <h3 className="text-[16px] font-bold m-0" style={{ color: "#131A25" }}>Analysis Summary</h3>
            <div className="flex flex-col gap-[12px]">
              <div className="flex justify-between items-center p-[14px] rounded-[8px] border" style={{ backgroundColor: isTampered ? "#FCC3A133" : "transparent", borderColor: isTampered ? "#FCC3A1" : "#ECEDED" }}>
                <span className="text-[14px] font-medium" style={{ color: isTampered ? "#C21B11" : "#131A25" }}>Overall Status</span>
                <span className={`text-[13px] font-bold px-[10px] py-[4px] rounded-full text-white ${isTampered ? "[#C21B11]" : "[#CB7100]"}`}>
                  {isTampered ? "KNOCKOUT" : "High Attention"}
                </span>
              </div>
              <div className="flex justify-between items-center py-[10px] border-b" style={{ borderColor: "#ECEDED" }}>
                <span className="text-[14px]" style={{ color: "#BFC2C4" }}>Integrity Checks</span>
                <span className={`text-[14px] font-semibold ${isTampered ? "text-[#C21B11]" : "text-[#1A7A1E]"}`}>
                  {isTampered ? "FAILED" : "PASSED"}
                </span>
              </div>
              <div className="flex justify-between items-center py-[10px] border-b" style={{ borderColor: "#ECEDED" }}>
                <span className="text-[14px]" style={{ color: "#BFC2C4" }}>Docs Analyzed</span>
                <span className="text-[14px] font-semibold" style={{ color: "#131A25" }}>3 Sources</span>
              </div>
              <div className="flex justify-between items-center py-[10px]">
                <span className="text-[14px]" style={{ color: "#BFC2C4" }}>Signals Found</span>
                <span className="text-[14px] font-semibold" style={{ color: "#131A25" }}>6</span>
              </div>
            </div>
          </div>"""

new_summary = """          <div className="bg-white border border-[#ECEDED] rounded-[12px] p-[24px] flex flex-col gap-[20px]">
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-bold m-0 text-[#131A25]">Risk Factor Coverage</h3>
              <span className={`text-[11px] font-bold px-[8px] py-[2px] rounded-full ${isTampered ? 'bg-[#FCC3A133] text-[#A20C0F]' : 'bg-[#FAFAFB] text-[#131A25] border border-[#ECEDED]'}`}>{isTampered ? 'KNOCKOUT' : 'Analysis Complete'}</span>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="flex justify-between items-center py-[10px] border-b border-[#ECEDED]">
                <span className="text-[14px] text-[#BFC2C4] font-medium">Total Factors Checked</span>
                <span className="text-[14px] font-bold text-[#131A25]">58</span>
              </div>
              <div className="flex justify-between items-center py-[10px] border-b border-[#ECEDED]">
                <span className="text-[14px] text-[#BFC2C4] font-medium">Flagged Risks</span>
                <span className="text-[14px] font-bold text-[#131A25]">22</span>
              </div>
              <div className="flex justify-between items-center py-[10px] border-b border-[#ECEDED]">
                <span className="text-[14px] text-[#BFC2C4] font-medium">Risk Grade</span>
                <span className="text-[14px] font-bold text-[#131A25]">0.62</span>
              </div>
              <div className="mt-[12px] flex flex-col gap-[12px]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BFC2C4]">Breakdown by Category</span>
                
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-[#131A25]">Integrity</span>
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[13px] font-bold text-[#131A25]">8 <span className="text-[#BFC2C4] font-medium">/ 25</span></span>
                    <span className="text-[11px] px-[6px] py-[2px] rounded border border-[#FCC3A1] text-[#C21B11] bg-[#FCC3A133] font-bold w-[40px] text-center">32%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-[#131A25]">Compliance</span>
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[13px] font-bold text-[#131A25]">0 <span className="text-[#BFC2C4] font-medium">/ 6</span></span>
                    <span className="text-[11px] px-[6px] py-[2px] rounded border border-[#B6F1A5] text-[#1A7A1E] bg-[#E9FCE5] font-bold w-[40px] text-center">0%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-[#131A25]">Credit Behaviour</span>
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[13px] font-bold text-[#131A25]">3 <span className="text-[#BFC2C4] font-medium">/ 4</span></span>
                    <span className="text-[11px] px-[6px] py-[2px] rounded border border-[#FCC3A1] text-[#C21B11] bg-[#FCC3A133] font-bold w-[40px] text-center">75%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-[#131A25]">Business Risk</span>
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[13px] font-bold text-[#131A25]">10 <span className="text-[#BFC2C4] font-medium">/ 20</span></span>
                    <span className="text-[11px] px-[6px] py-[2px] rounded border border-[#F9C963] text-[#AA5800] bg-[#FEF2CB] font-bold w-[40px] text-center">50%</span>
                  </div>
                </div>

              </div>
            </div>
          </div>"""

if old_summary in content:
    content = content.replace(old_summary, new_summary)
else:
    print("Warning: old_summary not found. Using fallback regex.")
    content = re.sub(r'<div className="bg-white border border-\[#ECEDED\] rounded-\[12px\] p-\[24px\] flex flex-col gap-\[20px\]">.*?Analysis Summary.*?</div>\s*</div>\s*<div className="bg-white border border-\[#ECEDED\] rounded-\[12px\] p-\[24px\] flex flex-col gap-\[20px\]">', new_summary + '\n\n          <div className="bg-white border border-[#ECEDED] rounded-[12px] p-[24px] flex flex-col gap-[20px]">', content, flags=re.DOTALL)


def add_factor_tag(source_label, factor_label, text):
    old_html = f'<span className="text-[12px] font-semibold bg-white border px-[8px] py-[2px] rounded-full" style={{{{ borderColor: "#ECEDED", color: "#BFC2C4" }}}}>\n                      {source_label}\n                    </span>'
    new_html = f"""<span className="text-[12px] font-semibold bg-white border px-[8px] py-[2px] rounded-full" style={{{{ borderColor: "#ECEDED", color: "#BFC2C4" }}}}>
                      {source_label}
                    </span>
                    <span className="text-[12px] font-semibold bg-white border px-[8px] py-[2px] rounded-full" style={{{{ borderColor: "#ECEDED", color: "#131A25" }}}}>
                      Factor: {factor_label}
                    </span>"""
    return text.replace(old_html, new_html)

content = add_factor_tag("Source: Bank Statement", "Credit Behaviour", content)
content = add_factor_tag("Source: ITR Filing", "Compliance", content)

# For Level 3 signals which do not have a Source tag currently
old_html_l3_1 = """<span className="text-[12px] font-semibold px-[10px] py-[4px] rounded-full" style={{ color: "#A20C0F", backgroundColor: "transparent" }}>
                    Variance: 28%
                  </span>"""
new_html_l3_1 = """<div className="flex items-center gap-[8px]">
                    <span className="text-[12px] font-semibold bg-white border px-[8px] py-[2px] rounded-full" style={{ borderColor: "#ECEDED", color: "#131A25" }}>
                      Factor: Business Risk
                    </span>
                    <span className="text-[12px] font-semibold px-[10px] py-[4px] rounded-full bg-[#FCC3A133] border border-[#FCC3A1]" style={{ color: "#C21B11" }}>
                      Variance: 28%
                    </span>
                  </div>"""

old_html_l3_2 = """<div className="flex items-center gap-[10px]">
                    <AlertTriangle className="w-[20px] h-[20px]" style={{ color: "#CB7100" }} />
                    <span className="text-[15px] font-bold" style={{ color: "#AA5800" }}>Medium Risk: Undisclosed Liabilities</span>
                  </div>
                </div>"""
new_html_l3_2 = """<div className="flex items-center gap-[10px]">
                    <AlertTriangle className="w-[20px] h-[20px]" style={{ color: "#CB7100" }} />
                    <span className="text-[15px] font-bold" style={{ color: "#AA5800" }}>Medium Risk: Undisclosed Liabilities</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[12px] font-semibold bg-white border px-[8px] py-[2px] rounded-full" style={{ borderColor: "#ECEDED", color: "#131A25" }}>
                      Factor: Integrity
                    </span>
                  </div>
                </div>"""

content = content.replace(old_html_l3_1, new_html_l3_1)
content = content.replace(old_html_l3_2, new_html_l3_2)

with open("src/app/pages/risk-triangulation-page.tsx", "w") as f:
    f.write(content)

print("done")
