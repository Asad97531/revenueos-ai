export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-bold">RevenueOS AI</h1>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#dashboard">Dashboard</a>
        </div>

        <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950">
          Get Started
        </button>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          AI Revenue Operations Platform
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Turn every inbound lead into a qualified sales opportunity.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          RevenueOS AI helps startup founders capture, enrich, score, manage,
          and convert leads using AI-powered research and CRM automation.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950">
            Start Building Pipeline
          </button>
          <button className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-white">
            View Demo
          </button>
        </div>
      </section>

      <section id="features" className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-xl font-bold">AI Lead Research</h3>
          <p className="mt-4 text-slate-400">
            Automatically research company size, industry, pain points, and buying signals.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-xl font-bold">ICP Scoring</h3>
          <p className="mt-4 text-slate-400">
            Score every lead based on fit, urgency, revenue potential, and sales readiness.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-xl font-bold">CRM Pipeline</h3>
          <p className="mt-4 text-slate-400">
            Manage leads from new opportunity to closed won with a founder-friendly CRM.
          </p>
        </div>
      </section>
            <section id="how-it-works" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            How it works
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
            From raw lead to revenue-ready opportunity in minutes.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Capture lead",
                text: "Founder receives a new inbound lead from a website form.",
              },
              {
                step: "02",
                title: "Enrich company",
                text: "AI researches the company, industry, pain points, and buying signals.",
              },
              {
                step: "03",
                title: "Score fit",
                text: "RevenueOS AI calculates ICP score and deal potential.",
              },
              {
                step: "04",
                title: "Move pipeline",
                text: "Founder manages follow-ups, tasks, emails, and deal stages.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-slate-950 p-6">
                <p className="text-sm font-bold text-cyan-400">{item.step}</p>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}