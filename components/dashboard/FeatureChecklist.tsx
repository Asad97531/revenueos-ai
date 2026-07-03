const features = [
  {
    title: "Lead Management",
    description:
      "Add, edit, delete, search, filter, and manage CRM leads in one workspace.",
  },
  {
    title: "CSV Import and Export",
    description:
      "Import leads from a CSV file, download sample CSV data, and export filtered lead lists.",
  },
  {
    title: "AI Recommendations",
    description:
      "Show AI-style recommendations based on lead score, stage, value, and follow-up priority.",
  },
  {
    title: "Cold Email Drafts",
    description:
      "Generate sales-style email drafts and open them directly in the user's email client.",
  },
  {
    title: "Pipeline Insights",
    description:
      "Display pipeline health, revenue forecast, conversion funnel, and sales performance metrics.",
  },
  {
    title: "Follow-up Tracking",
    description:
      "Track reminders, mark follow-ups as done, and identify high-priority sales actions.",
  },
  {
    title: "Account Intelligence",
    description:
      "Highlight top accounts, expansion opportunities, churn risks, and ICP fit signals.",
  },
  {
    title: "Responsive SaaS UI",
    description:
      "Built with a modern dark dashboard layout that works across desktop and mobile screens.",
  },
];

export function FeatureChecklist() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Feature Checklist
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Product features included
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A clear checklist of the CRM, RevOps, AI-style, and dashboard
            features built into RevenueOS AI.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          8 features
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                ✓
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
        <p className="text-sm font-semibold text-white">
          Recruiter takeaway
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          This project demonstrates that you can build a practical SaaS-style
          sales product with clean UI, CRM workflows, data handling, and
          AI-inspired business logic.
        </p>
      </div>
    </section>
  );
}