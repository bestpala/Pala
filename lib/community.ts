import { readYamlFile } from "./yaml-content";

export type CommunityActivity = {
  title: string;
  date: string;
  description: string;
  url?: string;
};

export type CommunityColumn = {
  title: string;
  description: string;
};

export type CommunityData = {
  name: string;
  website: string;
  mission: string;
  introduction: string;
  focusAreas: string[];
  activities: CommunityActivity[];
  columns: CommunityColumn[];
  join: string;
  collaboration: string;
};

export function getCommunityData(): CommunityData {
  return readYamlFile<CommunityData>("content/community/index.yaml");
}
