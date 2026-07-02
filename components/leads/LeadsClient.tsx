"use client";

import { useEffect, useState } from "react";
import { AddLeadDialog } from "@/components/leads/AddLeadDialog";
import { RecentLeadsTable } from "@/components/dashboard/RecentLeadsTable";
import { leads as initialLeads } from "@/lib/mock-data";

type Lead = {
  id: number;
  company: string;
  contact: string;
  email: string;
  stage: string;
  score: number;
  value: string;
  notes?: string;
};

type LeadFormData = {
  company: string;
  contact: string;
  email: string;
  stage: string;
  score: number;
  value: string;
  notes: string;
};

type ActivityItem = {
  title: string;
  description: string;
  status: "Done" | "Active" | "Suggested";
};

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

function shouldUseIndianCurrency(leads: Lead[]) {
  return leads.some((lead) => {
    const value = lead.value.toLowerCase();

    return (
      value.includes("₹") ||
      value.includes("lakh") ||
      value.includes("lakhs") ||
      value.includes("crore") ||
      value.includes("crores") ||
      value.includes("cr") ||
      value.endsWith("l")
    );
  });
}

function formatPipelineValue(value: number, useIndianCurrency: boolean) {
  if (useIndianCurrency) {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    }

    if (value >= 1000) {
      return `₹${Math.round(value / 1000)}K`;
    }

    return `₹${value}`;
  }

  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `$${Math.round(value / 1000)}K`;
  }

  return `$${value}`;
}

function getLeadPriority(lead: Lead) {
  if (lead.score >= 85) {
    return "High Priority";
  }

  if (lead.score >= 70) {
    return "Medium Priority";
  }

  return "Low Priority";
}

function getAiInsight(lead: Lead) {
  if (lead.score >= 85 && lead.stage === "Proposal") {
    return `${lead.company} is a strong opportunity. The lead score is high and the deal is already in proposal stage, so this should be followed up quickly.`;
  }

  if (lead.score >= 80) {
    return `${lead.company} looks like a hot lead. The score shows strong buying intent, so this lead should not be left idle.`;
  }

  if (lead.stage === "Negotiation") {
    return `${lead.company} is close to conversion. Focus on removing objections, confirming budget, and creating urgency.`;
  }

  if (lead.stage === "New Lead") {
    return `${lead.company} is still early in the pipeline. The next step should be qualification and discovery.`;
  }

  if (lead.stage === "Closed") {
    return `${lead.company} is already closed. This account can be used for expansion, referral, or upsell opportunities.`;
  }

  return `${lead.company} needs more qualification. Gather more information about pain points, budget, timeline, and decision makers.`;
}

function getNextBestAction(lead: Lead) {
  if (lead.stage === "New Lead") {
    return "Send a discovery email and ask for a short qualification call.";
  }

  if (lead.stage === "Qualified") {
    return "Book a demo and connect the product value to their main business problem.";
  }

  if (lead.stage === "Proposal") {
    return "Follow up on the proposal and ask if there are any blockers.";
  }

  if (lead.stage === "Negotiation") {
    return "Confirm final requirements, pricing concerns, and decision timeline.";
  }

  if (lead.stage === "Closed") {
    return "Plan an onboarding check-in and look for expansion opportunities.";
  }

  return "Review the lead and decide the next sales activity.";
}

function getColdEmailSubject(lead: Lead) {
  if (lead.stage === "Proposal") {
    return `Following up on the proposal for ${lead.company}`;
  }

  if (lead.stage === "Negotiation") {
    return `Next steps for ${lead.company}`;
  }

  if (lead.stage === "Closed") {
    return `Onboarding check-in for ${lead.company}`;
  }

  return `Quick idea for ${lead.company}`;
}

function getColdEmail(lead: Lead) {
  if (lead.stage === "New Lead") {
    return `Hi ${lead.contact},

I noticed ${lead.company} could be a good fit for a revenue workflow improvement.

Many teams at this stage are trying to manage leads, follow-ups, and pipeline visibility without losing speed.

Would you be open to a quick 15-minute call this week to see if there is a fit?

Best,
Asad`;
  }

  if (lead.stage === "Qualified") {
    return `Hi ${lead.contact},

Based on what we know about ${lead.company}, it looks like there may be a strong opportunity to improve pipeline visibility and follow-up execution.

Since this lead is already qualified, the next step would be to map your current sales process and identify where RevenueOS AI can save time.

Would you be available for a short demo this week?

Best,
Asad`;
  }

  if (lead.stage === "Proposal") {
    return `Hi ${lead.contact},

Just following up on the proposal for ${lead.company}.

Given the current opportunity size of ${lead.value}, I wanted to check if there are any open questions, blockers, or internal approvals needed from your side.

Happy to walk through the proposal again and help make the next step clear.

Best,
Asad`;
  }

  if (lead.stage === "Negotiation") {
    return `Hi ${lead.contact},

I wanted to follow up on our discussion with ${lead.company}.

To help move things forward, it would be useful to confirm the final requirements, pricing expectations, and decision timeline.

Would it make sense to schedule a quick call to close any remaining gaps?

Best,
Asad`;
  }

  if (lead.stage === "Closed") {
    return `Hi ${lead.contact},

Excited to have ${lead.company} moving forward.

The next step is to make sure onboarding is smooth and your team starts seeing value quickly.

Would you be open to setting up an onboarding check-in so we can align on goals, timeline, and success metrics?

Best,
Asad`;
  }

  return `Hi ${lead.contact},

I wanted to reach out regarding ${lead.company}.

There may be an opportunity to improve how your team manages sales follow-ups, lead prioritization, and revenue workflows.

Would you be open to a quick conversation this week?

Best,
Asad`;
}

function getActionUrgency(lead: Lead) {
  if (lead.score >= 85 && lead.stage !== "Closed") {
    return "Act today";
  }

  if (lead.stage === "Negotiation" || lead.stage === "Proposal") {
    return "Follow up soon";
  }

  if (lead.stage === "New Lead") {
    return "Qualify lead";
  }

  return "Review lead";
}

function getActivityTimeline(lead: Lead): ActivityItem[] {
  const timeline: ActivityItem[] = [
    {
      title: "Lead added to CRM",
      description: `${lead.company} was added as a sales opportunity with ${lead.contact} as the main contact.`,
      status: "Done",
    },
    {
      title: `Stage set to ${lead.stage}`,
      description: `This lead is currently in the ${lead.stage} stage of the pipeline.`,
      status: "Active",
    },
    {
      title: `AI score calculated: ${lead.score}/100`,
      description: `RevenueOS AI reviewed this lead and marked it as ${getLeadPriority(
        lead
      )}.`,
      status: "Done",
    },
  ];

  if (lead.notes?.trim()) {
    timeline.push({
      title: "Discovery notes captured",
      description:
        "Notes have been added for this lead, including context such as pain points, next steps, or qualification details.",
      status: "Done",
    });
  } else {
    timeline.push({
      title: "Discovery notes missing",
      description:
        "Add notes after a discovery call to make follow-ups more personalized.",
      status: "Suggested",
    });
  }

  timeline.push({
    title: "Next best action suggested",
    description: getNextBestAction(lead),
    status: "Suggested",
  });

  return timeline;
}

function getActivityStatusStyles(status: ActivityItem["status"]) {
  if (status === "Done") {
    return "border-green-500/30 bg-green-500/10 text-green-300";
  }

  if (status === "Active") {
    return "border-cyan-400/30 bg-cyan-400/10 text-cyan-300";
  }

  return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
}

function convertLeadsToCsv(leads: Lead[]) {
  const headers = [
    "Company",
    "Contact",
    "Email",
    "Stage",
    "Score",
    "Value",
    "Notes",
  ];

  const rows = leads.map((lead) => [
    lead.company,
    lead.contact,
    lead.email,
    lead.stage,
    String(lead.score),
    lead.value,
    lead.notes ?? "",
  ]);

  const csvRows = [headers, ...rows].map((row) =>
    row
      .map((cell) => {
        const safeCell = cell.replace(/"/g, '""');
        return `"${safeCell}"`;
      })
      .join(",")
  );

  return csvRows.join("\n");
}

export function LeadsClient() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("All Stages");
  const [scoreFilter, setScoreFilter] = useState("All Scores");
  const [hasLoadedLeads, setHasLoadedLeads] = useState(false);
  const [completedActionLeadIds, setCompletedActionLeadIds] = useState<
    number[]
  >([]);
  const [copiedEmailLeadId, setCopiedEmailLeadId] = useState<number | null>(
    null
  );

  useEffect(() => {
    try {
      const savedLeads = localStorage.getItem("revenueos-leads");
      const savedCompletedActions = localStorage.getItem(
        "revenueos-completed-actions"
      );

      if (savedLeads) {
        setLeads(JSON.parse(savedLeads));
      }

      if (savedCompletedActions) {
        setCompletedActionLeadIds(JSON.parse(savedCompletedActions));
      }
    } catch (error) {
      console.error("Failed to load data from localStorage", error);
    } finally {
      setHasLoadedLeads(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedLeads) return;

    try {
      localStorage.setItem("revenueos-leads", JSON.stringify(leads));
      localStorage.setItem(
        "revenueos-completed-actions",
        JSON.stringify(completedActionLeadIds)
      );
    } catch (error) {
      console.error("Failed to save data to localStorage", error);
    }
  }, [leads, completedActionLeadIds, hasLoadedLeads]);

  const totalLeads = leads.length;

  const pipelineValue = leads.reduce((total, lead) => {
    return total + parseLeadValue(lead.value);
  }, 0);

  const useIndianCurrency = shouldUseIndianCurrency(leads);

  const averageScore =
    leads.length > 0
      ? Math.round(
          leads.reduce((total, lead) => total + lead.score, 0) / leads.length
        )
      : 0;

  const hotLeads = leads.filter((lead) => lead.score >= 80).length;

  const aiActionQueue = leads
    .filter((lead) => lead.stage !== "Closed")
    .filter((lead) => !completedActionLeadIds.includes(lead.id))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const completedActionsCount = completedActionLeadIds.length;

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      `${lead.company} ${lead.contact} ${lead.email} ${lead.stage} ${
        lead.notes ?? ""
      }`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesStage =
      stageFilter === "All Stages" || lead.stage === stageFilter;

    const matchesScore =
      scoreFilter === "All Scores" ||
      (scoreFilter === "80+ Hot Leads" && lead.score >= 80) ||
      (scoreFilter === "70+ Warm Leads" && lead.score >= 70) ||
      (scoreFilter === "60+ Cold Leads" && lead.score >= 60);

    return matchesSearch && matchesStage && matchesScore;
  });

  const hasActiveFilters =
    searchQuery !== "" ||
    stageFilter !== "All Stages" ||
    scoreFilter !== "All Scores";

  function addLead(newLead: LeadFormData) {
    setLeads((prev) => [
      {
        id: Date.now(),
        company: newLead.company,
        contact: newLead.contact,
        email: newLead.email,
        stage: newLead.stage,
        score: newLead.score,
        value: newLead.value,
        notes: newLead.notes,
      },
      ...prev,
    ]);
  }

  function deleteLead(id: number) {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    setCompletedActionLeadIds((prev) =>
      prev.filter((leadId) => leadId !== id)
    );

    if (selectedLead?.id === id) {
      setSelectedLead(null);
    }

    if (editingLead?.id === id) {
      setEditingLead(null);
    }
  }

  function updateLead(updatedLead: Lead) {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead))
    );

    if (selectedLead?.id === updatedLead.id) {
      setSelectedLead(updatedLead);
    }

    setEditingLead(null);
  }

  function markActionDone(id: number) {
    setCompletedActionLeadIds((prev) => {
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });
  }

  function resetCompletedActions() {
    setCompletedActionLeadIds([]);
  }

  function clearFilters() {
    setSearchQuery("");
    setStageFilter("All Stages");
    setScoreFilter("All Scores");
  }

  function resetCrmData() {
    const confirmed = window.confirm(
      "Are you sure you want to reset CRM data? This will restore the original demo leads and clear completed AI actions."
    );

    if (!confirmed) {
      return;
    }

    setLeads(initialLeads);
    setCompletedActionLeadIds([]);
    setSelectedLead(null);
    setEditingLead(null);
    clearFilters();

    localStorage.removeItem("revenueos-leads");
    localStorage.removeItem("revenueos-completed-actions");
  }

  function exportVisibleLeads() {
    const csv = convertLeadsToCsv(filteredLeads);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "revenueos-leads.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  async function copyColdEmail(lead: Lead) {
    try {
      await navigator.clipboard.writeText(getColdEmail(lead));
      setCopiedEmailLeadId(lead.id);

      setTimeout(() => {
        setCopiedEmailLeadId(null);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  }

  function openColdEmailDraft(lead: Lead) {
    const subject = encodeURIComponent(getColdEmailSubject(lead));
    const body = encodeURIComponent(getColdEmail(lead));

    window.location.href = `mailto:${lead.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            CRM
          </p>

          <h1 className="mt-3 text-4xl font-bold">Leads</h1>

          <p className="mt-3 text-slate-400">
            Manage inbound leads, qualification scores, deal stages, and pipeline value.
          </p>
        </div>

        <AddLeadDialog
          onAddLead={addLead}
          editingLead={editingLead}
          onUpdateLead={updateLead}
          onCloseEdit={() => setEditingLead(null)}
        />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Total Leads</p>
          <p className="mt-2 text-3xl font-bold text-white">{totalLeads}</p>
          <p className="mt-1 text-xs text-slate-500">All CRM records</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Pipeline Value</p>
          <p className="mt-2 text-3xl font-bold text-white">
            {formatPipelineValue(pipelineValue, useIndianCurrency)}
          </p>
          <p className="mt-1 text-xs text-slate-500">Total deal value</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Average Score</p>
          <p className="mt-2 text-3xl font-bold text-white">{averageScore}</p>
          <p className="mt-1 text-xs text-slate-500">Lead quality average</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Hot Leads</p>
          <p className="mt-2 text-3xl font-bold text-white">{hotLeads}</p>
          <p className="mt-1 text-xs text-slate-500">Score 80 or above</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              AI Action Queue
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Leads needing attention
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              RevenueOS AI is prioritizing your best follow-up opportunities.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-300">
              Sprint 3
            </span>

            {completedActionsCount > 0 && (
              <button
                onClick={resetCompletedActions}
                className="text-xs font-semibold text-slate-400 hover:text-white"
              >
                Reset completed
              </button>
            )}
          </div>
        </div>

        {aiActionQueue.length === 0 ? (
          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-sm text-slate-400">
              No open leads need attention right now.
            </p>

            {completedActionsCount > 0 && (
              <p className="mt-2 text-xs text-slate-500">
                {completedActionsCount} AI action
                {completedActionsCount === 1 ? "" : "s"} marked as done.
              </p>
            )}
          </div>
        ) : (
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {aiActionQueue.map((lead) => (
              <div
                key={lead.id}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      {getActionUrgency(lead)}
                    </p>

                    <h3 className="mt-2 font-bold text-white">
                      {lead.company}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {lead.contact}
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {lead.score}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {getNextBestAction(lead)}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedLead(lead)}
                    className="rounded-lg bg-slate-700 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-600"
                  >
                    View Lead
                  </button>

                  <button
                    onClick={() => copyColdEmail(lead)}
                    className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
                  >
                    {copiedEmailLeadId === lead.id ? "Copied" : "Copy Email"}
                  </button>

                  <button
                    onClick={() => openColdEmailDraft(lead)}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                  >
                    Open Draft
                  </button>

                  <button
                    onClick={() => markActionDone(lead.id)}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                  >
                    Mark Done
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedLead && (
        <div className="mt-8 rounded-2xl border border-cyan-400/30 bg-slate-900 p-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Lead Details
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                {selectedLead.company}
              </h2>

              <p className="mt-2 text-slate-400">
                Detailed CRM profile, notes, activity timeline, and AI recommendation for this lead.
              </p>
            </div>

            <button
              onClick={() => setSelectedLead(null)}
              className="rounded-lg border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:bg-slate-800"
            >
              Close
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Contact
              </p>
              <p className="mt-2 font-semibold text-white">
                {selectedLead.contact}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Email
              </p>
              <p className="mt-2 font-semibold text-white">
                {selectedLead.email}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Stage
              </p>
              <p className="mt-2 font-semibold text-white">
                {selectedLead.stage}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Deal Value
              </p>
              <p className="mt-2 font-semibold text-white">
                {selectedLead.value}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Lead Notes
            </p>

            <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-300">
              {selectedLead.notes?.trim()
                ? selectedLead.notes
                : "No notes added yet. Click Edit to add discovery notes, pain points, next steps, or decision-maker context."}
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Activity Timeline
                </p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Latest lead activity
                </h3>
              </div>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-400">
                Auto-generated
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {getActivityTimeline(selectedLead).map((activity, index) => (
                <div key={activity.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-xs font-bold text-cyan-300">
                      {index + 1}
                    </div>

                    {index !== getActivityTimeline(selectedLead).length - 1 && (
                      <div className="h-full w-px bg-slate-800" />
                    )}
                  </div>

                  <div className="flex-1 rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="font-semibold text-white">
                        {activity.title}
                      </h4>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getActivityStatusStyles(
                          activity.status
                        )}`}
                      >
                        {activity.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              AI Lead Score
            </p>

            <div className="mt-3 flex items-center gap-4">
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: `${selectedLead.score}%` }}
                />
              </div>

              <p className="text-lg font-bold text-white">
                {selectedLead.score}/100
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  AI Recommendation
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {getLeadPriority(selectedLead)}
                </h3>
              </div>

              <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-300">
                RevenueOS AI
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {getAiInsight(selectedLead)}
            </p>

            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Next Best Action
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {getNextBestAction(selectedLead)}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  AI Cold Email
                </p>

                <h3 className="mt-2 text-lg font-bold text-white">
                  Suggested outreach message
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => copyColdEmail(selectedLead)}
                  className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  {copiedEmailLeadId === selectedLead.id
                    ? "Copied"
                    : "Copy Email"}
                </button>

                <button
                  onClick={() => openColdEmailDraft(selectedLead)}
                  className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                >
                  Open Draft
                </button>
              </div>
            </div>

            <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
              {getColdEmail(selectedLead)}
            </pre>
          </div>
        </div>
      )}

      <div className="mt-8">
        <div className="mb-4 grid gap-4 md:grid-cols-[1fr_220px_220px]">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search leads by company, contact, email, stage, or notes..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none placeholder:text-slate-500"
          />

          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none"
          >
            <option>All Stages</option>
            <option>New Lead</option>
            <option>Qualified</option>
            <option>Proposal</option>
            <option>Negotiation</option>
            <option>Closed</option>
          </select>

          <select
            value={scoreFilter}
            onChange={(e) => setScoreFilter(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-white outline-none"
          >
            <option>All Scores</option>
            <option>80+ Hot Leads</option>
            <option>70+ Warm Leads</option>
            <option>60+ Cold Leads</option>
          </select>
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredLeads.length}
            </span>{" "}
            of <span className="font-semibold text-white">{leads.length}</span>{" "}
            leads
          </p>

          <div className="flex flex-wrap gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
              >
                Clear Filters
              </button>
            )}

            <button
              onClick={exportVisibleLeads}
              className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Export CSV
            </button>

            <button
              onClick={resetCrmData}
              className="rounded-lg border border-red-500/30 px-3 py-2 text-xs font-semibold text-red-300 hover:bg-red-500/10"
            >
              Reset CRM Data
            </button>
          </div>
        </div>

        <RecentLeadsTable
          leads={filteredLeads}
          onDelete={deleteLead}
          onEdit={setEditingLead}
          onView={setSelectedLead}
        />
      </div>
    </>
  );
}