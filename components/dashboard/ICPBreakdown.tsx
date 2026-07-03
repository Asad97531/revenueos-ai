const icpItems = [
  {
    title: "Company Fit",
    score: 86,
    status: "Strong",
    description:
      "Most active accounts match the target company profile for B2B SaaS and growth-stage teams.",
  },
  {
    title: "Buying Intent",
    score: 78,
    status: "Good",
    description:
      "Proposal and negotiation-stage leads show strong interest and should be prioritized.",
  },
  {
    title: "Revenue Potential",
    score: 82,
    status: "Strong",
    description:
      "Pipeline contains several high-value opportunities across proposal and negotiation stages.",
  },
  {
    title: "Follow-up Urgency",
    score: 69,
    status: "Needs action",
    description:
      "Some warm leads need faster follow-up to prevent deal slippage.",
  },
];

function getStatusStyles(status: string) {
  if (status === "Strong") {
    return "border-green-500/30 bg-green-500/10 text-green-300";
  }

  if (status === "Good") {
    return "border-cyan-400/30 bg-cyan-400/10 text-cyan-300";
  }

  return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
}

export function ICPBreakdown() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            ICP Fit Breakdown
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ideal customer profile analysis
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A sales-focused view showing how well your active leads match the
            ideal customer profile across fit, intent, revenue, and urgency.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          ICP score: 79
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {icpItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{item.title}</p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {item.score}
                </p>
              </div>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyles(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400"
                style={{ width: `${item.score}%` }}
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              AI qualification insight
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Focus on accounts with high buying intent and strong revenue
              potential before adding more new leads to the pipeline.
            </p>
          </div>

          <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            Prioritize warm accounts
          </span>
        </div>
      </div>
    </section>
  );
}