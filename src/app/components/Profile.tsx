// "use client";
// import React, { useState } from "react";
// import { IoMdNotificationsOutline } from 'react-icons/io';
// import { IoIosHelpCircleOutline } from 'react-icons/io';
// import { CiLogout } from 'react-icons/ci';
// import { CiSettings } from 'react-icons/ci';
// import { RiEditBoxLine } from 'react-icons/ri';
// import { CgProfile } from 'react-icons/cg';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

// interface DropdownProfileProps {
//   userName?: string;
//   userImage?: string;
//   onProfileClick?: () => void;
//   onEditClick?: () => void;
//   onNotificationsClick?: () => void;
//   onSettingsClick?: () => void;
//   onHelpClick?: () => void;
//   onLogoutClick?: () => void;
// }

// function DropdownProfile({
//   userName = "User",
//   userImage = "/img/default-user.jpg",
//   onProfileClick,
//   onEditClick,
//   onNotificationsClick,
//   onSettingsClick,
//   onHelpClick,
//   onLogoutClick
// }: DropdownProfileProps) {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

//   return (
// //     <div className={`navigation${isActive ? " active" : ""}`}>
// //       <div className="userBx">
// //         <div className="imgBx">
// //           <img src={userImage} alt="user" />
// //         </div>
// //         <p className="username">{userName}</p>
// //       </div>
// //       <div className="menuToggle" onClick={handleClick}>
// //         <span></span>
// //         <span></span>
// //         <span></span>
// //       </div>
// //       <ul className="menu">
// //         <li>
// //           <a href="#" onClick={(e) => {
// //             e.preventDefault();
// //             onProfileClick && onProfileClick();
// //           }}>
// //             <CgProfile/> My profile
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#" onClick={(e) => {
// //             e.preventDefault();
// //             onEditClick && onEditClick();
// //           }}>
// //             <RiEditBoxLine/> Edit
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#" onClick={(e) => {
// //             e.preventDefault();
// //             onNotificationsClick && onNotificationsClick();
// //           }}>
// //             <IoMdNotificationsOutline/> Notifications
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#" onClick={(e) => {
// //             e.preventDefault();
// //             onSettingsClick && onSettingsClick();
// //           }}>
// //             <CiSettings/> Settings
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#" onClick={(e) => {
// //             e.preventDefault();
// //             onHelpClick && onHelpClick();
// //           }}>
// //             <IoIosHelpCircleOutline/> Help & support
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#" onClick={(e) => {
// //             e.preventDefault();
// //             onLogoutClick && onLogoutClick();
// //           }}>
// //             <CiLogout/> Logout
// //           </a>
// //         </li>
// //       </ul>
// //     </div>
//   );
// }

// export default DropdownProfile;