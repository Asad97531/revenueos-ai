"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

const navItems = [
  {
    label: "Top",
    href: "#top",
    id: "top",
  },
  {
    label: "Summary",
    href: "#summary",
    id: "summary",
  },
  {
    label: "Demo Data",
    href: "#demo-data",
    id: "demo-data",
  },
  {
    label: "Highlights",
    href: "#project-highlights",
    id: "project-highlights",
  },
  {
    label: "Recruiter Notes",
    href: "#recruiter-notes",
    id: "recruiter-notes",
  },
  {
    label: "Case Study",
    href: "#case-study",
    id: "case-study",
  },
  {
    label: "Skills",
    href: "#skills-demonstrated",
    id: "skills-demonstrated",
  },
  {
    label: "Roadmap",
    href: "#product-roadmap",
    id: "product-roadmap",
  },
  {
    label: "Features",
    href: "#feature-checklist",
    id: "feature-checklist",
  },
  {
    label: "Demo Guide",
    href: "#demo-guide",
    id: "demo-guide",
  },
  {
    label: "Links",
    href: "#project-links",
    id: "project-links",
  },
  {
    label: "Workflow",
    href: "#sales-workflow",
    id: "sales-workflow",
  },
  {
    label: "Pipeline",
    href: "#pipeline-health",
    id: "pipeline-health",
  },
  {
    label: "Forecast",
    href: "#revenue-forecast",
    id: "revenue-forecast",
  },
  {
    label: "Funnel",
    href: "#conversion-funnel",
    id: "conversion-funnel",
  },
  {
    label: "Reminders",
    href: "#follow-ups",
    id: "follow-ups",
  },
  {
    label: "Performance",
    href: "#sales-performance",
    id: "sales-performance",
  },
  {
    label: "Accounts",
    href: "#account-insights",
    id: "account-insights",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
    id: "tech-stack",
  },
  {
    label: "CRM",
    href: "#crm-workspace",
    id: "crm-workspace",
  },
];

export function DashboardNav() {
  const [activeSection, setActiveSection] = useState("top");
  const navButtonRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    function updateActiveSection() {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "top";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const activeButton = navButtonRefs.current[activeSection];

    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSection]);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    const topOffset = id === "top" ? 0 : section.offsetTop - 120;

    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
  }

  return (
    <section className="sticky top-6 z-20 rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Dashboard navigation
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Sticky shortcuts with active section highlighting.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                ref={(element) => {
                  navButtonRefs.current[item.id] = element;
                }}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  isActive
                    ? "border-cyan-400 bg-cyan-400 text-slate-950"
                    : "border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}