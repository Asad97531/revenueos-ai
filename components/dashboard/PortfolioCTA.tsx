export function PortfolioCTA() {
  return (
    <section className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Portfolio Project
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            RevenueOS AI is ready for recruiter review
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            This project demonstrates frontend development, SaaS dashboard
            design, CRM workflows, sales operations thinking, AI-style account
            insights, CSV data handling, and responsive UI implementation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://revenueos-ai-seven.vercel.app/dashboard"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-400 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
            >
              Open Live Dashboard
            </a>

            <a
              href="https://github.com/Asad97531/revenueos-ai"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              View GitHub
            </a>

            <a
              href="/sample-leads.csv"
              download
              className="rounded-full border border-slate-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Download Sample CSV
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-semibold text-white">
            Best review path
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-widest text-cyan-300">
                Step 1
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Open the live dashboard.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-widest text-cyan-300">
                Step 2
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Test the CRM workspace with sample CSV data.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-widest text-cyan-300">
                Step 3
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Review the GitHub repo and component structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}