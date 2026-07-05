const proofPoints = [
  "Built with Next.js, TypeScript, Tailwind CSS, and local demo data",
  "Shows Clay-style enrichment, Claygent research, and ICP scoring",
  "Explains Make.com workflow orchestration with Slack and HubSpot actions",
  "Uses HubSpot as the CRM source of truth for contacts, companies, deals, and revenue",
];

const nextSteps = [
  "Connect real HubSpot custom properties",
  "Create Clay enrichment table",
  "Build Make.com webhook workflow",
  "Record demo video and update README",
];

export function PortfolioCTA() {
  return (
    <section className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-6 shadow-2xl backdrop-blur-md lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Portfolio Summary
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
            RevenueOS AI is now positioned as a GTM Engineer portfolio project
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            This project demonstrates how a GTM Engineer can combine data
            enrichment, workflow automation, CRM architecture, and revenue
            reporting into one operating system for sales teams.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
              >
                <p className="text-sm leading-6 text-slate-200">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#crm-workspace"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View GTM Workspace
            </a>

            <a
              href="#implementation-status"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See Build Roadmap
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Interview Pitch
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-200">
            “I built RevenueOS AI as a GTM automation engine. It simulates how
            inbound or target accounts can be enriched in Clay, researched with
            Claygent, routed through Make.com, alerted in Slack, and tracked in
            HubSpot from first touch to pipeline.”
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Next Build Steps
            </p>

            <div className="mt-4 space-y-3">
              {nextSteps.map((step, index) => (
                <div key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-xs font-bold text-cyan-300">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Recruiter Takeaway
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-200">
              This is not only a dashboard. It is a full GTM workflow concept
              covering enrichment, orchestration, CRM operations, and revenue
              reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}