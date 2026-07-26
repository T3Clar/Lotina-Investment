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

}