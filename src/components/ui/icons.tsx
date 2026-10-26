import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { "aria-hidden": true, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24" } as const;

export const ArrowRight = (p: P) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const Leaf = (p: P) => (<svg {...base} {...p}><path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z" /><path d="M5 19 13 11" /></svg>);
export const Heart = (p: P) => (<svg {...base} {...p}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" /></svg>);
export const Whisk = (p: P) => (<svg {...base} {...p}><path d="M4 20l7-7" /><path d="M11 13c-2-4 1-9 5-9s5 4 2 7-5 4-7 2Z" /></svg>);
export const Truck = (p: P) => (<svg {...base} {...p}><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="17.5" r="1.5" /><circle cx="17" cy="17.5" r="1.5" /></svg>);
export const Gift = (p: P) => (<svg {...base} {...p}><path d="M4 11h16v9H4zM3 7h18v4H3zM12 7v13" /><path d="M12 7S10 3 8 4s0 3 4 3c4 0 6-2 4-3s-4 3-4 3" /></svg>);
export const Rings = (p: P) => (<svg {...base} {...p}><circle cx="9" cy="14" r="5" /><circle cx="15" cy="14" r="5" /><path d="M10 5l2-2 2 2" /></svg>);
export const Sparkle = (p: P) => (<svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>);
export const Cake = (p: P) => (<svg {...base} {...p}><path d="M4 20h16M5 20v-7h14v7M5 16c2 1 3-1 4.5 0s3 1 4.5 0 3-1 5 0M12 13V9M12 6.5c.8 0 1.2-.7 1.2-1.4S12 3 12 3s-1.2 1.4-1.2 2.1.4 1.4 1.2 1.4Z" /></svg>);
export const Star = (p: P) => (<svg aria-hidden viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" /></svg>);
export const MapPin = (p: P) => (<svg {...base} {...p}><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>);
export const Phone = (p: P) => (<svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>);
export const Clock = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
export const Menu = (p: P) => (<svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const Close = (p: P) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const Instagram = (p: P) => (<svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></svg>);
export const Facebook = (p: P) => (<svg {...base} {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" /></svg>);
export const WhatsApp = (p: P) => (
  <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3Z" />
  </svg>
);
