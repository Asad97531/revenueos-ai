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
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-8 text-white">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute right-[-140px] top-80 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div id="top" className="relative z-10 mx-auto max-w-7xl">
        <DashboardHeader />

        <DashboardSections />
      </div>
    </main>
  );
}