import { Star } from "@/components/ui/icons";

/**
 * MARCADORES: reemplazar por reseñas reales (p. ej. copiadas de Google Maps
 * con permiso del cliente). No publicar reseñas inventadas.
 */
const reviews = [
  { name: "Nombre del cliente", text: "Aquí va una reseña real de Google o Facebook." },
  { name: "Nombre del cliente", text: "Aquí va una reseña real de Google o Facebook." },
  { name: "Nombre del cliente", text: "Aquí va una reseña real de Google o Facebook." },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <p className="eyebrow">Lo que dicen nuestros clientes</p>
      <h2 className="mt-3 font-serif text-4xl text-cocoa-800 sm:text-5xl">Palabras dulces</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <li key={i} className="border border-dashed border-caramel-300 bg-white p-7">
            <div className="flex gap-1 text-caramel-400">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-4 font-serif text-xl leading-snug text-cocoa-700 italic">“{r.text}”</p>
            <p className="mt-5 text-sm text-cocoa-700/80">— {r.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
