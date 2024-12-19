"use client";

import Link from "next/link";
import Dropdown from "./ProfileDropdown";
import NotificationDropdown from "./NotificationDropdown";
import Portfolio from "./Portfolio";
import Image from "next/image";

const Navbar = () => {
  // const MobileNav({open ,setOpen })

  return (
    //
    <nav className="fixed top-0 left-0 w-full h-[74px] bg-[#0C0D15] flex justify-between items-center text-white px-6">
      <div className="flex justify-center ml-16">
        <Link href="/">
          <Image
            src="/FFORWARD-white 2.png"
            width={123.6}
            height={23}
            alt="Logo"
          />
        </Link>
        <div className="flex items-center space-x-4 mx-16">
          <Link href="/">Launchpad </Link>
        </div>
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
