import { Component } from '@angular/core';
import {
  InvestmentSector,
  InvestmentSectorComponent
} from '../investment-sector/investment-sector';

@Component({
  selector: 'app-investment-sectors',
  standalone: true,
  imports: [InvestmentSectorComponent],
  templateUrl: './investment-sectors.html',
  styleUrl: './investment-sectors.css'
})
export class InvestmentSectorsComponent {

  sectors: InvestmentSector[] = [

    {
      number: '01',
      title: 'Technology',
      description:
        'Driving innovation through software, artificial intelligence, cloud computing and digital infrastructure that transform businesses and communities.',

      image: '/ar.png',

      reverse: false,

      items: [
        'Artificial Intelligence',
        'Software Development',
        'Cloud Computing',
        'Cybersecurity',
        'Automation'
      ]
    },

    {
      number: '02',
      title: 'Commerce',
      description:
        'Building digital commerce ecosystems that empower businesses through modern retail, payments and online marketplaces.',

      image: '/co.png',

      reverse: true,

      items: [
        'Retail Commerce',
        'Digital Payments',
        'E-Commerce',
        'Business Platforms'
      ]
    },

    {
      number: '03',
      title: 'Transportation',
      description:
        'Creating intelligent mobility solutions that improve transportation, logistics and urban connectivity.',

      image: '/ri.png',

      reverse: false,

      items: [
        'Ride Sharing',
        'Fleet Management',
        'Logistics',
        'Delivery Solutions'
      ]
    },

    {
      number: '04',
      title: 'Agriculture',
      description:
        'Investing in sustainable agriculture through technology, innovation and modern food production.',

      image: '/ag.png',

      reverse: true,

      items: [
        'AgriTech',
        'Food Production',
        'Smart Farming',
        'Supply Chains'
      ]
    },

    {
      number: '05',
      title: 'Healthcare',
      description:
        'Improving healthcare delivery through digital health, medical innovation and patient-centered technologies.',

      image: '/c.png',

      reverse: false,

      items: [
        'Digital Healthcare',
        'Medical Systems',
        'Telemedicine',
        'Health Innovation'
      ]
    },

    {
      number: '06',
      title: 'Education',
      description:
        'Expanding access to quality education through technology, research and innovative learning platforms.',

      image: '/educ.png',

      reverse: true,

      items: [
        'EdTech',
        'Digital Learning',
        'Skills Development',
        'Research'
      ]
    },

    {
      number: '07',
      title: 'Tourism',
      description:
        'Promoting sustainable tourism experiences that celebrate culture, hospitality and economic growth.',

      image: '/tou.png',

      reverse: false,

      items: [
        'Hospitality',
        'Travel Technology',
        'Eco Tourism',
        'Destination Development'
      ]
    },

    {
      number: '08',
      title: 'FinTech',
      description:
        'Building financial technology solutions that improve inclusion, payments and access to financial services.',

      image: '/fin.png',

      reverse: true,

      items: [
        'Digital Banking',
        'Payment Systems',
        'Financial Inclusion',
        'Investment Platforms'
      ]
    }

  ];

}