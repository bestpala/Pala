import { readYamlFile } from "./yaml-content";

export type ConferenceSpeaker = {
  name: string;
  title: string;
  topic?: string;
};

export type ConferencePartner = {
  name: string;
  url?: string;
};

export type ConferenceMedia = {
  title: string;
  source: string;
  url: string;
};

export type ConferenceAsset = {
  type: string;
  title: string;
  url: string;
};

export type ConferenceEdition = {
  year: number;
  theme: string;
  location?: string;
};

export type ConferenceData = {
  title: string;
  subtitle: string;
  website: string;
  summary: string;
  positioning: string;
  background: string;
  themes: string[];
  editions: ConferenceEdition[];
  stats: {
    label: string;
    value: string;
  }[];
  speakers: ConferenceSpeaker[];
  partners: ConferencePartner[];
  media: ConferenceMedia[];
  gallery: { src: string; alt: string; caption?: string }[];
  myRole: { title: string; description: string }[];
  assets: ConferenceAsset[];
  agenda?: { title: string; items: string[] }[];
};

export function getConferenceData(): ConferenceData {
  return readYamlFile<ConferenceData>("content/conference/global-edge.yaml");
}
