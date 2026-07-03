const funnelStages = [
  {
    stage: "New Lead",
    count: 12,
    percentage: 100,
    description: "New accounts added to the CRM.",
  },
  {
    stage: "Qualified",
    count: 8,
    percentage: 67,
    description: "Leads that match the ideal customer profile.",
  },
  {
    stage: "Proposal",
    count: 5,
    percentage: 42,
    description: "Leads with active proposals shared.",
  },
  {
    stage: "Negotiation",
    count: 3,
    percentage: 25,
    description: "Deals currently discussing price, terms, or timeline.",
  },
  {
    stage: "Closed",
    count: 2,
    percentage: 17,
    description: "Won opportunities ready for onboarding.",
  },
];

export function ConversionFunnel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Conversion Funnel
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Lead movement by stage
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A funnel-style view showing how many leads move from new lead to
            closed revenue.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          CRM funnel
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        {funnelStages.map((item, index) => (
          <div
            key={item.stage}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-white">{item.stage}</h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="min-w-28 text-left md:text-right">
                <p className="text-2xl font-bold text-white">{item.count}</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Leads
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Conversion from top</span>
                <span>{item.percentage}%</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}