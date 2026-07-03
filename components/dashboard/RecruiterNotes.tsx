const recruiterNotes = [
  {
    title: "Sales workflow understanding",
    description:
      "Shows knowledge of lead stages, follow-ups, account prioritization, pipeline health, and sales actions.",
  },
  {
    title: "CRM product thinking",
    description:
      "Demonstrates how a sales team can manage leads, filter accounts, import CSV data, and act on CRM insights.",
  },
  {
    title: "AI-first sales mindset",
    description:
      "Includes AI-style recommendations, ICP breakdown, executive summary, account insights, and cold outreach support.",
  },
  {
    title: "Technical execution",
    description:
      "Built with Next.js, TypeScript, Tailwind CSS, LocalStorage, reusable components, and responsive UI patterns.",
  },
];

const roleFitItems = [
  "SDR / BDR",
  "Sales Operations",
  "RevOps Analyst",
  "Customer Success",
  "SaaS Sales",
  "GTM Internships",
];

export function RecruiterNotes() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Recruiter Notes
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Why this project matters
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            RevenueOS AI is designed to show both technical ability and sales
            workflow understanding for SaaS, RevOps, SDR, BDR, and customer
            facing roles.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Hiring manager friendly
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {recruiterNotes.map((note) => (
          <div
            key={note.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-bold text-white">{note.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {note.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-semibold text-white">
            Best-fit roles
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {roleFitItems.map((role) => (
              <span
                key={role}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <p className="text-sm font-semibold text-white">
            Interview talking point
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            “I built RevenueOS AI to combine my sales interest with technical
            execution. The project simulates how a RevOps team can import leads,
            score accounts, prioritize follow-ups, review pipeline health, and
            use AI-style insights to move deals forward.”
          </p>
        </div>
      </div>
    </section>
  );
}