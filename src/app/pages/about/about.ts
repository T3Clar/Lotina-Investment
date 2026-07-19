import { Component } from '@angular/core';
import { AboutHero } from "./components/about-hero/about-hero";
import { MissionVision } from "./components/mission-vision/mission-vision";
import { CoreValues } from "./components/core-values/core-values";
import { LeadershipPhilosophy } from "./components/leadership-philosophy/leadership-philosophy";
import { CompanyStory } from "./components/company-story/company-story";
import { AboutCta } from "./components/about-cta/about-cta";

@Component({
  selector: 'app-about',
  imports: [AboutHero, MissionVision, CoreValues, LeadershipPhilosophy, CompanyStory, AboutCta],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
