// "use client";
import Link from "next/link";
// import { CSSProperties } from "react";
export default function Home() {
  return (
    <div className="   flex justify-center items-center h-screen bg-[#000000] ">
      <div className="">
        <h1 className="text-[24px] text-[#FFFFFF] ">FFORWARD</h1>
        <h1 className="text-[#ABAFB4]">
        To be continued
          <Link className="text-[#146EF5] space-x-2" href={"/"}>
            Learnmore{" "}
          </Link>
        </h1>
      </div>
    </div>


// // function Component() {
// //   return (
//     <div
//       style={
//         {
//           "--background": "30 41 59",
//           "--highlight": "255 255 255",

//           "--bg-color":
//             "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
//           "--border-color": `linear-gradient(145deg,
//             rgb(var(--highlight)) 0%,
//             rgb(var(--highlight) / 0.3) 33.33%,
//             rgb(var(--highlight) / 0.14) 66.67%,
//             rgb(var(--highlight) / 0.1) 100%)
//           `,
//         } as CSSProperties
//       }
//       className="flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
//       [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
//     >
//       <p className="text-xl font-medium text-white">Hello, gradient</p>
//     </div>
//   );
// }
  );
}
