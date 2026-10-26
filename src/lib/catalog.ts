/**
 * Catálogo de la landing. Edita aquí productos, precios y categorías.
 * `featured: true` los muestra en la pestaña "Más pedidos".
 */
export type Category = { slug: string; name: string };

export type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  basePrice: number; // precio "desde", en MXN
  categorySlug: string;
  isFeatured: boolean;
  isCustomizable: boolean;
};

export const categories: Category[] = [
  { slug: "pasteles", name: "Pasteles" },
  { slug: "personalizados", name: "Personalizados" },
  { slug: "postres", name: "Postres individuales" },
  { slug: "galletas", name: "Galletas y pan dulce" },
];

// PRECIOS Y DESCRIPCIONES DE EJEMPLO: reemplazar con los reales de la pastelería
export const products: CatalogProduct[] = [
  { id: "chocolate", name: "Pastel de chocolate", description: "Bizcocho húmedo de cacao con ganache de chocolate semiamargo.", basePrice: 450, categorySlug: "pasteles", isFeatured: true, isCustomizable: false },
  { id: "tres-leches", name: "Tres leches", description: "El clásico, suave y bañado en tres leches con crema batida.", basePrice: 420, categorySlug: "pasteles", isFeatured: true, isCustomizable: false },
  { id: "zanahoria", name: "Pastel de zanahoria", description: "Con nuez, especias y betún de queso crema.", basePrice: 480, categorySlug: "pasteles", isFeatured: true, isCustomizable: false },
  { id: "red-velvet", name: "Red velvet", description: "Terciopelo rojo con frosting de queso crema.", basePrice: 500, categorySlug: "pasteles", isFeatured: true, isCustomizable: false },
  { id: "personalizado", name: "Pastel personalizado", description: "Diseñado a tu gusto para tu celebración.", basePrice: 650, categorySlug: "personalizados", isFeatured: false, isCustomizable: true },
  { id: "cheesecake", name: "Cheesecake individual", description: "Porción individual con base de galleta.", basePrice: 75, categorySlug: "postres", isFeatured: false, isCustomizable: false },
  { id: "galletas", name: "Caja de galletas (12 pzas)", description: "Galletas de mantequilla decoradas.", basePrice: 180, categorySlug: "galletas", isFeatured: false, isCustomizable: false },
];
