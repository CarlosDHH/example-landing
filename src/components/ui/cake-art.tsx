/**
 * Ilustración de pastel usada como marcador de posición mientras
 * llegan las fotos reales de la pastelería. Reemplazar por <Image />.
 */
type Tone = "chocolate" | "vanilla" | "strawberry" | "velvet" | "caramel";

const tones: Record<Tone, { sponge: string; frosting: string; drip: string; top: string }> = {
  chocolate: { sponge: "#6b3a26", frosting: "#4e2216", drip: "#2a130c", top: "#8a4a32" },
  vanilla: { sponge: "#f3e3c3", frosting: "#fbf3e4", drip: "#e8cf9f", top: "#d9b27c" },
  strawberry: { sponge: "#f6d6d0", frosting: "#fbe9e5", drip: "#d9737a", top: "#c2414e" },
  velvet: { sponge: "#9b2d30", frosting: "#fbf3e8", drip: "#f1e2cf", top: "#7a1f24" },
  caramel: { sponge: "#d9a66a", frosting: "#f2dcb8", drip: "#b5793a", top: "#96612b" },
};

export function CakeArt({
  tone = "chocolate",
  label,
  className = "",
}: {
  tone?: Tone;
  /** Etiqueta visible de marcador ("Foto: …"). La ilustración es decorativa para lectores de pantalla. */
  label?: string;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-200 to-cream-300 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 170" className="h-[78%] w-[78%] drop-shadow-[0_18px_18px_rgba(58,26,17,0.22)]">
        {/* base */}
        <ellipse cx="100" cy="150" rx="78" ry="10" fill="#fff" opacity=".85" />
        <rect x="40" y="146" width="120" height="6" rx="3" fill="#e9dccb" />
        {/* cuerpo */}
        <path d="M45 80h110v62a6 6 0 0 1-6 6H51a6 6 0 0 1-6-6Z" fill={t.sponge} />
        <path d="M45 104h110v6H45z" fill={t.frosting} opacity=".9" />
        <path d="M45 124h110v5H45z" fill={t.frosting} opacity=".7" />
        {/* cubierta con escurrido */}
        <path
          d={`M45 80c0-8 25-14 55-14s55 6 55 14v6c-4 0-4 12-8 12s-4-8-8-8-4 16-9 16-4-14-9-14-4 8-8 8-4-10-9-10-4 18-9 18-4-14-8-14-5 6-9 6-4-10-9-10-4 8-8 8-4-12-8-12Z`}
          fill={t.drip}
        />
        <ellipse cx="100" cy="78" rx="55" ry="12" fill={t.frosting} />
        {/* decoración */}
        {[62, 80, 100, 120, 138].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy={74 - (i % 2) * 3} r="7" fill={t.frosting} />
            <circle cx={x} cy={70 - (i % 2) * 3} r="4" fill={t.top} />
          </g>
        ))}
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-white/70 px-3 py-1 text-[10px] tracking-widest text-cocoa-600 uppercase backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
