"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AddLeadDialogProps {
  onAddLead: (lead: {
    company: string;
    contact: string;
    email: string;
    value: string;
  }) => void;
}

export function AddLeadDialog({ onAddLead }: AddLeadDialogProps) {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit() {
    onAddLead({
      company,
      contact,
      email,
      value,
    });

    setCompany("");
    setWebsite("");
    setContact("");
    setEmail("");
    setValue("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none"
            placeholder="Company Name"
          />

          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none"
            placeholder="Website"
          />

          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none"
            placeholder="Contact Name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none"
            placeholder="Email"
          />

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none"
            placeholder="Deal Value, e.g. $25K"
          />

          <Button
            onClick={handleSubmit}
            className="mt-2 rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
          >
            Save Lead
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}