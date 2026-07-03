"use client";

import { useEffect, useState } from "react";

export function DashboardScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function updateScrollProgress() {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-slate-950">
      <div
        className="h-full bg-cyan-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}