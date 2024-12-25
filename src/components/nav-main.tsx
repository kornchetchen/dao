"use client";

import { type LucideIcon } from "lucide-react";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup className="bg-Tertiary w-[300] h-[64]">
      <SidebarMenu className="bg-Warning w-[300] h-[64]">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem className="  text-[#ABAFB4]  items-center   ">
              <CollapsibleContent className="bg-purple-500">
                <SidebarMenuSub className="bg-sky-500">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem
                      className="bg-green-700"
                      key={subItem.title}
                    >
                      <SidebarMenuSubButton
                        className="  bg-yellow-300 w-[300] h-[64] text-[#ABAFB4]"
                        asChild
                      >
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
