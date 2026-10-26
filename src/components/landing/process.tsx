import { CakeArt } from "@/components/ui/cake-art";

const steps = [
  { n: "01", title: "Elige", text: "Sabor, tamaño y relleno.", tone: "caramel" },
  { n: "02", title: "Personaliza", text: "Decoración y dedicatoria.", tone: "vanilla" },
  { n: "03", title: "Confirma", text: `Aparta con tu anticipo.`, tone: "chocolate" },
  { n: "04", title: "Disfruta", text: "Te lo llevamos a casa.", tone: "velvet" },
] as const;

export function Process() {
  return (
    <section className="section-dark bg-cocoa-800 text-cream-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.8fr_2.2fr] lg:py-20 lg:px-8">
        <div>
          <p className="eyebrow">Paso a paso</p>
          <h2 className="mt-3 font-serif text-5xl leading-tight">Así nace tu pastel</h2>
          <p className="mt-4 text-cream-200/70">De tu idea a tu mesa en cuatro pasos.</p>
        </div>
        <ol tabIndex={0} aria-label="Pasos para pedir tu pastel" className="-mx-5 flex min-w-0 snap-x gap-6 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:px-0">
          {steps.map((s, i) => (
            <li key={s.n} className="relative w-36 shrink-0 snap-start md:w-auto">
              <CakeArt tone={s.tone} className="mx-auto aspect-square w-full max-w-28 rounded-full ring-4 ring-cocoa-700 md:max-w-40" />
              {i < steps.length - 1 && (
                <span className="absolute top-1/4 -right-6 hidden text-caramel-300 md:block" aria-hidden="true">
                  →
                </span>
              )}
              <p className="mt-5 text-xs text-caramel-300">{s.n}</p>
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="text-sm text-cream-200/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
