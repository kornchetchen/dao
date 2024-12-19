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
    <nav className=" h-[70] bg-[#0C0D15] flex justify-between items-center text-white px-6 pl-[60] object-top">
      <div className="flex justify-center ">
        <Link href="/">
          <Image
            src="/FFORWARD-white 2.png"
            width={123.6}
            height={23}
            alt="Logo"
          />
        </Link>
        <div className="flex items-center space-x-4 mx-[90] ">
          <Link href="/" className="text-[14px]">
            Launchpad{" "}
          </Link>
          {/* w-[78] h-[24]  */}
          <Link href="/" className="text-[10px]  bg-[#146EF547] ">
            Comming soon{" "}
          </Link>
        </div>
      </div>

      <div className="flex items-center  mx-[60] space-x-35">
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
