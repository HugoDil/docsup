import type { MetadataRoute } from "next";
import { supplements } from "@/data/supplements";

const SITE_URL = "https://docsup-eight.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesStatiques: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/dictionnaire`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/catalogue`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const pagesSupplements: MetadataRoute.Sitemap = supplements.map((s) => ({
    url: `${SITE_URL}/dictionnaire/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pagesStatiques, ...pagesSupplements];
}
