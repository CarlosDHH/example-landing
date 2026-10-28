"use client";

import Link from "next/link";
import { CakeArt } from "@/components/ui/cake-art";

export const SELECT_FLAVOR_EVENT = "seleccionar-sabor";

const flavors = [
  { name: "Chocolate", tone: "chocolate" },
  { name: "Vainilla", tone: "vanilla" },
  { name: "Fresa", tone: "strawberry" },
  { name: "Red velvet", tone: "velvet" },
] as const;

/** Atajos de sabor: llevan al formulario con el sabor ya elegido. */
export function FlavorChips({ className = "" }: { className?: string }) {
  return (
    <ul aria-label="Elige un sabor para tu pastel" className={className}>
      {flavors.map((f) => (
        <li key={f.name}>
          <Link
            href="/#personalizado"
            onClick={() => window.dispatchEvent(new CustomEvent(SELECT_FLAVOR_EVENT, { detail: f.name }))}
            className="flex items-center gap-3 rounded-full bg-white/90 py-1.5 pr-5 pl-1.5 text-sm text-cocoa-700 shadow-lg shadow-cocoa-900/5 backdrop-blur transition-[box-shadow,scale] hover:ring-1 hover:ring-caramel-400 active:scale-[0.96]"
          >
            <CakeArt tone={f.tone} className="h-9 w-9 rounded-full" />
            {f.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
