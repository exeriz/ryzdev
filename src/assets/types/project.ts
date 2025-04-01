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
  features: [
    {
      version: string;
      list: string[];
    }
  ];
  homepage: string | null;
  git: string;
  license: string;
  contributors: string[] | null;
}
