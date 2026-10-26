import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const dynamic = "force-static";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f7efe4", color: "#3a1a11" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px" }}>
          <div style={{ fontSize: 120 }}>{site.name}</div>
          <div style={{ fontSize: 36, color: "#96612b", marginTop: 16 }}>{site.tagline}</div>
          <div style={{ fontSize: 40, marginTop: 32 }}>Pasteles para cada celebración</div>
        </div>
        <div style={{ height: 90, background: "#3a1a11", color: "#fcf8f2", display: "flex", alignItems: "center", padding: "0 90px", fontSize: 30 }}>
          Haz tu pedido en línea · Entregas a domicilio
        </div>
      </div>
    ),
    size,
  );
}
