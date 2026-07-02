"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddLeadDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
          + New Lead
        </Button>
      </DialogTrigger>

      <DialogContent className="border-slate-800 bg-slate-950 text-white">
        <DialogHeader>
          <DialogTitle>Add New Lead</DialogTitle>
        </DialogHeader>

        <div className="mt-4 grid gap-4">
          <input className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none" placeholder="Company Name" />
          <input className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none" placeholder="Website" />
          <input className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none" placeholder="Contact Name" />
          <input className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none" placeholder="Email" />
          <input className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none" placeholder="Deal Value, e.g. $25K" />

          <Button className="mt-2 rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
            Save Lead
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}