/**
 * Datos del negocio. Cambia aquí teléfono, dirección, horarios y redes:
 * todo el sitio toma la información de este archivo.
 * Los valores marcados con "POR CONFIRMAR" son de ejemplo.
 */
export const site = {
  name: "Pastelería",
  // Dominio público del sitio (sin / al final). Se usa en SEO, sitemap y JSON-LD.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Pastelería fina & alta repostería",
  description:
    "Pasteles para cumpleaños, bodas y cada celebración. Haz tu pedido en línea y recíbelo en tu casa.",
  // Número de WhatsApp en formato internacional, sin + ni espacios (52 + 10 dígitos)
  whatsapp: "527717129854", // POR CONFIRMAR
  phoneDisplay: "000 000 0000", // POR CONFIRMAR
  address: "Dirección de la sucursal", // POR CONFIRMAR (calle y número, colonia)
  city: "Ciudad", // POR CONFIRMAR
  state: "Estado", // POR CONFIRMAR
  postalCode: "00000", // POR CONFIRMAR
  // Coordenadas de la sucursal (Google Maps → clic derecho → copiar coordenadas)
  geo: { lat: 0, lng: 0 }, // POR CONFIRMAR
  priceRange: "$$",
  hours: [
    { days: "Lunes a sábado", time: "9:00 – 20:00" }, // POR CONFIRMAR
    { days: "Domingo", time: "10:00 – 15:00" }, // POR CONFIRMAR
  ],
  // Mismos horarios en formato schema.org (para Google y asistentes de IA)
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
    { dayOfWeek: ["Sunday"], opens: "10:00", closes: "15:00" },
  ], // POR CONFIRMAR
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  // Anticipo requerido para pasteles personalizados
  depositPercent: 50,
  copyrightYear: 2026,
};

/** Teléfono en formato +52XXXXXXXXXX para enlaces tel: y schema.org */
export const phoneE164 = `+${site.whatsapp}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
