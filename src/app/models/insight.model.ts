export interface Insight {

  id: number;
  featured: boolean;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;

}

export interface InsightCategory {

  name: string;

  slug: string;

  heroImage: string;

  description: string;

  articles: number;

  coverImage: string;

}