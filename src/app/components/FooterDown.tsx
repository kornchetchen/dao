import Link from "next/link";
import Image from "next/image";
export function FooterDown() {
  return (
    <footer className=" py-57 ps-[35] bg-[#000000] pt-[57] pr-[60] text-white">
      {/* lelvel 1 */}
      <div className="  flex justify-between">
        <Link href="/">
          <Image
            src="/FFORWARD-white 2.png"
            width={165}
            height={31}
            alt="Logo"
          />
        </Link>
        <div className="flex space-x-4 ">
          <Image src="/Social.png" width={123.6} height={23} alt="Logo" />
        </div>
      </div>

      {/* level 2 */}
      <div className=" flex justify-between  py-[11]  ">
        <div>FFORWARD is a modular platform for Real-world assets(RWAs)</div>
        <div className="mt-[16]">
        <div>hello@finstable.co.th</div>
        </div>
      </div>

      {/* level 3 */}

      <div className="flex justify-between ">
        designed to bring any real-world asset onchain.
      </div>

      <div>
        {/* level 4 */}
        <div className="flex justify-between  text-center text-sm pb-[24] pt-[61] ">
          @2024 FFORWARD. All rights reserved.
          <div className="flex space-x-4">
            <div>Term of Service </div>
            <div>AML/CFT</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}
