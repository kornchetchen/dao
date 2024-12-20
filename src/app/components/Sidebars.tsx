import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Settings,
  UserPen,
  Vote,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    ChevronUp: <ChevronUp />,
  },
  {
    title: "Profile",
    url: "/",
    icon: UserPen,
  },
  {
    title: "Settings",
    url: "/",
    icon: Settings,
  },
  {
    title: "DAO Voting",
    url: "/",
    icon: Vote,
  },
];

export function Sidebars() {
  return (
    <div className=" h-screen bg-[#0C0D15]   w-[300] object-left  ">
      {items.map((item) => (
        <SidebarMenuButton
          asChild
          className=" flex justify-center items-center h-[64] bg-#0C0D15 text-[#ABAFB4] "
        >
          <a href={item.url}>
            <item.icon />

            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      ))}
    </div>
  );
}
