import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Company {
  name: string;
  logo: string;
  x?: number;
  y?: number;
}

@Component({
  selector: 'app-ecosystem-hero-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecosystem-diagram.html',
  styleUrl: './ecosystem-diagram.css'
})
export class EcosystemHeroDiagramComponent implements OnInit {

  readonly radius = 40;

  companies: Company[] = [
    {
      name: 'Techlar',
      logo: '/logos/techlar.png'
    },
    {
      name: 'Easy Duka',
      logo: '/logos/easyduka.png'
    },
    {
      name: 'Xride',
      logo: '/logos/xride.png'
    },
    {
      name: 'Fork & Go',
      logo: '/logos/forkandgo.png'
    },
    {
      name: 'Clexarly',
      logo: '/logos/clexarly.png'
    },
    {
      name: 'Shoply',
      logo: '/logos/shoply.png'
    }
  ];

  ngOnInit(): void {
    this.calculatePositions();
  }

  calculatePositions(): void {

    const total = this.companies.length;
    const angleStep = 360 / total;

    this.companies = this.companies.map((company, index) => {

      const angle = (-90 + index * angleStep) * Math.PI / 180;

      return {

        ...company,

        x: 50 + this.radius * Math.cos(angle),

        y: 50 + this.radius * Math.sin(angle)

      };

    });

  }

}