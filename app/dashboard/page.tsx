import { AccountInsights } from "@/components/dashboard/AccountInsights";
import { AIRecommendations } from "@/components/dashboard/AIRecommendations";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { ExecutiveSummary } from "@/components/dashboard/ExecutiveSummary";
import { FollowUpReminders } from "@/components/dashboard/FollowUpReminders";
import { ICPBreakdown } from "@/components/dashboard/ICPBreakdown";
import { PipelineHealth } from "@/components/dashboard/PipelineHealth";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RevenueForecast } from "@/components/dashboard/RevenueForecast";
import { SalesPerformance } from "@/components/dashboard/SalesPerformance";
import { StatCards } from "@/components/dashboard/StatCards";
import { LeadsClient } from "@/components/leads/LeadsClient";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader />

        <div className="space-y-8">
          <StatCards />

          <DashboardNav />

          <div id="summary" className="scroll-mt-8">
            <ExecutiveSummary />
          </div>

          <QuickActions />

          <div id="pipeline-health" className="scroll-mt-8">
            <PipelineHealth />
          </div>

          <div id="revenue-forecast" className="scroll-mt-8">
            <RevenueForecast />
          </div>

          <div id="conversion-funnel" className="scroll-mt-8">
            <ConversionFunnel />
          </div>

          <div id="follow-ups" className="scroll-mt-8">
            <FollowUpReminders />
          </div>

          <div id="sales-performance" className="scroll-mt-8">
            <SalesPerformance />
          </div>

          <div id="account-insights" className="scroll-mt-8">
            <AccountInsights />
          </div>

          <section id="ai-insights" className="scroll-mt-8">
            <ICPBreakdown />
          </section>

          <AIRecommendations />

          <section id="crm-workspace" className="scroll-mt-8">
            <LeadsClient />
          </section>
        </div>
      </div>
    </main>
  );
}