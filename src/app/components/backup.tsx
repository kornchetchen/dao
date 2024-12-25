// import {
//     ArrowRightLeft,
//     ChevronDown,
//     ChevronUp,
//     Home,
//     Settings,
//     Vote,
//   } from "lucide-react";
  
//   import {
//     SidebarGroupContent,
//     SidebarGroupLabel,
//     SidebarMenuButton,
//   } from "@/components/ui/sidebar";
  
//   // import Link from "next/link";
//   import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
//   import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
  
//   // Menu items.
//   const items = [
//     {
//       title: "Dashboard",
//       url: "/dashbord",
//       icon: Home,
//       ChevronUp,
//       // ChevronUp: <ChevronUp />,
//     },
//     {
//       title: "Profile",
//       url: "/profile",
//     },
  
//     {
//       title: "Protfolio",
//       url: "/portfolio",
//     },
//     {
//       title: "Transactions",
//       url: "/transactions",
//       icon: ArrowRightLeft,
//     },
//     {
//       title: "DAO Voting",
//       url: "/daovoting",
//       icon: Vote,
//     },
//     {
//       title: "Settings",
//       url: "/settings",
//       icon: Settings,
//     },
//   ];
//   // Icons="arrow-right-left";
  
//   export function Sidebars() {
//     return (
//       <div className="h-screen bg-[#0C0D15] w-[300] object-left ">
//         {items.map((item) => (
//           <Collapsible defaultOpen key={item.title}>
//             <SidebarMenuButton
//               asChild
//               className="flex justify-around items-center h-[64] bg-#0C0D15 text-[#ABAFB4] text-[16px]"
//             >
//                                         <SidebarGroupLabel>a</SidebarGroupLabel>
//                                         <SidebarGroupLabel>b</SidebarGroupLabel>
//               {/* Dashvord space 83 with button */}
//               <div className=" ">
//                 <div className="flex items-center">
//                   <div className="">{item.icon && <item.icon />}</div>
//                   <span className="ml-[10px]">{item.title}</span>
//                   <div className="  ">
//                     <div></div>
  
//                     <div
//                       className={`${
//                         item.title === "Dashboard"
//                           ? "ml-[83px]"
//                           : item.title === "Transactions"
//                           ? "ml-[67px]"
//                           : ""
//                       }`}
//                     >
//                       {item.title !== "Profile" &&
//                         item.title !== "Protfolio" &&
//                         item.title !== "DAO Voting" &&
//                         item.title !== "Settings" && (
//                           <SidebarGroupLabel asChild>
//                             <CollapsibleTrigger className="bg-white ">
//                               <ChevronDown />
//                             </CollapsibleTrigger>
//                           </SidebarGroupLabel>
//                         )}
//                     </div>
//                   </div>
//                   <CollapsibleContent>
//                     <SidebarGroupContent />
//                   </CollapsibleContent>
//                 </div>
//               </div>
//             </SidebarMenuButton>
//           </Collapsible>
//         ))}
//       </div>
  
//     );
//   }
  