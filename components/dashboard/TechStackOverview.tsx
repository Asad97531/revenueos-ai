const techStackItems = [
  {
    name: "Next.js",
    category: "Frontend Framework",
    description:
      "Used to build the dashboard, landing page, routing, and production-ready React app structure.",
  },
  {
    name: "TypeScript",
    category: "Code Quality",
    description:
      "Used for safer components, lead data types, props, and cleaner project structure.",
  },
  {
    name: "Tailwind CSS",
    category: "UI Styling",
    description:
      "Used to create the dark SaaS dashboard design, cards, tables, badges, and responsive layouts.",
  },
  {
    name: "LocalStorage",
    category: "Data Persistence",
    description:
      "Used to save CRM leads and completed actions in the browser without needing a backend database.",
  },
  {
    name: "CSV Import/Export",
    category: "CRM Utility",
    description:
      "Used to import sample lead data and export filtered lead lists for sales workflow testing.",
  },
  {
    name: "AI-style Logic",
    category: "Sales Intelligence",
    description:
      "Used to generate lead recommendations, pipeline insights, account priorities, and outreach actions.",
  },
];

export function TechStackOverview() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Tech Stack
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Built with modern SaaS tools
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            RevenueOS AI is built as a portfolio-ready RevOps dashboard using
            modern frontend tools, CRM workflows, and AI-style sales logic.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Portfolio ready
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {techStackItems.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">{item.name}</h3>

                <p className="mt-1 text-xs uppercase tracking-widest text-cyan-300">
                  {item.category}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <p className="text-sm font-semibold text-white">
          Recruiter-friendly summary
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          This project demonstrates frontend development, CRM product thinking,
          sales workflow design, data handling, responsive UI, and AI-inspired
          RevOps intelligence.
        </p>
      </div>
    </section>
  );
}