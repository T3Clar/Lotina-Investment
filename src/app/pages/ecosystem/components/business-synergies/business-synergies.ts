import { Component } from '@angular/core';

interface Company{
  name: string;
  description: string;
  image: string;
  website: string; 
}

@Component({
  selector: 'app-business-synergies',
  imports: [],
  templateUrl: './business-synergies.html',
  styleUrl: './business-synergies.css',
})
export class BusinessSynergies {
   companies: Company[] = [

    {
      name: 'T3clar',
      description: 'Enterprise Software Solutions',
      image: '/t3.png',
      website: 'https://t3clar.web.app/websites'
    },

    {
      name: 'EasyDuuka',
      description: 'Retail Digitalisation',
      image: '/ed.png',
      website: 'https://easyduuka.com/'
    },

    {
      name: 'Xride',
      description: 'Smart Mobility',
      image: '/xr.png',
      website: '/'
    },

    {
      name: 'Shoplt',
      description: 'Digital Commerce',
      image: '/sho.png',
      website: '/'
    },

    {
      name: 'Clexarly',
      description: 'Learning Technology',
      image: '/cl.png',
      website: 'https://clexarly.com/'
    },

    {
      name: 'Fork & Go',
      description: 'Food Delivery Platform',
      image: '/fo.png',
      website: 'https://forkandgoexpress.com/'
    }

  ];
}
