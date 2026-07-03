const projectLinks = [
  {
    title: "Live App",
    description: "Open the deployed RevenueOS AI app on Vercel.",
    href: "https://revenueos-ai-seven.vercel.app/",
    label: "Open Live App",
    external: true,
  },
  {
    title: "Dashboard",
    description: "Jump directly to the full RevOps CRM dashboard.",
    href: "/dashboard",
    label: "Open Dashboard",
    external: false,
  },
  {
    title: "GitHub Repository",
    description: "View the project source code, components, and README.",
    href: "https://github.com/Asad97531/revenueos-ai",
    label: "View GitHub",
    external: true,
  },
  {
    title: "Sample CSV",
    description: "Download sample lead data to test the CRM import feature.",
    href: "/sample-leads.csv",
    label: "Download CSV",
    external: false,
  },
];

export function ProjectLinks() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Project Links
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Quick access for recruiters
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Important links for reviewing the live product, dashboard, source
            code, and sample CRM data.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          Portfolio links
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {projectLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            download={link.title === "Sample CSV" ? true : undefined}
            className="group rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900"
          >
            <h3 className="text-lg font-bold text-white">{link.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {link.description}
            </p>

            <div className="mt-5 inline-flex rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition group-hover:bg-cyan-300">
              {link.label}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <p className="text-sm font-semibold text-white">
          Best way to review this project
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Open the live dashboard, test the CRM workspace with the sample CSV,
          then review the GitHub repository to see the component structure and
          implementation.
        </p>
      </div>
    </section>
  );
}