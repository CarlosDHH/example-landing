"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { CakeArt } from "@/components/ui/cake-art";
import { WhatsApp } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SuccessCheck } from "@/components/ui/success-check";
import { SELECT_FLAVOR_EVENT } from "./flavor-chips";

const FLAVORS = ["Chocolate", "Vainilla", "Fresa", "Tres leches", "Red velvet", "Zanahoria", "Moka"];
const FILLINGS = ["Sin relleno", "Fresa", "Cajeta", "Nutella", "Queso crema", "Durazno"];
const SIZES = ["Chico (8–10 personas)", "Mediano (15–20 personas)", "Grande (25–30 personas)"];

const input =
  "w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-cocoa-800 outline-none transition-[border-color,box-shadow] placeholder:text-cocoa-700/40 focus:border-caramel-500 focus:ring-2 focus:ring-caramel-300/40";
const labelCls = "mb-1.5 block text-xs font-medium tracking-wide text-cocoa-700 uppercase";

/** "2026-11-20" → "viernes 20 de noviembre" */
function formatDay(isoDate: string) {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("es-MX", { weekday: "long", day: "numeric", month: "long" }).format(
    new Date(y, m - 1, d),
  );
}

/** Fecha mínima: dentro de 3 días (anticipación para pasteles personalizados). */
function minDate() {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toISOString().slice(0, 10);
}

export function CustomCakeForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    flavor: FLAVORS[0],
    filling: FILLINGS[0],
    size: SIZES[0],
    design: "",
    message: "",
    date: "",
    time: "14:00",
    fulfillment: "DELIVERY" as "DELIVERY" | "PICKUP",
    postalCode: "",
    street: "",
    neighborhood: "",
  });
  const [done, setDone] = useState<string | null>(null);
  // Panel reveal solo después de la primera interacción (sin animar la carga de la página)
  const [touched, setTouched] = useState(false);

  // Los atajos de sabor del inicio preseleccionan el sabor aquí
  useEffect(() => {
    const onSelect = (e: Event) => {
      const flavor = (e as CustomEvent<string>).detail;
      if (FLAVORS.includes(flavor)) setForm((f) => ({ ...f, flavor }));
    };
    window.addEventListener(SELECT_FLAVOR_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_FLAVOR_EVENT, onSelect);
  }, []);

  const delivery = form.fulfillment === "DELIVERY";

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function buildMessage() {
    const lines = [
      `Hola ${site.name}, quiero cotizar un pastel personalizado:`,
      `• Nombre: ${form.name}`,
      `• Sabor: ${form.flavor} — Relleno: ${form.filling}`,
      `• Tamaño: ${form.size}`,
      form.design && `• Diseño: ${form.design}`,
      form.message && `• Dedicatoria: "${form.message}"`,
      `• Fecha: ${formatDay(form.date)} a las ${form.time}`,
      form.fulfillment === "DELIVERY"
        ? `• Entrega a domicilio: ${form.street}, ${form.neighborhood}, CP ${form.postalCode}`
        : `• Recojo en sucursal`,
    ];
    return lines.filter(Boolean).join("\n");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    setDone(buildMessage());
    // Mostrar la confirmación completa (debajo del encabezado fijo)
    requestAnimationFrame(() =>
      document.getElementById("personalizado")?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  return (
    <section id="personalizado" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Pasteles personalizados</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-cocoa-800 sm:text-5xl">
            Diseña el pastel de <em className="text-caramel-600">tus sueños</em>
          </h2>
          <p className="mt-5 leading-relaxed text-cocoa-700/80">
            Cuéntanos qué imaginas y te enviamos la cotización por WhatsApp. Pedidos con al menos 3
            días de anticipación; se aparta con {site.depositPercent}% de anticipo.
          </p>
          <CakeArt tone="caramel" label="Foto: pastel personalizado" className="mt-8 hidden aspect-[4/3] rounded-3xl lg:flex" />
        </div>

        {done ? (
          <Reveal key="done">
          <div className="flex flex-col items-start justify-center rounded-3xl bg-cream-100 p-8 sm:p-10">
            <SuccessCheck className="text-caramel-500" />
            <p className="eyebrow mt-4">¡Casi listo!</p>
            <h3 className="mt-3 font-serif text-4xl text-cocoa-800">
              Tu pedido está armado
            </h3>
            <p className="mt-3 text-cocoa-700/80">
              Envíanos el mensaje por WhatsApp para confirmar precio y anticipo.
            </p>
            <pre className="mt-6 w-full rounded-2xl bg-white p-5 font-sans text-sm whitespace-pre-wrap text-cocoa-700">
              {done}
            </pre>
            <a
              href={whatsappLink(done)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1f8f4e] px-7 py-3.5 text-white transition-[background-color,scale] hover:bg-[#187540] active:scale-[0.96]"
            >
              <WhatsApp className="h-5 w-5" /> Enviar por WhatsApp
            </a>
            <button onClick={() => setDone(null)} className="mt-2 py-2 text-sm text-cocoa-700 underline">
              Hacer otro pedido
            </button>
          </div>
          </Reveal>
        ) : (
          <Reveal key="form" animate={touched}>
          <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl bg-cream-100 p-6 sm:grid-cols-2 sm:p-10">
            <div>
              <label className={labelCls} htmlFor="name">Nombre</label>
              <input id="name" required autoComplete="name" className={input} value={form.name} onChange={set("name")} placeholder="¿A nombre de quién?" />
            </div>
            <div>
              <label className={labelCls} htmlFor="phone">WhatsApp</label>
              <input id="phone" required type="tel" autoComplete="tel-national" inputMode="tel" pattern="[\d\s+()-]{10,16}" className={input} value={form.phone} onChange={set("phone")} placeholder="10 dígitos" />
            </div>
            <div>
              <label className={labelCls} htmlFor="flavor">Sabor</label>
              <select id="flavor" className={input} value={form.flavor} onChange={set("flavor")}>
                {FLAVORS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="filling">Relleno</label>
              <select id="filling" className={input} value={form.filling} onChange={set("filling")}>
                {FILLINGS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <fieldset className="sm:col-span-2">
              <legend className={labelCls}>Tamaño</legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {SIZES.map((s) => (
                  <label key={s} className={`cursor-pointer rounded-xl border px-4 py-3 text-sm transition-[border-color,box-shadow] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-caramel-500 ${form.size === s ? "border-caramel-500 bg-white text-cocoa-800 ring-2 ring-caramel-300/40" : "border-cream-300 text-cocoa-700"}`}>
                    <input type="radio" name="size" value={s} checked={form.size === s} onChange={set("size")} className="sr-only" />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="design">Idea de diseño</label>
              <textarea id="design" rows={3} className={input} value={form.design} onChange={set("design")} placeholder="Colores, temática, flores, figuras…" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="message">Dedicatoria (opcional)</label>
              <input id="message" maxLength={60} className={input} value={form.message} onChange={set("message")} placeholder="Ej. ¡Feliz cumpleaños, Ana!" />
            </div>
            <div>
              <label className={labelCls} htmlFor="date">Fecha</label>
              <input id="date" required type="date" onFocus={(e) => (e.currentTarget.min = minDate())} className={input} value={form.date} onChange={set("date")} />
            </div>
            <div>
              <label className={labelCls} htmlFor="time">Hora</label>
              <input id="time" required type="time" min="09:00" max="19:00" className={input} value={form.time} onChange={set("time")} />
            </div>
            <fieldset className="sm:col-span-2">
              <legend className={labelCls}>¿Cómo lo recibes?</legend>
              <div className="grid grid-cols-2 gap-3">
                {([["DELIVERY", "Entrega a domicilio"], ["PICKUP", "Recojo en sucursal"]] as const).map(([v, l]) => (
                  <label key={v} className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm transition-[border-color,box-shadow] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-caramel-500 ${form.fulfillment === v ? "border-caramel-500 bg-white text-cocoa-800 ring-2 ring-caramel-300/40" : "border-cream-300 text-cocoa-700"}`}>
                    <input type="radio" name="fulfillment" value={v} checked={form.fulfillment === v} onChange={set("fulfillment")} className="sr-only" />
                    {l}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="t-acc -mt-5 sm:col-span-2" data-open={delivery}>
              <div className="t-acc-panel" inert={!delivery}>
                <div className="t-acc-panel-inner -mx-1 -mb-1 px-1 pb-1">
                  <div className="grid gap-5 pt-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="cp">Código postal</label>
                  <input
                    id="cp" required={delivery} inputMode="numeric" pattern="\d{5}" maxLength={5} className={input}
                    value={form.postalCode}
                    onChange={set("postalCode")}
                    placeholder="5 dígitos"
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="neighborhood">Colonia</label>
                  <input id="neighborhood" required={delivery} className={input} value={form.neighborhood} onChange={set("neighborhood")} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="street">Calle y número</label>
                  <input id="street" required={delivery} autoComplete="address-line1" className={input} value={form.street} onChange={set("street")} />
                </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-cocoa-700 px-7 py-4 text-cream-50 transition-[background-color,scale] hover:bg-cocoa-800 active:scale-[0.96] sm:col-span-2">
              Continuar a WhatsApp
            </button>
            <p className="text-center text-xs text-cocoa-700/80 sm:col-span-2">
              Al enviar aceptas nuestro <a href="/aviso-de-privacidad" className="inline-block py-2 underline">aviso de privacidad</a>.
            </p>
          </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
