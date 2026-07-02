import {
  BarChart3,
  Building2,
  CheckSquare,
  LayoutDashboard,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Leads",
    href: "/leads",
    icon: Users,
  },
  {
    label: "Companies",
    href: "/companies",
    icon: Building2,
  },
  {
    label: "Pipeline",
    href: "/pipeline",
    icon: TrendingUp,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 border-r border-slate-800 bg-slate-950 px-4 py-6 text-white md:block">
      <div className="mb-10 px-2">
        <h1 className="text-xl font-bold">RevenueOS AI</h1>
        <p className="mt-1 text-xs text-slate-400">Founder Command Center</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              <Icon size={18} />
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}