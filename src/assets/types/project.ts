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
  features: Array<{
    version: string;
    list: string[];
  }> | null;
  homepage: string | null;
  git: string;
  license: string | null;
  contributors: {
    image: string;
    url: string;
  }[] | null;
}
