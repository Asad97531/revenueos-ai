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
    return "bg-red-500/10 text-red-300 border-red-500/30";
  }

  if (score >= 70) {
    return "bg-yellow-500/10 text-yellow-300 border-yellow-500/30";
  }

  return "bg-slate-800 text-slate-300 border-slate-700";
}

function getStageStyles(stage: string) {
  if (stage === "New Lead") {
    return "border-slate-700 bg-slate-800/80 text-slate-300";
  }

  if (stage === "Qualified") {
    return "border-blue-500/30 bg-blue-500/10 text-blue-300";
  }

  if (stage === "Proposal") {
    return "border-purple-500/30 bg-purple-500/10 text-purple-300";
  }

  if (stage === "Negotiation") {
    return "border-orange-500/30 bg-orange-500/10 text-orange-300";
  }

  if (stage === "Closed") {
    return "border-green-500/30 bg-green-500/10 text-green-300";
  }

  return "border-slate-700 bg-slate-800 text-slate-300";
}

function getActiveChipStyles(stage: string, activeStage: string) {
  if (stage === activeStage) {
    return "ring-2 ring-cyan-400/60 ring-offset-2 ring-offset-slate-900";
  }

  return "opacity-80 hover:opacity-100";
}

function parseLeadValue(value: string) {
  const cleanValue = value
    .replace(/[$₹,]/g, "")
    .trim()
    .toLowerCase();

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
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Recent Leads</h2>
          <p className="mt-1 text-sm text-slate-400">
            View, edit, sort, and manage your sales pipeline.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-400">
            {sortedLeads.length} shown
          </p>

          <p className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-400">
            {leads.length} total
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-300 outline-none"
          >
            <option>Highest Score</option>
            <option>Lowest Score</option>
            <option>Highest Value</option>
            <option>Lowest Value</option>
            <option>Company A-Z</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveStage("All")}
          className={`rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 transition ${getActiveChipStyles(
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
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${getStageStyles(
              item.stage
            )} ${getActiveChipStyles(item.stage, activeStage)}`}
          >
            {item.stage}: {item.count}
          </button>
        ))}
      </div>

      {sortedLeads.length === 0 ? (
        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-8 text-center">
          <p className="text-sm text-slate-500">
            No leads found for this quick filter.
          </p>

          {activeStage !== "All" && (
            <button
              onClick={() => setActiveStage("All")}
              className="mt-3 rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Show All Leads
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="mt-5 hidden overflow-hidden rounded-xl border border-slate-800 md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Score</th>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">Value</th>
                  <th className="px-4 py-3">Notes</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {sortedLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-t border-slate-800 text-slate-300"
                  >
                    <td className="px-4 py-4 font-medium text-white">
                      {lead.company}
                    </td>

                    <td className="px-4 py-4">
                      <div>
                        <p>{lead.contact}</p>

                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-xs text-cyan-400 hover:text-cyan-300"
                          >
                            {lead.email}
                          </a>

                          <button
                            onClick={() => copyEmail(lead)}
                            className="rounded-md border border-slate-700 px-2 py-0.5 text-[10px] font-semibold text-slate-400 hover:bg-slate-800 hover:text-white"
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
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${getScoreStyles(
                              lead.score
                            )}`}
                          >
                            {lead.score} · {getScoreLabel(lead.score)}
                          </span>
                        </div>

                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className="h-full rounded-full bg-cyan-400"
                            style={{ width: `${lead.score}%` }}
                          />
                        </div>
                      </div>
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

                    <td className="px-4 py-4 font-semibold text-white">
                      {lead.value}
                    </td>

                    <td className="px-4 py-4">
                      {lead.notes?.trim() ? (
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                          Notes added
                        </span>
                      ) : (
                        <span className="text-xs text-slate-600">No notes</span>
                      )}
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => onView(lead)}
                          className="rounded-lg bg-slate-700 px-3 py-1 text-xs font-semibold text-white hover:bg-slate-600"
                        >
                          View
                        </button>

                        <button
                          onClick={() => onEdit(lead)}
                          className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-500"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(lead)}
                          className="rounded-lg bg-red-600 px-3 py-1 text-xs font-semibold text-white hover:bg-red-500"
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

          <div className="mt-5 grid gap-4 md:hidden">
            {sortedLeads.map((lead) => (
              <div
                key={lead.id}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">{lead.company}</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {lead.contact}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-xs text-cyan-400 hover:text-cyan-300"
                      >
                        {lead.email}
                      </a>

                      <button
                        onClick={() => copyEmail(lead)}
                        className="rounded-md border border-slate-700 px-2 py-0.5 text-[10px] font-semibold text-slate-400 hover:bg-slate-800 hover:text-white"
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
                    Score {lead.score} · {getScoreLabel(lead.score)}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStageStyles(
                      lead.stage
                    )}`}
                  >
                    {lead.stage}
                  </span>

                  {lead.notes?.trim() && (
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                      Notes added
                    </span>
                  )}
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: `${lead.score}%` }}
                  />
                </div>

                {lead.notes?.trim() && (
                  <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-3 text-xs leading-5 text-slate-400">
                    {getNotesPreview(lead.notes)}
                  </p>
                )}

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onView(lead)}
                    className="rounded-lg bg-slate-700 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-600"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit(lead)}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(lead)}
                    className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-500"
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