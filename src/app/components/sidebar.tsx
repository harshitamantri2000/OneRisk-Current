import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  ChevronUp,
  ChevronDown,
  BarChart3,
  Search,
  Briefcase,
  Home,
  Radar,
  PanelLeftClose,
} from "lucide-react";
import svgPaths from "../../imports/svg-93dpgui3w0";
import { FONT } from "./typography";

interface NavSubItem {
  label: string;
  route?: string;
}

interface NavSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  route?: string;
  children?: NavSubItem[];
}

const navSections: NavSection[] = [
  {
    id: "new-home",
    label: "New Home",
    icon: <Home size={20} />,
    route: "/new-home",
  },
  {
    id: "netscan",
    label: "Netscan",
    icon: <Radar size={20} />,
    route: "/netscan",
    children: [
      { label: "Case Overview", route: "/" },
      { label: "Large Network (20)", route: "/network-demo" },
    ],
  },
  {
    id: "risk-bundles",
    label: "Risk Bundles",
    icon: <BarChart3 size={20} />,
    children: [
      { label: "Entity Due Diligence", route: "/" },
      { label: "Individual Due Diligence", route: "/individual-risk" },
      { label: "BSA Summary", route: "/bsa" },
      { label: "Asset Due Diligence" },
    ],
  },
  {
    id: "terminal",
    label: "Terminal",
    icon: <Search size={20} />,
    children: [
      { label: "Court Check", route: "/crime-check" },
      { label: "VehiClear Check", route: "/vehiclear" },
      { label: "AML Check", route: "/aml-check" },
      { label: "Risk Triangulation", route: "/risk-triangulation" },
    ],
  },
  {
    id: "cases",
    label: "Cases",
    icon: <Briefcase size={20} />,
  },
];

/** Check if a route matches the current pathname */
function isRouteActive(route: string | undefined, pathname: string): boolean {
  if (!route) return false;
  if (route === "/") return pathname === "/";
  return pathname === route || pathname.startsWith(route + "/");
}

function IDfyLogo() {
  return (
    <div className="relative shrink-0" style={{ width: 32, height: 32 }}>
      <svg
        viewBox="0 0 34 34"
        fill="none"
        className="absolute block size-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* White circle background */}
        <ellipse cx="16.9646" cy="17" rx="16.9646" ry="17" fill="white" />
        {/* Red "id" mark from Figma-imported SVG paths */}
        <path d={svgPaths.p2a9ce700} fill="#CE1417" />
        <path d={svgPaths.p3cd9e980} fill="#CE1417" />
      </svg>
    </div>
  );
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "risk-bundles": true,
  });

  const toggleSection = useCallback((id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  return (
    <aside
      className={`
        bg-sidebar-dark flex flex-col shrink-0 h-screen sticky top-0 z-50
        transition-all duration-300 ease-in-out overflow-hidden border-0
        ${collapsed ? "w-[64px]" : "w-[248px]"}
      `}
    >
      {/* Logo area */}
      <div
        className="flex items-center border-0 border-b border-sidebar-divider"
        style={{
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "var(--sidebar-divider)",
          padding: collapsed ? "16px 0" : "16px 16px",
          justifyContent: collapsed ? "center" : "space-between",
        }}
      >
        {collapsed ? (
          /* Collapsed: just show logo icon, click to expand */
          <button
            onClick={toggleCollapse}
            className="flex items-center justify-center cursor-pointer border-0 bg-transparent p-0"
            aria-label="Expand sidebar"
          >
            <IDfyLogo />
          </button>
        ) : (
          <>
            <div className="flex items-center gap-[10px]">
              <IDfyLogo />
              <span
                className="text-primary-foreground tracking-[0.08px] whitespace-nowrap"
                style={{
                  fontWeight: "var(--font-weight-medium)",
                  fontSize: "var(--text-lg)",
                  lineHeight: 1.4,
                  fontFamily: FONT,
                }}
              >
                OneRisk
              </span>
            </div>
            <button
              onClick={toggleCollapse}
              className="shrink-0 p-[4px] rounded-[var(--radius-sm)] border-0 bg-transparent
                hover:bg-sidebar-active cursor-pointer transition-colors"
              aria-label="Collapse sidebar"
            >
              <PanelLeftClose size={18} className="text-icon-light opacity-70" />
            </button>
          </>
        )}
      </div>

      {/* Navigation sections */}
      <nav className="flex-1 flex flex-col gap-[2px] py-[12px] overflow-y-auto overflow-x-hidden">
        {navSections.map((section) => {
          const isOpen = openSections[section.id] ?? false;
          const hasChildren = section.children && section.children.length > 0;

          // Route-aware active states
          const isSectionDirectActive = isRouteActive(section.route, pathname);
          const hasActiveChild = hasChildren
            ? section.children!.some((c) => isRouteActive(c.route, pathname))
            : false;
          const isActive = isSectionDirectActive || hasActiveChild;

          return (
            <div key={section.id}>
              {/* Section header */}
              <button
                onClick={() => {
                  if (collapsed) {
                    setCollapsed(false);
                    if (hasChildren) {
                      setOpenSections((prev) => ({
                        ...prev,
                        [section.id]: true,
                      }));
                    }
                    // If section has a direct route, navigate after expanding
                    if (section.route) {
                      navigate(section.route);
                    }
                  } else if (hasChildren) {
                    toggleSection(section.id);
                  } else if (section.route) {
                    navigate(section.route);
                  }
                }}
                className={`
                  flex items-center w-full py-[10px] gap-[12px] cursor-pointer border-0 bg-transparent
                  transition-colors duration-150
                  ${collapsed ? "justify-center px-0" : "px-[16px]"}
                  ${isActive ? "bg-sidebar-active" : "hover:bg-sidebar-active/40"}
                `}
              >
                <span
                  className={`shrink-0 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-icon-light opacity-70"
                  }`}
                >
                  {section.icon}
                </span>
                {!collapsed && (
                  <>
                    <span
                      className={`flex-1 text-left truncate ${
                        isActive
                          ? "text-primary-foreground"
                          : "text-icon-light opacity-85"
                      }`}
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-medium)",
                        lineHeight: 1.4,
                      }}
                    >
                      {section.label}
                    </span>
                    {hasChildren && (
                      <span className="shrink-0 text-icon-light opacity-50">
                        {isOpen ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </>
                )}
              </button>

              {/* Submenu items */}
              {hasChildren && !collapsed && (
                <div
                  className={`
                    overflow-hidden transition-all duration-200 ease-in-out
                    ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {section.children!.map((child) => {
                    const isChildActive = isRouteActive(child.route, pathname);
                    return (
                      <button
                        key={child.label}
                        className={`
                          w-full flex items-center pl-[48px] pr-[16px] py-[8px] border-0 bg-transparent
                          transition-colors duration-150
                          ${child.route ? "cursor-pointer" : "cursor-default"}
                          ${
                            isChildActive
                              ? "text-primary-foreground"
                              : "text-icon-light/60 hover:text-icon-light hover:bg-sidebar-active/30"
                          }
                        `}
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: isChildActive
                            ? "var(--font-weight-medium)"
                            : "var(--font-weight-normal)",
                          lineHeight: 1.4,
                          backgroundColor: isChildActive
                            ? "rgba(255,255,255,0.08)"
                            : undefined,
                        }}
                        onClick={() => {
                          if (child.route) {
                            navigate(child.route);
                          }
                        }}
                      >
                        <span className="truncate">{child.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}