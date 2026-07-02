import { DashboardLayout } from "@/components/layout/DashboardLayout";

const tasks = [
  {
    title: "Follow up with Stripe",
    due: "Today",
    priority: "High",
  },
  {
    title: "Send proposal to HubSpot",
    due: "Today",
    priority: "High",
  },
  {
    title: "Book discovery call with Linear",
    due: "Tomorrow",
    priority: "Medium",
  },
  {
    title: "Research Notion expansion team",
    due: "Friday",
    priority: "Low",
  },
];

export default function TasksPage() {
  return (
    <DashboardLayout>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Follow-ups
      </p>

      <h1 className="mt-3 text-4xl font-bold">Tasks</h1>

      <p className="mt-3 text-slate-400">
        Manage daily sales actions and AI-recommended follow-ups.
      </p>

      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div>
              <h2 className="font-bold text-white">{task.title}</h2>
              <p className="mt-1 text-sm text-slate-400">Due: {task.due}</p>
            </div>

            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}