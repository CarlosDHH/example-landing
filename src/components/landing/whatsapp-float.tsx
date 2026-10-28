import { site, whatsappLink } from "@/config/site";
import { WhatsApp } from "@/components/ui/icons";

export function WhatsAppFloat() {
  return (
    <aside aria-label="Contacto rápido">
    <a
      href={whatsappLink(`Hola ${site.name}, me gustaría hacer un pedido.`)}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-5 bottom-5 z-50 rounded-full bg-[#1f8f4e] p-4 text-white shadow-xl shadow-black/20 transition-transform hover:scale-105 active:scale-[0.96]"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
    </aside>
  );
}
