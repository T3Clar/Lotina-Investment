import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-insight-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
 templateUrl: './insight-categories.html',
  styleUrl: './insight-categories.css',
})
export class InsightCategories {
  categories = [
    {
      title: 'Technology',
      slug: 'technology',
      image: '/technology.jpg',
      articles: 24,
      description: 'AI, software engineering, cloud computing and digital transformation.'
    },
    {
      title: 'Investment',
      slug: 'investment',
      image: '/investment.jpg',
      articles: 18,
      description: 'Capital allocation, venture growth and long-term investment strategies.'
    },
    {
      title: 'Innovation',
      slug: 'innovation',
      image: '/innovation.jpg',
      articles: 16,
      description: 'Emerging ideas shaping the businesses of tomorrow.'
    },
    {
      title: 'Logistics',
      slug: 'logistics',
      image: '/logistics.jpg',
      articles: 12,
      description: 'Transportation, supply chains and modern commerce.'
    },
    {
      title: 'Markets',
      slug: 'markets',
      image: 'markets.jpg',
      articles: 14,
      description: 'Economic trends and market intelligence.'
    },
    {
      title: 'Research',
      slug: 'research',
      image: '/research.jpg',
      articles: 11,
      description: 'Industry reports and strategic analysis.'
    },
    {
      title: 'Partnerships',
      slug: 'partnerships',
      image: '/partnerships.jpg',
      articles: 8,
      description: 'Collaboration, ecosystems and business growth.'
    },
    {
      title: 'Sustainability',
      slug: 'sustainability',
      image: '/sustainability.jpg',
      articles: 10,
      description: 'Building businesses that create lasting impact.'
    }
  ];

}