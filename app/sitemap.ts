import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { getAllPosts } from "@/lib/posts";
import { getAllWorks } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/blog",
    "/conference",
    "/projects",
    "/topics",
    "/now",
    "/community",
    "/about",
    "/archive",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const topicRoutes = siteConfig.themes.map((theme) => ({ url: `${baseUrl}/topics/${theme.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 }));
  const projectRoutes = getAllWorks().map((work) => ({ url: `${baseUrl}/projects/${work.slug}`, lastModified: new Date(work.date), changeFrequency: "monthly" as const, priority: 0.7 }));

  return [...staticRoutes, ...topicRoutes, ...projectRoutes, ...postRoutes];
}
