const metrics = [
  {
    title: "Pipeline Value",
    description:
      "Represents the total demo opportunity value across active CRM leads.",
  },
  {
    title: "Lead Score",
    description:
      "Shows how warm or high-priority a lead is based on sales readiness.",
  },
  {
    title: "Forecast Confidence",
    description:
      "Represents how likely revenue is to close based on stage and deal quality.",
  },
  {
    title: "ICP Fit Score",
    description:
      "Shows how closely active leads match the ideal customer profile.",
  },
  {
    title: "Follow-up Risk",
    description:
      "Highlights accounts that may lose momentum if sales action is delayed.",
  },
  {
    title: "Conversion Funnel",
    description:
      "Shows how leads move from new lead to qualified, proposal, negotiation, and closed stages.",
  },
];

export function MetricsExplanation() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Metrics Explanation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            How to read the dashboard numbers
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            These metrics are demo values created to show how a RevOps dashboard
            can translate CRM data into pipeline, forecast, risk, and account
            prioritization insights.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Demo logic
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-bold text-white">{metric.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
        <p className="text-sm font-semibold text-white">
          Important note
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          The current version uses demo and browser-stored data. The purpose is
          to demonstrate product thinking, sales workflow design, and frontend
          implementation rather than live CRM reporting.
        </p>
      </div>
    </section>
  );
}