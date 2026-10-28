import { Star } from "@/components/ui/icons";

/**
 * MARCADORES: reemplazar por reseñas reales (p. ej. copiadas de Google Maps
 * con permiso del cliente). No publicar reseñas inventadas.
 */
const reviews: { name: string; text: string }[] = [
  // { name: "Nombre del cliente", text: "Reseña real copiada de Google o Facebook." },
];

// Mientras no haya reseñas reales la sección no se publica; en desarrollo se ve un ejemplo
const sample = [
  { name: "Nombre del cliente", text: "Ejemplo: aquí irá una reseña real de Google o Facebook." },
  { name: "Nombre del cliente", text: "Ejemplo: aquí irá una reseña real de Google o Facebook." },
  { name: "Nombre del cliente", text: "Ejemplo: aquí irá una reseña real de Google o Facebook." },
];

export function Testimonials() {
  const shown = reviews.length ? reviews : process.env.NODE_ENV === "production" ? [] : sample;
  if (!shown.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <p className="eyebrow">Lo que dicen nuestros clientes</p>
      <h2 className="mt-3 font-serif text-4xl text-cocoa-800 sm:text-5xl">Palabras dulces</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {shown.map((r, i) => (
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
