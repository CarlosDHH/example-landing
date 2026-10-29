import { phoneE164, site, whatsappLink } from "@/config/site";
import { Clock, MapPin, Phone, Truck, WhatsApp } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contacto" className="bg-cream-100">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div data-reveal className="bg-white p-7">
          <Truck className="h-8 w-8 text-caramel-500" />
          <h3 className="mt-4 font-serif text-2xl text-cocoa-800">Entregas en la ciudad</h3>
          <p className="mt-2 text-sm text-cocoa-700/70">
            Llevamos tu pedido a domicilio dentro de {site.city}. El costo depende de tu zona.
          </p>
        </div>
        <div data-reveal className="bg-white p-7">
          <Clock className="h-8 w-8 text-caramel-500" />
          <h3 className="mt-4 font-serif text-2xl text-cocoa-800">Horarios</h3>
          <ul className="mt-2 space-y-1 text-sm text-cocoa-700/70">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span> <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal className="bg-white p-7">
          <MapPin className="h-8 w-8 text-caramel-500" />
          <h3 className="mt-4 font-serif text-2xl text-cocoa-800">Visítanos</h3>
          <address className="mt-2 text-sm text-cocoa-700/80 not-italic">
            {site.address}, {site.city}
          </address>
          <div className="mt-3 flex flex-wrap gap-x-5">
            <a
              href={`tel:${phoneE164}`}
              className="inline-flex items-center gap-2 py-3 text-sm font-medium text-cocoa-700 hover:text-caramel-600"
            >
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink(`Hola ${site.name}, tengo una pregunta.`)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 py-3 text-sm font-medium text-cocoa-700 hover:text-caramel-600"
            >
              <WhatsApp className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
