const workflowSteps = [
  {
    step: "01",
    title: "Import leads",
    description:
      "Upload leads manually or import a CSV file with company, contact, stage, score, value, and notes.",
  },
  {
    step: "02",
    title: "Score pipeline",
    description:
      "Use lead score, deal value, stage, and notes to understand which opportunities are strongest.",
  },
  {
    step: "03",
    title: "Prioritize accounts",
    description:
      "Identify high-intent accounts, follow-up risks, ICP fit, and revenue opportunities.",
  },
  {
    step: "04",
    title: "Generate outreach",
    description:
      "Use AI-style recommendations and cold email drafts to create better follow-up messages.",
  },
  {
    step: "05",
    title: "Track actions",
    description:
      "Manage reminders, completed actions, pipeline movement, and CRM follow-up activity.",
  },
];

export function SalesWorkflow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Sales Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            From lead import to revenue action
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            RevenueOS AI connects CRM data, pipeline intelligence, account
            prioritization, outreach, and follow-up tracking in one workflow.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          End-to-end flow
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        {workflowSteps.map((item) => (
          <div
            key={item.step}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                {item.step}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <p className="text-sm font-semibold text-white">
          Product story for recruiters
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          This dashboard shows how a sales team can move from raw lead data to
          clear revenue actions using CRM workflows, AI-style insights, and
          follow-up prioritization.
        </p>
      </div>
    </section>
  );
}