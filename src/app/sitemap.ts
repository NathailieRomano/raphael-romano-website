import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://raphaelromano.ch";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/verkehrstherapie`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/buch`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/biografie`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
