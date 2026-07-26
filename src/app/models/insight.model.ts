export interface Insight {

  id: number;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;

}

export interface InsightCategory {

  name: string;

  heroImage: string;

  description: string;

}