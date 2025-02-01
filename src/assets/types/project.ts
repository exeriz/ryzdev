export interface Project {
  id: number;
  date: string;
  version: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  paragraph: string[];
  category: string;
  license: string;
  update_at: string;
  tags: string[];
  versions: {
    [key: string]: string[];
  };
  url: {
    demo: string | null;
    repo: string;
  };
}
