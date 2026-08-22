"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

export type SearchItem = { title: string; description: string; href: string; kind: string; keywords: string };
export function SearchClient({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => { const normalized = query.trim().toLowerCase(); return normalized ? items.filter((item) => `${item.title} ${item.description} ${item.keywords}`.toLowerCase().includes(normalized)) : items; }, [items, query]);
  return <div className="search-page"><label htmlFor="site-search">Search the archive</label><input id="site-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索品牌、技术、社区或项目…" autoFocus /><p className="search-page__count font-mono">{results.length} RESULTS</p><ol>{results.map((item) => <li key={item.href}><Link href={item.href}><span>{item.kind}</span><div><h2>{item.title}</h2><p>{item.description}</p></div></Link></li>)}</ol>{!results.length && <p className="search-page__empty">没有找到相关内容，换一个更短的关键词试试。</p>}</div>;
}
