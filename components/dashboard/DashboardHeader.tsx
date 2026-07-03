export function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          RevenueOS AI
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Track pipeline value, prioritize sales follow-ups, manage leads, and
          generate AI-style outreach recommendations.
        </p>
      </div>

      <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
        Live CRM
      </div>
    </div>
  );
}