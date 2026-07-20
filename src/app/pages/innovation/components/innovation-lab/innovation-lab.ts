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
      title: 'Artificial Intelligence',
      description: 'Building intelligent systems that automate processes, enhance decision-making, and create new opportunities for businesses.',
      svg: 'brain'
    },

    {
      title: 'Machine Learning',
      description: 'Transforming data into actionable insights through predictive models that improve performance and innovation.',
      svg: 'cpu'
    },

    {
      title: 'Robotics',
      description: 'Advancing automation through intelligent robotic systems that improve productivity and operational efficiency.',
      svg: 'bot'
    },

    {
      title: 'Cloud Computing',
      description: 'Delivering scalable, secure, and reliable digital infrastructure for modern businesses and connected services.',
      svg: 'cloud'
    },

    {
      title: 'Internet of Things (IoT)',
      description: 'Connecting devices, systems, and infrastructure to enable smarter operations and real-time decision-making.',
      svg: 'network'
    },

    {
      title: 'Cybersecurity',
      description: 'Protecting digital platforms, business systems, and data through resilient and trusted security solutions.',
      svg: 'shield'
    },

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