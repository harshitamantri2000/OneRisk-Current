import { useState, useRef, useEffect } from "react";
import { Bell, HelpCircle, ChevronDown, User, LogOut, Settings } from "lucide-react";
import { FONT } from "./typography";

function NotificationBell() {
  return (
    <div className="relative shrink-0 cursor-pointer">
      <Bell size={22} className="text-icon-light opacity-85" />
      <div className="absolute -top-[2px] -right-[2px] size-[9px]">
        <svg viewBox="0 0 9 9" fill="none" className="block size-full">
          <circle
            cx="4.5"
            cy="4.5"
            r="4"
            fill="var(--warning)"
            stroke="var(--sidebar-dark)"
          />
        </svg>
      </div>
    </div>
  );
}

function HelpIcon() {
  return (
    <HelpCircle
      size={22}
      className="text-icon-light opacity-85 cursor-pointer hover:opacity-100 transition-opacity"
    />
  );
}

function UserAvatar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-[12px] px-[12px] py-[6px] rounded-[31.5px] cursor-pointer border-0
        bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
      >
        <div className="bg-avatar-bg flex items-center justify-center rounded-full size-[32px]">
          <User size={18} className="text-foreground" />
        </div>
        <ChevronDown
          size={18}
          className={`text-icon-light opacity-85 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[200px] rounded-[var(--radius)] bg-card border border-border shadow-[0px_8px_24px_rgba(0,0,0,0.12)]"
          style={{
            fontFamily: FONT,
          }}
        >
          {/* User info */}
          <div
            className="px-[16px] py-[12px] border-b border-border"
          >
            <p
              className="text-foreground truncate"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
                lineHeight: 1.4,
              }}
            >
              Raj Kumar Sharma
            </p>
            <p
              className="text-muted-foreground truncate mt-[2px]"
              style={{
                fontSize: "var(--text-sm)",
                lineHeight: 1.3,
              }}
            >
              raj.sharma@nexagen.in
            </p>
          </div>

          {/* Menu items */}
          <div className="py-[4px]">
            <button
              className="flex items-center gap-[10px] w-full px-[16px] py-[10px] border-0 bg-transparent
                text-foreground hover:bg-muted cursor-pointer transition-colors"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
                lineHeight: 1.4,
              }}
            >
              <Settings size={16} className="text-muted-foreground shrink-0" />
              <span>Settings</span>
            </button>
            <button
              className="flex items-center gap-[10px] w-full px-[16px] py-[10px] border-0 bg-transparent
                text-destructive hover:bg-muted cursor-pointer transition-colors"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
                lineHeight: 1.4,
              }}
            >
              <LogOut size={16} className="shrink-0" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function TopBar() {
  return (
    <header
      className="bg-sidebar-dark w-full shrink-0 border-0 shadow-[0px_4px_12px_0px_rgba(19,26,37,0.08)]"
      style={{ height: "56px" }}
    >
      <div className="flex items-center justify-end h-full px-[24px] gap-[16px]">
        <HelpIcon />
        <NotificationBell />
        <UserAvatar />
      </div>
    </header>
  );
}