# Landing — Pastelería (plantilla)

Página de presentación de la pastelería, **sin panel ni backend**: el catálogo está en el código y los pedidos se envían por WhatsApp.

## Probarla

```powershell
npm install
npm run dev        # http://localhost:3000
```

## Qué editar

| Archivo | Para qué |
| --- | --- |
| `src/config/site.ts` | WhatsApp, teléfono, dirección, ciudad, horarios, redes y datos para Google (marcados "POR CONFIRMAR") |
| `src/lib/catalog.ts` | Productos, precios "desde" y categorías |
| `src/components/landing/story.tsx` | Historia del negocio |
| `src/components/landing/testimonials.tsx` | Reseñas reales (no inventarlas) |
| `src/components/ui/cake-art.tsx` | Ilustraciones de marcador: reemplazar por fotos reales en `public/` |

## Publicarla para mostrarla

`npm run build` genera la carpeta **`out/`**: es un sitio estático que se sube a cualquier hosting.

- **Vercel (recomendado):** importa la carpeta `landing` desde GitHub, o ejecuta `npx vercel` aquí. Te da un link `https://algo.vercel.app` con HTTPS.
- **Netlify:** arrastra la carpeta `out/` a https://app.netlify.com/drop.
- **Hosting tradicional (cPanel):** sube el contenido de `out/` a `public_html`.

Antes de publicar con dominio propio, define `NEXT_PUBLIC_SITE_URL` (ver `.env.example`) para que el SEO y la imagen al compartir usen ese dominio.

> Es una propuesta: no la publiques como sitio oficial de la pastelería sin su autorización.
