import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  alternates: { canonical: "/aviso-de-privacidad" },
};

/**
 * PLANTILLA BASE. Debe revisarse y completarse con los datos reales del
 * responsable (razón social, domicilio, contacto) conforme a la LFPDPPP.
 */
export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 text-cocoa-700">
      <h1 className="font-serif text-5xl text-cocoa-800">Aviso de privacidad</h1>
      <p className="mt-6">
        {site.name} (en adelante, &quot;el Responsable&quot;), con domicilio en {site.address}, es
        responsable del uso y protección de sus datos personales.
      </p>
      <h2 className="mt-8 font-serif text-2xl text-cocoa-800">Datos que recabamos</h2>
      <p className="mt-2">Nombre, número de teléfono/WhatsApp, correo electrónico y domicilio de entrega.</p>
      <h2 className="mt-8 font-serif text-2xl text-cocoa-800">Finalidades</h2>
      <p className="mt-2">
        Gestionar y entregar sus pedidos, informarle del estado de los mismos y atender sus dudas.
      </p>
      <h2 className="mt-8 font-serif text-2xl text-cocoa-800">Derechos ARCO</h2>
      <p className="mt-2">
        Puede solicitar el acceso, rectificación, cancelación u oposición al tratamiento de sus datos
        escribiendo al WhatsApp {site.phoneDisplay}.
      </p>
      <p className="mt-10 text-sm text-cocoa-700/80">Última actualización: POR DEFINIR.</p>
    </article>
  );
}
