import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface InsightCategory {
  name: string;
  slug: string;
  tagline: string;
  image: string;
}

@Component({
  selector: 'app-all-insights',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-insights.html',
  styleUrl: './all-insights.css'
})
export class AllInsights {

  categories: InsightCategory[] = [

    {
      name: 'Technology',
      slug: 'technology',
      tagline: "Building Africa's Digital Future",
      image: 'assets/images/insights/technology.jpg'
    },

    {
      name: 'Investment',
      slug: 'investment',
      tagline: 'Creating Long-Term Value Through Strategic Capital',
      image: 'assets/images/insights/investment.jpg'
    },

    {
      name: 'Innovation',
      slug: 'innovation',
      tagline: 'Turning Bold Ideas into Scalable Businesses',
      image: 'assets/images/insights/innovation.jpg'
    },

    {
      name: 'Logistics',
      slug: 'logistics',
      tagline: 'Connecting Businesses Through Smarter Movement',
      image: 'assets/images/insights/logistics.jpg'
    },

    {
      name: 'Markets',
      slug: 'markets',
      tagline: 'Understanding Trends That Shape Tomorrow',
      image: 'assets/images/insights/markets.jpg'
    },

    {
      name: 'Research',
      slug: 'research',
      tagline: 'Data-Driven Insights for Better Decisions',
      image: 'assets/images/insights/research.jpg'
    },

    {
      name: 'Partnerships',
      slug: 'partnerships',
      tagline: 'Growing Together Through Collaboration',
      image: 'assets/images/insights/partnerships.jpg'
    },

    {
      name: 'Sustainability',
      slug: 'sustainability',
      tagline: 'Investing for People, Planet and Prosperity',
      image: 'assets/images/insights/sustainability.jpg'
    }

  ];

}