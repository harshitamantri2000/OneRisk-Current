import re

with open("src/app/pages/risk-triangulation-page.tsx", "r") as f:
    content = f.read()

replacements = {
    # Remove all shadows
    "shadow-sm": "",
    "hover:shadow-md": "",
    "shadow-md": "",
    
    # Force pure white backgrounds on main layouts instead of off-white
    "bg-[#FAFAFB]": "bg-white",
    
    # Soften borders
    "border-[#E2E8F0]": "border-[#ECEDED]", # Fallback if any tailwind color was missed
    
    # The ResultsView main wrapper
    'className="flex flex-col w-full h-[100vh] bg-[#FAFAFB]"': 'className="flex flex-col w-full h-[100vh] bg-white"',
    
    # Let's completely nuke the heavy header backgrounds on the alerts to make them purely typographic/minimal
    'className="px-[20px] py-[14px] border-b flex items-center justify-between" style={{ backgroundColor: "#FCC3A1", borderColor: "#FCC3A1" }}': 'className="px-[20px] py-[14px] border-b border-[#ECEDED] flex items-center justify-between"',
    'style={{ backgroundColor: "#FCC3A1", borderColor: "#FCC3A1" }}': 'style={{ backgroundColor: "transparent", borderColor: "#ECEDED" }}',
    
    'style={{ backgroundColor: "#FEF2CB", borderColor: "#F9C963" }}': 'style={{ backgroundColor: "transparent", borderColor: "#ECEDED" }}',
    'style={{ backgroundColor: "#E9FCE5", borderColor: "#B6F1A5" }}': 'style={{ backgroundColor: "transparent", borderColor: "#ECEDED" }}',

    # Clean up the Right Sidebar boxes
    'className="bg-white border border-[#ECEDED] rounded-[8px] p-[24px]  flex flex-col gap-[20px]"': 'className="bg-white border border-[#ECEDED] rounded-[12px] p-[24px] flex flex-col gap-[20px]"',
    
    # Strip unnecessary background fills from individual stats blocks, moving to borders only
    'style={{ backgroundColor: "#FAFAFB", borderColor: "#ECEDED" }}': 'style={{ backgroundColor: "transparent", borderColor: "#ECEDED" }}',
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Ensure ResultsView has white background
content = re.sub(r'bg-\[#[A-F0-9]{6}\] flex items-center justify-between px-\[24px\] h-\[56px\]', r'bg-white border-b border-[#ECEDED] flex items-center justify-between px-[24px] h-[56px]', content)


with open("src/app/pages/risk-triangulation-page.tsx", "w") as f:
    f.write(content)

print("done")
