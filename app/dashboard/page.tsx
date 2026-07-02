import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AIRecommendations } from "@/components/dashboard/AIRecommendations";
import { RecentLeadsTable } from "@/components/dashboard/RecentLeadsTable";
import { leads } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Founder Command Center
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Good morning, Asad 👋
        </h1>

        <p className="mt-3 text-slate-400">
          Here is your revenue snapshot for today.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        <StatCard
          title="Pipeline Value"
          value="$248K"
          description="Potential revenue this quarter"
        />

        <StatCard
          title="Hot Leads"
          value="12"
          description="Leads needing attention today"
        />

        <StatCard
          title="Meetings Today"
          value="5"
          description="Scheduled founder calls"
        />

        <StatCard
          title="AI Actions"
          value="8"
          description="Recommended next steps"
        />
      </div>
      <div className="mt-8">
        <AIRecommendations />
      </div>
      <div className="mt-8">
        <RecentLeadsTable leads={leads} />
      </div>
    </DashboardLayout>
  );
}