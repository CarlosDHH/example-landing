import { site, whatsappLink } from "@/config/site";
import { ArrowRight, Gift, Heart, Rings, Sparkle } from "@/components/ui/icons";

const occasions = [
  { icon: Gift, title: "Cumpleaños", msg: "un pastel de cumpleaños" },
  { icon: Rings, title: "Bodas y XV años", msg: "un pastel para boda o XV años" },
  { icon: Heart, title: "Aniversarios", msg: "un pastel de aniversario" },
  { icon: Sparkle, title: "Solo porque sí", msg: "algo dulce" },
];

export function Occasions() {
  return (
    <section className="section-dark bg-cocoa-800 text-cream-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.8fr_2fr] lg:py-20 lg:px-8">
        <div>
          <p className="eyebrow">¿Qué celebramos?</p>
          <h2 className="mt-3 font-serif text-5xl">Elige tu ocasión</h2>
          <p className="mt-4 text-cream-200/70">Cada momento merece su propio pastel.</p>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {occasions.map(({ icon: Icon, title, msg }, i) => (
            <li key={title}>
              <a
                href={whatsappLink(`Hola ${site.name}, quiero cotizar ${msg}.`)}
                target="_blank"
                rel="noopener"
                className={`group flex h-40 flex-col sm:h-52 items-center justify-center gap-4 rounded-t-[6rem] rounded-b-3xl px-4 text-center transition ${
                  i === 0
                    ? "bg-cocoa-700 ring-1 ring-caramel-400/60"
                    : "bg-cream-100 text-cocoa-800 hover:-translate-y-1"
                }`}
              >
                <span className={`rounded-full p-3 sm:p-4 ${i === 0 ? "bg-cocoa-600" : "bg-white"}`}>
                  <Icon className={`h-7 w-7 ${i === 0 ? "text-caramel-300" : "text-caramel-600"}`} />
                </span>
                <span className="text-xs font-medium tracking-[0.18em] uppercase">{title}</span>
                <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
