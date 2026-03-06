import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mostaradv.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/rentals`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/routes`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}