import { site, whatsappLink } from "@/config/site";
import { categories, products } from "@/lib/catalog";
import { ArrowRight } from "@/components/ui/icons";
import { CatalogGrid } from "./catalog-grid";

/** Catálogo con filtro por categoría. Los datos están en src/lib/catalog.ts */
export function Popular() {
  const used = new Set(products.map((p) => p.categorySlug));
  return (
    <section id="pasteles" aria-labelledby="pasteles-titulo" className="bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Nuestros pasteles</p>
            <h2 id="pasteles-titulo" className="mt-3 font-serif text-4xl text-cocoa-800 sm:text-5xl">
              Encuentra tu pastel ideal
            </h2>
          </div>
          <a
            href={whatsappLink(`Hola ${site.name}, ¿qué pasteles tienen disponibles para hoy?`)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 py-3 text-sm font-medium text-cocoa-700 hover:text-caramel-600"
          >
            ¿Lo necesitas para hoy? Pregunta disponibilidad <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <CatalogGrid products={products} categories={categories.filter((c) => used.has(c.slug))} />
      </div>
    </section>
  );
}
