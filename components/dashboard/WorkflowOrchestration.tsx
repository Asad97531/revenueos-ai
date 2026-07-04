const automationSteps = [
  {
    step: "01",
    title: "Trigger",
    tool: "Website Form",
    status: "Lead captured",
    description:
      "A new inbound lead submits a demo request, contact form, or joins through an imported account list.",
  },
  {
    step: "02",
    title: "Enrichment Request",
    tool: "Make.com",
    status: "Sent to Clay",
    description:
      "Make.com receives the lead data and sends the email, company domain, and job title to Clay for enrichment.",
  },
  {
    step: "03",
    title: "Research Complete",
    tool: "Clay + Claygent",
    status: "Signals found",
    description:
      "Clay enriches company data while Claygent researches hiring triggers, recent news, funding, and personalization angles.",
  },
  {
    step: "04",
    title: "Decision Logic",
    tool: "Router",
    status: "ICP checked",
    description:
      "The workflow checks whether the ICP score is high enough to trigger a Slack alert, HubSpot task, or deal creation.",
  },
  {
    step: "05",
    title: "Team Alert",
    tool: "Slack",
    status: "Founder alerted",
    description:
      "High-intent leads are sent to Slack with account context, trigger reason, ICP score, and recommended next action.",
  },
  {
    step: "06",
    title: "CRM Update",
    tool: "HubSpot",
    status: "CRM updated",
    description:
      "HubSpot stores the contact, company, deal, task, lifecycle stage, trigger type, and revenue source.",
  },
];

const routingRules = [
  {
    condition: "ICP Score 85+",
    action: "Send Slack alert and create HubSpot deal",
  },
  {
    condition: "ICP Score 70-84",
    action: "Create HubSpot task for sales review",
  },
  {
    condition: "ICP Score below 70",
    action: "Add to nurture list",
  },
  {
    condition: "Hiring trigger found",
    action: "Mark as priority outbound account",
  },
];

export function WorkflowOrchestration() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Workflow Orchestration
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Make.com scenario that connects Clay, Slack, and HubSpot
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            This section represents the automation layer. A GTM Engineer uses
            tools like Make.com, Zapier, or n8n to connect enrichment, routing,
            alerts, and CRM updates without manual work.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {automationSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {item.step}
                  </span>

                  <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-semibold text-slate-300">
                    {item.tool}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {item.status}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Routing Rules
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Automation logic
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              These rules show how the workflow decides what should happen next
              after a lead is enriched.
            </p>

            <div className="mt-5 space-y-3">
              {routingRules.map((rule) => (
                <div
                  key={rule.condition}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    If
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {rule.condition}
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Then
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cyan-200">
                    {rule.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Slack Alert Preview
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm font-bold text-white">
                Hot Lead Alert: Acme SaaS
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">ICP Score</span>
                  <span className="font-semibold text-cyan-300">91/100</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Trigger</span>
                  <span className="font-semibold text-white">Hiring SDRs</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Action</span>
                  <span className="font-semibold text-cyan-300">
                    Call today
                  </span>
                </div>
              </div>

              <p className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-sm leading-6 text-slate-200">
                Claygent found that Acme is expanding its outbound team. Create
                a HubSpot deal and send a personalized message around scaling
                SDR research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}