import { AIRecommendations } from "@/components/dashboard/AIRecommendations";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import { GTMHero } from "@/components/dashboard/GTMHero";
import { GTMWorkflowEngine } from "@/components/dashboard/GTMWorkflowEngine";
import { PipelineHealth } from "@/components/dashboard/PipelineHealth";
import { PortfolioCTA } from "@/components/dashboard/PortfolioCTA";
import { StatCards } from "@/components/dashboard/StatCards";
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

      <section id="workflow-engine" className="scroll-mt-8">
        <GTMWorkflowEngine />
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