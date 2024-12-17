"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, User, Briefcase, Settings, Vote } from 'lucide-react'

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "DAO Voting", href: "/dao-voting", icon: Vote },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-950 border-r border-gray-800">
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">FFORWARD</span>
        </Link>
      </div>
      <nav className="space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-lg",
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

