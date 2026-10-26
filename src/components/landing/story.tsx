import { CakeArt } from "@/components/ui/cake-art";
import { Heart, Leaf, Sparkle } from "@/components/ui/icons";

const values = [
  { icon: Sparkle, title: "Calidad premium", text: "Solo los mejores ingredientes" },
  { icon: Leaf, title: "Diseños creativos", text: "Para cada ocasión" },
  { icon: Heart, title: "Hecho con amor", text: "De nuestra cocina a tu mesa" },
];

export function Story() {
  return (
    <section id="nosotros" className="bg-cream-100">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <CakeArt tone="chocolate" label="Foto: sucursal o equipo" className="aspect-[4/3] h-full w-full lg:aspect-auto lg:min-h-[480px]" />
        <div className="grid gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow">Nuestra historia</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-cocoa-800 sm:text-5xl">
              Horneado con <em className="text-caramel-600">pasión</em>, hecho para ti
            </h2>
            {/* TEXTO DE EJEMPLO: reemplazar con la historia real del negocio */}
            <p className="mt-5 leading-relaxed text-cocoa-700/80">
              Creemos que cada pastel cuenta una historia. Combinamos técnicas de
              alta repostería con recetas cuidadas para que cada celebración tenga un sabor que se
              recuerde.
            </p>
          </div>
          <ul className="space-y-6">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="h-fit rounded-full border border-caramel-400/40 p-2.5">
                  <Icon className="h-5 w-5 text-caramel-600" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-cocoa-800">{title}</span>
                  <span className="text-xs text-cocoa-700/80">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
