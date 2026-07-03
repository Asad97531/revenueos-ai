const reminders = [
  {
    company: "CloudKart",
    contact: "Priya Singh",
    action: "Follow up on pricing proposal",
    priority: "High",
    due: "Today",
  },
  {
    company: "Nova Retail",
    contact: "Sneha Kapoor",
    action: "Confirm onboarding timeline",
    priority: "Medium",
    due: "Tomorrow",
  },
  {
    company: "GrowthLabs",
    contact: "Aman Verma",
    action: "Book product demo",
    priority: "Medium",
    due: "This week",
  },
];

function getPriorityStyles(priority: string) {
  if (priority === "High") {
    return "border-red-500/30 bg-red-500/10 text-red-300";
  }

  if (priority === "Medium") {
    return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
  }

  return "border-slate-700 bg-slate-800 text-slate-300";
}

export function FollowUpReminders() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Follow-up Reminders
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Sales actions due soon
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A quick reminder list for leads that need follow-up, demo booking,
            proposal review, or closing activity.
          </p>
        </div>

        <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          3 reminders
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {reminders.map((reminder) => (
          <div
            key={`${reminder.company}-${reminder.action}`}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-white">{reminder.company}</h3>

                <p className="mt-1 text-sm text-slate-400">
                  {reminder.contact}
                </p>
              </div>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${getPriorityStyles(
                  reminder.priority
                )}`}
              >
                {reminder.priority}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {reminder.action}
            </p>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-3">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Due
              </p>

              <p className="text-sm font-semibold text-white">
                {reminder.due}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}