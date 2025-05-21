import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-4">
      <nav className="flex flex-col gap-4">
        <Link
          href="/dashboard"
          className="text-gray-700 dark:text-gray-200 hover:underline"
        >
          Dashboard
        </Link>
        <Link
          href="/transaction/new"
          className="text-gray-700 dark:text-gray-200 hover:underline"
        >
          Nova Transação
        </Link>
      </nav>
    </aside>
  );
}
