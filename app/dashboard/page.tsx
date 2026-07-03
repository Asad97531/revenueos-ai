import { AccountInsights } from "@/components/dashboard/AccountInsights";
import { AIRecommendations } from "@/components/dashboard/AIRecommendations";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { ExecutiveSummary } from "@/components/dashboard/ExecutiveSummary";
import { FollowUpReminders } from "@/components/dashboard/FollowUpReminders";
import { ICPBreakdown } from "@/components/dashboard/ICPBreakdown";
import { PipelineHealth } from "@/components/dashboard/PipelineHealth";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RevenueForecast } from "@/components/dashboard/RevenueForecast";
import { SalesPerformance } from "@/components/dashboard/SalesPerformance";
import { LeadsClient } from "@/components/leads/LeadsClient";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              RevenueOS AI
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
              Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              Track pipeline value, prioritize sales follow-ups, manage leads,
              and generate AI-style outreach recommendations.
            </p>
          </div>

          <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Live CRM
          </div>
        </div>

        <div className="space-y-8">
          <section className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Pipeline Value</p>
              <p className="mt-2 text-3xl font-bold text-white">₹1.8Cr</p>
              <p className="mt-1 text-xs text-slate-500">
                Demo revenue pipeline
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Active Leads</p>
              <p className="mt-2 text-3xl font-bold text-white">24</p>
              <p className="mt-1 text-xs text-slate-500">
                Open opportunities
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Average Score</p>
              <p className="mt-2 text-3xl font-bold text-white">78</p>
              <p className="mt-1 text-xs text-slate-500">
                Lead quality average
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Hot Leads</p>
              <p className="mt-2 text-3xl font-bold text-white">9</p>
              <p className="mt-1 text-xs text-slate-500">
                High intent accounts
              </p>
            </div>
          </section>

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