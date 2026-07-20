import { Component } from '@angular/core';
import { InnovationHero } from "./components/innovation-hero/innovation-hero";
import { InnovationLab } from "./components/innovation-lab/innovation-lab";
import { FutureStatement } from "./components/future-statement/future-statement";
import { LookingAhead } from "./components/looking-ahead/looking-ahead"; 

@Component({
  selector: 'app-innovation',
  imports: [InnovationHero, InnovationLab, FutureStatement, LookingAhead],
  templateUrl: './innovation.html',
  styleUrl: './innovation.css',
})
export class Innovation {}
