import { ReactNode } from "react";
import Sidebar from "@/components/ui/sidebar";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-surface">
      <div className="min-w-[220px] max-w-[360px] w-full h-full shadow-light-0">
        <Sidebar />
      </div>
      <main className="flex-1 p-6 h-full overflow-auto">{children}</main>
    </div>
  );
}
