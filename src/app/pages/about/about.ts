import { Component } from '@angular/core';
import { AboutHero } from "./components/about-hero/about-hero";
import { MissionVision } from "./components/mission-vision/mission-vision";
import { CoreValues } from "./components/core-values/core-values";

@Component({
  selector: 'app-about',
  imports: [AboutHero, MissionVision, CoreValues],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
