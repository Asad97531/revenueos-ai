import { DashboardLayout } from "@/components/layout/DashboardLayout";

const companies = [
  {
    name: "Stripe",
    industry: "Fintech",
    employees: "7,000+",
    signal: "Hiring sales team",
  },
  {
    name: "Linear",
    industry: "SaaS",
    employees: "100+",
    signal: "Product-led growth",
  },
  {
    name: "Notion",
    industry: "Productivity",
    employees: "500+",
    signal: "Expansion opportunity",
  },
];

export default function CompaniesPage() {
  return (
    <DashboardLayout>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Company Intelligence
      </p>

      <h1 className="mt-3 text-4xl font-bold">Companies</h1>

      <p className="mt-3 text-slate-400">
        Track target accounts, buying signals, industries, and enrichment data.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {companies.map((company) => (
          <div
            key={company.name}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-xl font-bold">{company.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{company.industry}</p>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>Employees: {company.employees}</p>
              <p>Signal: {company.signal}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}