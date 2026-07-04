import { AIRecommendations } from "@/components/dashboard/AIRecommendations";
import { ClayResearchEngine } from "@/components/dashboard/ClayResearchEngine";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import { GTMCommandNav } from "@/components/dashboard/GTMCommandNav";
import { GTMHero } from "@/components/dashboard/GTMHero";
import { GTMImplementationStatus } from "@/components/dashboard/GTMImplementationStatus";
import { GTMWorkflowEngine } from "@/components/dashboard/GTMWorkflowEngine";
import { HubSpotSourceOfTruth } from "@/components/dashboard/HubSpotSourceOfTruth";
import { PipelineHealth } from "@/components/dashboard/PipelineHealth";
import { PortfolioCTA } from "@/components/dashboard/PortfolioCTA";
import { RevenueEngineDashboard } from "@/components/dashboard/RevenueEngineDashboard";
import { StatCards } from "@/components/dashboard/StatCards";
import { WorkflowOrchestration } from "@/components/dashboard/WorkflowOrchestration";
import { LeadsClient } from "@/components/leads/LeadsClient";

export function DashboardSections() {
  return (
    <div className="space-y-8">
      <section id="hero" className="scroll-mt-8">
        <GTMHero />
      </section>

      <section id="stats" className="scroll-mt-8">
        <StatCards />
      </section>

      <section id="command-nav" className="scroll-mt-8">
        <GTMCommandNav />
      </section>

      <section id="workflow-engine" className="scroll-mt-8">
        <GTMWorkflowEngine />
      </section>

      <section id="clay-research-engine" className="scroll-mt-8">
        <ClayResearchEngine />
      </section>

      <section id="workflow-orchestration" className="scroll-mt-8">
        <WorkflowOrchestration />
      </section>

      <section id="hubspot-source-of-truth" className="scroll-mt-8">
        <HubSpotSourceOfTruth />
      </section>

      <section id="revenue-engine-dashboard" className="scroll-mt-8">
        <RevenueEngineDashboard />
      </section>

      <section id="implementation-status" className="scroll-mt-8">
        <GTMImplementationStatus />
      </section>

      <section id="crm-workspace" className="scroll-mt-8">
        <LeadsClient />
      </section>

      <section id="pipeline-health" className="scroll-mt-8">
        <PipelineHealth />
      </section>

      <section id="ai-recommendations" className="scroll-mt-8">
        <AIRecommendations />
      </section>

      <section id="portfolio-cta" className="scroll-mt-8">
        <PortfolioCTA />
      </section>

      <DashboardFooter />
    </div>
  );
}