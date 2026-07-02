import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight text-white">
              RevenueOS AI
            </p>
            <p className="text-xs text-slate-500">
              AI-powered CRM dashboard
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Open Dashboard
          </Link>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Sales CRM · RevOps · AI Workflow
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
              Manage leads and prioritize sales follow-ups faster.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              RevenueOS AI is a SaaS-style CRM dashboard that helps sales teams
              track leads, pipeline value, lead scores, notes, and AI-suggested
              follow-up actions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300"
              >
                View CRM Dashboard
              </Link>

              <a
                href="https://github.com/Asad97531/revenueos-ai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                View GitHub Repo
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="mt-1 text-sm text-slate-400">
                  Frontend CRM workflow
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-3xl font-bold text-white">AI</p>
                <p className="mt-1 text-sm text-slate-400">
                  Follow-up suggestions
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-3xl font-bold text-white">CSV</p>
                <p className="mt-1 text-sm text-slate-400">
                  Export lead data
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    Dashboard Preview
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Sales Pipeline
                  </h2>
                </div>

                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Live
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Total Leads</p>
                  <p className="mt-2 text-3xl font-bold text-white">24</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Pipeline Value</p>
                  <p className="mt-2 text-3xl font-bold text-white">₹1.8Cr</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Average Score</p>
                  <p className="mt-2 text-3xl font-bold text-white">78</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Hot Leads</p>
                  <p className="mt-2 text-3xl font-bold text-white">9</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  AI Action Queue
                </p>

                <h3 className="mt-2 text-lg font-bold text-white">
                  Leads needing attention
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          Acme Software
                        </p>
                        <p className="text-sm text-slate-400">
                          Follow up on proposal
                        </p>
                      </div>

                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300">
                        92
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          Cloudify Labs
                        </p>
                        <p className="text-sm text-slate-400">
                          Book demo call
                        </p>
                      </div>

                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300">
                        86
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          GrowthKart
                        </p>
                        <p className="text-sm text-slate-400">
                          Qualify new lead
                        </p>
                      </div>

                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300">
                        81
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/dashboard"
                className="mt-6 block rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 hover:bg-cyan-300"
              >
                Open Full Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}