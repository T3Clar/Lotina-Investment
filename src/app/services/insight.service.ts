import { Injectable } from '@angular/core';
import { Insight } from '../models/insight.model';
import { InsightCategory } from '../models/insight.model';
@Injectable({
  providedIn: 'root'
})
export class InsightService {

      insights: Insight[] = [
  {
    id: 1,
    category: 'Technology',
    title: "Why AI Will Power Africa's Next Business Revolution",
    excerpt: 'Artificial intelligence is unlocking new opportunities, improving efficiency, and building smarter businesses across Africa.',
    content: `
      <p>Artificial intelligence is reshaping industries across Africa by enabling businesses to automate processes, improve decision-making, and create better customer experiences.</p>

      <p>From healthcare and finance to logistics and agriculture, AI is becoming a foundation for sustainable innovation.</p>

      <p>At Lotina Investments, we believe AI is not just another technology trend—it is a strategic tool for building businesses that solve real-world challenges.</p>
    `,
    image: '/power.png',
    author: 'Lotina Research Team',
    date: 'May 20, 2026',
    readTime: '6 min read'
  },

  {
    id: 2,
    category: 'Commerce',
    title: 'Building Connected Marketplaces',
    excerpt: 'Digital platforms and seamless customer experiences are driving the future of commerce across the continent.',
    content: `<p>Commerce article...</p>`,
    image: '/build.png',
    author: 'Lotina Research Team',
    date: 'May 18, 2026',
    readTime: '7 min read'
  },

  {
    id: 3,
    category: 'Partnerships',
    title: 'Why Collaboration Creates Sustainable Growth',
    excerpt: 'Strategic partnerships create long-term impact.',
    content: `<p>Partnership article...</p>`,
    image: '/part.png',
    author: 'Lotina Research Team',
    date: 'May 15, 2026',
    readTime: '5 min read'
  },

   {
    id: 4,
    category: 'Partnerships',
    title: 'Why Collaboration Creates Sustainable Growth',
    excerpt: 'Strategic partnerships create long-term impact.',
    content: `<p>Partnership article...</p>`,
    image: '/part.png',
    author: 'Lotina Research Team',
    date: 'May 15, 2026',
    readTime: '5 min read'
  },
   {
    id: 5,
    category: 'Partnerships',
    title: 'Why Collaboration Creates Sustainable Growth',
    excerpt: 'Strategic partnerships create long-term impact.',
    content: `<p>Partnership article...</p>`,
    image: '/part.png',
    author: 'Lotina Research Team',
    date: 'May 15, 2026',
    readTime: '5 min read'
  },
   {
    id: 6,
    category: 'Partnerships',
    title: 'Why Collaboration Creates Sustainable Growth',
    excerpt: 'Strategic partnerships create long-term impact.',
    content: `<p>Partnership article...</p>`,
    image: '/part.png',
    author: 'Lotina Research Team',
    date: 'May 15, 2026',
    readTime: '5 min read'
  }

  ];
 
  categories: InsightCategory[] = [
    {
      name: 'Technology',
      slug: 'technology',
      heroImage: '/technology.jpg',
      description: 'Artificial intelligence, software engineering, cloud computing and digital transformation.',
      articles: 1
    },
    {
      name: 'Commerce',
      slug: 'commerce',
      heroImage: '/commerce.jpg',
      description: 'Digital marketplaces, retail innovation and customer experiences.',
      articles: 2
    },
    {
      name: 'Partnerships',
      slug: 'partnerships',
      heroImage: '/partnerships.jpg',
      description: 'Building strategic collaborations that create long-term value.',
      articles: 3
    },
    {
      name: 'Investment',
      slug: 'investment',
      heroImage: '/investment.jpg',
      description: 'Capital allocation, venture growth and long-term investment strategies.',
      articles: 4
    },
    {
      name: 'Innovation',
      slug: 'innovation',
      heroImage: '/innovation.jpg',
      description: 'Emerging ideas shaping the businesses of tomorrow.',
articles: 5
    },
    {
      name: 'Logistics',
      slug: 'logistics',
      heroImage: '/logistics.jpg',
      description: 'Transportation, supply chains and modern commerce.',
      articles: 6
    },
    {
      name: 'Markets',
      slug: 'markets',
      heroImage: '/markets.jpg',
      description: 'Economic trends and market intelligence.',
      articles: 7
    },
    {
      name: 'Research',
      slug: 'research',
      heroImage: '/research.jpg',
      description: 'Industry reports and strategic analysis.',
      articles: 8
    },
    {
      name: 'Sustainability',
      slug: 'sustainability',
      heroImage: '/sustainability.jpg',
      description: 'Building businesses that create lasting impact.',
articles: 9
    }
  ];

  getInsights(): Insight[] {
  return this.insights;
}

getInsightsByCategory(category: string): Insight[] {
  return this.insights.filter(
    insight => insight.category.toLowerCase() === category.toLowerCase()
  );
}

getCategory(name: string): InsightCategory | undefined {
  return this.categories.find(
    category => category.name.toLowerCase() === name.toLowerCase()
  );
}
}
