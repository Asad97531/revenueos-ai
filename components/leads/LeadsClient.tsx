"use client";

import { useEffect, useState, type ChangeEvent } from "react";
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
    return "Tier 1 GTM Account";
  }

  if (lead.score >= 70) {
    return "Tier 2 Review Account";
  }

  return "Nurture Account";
}

function getTriggerType(lead: Lead) {
  const notes = lead.notes?.toLowerCase() ?? "";

  if (notes.includes("hiring") || notes.includes("recruit")) {
    return "Hiring trigger";
  }

  if (notes.includes("funding") || notes.includes("raised")) {
    return "Funding trigger";
  }

  if (lead.score >= 85) {
    return "High-intent signal";
  }

  if (lead.stage === "Proposal") {
    return "Proposal follow-up";
  }

  if (lead.stage === "Negotiation") {
    return "Active deal signal";
  }

  if (lead.stage === "Closed") {
    return "Expansion signal";
  }

  return "Needs Claygent research";
}

function getAiInsight(lead: Lead) {
  if (lead.score >= 85 && lead.stage === "Proposal") {
    return `${lead.company} is a high-fit GTM opportunity. The account has a strong ICP score and is already in proposal stage, so the workflow should trigger a fast follow-up and HubSpot task.`;
  }

  if (lead.score >= 85) {
    return `${lead.company} should be routed as a hot lead. The ICP score is strong, so Make.com should trigger a Slack alert and create a HubSpot follow-up task.`;
  }

  if (lead.score >= 70) {
    return `${lead.company} is a good-fit account that needs sales review. Clay enrichment should be checked and the account should be qualified before creating a deal.`;
  }

  if (lead.stage === "Negotiation") {
    return `${lead.company} is close to conversion. The next step is to confirm blockers, decision timeline, and deal value inside HubSpot.`;
  }

  if (lead.stage === "New Lead") {
    return `${lead.company} is early in the GTM workflow. The next step is Clay enrichment, trigger research, and ICP scoring.`;
  }

  if (lead.stage === "Closed") {
    return `${lead.company} is already closed. This account can be used for expansion, referrals, onboarding, or customer success follow-up.`;
  }

  return `${lead.company} needs more qualification. Use Claygent to research company signals, buyer context, and personalized outreach angles.`;
}

function getNextBestAction(lead: Lead) {
  if (lead.score >= 85 && lead.stage !== "Closed") {
    return "Send Slack alert, create HubSpot task, and prioritize same-day follow-up.";
  }

  if (lead.stage === "New Lead") {
    return "Run Clay enrichment and use Claygent to research news, hiring triggers, and buyer context.";
  }

  if (lead.stage === "Qualified") {
    return "Create a HubSpot task and prepare a personalized outreach message.";
  }

  if (lead.stage === "Proposal") {
    return "Follow up on the proposal and update the HubSpot deal timeline.";
  }

  if (lead.stage === "Negotiation") {
    return "Confirm final blockers, pricing concerns, and decision timeline.";
  }

  if (lead.stage === "Closed") {
    return "Plan onboarding, expansion, or referral workflow.";
  }

  return "Review the account and decide the next GTM action.";
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

I noticed ${lead.company} could be a strong fit for a GTM workflow improvement.

Many teams at this stage are trying to improve lead research, routing, and follow-up speed without adding more manual work.

Would you be open to a quick 15-minute conversation this week?

Best,
Asad`;
  }

  if (lead.stage === "Qualified") {
    return `Hi ${lead.contact},

Based on what we know about ${lead.company}, there may be a strong opportunity to improve how your team prioritizes and routes high-fit leads.

The next step would be to map your current GTM workflow and identify where enrichment, automation, or HubSpot tracking can save time.

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
    return "Route now";
  }

  if (lead.stage === "Negotiation" || lead.stage === "Proposal") {
    return "Follow up soon";
  }

  if (lead.stage === "New Lead") {
    return "Research in Clay";
  }

  return "Review account";
}

function getActivityTimeline(lead: Lead): ActivityItem[] {
  const timeline: ActivityItem[] = [
    {
      title: "Lead captured",
      description: `${lead.company} entered the GTM workflow with ${lead.contact} as the main contact.`,
      status: "Done",
    },
    {
      title: "HubSpot stage assigned",
      description: `This account is currently tracked in the ${lead.stage} stage.`,
      status: "Active",
    },
    {
      title: `ICP score calculated: ${lead.score}/100`,
      description: `RevenueOS AI marked this account as ${getLeadPriority(
        lead
      )}.`,
      status: "Done",
    },
    {
      title: `Trigger type: ${getTriggerType(lead)}`,
      description:
        "The workflow uses trigger context to decide whether to create a task, send a Slack alert, or continue research.",
      status: "Active",
    },
  ];

  if (lead.notes?.trim()) {
    timeline.push({
      title: "Research notes captured",
      description:
        "Notes have been added for this lead, including context such as pain points, next steps, or qualification details.",
      status: "Done",
    });
  } else {
    timeline.push({
      title: "Claygent research missing",
      description:
        "Add notes after Claygent research to make follow-ups more personalized.",
      status: "Suggested",
    });
  }

  timeline.push({
    title: "Next-best action suggested",
    description: getNextBestAction(lead),
    status: "Suggested",
  });

  return timeline;
}

function getActivityStatusStyles(status: ActivityItem["status"]) {
  if (status === "Done") {
    return "border-green-400/30 bg-green-500/10 text-green-200";
  }

  if (status === "Active") {
    return "border-cyan-300/30 bg-cyan-400/10 text-cyan-200";
  }

  return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200";
}

function convertLeadsToCsv(leads: Lead[]) {
  const headers = [
    "Company",
    "Contact",
    "Email",
    "HubSpot Stage",
    "ICP Score",
    "Deal Value",
    "Research Notes",
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

function parseCsvLine(line: string) {
  const result: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());

  return result.map((item) => item.replace(/^"|"$/g, ""));
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
      "Are you sure you want to reset GTM workspace data? This will restore the original demo leads and clear completed automation actions."
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
    link.download = "revenueos-gtm-leads.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  function importLeadsFromCsv(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const text = String(reader.result);
      const lines = text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

      if (lines.length < 2) {
        alert("CSV file is empty or missing lead rows.");
        input.value = "";
        return;
      }

      const rows = lines.slice(1);

      const importedLeads: Lead[] = rows.map((row, index) => {
        const [company, contact, email, stage, score, value, notes] =
          parseCsvLine(row);

        return {
          id: Date.now() + index,
          company: company || "Imported Company",
          contact: contact || "Unknown Contact",
          email: email || "unknown@example.com",
          stage: stage || "New Lead",
          score: Number(score) || 70,
          value: value || "$10K",
          notes: notes || "",
        };
      });

      setLeads((prev) => [...importedLeads, ...prev]);
      input.value = "";
    };

    reader.readAsText(file);
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
      <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              HubSpot GTM Workspace
            </p>

            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Enriched leads, routing, and next-best actions
            </h1>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              Manage Clay-enriched leads, ICP scores, HubSpot stages, pipeline
              value, and Make.com-style action routing from one workspace.
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
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">GTM Records</p>
            <p className="mt-2 text-3xl font-bold text-white">{totalLeads}</p>
            <p className="mt-1 text-xs text-slate-500">
              Contacts in workspace
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">HubSpot Pipeline</p>
            <p className="mt-2 text-3xl font-bold text-white">
              {formatPipelineValue(pipelineValue, useIndianCurrency)}
            </p>
            <p className="mt-1 text-xs text-slate-500">Total demo deal value</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">Avg ICP Score</p>
            <p className="mt-2 text-3xl font-bold text-white">
              {averageScore}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Account fit average
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">High ICP Leads</p>
            <p className="mt-2 text-3xl font-bold text-white">{hotLeads}</p>
            <p className="mt-1 text-xs text-slate-500">Score 80 or above</p>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-6 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Make.com Action Queue
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Accounts that need routing now
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              RevenueOS AI prioritizes the best follow-up opportunities based on
              ICP score, HubSpot stage, trigger type, and deal urgency.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 lg:items-end">
            <span className="rounded-full border border-cyan-300/30 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
              Automation Layer
            </span>

            {completedActionsCount > 0 && (
              <button
                onClick={resetCompletedActions}
                className="text-xs font-semibold text-slate-300 hover:text-white"
              >
                Reset completed
              </button>
            )}
          </div>
        </div>

        {aiActionQueue.length === 0 ? (
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <p className="text-sm text-slate-300">
              No open accounts need routing right now.
            </p>

            {completedActionsCount > 0 && (
              <p className="mt-2 text-xs text-slate-500">
                {completedActionsCount} automation action
                {completedActionsCount === 1 ? "" : "s"} marked as done.
              </p>
            )}
          </div>
        ) : (
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {aiActionQueue.map((lead) => (
              <div
                key={lead.id}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {getActionUrgency(lead)}
                    </p>

                    <h3 className="mt-2 font-bold text-white">
                      {lead.company}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {lead.contact}
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {lead.score}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {getNextBestAction(lead)}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedLead(lead)}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
                  >
                    View Record
                  </button>

                  <button
                    onClick={() => copyColdEmail(lead)}
                    className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    {copiedEmailLeadId === lead.id ? "Copied" : "Copy Email"}
                  </button>

                  <button
                    onClick={() => openColdEmailDraft(lead)}
                    className="rounded-lg bg-blue-500/80 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-400"
                  >
                    Open Draft
                  </button>

                  <button
                    onClick={() => markActionDone(lead.id)}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
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
        <div className="mt-8 rounded-3xl border border-cyan-300/30 bg-slate-950/70 p-6 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                HubSpot Record Details
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                {selectedLead.company}
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                Detailed GTM profile, research notes, timeline, AI
                recommendation, and suggested outbound message for this account.
              </p>
            </div>

            <button
              onClick={() => setSelectedLead(null)}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 transition hover:bg-white/10"
            >
              Close
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Contact
              </p>
              <p className="mt-2 font-semibold text-white">
                {selectedLead.contact}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Email
              </p>
              <p className="mt-2 font-semibold text-white">
                {selectedLead.email}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                HubSpot Stage
              </p>
              <p className="mt-2 font-semibold text-white">
                {selectedLead.stage}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Deal Value
              </p>
              <p className="mt-2 font-semibold text-white">
                {selectedLead.value}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Research Notes
            </p>

            <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-300">
              {selectedLead.notes?.trim()
                ? selectedLead.notes
                : "No research notes added yet. Click Edit to add Claygent findings, buying triggers, pain points, next steps, or decision-maker context."}
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  GTM Timeline
                </p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Latest account activity
                </h3>
              </div>

              <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-semibold text-slate-300">
                Auto-generated
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {getActivityTimeline(selectedLead).map((activity, index) => (
                <div key={activity.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-xs font-bold text-cyan-300">
                      {index + 1}
                    </div>

                    {index !== getActivityTimeline(selectedLead).length - 1 && (
                      <div className="h-full w-px bg-white/10" />
                    )}
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
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

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              ICP Score
            </p>

            <div className="mt-3 flex items-center gap-4">
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-300"
                  style={{ width: `${selectedLead.score}%` }}
                />
              </div>

              <p className="text-lg font-bold text-white">
                {selectedLead.score}/100
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-300">
                  GTM Recommendation
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {getLeadPriority(selectedLead)}
                </h3>
              </div>

              <span className="rounded-full border border-cyan-300/30 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
                RevenueOS AI
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              {getAiInsight(selectedLead)}
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Next Best Action
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {getNextBestAction(selectedLead)}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
                  className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {copiedEmailLeadId === selectedLead.id
                    ? "Copied"
                    : "Copy Email"}
                </button>

                <button
                  onClick={() => openColdEmailDraft(selectedLead)}
                  className="rounded-lg bg-blue-500/80 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-400"
                >
                  Open Draft
                </button>
              </div>
            </div>

            <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300">
              {getColdEmail(selectedLead)}
            </pre>
          </div>
        </div>
      )}

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-md">
        <div className="mb-4 grid gap-4 md:grid-cols-[1fr_220px_220px]">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by company, contact, email, HubSpot stage, or research notes..."
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
          />

          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm text-white outline-none focus:border-cyan-300/40"
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
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm text-white outline-none focus:border-cyan-300/40"
          >
            <option>All Scores</option>
            <option>80+ Hot Leads</option>
            <option>70+ Warm Leads</option>
            <option>60+ Cold Leads</option>
          </select>
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-300">
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredLeads.length}
            </span>{" "}
            of <span className="font-semibold text-white">{leads.length}</span>{" "}
            GTM records
          </p>

          <div className="flex flex-wrap gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
              >
                Clear Filters
              </button>
            )}

            <button
              onClick={exportVisibleLeads}
              className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Export CSV
            </button>

            <label className="cursor-pointer rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/15">
              Import CSV
              <input
                type="file"
                accept=".csv"
                onChange={importLeadsFromCsv}
                className="hidden"
              />
            </label>

            <a
              href="/sample-leads.csv"
              download
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
            >
              Download Sample CSV
            </a>

            <button
              onClick={resetCrmData}
              className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-200 transition hover:bg-red-500/15"
            >
              Reset Workspace
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