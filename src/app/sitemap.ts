import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

const routes = [
  "",
  "/about",
  "/events",
  "/members",
  "/resources",
  "/entrepreneurship",
  "/remembrance",
  "/support",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.canonicalUrl}${route}`,
  }));
}
