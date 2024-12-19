"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { FooterDown } from "./components/FooterDown";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebars } from "./components/Sidebars";

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
        {" "}
        <Navbar />
        <SidebarProvider>
          <Sidebars />
          {children}
        </SidebarProvider>
        <FooterDown />
      </body>
    </html>
  );
}
