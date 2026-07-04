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

function getScoreLabel(score: number) {
  if (score >= 85) return "Tier 1 / Hot";
  if (score >= 70) return "Tier 2 / Review";
  return "Nurture";
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
      setError(
        "Please add a clear unit, like $25K, ₹25L, ₹1Cr, or write the full number like 25000."
      );
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
          <Button className="rounded-full border border-cyan-300/30 bg-cyan-400 px-5 py-2 font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:bg-cyan-300">
            + Add GTM Record
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="max-h-[90vh] overflow-y-auto border border-white/10 bg-slate-950/95 text-white shadow-2xl backdrop-blur-md sm:max-w-2xl">
        <DialogHeader>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            HubSpot GTM Workspace
          </p>

          <DialogTitle className="mt-2 text-2xl font-bold text-white">
            {isEditing ? "Edit GTM Record" : "Add GTM Record"}
          </DialogTitle>

          <p className="text-sm leading-6 text-slate-400">
            Add a lead record that represents the Clay enrichment, HubSpot stage,
            ICP score, deal value, and Claygent research notes.
          </p>
        </DialogHeader>

        <div className="mt-5 grid gap-5">
          {error && (
            <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
              {error}
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Company Name
              </label>

              <input
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  setError("");
                }}
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 p-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                placeholder="e.g. Acme SaaS"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Contact Name
              </label>

              <input
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  setError("");
                }}
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 p-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                placeholder="e.g. Sarah Khan"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Contact Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 p-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="e.g. sarah@company.com"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                HubSpot Stage
              </label>

              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 p-3 text-sm text-white outline-none focus:border-cyan-300/40"
              >
                <option>New Lead</option>
                <option>Qualified</option>
                <option>Proposal</option>
                <option>Negotiation</option>
                <option>Closed</option>
              </select>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                This represents where the record sits inside the HubSpot
                pipeline.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Deal Value
              </label>

              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setError("");
                }}
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 p-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                placeholder="e.g. $25K, ₹25L, ₹1Cr, or 25000"
              />

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Use clear units. Example: $25K, ₹25L, ₹1Cr, $1.2M, or 25000.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <label className="block text-sm font-medium text-slate-200">
                  ICP Score: {score}
                </label>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {getScoreLabel(score)}
                </p>
              </div>

              <span className="rounded-full border border-cyan-300/25 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
                Clay Fit Score
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="mt-5 w-full"
            />

            <div className="mt-2 flex justify-between text-xs text-slate-400">
              <span>Nurture</span>
              <span>Review</span>
              <span>Hot</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Clay / Claygent Research Notes
            </label>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-32 w-full rounded-xl border border-white/10 bg-slate-900/80 p-3 text-sm leading-6 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="Add Claygent findings: hiring triggers, funding news, buyer context, pain point, personalization angle, next step..."
            />

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Example: Hiring 4 SDRs, recently launched new product, likely
              needs better lead routing and sales research workflow.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              What this record simulates
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              In the real GTM workflow, this record would be enriched in Clay,
              routed through Make.com, alerted in Slack if high priority, and
              saved inside HubSpot as the source of truth.
            </p>
          </div>

          <div className="mt-1 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleSubmit}
              className="flex-1 rounded-full bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
            >
              {isEditing ? "Update GTM Record" : "Save GTM Record"}
            </Button>

            <Button
              type="button"
              onClick={closeDialog}
              className="flex-1 rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}