export function DemoDataNotice() {
  return (
    <section className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Demo Data Notice
          </p>

          <h2 className="mt-2 text-xl font-bold text-white">
            Built as a frontend CRM portfolio demo
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            RevenueOS AI uses demo lead data and browser-based LocalStorage.
            Recruiters can import the sample CSV, add leads, edit records,
            test filters, generate AI-style insights, and export data without a
            backend database.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
            LocalStorage
          </span>

          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            Sample CSV
          </span>

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
            No real customer data
          </span>
        </div>
      </div>
    </section>
  );
}