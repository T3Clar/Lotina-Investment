import { Injectable, inject } from '@angular/core';
import { Insight } from '../models/insight.model';
import { HttpClient } from '@angular/common/http';
import { InsightCategory } from '../models/insight.model';
@Injectable({
  providedIn: 'root'
})
export class InsightService {
  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/articles';

  insights: Insight[] = [];

  categories: InsightCategory[] = [
    {
      name: 'Technology',
      slug: 'technology',
      heroImage: 'cat/technology.png',
      coverImage: 'cat/technology.png',
      description: 'Artificial intelligence, software engineering, cloud computing and digital transformation.',
      articles: 1
    },
    {
      name: 'Commerce',
      slug: 'commerce',
      heroImage: 'cat/commerce.png',
      coverImage: 'cat/commerce.png',
      description: 'Digital marketplaces, retail innovation and customer experiences.',
      articles: 2
    },
    {
      name: 'Partnerships',
      slug: 'partnerships',
      heroImage: 'cat/partnership.png',
      coverImage: 'cat/partnership.png',
      description: 'Building strategic collaborations that create long-term value.',
      articles: 3
    },
    {
      name: 'Investment',
      slug: 'investment',
      heroImage: 'cat/investment.png',
      coverImage: 'cat/investment.png',
      description: 'Capital allocation, venture growth and long-term investment strategies.',
      articles: 4
    },
    {
      name: 'Innovation',
      slug: 'innovation',
      heroImage: 'cat/innovation.png',
      coverImage: 'cat/innovation.png',
      description: 'Emerging ideas shaping the businesses of tomorrow.',
      articles: 5
    },
    {
      name: 'Logistics',
      slug: 'logistics',
      heroImage: 'cat/logistics.png',
      coverImage: 'cat/logistics.png',
      description: 'Transportation, supply chains and modern commerce.',
      articles: 6
    },
    {
      name: 'Markets',
      slug: 'markets',
      heroImage: 'cat/markets.png',
      coverImage: 'cat/markets.png',
      description: 'Economic trends and market intelligence.',
      articles: 7
    },
    {
      name: 'Research',
      slug: 'research',
      heroImage: 'cat/research.png',
      coverImage: 'cat/research.png',
      description: 'Industry reports and strategic analysis.',
      articles: 8
    },
    {
      name: 'Sustainability',
      slug: 'sustainability',
      heroImage: 'cat/sss.png',
      coverImage: 'cat/sss.png',
      description: 'Building businesses that create lasting impact.',
      articles: 9
    }
  ];
  loadInsights(): void {

    this.http.get<any[]>(this.api).subscribe({

      next: (articles) => {

        this.insights = articles.map((article, index) => ({

          id: article.id,

          featured: index === 0,

          category: article.category,

          title: article.title,

          excerpt: article.excerpt,

          content: article.content,

          image: article.coverImage || '',

          author: 'Lotina Investments',

          date: article.publishedAt
            ? new Date(article.publishedAt).toLocaleDateString(
              'en-GB',
              {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              }
            )
            : '',

          readTime: `${article.readingTime} min read`,

          slug: article.slug

        }));

        console.log(
          'INSIGHTS LOADED FROM BACKEND:',
          this.insights
        );

      },

      error: (error) => {

        console.error(
          'FAILED TO LOAD INSIGHTS:',
          error
        );

      }

    });

  }
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

  getFeaturedInsight(): Insight {

    return this.insights.find(
      insight => insight.featured
    )!;

  }
  getCategories(): InsightCategory[] {

    return this.categories;

  }

}
