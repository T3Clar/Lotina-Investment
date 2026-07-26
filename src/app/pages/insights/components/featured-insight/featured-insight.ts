import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Insight } from '../../../../models/insight.model';

interface MetaItem{
  type: string;
  value: string;
}

interface FeaturedInsightData {
  category: string;
  title: string;
  description: string;
  image: string;
  meta: MetaItem[];
}
@Component({
  selector: 'app-featured-insight',
  imports: [RouterLink],
  templateUrl: './featured-insight.html',
  styleUrl: './featured-insight.css',
})
export class FeaturedInsight {
  
 featuredInsight: FeaturedInsightData = {

    category: 'Featured Insight',

    title: 'The Future of Digital Commerce Across Africa',

    description:
      'Exploring how innovation, logistics, digital infrastructure, and connected ecosystems are shaping the next generation of African businesses.',

    image: 'assets/images/insights/featured-insight.jpg',

    meta: [

      {
        type: 'calendar',
        value: 'May 2026'
      },

      {
        type: 'tag',
        value: 'Investment Strategy'
      },

      {
        type: 'clock',
        value: '8 min read'
      }

    ]

  };
}
