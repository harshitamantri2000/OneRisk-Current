import re

with open("src/app/pages/risk-triangulation-page.tsx", "r") as f:
    content = f.read()

replacements = {
    # Primaries
    "#2563EB": "#1766D6",
    "#1D4ED8": "#104EB8",
    "#3B82F6": "#1766D6",
    "#EFF6FF": "#1766D614", # 8% opacity roughly
    "blue-500": "[#1766D6]",
    "blue-600": "[#104EB8]",
    "blue-700": "[#104EB8]",
    "bg-blue-50": "bg-[#1766D614]",
    "bg-blue-100": "bg-[#1766D61F]",

    # Neutrals
    "#0F172A": "#131A25",
    "#334155": "#131A25", # Just fold to 900
    "#475569": "#131A25",
    "#94A3B8": "#BFC2C4",
    "#64748B": "#BFC2C4",
    "#F8FAFC": "#FAFAFB",
    "#E2E8F0": "#ECEDED",
    "#F1F5F9": "#ECEDED",
    "#CBD5E1": "#BFC2C4",
    "slate-50": "[#FAFAFB]",
    "slate-100": "[#ECEDED]",

    # Destructive
    "#DC2626": "#E23318",
    "#991B1B": "#C21B11",
    "#B91C1C": "#A20C0F",
    "#7F1D1D": "#6C0417",
    "#FEF2F2": "#FCC3A1",
    "#FEE2E2": "#FCC3A1",
    "red-500": "[#E23318]",
    "red-600": "[#C21B11]",
    "red-700": "[#A20C0F]",
    "bg-red-50": "bg-[#FCC3A133]",
    "border-red-200": "border-[#FCC3A1]",
    "bg-red-100": "bg-[#FCC3A1]",

    # Warning
    "#D97706": "#CB7100",
    "#78350F": "#AA5800",
    "#FFFBEB": "#FEF2CB",
    "#FEF3C7": "#F9C963",
    "amber-500": "[#CB7100]",
    "amber-600": "[#CB7100]",
    "amber-700": "[#AA5800]",

    # Success
    "#16A34A": "#4CAF47",
    "#15803D": "#1A7A1E",
    "#166534": "#043A1A",
    "#14532D": "#043A1A",
    "#F0FDF4": "#E9FCE5",
    "#DCFCE7": "#B6F1A5",
    "green-500": "[#4CAF47]",
    "green-600": "[#1A7A1E]",
    "bg-green-50": "bg-[#E9FCE5]",
    "bg-green-100": "bg-[#B6F1A5]",
    "bg-green-200": "bg-[#B6F1A5]",
    "border-green-200": "border-[#B6F1A5]",
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open("src/app/pages/risk-triangulation-page.tsx", "w") as f:
    f.write(content)

print("done")
