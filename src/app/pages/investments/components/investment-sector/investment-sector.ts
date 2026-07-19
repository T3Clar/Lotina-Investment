import { Component, Input } from '@angular/core';
export interface InvestmentSector {

  number: string;

  title: string;

  description: string;

  image: string;

  items: string[];

  reverse: boolean;

}

@Component({
  selector: 'app-investment-sector',
  imports: [],
  templateUrl: './investment-sector.html',
  styleUrl: './investment-sector.css',
})
export class InvestmentSectorComponent {
  @Input({ required: true })
  sector!: InvestmentSector;
}
