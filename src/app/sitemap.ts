import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://aidaschmidt.pages.dev";
  const currentDate = new Date();

  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/links`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
