const stats = [
  {
    label: "Leads Enriched",
    value: "248",
    helper: "Records researched through Clay",
    trend: "+42",
    tool: "Clay",
  },
  {
    label: "High ICP Leads",
    value: "42",
    helper: "Accounts scored 80+ fit",
    trend: "+11",
    tool: "Scoring",
  },
  {
    label: "Slack Alerts",
    value: "18",
    helper: "Hot leads routed to founder",
    trend: "+5",
    tool: "Make.com",
  },
  {
    label: "HubSpot Deals",
    value: "12",
    helper: "Deals created from GTM workflow",
    trend: "+4",
    tool: "HubSpot",
  },
  {
    label: "Pipeline Created",
    value: "₹18.4L",
    helper: "Demo pipeline from enriched leads",
    trend: "+22%",
    tool: "Revenue",
  },
];

export function StatCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-950/75"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {stat.tool}
            </span>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
              {stat.trend}
            </span>
          </div>

          <p className="mt-5 text-sm text-slate-400">{stat.label}</p>

          <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            {stat.helper}
          </p>

          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-cyan-300 transition-all group-hover:w-full" />
          </div>
        </div>
      ))}
    </section>
  );
}