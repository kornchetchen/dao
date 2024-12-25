// import {
//   ArrowRightLeft,
//   ChevronDown,
//   ChevronUp,
//   Home,
//   Settings,
//   Vote,
// } from "lucide-react";

// import {
//   SidebarGroupContent,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar";

// // import Link from "next/link";
// import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
// import { CollapsibleTrigger } from "@radix-ui/react-collapsible";

// // Menu items.
// const items = [
//   {
//     title: "Dashboard",
//     url: "/dashbord",
//     icon: Home,
//     ChevronUp,
//     // ChevronUp: <ChevronUp />,
//   },
//   {
//     title: "Profile",
//     url: "/profile",
//   },

//   {
//     title: "Protfolio",
//     url: "/portfolio",
//   },
//   {
//     title: "Transactions",
//     url: "/transactions",
//     icon: ArrowRightLeft,
//   },
//   {
//     title: "DAO Voting",
//     url: "/daovoting",
//     icon: Vote,
//   },
//   {
//     title: "Settings",
//     url: "/settings",
//     icon: Settings,
//   },
// ];
// // Icons="arrow-right-left";


 //###################################### version one ###########################################################
// export function Sidebars() {
//   return (
//     <div className="h-screen bg-[#0C0D15] w-[300] object-left">
//       {items.map((item) => (
//         <Collapsible defaultOpen key={item.title}>
//           <SidebarMenuButton
//             asChild
//             className="flex justify-center items-center h-[64] bg-#0C0D15 text-[#ABAFB4]"
//           >
//             <div>

//               {item.icon && <item.icon />}
//               <span>{item.title}</span>
//               {item.title === "Dashboard" || item.title === "Transactions" ? (
//                 <CollapsibleTrigger>
//                   <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
//                 </CollapsibleTrigger>
//               ) : null}
//               <CollapsibleContent>
//                 <SidebarGroupContent />
//               </CollapsibleContent>
//             </div>
//           </SidebarMenuButton>
//         </Collapsible>
//       ))}
//     </div>
//   );
// }

//############################# version two ##############################

// <div className="h-screen bg-[#0C0D15] w-[300] object-left ">
// {items.map((item) => (
//   <Collapsible defaultOpen key={item.title}>
//     <SidebarMenuButton
//       asChild
//       className="flex justify-around items-center h-[64] bg-#0C0D15 text-[#ABAFB4] text-[16px]"
//     >

//       {/* Dashvord space 83 with button */}
//       <div className=" ">
//         <div className="flex items-center">
//           <div className="">{item.icon && <item.icon />}</div>
//           <span className="ml-[10px]">{item.title}</span>
//           <div className="  ">
//             <div></div>

//             <div
//               className={`${
//                 item.title === "Dashboard"
//                   ? "ml-[83px]"
//                   : item.title === "Transactions"
//                   ? "ml-[67px]"
//                   : ""
//               }`}
//             >
//                   <SidebarGroupLabel asChild>
//                     <CollapsibleTrigger>
//                       <ChevronDown />
//                     </CollapsibleTrigger>
//                   </SidebarGroupLabel>
//                 )}
//             </div>
//           </div>
//           <CollapsibleContent>
//             <SidebarGroupContent />
//           </CollapsibleContent>
//         </div>
//       </div>
//     </SidebarMenuButton>
//   </Collapsible>
// ))}
// </div>


//############################# version three ##############################

{/* <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild className="flex justify-center items-center h-[64] bg-#0C0D15 text-[#ABAFB4]">
            <CollapsibleTrigger>
              <SidebarMenu>
                {items.map((items) => (
                  <SidebarMenuItem key={items.title}>
                    <SidebarMenuButton asChild>
                      <a href={items.url}>
                        {items.icon && <items.icon />}
                        <span>{items.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent />
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>  */}


      // ############################## version four ##############################

    //   <div className="h-screen bg-[#0C0D15] w-[300] object-left">
    //      <Sidebar collapsible="icon" {...props}>
    //   <SidebarHeader>
    //     <TeamSwitcher teams={items.teams} />
    //   </SidebarHeader>
    //   <SidebarContent>
    //     <NavMain items={items.navMain} />
    //     <NavProjects projects={data.projects} />
    //   </SidebarContent>
    //   <SidebarFooter>
    //     <NavUser user={items.} />
    //   </SidebarFooter>
    //   <SidebarRail />
    // </Sidebar>
    // </div>

    // ############################## version five ##############################
    // const data = {
    //     user: {
    //       name: "shadcn",
    //       email: "m@example.com",
    //       avatar: "/avatars/shadcn.jpg",
    //     },
    //     teams: [
    //       {
    //         name: "Acme Inc",
    //         logo: GalleryVerticalEnd,
    //         plan: "Enterprise",
    //       },
    //       {
    //         name: "Acme Corp.",
    //         logo: AudioWaveform,
    //         plan: "Startup",
    //       },
    //       {
    //         name: "Evil Corp.",
    //         logo: Command,
    //         plan: "Free",
    //       },
    //     ],
    //     navMain: [
    //       {
    //         title: "Playground",
    //         url: "#",
    //         icon: SquareTerminal,
    //         isActive: true,
    //         items: [
    //           {
    //             title: "History",
    //             url: "#",
    //           },
    //           {
    //             title: "Starred",
    //             url: "#",
    //           },
    //           {
    //             title: "Settings",
    //             url: "#",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Models",
    //         url: "#",
    //         icon: Bot,
    //         items: [
    //           {
    //             title: "Genesis",
    //             url: "#",
    //           },
    //           {
    //             title: "Explorer",
    //             url: "#",
    //           },
    //           {
    //             title: "Quantum",
    //             url: "#",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Documentation",
    //         url: "#",
    //         icon: BookOpen,
    //         items: [
    //           {
    //             title: "Introduction",
    //             url: "#",
    //           },
    //           {
    //             title: "Get Started",
    //             url: "#",
    //           },
    //           {
    //             title: "Tutorials",
    //             url: "#",
    //           },
    //           {
    //             title: "Changelog",
    //             url: "#",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Settings",
    //         url: "#",
    //         icon: Settings2,
    //         items: [
    //           {
    //             title: "General",
    //             url: "#",
    //           },
    //           {
    //             title: "Team",
    //             url: "#",
    //           },
    //           {
    //             title: "Billing",
    //             url: "#",
    //           },
    //           {
    //             title: "Limits",
    //             url: "#",
    //           },
    //         ],
    //       },
    //     ],
    //     projects: [
    //       {
    //         name: "Design Engineering",
    //         url: "#",
    //         icon: Frame,
    //       },
    //       {
    //         name: "Sales & Marketing",
    //         url: "#",
    //         icon: PieChart,
    //       },
    //       {
    //         name: "Travel",
    //         url: "#",
    //         icon: Map,
    //       },
    //     ],
    //   }


    // last ver     
//     "use client";

// import * as React from "react";
// import {
//   ArrowRightLeft,
//   AudioWaveform,
//   Bot,
//   Command,
//   GalleryVerticalEnd,
//   Settings,
//   Settings2,
//   SquareTerminal,
//   Vote,
// } from "lucide-react";

// import { NavMain } from "@/components/nav-main";

// import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarRail,
// } from "@/components/ui/sidebar";

// // This is sample data.
// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "Acme Inc",
//       logo: GalleryVerticalEnd,
//       plan: "Enterprise",
//     },
//     {
//       name: "Acme Corp.",
//       logo: AudioWaveform,
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: Command,
//       plan: "Free",
//     },
//   ],
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "#",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: "Profile",
//           url: "#",
//         },
//         {
//           title: "Portfolio",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Transactions",
//       url: "#",
//       icon: ArrowRightLeft,

//       items: [
//         {
//           title: "one",
//           url: "#",
//         },
//         {
//           title: "two",
//           url: "#",
//         },
//         {
//           title: "three",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "DAO Voting",
//       url: "#",
//       icon: Vote,
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings,
//     },
//   ],
// };

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar collapsible="icon" {...props}>
//       <SidebarHeader>
//         <TeamSwitcher teams={data.teams} />
//       </SidebarHeader>
//       <SidebarContent>
//         <NavMain items={data.navMain} />
//       </SidebarContent>
//       <SidebarFooter className="bg-green">
//         <NavUser user={data.user} />
//       </SidebarFooter>
//       <SidebarRail />
//     </Sidebar>
//   );
// }


// #################### Editing now on procressing #########################