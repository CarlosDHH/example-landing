import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";
import {
  ArrowRight as PhArrowRight,
  Cake as PhCake,
  CaretRight as PhCaretRight,
  ChefHat as PhChefHat,
  Champagne as PhChampagne,
  Clock as PhClock,
  FacebookLogo as PhFacebookLogo,
  Gift as PhGift,
  Heart as PhHeart,
  InstagramLogo as PhInstagramLogo,
  Leaf as PhLeaf,
  List as PhList,
  MapPin as PhMapPin,
  Phone as PhPhone,
  Sparkle as PhSparkle,
  Star as PhStar,
  Truck as PhTruck,
  WhatsappLogo as PhWhatsappLogo,
  X as PhX,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Íconos del sitio: todos de Phosphor (versión ssr, sirve en componentes de servidor y de cliente).
 * Peso por defecto "light", a juego con la serif fina; los pequeños o de control van en "regular"
 * para que el trazo no se pierda, y la estrella en "fill".
 * El tamaño se da con className (h-5 w-5…) o con la prop size.
 */
const make = (Icon: ComponentType<IconProps>, weight: IconProps["weight"] = "light") => {
  const Wrapped = (p: IconProps) => <Icon weight={weight} aria-hidden {...p} />;
  return Wrapped;
};

/** Flecha completa, para enlaces que salen del sitio o tarjetas de acción donde el caret se queda corto */
export const ArrowRight = ({ size = 18, ...p }: IconProps) => <PhArrowRight size={size} weight="light" aria-hidden {...p} />;
/** Flecha de acción: caret fino. Un solo estilo para botones, enlaces y conectores */
export const CaretRight = ({ size = 18, ...p }: IconProps) => <PhCaretRight size={size} weight="light" aria-hidden {...p} />;

export const Leaf = make(PhLeaf);
export const Heart = make(PhHeart);
export const ChefHat = make(PhChefHat);
export const Truck = make(PhTruck);
export const Gift = make(PhGift);
export const Champagne = make(PhChampagne);
export const Sparkle = make(PhSparkle);
export const Cake = make(PhCake);
export const MapPin = make(PhMapPin);
export const Clock = make(PhClock);
export const Phone = make(PhPhone, "regular");
export const Menu = make(PhList, "regular");
export const Close = make(PhX, "regular");
export const Star = make(PhStar, "fill");
export const Instagram = make(PhInstagramLogo, "regular");
export const Facebook = make(PhFacebookLogo, "regular");
// En "fill" la burbuja queda blanca y el teléfono recortado domina: se lee como llamada. En bold conserva el logo clásico (aro + teléfono)
export const WhatsApp = make(PhWhatsappLogo, "bold");
