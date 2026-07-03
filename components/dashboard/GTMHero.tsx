const stackItems = [
  {
    label: "Clay",
    value: "Research + enrichment",
  },
  {
    label: "Make.com",
    value: "Workflow orchestration",
  },
  {
    label: "HubSpot",
    value: "CRM source of truth",
  },
];

const highlights = [
  "Clay-enriched lead research",
  "Slack alerts for high-intent accounts",
  "HubSpot deal and pipeline tracking",
  "Portfolio-ready GTM Engineer workflow",
];

export function GTMHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl backdrop-blur-md lg:p-10">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-slate-950/20 to-slate-950/70" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              RevenueOS AI
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              GTM Automation Engine
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Build a modern GTM workflow with{" "}
            <span className="text-cyan-300">Clay</span>,{" "}
            <span className="text-cyan-300">Make.com</span>, and{" "}
            <span className="text-cyan-300">HubSpot</span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            This dashboard simulates how a GTM Engineer captures leads, enriches
            data in Clay, researches buying signals with Claygent, routes
            high-priority accounts through automation, and tracks the full
            customer journey in HubSpot.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#crm-workspace"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View GTM Workspace
            </a>

            <a
              href="#workflow-engine"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See Workflow
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Stack Overview
          </p>

          <div className="mt-5 space-y-4">
            {stackItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-white">
                    {item.label}
                  </p>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                    Core Tool
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Demo Story
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-200">
              Website Lead - Clay Enrichment - Claygent Research - Make.com
              Routing - Slack Alert - HubSpot CRM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}