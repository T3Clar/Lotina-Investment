import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-looking-ahead',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './looking-ahead.html',
  styleUrl: './looking-ahead.css',
})
export class LookingAhead {
  pillars: string[] = [
     'Digital Payments & Fintech',
    'Smart Agriculture',
    'Health Technology',
    'Renewable Energy',
    'Touirism & Hospitality',
    'Smart Logistics'
  ]
}
