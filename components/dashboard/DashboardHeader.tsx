export function DashboardHeader() {
  return (
    <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              RevenueOS AI
            </span>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-300">
              Portfolio Ready
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
              RevOps CRM Demo
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            AI-powered RevOps CRM dashboard
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400 md:text-base">
            Track pipeline value, prioritize sales follow-ups, manage CRM leads,
            review account insights, test CSV workflows, and generate AI-style
            sales recommendations in one dashboard.
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

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 lg:min-w-72">
          <p className="text-sm font-semibold text-white">
            Built for sales and RevOps roles
          </p>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <div className="flex items-center justify-between gap-4">
              <span>Frontend</span>
              <span className="font-semibold text-cyan-300">Next.js</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>CRM data</span>
              <span className="font-semibold text-cyan-300">LocalStorage</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>Workflow</span>
              <span className="font-semibold text-cyan-300">CSV + Leads</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>Focus</span>
              <span className="font-semibold text-cyan-300">AI Insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}