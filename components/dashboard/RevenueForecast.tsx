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

const stageForecastRows = [
  {
    stage: "Qualified",
    deals: 7,
    pipeline: "₹38L",
    weighted: "₹15L",
    confidence: "40%",
    action: "Book demos",
  },
  {
    stage: "Proposal",
    deals: 5,
    pipeline: "₹62L",
    weighted: "₹43L",
    confidence: "70%",
    action: "Follow up",
  },
  {
    stage: "Negotiation",
    deals: 3,
    pipeline: "₹48L",
    weighted: "₹38L",
    confidence: "80%",
    action: "Close blockers",
  },
  {
    stage: "Closed",
    deals: 4,
    pipeline: "₹32L",
    weighted: "₹32L",
    confidence: "100%",
    action: "Onboard",
  },
];

function getConfidenceStyles(confidence: string) {
  const confidenceNumber = Number(confidence.replace("%", ""));

  if (confidenceNumber >= 80) {
    return "border-green-500/30 bg-green-500/10 text-green-300";
  }

  if (confidenceNumber >= 60) {
    return "border-cyan-400/30 bg-cyan-400/10 text-cyan-300";
  }

  return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
}

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
            A simple forecast view showing committed revenue, best-case revenue,
            open pipeline, at-risk deals, and stage-wise weighted forecast.
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

          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Target Progress</span>
              <span>68%</span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[68%] rounded-full bg-cyan-400" />
            </div>

            <p className="mt-3 text-xs text-slate-400">
              ₹86L forecasted against ₹1.25Cr quarterly target.
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

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
        <div className="border-b border-slate-800 bg-slate-950 p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">
                Stage-wise weighted forecast
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Shows how pipeline value changes after applying confidence by
                stage.
              </p>
            </div>

            <span className="w-fit rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-400">
              Weighted view
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950 text-slate-400">
              <tr>
                <th className="px-4 py-3">Stage</th>
                <th className="px-4 py-3">Deals</th>
                <th className="px-4 py-3">Pipeline</th>
                <th className="px-4 py-3">Weighted</th>
                <th className="px-4 py-3">Confidence</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {stageForecastRows.map((row) => (
                <tr
                  key={row.stage}
                  className="border-t border-slate-800 text-slate-300"
                >
                  <td className="px-4 py-4 font-semibold text-white">
                    {row.stage}
                  </td>

                  <td className="px-4 py-4">{row.deals}</td>

                  <td className="px-4 py-4">{row.pipeline}</td>

                  <td className="px-4 py-4 font-semibold text-white">
                    {row.weighted}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${getConfidenceStyles(
                        row.confidence
                      )}`}
                    >
                      {row.confidence}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-slate-400">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 p-4 md:hidden">
          {stageForecastRows.map((row) => (
            <div
              key={row.stage}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-white">{row.stage}</h4>
                  <p className="mt-1 text-xs text-slate-500">
                    {row.deals} deals
                  </p>
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${getConfidenceStyles(
                    row.confidence
                  )}`}
                >
                  {row.confidence}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-slate-500">Pipeline</p>
                  <p className="mt-1 font-semibold text-white">
                    {row.pipeline}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Weighted</p>
                  <p className="mt-1 font-semibold text-white">
                    {row.weighted}
                  </p>
                </div>
              </div>

              <p className="mt-4 rounded-lg border border-slate-800 bg-slate-900 p-3 text-xs text-slate-400">
                Next action: {row.action}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}