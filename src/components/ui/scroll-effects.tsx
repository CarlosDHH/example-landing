"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Efectos ligados al scroll (GSAP + ScrollTrigger), todo dentro de matchMedia:
 * con prefers-reduced-motion no se crea nada y el contenido queda tal cual.
 *
 *  - [data-reveal]: entra (fade + subida + blur) cuando aparece en pantalla, en lotes escalonados.
 *  - [data-parallax="N"]: se desplaza N px mientras su sección sale de la pantalla.
 *  - [data-light-steps]: sus [data-step] se van iluminando uno tras otro, ligados al scroll, desde que
 *    la sección asoma por abajo de la pantalla hasta que se ve completa en pantalla (sin pin).
 */
export function ScrollEffects({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // (document.querySelectorAll y no gsap.utils.toArray: este último se limita al scope del componente)
      // Scrollspy del header.
      // Pone aria-current en el enlace de la sección activa (el estilo vive en header.tsx).
      const links =
        pathname === "/"
          ? Array.from(document.querySelectorAll<HTMLAnchorElement>('header nav[aria-label="Principal"] a[href^="/#"]'))
          : [];
      links.forEach((link) => {
        const section = document.getElementById(link.getAttribute("href")!.slice(2));
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (!self.isActive) return;
            links.forEach((l) => l.removeAttribute("aria-current"));
            link.setAttribute("aria-current", "location");
          },
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-light-steps]").forEach((section) => {
          const steps = gsap.utils.toArray<HTMLElement>("[data-step]", section);
          gsap.set(steps, { opacity: 0.15, y: 24 });
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top 90%", // en cuanto la sección asoma por abajo
              end: "bottom 55%", // recorrido largo: la sección sube bastante antes de quedar toda encendida
              scrub: 1.2,
            },
          });
          steps.forEach((step, i) => tl.to(step, { opacity: 1, y: 0, duration: 1 }, i * 0.8));
        });

        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        if (items.length) {
          gsap.set(items, { opacity: 0, y: 24, filter: "blur(3px)" });
          ScrollTrigger.batch(items, {
            start: "top 90%",
            once: true,
            interval: 0.1,
            batchMax: 4,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.08,
                overwrite: true,
                clearProps: "opacity,transform,filter",
              }),
          });
        }

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.to(el, {
            y: Number(el.dataset.parallax) || 40,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });

      // Las fuentes web cambian las alturas: recalcular posiciones al terminar de cargar
      // Con todos los triggers creados, recalcular posiciones
      ScrollTrigger.refresh();
      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => links.forEach((l) => l.removeAttribute("aria-current"));
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return <div ref={root}>{children}</div>;
}
