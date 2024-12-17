"use client";
import Link from "next/link";
import { useState } from "react";
import { BellDot } from "lucide-react";
import Dropdown from "./ProfileDropdown";
import { Button } from "@/components/ui/button";
import NotificationDropdown from "./NotificationDropdown";
import Portfolio from "./Portfolio";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[74px] bg-blackblack flex justify-between items-center text-white px-6">
      <Link href="/">
        <Image
          src="/FFORWARD-white 2.png"
          width={123.6}
          height={23}
          alt="Logo"
          className="mx-16"
        />
      </Link> 
           
      <div className="text-2xl ml-4 text-whitewhite flex  space-x-6 absolute left-1/2 ">
        {" "}
        <Link href="/">Launchpad </Link>
      </div>

      
        <div className="flex items-center space-x-4 mx-16 ">
          <Link href="/">
            <Portfolio />
          </Link>
          <NotificationDropdown />
          <Dropdown />
        </div>
      
    </nav>
  );
};

export default Navbar;