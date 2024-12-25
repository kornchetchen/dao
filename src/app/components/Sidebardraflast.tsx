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
//     SidebarMenuButton,
//   } from "@/components/ui/sidebar";
  
//   // import Link from "next/link";
  
//   import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
  
//   // Menu items.
//   const items = [
//     {
//       Name: "Dashbord",
//       title: "Dashboard",
//       url: "/dashbord",
//       icon: Home,
//       ChevronUp,
//       // ChevronUp: <ChevronUp />,
//     },
//     {
//       Name: "Profile",
//       title: "Profile",
//       url: "/profile",
//     },
  
//     {
//       Name: "Protfolio",
//       title: "Protfolio",
//       url: "/portfolio",
//     },
//     {
//       Name: "Transactions",
//       title: "Transactions",
//       url: "/transactions",
//       icon: ArrowRightLeft,
//     },
//     {
//       Name: "Daovoting",
//       title: "DAO Voting",
//       url: "/daovoting",
//       icon: Vote,
//     },
//     {
//       Name: "Settings",
//       title: "Settings",
//       url: "/settings",
//       icon: Settings,
//     },
//   ];
  
//   export function Sidebars() {
//     return (
//       <div className="h-screen bg-[#0C0D15] w-[300] object-left">
//         {items.map((item) => (
//           <Collapsible defaultOpen key={item.title}>
//             <SidebarMenuButton
//               asChild
//               className="flex justify-center items-center h-[64] bg-#0C0D15 text-[#ABAFB4]"
//             >
//               <div>
//                 {/* {item.icon && <item.icon />} */}
//                 {/* <span>{item.Name}</span> */}
//                 {/* {item.title === "Dashboard" || item.title === "Transactions" ? ( */}
//                 {/* <CollapsibleTrigger asChild>
//                   <Button variant="ghost" size="sm">
//                     <ChevronDown className="ml-auto " />
//                   </Button>
//                 </CollapsibleTrigger> */}
  
//                 <CollapsibleContent className="space-y-2">
//                   {/* rounded-md border px-4 py-2 font-mono text-sm shadow-sm */}
//                   {/* <div> */}
//                   {/* <div className="flex shrink">
//                     Profile
//                   </div>
//                   <div className="">
//                    Protfolio
//                   </div>
//                   </div> */}
//                   <Collapsible>
//                     <CollapsibleTrigger>
//                     Dashbord
//                     </CollapsibleTrigger>
//                     <CollapsibleContent>
//                       A
//                     </CollapsibleContent>
//                   </Collapsible>
  
//                   <CollapsibleContent>
//                     {/* <SidebarGroupContent /> */}
//                   </CollapsibleContent>
//                 </CollapsibleContent>
//               </div>
//             </SidebarMenuButton>
//           </Collapsible>
//         ))}
//       </div>
//     );
//   }
  