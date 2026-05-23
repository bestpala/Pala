export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  content: string;
  readingTime: string;
};

export type WorkType =
  | "conference"
  | "community"
  | "content"
  | "research"
  | "talk"
  | "partnership";

export type Work = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  type: WorkType;
  role: string;
  impact: string;
  links?: { label: string; url: string }[];
  cover?: string;
  featured?: boolean;
  relatedPosts?: string[];
};

export type ProjectStatus = "active" | "completed" | "archived";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  status: ProjectStatus;
  role: string;
  tags: string[];
  links?: { label: string; url: string }[];
};

export type TimelineItem = {
  year: string;
  title: string;
  type: "conference" | "community" | "work" | "post" | "project";
  href?: string;
};

export type ArchiveEntry = {
  year: string;
  items: {
    date: string;
    title: string;
    type: string;
    href: string;
  }[];
};

export const workTypeLabels: Record<WorkType, string> = {
  conference: "大会",
  community: "社区",
  content: "内容",
  research: "研究",
  talk: "演讲",
  partnership: "合作",
};

export const projectStatusLabels: Record<ProjectStatus, string> = {
  active: "进行中",
  completed: "已完成",
  archived: "已归档",
};
