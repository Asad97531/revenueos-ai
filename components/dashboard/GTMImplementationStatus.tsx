const implementationItems = [
  {
    title: "RevenueOS Dashboard",
    tool: "Next.js",
    status: "Built",
    description:
      "The front-end command center is built with a clean GTM dashboard UI, metrics, workflow sections, and CRM workspace.",
  },
  {
    title: "Lead Data Model",
    tool: "LocalStorage",
    status: "Built",
    description:
      "Leads can be added, edited, deleted, filtered, imported, exported, and persisted locally for the demo.",
  },
  {
    title: "Clay Enrichment Layer",
    tool: "Clay",
    status: "Simulated",
    description:
      "The current version shows mock Clay enrichment fields, Claygent research prompts, buying triggers, and ICP scoring.",
  },
  {
    title: "Workflow Orchestration",
    tool: "Make.com",
    status: "Simulated",
    description:
      "The current version shows the automation logic for lead capture, Clay enrichment, Slack alerts, and HubSpot updates.",
  },
  {
    title: "CRM Source of Truth",
    tool: "HubSpot",
    status: "Simulated",
    description:
      "The dashboard shows HubSpot objects, custom properties, deal tracking, lifecycle stages, and revenue reporting logic.",
  },
  {
    title: "Slack Alerts",
    tool: "Slack",
    status: "Simulated",
    description:
      "The workflow includes a sample Slack alert for high-intent leads with ICP score, trigger reason, and next action.",
  },
];

const nextBuildSteps = [
  {
    phase: "Phase 1",
    title: "Finish portfolio-ready mock system",
    details:
      "Complete the visual dashboard, explain all GTM layers, and make the demo easy to understand for recruiters.",
  },
  {
    phase: "Phase 2",
    title: "Set up HubSpot custom properties",
    details:
      "Create CRM fields like ICP Score, Trigger Type, Clay Research Summary, Sales Priority, and Next Best Action.",
  },
  {
    phase: "Phase 3",
    title: "Create Clay enrichment table",
    details:
      "Build a Clay table that accepts company domains, enriches account data, and runs Claygent research prompts.",
  },
  {
    phase: "Phase 4",
    title: "Connect Make.com automation",
    details:
      "Use Make.com to connect lead capture, Clay enrichment, Slack alerts, HubSpot tasks, and HubSpot deal creation.",
  },
  {
    phase: "Phase 5",
    title: "Record demo and update README",
    details:
      "Create a short Loom demo, update GitHub README, and explain the system as a GTM Engineer portfolio project.",
  },
];

function getStatusStyles(status: string) {
  if (status === "Built") {
    return "border-green-400/30 bg-green-500/10 text-green-200";
  }

  if (status === "Simulated") {
    return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200";
  }

  return "border-white/10 bg-white/5 text-slate-300";
}

export function GTMImplementationStatus() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Implementation Status
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            What is built now and what will be connected next
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            This section makes the project transparent. The current dashboard is
            a portfolio-ready GTM simulation, and the next phases will connect
            real Clay, Make.com, Slack, and HubSpot workflows.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {implementationItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.tool}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyles(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Build Roadmap
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            How this becomes a real GTM automation system
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            These phases show the path from portfolio demo to real GTM workflow
            using Clay, Make.com, Slack, and HubSpot.
          </p>

          <div className="mt-6 space-y-4">
            {nextBuildSteps.map((step, index) => (
              <div key={step.phase} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {index + 1}
                  </div>

                  {index !== nextBuildSteps.length - 1 && (
                    <div className="h-full w-px bg-white/10" />
                  )}
                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {step.phase}
                  </p>

                  <h4 className="mt-1 font-semibold text-white">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Interview Explanation
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-200">
              “I first built a working GTM dashboard with mock data to prove the
              workflow logic. Then I planned the real integrations: Clay for
              enrichment, Make.com for orchestration, Slack for alerts, and
              HubSpot as the CRM source of truth.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}