import type { Metadata } from "next";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSections } from "@/components/dashboard/DashboardSections";

export const metadata: Metadata = {
  title: "RevenueOS AI Dashboard | RevOps CRM Portfolio Project",
  description:
    "A portfolio-ready RevOps CRM dashboard built with Next.js, TypeScript, Tailwind CSS, CSV workflows, LocalStorage, and AI-style sales insights.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div id="top" className="mx-auto max-w-7xl">
        <DashboardHeader />

        <DashboardSections />
      </div>
    </main>
  );
}