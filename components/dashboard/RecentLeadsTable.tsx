"use client";

import { useMemo, useState } from "react";

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

interface RecentLeadsTableProps {
  leads: Lead[];
  onDelete: (id: number) => void;
  onEdit: (lead: Lead) => void;
  onView: (lead: Lead) => void;
}

const stages = ["New Lead", "Qualified", "Proposal", "Negotiation", "Closed"];

function getScoreLabel(score: number) {
  if (score >= 80) return "Hot";
  if (score >= 70) return "Warm";
  return "Cold";
}

function getScoreStyles(score: number) {
  if (score >= 80) {
    return "border-red-400/30 bg-red-500/10 text-red-200";
  }

  if (score >= 70) {
    return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200";
  }

  return "border-white/10 bg-white/5 text-slate-300";
}

function getStageStyles(stage: string) {
  if (stage === "New Lead") {
    return "border-white/10 bg-white/5 text-slate-300";
  }

  if (stage === "Qualified") {
    return "border-blue-400/30 bg-blue-500/10 text-blue-200";
  }

  if (stage === "Proposal") {
    return "border-purple-400/30 bg-purple-500/10 text-purple-200";
  }

  if (stage === "Negotiation") {
    return "border-orange-400/30 bg-orange-500/10 text-orange-200";
  }

  if (stage === "Closed") {
    return "border-green-400/30 bg-green-500/10 text-green-200";
  }

  return "border-white/10 bg-white/5 text-slate-300";
}

function getActiveChipStyles(stage: string, activeStage: string) {
  if (stage === activeStage) {
    return "border-cyan-300/50 bg-cyan-400/15 text-cyan-200 ring-2 ring-cyan-300/40";
  }

  return "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/30 hover:text-cyan-200";
}

function parseLeadValue(value: string) {
  const cleanValue = value.replace(/[$₹,]/g, "").trim().toLowerCase();

  const numberMatch = cleanValue.match(/\d+(\.\d+)?/);

  if (!numberMatch) {
    return 0;
  }

  const amount = Number(numberMatch[0]);

  if (Number.isNaN(amount)) {
    return 0;
  }

  if (
    cleanValue.includes("crore") ||
    cleanValue.includes("crores") ||
    cleanValue.includes("cr")
  ) {
    return amount * 10000000;
  }

  if (
    cleanValue.includes("lakh") ||
    cleanValue.includes("lakhs") ||
    cleanValue.endsWith("l")
  ) {
    return amount * 100000;
  }

  if (cleanValue.includes("m")) {
    return amount * 1000000;
  }

  if (cleanValue.includes("k")) {
    return amount * 1000;
  }

  return amount;
}

function getNotesPreview(notes?: string) {
  if (!notes?.trim()) {
    return "";
  }

  if (notes.length > 90) {
    return `${notes.slice(0, 90)}...`;
  }

  return notes;
}

function getClayStatus(lead: Lead) {
  if (lead.score >= 80) {
    return "Enriched";
  }

  if (lead.score >= 70) {
    return "Needs Review";
  }

  return "Research Pending";
}

function getClayStatusStyles(lead: Lead) {
  if (lead.score >= 80) {
    return "border-green-400/30 bg-green-500/10 text-green-200";
  }

  if (lead.score >= 70) {
    return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200";
  }

  return "border-white/10 bg-white/5 text-slate-300";
}

function getTriggerFound(lead: Lead) {
  const notes = lead.notes?.toLowerCase() ?? "";

  if (notes.includes("hiring") || notes.includes("recruit")) {
    return "Hiring Signal";
  }

  if (notes.includes("funding") || notes.includes("raised")) {
    return "Funding News";
  }

  if (lead.score >= 85) {
    return "High Intent Visit";
  }

  if (lead.stage === "Proposal") {
    return "Proposal Follow-up";
  }

  if (lead.stage === "Negotiation") {
    return "Active Deal Signal";
  }

  if (lead.stage === "Closed") {
    return "Expansion Opportunity";
  }

  return "Needs Claygent Research";
}

function getNextAction(lead: Lead) {
  if (lead.score >= 85 && lead.stage !== "Closed") {
    return "Send Slack alert";
  }

  if (lead.stage === "New Lead") {
    return "Enrich in Clay";
  }

  if (lead.stage === "Qualified") {
    return "Create HubSpot task";
  }

  if (lead.stage === "Proposal") {
    return "Follow up proposal";
  }

  if (lead.stage === "Negotiation") {
    return "Confirm blockers";
  }

  if (lead.stage === "Closed") {
    return "Plan expansion";
  }

  return "Review account";
}

export function RecentLeadsTable({
  leads,
  onDelete,
  onEdit,
  onView,
}: RecentLeadsTableProps) {
  const [sortBy, setSortBy] = useState("Highest Score");
  const [activeStage, setActiveStage] = useState("All");
  const [copiedEmailLeadId, setCopiedEmailLeadId] = useState<number | null>(
    null
  );

  const stageCounts = useMemo(() => {
    return stages.map((stage) => {
      return {
        stage,
        count: leads.filter((lead) => lead.stage === stage).length,
      };
    });
  }, [leads]);

  const quickFilteredLeads = useMemo(() => {
    if (activeStage === "All") {
      return leads;
    }

    return leads.filter((lead) => lead.stage === activeStage);
  }, [leads, activeStage]);

  const sortedLeads = useMemo(() => {
    return [...quickFilteredLeads].sort((a, b) => {
      if (sortBy === "Highest Score") {
        return b.score - a.score;
      }

      if (sortBy === "Lowest Score") {
        return a.score - b.score;
      }

      if (sortBy === "Highest Value") {
        return parseLeadValue(b.value) - parseLeadValue(a.value);
      }

      if (sortBy === "Lowest Value") {
        return parseLeadValue(a.value) - parseLeadValue(b.value);
      }

      if (sortBy === "Company A-Z") {
        return a.company.localeCompare(b.company);
      }

      return 0;
    });
  }, [quickFilteredLeads, sortBy]);

  function handleDelete(lead: Lead) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${lead.company}?`
    );

    if (confirmed) {
      onDelete(lead.id);
    }
  }

  async function copyEmail(lead: Lead) {
    try {
      await navigator.clipboard.writeText(lead.email);
      setCopiedEmailLeadId(lead.id);

      setTimeout(() => {
        setCopiedEmailLeadId(null);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            HubSpot Workspace
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            GTM Lead Routing
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Clay-enriched accounts connected to HubSpot stages, buying triggers,
            and next-best actions for the sales team.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
            {sortedLeads.length} shown
          </p>

          <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
            {leads.length} total
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-slate-200 outline-none transition hover:border-cyan-300/30"
          >
            <option>Highest Score</option>
            <option>Lowest Score</option>
            <option>Highest Value</option>
            <option>Lowest Value</option>
            <option>Company A-Z</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveStage("All")}
          className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${getActiveChipStyles(
            "All",
            activeStage
          )}`}
        >
          All: {leads.length}
        </button>

        {stageCounts.map((item) => (
          <button
            key={item.stage}
            onClick={() => setActiveStage(item.stage)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${getActiveChipStyles(
              item.stage,
              activeStage
            )}`}
          >
            {item.stage}: {item.count}
          </button>
        ))}
      </div>

      {sortedLeads.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm text-slate-400">
            No leads found for this quick filter.
          </p>

          {activeStage !== "All" && (
            <button
              onClick={() => setActiveStage("All")}
              className="mt-3 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Show All Leads
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="mt-6 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-4">Company</th>
                  <th className="px-4 py-4">Contact</th>
                  <th className="px-4 py-4">ICP Score</th>
                  <th className="px-4 py-4">Clay Status</th>
                  <th className="px-4 py-4">Trigger</th>
                  <th className="px-4 py-4">HubSpot Stage</th>
                  <th className="px-4 py-4">Next Action</th>
                  <th className="px-4 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {sortedLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-t border-white/10 text-slate-300 transition hover:bg-white/[0.03]"
                  >
                    <td className="px-4 py-4">
                      <p className="font-semibold text-white">{lead.company}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Deal value: {lead.value}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium text-slate-200">
                          {lead.contact}
                        </p>

                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-xs text-cyan-300 hover:text-cyan-200"
                          >
                            {lead.email}
                          </a>

                          <button
                            onClick={() => copyEmail(lead)}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
                          >
                            {copiedEmailLeadId === lead.id
                              ? "Copied"
                              : "Copy"}
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <div className="w-36">
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-semibold ${getScoreStyles(
                            lead.score
                          )}`}
                        >
                          {lead.score} · {getScoreLabel(lead.score)}
                        </span>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-cyan-300"
                            style={{ width: `${lead.score}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getClayStatusStyles(
                          lead
                        )}`}
                      >
                        {getClayStatus(lead)}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-xs font-semibold text-slate-200">
                        {getTriggerFound(lead)}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStageStyles(
                          lead.stage
                        )}`}
                      >
                        {lead.stage}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-xs font-semibold text-cyan-300">
                        {getNextAction(lead)}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => onView(lead)}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
                        >
                          View
                        </button>

                        <button
                          onClick={() => onEdit(lead)}
                          className="rounded-lg bg-blue-500/80 px-3 py-1 text-xs font-semibold text-white transition hover:bg-blue-400"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(lead)}
                          className="rounded-lg bg-red-500/80 px-3 py-1 text-xs font-semibold text-white transition hover:bg-red-400"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:hidden">
            {sortedLeads.map((lead) => (
              <div
                key={lead.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">{lead.company}</h3>
                    <p className="mt-1 text-sm text-slate-300">
                      {lead.contact}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-xs text-cyan-300 hover:text-cyan-200"
                      >
                        {lead.email}
                      </a>

                      <button
                        onClick={() => copyEmail(lead)}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
                      >
                        {copiedEmailLeadId === lead.id ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <p className="font-semibold text-white">{lead.value}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getScoreStyles(
                      lead.score
                    )}`}
                  >
                    ICP {lead.score} · {getScoreLabel(lead.score)}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getClayStatusStyles(
                      lead
                    )}`}
                  >
                    {getClayStatus(lead)}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStageStyles(
                      lead.stage
                    )}`}
                  >
                    HubSpot: {lead.stage}
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-300"
                    style={{ width: `${lead.score}%` }}
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Trigger
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-200">
                    {getTriggerFound(lead)}
                  </p>
                </div>

                <div className="mt-3 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3">
                  <p className="text-xs uppercase tracking-widest text-cyan-300">
                    Next Action
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {getNextAction(lead)}
                  </p>
                </div>

                {lead.notes?.trim() && (
                  <p className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs leading-5 text-slate-300">
                    {getNotesPreview(lead.notes)}
                  </p>
                )}

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onView(lead)}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit(lead)}
                    className="rounded-lg bg-blue-500/80 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-400"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(lead)}
                    className="rounded-lg bg-red-500/80 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}