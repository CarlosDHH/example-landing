"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { Close, Menu, WhatsApp } from "@/components/ui/icons";

const nav = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#pasteles", label: "Pasteles" },
  { href: "/#personalizado", label: "Personalizados" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  // Menu dropdown: .is-closing dura lo que el CSS tarda en cerrar
  const toggle = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setClosing(true);
      setTimeout(() => setClosing(false), 150);
    }
  };

  // Cerrar el menú móvil con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && toggle(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="sticky top-0 z-40 border-b border-cream-200/80 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/#inicio" className="flex items-center gap-3">
          <Image src="/logo.svg" alt={`Logo de ${site.name}`} width={56} height={56} priority />
          <span className="leading-tight">
            <span className="block font-serif text-2xl font-semibold text-cocoa-700">{site.name}</span>
            <span className="block text-[0.72rem] tracking-[0.25em] text-caramel-600 uppercase">
              {site.shortTagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-9 text-sm text-cocoa-700 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="py-3 transition-colors hover:text-caramel-600">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(`Hola ${site.name}, me gustaría hacer un pedido.`)}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full bg-cocoa-700 px-5 py-3 text-sm text-cream-50 transition-[background-color,scale] hover:bg-cocoa-800 active:scale-[0.96] sm:inline-flex"
          >
            <WhatsApp className="h-4 w-4" /> Pedir ahora
          </a>
          <button
            className="rounded-full p-2.5 text-cocoa-700 transition-transform active:scale-[0.96] md:hidden"
            onClick={() => toggle(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            <span className="t-icon-swap" data-state={open ? "b" : "a"}>
              <Menu className="t-icon h-6 w-6" data-icon="a" />
              <Close className="t-icon h-6 w-6" data-icon="b" />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="menu-movil"
        aria-label="Menú móvil"
        inert={!open}
        data-origin="top-right"
        className={`t-dropdown absolute inset-x-0 top-full border-t border-cream-200 bg-cream-50 px-5 py-4 md:hidden ${open ? "is-open" : ""} ${closing ? "is-closing" : ""}`}
      >
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            onClick={() => toggle(false)}
            className="block py-3 font-serif text-xl text-cocoa-700"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
