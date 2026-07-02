const leads = [
  { company: "Stripe", score: 95, stage: "Demo Scheduled", value: "$42K" },
  { company: "Linear", score: 91, stage: "Qualified", value: "$28K" },
  { company: "Notion", score: 88, stage: "Discovery", value: "$35K" },
  { company: "Rippling", score: 84, stage: "New Lead", value: "$19K" },
];

export function RecentLeadsTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold text-white">Recent Leads</h2>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950 text-slate-400">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Stage</th>
              <th className="px-4 py-3">Value</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead.company} className="border-t border-slate-800 text-slate-300">
                <td className="px-4 py-4 font-medium text-white">{lead.company}</td>
                <td className="px-4 py-4">{lead.score}</td>
                <td className="px-4 py-4">{lead.stage}</td>
                <td className="px-4 py-4">{lead.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}