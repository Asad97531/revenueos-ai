const accountInsights = [
  {
    title: "Top Account",
    company: "CloudKart",
    insight:
      "High lead score, proposal-stage opportunity, and strong buying intent make this the top account to prioritize.",
    tag: "High priority",
  },
  {
    title: "Expansion Opportunity",
    company: "Nova Retail",
    insight:
      "This account may need onboarding support and could be a good fit for future upsell or expansion discussions.",
    tag: "Expansion",
  },
  {
    title: "Churn Risk Signal",
    company: "GrowthLabs",
    insight:
      "The lead has shown interest but still needs a demo. Delayed follow-up may reduce conversion chances.",
    tag: "Follow up",
  },
];

function getTagStyles(tag: string) {
  if (tag === "High priority") {
    return "border-red-500/30 bg-red-500/10 text-red-300";
  }

  if (tag === "Expansion") {
    return "border-green-500/30 bg-green-500/10 text-green-300";
  }

  return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
}

export function AccountInsights() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Account Insights
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            AI account intelligence
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A quick account-level view of priority accounts, expansion signals,
            and follow-up risks.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          AI insights
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {accountInsights.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{item.title}</p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.company}
                </h3>
              </div>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${getTagStyles(
                  item.tag
                )}`}
              >
                {item.tag}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {item.insight}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Recommended account focus
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Start with proposal-stage and negotiation-stage accounts before
              qualifying new leads. These accounts are closer to revenue.
            </p>
          </div>

          <span className="w-fit rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
            Focus: CloudKart
          </span>
        </div>
      </div>
    </section>
  );
}