"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  Settings,
  SquareTerminal,
  Vote,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

const items = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Portfolio",
          url: "#",
        },
      ],
    },
    {
      title: "Transactions",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "one",
          url: "#",
        },
        {
          title: "two",
          url: "#",
        },
        {
          title: "three",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "DAO Voting",
      url: "#",
      icon: Vote,
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="bg-blueblue ">
        <NavMain items={items.navMain} />
        <NavProjects projects={items.projects} />
      </SidebarContent>
    </Sidebar>
  );
}
