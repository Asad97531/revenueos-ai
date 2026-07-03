import { AccountInsights } from "@/components/dashboard/AccountInsights";
import { AIRecommendations } from "@/components/dashboard/AIRecommendations";
import { CaseStudySnapshot } from "@/components/dashboard/CaseStudySnapshot";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { DemoDataNotice } from "@/components/dashboard/DemoDataNotice";
import { DemoGuide } from "@/components/dashboard/DemoGuide";
import { ExecutiveSummary } from "@/components/dashboard/ExecutiveSummary";
import { FeatureChecklist } from "@/components/dashboard/FeatureChecklist";
import { FollowUpReminders } from "@/components/dashboard/FollowUpReminders";
import { ICPBreakdown } from "@/components/dashboard/ICPBreakdown";
import { MetricsExplanation } from "@/components/dashboard/MetricsExplanation";
import { PipelineHealth } from "@/components/dashboard/PipelineHealth";
import { PortfolioCTA } from "@/components/dashboard/PortfolioCTA";
import { ProductRoadmap } from "@/components/dashboard/ProductRoadmap";
import { ProjectHighlights } from "@/components/dashboard/ProjectHighlights";
import { ProjectLinks } from "@/components/dashboard/ProjectLinks";
import { QualityChecklist } from "@/components/dashboard/QualityChecklist";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecruiterNotes } from "@/components/dashboard/RecruiterNotes";
import { RevenueForecast } from "@/components/dashboard/RevenueForecast";
import { SalesPerformance } from "@/components/dashboard/SalesPerformance";
import { SalesWorkflow } from "@/components/dashboard/SalesWorkflow";
import { SkillsDemonstrated } from "@/components/dashboard/SkillsDemonstrated";
import { StatCards } from "@/components/dashboard/StatCards";
import { TechStackOverview } from "@/components/dashboard/TechStackOverview";
import { LeadsClient } from "@/components/leads/LeadsClient";

export function DashboardSections() {
  return (
    <div className="space-y-8">
      <StatCards />

      <DashboardNav />

      <div id="summary" className="scroll-mt-8">
        <ExecutiveSummary />
      </div>

      <section id="demo-data" className="scroll-mt-8">
        <DemoDataNotice />
      </section>

      <QuickActions />

      <section id="project-highlights" className="scroll-mt-8">
        <ProjectHighlights />
      </section>

      <section id="recruiter-notes" className="scroll-mt-8">
        <RecruiterNotes />
      </section>

      <section id="case-study" className="scroll-mt-8">
        <CaseStudySnapshot />
      </section>

      <section id="skills-demonstrated" className="scroll-mt-8">
        <SkillsDemonstrated />
      </section>

      <section id="metrics-explanation" className="scroll-mt-8">
        <MetricsExplanation />
      </section>

      <section id="quality-checklist" className="scroll-mt-8">
        <QualityChecklist />
      </section>

      <section id="product-roadmap" className="scroll-mt-8">
        <ProductRoadmap />
      </section>

      <section id="feature-checklist" className="scroll-mt-8">
        <FeatureChecklist />
      </section>

      <section id="demo-guide" className="scroll-mt-8">
        <DemoGuide />
      </section>

      <section id="project-links" className="scroll-mt-8">
        <ProjectLinks />
      </section>

      <section id="sales-workflow" className="scroll-mt-8">
        <SalesWorkflow />
      </section>

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

      <section id="tech-stack" className="scroll-mt-8">
        <TechStackOverview />
      </section>

      <section id="crm-workspace" className="scroll-mt-8">
        <LeadsClient />
      </section>

      <PortfolioCTA />

      <DashboardFooter />
    </div>
  );
}