export function DashboardFooter() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            RevenueOS AI
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Built by Asad Ali as a portfolio-ready RevOps and CRM dashboard.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://revenueos-ai-seven.vercel.app/dashboard"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Live Dashboard
          </a>

          <a
            href="https://github.com/Asad97531/revenueos-ai"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="#top"
            className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
          >
            Back to Top
          </a>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
          Next.js
        </span>

        <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
          TypeScript
        </span>

        <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
          Tailwind CSS
        </span>

        <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
          CRM Workflow
        </span>

        <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">
          AI-style Insights
        </span>
      </div>
    </footer>
  );
}