import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "./context/context";
import logo from "@/images/Home/Screenshot_2025-07-22_215836-removebg-preview.png"
import TawkChat from "./TawkChat";

export const metadata: Metadata = {
  title: 'FlareNetwork',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
                <WalletProvider>
          {children}
          <TawkChat/>
        </WalletProvider>
      </body>
    </html>
  );
}
