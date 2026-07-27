import { Component } from '@angular/core';

interface Perspective {
  title: string;
  description: string;
  icon: 'innovation' | 'globe' | 'handshake' | 'growth';
}

@Component({
  selector: 'app-newsletter-banner',
  imports: [],
  templateUrl: './newsletter-banner.html',
  styleUrl: './newsletter-banner.css',
})
export class NewsletterBanner {
  sectionTitle = 'Investment Perspectives';

  quote =
    'The next generation of businesses will be built on technology, partnerships and long-term thinking.';

  perspectives: Perspective[] = [

    {
      title: 'Innovation',
      description: 'Ideas become lasting businesses.',
      icon: 'innovation'
    },

    {
      title: 'Long-Term Thinking',
      description: 'Building for generations.',
      icon: 'globe'
    },

    {
      title: 'Strategic Partnerships',
      description: 'Growing stronger together.',
      icon: 'handshake'
    },

    {
      title: 'Sustainable Impact',
      description: 'Creating value for communities.',
      icon: 'growth'
    }

  ];
}
