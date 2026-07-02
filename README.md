# RevenueOS AI

RevenueOS AI is a modern CRM and sales pipeline dashboard built with Next.js, TypeScript, and Tailwind CSS.

It helps sales teams manage leads, track pipeline value, prioritize follow-ups, and generate AI-style cold email suggestions.

## Features

- Add new leads
- Edit existing leads
- Delete leads
- Search leads by company, contact, email, stage, or notes
- Filter leads by stage and score
- Sort leads by score, value, and company name
- Track total leads
- Track pipeline value
- Track average lead score
- Track hot leads
- View detailed lead profile
- Add discovery notes
- Copy lead email
- Click email address to open mail app
- Copy AI-generated cold email
- Open AI cold email as a mail draft
- AI Action Queue for priority follow-ups
- Mark AI actions as done
- Reset completed AI actions
- Export visible leads as CSV
- Reset CRM demo data
- LocalStorage persistence
- Mobile responsive lead cards
- Stage summary chips
- Clickable quick stage filters

Project Structure
revenueos-ai/
├── app/
│   └── dashboard/
│       └── page.tsx
├── components/
│   ├── dashboard/
│   │   └── RecentLeadsTable.tsx
│   ├── leads/
│   │   ├── AddLeadDialog.tsx
│   │   └── LeadsClient.tsx
│   └── ui/
├── lib/
│   └── mock-data.ts
└── README.md



## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- LocalStorage
- shadcn-style UI components

## Screenshots

Add screenshots of your app here.

Example:

```md
![Dashboard Screenshot](./screenshots/dashboard.png)

Main Pages
Dashboard

The dashboard shows CRM performance metrics such as:

Total leads
Pipeline value
Average score
Hot leads
AI action queue
Recent leads table
Lead Details

Each lead has a detailed profile with:

Contact information
Stage
Deal value
Notes
AI lead score
AI recommendation
Next best action
AI cold email
Why I Built This

I built RevenueOS AI to practice building a real-world SaaS-style dashboard.

The project is designed for a sales or RevOps workflow where teams need to:

Manage leads
Prioritize follow-ups
Track pipeline quality
Generate outreach faster
Improve sales execution
Future Improvements
Real authentication
Backend database
AI API integration
Lead import from CSV
Team collaboration
Activity timeline
Deal forecasting
CRM integrations
Analytics charts

Author
Built by Asad Ali.


