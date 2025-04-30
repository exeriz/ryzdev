export type FeatureItem = {
  version: string;
  list: string[];
};

export type Contributors = {
  image: string;
  url: string;
}

export interface Project {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  image: string | null;
  description: {
    summary: string;
    detail: string[];
  };
  category: string;
  tags: string[];
  features: FeatureItem[] | null;
  homepage: string | null;
  git: string;
  license: string | null;
  contributors: Contributors[] | null;
}
