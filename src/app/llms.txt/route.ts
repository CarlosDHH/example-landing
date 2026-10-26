import { site } from "@/config/site";

export const dynamic = "force-static";

/** Resumen del negocio para asistentes de IA (https://llmstxt.org). */
export function GET() {
  const body = `# ${site.name}

> ${site.tagline} en ${site.city}. ${site.description}

## Datos del negocio
- Dirección: ${site.address}, ${site.city}, ${site.state}, CP ${site.postalCode}
- WhatsApp / teléfono: ${site.phoneDisplay}
- Horarios: ${site.hours.map((h) => `${h.days} ${h.time}`).join("; ")}
- Entregas a domicilio dentro de ${site.city} (costo según zona) y recolección en sucursal
- Pasteles personalizados con al menos 3 días de anticipación; se apartan con ${site.depositPercent}% de anticipo

## Páginas
- [Inicio y catálogo](${site.url}/): pasteles, ocasiones y formulario de pastel personalizado
- [Aviso de privacidad](${site.url}/aviso-de-privacidad)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
