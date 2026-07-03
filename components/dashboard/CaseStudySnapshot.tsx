const caseStudyItems = [
  {
    label: "Problem",
    title: "Sales teams lose time deciding which leads to prioritize",
    description:
      "Many CRM workflows contain leads, but not enough clear guidance on which accounts need attention, which deals are at risk, and what action should happen next.",
  },
  {
    label: "Solution",
    title: "AI-style RevOps dashboard for pipeline prioritization",
    description:
      "RevenueOS AI organizes leads, scores opportunities, highlights risks, summarizes pipeline health, and gives sales teams a clearer follow-up workflow.",
  },
  {
    label: "Execution",
    title: "Built a frontend CRM product with reusable components",
    description:
      "The project includes dashboard sections, lead management, CSV import/export, LocalStorage persistence, filters, notes, AI-style insights, and responsive UI.",
  },
];

const impactItems = [
  "Helps prioritize high-intent accounts",
  "Makes pipeline health easier to review",
  "Supports CSV-based CRM testing",
  "Shows AI-first sales workflow thinking",
  "Demonstrates SaaS dashboard product design",
];

export function CaseStudySnapshot() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Case Study Snapshot
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            From CRM data to revenue action
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A short product story explaining the problem, solution, execution,
            and business value behind RevenueOS AI.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Product story
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {caseStudyItems.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              {item.label}
            </p>

            <h3 className="mt-3 text-lg font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-semibold text-white">
            Business impact
          </p>

          <div className="mt-4 space-y-3">
            {impactItems.map((item) => (
              <div key={item} className="flex gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                  ✓
                </div>

                <p className="text-sm leading-6 text-slate-400">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <p className="text-sm font-semibold text-white">
            Portfolio takeaway
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            RevenueOS AI shows that I can think like a sales user, design like a
            product builder, and execute with frontend tools to create a useful
            SaaS-style CRM workflow.
          </p>
        </div>
      </div>
    </section>
  );
}