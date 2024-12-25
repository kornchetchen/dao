"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { FooterDown } from "./components/FooterDown";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebars } from "./components/Sidebars";
// import { Sidebars } from "./components/Sidebars";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: " DAO",
//   description: "DAO VOTING",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* {/* <div className="flex min-h-screen"> */}
          {" "} 
          <SidebarProvider>
            <Sidebars />
            <main className="flex-1">{children}</main>
          </SidebarProvider>
        {/* </div> */}
        <FooterDown />
      </body>
    </html>
  );
}
