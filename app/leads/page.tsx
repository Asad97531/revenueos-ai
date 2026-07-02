import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LeadsClient } from "@/components/leads/LeadsClient";

export default function LeadsPage() {
  return (
    <DashboardLayout>
      <LeadsClient />
    </DashboardLayout>
  );
}