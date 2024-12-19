import Link from "next/link";
import Image from "next/image";
export function FooterDown() {
  return (
    // 300.02 bg-[#000000]
// 1140 241
//py-57  ps-[35] pt-[57]
    <footer className=" w-[1140] h-[241]  bg-[#000000] pr-[60] text-white  ">
      <div className="w-full h-px max-w-6xl mx-auto my-1 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent"></div>
 
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

        <div className=" flex justify-between mt-[11]  ">
          <div>FFORWARD is a modular platform for Real-world assets(RWAs)</div>
          <div className="">
            <div className="text-[#ABAFB4]">hello@finstable.co.th</div>
          </div>
        </div>

        {/* level 3 */}

        <div className="flex justify-between ">
          designed to bring any real-world asset onchain.
        </div>

        <div>
          {/* level 4 */}
          <div className="flex justify-between  text-center  text-sm pb-[24] pt-[61] ">
            <div className="text-[#ABAFB4]">
              @2024 FFORWARD. All rights reserved.
            </div>
            <div className="flex space-x-24">
              <Link href="/service">Term of Service </Link>
              <Link href="/amlcft">AML/CFT</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>

    </footer>
  );
}
