import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/about-makhana", "/varieties", "/farming", "/live", "/bulk", "/snacks"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: r === "/live" ? "daily" : "monthly", priority: r === "" ? 1 : 0.7 }));
}
