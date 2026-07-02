import { DashboardLayout } from "@/components/layout/DashboardLayout";

const pipelineStages = [
  {
    stage: "New Lead",
    deals: ["Rippling", "Airtable"],
  },
  {
    stage: "Qualified",
    deals: ["Linear", "Figma"],
  },
  {
    stage: "Discovery",
    deals: ["Notion"],
  },
  {
    stage: "Demo",
    deals: ["Stripe"],
  },
  {
    stage: "Proposal",
    deals: ["HubSpot"],
  },
];

export default function PipelinePage() {
  return (
    <DashboardLayout>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Sales Pipeline
      </p>

      <h1 className="mt-3 text-4xl font-bold">Pipeline</h1>

      <p className="mt-3 text-slate-400">
        Track deals from first touch to closed won.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-5">
        {pipelineStages.map((stage) => (
          <div
            key={stage.stage}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
          >
            <h2 className="font-bold text-white">{stage.stage}</h2>

            <div className="mt-4 space-y-3">
              {stage.deals.map((deal) => (
                <div
                  key={deal}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300"
                >
                  {deal}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}