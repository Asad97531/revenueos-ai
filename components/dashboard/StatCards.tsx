const stats = [
  {
    label: "Pipeline Value",
    value: "₹1.8Cr",
    helper: "Demo revenue pipeline",
    trend: "+18%",
  },
  {
    label: "Active Leads",
    value: "24",
    helper: "Open opportunities",
    trend: "+6",
  },
  {
    label: "Average Score",
    value: "78",
    helper: "Lead quality average",
    trend: "+9",
  },
  {
    label: "Hot Leads",
    value: "9",
    helper: "High intent accounts",
    trend: "+3",
  },
];

export function StatCards() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">{stat.label}</p>

              <p className="mt-2 text-3xl font-bold text-white">
                {stat.value}
              </p>
            </div>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
              {stat.trend}
            </span>
          </div>

          <p className="mt-2 text-xs text-slate-500">{stat.helper}</p>
        </div>
      ))}
    </section>
  );
}