const forecastStages = [
  {
    stage: "Commit",
    value: "₹42L",
    percentage: 72,
    description: "Deals most likely to close this cycle.",
  },
  {
    stage: "Best Case",
    value: "₹86L",
    percentage: 58,
    description: "Strong opportunities that need follow-up.",
  },
  {
    stage: "Pipeline",
    value: "₹1.8Cr",
    percentage: 82,
    description: "Total open opportunity value in CRM.",
  },
  {
    stage: "At Risk",
    value: "₹24L",
    percentage: 38,
    description: "Deals that may slip without action.",
  },
];

export function RevenueForecast() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Revenue Forecast
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Forecast by deal confidence
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A simple forecast view showing how much revenue is committed, best
            case, open pipeline, and at risk.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Demo forecast
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">Expected Revenue</p>

          <p className="mt-3 text-5xl font-bold text-white">₹86L</p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Based on weighted opportunities across qualified, proposal, and
            negotiation stages.
          </p>

          <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
            <p className="text-xs uppercase tracking-widest text-green-300">
              Forecast Status
            </p>

            <p className="mt-2 text-sm font-semibold text-white">
              Healthy, but follow-up speed matters
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {forecastStages.map((item) => (
            <div
              key={item.stage}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.stage}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>

                <p className="text-xl font-bold text-white">{item.value}</p>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>Confidence</span>
                <span>{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}