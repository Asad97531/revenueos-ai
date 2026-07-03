const pipelineHealthItems = [
  {
    title: "Pipeline Coverage",
    value: "Strong",
    description:
      "Enough open opportunities to support healthy follow-up activity.",
    metric: "82%",
  },
  {
    title: "Follow-up Risk",
    value: "Medium",
    description:
      "Some qualified and proposal-stage leads need timely follow-up.",
    metric: "3 leads",
  },
  {
    title: "Conversion Focus",
    value: "Proposal",
    description:
      "Best short-term revenue opportunity is in proposal and negotiation stages.",
    metric: "High intent",
  },
];

const forecastItems = [
  {
    label: "Forecast Confidence",
    value: "74%",
    helper: "Based on lead score and current stage mix.",
  },
  {
    label: "Risk Level",
    value: "Medium",
    helper: "Follow-up delay may reduce conversion chance.",
  },
  {
    label: "Best Action",
    value: "Follow up",
    helper: "Focus on proposal and negotiation leads first.",
  },
];

export function PipelineHealth() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Pipeline Health
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            AI revenue snapshot
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A quick executive-style summary of pipeline quality, follow-up risk,
            forecast confidence, and where sales attention should go next.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Auto-generated
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">Pipeline Health Score</p>

              <div className="mt-3 flex items-end gap-2">
                <p className="text-5xl font-bold text-white">82</p>
                <p className="pb-2 text-sm font-semibold text-slate-500">
                  /100
                </p>
              </div>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Your pipeline is healthy, but proposal and negotiation leads
                should be followed up quickly to avoid deal slippage.
              </p>
            </div>

            <div className="w-full md:w-56">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Weak</span>
                <span>Strong</span>
              </div>

              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[82%] rounded-full bg-cyan-400" />
              </div>

              <p className="mt-3 text-xs text-cyan-300">
                Strong pipeline coverage
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
            Recommended Action
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            Follow up on high-intent leads
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Prioritize leads in proposal and negotiation stages. These accounts
            are closer to revenue and should not stay idle.
          </p>

          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Suggested focus
            </p>

            <p className="mt-2 text-sm font-semibold text-white">
              Proposal → Negotiation → Qualified
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {pipelineHealthItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{item.title}</p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {item.value}
                </h3>
              </div>

              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-cyan-300">
                {item.metric}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {forecastItems.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <p className="text-sm text-slate-400">{item.label}</p>

            <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {item.helper}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}