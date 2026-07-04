const enrichmentFields = [
  {
    label: "Company Profile",
    value: "Industry, employee size, location, website, LinkedIn",
  },
  {
    label: "Buyer Context",
    value: "Persona, seniority, likely decision-maker, department",
  },
  {
    label: "Hiring Triggers",
    value: "Sales hiring, RevOps hiring, SDR team expansion",
  },
  {
    label: "Recent News",
    value: "Funding, product launch, market expansion, leadership change",
  },
  {
    label: "Sales Angle",
    value: "Personalized opener, pain point, next-best message",
  },
  {
    label: "ICP Score",
    value: "Fit score based on company size, role, trigger, and urgency",
  },
];

const claygentPrompts = [
  {
    title: "Hiring Signal Research",
    prompt:
      "Find whether this company is hiring for sales, growth, RevOps, SDR, BDR, or customer success roles.",
    output:
      "Company is hiring 3 SDRs and 1 RevOps Manager, suggesting outbound growth investment.",
  },
  {
    title: "Recent News Research",
    prompt:
      "Find recent news, funding, product launches, or expansion signals for this company.",
    output:
      "Company recently announced expansion into a new market, creating a strong timing trigger.",
  },
  {
    title: "Personalized Insight",
    prompt:
      "Create a personalized sales insight based on the company's recent activity and likely GTM challenge.",
    output:
      "The company may need better lead routing and enrichment as its sales team scales.",
  },
];

const sampleRows = [
  {
    company: "Acme SaaS",
    domain: "acmesaas.com",
    trigger: "Hiring SDRs",
    score: "91",
    status: "Ready for Slack alert",
  },
  {
    company: "Northstar AI",
    domain: "northstar.ai",
    trigger: "Funding news",
    score: "86",
    status: "Create HubSpot deal",
  },
  {
    company: "BrightCart",
    domain: "brightcart.io",
    trigger: "E-commerce expansion",
    score: "79",
    status: "Create sales task",
  },
];

export function ClayResearchEngine() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Data Enrichment & Research
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Clay layer for account enrichment and Claygent research
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            This section represents the research work that used to take sales
            teams hours or weeks. Clay enriches lead and company data, while
            Claygent researches buying triggers, hiring signals, recent news,
            and personalized outreach insights at scale.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {enrichmentFields.map((field) => (
              <div
                key={field.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {field.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {field.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Claygent Prompts
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Research prompts used by the GTM workflow
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              These prompts show how the system finds sales-relevant signals
              before the lead is routed into HubSpot.
            </p>

            <div className="mt-5 space-y-4">
              {claygentPrompts.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                >
                  <p className="font-semibold text-white">{item.title}</p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Prompt
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {item.prompt}
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Example Output
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cyan-200">
                    {item.output}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Clay Table Preview
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-xs uppercase tracking-wider text-slate-400">
                  <tr>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Trigger</th>
                    <th className="px-4 py-3">Score</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {sampleRows.map((row) => (
                    <tr
                      key={row.company}
                      className="border-t border-white/10 text-slate-300"
                    >
                      <td className="px-4 py-4">
                        <p className="font-semibold text-white">
                          {row.company}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {row.domain}
                        </p>
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-300">
                        {row.trigger}
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                          {row.score}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-xs font-semibold text-cyan-200">
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              In the real version, these rows would come from Clay enrichment
              and then sync into HubSpot through Make.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}