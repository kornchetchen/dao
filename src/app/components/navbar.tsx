"use client";

import Link from "next/link";
import Dropdown from "./ProfileDropdown";
import NotificationDropdown from "./NotificationDropdown";
import Image from "next/image";

const Navbar = () => {
  // const MobileNav({open ,setOpen })

  return (
    <nav className=" h-[70] bg-[#0C0D15] flex justify-between items-center text-white px-6 pl-[60] object-top border-b-[1px] border-[#1c2424]">
      <div className="flex justify-center ">
        <Link href="/">
          <Image
            src="/FFORWARD-white 2.png"
            width={123.6}
            height={23}
            alt="Logo"
          />
        </Link>
        <div className="flex justify-center  mx-[90] ">
          <Link href="/" className="text-[14px] text-[#FFFFFF]">
            Launchpad{" "}
          </Link>
          <div className="ml-3px">
            <div className="flex justify-center items-center text-10px text-[#146EF5] rounded-full  bg-[#146EF547]  w-[78px] h-[24px]   ">
              Comming soon
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center  mx-[60] space-x-35">
        {/* <Portfolio /> */}

        <Link href="/">
          <Image
            src="/Deposit.png"
            width={122}
            height={40}
            alt="Logo"
          />
        </Link>
        <NotificationDropdown />
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
