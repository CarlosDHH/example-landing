"use client";

import { useEffect, useState } from "react";

/** Success check (transitions.dev): círculo con palomita que se dibuja al aparecer. */
export function SuccessCheck({ className = "" }: { className?: string }) {
  const [state, setState] = useState<"out" | "in">("out");

  useEffect(() => {
    const id = requestAnimationFrame(() => setState("in"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <span className={`t-success-check ${className}`} data-state={state} aria-hidden="true">
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.5" />
        <path d="M14 25l7 7 13-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
