import { Component } from '@angular/core';
import { EcosystemHeroDiagramComponent } from '../ecosystem-diagram/ecosystem-diagram';
@Component({
  selector: 'app-ecosystem-hero',
  standalone: true,
  imports: [EcosystemHeroDiagramComponent],
  templateUrl: './ecosystem-hero.html',
  styleUrl: './ecosystem-hero.css',
})
export class EcosystemHero {}
