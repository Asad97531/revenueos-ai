import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Revenue Analytics
      </p>

      <h1 className="mt-3 text-4xl font-bold">Analytics</h1>

      <p className="mt-3 text-slate-400">
        Track revenue performance, funnel conversion, and lead quality.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <StatCard
          title="Win Rate"
          value="31%"
          description="Deals won from qualified leads"
        />

        <StatCard
          title="Conversion Rate"
          value="18%"
          description="Visitors converted into leads"
        />

        <StatCard
          title="Average Deal Size"
          value="$24K"
          description="Average pipeline opportunity value"
        />
      </div>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold text-white">Funnel Performance</h2>

        <div className="mt-6 space-y-4">
          {[
            { label: "Visitors", value: "10,000", width: "100%" },
            { label: "Leads", value: "1,800", width: "80%" },
            { label: "Qualified", value: "720", width: "55%" },
            { label: "Demo", value: "210", width: "35%" },
            { label: "Won", value: "65", width: "20%" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex justify-between text-sm text-slate-300">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>

              <div className="h-3 rounded-full bg-slate-950">
                <div
                  className="h-3 rounded-full bg-cyan-400"
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}