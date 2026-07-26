import { Component } from '@angular/core';

interface InnovationArea {
  title: string;
  description: string;
  svg: string;
}

@Component({
  selector: 'app-innovation-lab',
  standalone: true,
  templateUrl: './innovation-lab.html',
  styleUrl: './innovation-lab.css'
})
export class InnovationLab {

  innovations: InnovationArea[] = [
    {
      title: 'Data Intelligence',
      description: 'Unlocking meaningful insights from data to support innovation, strategic planning, and business growth.',
      svg: 'database'
    },

    {
      title: 'Smart Cities',
      description: 'Enabling sustainable urban development through intelligent infrastructure, digital services, and connected communities.',
      svg: 'building'
    },

    {
      title: 'Automation',
      description: 'Streamlining business processes with technologies that improve efficiency, consistency, and productivity.',
      svg: 'cog'
    },

    {
      title: 'Renewable Energy',
      description: 'Exploring sustainable energy innovations that support long-term economic growth and environmental responsibility.',
      svg: 'leaf'
    },

    {
      title: 'Digital Payments',
      description: 'Building secure and accessible payment solutions that strengthen financial inclusion and digital commerce.',
      svg: 'credit-card'
    },

    {
      title: 'Geospatial Technology',
      description: 'Leveraging location intelligence and mapping technologies to improve planning, logistics, and informed decision-making.',
      svg: 'map-pin'
    }

  ];

}