import { RecentLeadsTable } from "@/components/dashboard/RecentLeadsTable";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AddLeadDialog } from "@/components/leads/AddLeadDialog";

export default function LeadsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            CRM
          </p>

          <h1 className="mt-3 text-4xl font-bold">Leads</h1>

          <p className="mt-3 text-slate-400">
            Manage inbound leads, qualification scores, deal stages, and pipeline value.
          </p>
        </div>

        <AddLeadDialog />
      </div>

      <div className="mt-8">
        <RecentLeadsTable />
      </div>
    </DashboardLayout>
  );
}