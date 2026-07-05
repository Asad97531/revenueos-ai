# RevenueOS AI — GTM Automation Engine

RevenueOS AI is a GTM Engineer portfolio project built with Next.js, TypeScript, and Tailwind CSS.

It demonstrates how a modern GTM workflow can use Clay-style data enrichment, Claygent-style research, Make.com-style workflow orchestration, Slack alert logic, and HubSpot-style CRM tracking to move leads from first touch to pipeline.

## Live Demo

Live App: https://revenueos-ai-seven.vercel.app/

Dashboard: https://revenueos-ai-seven.vercel.app/dashboard

GitHub Repository: https://github.com/Asad97531/revenueos-ai

## Project Positioning

RevenueOS AI is designed as a portfolio-ready GTM automation dashboard.

The project shows how a GTM Engineer can connect:

- Data enrichment and account research
- Buying trigger detection
- ICP scoring
- Workflow automation
- Slack alerts
- HubSpot CRM operations
- Pipeline and revenue reporting

The current version uses mock data to simulate the full workflow. The next phase is to connect real tools like Clay, Make.com, Slack, and HubSpot.

## GTM Workflow

The dashboard represents this workflow:

```text
Website Lead
-> Clay Enrichment
-> Claygent Research
-> ICP Score
-> Make.com Routing
-> Slack Alert
-> HubSpot CRM
-> Revenue Dashboard
```

## Core GTM Layers

### 1. Data Enrichment and Research

Primary tool represented: Clay

This layer simulates how Clay and Claygent can be used to research accounts at scale.

It includes:

- Company enrichment
- Buyer context
- Hiring signals
- Recent news
- Funding triggers
- Product launch signals
- Personalized outreach angles
- ICP score logic

### 2. Workflow Orchestration

Primary tools represented: Make.com, Zapier, or n8n

This layer simulates how automation connects different GTM tools.

Example workflow:

```text
New lead captured
-> Send company data to Clay
-> Wait for enrichment
-> Check ICP score
-> Send Slack alert for hot leads
-> Create HubSpot task
-> Create HubSpot deal
```

### 3. CRM Source of Truth

Primary tool represented: HubSpot

This layer shows how HubSpot acts as the central system for the customer journey.

It tracks:

- Contacts
- Companies
- Deals
- Tasks
- Lifecycle stages
- Lead source
- ICP score
- Trigger type
- Pipeline value
- Revenue impact

## Key Features

### GTM Dashboard

The dashboard includes:

- Hero section explaining the GTM automation engine
- GTM command navigation
- Clay research engine section
- Workflow orchestration section
- HubSpot source of truth section
- Revenue engine dashboard
- Implementation status and roadmap
- CRM workspace
- Pipeline and AI recommendation sections

### HubSpot GTM Workspace

Users can manage GTM records directly inside the dashboard.

Features include:

- Add GTM records
- Edit GTM records
- Delete records
- Search records
- Filter by HubSpot stage and ICP score
- Sort lead data
- View account details
- Track GTM timeline
- View AI recommendation
- Copy suggested cold email
- Open email draft
- Export CSV
- Import CSV
- Download sample CSV
- Reset demo workspace

### Clay-Style Research Simulation

The dashboard simulates Clay and Claygent outputs, including:

- Hiring trigger research
- Funding news research
- Recent product launch research
- Buyer persona context
- Personalized sales insight
- ICP fit score
- Recommended next action

### Make.com-Style Automation Logic

The workflow orchestration section shows automation rules such as:

```text
If ICP Score is 85+
Then send Slack alert and create HubSpot deal

If ICP Score is 70-84
Then create HubSpot task for sales review

If ICP Score is below 70
Then add account to nurture

If hiring trigger is found
Then mark as priority outbound account
```

### Revenue Dashboard

The Revenue Engine Dashboard tracks the GTM journey from first touch to pipeline.

It includes:

- First click
- Lead captured
- Clay enriched
- High ICP account
- Meeting booked
- Deal created
- Pipeline generated
- Lead source breakdown
- Conversion metrics

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- LocalStorage
- CSV import/export
- Google Sans Flex font
- Mock GTM data
- Planned Clay integration
- Planned Make.com integration
- Planned Slack alert workflow
- Planned HubSpot integration

## Demo Data

The project uses realistic GTM demo records such as:

- Acme SaaS — hiring SDRs
- Northstar AI — funding news
- BrightCart — e-commerce expansion
- CloudOpsly — new RevOps leader
- ScaleDesk — high-intent website visit
- RevPilot — needs Claygent research
- MarketLoop — product launch signal
- DataNest — closed-won expansion opportunity

Sample CSV path:

```text
/public/sample-leads.csv
```

## Current Implementation Status

### Built

- Next.js dashboard
- GTM command interface
- GTM lead workspace
- Add/edit/delete records
- LocalStorage persistence
- CSV import/export
- Clay-style research sections
- Make.com-style workflow logic
- HubSpot-style CRM tracking
- Revenue dashboard
- Portfolio summary and roadmap

### Simulated

- Clay enrichment
- Claygent research
- Make.com routing
- Slack alerts
- HubSpot CRM sync
- HubSpot custom properties
- Revenue attribution

### Planned Real Integrations

- Create HubSpot custom properties
- Build a real Clay enrichment table
- Connect Make.com webhook workflow
- Send Slack alerts for hot leads
- Create HubSpot tasks and deals
- Record demo video
- Update project screenshots

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/Asad97531/revenueos-ai.git
```

Move into the project folder:

```bash
cd revenueos-ai
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000/dashboard
```

## Useful Scripts

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Builds the app for production.

```bash
npm run lint
```

Runs linting checks if configured.

## Portfolio Explanation

This project is built to demonstrate GTM Engineer skills.

Interview explanation:

```text
I built RevenueOS AI as a GTM automation engine. It simulates how inbound or target accounts can be enriched in Clay, researched with Claygent, routed through Make.com, alerted in Slack, and tracked in HubSpot from first touch to pipeline.
```

## Recruiter Takeaway

RevenueOS AI is not only a dashboard. It is a full GTM workflow concept covering:

- Account enrichment
- Buying signal research
- Workflow orchestration
- CRM architecture
- Lead routing
- Pipeline tracking
- Revenue reporting

The goal is to show practical GTM engineering thinking, not just frontend design.