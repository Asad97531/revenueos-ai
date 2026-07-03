const skillGroups = [
  {
    category: "Frontend Development",
    skills: [
      "Next.js app structure",
      "Reusable React components",
      "Responsive dashboard layouts",
      "Sticky navigation behavior",
    ],
  },
  {
    category: "TypeScript",
    skills: [
      "Typed component props",
      "Safer lead data handling",
      "Reusable interfaces",
      "Cleaner code structure",
    ],
  },
  {
    category: "CRM Workflow",
    skills: [
      "Lead management",
      "Pipeline stages",
      "Follow-up reminders",
      "Search, filters, and sorting",
    ],
  },
  {
    category: "Sales and RevOps",
    skills: [
      "Pipeline health",
      "Revenue forecasting",
      "Conversion funnel",
      "Account prioritization",
    ],
  },
  {
    category: "Data Handling",
    skills: [
      "CSV import",
      "CSV export",
      "Sample data workflow",
      "LocalStorage persistence",
    ],
  },
  {
    category: "AI-style Product Logic",
    skills: [
      "Executive summary",
      "ICP fit breakdown",
      "Account insights",
      "Cold outreach guidance",
    ],
  },
];

export function SkillsDemonstrated() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Skills Demonstrated
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            What this project proves
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A clear breakdown of the technical, product, CRM, sales, and
            AI-style workflow skills demonstrated in RevenueOS AI.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Skill proof
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-bold text-white">{group.category}</h3>

            <div className="mt-4 space-y-3">
              {group.skills.map((skill) => (
                <div key={skill} className="flex gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                    ✓
                  </div>

                  <p className="text-sm leading-6 text-slate-400">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
        <p className="text-sm font-semibold text-white">
          Recruiter takeaway
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          RevenueOS AI shows that this project is not only a UI build. It also
          demonstrates sales process understanding, CRM product thinking,
          frontend execution, data workflows, and AI-inspired prioritization.
        </p>
      </div>
    </section>
  );
}