const highlights = [
  {
    title: "Built a CRM-style dashboard",
    description:
      "Created a complete lead management dashboard with pipeline views, revenue forecast, account insights, reminders, and CRM workspace.",
  },
  {
    title: "Added AI-style sales intelligence",
    description:
      "Included executive summaries, ICP fit scoring, account prioritization, AI recommendations, and follow-up guidance.",
  },
  {
    title: "Designed for real sales workflow",
    description:
      "Mapped the sales process from lead import to qualification, outreach, reminders, conversion funnel, and follow-up completion.",
  },
  {
    title: "Handled CRM data utilities",
    description:
      "Added CSV import, CSV export, sample CSV download, lead notes, filters, search, sorting, and browser-based persistence.",
  },
];

const proofPoints = [
  "Next.js app structure",
  "TypeScript components",
  "Tailwind responsive UI",
  "LocalStorage persistence",
  "CSV import/export",
  "Sales dashboard logic",
];

export function ProjectHighlights() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Project Highlights
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            What this project demonstrates
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            RevenueOS AI shows frontend development, CRM workflow design,
            RevOps thinking, and AI-inspired sales prioritization in one
            portfolio-ready project.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Recruiter ready
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-bold text-white">{item.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <p className="text-sm font-semibold text-white">
          Technical proof points
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {proofPoints.map((point) => (
            <span
              key={point}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}