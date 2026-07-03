const summaryItems = [
  {
    title: "Pipeline outlook",
    value: "Healthy",
    description:
      "Pipeline coverage is strong, but high-intent accounts need faster follow-up.",
  },
  {
    title: "Top priority",
    value: "CloudKart",
    description:
      "Proposal-stage lead with strong buying intent and high revenue potential.",
  },
  {
    title: "Main risk",
    value: "Delayed follow-up",
    description:
      "Warm leads may lose momentum if proposal and negotiation follow-ups are delayed.",
  },
];

export function ExecutiveSummary() {
  return (
    <section className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            AI Executive Summary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            What needs attention today
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            RevenueOS AI summarizes pipeline health, account priority, and risk
            signals so sales teams know where to focus first.
          </p>
        </div>

        <span className="w-fit rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
          Today&apos;s brief
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {summaryItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <p className="text-sm text-slate-400">{item.title}</p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {item.value}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <p className="text-sm font-semibold text-white">
          Recommended next move
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Start with proposal-stage leads, send personalized follow-up emails,
          and move negotiation accounts toward closure before adding more new
          leads.
        </p>
      </div>
    </section>
  );
}