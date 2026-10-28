import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/config/site";
import { Facebook, Instagram, WhatsApp } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="bg-cocoa-800 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
        <p className="eyebrow !text-caramel-300">Es más que un pastel</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Hagamos algo digno de recordar
        </h2>
        <Link
          href="/#personalizado"
          className="mt-8 inline-flex rounded-full border border-cream-100/40 px-7 py-3 text-sm transition-[background-color,color,scale] hover:bg-cream-100 hover:text-cocoa-800 active:scale-[0.96]"
        >
          Crea tu pastel →
        </Link>
      </div>
      <div className="border-t border-cream-100/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={44} height={44} />
            <span className="font-serif text-xl">{site.name}</span>
          </div>
          <nav aria-label="Pie de página" className="flex gap-6 text-sm text-cream-200/70">
            <Link href="/aviso-de-privacidad" className="inline-block py-3 hover:text-cream-50">Aviso de privacidad</Link>
          </nav>
          <div className="flex gap-1 text-cream-200/80">
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener" className="p-3"><Instagram className="h-5 w-5" /></a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener" className="p-3"><Facebook className="h-5 w-5" /></a>
            <a href={whatsappLink("Hola")} aria-label="WhatsApp" target="_blank" rel="noopener" className="p-3"><WhatsApp className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="pb-8 text-center text-xs text-cream-200/70">
          © {site.copyrightYear} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
