import { Bell, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="h-16 border-b border-gray-800 flex items-center justify-end px-6 gap-4">
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
      </Button>
    </header>
  )
}
