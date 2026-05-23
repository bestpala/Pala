import { getAllPosts } from "./posts";
import { getAllWorks } from "./works";
import { getAllProjects } from "./projects";
import { getTimelineItems } from "./timeline";
import type { ArchiveEntry } from "./types";
import { formatYear } from "./utils";

export function getArchiveByYear(): ArchiveEntry[] {
  const yearMap = new Map<string, ArchiveEntry["items"]>();

  const addItem = (
    date: string,
    title: string,
    type: string,
    href: string,
  ) => {
    const year = formatYear(date);
    const items = yearMap.get(year) ?? [];
    items.push({ date, title, type, href });
    yearMap.set(year, items);
  };

  getAllPosts().forEach((post) => {
    addItem(post.date, post.title, "文章", `/blog/${post.slug}`);
  });

  getAllWorks().forEach((work) => {
    addItem(work.date, work.title, "作品", "/works");
  });

  getAllProjects().forEach((project) => {
    addItem(project.date, project.title, "项目", "/projects");
  });

  getTimelineItems().forEach((item) => {
    addItem(`${item.year}-01-01`, item.title, item.type, item.href ?? "/");
  });

  return Array.from(yearMap.entries())
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, items]) => ({
      year,
      items: items.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    }));
}
