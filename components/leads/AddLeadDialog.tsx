"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Lead {
  id: number;
  company: string;
  contact: string;
  email: string;
  stage: string;
  score: number;
  value: string;
  notes?: string;
}

interface LeadFormData {
  company: string;
  contact: string;
  email: string;
  stage: string;
  score: number;
  value: string;
  notes: string;
}

interface AddLeadDialogProps {
  onAddLead: (lead: LeadFormData) => void;
  editingLead: Lead | null;
  onUpdateLead: (lead: Lead) => void;
  onCloseEdit: () => void;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidDealValue(value: string) {
  const trimmedValue = value.trim().toLowerCase();

  if (!trimmedValue) {
    return false;
  }

  return /\d/.test(trimmedValue);
}

function isAmbiguousSmallValue(value: string) {
  const trimmedValue = value.trim().toLowerCase();

  const hasUnit =
    trimmedValue.includes("$") ||
    trimmedValue.includes("₹") ||
    trimmedValue.includes("k") ||
    trimmedValue.includes("m") ||
    trimmedValue.includes("l") ||
    trimmedValue.includes("lakh") ||
    trimmedValue.includes("cr") ||
    trimmedValue.includes("crore");

  const isOnlyNumber = /^\d+(\.\d+)?$/.test(trimmedValue);
  const numberValue = Number(trimmedValue);

  return isOnlyNumber && numberValue < 1000 && !hasUnit;
}

export function AddLeadDialog({
  onAddLead,
  editingLead,
  onUpdateLead,
  onCloseEdit,
}: AddLeadDialogProps) {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState("New Lead");
  const [score, setScore] = useState(70);
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const isEditing = editingLead !== null;

  useEffect(() => {
    if (editingLead) {
      setOpen(true);
      setCompany(editingLead.company);
      setContact(editingLead.contact);
      setEmail(editingLead.email);
      setStage(editingLead.stage);
      setScore(editingLead.score);
      setValue(editingLead.value);
      setNotes(editingLead.notes ?? "");
      setError("");
    }
  }, [editingLead]);

  function resetForm() {
    setCompany("");
    setContact("");
    setEmail("");
    setStage("New Lead");
    setScore(70);
    setValue("");
    setNotes("");
    setError("");
  }

  function closeDialog() {
    resetForm();
    setOpen(false);
    onCloseEdit();
  }

  function handleSubmit() {
    const trimmedCompany = company.trim();
    const trimmedContact = contact.trim();
    const trimmedEmail = email.trim();
    const trimmedValue = value.trim();
    const trimmedNotes = notes.trim();

    if (!trimmedCompany) {
      setError("Company name is required.");
      return;
    }

    if (!trimmedContact) {
      setError("Contact name is required.");
      return;
    }

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address, like name@company.com.");
      return;
    }

    if (!trimmedValue) {
      setError("Deal value is required.");
      return;
    }

    if (!isValidDealValue(trimmedValue)) {
      setError("Deal value must include a number, like $25K, ₹25L, or 25000.");
      return;
    }

    if (isAmbiguousSmallValue(trimmedValue)) {
      setError("Please add a clear unit, like $25K, ₹25L, ₹1Cr, or write the full number like 25000.");
      return;
    }

    const safeScore = Math.max(0, Math.min(100, score));

    if (isEditing && editingLead) {
      onUpdateLead({
        ...editingLead,
        company: trimmedCompany,
        contact: trimmedContact,
        email: trimmedEmail,
        stage,
        score: safeScore,
        value: trimmedValue,
        notes: trimmedNotes,
      });
    } else {
      onAddLead({
        company: trimmedCompany,
        contact: trimmedContact,
        email: trimmedEmail,
        stage,
        score: safeScore,
        value: trimmedValue,
        notes: trimmedNotes,
      });
    }

    closeDialog();
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);

    if (!nextOpen) {
      closeDialog();
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {!isEditing && (
        <DialogTrigger asChild>
          <Button className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
            + New Lead
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="max-h-[90vh] overflow-y-auto border-slate-800 bg-slate-950 text-white sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Lead" : "Add New Lead"}</DialogTitle>
        </DialogHeader>

        <div className="mt-4 grid gap-4">
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Company Name
            </label>
            <input
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                setError("");
              }}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="e.g. Acme Inc"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Contact Name
            </label>
            <input
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                setError("");
              }}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="e.g. Rahul Sharma"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="e.g. rahul@company.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Deal Value
            </label>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError("");
              }}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="e.g. $25K, ₹25L, ₹1Cr, or 25000"
            />
            <p className="mt-2 text-xs text-slate-500">
              Use clear units. Example: $25K, ₹25L, ₹1Cr, $1.2M, or 25000.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">Stage</label>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none"
            >
              <option>New Lead</option>
              <option>Qualified</option>
              <option>Proposal</option>
              <option>Negotiation</option>
              <option>Closed</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Lead Score: {score}
            </label>

            <input
              type="range"
              min="0"
              max="100"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="w-full"
            />

            <div className="mt-2 flex justify-between text-xs text-slate-500">
              <span>Cold</span>
              <span>Warm</span>
              <span>Hot</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-28 w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="Pain points, next steps, decision maker, budget, timeline..."
            />
          </div>

          <div className="mt-2 flex gap-3">
            <Button
              onClick={handleSubmit}
              className="flex-1 rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
            >
              {isEditing ? "Update Lead" : "Save Lead"}
            </Button>

            <Button
              type="button"
              onClick={closeDialog}
              className="flex-1 rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}