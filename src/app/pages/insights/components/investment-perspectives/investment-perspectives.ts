import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Topic {

  title: string;

  icon: string;



}

@Component({
  selector: 'app-investment-perspectives',
  imports: [RouterLink],
  templateUrl: './investment-perspectives.html',
  styleUrl: './investment-perspectives.css',
})
export class InvestmentPerspectives {

  sectionTitle = 'Explore Topics';

  sectionDescription =
    'Browse our insights by category and discover perspectives shaping the future of business, technology, and investment.';

  topics: Topic[] = [

    {
      title: 'Technology',
      icon: 'cpu',
    },

    {
      title: 'Investment',
      icon: 'chart',
    },

    {
      title: 'Innovation',
      icon: 'lightbulb',
    },

    {
      title: 'Logistics',
      icon: 'truck',
    },

    {
      title: 'Markets',
      icon: 'bar-chart',
    },

    {
      title: 'Research',
      icon: 'book',
    },

    {
      title: 'Partnerships',
      icon: 'handshake',
    },

    {
      title: 'Sustainability',
      icon: 'leaf',
    }
  ];
}

