const performanceMetrics = [
  {
    label: "Win Rate",
    value: "28%",
    description: "Closed won deals compared to total qualified opportunities.",
    trend: "+6%",
  },
  {
    label: "Average Deal Size",
    value: "₹18L",
    description: "Average value across proposal, negotiation, and closed deals.",
    trend: "+12%",
  },
  {
    label: "Sales Cycle",
    value: "21 days",
    description: "Average time from qualified lead to closed opportunity.",
    trend: "-4 days",
  },
  {
    label: "Follow-up Completion",
    value: "84%",
    description: "Reminder and AI action tasks completed on time.",
    trend: "+9%",
  },
];

export function SalesPerformance() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Sales Performance
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Revenue team performance summary
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A quick view of sales execution quality, deal velocity, win rate,
            and follow-up discipline.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Performance view
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{metric.label}</p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {metric.value}
                </p>
              </div>

              <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
                {metric.trend}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              AI performance insight
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Your strongest improvement area is follow-up speed. Prioritize
              proposal and negotiation leads first to increase conversion rate.
            </p>
          </div>

          <span className="w-fit rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300">
            Improve follow-up speed
          </span>
        </div>
      </div>
    </section>
  );
}