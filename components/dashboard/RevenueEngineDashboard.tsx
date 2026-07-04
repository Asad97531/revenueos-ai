const journeyStages = [
  {
    stage: "First Click",
    count: "1,248",
    description: "Website visitors tracked as top-of-funnel demand.",
  },
  {
    stage: "Lead Captured",
    count: "248",
    description: "Form submissions, demo requests, or imported prospects.",
  },
  {
    stage: "Clay Enriched",
    count: "214",
    description: "Records enriched with company, buyer, and signal data.",
  },
  {
    stage: "High ICP",
    count: "42",
    description: "Accounts scored 80+ and marked as sales priority.",
  },
  {
    stage: "Meeting Booked",
    count: "18",
    description: "Qualified accounts converted into booked conversations.",
  },
  {
    stage: "Deal Created",
    count: "12",
    description: "HubSpot deals created from qualified GTM workflows.",
  },
];

const revenueMetrics = [
  {
    label: "Lead-to-Meeting",
    value: "7.2%",
    helper: "From captured leads to booked meetings",
  },
  {
    label: "Meeting-to-Deal",
    value: "66%",
    helper: "Meetings that became HubSpot deals",
  },
  {
    label: "Pipeline Created",
    value: "₹18.4L",
    helper: "Demo pipeline from enriched accounts",
  },
  {
    label: "Avg ICP Score",
    value: "84",
    helper: "Average score of routed opportunities",
  },
];

const sourceBreakdown = [
  {
    source: "Website Form",
    leads: "126",
    pipeline: "₹8.2L",
  },
  {
    source: "Hiring Trigger",
    leads: "54",
    pipeline: "₹5.1L",
  },
  {
    source: "Clay List Import",
    leads: "42",
    pipeline: "₹3.4L",
  },
  {
    source: "Founder Referral",
    leads: "26",
    pipeline: "₹1.7L",
  },
];

export function RevenueEngineDashboard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Revenue Engine Dashboard
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Full customer journey from first click to closed deal
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            This section shows how HubSpot dashboards would track the entire GTM
            journey. A GTM Engineer should not only enrich leads and automate
            workflows, but also measure what turns into pipeline and revenue.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Source of Truth
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            HubSpot reporting layer
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {revenueMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-sm text-slate-400">{metric.label}</p>

            <p className="mt-2 text-3xl font-bold text-white">
              {metric.value}
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              {metric.helper}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Customer Journey
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Funnel tracked inside HubSpot
          </h3>

          <div className="mt-6 space-y-4">
            {journeyStages.map((item, index) => (
              <div key={item.stage} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {index + 1}
                  </div>

                  {index !== journeyStages.length - 1 && (
                    <div className="h-full w-px bg-white/10" />
                  )}
                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.stage}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </div>

                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {item.count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Revenue by Source
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Which GTM channels create pipeline
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            This proves the workflow is not just automation. It connects each
            lead source to pipeline value and conversion quality.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950/50 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Leads</th>
                  <th className="px-4 py-3">Pipeline</th>
                </tr>
              </thead>

              <tbody>
                {sourceBreakdown.map((item) => (
                  <tr
                    key={item.source}
                    className="border-t border-white/10 text-slate-300"
                  >
                    <td className="px-4 py-4 font-semibold text-white">
                      {item.source}
                    </td>

                    <td className="px-4 py-4">{item.leads}</td>

                    <td className="px-4 py-4 font-semibold text-cyan-300">
                      {item.pipeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Recruiter Takeaway
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-200">
              This dashboard shows that the project can measure revenue impact,
              not just automate tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}