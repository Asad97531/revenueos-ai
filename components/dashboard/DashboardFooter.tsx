const footerLinks = [
  {
    label: "Clay Research",
    href: "#clay-research-engine",
  },
  {
    label: "Workflow Orchestration",
    href: "#workflow-orchestration",
  },
  {
    label: "HubSpot CRM",
    href: "#hubspot-source-of-truth",
  },
  {
    label: "Revenue Dashboard",
    href: "#revenue-engine-dashboard",
  },
];

export function DashboardFooter() {
  return (
    <footer className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            RevenueOS AI
          </p>

          <h2 className="mt-2 text-xl font-bold text-white">
            GTM Automation Engine Portfolio Project
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
            A portfolio-ready GTM system showing Clay enrichment, Claygent
            research, Make.com workflow orchestration, Slack alerts, HubSpot CRM
            tracking, and revenue dashboarding.
          </p>
        </div>

        <a
          href="#hero"
          className="w-fit rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/15"
        >
          Back to top
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-xs leading-5 text-slate-500">
          Built as a GTM Engineer portfolio project using Next.js, TypeScript,
          Tailwind CSS, mock GTM data, and planned integrations with Clay,
          Make.com, Slack, and HubSpot.
        </p>
      </div>
    </footer>
  );
}