import type { TimelineItem } from "./types";
import { readYamlFile } from "./yaml-content";

export function getTimelineItems(): TimelineItem[] {
  return readYamlFile<TimelineItem[]>("content/timeline.yaml");
}

export function getFeaturedTimeline(limit = 6): TimelineItem[] {
  return getTimelineItems().slice(0, limit);
}
