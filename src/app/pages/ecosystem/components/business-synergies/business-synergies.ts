import { Component } from '@angular/core';

@Component({
  selector: 'app-business-synergies',
  imports: [],
  templateUrl: './business-synergies.html',
  styleUrl: './business-synergies.css',
})
export class BusinessSynergies {
   companies = [

    {
      name: 'Techlar',
      description: 'Enterprise Software Solutions',
      image: '/t3.png'
    },

    {
      name: 'Easy Duka',
      description: 'Retail Digitalisation',
      image: '/ed.png'
    },

    {
      name: 'Xride',
      description: 'Smart Mobility',
      image: '/xr.png'
    },

    {
      name: 'Shoply',
      description: 'Digital Commerce',
      image: '/sho.png'
    },

    {
      name: 'Clexarly',
      description: 'Learning Technology',
      image: '/cl.png'
    },

    {
      name: 'Fork & Go',
      description: 'Food Delivery Platform',
      image: '/fo.png'
    }

  ];
}
