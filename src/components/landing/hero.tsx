import { site } from "@/config/site";
import { CakeArt } from "@/components/ui/cake-art";
import { ArrowRight, Heart, Leaf, Whisk } from "@/components/ui/icons";
import { FlavorChips } from "./flavor-chips";

const features = [
  { icon: Leaf, title: "Ingredientes de calidad", text: "Seleccionados a diario" },
  { icon: Whisk, title: "Hecho a mano", text: "En cada detalle" },
  { icon: Heart, title: "Pasteles a tu gusto", text: "Para cada ocasión" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-10 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="min-w-0">
          <p className="eyebrow">{site.tagline}</p>
          <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.04] font-medium text-cocoa-800 sm:text-6xl lg:text-7xl">
            Cada celebración merece un pastel{" "}
            <em className="font-normal text-caramel-600">inolvidable</em>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-cocoa-700/90">
            Repostería fina hecha a mano para tus cumpleaños, bodas y momentos especiales. Pide en
            línea y te lo llevamos a casa en {site.city}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#personalizado"
              className="inline-flex items-center gap-2 rounded-full bg-cocoa-700 px-7 py-3.5 text-cream-50 transition hover:bg-cocoa-800"
            >
              Diseña tu pastel <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pasteles"
              className="inline-flex items-center gap-2 rounded-full border border-cocoa-700/30 px-7 py-3.5 text-cocoa-700 transition hover:border-cocoa-700"
            >
              Ver catálogo
            </a>
          </div>
          {/* En móvil los sabores van aquí, como fila deslizable */}
          <FlavorChips className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:hidden" />
          <ul className="mt-10 grid max-w-xl grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon className="h-7 w-7 text-caramel-500" />
                <p className="mt-3 text-sm font-medium text-cocoa-800">{title}</p>
                <p className="text-xs text-cocoa-700/80">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-none">
          <p
            aria-hidden="true"
            className="absolute -top-2 right-6 z-10 hidden rotate-[-8deg] font-script text-4xl text-cocoa-600 sm:block"
          >
            Hecho con amor
          </p>
          <CakeArt
            tone="chocolate"
            label="Foto: pastel estrella"
            className="aspect-square rounded-t-[10rem] rounded-b-3xl shadow-2xl shadow-cocoa-900/10 sm:aspect-[4/4.2] sm:rounded-t-[12rem]"
          />
          <FlavorChips className="absolute top-1/2 -left-4 hidden -translate-y-1/2 flex-col gap-3 sm:flex lg:-left-10" />
        </div>
      </div>
      {/* ola suave hacia la sección oscura (solo transform: no afecta el rendimiento) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-12 overflow-hidden sm:h-14" aria-hidden="true">
        <svg viewBox="0 0 2880 60" preserveAspectRatio="none" className="wave wave-back absolute bottom-0 h-full w-[200%] text-cocoa-800/40">
          <path d="M0 32C240 14 480 14 720 32S1200 50 1440 32C1680 14 1920 14 2160 32S2640 50 2880 32V60H0Z" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 2880 60" preserveAspectRatio="none" className="wave wave-front absolute bottom-0 h-full w-[200%] text-cocoa-800">
          <path d="M0 38C240 24 480 24 720 38S1200 52 1440 38C1680 24 1920 24 2160 38S2640 52 2880 38V60H0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
