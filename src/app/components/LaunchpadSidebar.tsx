'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Rocket, BarChart2, Users, Settings, Menu } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

const sidebarItems = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart2 },
  { name: 'Projects', href: '/projects', icon: Rocket },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function LaunchpadSidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar className="border-r-0 bg-black text-white">
        <SidebarHeader className="h-[74px] px-6">
          <SidebarTrigger asChild>
            <button className="flex h-full items-center">
              <Menu className="h-6 w-6" />
            </button>
          </SidebarTrigger>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href} className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <p className="text-xs text-gray-400">© 2023 Launchpad</p>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
