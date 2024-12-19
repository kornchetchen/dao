import { Calendar, Home, Inbox, Settings, UserPen, Vote } from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
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
    // [#0C0D15] w-[300] h-[1036]
    <div className="bg-red ">
      {/* //bg-[#0C0D15] */}
    <div className="  w-[300px] h-[1036px] bg-green-300  object-left ">
      {items.map((item) => (
          <SidebarMenuButton
            asChild
            // bg-transparent text-[16px
            className=" flex justify-center items-center w-[300] h-[64] bg-#0C0D15 text-[#ABAFB4] ] text"
          >
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>

      ))}
    </div>
    </div>
  );
}
