export function formatDate(date: string, options?: Intl.DateTimeFormatOptions) {
  const d = new Date(date);
  return d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  });
}

export function formatYear(date: string) {
  return new Date(date).getFullYear().toString();
}

export function sortByDateDesc<T extends { date: string }>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
