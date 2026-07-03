const demoSteps = [
  {
    step: "01",
    title: "Review the executive summary",
    description:
      "Start at the top of the dashboard to understand pipeline health, top priority accounts, and main revenue risks.",
  },
  {
    step: "02",
    title: "Test CSV import",
    description:
      "Download the sample CSV, import it into the CRM workspace, and confirm that leads appear in the table.",
  },
  {
    step: "03",
    title: "Add or edit a lead",
    description:
      "Use the lead form to add a new company, update deal value, change stage, and add sales notes.",
  },
  {
    step: "04",
    title: "Use search and filters",
    description:
      "Filter by stage, score, company, contact, or notes to test CRM-style lead management.",
  },
  {
    step: "05",
    title: "Review AI recommendations",
    description:
      "Check AI-style next actions, cold email drafts, account insights, and ICP fit breakdown.",
  },
  {
    step: "06",
    title: "Export lead data",
    description:
      "Export filtered CRM leads as a CSV file to test the data utility workflow.",
  },
];

export function DemoGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Demo Guide
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            How to test RevenueOS AI
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A simple walkthrough for recruiters, interviewers, or hiring
            managers to test the main CRM and RevOps features.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Recruiter walkthrough
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {demoSteps.map((item) => (
          <div
            key={item.step}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
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

      <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <p className="text-sm font-semibold text-white">
          Best demo path
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Start with the dashboard summary, then scroll to the CRM workspace,
          import the sample CSV, test lead actions, and finish by reviewing AI
          insights and exporting the lead list.
        </p>
      </div>
    </section>
  );
}