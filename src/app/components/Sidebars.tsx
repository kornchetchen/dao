import {
  ArrowRightLeft,
  ChevronDown,
  Home,
  Settings,
  Vote,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Menu items.

const items = [
  {
    name: "Dashboard",
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    items: [
      {
        name: "Profile",
        title: "Profile",
        url: "/profile",
      },
      {
        name: "Portfolio",
        title: "Portfolio",
        url: "/portfolio",
      },
    ],
  },
  {
    name: "Transactions",
    title: "Transactions",
    url: "/transactions",
    icon: ArrowRightLeft,
  },
  {
    name: "Daovoting",
    title: "DAO Voting",
    url: "/daovoting",
    icon: Vote,
  },
  {
    name: "Settings",
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function Sidebars() {
  return (
    <div className="h-screen bg-[#0C0D15] w-[300] object-left">
      {items.map((item) => (
        <Collapsible defaultOpen key={item.title}>
          <SidebarMenuButton
            asChild
            className="flex justify-center items-center h-[64] bg-#0C0D15 text-[#ABAFB4]"
          >
            <div>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              {item.title === "Dashboard" || item.title === "Transactions" ? (
                <CollapsibleTrigger>
                  <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                      <SidebarGroupLabel asChild>
                        <SidebarGroupLabel>A</SidebarGroupLabel>
                        <CollapsibleTrigger>
                          <ChevronDown className=" text-[#ABAFB4] ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarGroupContent />
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                </CollapsibleTrigger>
              ) : null}
              <CollapsibleContent>
                <SidebarGroupContent />
              </CollapsibleContent>
            </div>
          </SidebarMenuButton>
        </Collapsible>
      ))}{" "}
    </div>
  );
}
