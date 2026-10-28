/**
 * Logo fijo al centro de la ventana, detrás de todo. Al hacer scroll solo se ve
 * a través de las secciones sin fondo; las de fondo sólido lo tapan.
 */
export function Watermark() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="" className="h-[min(70vh,560px)] w-auto max-w-[85vw] opacity-[0.12]" />
    </div>
  );
}
