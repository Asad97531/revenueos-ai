import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-6 text-white">
      <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
        <Search size={16} />
        <span>Search leads, companies, deals...</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full border border-slate-800 p-2 text-slate-300 hover:bg-slate-900">
          <Bell size={18} />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
          A
        </div>
      </div>
    </header>
  );
}