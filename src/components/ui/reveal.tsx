"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Panel reveal (transitions.dev): entra con un desplazamiento corto, fade y blur.
 * Con `animate={false}` se muestra ya abierto, sin animar la primera carga.
 */
export function Reveal({ animate = true, children }: { animate?: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(!animate);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="t-panel-slide" style={{ "--panel-translate-y": "16px" } as React.CSSProperties} data-open={open}>
      {children}
    </div>
  );
}
