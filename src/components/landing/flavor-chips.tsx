"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CakeArt } from "@/components/ui/cake-art";
import { CaretRight } from "@/components/ui/icons";

export const SELECT_FLAVOR_EVENT = "seleccionar-sabor";

const flavors = [
  { name: "Chocolate", tone: "chocolate" },
  { name: "Vainilla", tone: "vanilla" },
  { name: "Fresa", tone: "strawberry" },
  { name: "Red velvet", tone: "velvet" },
] as const;

const AUTOPLAY_MS = 4500;

/**
 * Carrusel de sabores del hero: cada sabor muestra su pastel y su chip queda resaltado.
 * Avanza solo y sigue avanzando aunque se elija un sabor (elegirlo reinicia el conteo desde ese slide).
 * Solo se detiene mientras el mouse está sobre la imagen, con foco de teclado dentro, cuando el
 * carrusel está fuera de pantalla (p. ej. al viajar a otra sección) y con movimiento reducido.
 * Cada slide enlaza al formulario con ese sabor.
 */
export function FlavorShowcase() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [inView, setInView] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const paused = hovering || keyboardFocus || !inView;

  // Fuera de pantalla no hay nada que animar: se pausa y se reanuda al volver
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % flavors.length), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  const current = flavors[active];

  return (
    <div
      ref={root}
      role="group"
      aria-roledescription="carrusel"
      aria-label="Sabores de pastel"
      // Solo el foco de teclado pausa: un clic con el mouse deja el foco en el botón y no debe frenar el carrusel
      onFocus={(e) => setKeyboardFocus(e.target.matches(":focus-visible"))}
      onBlur={() => setKeyboardFocus(false)}
    >
      <div className="relative">
        <div
          onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
          onPointerLeave={() => setHovering(false)}
          className="relative aspect-square overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-2xl shadow-cocoa-900/10 sm:aspect-[4/4.2] sm:rounded-t-[12rem]">
          {flavors.map((f, i) => (
            <div
              key={f.name}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-[opacity,scale] duration-700 ease-out ${
                i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            >
              <CakeArt tone={f.tone} label={`Foto: pastel de ${f.name.toLowerCase()}`} className="h-full w-full" />
            </div>
          ))}
        </div>

        {/* Móvil: cuadrícula bajo la imagen. Desde sm: columna flotante junto a la imagen */}
        <ul
          aria-label="Elige un sabor para ver su pastel"
          className="mt-4 grid grid-cols-2 gap-2 sm:absolute sm:top-1/2 sm:-left-4 sm:mt-0 sm:flex sm:-translate-y-1/2 sm:flex-col sm:gap-3 lg:-left-10"
        >
          {flavors.map((f, i) => (
            <li key={f.name}>
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-3 rounded-full py-1.5 pr-5 pl-1.5 text-left text-sm shadow-lg shadow-cocoa-900/5 backdrop-blur transition-[background-color,box-shadow,scale] active:scale-[0.96] ${
                  i === active
                    ? "bg-white font-medium text-cocoa-800 ring-2 ring-caramel-400"
                    : "bg-white/80 text-cocoa-700 hover:ring-1 hover:ring-caramel-400"
                }`}
              >
                <CakeArt tone={f.tone} className="h-9 w-9 shrink-0 rounded-full" />
                {f.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 text-center">
        <Link
          href="/#personalizado"
          onClick={() => window.dispatchEvent(new CustomEvent(SELECT_FLAVOR_EVENT, { detail: current.name }))}
          className="group inline-flex items-center gap-2 py-3 text-sm font-medium text-cocoa-700 transition-colors hover:text-caramel-600"
        >
          Diseñar mi pastel de {current.name.toLowerCase()}
          <CaretRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </p>
    </div>
  );
}
