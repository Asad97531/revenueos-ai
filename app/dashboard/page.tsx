import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSections } from "@/components/dashboard/DashboardSections";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader />

        <DashboardSections />
      </div>
    </main>
  );
}