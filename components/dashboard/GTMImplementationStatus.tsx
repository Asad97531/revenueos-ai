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
    title: "HubSpot CRM Proof",
    tool: "HubSpot",
    status: "Tested",
    description:
      "RevenueOS demo contacts were imported into a real HubSpot CRM workspace with GTM fields like ICP Score and Sales Priority.",
  },
  {
    title: "Make.com Webhook",
    tool: "Make.com",
    status: "Tested",
    description:
      "A Make.com webhook was created and tested to receive RevenueOS hot-lead data from a sample GTM payload.",
  },
  {
    title: "Clay Enrichment Layer",
    tool: "Clay",
    status: "Simulated",
    description:
      "The current version shows mock Clay enrichment fields, Claygent research prompts, buying triggers, and ICP scoring.",
  },
  {
    title: "Slack Alerts",
    tool: "Slack",
    status: "Planned",
    description:
      "The workflow includes a sample Slack alert preview. A real Slack alert workflow can be connected in the next phase.",
  },
];

const nextBuildSteps = [
  {
    phase: "Phase 1",
    title: "Portfolio-ready mock system",
    details:
      "Complete the visual dashboard, explain all GTM layers, and make the demo easy to understand for recruiters.",
  },
  {
    phase: "Phase 2",
    title: "HubSpot CRM proof of concept",
    details:
      "Import RevenueOS demo contacts into HubSpot and show GTM fields like ICP Score, Sales Priority, Trigger Type, and Next Best Action.",
  },
  {
    phase: "Phase 3",
    title: "Make.com webhook prototype",
    details:
      "Create a Make.com webhook that receives hot-lead data from the RevenueOS workflow.",
  },
  {
    phase: "Phase 4",
    title: "Connect full automation",
    details:
      "Connect Make.com to HubSpot create/update contact, Slack alerts, and HubSpot task or deal creation.",
  },
  {
    phase: "Phase 5",
    title: "Record demo and update applications",
    details:
      "Create a short Loom demo, update GitHub README, and use the project in job applications and interviews.",
  },
];

function getStatusStyles(status: string) {
  if (status === "Built") {
    return "border-green-400/30 bg-green-500/10 text-green-200";
  }

  if (status === "Tested") {
    return "border-cyan-400/30 bg-cyan-500/10 text-cyan-200";
  }

  if (status === "Simulated") {
    return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200";
  }

  if (status === "Planned") {
    return "border-slate-400/30 bg-slate-500/10 text-slate-200";
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
            What is built, tested, simulated, and planned
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            This section makes the project transparent. The dashboard is a
            portfolio-ready GTM simulation, and the project now includes a real
            HubSpot CRM proof-of-concept plus a Make.com webhook prototype.
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
            These phases show the path from portfolio dashboard to real GTM
            workflow using HubSpot, Make.com, Slack, and Clay.
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
              workflow logic. Then I tested the workflow with real GTM tools by
              importing RevenueOS contacts into HubSpot and creating a Make.com
              webhook to receive hot-lead data.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}