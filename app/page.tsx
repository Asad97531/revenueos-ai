import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevenueOS AI | RevOps CRM Portfolio Project",
  description:
    "RevenueOS AI is a portfolio-ready RevOps CRM dashboard built with Next.js, TypeScript, Tailwind CSS, CSV workflows, LocalStorage, and AI-style sales insights.",
};

const features = [
  "CRM lead management",
  "CSV import and export",
  "Pipeline health dashboard",
  "Revenue forecast",
  "Conversion funnel",
  "Follow-up reminders",
  "Account insights",
  "AI-style recommendations",
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "LocalStorage",
  "CSV workflows",
  "Vercel",
];

const roleFit = [
  "SDR / BDR",
  "Sales Operations",
  "RevOps",
  "SaaS Sales",
  "Customer Success",
  "GTM Internships",
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-8 text-white">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-80 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              RevenueOS AI
            </p>

            <p className="mt-2 text-sm text-slate-400">
              AI-powered RevOps CRM dashboard
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
              className="rounded-full border border-slate-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              View GitHub
            </a>
          </div>
        </header>

        <section className="grid gap-8 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Portfolio Project
              </span>

              <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-300">
                Recruiter Ready
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
                SaaS CRM Demo
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-white md:text-6xl">
              Turn CRM lead data into clear revenue actions.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              RevenueOS AI is a RevOps and CRM dashboard that helps sales teams
              manage leads, review pipeline health, prioritize follow-ups,
              understand account insights, and test CSV-based CRM workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/dashboard"
                className="rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
              >
                View Live Dashboard
              </a>

              <a
                href="/sample-leads.csv"
                download
                className="rounded-full border border-slate-700 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Download Sample CSV
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Project Snapshot
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Built for</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  Sales + RevOps workflows
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Core workflow</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  Import → Prioritize → Act
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Data approach</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  LocalStorage + CSV
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Problem
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              Sales teams need clearer account priority
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              CRM data can show many leads, but sales teams still need help
              deciding which accounts to contact first and what action to take.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Solution
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              A dashboard for revenue action
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              RevenueOS AI organizes pipeline, account insights, reminders,
              forecasts, and AI-style recommendations in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Outcome
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              A recruiter-ready SaaS project
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              The project demonstrates frontend development, CRM workflow
              thinking, sales process understanding, and AI-first product logic.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Key Features
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                What RevenueOS AI includes
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                A complete portfolio dashboard with CRM actions, CSV workflows,
                pipeline intelligence, and AI-style sales insights.
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
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                    ✓
                  </div>

                  <p className="text-sm font-semibold text-white">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Tech Stack
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Built with modern frontend tools
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Best-Fit Roles
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Relevant for sales and GTM roles
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {roleFit.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Review the project
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Open the dashboard and test the CRM workflow.
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
                Start with the dashboard summary, download the sample CSV,
                import leads into the CRM workspace, test filters, review
                AI-style recommendations, and export lead data.
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
                className="rounded-full border border-slate-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-slate-800 py-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold text-white">RevenueOS AI</p>

            <p className="text-sm text-slate-500">
              Built by Asad Ali as a RevOps CRM portfolio project.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}