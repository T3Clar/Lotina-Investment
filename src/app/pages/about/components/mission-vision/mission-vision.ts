import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-vision',
  imports: [],
  templateUrl: './mission-vision.html',
  styleUrl: './mission-vision.css',
})
export class MissionVision {

  cards = [
    {
      title: 'Our Mission',
      icon: 'mission',
      description:
        'To invest in visionary ideas, innovative businesses, and transformative technologies that create sustainable growth and long-term value.'
    },
    {
      title: 'Our Vision',
      icon: 'vision',
      description:
        'To become one of Africa’s leading investment companies by building businesses that improve everyday life through innovation, technology, and strategic partnerships.'
    }
  ];

}

