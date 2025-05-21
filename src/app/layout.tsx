import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Track your finance on the easy way",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex items-center justify-center`}>
        {children}
      </body>
    </html>
  );
}
