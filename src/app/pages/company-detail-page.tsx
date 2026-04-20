import { useState, useRef, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Check,
  ShieldCheck,
  DollarSign,
  Briefcase,
} from "lucide-react";
import {
  FONT as SHARED_FONT,
  FEAT,
  pageTitleStyle,
  bodyStyle,
  labelStyle,
  breadcrumbStyle as sharedBreadcrumbStyle,
  breadcrumbActiveStyle,
  chipTextStyle,
  buttonTextStyle,
} from "../components/typography";
import CompanyOverviewSection from "../components/company/company-overview-section";
import LegalHistorySection, { AMLSection } from "../components/company/legal-history-section";
import IncomeSection from "../components/company/income-section";

const FONT = SHARED_FONT;

/* ─── All section IDs in document order ─── */
const ALL_SECTION_IDS = [
  "company-overview",
  "key-management",
  "ownership",
  "legal-history",
  "aml",
  "financial-markers",
  "operational-markers",
  "charges-security",
  "auditor-reports",
  "epf-gst",
  "related-party",
  "msme",
];

/* ─── Sidebar navigation config ─── */
interface SideNavItem {
  id: string;
  label: string;
  hasDot?: boolean;
  section: string;
}

interface SideNavSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: SideNavItem[];
}

const sideNavSections: SideNavSection[] = [
  {
    id: "identity",
    label: "Identity",
    icon: <Briefcase size={16} />,
    items: [
      { id: "company-overview", label: "Company Overview", section: "identity" },
      { id: "key-management", label: "Key Management Person..", section: "identity" },
      { id: "ownership", label: "Ownership structure", section: "identity" },
    ],
  },
  {
    id: "integrity",
    label: "Integrity",
    icon: <ShieldCheck size={16} />,
    items: [
      { id: "legal-history", label: "Legal History", section: "integrity", hasDot: true },
      { id: "aml", label: "AML", section: "integrity" },
    ],
  },
  {
    id: "income",
    label: "Income",
    icon: <DollarSign size={16} />,
    items: [
      { id: "financial-markers", label: "Financial Markers", section: "income" },
      { id: "operational-markers", label: "Operational Markers", section: "income" },
      { id: "charges-security", label: "Charges & Security", section: "income" },
      { id: "auditor-reports", label: "Auditor Reports", section: "income" },
      { id: "epf-gst", label: "EPF & GST Compliance", section: "income", hasDot: true },
      { id: "related-party", label: "Related Party Transaction", section: "income" },
      { id: "msme", label: "MSME Delayed Payments", section: "income" },
    ],
  },
];

/* ─── In-page sidebar (Google-Docs-style scrollspy) ─── */
function InPageSidebar({
  activeItem,
  onSelect,
}: {
  activeItem: string;
  onSelect: (id: string) => void;
}) {
  const activeRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  /* Scroll the active item into the sidebar's visible area */
  useEffect(() => {
    if (activeRef.current && navRef.current) {
      const nav = navRef.current;
      const btn = activeRef.current;
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();

      /* If the button is outside the visible area of the sidebar, scroll it in */
      if (btnRect.top < navRect.top || btnRect.bottom > navRect.bottom) {
        btn.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [activeItem]);

  return (
    <nav
      ref={navRef}
      className="shrink-0 flex flex-col gap-[4px] py-[8px] overflow-y-auto"
      style={{ width: 210, minWidth: 210 }}
    >
      {sideNavSections.map((section) => {
        /* Does this section category contain the active item? */
        const sectionHasActive = section.items.some((i) => i.id === activeItem);

        return (
          <div key={section.id} className="flex flex-col gap-[0px]">
            {/* Section header */}
            <div
              className="flex items-center gap-[6px] px-[12px] py-[8px]"
              style={{
                color: sectionHasActive ? "var(--primary)" : "var(--foreground)",
              }}
            >
              <span>{section.icon}</span>
              <span
                style={{
                  ...bodyStyle,
                  fontWeight: 600,
                  fontSize: "var(--text-base)",
                  color: sectionHasActive ? "var(--primary)" : "var(--foreground)",
                }}
              >
                {section.label}
              </span>
            </div>

            {/* Items */}
            {section.items.map((item) => {
              const isActive = item.id === activeItem;
              return (
                <button
                  key={item.id}
                  ref={isActive ? activeRef : undefined}
                  onClick={() => onSelect(item.id)}
                  className="flex items-center gap-[6px] w-full border-0 bg-transparent cursor-pointer py-[8px] transition-all duration-200"
                  style={{
                    paddingLeft: 36,
                    paddingRight: 12,
                    borderLeft: isActive
                      ? "3px solid var(--primary)"
                      : "3px solid transparent",
                    backgroundColor: isActive
                      ? "rgba(23,102,214,0.06)"
                      : "transparent",
                  }}
                >
                  <span
                    className="truncate"
                    style={{
                      ...bodyStyle,
                      color: isActive ? "var(--primary)" : "var(--muted-foreground)",
                      fontWeight: isActive ? 600 : 500,
                      transition: "color 0.15s ease, font-weight 0.15s ease",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.hasDot && (
                    <span
                      className="shrink-0 rounded-full"
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: "var(--destructive)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        );
      })}
    </nav>
  );
}

/* ─── Company dropdown selector in header ─── */
const companyNames = [
  { id: "nexagen-infra-pvt-ltd", name: "Nexagen Infra Pvt Ltd" },
  { id: "meridian-holdings-ltd", name: "Meridian Holdings Ltd" },
  { id: "apex-capital-partners-pvt-ltd", name: "Apex Capital Partners Pvt Ltd" },
  { id: "sarvottam-enterprises-ltd", name: "Sarvottam Enterprises Ltd" },
  { id: "nexagen-realty-solutions-pvt-ltd", name: "Nexagen Realty Solutions Pvt Ltd" },
  { id: "primecore-constructions-ltd", name: "Primecore Constructions Ltd" },
  { id: "vantage-steels-alloys-ltd", name: "Vantage Steels & Alloys Ltd" },
  { id: "samara-projects-international-ltd", name: "Samara Projects International Ltd" },
];

function CompanyHeader() {
  const navigate = useNavigate();
  const { companyId } = useParams<{ companyId: string }>();
  const [open, setOpen] = useState(false);
  const matchedCompany = companyNames.find((c) => c.id === companyId) || companyNames[0];
  const [selected, setSelected] = useState(matchedCompany);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="bg-card relative w-full">
      {/* Breadcrumb */}
      <div className="px-[16px] pt-[6px] pb-[2px] flex items-center gap-[4px]">
        {["Home", "Netscan", "Case overview", selected.name].map((item, i, arr) => (
          <span key={i} className="flex items-center gap-[4px]">
            <span style={i === arr.length - 1 ? breadcrumbActiveStyle : sharedBreadcrumbStyle}>{item}</span>
            {i < arr.length - 1 && <ChevronRight size={12} style={{ color: "var(--muted-foreground)" }} />}
          </span>
        ))}
      </div>

      {/* Company info row */}
      <div className="flex items-center justify-between px-[16px] py-[8px] gap-[12px]">
        <div className="flex items-center gap-[10px] min-w-0 flex-1">
          <button
            onClick={() => navigate("/")}
            className="shrink-0 flex items-center justify-center border-0 bg-transparent cursor-pointer p-0"
          >
            <ArrowLeft size={20} style={{ color: "var(--foreground)" }} />
          </button>

          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-[8px] border-0 bg-transparent cursor-pointer p-0"
            >
              <span style={pageTitleStyle} className="truncate">{selected.name}</span>
              <ChevronDown size={18} style={{ color: "var(--muted-foreground)", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {open && (
              <div
                className="absolute left-0 top-[calc(100%+4px)] z-50 min-w-[320px] rounded-[var(--radius)] bg-card border border-border py-[4px]"
                style={{ boxShadow: "var(--elevation-sm)" }}
              >
                {companyNames.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setSelected(c); setOpen(false); navigate(`/company/${c.id}`); }}
                    className={`flex items-center justify-between w-full px-[16px] py-[10px] border-0 bg-transparent cursor-pointer ${c.id === selected.id ? "bg-muted" : "hover:bg-muted"}`}
                  >
                    <span style={bodyStyle}>{c.name}</span>
                    {c.id === selected.id && <Check size={16} style={{ color: "var(--primary)" }} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Entity type chip */}
          <span
            className="shrink-0 px-[10px] py-[2px] rounded-[var(--radius-sm)]"
            style={{ ...chipTextStyle, border: "1px solid var(--foreground)", color: "var(--foreground)" }}
          >
            Holding Entity
          </span>

          {/* Risk badge */}
          <span
            className="shrink-0 px-[8px] py-[2px] rounded-[20px]"
            style={{ ...chipTextStyle, backgroundColor: "var(--destructive)", color: "var(--primary-foreground)" }}
          >
            High Risk
          </span>
        </div>

        {/* Download button */}
        <button
          className="flex items-center justify-center px-[16px] rounded-[var(--radius)] shrink-0 cursor-pointer border-0 hover:opacity-90 transition-opacity"
          style={{ height: 36, backgroundColor: "var(--primary)", ...buttonTextStyle, color: "var(--primary-foreground)" }}
        >
          Download Case Report
        </button>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-border pointer-events-none" />
    </div>
  );
}

/* ─── Main page ─── */
export default function CompanyDetailPage() {
  const [activeNavItem, setActiveNavItem] = useState("company-overview");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatically = useRef(false);

  /* ─── IntersectionObserver-based scrollspy ─── */
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    /* Map to store each section's intersection ratio */
    const ratioMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingProgrammatically.current) return;

        entries.forEach((entry) => {
          ratioMap.set(entry.target.id, entry.intersectionRatio);
        });

        /* Find the section with the highest intersection ratio */
        let bestId = "";
        let bestRatio = 0;

        /* Also track topmost visible section as fallback */
        let topmostId = "";
        let topmostTop = Infinity;

        for (const id of ALL_SECTION_IDS) {
          const el = container.querySelector(`#${id}`);
          if (!el) continue;

          const ratio = ratioMap.get(id) || 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }

          const rect = el.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const relativeTop = rect.top - containerRect.top;

          if (ratio > 0 && relativeTop < topmostTop) {
            topmostTop = relativeTop;
            topmostId = id;
          }
        }

        /* Use topmost visible if ratios are similar, otherwise use best ratio */
        const chosenId = topmostId || bestId;
        if (chosenId) {
          setActiveNavItem(chosenId);
        }
      },
      {
        root: container,
        rootMargin: "-10% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    /* Observe all section elements */
    ALL_SECTION_IDS.forEach((id) => {
      const el = container.querySelector(`#${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ─── Click-to-scroll handler ─── */
  const handleNavSelect = useCallback((id: string) => {
    setActiveNavItem(id);

    const container = scrollContainerRef.current;
    if (!container) return;

    const el = container.querySelector(`#${id}`);
    if (!el) return;

    /* Pause scrollspy while programmatic scrolling */
    isScrollingProgrammatically.current = true;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const scrollTop = container.scrollTop + (elRect.top - containerRect.top) - 16;

    container.scrollTo({ top: scrollTop, behavior: "smooth" });

    /* Re-enable scrollspy after animation settles */
    setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 800);
  }, []);

  return (
    <div className="bg-background flex flex-col w-full h-full" style={{ fontFamily: FONT }}>
      {/* Page header */}
      <CompanyHeader />

      {/* Body: sidebar + scrollable content */}
      <div className="flex flex-1 overflow-hidden">
        {/* In-page sidebar — sticky alongside content */}
        <div
          className="bg-card shrink-0 overflow-y-auto"
          style={{ borderRight: "1px solid var(--border)" }}
        >
          <div className="sticky top-0">
            <InPageSidebar activeItem={activeNavItem} onSelect={handleNavSelect} />
          </div>
        </div>

        {/* Main content — single scrollable container with ALL sections */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-[24px] py-[20px]"
          style={{ backgroundColor: "var(--background)", scrollBehavior: "smooth" }}
        >
          <div className="flex flex-col gap-[32px]" style={{ maxWidth: 960 }}>
            {/* Identity sections */}
            <CompanyOverviewSection />

            {/* Integrity sections */}
            <LegalHistorySection />
            <AMLSection />

            {/* Income sections */}
            <IncomeSection />

            {/* Bottom padding to allow last section to scroll to top */}
            <div style={{ minHeight: "50vh" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
