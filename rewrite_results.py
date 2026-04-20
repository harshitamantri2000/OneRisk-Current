import re

with open("src/app/pages/risk-triangulation-page.tsx", "r") as f:
    content = f.read()

# Add new icons
content = content.replace(
    'import { ChevronRight, ChevronDown, ChevronUp, UploadCloud, Trash2, FileText, AlertCircle, CheckCircle2, AlertTriangle, ArrowLeft, Loader2, FileSpreadsheet } from "lucide-react";',
    'import { ChevronRight, ChevronDown, ChevronUp, UploadCloud, Trash2, FileText, AlertCircle, CheckCircle2, AlertTriangle, ArrowLeft, Loader2, FileSpreadsheet, ShieldAlert, ShieldCheck } from "lucide-react";'
)

# Isolate ResultsView
match = re.search(r'(function ResultsView.*?)\nexport default function RiskTriangulationPage', content, flags=re.DOTALL)
if not match:
    print("Could not find ResultsView")
    exit(1)

# I have full control over the string now. Let's rewrite ResultsView
new_results_view = """function ResultsView({ onBack }: { onBack: () => void }) {
  const [isTampered, setIsTampered] = useState(false);

  return (
    <div className="flex flex-col w-full h-[100vh] bg-[#F8FAFC]" style={{ fontFamily: FONT }}>
      {/* Top Header Layer */}
      <div className="w-full shrink-0 border-b border-[#E2E8F0] shadow-sm z-10 relative bg-white flex items-center justify-between px-[24px] h-[56px]">
        <div className="flex items-center gap-[16px]">
          <button onClick={onBack} className="p-[6px] hover:bg-slate-100 rounded-[6px] transition-colors cursor-pointer border-none bg-transparent flex items-center justify-center">
            <ArrowLeft className="w-[20px] h-[20px]" style={{ color: "#64748B" }}/>
          </button>
          <p style={{ ...pageTitleStyle, margin: 0, fontSize: '18px', color: '#0F172A' }}>Risk Triangulation Results</p>
          <span className="px-[12px] py-[4px] rounded-full text-[12px] font-semibold tracking-wide ml-[8px]" style={{ backgroundColor: "#EFF6FF", color: "#1D4ED8" }}>
            Case #RT-9921
          </span>
        </div>
        <div className="flex items-center gap-[16px]">
          <label className="flex items-center gap-[8px] cursor-pointer bg-red-50 px-[12px] py-[4px] rounded-[6px] border border-red-200">
            <input type="checkbox" checked={isTampered} onChange={(e) => setIsTampered(e.target.checked)} className="cursor-pointer w-[14px] h-[14px] accent-red-600" />
            <span className="text-[12px] font-bold text-red-700 tracking-wide">Demo: TAMPERED STATE</span>
          </label>
          <div className="w-px h-[20px] bg-[#E2E8F0]"></div>
          <button className="bg-white border border-[#E2E8F0] shadow-sm rounded-[6px] px-[16px] py-[8px] text-[13px] font-medium hover:bg-slate-50 cursor-pointer transition-colors flex items-center gap-[6px]" style={{ color: "#0F172A" }}>
            <FileSpreadsheet className="w-[16px] h-[16px]" style={{ color: "#16A34A" }} />
            Download Excel Report
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto w-full p-[24px] flex gap-[24px]">
        
        {/* Main Feed of Signals */}
        <div className="flex-1 flex flex-col gap-[32px]">
          
          {/* LEVEL 1: DOCUMENT INTEGRITY */}
          <div className="flex flex-col gap-[20px]">
            <div>
              <h2 className="text-[18px] font-bold text-[#0F172A] m-0 mb-[4px]">Level 1: Document Integrity & Authenticity</h2>
              <p className="text-[14px] text-[#64748B] m-0">Cryptographic and metadata verification of uploaded documents.</p>
            </div>
            
            {isTampered ? (
              <div className="bg-red-50 border border-red-200 rounded-[8px] p-[24px] shadow-sm flex flex-col gap-[16px]">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-[24px] h-[24px]" style={{ color: "#DC2626" }} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#991B1B] m-0">CRITICAL: Fraudulent Document Detected (Knockout)</h3>
                    <p className="text-[14px] font-medium text-[#B91C1C] m-0 mt-[4px]">Bank_Statement_Jan_March.pdf failed anti-forgery checks.</p>
                  </div>
                </div>
                <div className="bg-white border border-red-200 rounded-[6px] p-[16px]">
                  <p className="text-[14px] font-medium text-[#7F1D1D] m-0 leading-relaxed">
                    <strong>Reason for rejection:</strong> Document metadata indicates the file was edited using Adobe Photoshop out-of-band. PDF font subsets do not match the expected fonts from standard HDFC Bank output systems. Financial figures have likely been altered manually.
                  </p>
                </div>
                <div className="mt-[4px] flex">
                  <span className="bg-red-600 text-white text-[12px] font-bold uppercase tracking-wide px-[10px] py-[4px] rounded-[4px]">
                    Further Analysis Suspended
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-[20px] shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[36px] h-[36px] rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-[20px] h-[20px]" style={{ color: "#16A34A" }} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0F172A] m-0">All Documents Authentic</h3>
                    <p className="text-[13px] text-[#64748B] m-0 mt-[2px]">3/3 files passed metadata, forgery, and hash verification seamlessly.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={`flex flex-col gap-[32px] transition-all duration-300 ${isTampered ? "opacity-30 pointer-events-none grayscale" : "opacity-100"}`}>
            {/* LEVEL 2: INDIVIDUAL DOCUMENT ANOMALIES */}
            <div className="flex flex-col gap-[20px]">
              <div>
                <h2 className="text-[18px] font-bold text-[#0F172A] m-0 mb-[4px]">Level 2: Individual Document Anomalies</h2>
                <p className="text-[14px] text-[#64748B] m-0">Stand-alone problematic patterns found within individual un-triangulated statements.</p>
              </div>

              {/* Individual Signal 1: Bank Statement High */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="px-[20px] py-[14px] border-b flex items-center justify-between" style={{ backgroundColor: "#FEF2F2", borderColor: "#FEE2E2" }}>
                  <div className="flex items-center gap-[10px]">
                    <AlertCircle className="w-[20px] h-[20px]" style={{ color: "#DC2626" }} />
                    <span className="text-[15px] font-bold" style={{ color: "#7F1D1D" }}>High Risk: Cheque Bounces Detected</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[12px] font-semibold bg-white border px-[8px] py-[2px] rounded-full" style={{ borderColor: "#FEE2E2", color: "#64748B" }}>
                      Source: Bank Statement
                    </span>
                  </div>
                </div>
                <div className="p-[24px] flex flex-col gap-[20px]">
                  <p className="text-[14px] m-0 leading-relaxed font-medium" style={{ color: "#334155" }}>
                    High frequency of inward cheque returns due to insufficient funds, indicating potential liquidity stress.
                  </p>
                  <div className="flex flex-col gap-[12px] border rounded-[8px] p-[16px]" style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}>
                    <div className="flex justify-between items-center py-[4px]">
                      <span className="text-[13px] font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>Total Bounces (Last 3 Months)</span>
                      <span className="text-[15px] font-bold" style={{ color: "#0F172A" }}>12 Occurrences</span>
                    </div>
                    <div className="w-full h-px" style={{ backgroundColor: "#E2E8F0" }}></div>
                    <div className="flex justify-between items-center py-[4px]">
                      <span className="text-[13px] font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>Total Penalties Deducted</span>
                      <span className="text-[15px] font-bold" style={{ color: "#0F172A" }}>₹5,400</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Individual Signal 2: Bank Statement Medium */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="px-[20px] py-[14px] border-b flex items-center justify-between" style={{ backgroundColor: "#FFFBEB", borderColor: "#FEF3C7" }}>
                  <div className="flex items-center gap-[10px]">
                    <AlertTriangle className="w-[20px] h-[20px]" style={{ color: "#D97706" }} />
                    <span className="text-[15px] font-bold" style={{ color: "#78350F" }}>Medium Risk: Overdraft Overutilization</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[12px] font-semibold bg-white border px-[8px] py-[2px] rounded-full" style={{ borderColor: "#FEF3C7", color: "#64748B" }}>
                      Source: Bank Statement
                    </span>
                  </div>
                </div>
                <div className="p-[24px] flex flex-col gap-[16px]">
                  <p className="text-[14px] m-0 leading-relaxed font-medium" style={{ color: "#334155" }}>
                    Entity has maintained an overdraft limit utilization of over 95% consistently for the evaluated period.
                  </p>
                  <div className="flex items-center gap-[16px]">
                    <div className="flex-1 bg-white border rounded-[6px] p-[12px] flex items-center justify-between" style={{ borderColor: "#E2E8F0" }}>
                      <span className="text-[13px] font-medium" style={{ color: "#64748B" }}>Average Utilization</span>
                      <span className="text-[14px] font-bold text-amber-700">97.4%</span>
                    </div>
                    <div className="flex-1 bg-white border rounded-[6px] p-[12px] flex items-center justify-between" style={{ borderColor: "#E2E8F0" }}>
                      <span className="text-[13px] font-medium" style={{ color: "#64748B" }}>Account Status</span>
                      <span className="text-[14px] font-bold text-[#0F172A]">Current - Active</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Individual Signal 3: ITR Medium */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="px-[20px] py-[14px] border-b flex items-center justify-between" style={{ backgroundColor: "#FFFBEB", borderColor: "#FEF3C7" }}>
                  <div className="flex items-center gap-[10px]">
                    <AlertTriangle className="w-[20px] h-[20px]" style={{ color: "#D97706" }} />
                    <span className="text-[15px] font-bold" style={{ color: "#78350F" }}>Medium Risk: Delayed Tax Filing</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[12px] font-semibold bg-white border px-[8px] py-[2px] rounded-full" style={{ borderColor: "#FEF3C7", color: "#64748B" }}>
                      Source: ITR Filing
                    </span>
                  </div>
                </div>
                <div className="p-[24px] flex flex-col gap-[12px]">
                  <div className="flex items-start gap-[10px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-amber-500 mt-[7px]"></div>
                    <p className="text-[14px] font-medium m-0 leading-relaxed" style={{ color: "#334155" }}>
                      The submitted ITR was filed under section 139(4), indicating it was a belated return past the original due date.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LEVEL 3: CROSS-DOCUMENT TRIANGULATION */}
            <div className="flex flex-col gap-[20px]">
              <div>
                <h2 className="text-[18px] font-bold text-[#0F172A] m-0 mb-[4px]">Level 3: Cross-Document Triangulation</h2>
                <p className="text-[14px] text-[#64748B] m-0">Inconsistencies found by cross-referencing your mandatory Bank Statement against other records.</p>
              </div>
              
              {/* Signal 1: High */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="px-[20px] py-[14px] border-b flex items-center justify-between" style={{ backgroundColor: "#FEF2F2", borderColor: "#FEE2E2" }}>
                  <div className="flex items-center gap-[10px]">
                    <AlertCircle className="w-[20px] h-[20px]" style={{ color: "#DC2626" }} />
                    <span className="text-[15px] font-bold" style={{ color: "#7F1D1D" }}>High Risk: Revenue Mismatch</span>
                  </div>
                  <span className="text-[12px] font-semibold px-[10px] py-[4px] rounded-full" style={{ color: "#B91C1C", backgroundColor: "#FEE2E2" }}>
                    Variance: 28%
                  </span>
                </div>
                <div className="p-[24px] flex flex-col gap-[20px]">
                  <p className="text-[14px] m-0 leading-relaxed font-medium" style={{ color: "#334155" }}>
                    Significant mismatch between declared turnover in MCA filings and total credits observed in the Bank Statement.
                  </p>
                  <div className="flex gap-[24px]">
                    <div className="flex-1 border rounded-[8px] p-[16px]" style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}>
                      <span className="text-[12px] font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>Bank Statement (Credits)</span>
                      <div className="mt-[6px] text-[20px] font-bold" style={{ color: "#0F172A" }}>₹1.82 Cr</div>
                    </div>
                    <div className="flex-1 border rounded-[8px] p-[16px]" style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}>
                      <span className="text-[12px] font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>MCA Filing (Turnover)</span>
                      <div className="mt-[6px] text-[20px] font-bold" style={{ color: "#0F172A" }}>₹2.54 Cr</div>
                    </div>
                    <div className="flex-1 border rounded-[8px] p-[16px]" style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}>
                      <span className="text-[12px] font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>ITR (Gross Receipts)</span>
                      <div className="mt-[6px] text-[20px] font-bold" style={{ color: "#0F172A" }}>₹2.51 Cr</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal 2: Medium */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="px-[20px] py-[14px] border-b flex items-center justify-between" style={{ backgroundColor: "#FFFBEB", borderColor: "#FEF3C7" }}>
                  <div className="flex items-center gap-[10px]">
                    <AlertTriangle className="w-[20px] h-[20px]" style={{ color: "#D97706" }} />
                    <span className="text-[15px] font-bold" style={{ color: "#78350F" }}>Medium Risk: Undisclosed Liabilities</span>
                  </div>
                </div>
                <div className="p-[24px] flex flex-col gap-[20px]">
                  <p className="text-[14px] m-0 leading-relaxed font-medium" style={{ color: "#334155" }}>
                    Recurring EMI payments observed in Bank Statement that are not matched with registered charges in MCA filings.
                  </p>
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="flex flex-col gap-[6px]">
                      <span className="text-[12px] font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>Bank Statement Pattern</span>
                      <span className="text-[15px] font-medium" style={{ color: "#0F172A" }}>₹45,000 monthly debit (XYZ Finance)</span>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <span className="text-[12px] font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>MCA Registered Charges</span>
                      <span className="text-[15px] font-medium" style={{ color: "#0F172A" }}>Only HDFC Bank charge present</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal 3: Low/Pass */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="px-[20px] py-[14px] border-b flex items-center justify-between" style={{ backgroundColor: "#F0FDF4", borderColor: "#DCFCE7" }}>
                  <div className="flex items-center gap-[10px]">
                    <CheckCircle2 className="w-[20px] h-[20px]" style={{ color: "#16A34A" }} />
                    <span className="text-[15px] font-bold" style={{ color: "#14532D" }}>Pass: Entity Name & Tax Consistency</span>
                  </div>
                </div>
                <div className="p-[24px] flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-green-500"></div>
                    <p className="text-[14px] font-medium m-0" style={{ color: "#334155" }}>Entity Name matches perfectly across Bank, ITR, and MCA records.</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-green-500"></div>
                    <p className="text-[14px] font-medium m-0" style={{ color: "#334155" }}>Advance Tax payments debited from Bank Statement align with claims in ITR-3 submission.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Sidebar */}
        <div className="w-[340px] shrink-0 flex flex-col gap-[20px]">
          {/* Summary Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-[24px] shadow-sm flex flex-col gap-[20px]">
            <h3 className="text-[16px] font-bold m-0" style={{ color: "#0F172A" }}>Analysis Summary</h3>
            <div className="flex flex-col gap-[12px]">
              <div className="flex justify-between items-center p-[14px] rounded-[8px] border" style={{ backgroundColor: isTampered ? "#FEF2F2" : "#F8FAFC", borderColor: isTampered ? "#FEE2E2" : "#E2E8F0" }}>
                <span className="text-[14px] font-medium" style={{ color: isTampered ? "#991B1B" : "#475569" }}>Overall Status</span>
                <span className={`text-[13px] font-bold px-[10px] py-[4px] rounded-full text-white ${isTampered ? "bg-red-600" : "bg-amber-600"}`}>
                  {isTampered ? "KNOCKOUT" : "High Attention"}
                </span>
              </div>
              <div className="flex justify-between items-center py-[10px] border-b" style={{ borderColor: "#F1F5F9" }}>
                <span className="text-[14px]" style={{ color: "#64748B" }}>Integrity Checks</span>
                <span className={`text-[14px] font-semibold ${isTampered ? "text-red-600" : "text-green-600"}`}>
                  {isTampered ? "FAILED" : "PASSED"}
                </span>
              </div>
              <div className="flex justify-between items-center py-[10px] border-b" style={{ borderColor: "#F1F5F9" }}>
                <span className="text-[14px]" style={{ color: "#64748B" }}>Docs Analyzed</span>
                <span className="text-[14px] font-semibold" style={{ color: "#0F172A" }}>3 Sources</span>
              </div>
              <div className="flex justify-between items-center py-[10px]">
                <span className="text-[14px]" style={{ color: "#64748B" }}>Signals Found</span>
                <span className="text-[14px] font-semibold" style={{ color: "#0F172A" }}>6</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-[24px] shadow-sm flex flex-col gap-[20px]">
            <h3 className="text-[16px] font-bold m-0" style={{ color: "#0F172A" }}>Documents Uploaded</h3>
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[12px]">
                <FileText className="w-[18px] h-[18px] shrink-0 mt-[2px]" style={{ color: isTampered ? "#DC2626" : "#2563EB" }} />
                <div className="flex flex-col">
                  <span className={`text-[14px] font-medium ${isTampered ? "text-red-600 line-through" : "text-[#0F172A]"}`}>Bank_Statement_Jan_March.pdf</span>
                  <span className={`text-[12px] mt-[2px] ${isTampered ? "text-red-500 font-semibold" : "text-[#64748B]"}`}>
                    {isTampered ? "Tampered Anchor" : "Anchor Document"}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-[12px]">
                <FileText className="w-[18px] h-[18px] shrink-0 mt-[2px]" style={{ color: "#64748B" }} />
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium" style={{ color: "#0F172A" }}>ITR_Filing_2024.pdf</span>
                  <span className="text-[12px] mt-[2px]" style={{ color: "#64748B" }}>ITR-3</span>
                </div>
              </div>
              <div className="flex items-start gap-[12px]">
                <FileText className="w-[18px] h-[18px] shrink-0 mt-[2px]" style={{ color: "#64748B" }} />
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium" style={{ color: "#0F172A" }}>MCA Fetch Result</span>
                  <span className="text-[12px] mt-[2px]" style={{ color: "#64748B" }}>CIN: U12300...</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
"""

content = content[:match.start()] + new_results_view + "\n\n" + content[match.end():]

with open("src/app/pages/risk-triangulation-page.tsx", "w") as f:
    f.write(content)
print("done")
