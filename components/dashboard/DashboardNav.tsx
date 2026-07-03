const navItems = [
  {
    label: "Top",
    href: "#top",
  },
  {
    label: "Summary",
    href: "#summary",
  },
  {
    label: "Demo Data",
    href: "#demo-data",
  },
  {
    label: "Highlights",
    href: "#project-highlights",
  },
  {
    label: "Features",
    href: "#feature-checklist",
  },
  {
    label: "Demo Guide",
    href: "#demo-guide",
  },
  {
    label: "Links",
    href: "#project-links",
  },
  {
    label: "Workflow",
    href: "#sales-workflow",
  },
  {
    label: "Pipeline",
    href: "#pipeline-health",
  },
  {
    label: "Forecast",
    href: "#revenue-forecast",
  },
  {
    label: "Funnel",
    href: "#conversion-funnel",
  },
  {
    label: "Reminders",
    href: "#follow-ups",
  },
  {
    label: "Performance",
    href: "#sales-performance",
  },
  {
    label: "Accounts",
    href: "#account-insights",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
  },
  {
    label: "CRM",
    href: "#crm-workspace",
  },
];

export function DashboardNav() {
  return (
    <section className="sticky top-4 z-20 rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Dashboard navigation
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Sticky shortcuts for reviewing the full RevenueOS AI dashboard.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}