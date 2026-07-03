const qualityItems = [
  {
    title: "Navigation tested",
    description:
      "Sticky dashboard navigation works, active sections highlight, and buttons scroll to the correct sections.",
  },
  {
    title: "CRM actions tested",
    description:
      "Lead add, edit, delete, search, filter, sorting, and notes workflows are available in the CRM workspace.",
  },
  {
    title: "CSV workflow tested",
    description:
      "Sample CSV download, CSV import, and filtered lead export are included for CRM data testing.",
  },
  {
    title: "Browser persistence tested",
    description:
      "Lead data and completed actions are stored in browser LocalStorage for the demo experience.",
  },
  {
    title: "Responsive layout tested",
    description:
      "Dashboard cards, sections, tables, and CRM views are designed to work across desktop and mobile screens.",
  },
  {
    title: "Portfolio review tested",
    description:
      "Project links, GitHub link, live dashboard link, demo guide, and recruiter notes are included for easy review.",
  },
];

export function QualityChecklist() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Quality Checklist
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            What has been tested
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A simple quality review checklist showing the main dashboard, CRM,
            CSV, navigation, and portfolio features included in RevenueOS AI.
          </p>
        </div>

        <span className="w-fit rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
          Review ready
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {qualityItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400 text-sm font-bold text-slate-950">
                ✓
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

      <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <p className="text-sm font-semibold text-white">
          Final review note
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Before sharing the project, open the live dashboard, test the sticky
          navigation, import the sample CSV, add one lead, export leads, and
          confirm the GitHub and live app links work correctly.
        </p>
      </div>
    </section>
  );
}