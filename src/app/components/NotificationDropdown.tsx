import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function NotificationDropdown() {

return(
    <DropdownMenu>
    <DropdownMenuTrigger>  
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-line="round" strokeLinejoin="round" className="lucide lucide-bell-dot"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"/><circle cx="18" cy="8" r="3"/></svg>
          </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuLabel>Notification</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>one</DropdownMenuItem>
    <DropdownMenuItem>two</DropdownMenuItem>
    <DropdownMenuItem>three</DropdownMenuItem>
    <DropdownMenuItem>fourth</DropdownMenuItem>



    </DropdownMenuContent>
</DropdownMenu>
)
}