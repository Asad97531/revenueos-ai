const roadmapItems = [
  {
    title: "Backend database",
    status: "Future",
    description:
      "Move CRM lead data from browser LocalStorage to a real database like Supabase, PostgreSQL, or MongoDB.",
  },
  {
    title: "User authentication",
    status: "Future",
    description:
      "Add login, user accounts, and secure access so each user can manage their own CRM workspace.",
  },
  {
    title: "Real AI integration",
    status: "Future",
    description:
      "Connect AI recommendations and email drafts to a real AI API for dynamic sales insights.",
  },
  {
    title: "CRM integrations",
    status: "Future",
    description:
      "Connect with tools like HubSpot, Salesforce, Apollo, or Google Sheets for real sales workflows.",
  },
  {
    title: "Team collaboration",
    status: "Future",
    description:
      "Add assigned owners, shared notes, activity history, and team-level pipeline visibility.",
  },
  {
    title: "Advanced analytics",
    status: "Future",
    description:
      "Add charts for conversion rate, pipeline velocity, stage movement, and follow-up performance.",
  },
];

export function ProductRoadmap() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Product Roadmap
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            What could be built next
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A clear roadmap showing how RevenueOS AI could evolve from a
            frontend portfolio demo into a full SaaS-style CRM product.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Future scope
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmapItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>

              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                {item.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <p className="text-sm leading-6 text-slate-400">
          The current version is built as a frontend CRM demo. Future
          improvements could include authentication, a production database, real
          AI generation, and CRM integrations to make it closer to a full SaaS
          product.
        </p>
      </div>
    </section>
  );
}