const recommendations = [
  "Follow up with Stripe — high buying intent detected.",
  "Move Linear to proposal stage — demo completed.",
  "Contact Notion today — opened your email twice.",
];

export function AIRecommendations() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold text-white">AI Recommendations</h2>

      <div className="mt-5 space-y-4">
        {recommendations.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300"
          >
            🤖 {item}
          </div>
        ))}
      </div>
    </div>
  );
}