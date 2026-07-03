import type { Metadata } from "next";
import { DashboardScrollProgress } from "@/components/dashboard/DashboardScrollProgress";
import { DashboardSections } from "@/components/dashboard/DashboardSections";

export const metadata: Metadata = {
  title: "RevenueOS AI | GTM Automation Engine",
  description:
    "A GTM Engineer portfolio dashboard built with Next.js, showcasing Clay enrichment, workflow orchestration, and HubSpot CRM operations.",
};

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <DashboardScrollProgress />

      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/gtm-bg.jpg?v=3')",
        }}
      />

      <div className="fixed inset-0 bg-slate-950/38" />

      <div className="fixed inset-0 bg-gradient-to-br from-slate-950/45 via-slate-950/20 to-cyan-950/15" />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-80px] top-[-80px] h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute right-[-100px] top-40 h-96 w-96 rounded-full bg-blue-400/25 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <DashboardSections />
      </div>
    </main>
  );
}