export type BlogCategory = "empreendedorismo" | "pitch" | "inovacao" | "cases" | "eventos";

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  category: BlogCategory;
  readTime: string;
  image: string;
  slug: string;
};

export type CategoryConfig = {
  [key in BlogCategory]: {
    label: string;
    color: string;
  }
}; 