import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevenueOS AI Case Study | GTM Automation Engine",
  description:
    "A case study explaining how RevenueOS AI simulates Clay enrichment, Make.com orchestration, Slack alerts, HubSpot CRM tracking, and revenue dashboarding.",
};

const workflowSteps = [
  {
    title: "Lead Captured",
    tool: "Website / CSV / Target List",
    description:
      "A lead enters the GTM workflow through a form, imported CSV, or target account list.",
  },
  {
    title: "Account Enriched",
    tool: "Clay-style Enrichment",
    description:
      "The account is enriched with company, role, industry, website, and buying context.",
  },
  {
    title: "Signal Researched",
    tool: "Claygent-style Research",
    description:
      "The system identifies hiring signals, funding news, product launches, and personalization angles.",
  },
  {
    title: "Lead Scored",
    tool: "ICP Scoring",
    description:
      "Each lead receives a score based on fit, urgency, trigger strength, and revenue potential.",
  },
  {
    title: "Workflow Routed",
    tool: "Make.com-style Automation",
    description:
      "High-priority leads are routed to Slack alerts, HubSpot tasks, or deal creation workflows.",
  },
  {
    title: "Revenue Tracked",
    tool: "HubSpot-style CRM",
    description:
      "Contacts, companies, deals, lifecycle stage, source, and revenue impact are tracked in CRM.",
  },
];

const proofItems = [
  "Built a complete GTM dashboard using Next.js, TypeScript, and Tailwind CSS",
  "Created a HubSpot-style CRM workspace with add, edit, delete, search, filter, import, and export",
  "Imported RevenueOS demo contacts into a real HubSpot CRM workspace",
  "Created a Make.com webhook prototype that received hot-lead data",
  "Designed Clay-style enrichment and Claygent-style research sections",
  "Created revenue dashboards for pipeline, customer journey, and source tracking",
];

const statusItems = [
  {
    label: "Frontend Dashboard",
    status: "Built",
  },
  {
    label: "Lead Workspace",
    status: "Built",
  },
  {
    label: "CSV Import / Export",
    status: "Built",
  },
  {
    label: "HubSpot CRM Test",
    status: "Tested",
  },
  {
    label: "Make.com Webhook",
    status: "Tested",
  },
  {
    label: "Clay Integration",
    status: "Simulated",
  },
  {
    label: "Slack Alerts",
    status: "Planned",
  },
  {
    label: "Full API Automation",
    status: "Planned",
  },
];

function getStatusStyles(status: string) {
  if (status === "Built") {
    return "border-green-400/30 bg-green-500/10 text-green-200";
  }

  if (status === "Tested") {
    return "border-cyan-400/30 bg-cyan-500/10 text-cyan-200";
  }

  if (status === "Simulated") {
    return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200";
  }

  return "border-slate-400/30 bg-slate-500/10 text-slate-200";
}

export default function CaseStudyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-8 text-white">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/gtm-bg.jpg?v=3')",
        }}
      />

      <div className="fixed inset-0 bg-slate-950/70" />
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/40 to-cyan-950/20" />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-140px] top-80 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              RevenueOS AI
            </p>

            <p className="mt-2 text-sm text-slate-300">
              GTM Automation Engine Case Study
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/dashboard"
              className="rounded-full bg-cyan-400 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
            >
              Open Dashboard
            </a>

            <a
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Home
            </a>
          </div>
        </header>

        <section className="py-12">
          <div className="max-w-4xl">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Case Study
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              How RevenueOS AI turns raw leads into prioritized revenue actions.
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              RevenueOS AI is a GTM Engineer portfolio project that demonstrates
              how a sales team can capture leads, enrich account data, research
              buying signals, score ICP fit, route high-priority accounts, and
              track revenue outcomes inside a CRM workflow.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Problem
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              Manual lead research slows down sales teams.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Sales teams often waste time researching accounts, checking
              buying signals, updating CRM records, and deciding which leads
              should get fast follow-up.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Solution
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              Automate enrichment, scoring, and routing.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              RevenueOS AI shows how Clay, Make.com, Slack, and HubSpot can work
              together as one GTM operating system for lead prioritization and
              revenue tracking.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Outcome
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              A recruiter-ready GTM systems project.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              The project demonstrates GTM thinking, CRM operations, workflow
              automation logic, AI-style research, and frontend development in
              one practical portfolio build.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Workflow
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            GTM automation flow
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            The dashboard explains how a lead moves from raw record to
            enriched, prioritized, routed, and revenue-tracked opportunity.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  {index + 1}
                </span>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {step.tool}
                </p>

                <h3 className="mt-2 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Proof of Work
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              What was built and tested
            </h2>

            <div className="mt-6 space-y-3">
              {proofItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-6 shadow-2xl backdrop-blur-md lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Implementation Status
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Built vs tested vs simulated
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.label}
                  </p>

                  <span
                    className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyles(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Interview Explanation
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            How I explain this project
          </h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm leading-7 text-slate-200">
              “RevenueOS AI is a GTM Automation Engine I built as a portfolio
              project. It simulates how leads can be captured, enriched with
              Clay-style research, scored by ICP fit, routed through
              Make.com-style automation, alerted in Slack, and tracked in
              HubSpot from first touch to revenue. I also tested the workflow
              with a real HubSpot CRM import and a Make.com webhook prototype.”
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/dashboard"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Dashboard
            </a>

            <a
              href="https://github.com/Asad97531/revenueos-ai"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View GitHub
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-white/10 py-8">
          <p className="text-sm text-slate-500">
            Built by Asad Ali as a GTM Automation Engine portfolio project.
          </p>
        </footer>
      </div>
    </main>
  );
}