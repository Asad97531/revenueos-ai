const pipelineHealthItems = [
  {
    title: "Pipeline Coverage",
    value: "Strong",
    description: "Enough open opportunities to support healthy follow-up activity.",
    metric: "82%",
  },
  {
    title: "Follow-up Risk",
    value: "Medium",
    description: "Some qualified and proposal-stage leads need timely follow-up.",
    metric: "3 leads",
  },
  {
    title: "Conversion Focus",
    value: "Proposal",
    description: "Best short-term revenue opportunity is in proposal and negotiation stages.",
    metric: "High intent",
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
            and where sales attention should go next.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Auto-generated
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
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
    </section>
  );
}