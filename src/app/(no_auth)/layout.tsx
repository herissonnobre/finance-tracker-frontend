import "../globals.css";
import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function NoAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <main className="flex w-full h-full items-center justify-center bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest">
        <div className="w-full max-w-md ">{children}</div>
      </main>
    </div>
  );
}
