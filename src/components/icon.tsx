import { Feather, Flower2, Gem, Globe, Handshake, Package, Ruler, Sprout, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  feather: Feather,
  sprout: Sprout,
  gem: Gem,
  flower: Flower2,
  handshake: Handshake,
  ruler: Ruler,
  package: Package,
  globe: Globe,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = icons[name] ?? Sprout;
  return <C className={className} />;
}
