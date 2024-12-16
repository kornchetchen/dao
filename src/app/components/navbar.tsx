"use client";
import Link from "next/link";
import { useState } from "react";
import { BellDot } from "lucide-react";
import Dropdown from "./ProfileDropdown";
import { Button } from "@/components/ui/button";
import NotificationDropdown from "./NotificationDropdown";
import Portfolio from "./Portfolio";




const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    return (


      
<nav className="fixed w-full h-24 bg-blackblack  flex justify-around items-center text-white px-4">
  <div className="flex items-center space-x-32">
<Link href="/">
    <img src="/logo.svg" alt="logo" className=" h-20 w-20 space-x-1" />
    </Link>
    <div className="text-2xl ml-4 text-whitewhite ">Launchpad    

  </div>

<div className="flex items-center justify-around space-x-8 mx-52">
<Link  href="/">
<Portfolio></Portfolio>
</Link>
<NotificationDropdown></NotificationDropdown>

    <div>
<Dropdown></Dropdown>
    </div>

    
  </div>
</div>
</nav>
    )
}

export default Navbar;