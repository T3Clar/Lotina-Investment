import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FutureGoal {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-future-statement',
  standalone: true,
  imports: [RouterLink],
 templateUrl: './future-statement.html',
  styleUrl: './future-statement.css',
})
export class FutureStatement {

  goals: FutureGoal[] = [

    {
      icon: 'location',
      title: 'Start Local',
      description: 'Deep roots in Jinja and Uganda.'
    },

    {
      icon: 'globe',
      title: 'Scale Regionally',
      description: 'Expanding across East Africa.'
    },

    {
      icon: 'africa',
      title: 'Transform Continent',
      description: 'Building innovative solutions that uplift Africa.'
    },

    {
      icon: 'people',
      title: 'Impact Generations',
      description: 'Creating prosperity and opportunities for generations to come.'
    }

  ];

}