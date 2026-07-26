import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
interface HeroContent {
  label: string;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

@Component({
  selector: 'app-insights-hero',
  imports: [RouterLink],
  templateUrl: './insights-hero.html',
  styleUrl: './insights-hero.css',
})
export class InsightsHero {
  constructor(private viewportScroller: ViewportScroller) {}
  goToNewletter() {
    this.viewportScroller.scrollToAnchor('newsletter')
  }
  hero: HeroContent = {

    label: 'Insights',

    title: 'Insights That\nShape Tomorrow',

    description:
      'Discover thought leadership, investment perspectives, innovation research, ecosystem updates, and market intelligence shaping the future of Africa’s businesses and communities.',

    primaryButton: 'Explore Insights',

    secondaryButton: 'Subscribe'

  };
}
