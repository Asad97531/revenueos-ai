const navItems = [
  {
    label: "Clay Research",
    href: "#clay-research-engine",
    helper: "Enrichment and Claygent signals",
  },
  {
    label: "Workflow",
    href: "#workflow-orchestration",
    helper: "Make.com routing logic",
  },
  {
    label: "HubSpot CRM",
    href: "#hubspot-source-of-truth",
    helper: "CRM source of truth",
  },
  {
    label: "Revenue",
    href: "#revenue-engine-dashboard",
    helper: "Pipeline and journey tracking",
  },
  {
    label: "CRM Workspace",
    href: "#crm-workspace",
    helper: "Lead routing table",
  },
  {
    label: "Roadmap",
    href: "#implementation-status",
    helper: "Built vs simulated",
  },
];

export function GTMCommandNav() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/55 p-5 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            GTM Command Menu
          </p>

          <h2 className="mt-2 text-xl font-bold text-white">
            Navigate the automation engine
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-6 text-slate-300">
          Use this menu to review each GTM layer: Clay for research, Make.com for
          orchestration, HubSpot for CRM tracking, and revenue dashboards for
          business impact.
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-400/10"
          >
            <p className="text-sm font-bold text-white transition group-hover:text-cyan-200">
              {item.label}
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              {item.helper}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}