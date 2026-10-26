import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource-variable/jost";
import "@fontsource/great-vibes";
import "./globals.css";
import { site } from "@/config/site";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Pastelería en ${site.city} · Pasteles a domicilio`,
    template: `%s | ${site.name}`,
  },
  description: `${site.description} Pastelería fina en ${site.city}.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "es_MX",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="relative isolate flex-1">
          {/* Marca de agua: se desplaza con la página y queda detrás; las secciones con fondo sólido la tapan */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" className="w-[min(85vw,640px)] opacity-[0.12]" />
          </div>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
