import { Component } from '@angular/core';

@Component({
  selector: 'app-leadership-philosophy',
  imports: [],
  templateUrl: './leadership-philosophy.html',
  styleUrl: './leadership-philosophy.css',
})
export class LeadershipPhilosophy {
  philosophies = [
    {
      title: 'We invest in people before products.',
      icon: 'people'
    },
    {
      title: 'We invest in solutions before trends.',
      icon: 'solutions'
    },
    {
      title: 'We invest for generations — not quarters.',
      icon: 'future'
    }
  ];

}

