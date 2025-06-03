import React from "react";

// Icons
import MenuOpen from "@/components/icons/ChevronLeftIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import AddIcon from "@/components/icons/AddIcon";
import ListIcon from "@/components/icons/ListIcon";
import LogoIcon from "@/components/icons/LogoIcon";

// Components
import NavItem from "@/components/common/NavItem";

const navItems = [
  { href: "/dashboard", icon: DashboardIcon, label: "Painel" },
  { href: "/transactions/new", icon: AddIcon, label: "Incluir Transação" },
  { href: "/transactions", icon: ListIcon, label: "Listar Transações" },
];

export default function Sidebar() {
  return (
    <aside className="h-full pt-11 pb-5 px-5 flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <LogoIcon className="w-6 h-6 text-light-primary dark:text-dark-primary" />
          </div>
          <span className="text-title-large text-light-on-surface dark:text-dark-on-surface">
            FinanceTracker
          </span>
        </div>
        <div className="w-[48px] h-[48px] flex items-center justify-center">
          <button
            type="button"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-transparent hover:bg-light-on-surface-variant/[.08] active:bg-light-on-surface-variant/[.12] transition-colors"
            aria-label="Recolher menu"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <MenuOpen className="w-5 h-5 text-light-on-surface-variant dark:text-dark-on-surface-variant" />
            </div>
          </button>
        </div>
      </header>

      <nav className="flex flex-col my-auto gap-2">
        {navItems.map(({ href, icon, label }) => (
          <NavItem key={href} href={href} icon={icon} label={label} />
        ))}
      </nav>
    </aside>
  );
}
