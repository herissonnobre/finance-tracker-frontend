"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h1>
      <button
        onClick={() => router.push("/transaction/new")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Incluir Transação
      </button>
    </div>
  );
}
