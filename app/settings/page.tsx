import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Workspace
      </p>

      <h1 className="mt-3 text-4xl font-bold">Settings</h1>

      <p className="mt-3 text-slate-400">
        Manage workspace preferences, integrations, and automation settings.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-white">Integrations</h2>

          <div className="mt-5 space-y-4">
            {["HubSpot CRM", "Slack", "n8n", "OpenAI"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <span className="text-slate-300">{item}</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-white">Automation Rules</h2>

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p>✅ Auto-score new leads</p>
            <p>✅ Create follow-up tasks for hot leads</p>
            <p>✅ Notify founder when deal value is above $25K</p>
            <p>✅ Generate AI outreach drafts</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}