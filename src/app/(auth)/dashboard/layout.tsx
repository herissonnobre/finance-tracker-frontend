import { ReactNode } from "react";
import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-neutral-900">
        {children}
      </main>
    </div>
  );
}
