import Link from "next/link";
import React from "react";

type NavItemProps = {
  href: string;
  icon: React.ElementType;
  label: string;
};

export default function NavItem({ href, icon: Icon, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="h-14 rounded-full p-4 flex items-center gap-2 hover:bg-light-on-surface/[.08] dark:hover:bg-dark-on-surface/[.08] active:bg-light-on-surface/[.12] dark:active:bg-dark-on-surface/[.12] transition-colors"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <Icon className="w-5 h-5 text-light-on-surface-variant dark:text-dark-on-surface-variant" />
      </div>
      <span className="text-label-large text-on-surface-variant">{label}</span>
    </Link>
  );
}
