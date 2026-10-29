"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import type { Category, CatalogProduct } from "@/lib/catalog";
import { formatMoney } from "@/lib/format";
import { CakeArt } from "@/components/ui/cake-art";
import { WhatsApp } from "@/components/ui/icons";

const tones = ["chocolate", "vanilla", "caramel", "velvet", "strawberry"] as const;
const FEATURED = "__destacados";

export function CatalogGrid({
  products,
  categories,
}: {
  products: CatalogProduct[];
  categories: Category[];
}) {
  const hasFeatured = products.some((p) => p.isFeatured);
  const [filter, setFilter] = useState(hasFeatured ? FEATURED : "");
  const [changed, setChanged] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const prevHeight = useRef<number | null>(null);
  const visible = products.filter((p) =>
    filter === FEATURED ? p.isFeatured : filter ? p.categorySlug === filter : true,
  );
  const chips = [
    ...(hasFeatured ? [{ slug: FEATURED, name: "Más pedidos" }] : []),
    { slug: "", name: "Todos" },
    ...categories,
  ];

  // Card resize: el contenedor interpola de la altura anterior a la nueva al filtrar
  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    const from = prevHeight.current;
    prevHeight.current = null;
    if (!wrap || !inner || from == null) return;
    const to = inner.offsetHeight;
    if (from === to) return;
    wrap.style.overflow = "hidden";
    wrap.style.height = `${from}px`;
    void wrap.offsetHeight;
    wrap.style.height = `${to}px`;
    const id = setTimeout(() => {
      wrap.style.height = "";
      wrap.style.overflow = "";
    }, 350);
    return () => clearTimeout(id);
  }, [filter]);

  function selectFilter(slug: string) {
    if (slug === filter) return;
    prevHeight.current = innerRef.current?.offsetHeight ?? null;
    setChanged(true);
    setFilter(slug);
  }

  return (
    <>
      <div
        role="group"
        aria-label="Filtrar por categoría"
        className="mt-8 flex flex-wrap gap-2"
      >
        {chips.map((c) => (
          <button
            key={c.slug}
            onClick={() => selectFilter(c.slug)}
            aria-pressed={filter === c.slug}
            className={`rounded-full border px-5 py-3 text-sm transition-[background-color,border-color,color,scale] active:scale-[0.96] ${
              filter === c.slug
                ? "border-cocoa-700 bg-cocoa-700 text-cream-50"
                : "border-cream-300 bg-white text-cocoa-700 hover:border-caramel-400"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div ref={wrapRef} className="t-resize">
      <div ref={innerRef}>
      <ul aria-live="polite" className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {visible.map((p, i) => (
          <li key={p.id} data-reveal className={`${changed ? "t-rise-in " : ""}group flex flex-col overflow-hidden rounded-2xl bg-white sm:rounded-3xl shadow-sm shadow-cocoa-900/5`}>
            <div className="overflow-hidden">
              <CakeArt
                tone={tones[i % tones.length]}
                label="Foto"
                className="aspect-square sm:aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-3 sm:p-5">
              <h3 className="font-serif text-xl leading-tight text-cocoa-800 sm:text-2xl">{p.name}</h3>
              <p className="mt-1 hidden text-sm text-cocoa-700/80 sm:line-clamp-2">{p.description}</p>
              <div className="mt-auto flex items-center justify-between gap-2 pt-3 sm:pt-4">
                <p className="text-cocoa-800">
                  <span className="text-xs text-cocoa-700/80">desde </span>
                  <span className="font-medium">{formatMoney(p.basePrice)}</span>
                </p>
                {p.isCustomizable ? (
                  <Link
                    href="/#personalizado"
                    className="rounded-full bg-cocoa-700 px-3 py-3 text-xs text-cream-50 transition-[background-color,scale] hover:bg-cocoa-800 active:scale-[0.96] sm:px-4"
                  >
                    Diseñarlo
                  </Link>
                ) : (
                  <a
                    href={whatsappLink(`Hola ${site.name}, me interesa el ${p.name}. ¿Me dan informes?`)}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Pedir ${p.name} por WhatsApp`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-caramel-400/50 text-caramel-600 transition-[background-color,color,scale] hover:bg-caramel-500 hover:text-white active:scale-[0.96]"
                  >
                    <WhatsApp className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
      </div>
      {!visible.length && <p className="mt-8 text-sm text-cocoa-700/80">Pronto agregaremos productos aquí.</p>}
    </>
  );
}
