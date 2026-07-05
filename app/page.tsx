import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevenueOS AI | GTM Automation Engine",
  description:
    "RevenueOS AI is a GTM Engineer portfolio project showing Clay-style enrichment, Make.com workflow orchestration, Slack alerts, HubSpot CRM tracking, and revenue dashboarding.",
};

const features = [
  "Clay-style account enrichment",
  "Claygent research simulation",
  "ICP scoring and lead priority",
  "Make.com workflow logic",
  "Slack hot-lead alert preview",
  "HubSpot CRM source of truth",
  "CSV import and export",
  "Revenue dashboarding",
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "LocalStorage",
  "CSV workflows",
  "Mock GTM data",
  "Vercel",
];

const roleFit = [
  "GTM Engineer",
  "RevOps",
  "Sales Operations",
  "SDR / BDR",
  "SaaS Sales",
  "GTM Internships",
];

const workflowSteps = [
  {
    step: "01",
    title: "Lead Captured",
    description: "A new inbound or target account enters the GTM workflow.",
  },
  {
    step: "02",
    title: "Clay Enrichment",
    description:
      "The company is enriched with firmographic, buyer, and account context.",
  },
  {
    step: "03",
    title: "Claygent Research",
    description:
      "The system finds hiring signals, funding news, expansion triggers, and personalization angles.",
  },
  {
    step: "04",
    title: "Make.com Routing",
    description:
      "Automation decides whether to create a task, send a Slack alert, or create a HubSpot deal.",
  },
  {
    step: "05",
    title: "HubSpot Tracking",
    description:
      "HubSpot becomes the source of truth for contacts, companies, deals, stages, and revenue.",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-8 text-white">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage: "url('/gtm-bg.jpg?v=3')",
        }}
      />

      <div className="fixed inset-0 bg-slate-950/60" />
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/35 to-cyan-950/20" />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-140px] top-80 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              RevenueOS AI
            </p>

            <p className="mt-2 text-sm text-slate-300">
              GTM Automation Engine Portfolio Project
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
              href="https://github.com/Asad97531/revenueos-ai"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              View GitHub
            </a>
          </div>
        </header>

        <section className="grid gap-8 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                GTM Engineer Project
              </span>

              <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-300">
                Recruiter Ready
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
                Clay + Make.com + HubSpot
              </span>
            </div>

            <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight text-white md:text-6xl">
              A GTM automation engine for lead enrichment, routing, and revenue
              tracking.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              RevenueOS AI shows how modern GTM teams can capture leads, enrich
              accounts with Clay-style research, route high-priority records
              through Make.com-style automation, alert teams in Slack, and track
              the full customer journey in HubSpot.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/dashboard"
                className="rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
              >
                View GTM Dashboard
              </a>

              <a
                href="/sample-leads.csv"
                download
                className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Download Sample CSV
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Project Snapshot
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Built for</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  GTM Engineering workflows
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Core workflow</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  Enrich - Route - Track
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">System of record</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  HubSpot-style CRM
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Problem
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              GTM teams waste time on manual research
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Sales teams often spend too much time finding account context,
              checking buying signals, and deciding which leads deserve fast
              follow-up.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Solution
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              A workflow that enriches and routes leads
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              RevenueOS AI simulates how Clay, Claygent, Make.com, Slack, and
              HubSpot can work together as one GTM operating system.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Outcome
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              A portfolio-ready GTM project
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              The project demonstrates GTM thinking, CRM architecture, workflow
              automation logic, frontend development, and revenue reporting.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                GTM Workflow
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                From lead capture to HubSpot revenue tracking
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                The homepage explains the workflow at a high level. The
                dashboard shows each GTM layer in detail.
              </p>
            </div>

            <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              5-step system
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {workflowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  {item.step}
                </span>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Key Features
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                What RevenueOS AI includes
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                A GTM automation dashboard with enrichment, routing, CRM
                tracking, CSV workflows, and revenue visibility.
              </p>
            </div>

            <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              8 core features
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Included
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Tech Stack
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Built with modern frontend tools
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              The current version uses local demo data. The next version can
              connect real Clay, Make.com, Slack, and HubSpot workflows.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Best-Fit Roles
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Relevant for sales, RevOps, and GTM roles
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              This project is useful for explaining practical GTM workflow
              thinking during interviews.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {roleFit.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 shadow-2xl backdrop-blur-md">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Review the project
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Open the dashboard and review the full GTM automation engine.
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
                Start with the dashboard summary, review the Clay research
                layer, check the Make.com workflow logic, inspect the HubSpot
                CRM workspace, and review the revenue dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/dashboard"
                className="rounded-full bg-cyan-400 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
              >
                Open Dashboard
              </a>

              <a
                href="https://github.com/Asad97531/revenueos-ai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-white/10 py-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold text-white">RevenueOS AI</p>

            <p className="text-sm text-slate-500">
              Built by Asad Ali as a GTM Automation Engine portfolio project.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}