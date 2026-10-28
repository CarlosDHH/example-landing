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
import { Watermark } from "@/components/ui/watermark";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";

// Mientras la ciudad sea el marcador de la plantilla, no se publica en título ni descripción
const hasCity = site.city !== "Ciudad";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Pastelería${hasCity ? ` en ${site.city}` : ""} · Pasteles a domicilio`,
    template: `%s | ${site.name}`,
  },
  description: hasCity ? `${site.description} Pastelería fina en ${site.city}.` : site.description,
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
        <Watermark />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-cocoa-700 focus:px-5 focus:py-3 focus:text-cream-50"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" tabIndex={-1} className="flex-1 outline-none">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
