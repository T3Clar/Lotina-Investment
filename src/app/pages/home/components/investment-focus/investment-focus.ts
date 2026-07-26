import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-investment-focus',
  imports: [RouterLink],
  templateUrl: './investment-focus.html',
  styleUrl: './investment-focus.css',
})
export class InvestmentFocus {

  sectors = [
    {
      title: 'Private Equity',
      description: 'Supporting established businesses through strategic capital allocation.',
      icon: '/icons/private-equity.svg'
    },
    {
      title: 'Venture Capital',
      description: 'Backing innovative startups with growth potential and transformative ideas.',
      icon: '/icons/venture-capital.svg'
    },
    {
      title: 'Real Assets',
      description: 'Investing in infrastructure, logistics and industrial developments.',
      icon: '/icons/real-assets.svg'
    },
    {
      title: 'Capital Markets',
      description: 'Creating long-term value through disciplined market participation.',
      icon: '/icons/capital-markets.svg'
    },
    {
      title: 'Strategic Partnerships',
      description: 'Building alliances that strengthen businesses and accelerate growth.',
      icon: '/icons/strategic-partnerships.svg'
    },
    {
      title: 'Impact Investing',
      description: 'Generating sustainable economic value while creating positive social impact.',
      icon: '/icons/impact-investing.svg'
    }
  ];

}
