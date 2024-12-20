import { ChevronUp, Home, Vote } from "lucide-react";

import { SidebarMenuButton } from "@/components/ui/sidebar";

import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashbord",
    icon: Home, ChevronUp
    // ChevronUp: <ChevronUp />,
  },
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Settings",
    url: "/settings",
  },
  {
    title: "DAO Voting",
    url: "/daovoting",
    icon: Vote,
  },
];

export function Sidebars() {
  return (
    <div className=" h-screen bg-[#0C0D15]   w-[300] object-left  ">
      {items.map((item) => (
        <SidebarMenuButton
          key={item.title}
          asChild
          className=" flex justify-center items-center h-[64] bg-#0C0D15 text-[#ABAFB4] "
        >
          <Link href={item.url}>
          {item.icon && <item.icon />}

            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      ))}
    </div>
  );
}
