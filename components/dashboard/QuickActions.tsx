const quickActions = [
  {
    title: "Review CRM Pipeline",
    description: "Jump to the lead workspace and review active opportunities.",
    href: "#crm-workspace",
    label: "Open CRM",
  },
  {
    title: "Download Sample CSV",
    description: "Use the sample CSV to test lead import functionality.",
    href: "/sample-leads.csv",
    label: "Download CSV",
  },
  {
    title: "Check AI Insights",
    description: "Review AI recommendations, ICP fit, and account priorities.",
    href: "#ai-insights",
    label: "View Insights",
  },
];

export function QuickActions() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Quick Actions
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Move from insight to action
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Shortcuts for reviewing pipeline, testing CSV import, and checking
            AI-powered sales insights.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Action center
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {quickActions.map((action) => (
          <a
            key={action.title}
            href={action.href}
            className="group rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900"
          >
            <h3 className="text-lg font-bold text-white">{action.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {action.description}
            </p>

            <div className="mt-5 inline-flex rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition group-hover:bg-cyan-300">
              {action.label}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}