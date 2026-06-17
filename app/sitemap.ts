import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://houseofbina.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#collections`, lastModified: now, priority: 0.8 },
    { url: `${base}/#new-arrivals`, lastModified: now, priority: 0.8 },
    { url: `${base}/#brand-story`, lastModified: now, priority: 0.6 },
    { url: `${base}/#campaign`, lastModified: now, priority: 0.6 },
  ];
}
