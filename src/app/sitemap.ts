import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/journey", "/story", "/product", "/buy", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly", priority: r === "" || r === "/journey" ? 1 : 0.7 }));
}
