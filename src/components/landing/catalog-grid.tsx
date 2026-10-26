"use client";

import { useState } from "react";
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
  const visible = products.filter((p) =>
    filter === FEATURED ? p.isFeatured : filter ? p.categorySlug === filter : true,
  );
  const chips = [
    ...(hasFeatured ? [{ slug: FEATURED, name: "Más pedidos" }] : []),
    { slug: "", name: "Todos" },
    ...categories,
  ];

  return (
    <>
      <div
        role="group"
        aria-label="Filtrar por categoría"
        className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {chips.map((c) => (
          <button
            key={c.slug}
            onClick={() => setFilter(c.slug)}
            aria-pressed={filter === c.slug}
            className={`shrink-0 rounded-full border px-5 py-3 text-sm transition ${
              filter === c.slug
                ? "border-cocoa-700 bg-cocoa-700 text-cream-50"
                : "border-cream-300 bg-white text-cocoa-700 hover:border-caramel-400"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <ul aria-live="polite" className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {visible.map((p, i) => (
          <li key={p.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white sm:rounded-3xl shadow-sm shadow-cocoa-900/5">
            <div className="overflow-hidden">
              <CakeArt
                tone={tones[i % tones.length]}
                label="Foto"
                className="aspect-square sm:aspect-[4/3] transition duration-500 group-hover:scale-105"
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
                  <a
                    href="#personalizado"
                    className="rounded-full bg-cocoa-700 px-3 py-3 text-xs text-cream-50 hover:bg-cocoa-800 sm:px-4"
                  >
                    Diseñarlo
                  </a>
                ) : (
                  <a
                    href={whatsappLink(`Hola ${site.name}, me interesa el ${p.name}. ¿Me dan informes?`)}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Pedir ${p.name} por WhatsApp`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-caramel-400/50 text-caramel-600 transition hover:bg-caramel-500 hover:text-white"
                  >
                    <WhatsApp className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {!visible.length && <p className="mt-8 text-sm text-cocoa-700/80">Pronto agregaremos productos aquí.</p>}
    </>
  );
}
