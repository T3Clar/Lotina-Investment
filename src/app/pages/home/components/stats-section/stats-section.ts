import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-section',
  imports: [],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.css',
})
export class StatsSection {

  stats = [
    {
      number: '10+',
      label: 'Years of Experience'
    },
    {
      number: '250+',
      label: 'Investments Made'
    },
    {
      number: '20+',
      label: 'Industries Impacted'
    },
    {
      number: '1B+',
      label: 'Assets Under Advisory'
    }
  ];


}
