import { phoneE164, site } from "@/config/site";

/**
 * Datos estructurados schema.org para la pastelería (tipo Bakery).
 * Alimentan los resultados enriquecidos de Google, Google Maps
 * y las respuestas de asistentes de IA.
 */
export function bakeryJsonLd() {
  const hasGeo = site.geo.lat !== 0 || site.geo.lng !== 0;
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": `${site.url}/#bakery`,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    image: `${site.url}/opengraph-image`,
    telephone: phoneE164,
    priceRange: site.priceRange,
    servesCuisine: ["Repostería", "Pasteles", "Postres"],
    currenciesAccepted: "MXN",
    paymentAccepted: "Efectivo, tarjeta de crédito, tarjeta de débito, transferencia",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.postalCode,
      addressCountry: "MX",
    },
    ...(hasGeo && {
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    }),
    areaServed: { "@type": "City", name: site.city },
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    hasMenu: `${site.url}/#pasteles`,
    potentialAction: {
      "@type": "OrderAction",
      target: `${site.url}/#personalizado`,
      deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet", "http://purl.org/goodrelations/v1#DeliveryModePickUp"],
    },
    sameAs: Object.values(site.social),
  };
}
