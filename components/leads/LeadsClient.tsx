"use client";

import { useState } from "react";
import { AddLeadDialog } from "@/components/leads/AddLeadDialog";
import { RecentLeadsTable } from "@/components/dashboard/RecentLeadsTable";
import { leads as initialLeads } from "@/lib/mock-data";

export function LeadsClient() {
  const [leads, setLeads] = useState(initialLeads);

  function addLead(newLead: {
    company: string;
    contact: string;
    email: string;
    value: string;
  }) {
    setLeads([
      {
        id: Date.now(),
        company: newLead.company,
        contact: newLead.contact,
        email: newLead.email,
        stage: "New Lead",
        score: 70,
        value: newLead.value,
      },
      ...leads,
    ]);
  }

  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            CRM
          </p>

          <h1 className="mt-3 text-4xl font-bold">Leads</h1>

          <p className="mt-3 text-slate-400">
            Manage inbound leads, qualification scores, deal stages, and pipeline value.
          </p>
        </div>

        <AddLeadDialog onAddLead={addLead} />
      </div>

      <div className="mt-8">
        <RecentLeadsTable leads={leads} />
      </div>
    </>
  );
}