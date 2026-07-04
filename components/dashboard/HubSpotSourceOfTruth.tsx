const crmObjects = [
  {
    title: "Contact Created",
    object: "Contact",
    status: "Synced",
    description:
      "The lead contact is created in HubSpot with name, email, job title, persona, lead source, and ICP score.",
  },
  {
    title: "Company Enriched",
    object: "Company",
    status: "Updated",
    description:
      "The company record stores Clay enrichment data such as industry, employee size, website, trigger found, and research summary.",
  },
  {
    title: "Deal Created",
    object: "Deal",
    status: "Open",
    description:
      "A HubSpot deal is created for qualified accounts so the opportunity can move through the sales pipeline.",
  },
  {
    title: "Task Assigned",
    object: "Task",
    status: "Active",
    description:
      "A follow-up task is assigned to the founder or sales rep based on ICP score, urgency, and recommended next action.",
  },
  {
    title: "Lifecycle Updated",
    object: "Lifecycle Stage",
    status: "Tracked",
    description:
      "The lead moves from subscriber or lead to MQL, SQL, opportunity, customer, or expansion account.",
  },
  {
    title: "Revenue Tracked",
    object: "Dashboard",
    status: "Reported",
    description:
      "Pipeline value, conversion rate, source performance, and closed-won revenue are tracked inside HubSpot dashboards.",
  },
];

const customProperties = [
  "ICP Score",
  "Clay Enrichment Status",
  "Trigger Found",
  "Trigger Type",
  "Clay Research Summary",
  "Personalization Angle",
  "Next Best Action",
  "Sales Priority",
  "Lead Source",
  "Lifecycle Stage",
];

export function HubSpotSourceOfTruth() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            HubSpot Source of Truth
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            CRM system that tracks the full customer journey
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            HubSpot is the central record for every lead, company, deal, task,
            lifecycle stage, and revenue outcome. Clay enriches the data,
            Make.com routes the workflow, and HubSpot stores the final truth.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {crmObjects.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.object}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {item.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            HubSpot Custom Properties
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Fields created for GTM tracking
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            These properties show that the CRM is designed for GTM operations,
            not just basic contact storage.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {customProperties.map((property) => (
              <span
                key={property}
                className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-xs font-semibold text-slate-200"
              >
                {property}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Example HubSpot Record
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">Company</span>
                <span className="font-semibold text-white">Acme SaaS</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-400">ICP Score</span>
                <span className="font-semibold text-cyan-300">91/100</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-400">Trigger</span>
                <span className="font-semibold text-white">Hiring SDRs</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-400">Stage</span>
                <span className="font-semibold text-white">SQL</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-400">Next Action</span>
                <span className="font-semibold text-cyan-300">
                  Send Slack alert
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}