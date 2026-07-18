import { Component } from '@angular/core';

@Component({
  selector: 'app-core-values',
  imports: [],
  templateUrl: './core-values.html',
  styleUrl: './core-values.css',
})
export class CoreValues {
 
  values = [
    {
      title: 'Integrity',
      description:
        'We uphold the highest standards of honesty, transparency, and accountability in every decision we make.'
    },
    {
      title: 'Innovation',
      description:
        'We embrace new ideas, technologies, and strategies that unlock opportunities and drive sustainable growth.'
    },
    {
      title: 'Excellence',
      description:
        'We strive for exceptional quality in our investments, partnerships, and the value we create.'
    },
    {
      title: 'Partnership',
      description:
        'We believe long-term success is built through meaningful relationships founded on trust and collaboration.'
    },
    {
      title: 'Sustainability',
      description:
        'We invest responsibly, creating businesses that generate lasting economic and social impact.'
    },
    {
      title: 'Leadership',
      description:
        'We lead with vision, discipline, and courage to shape businesses that transform industries.'
    }
  ];

}
