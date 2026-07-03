const workflowSteps = [
  {
    step: "01",
    title: "Lead Captured",
    tool: "Website / Form",
    description:
      "A new inbound lead enters the workflow from a website form, demo request, or imported prospect list.",
  },
  {
    step: "02",
    title: "Data Enrichment",
    tool: "Clay",
    description:
      "Clay enriches the lead with company details, employee count, industry, LinkedIn context, and account data.",
  },
  {
    step: "03",
    title: "Signal Research",
    tool: "Claygent",
    description:
      "Claygent researches hiring triggers, funding news, and personalized sales angles for each account.",
  },
  {
    step: "04",
    title: "Workflow Routing",
    tool: "Make.com",
    description:
      "Automation decides whether to send Slack alerts, create follow-up tasks, or update pipeline records.",
  },
  {
    step: "05",
    title: "Team Alert",
    tool: "Slack",
    description:
      "Hot leads are pushed to the sales team or founder with context, urgency, and the recommended next action.",
  },
  {
    step: "06",
    title: "CRM Tracking",
    tool: "HubSpot",
    description:
      "HubSpot becomes the source of truth for contacts, companies, deals, lifecycle stage, and revenue tracking.",
  },
];

export function GTMWorkflowEngine() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md lg:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Workflow Engine
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            How the GTM system works
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            This section explains the full process behind the dashboard so a
            recruiter can immediately understand the logic of the project.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Outcome
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Faster lead research and better routing
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {workflowSteps.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                {item.step}
              </span>

              <span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-slate-300">
                {item.tool}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}