import { Component } from '@angular/core';
import { EcosystemHero } from "./components/ecosystem-hero/ecosystem-hero";
import { BusinessSynergies } from "./components/business-synergies/business-synergies";
import { PortfolioCompanies } from "./components/portfolio-companies/portfolio-companies";
import { GrowthMetrics } from "./components/growth-metrics/growth-metrics";
import { EcosystemCta } from "./components/ecosystem-cta/ecosystem-cta"; 
@Component({
  selector: 'app-ecosystem',
  imports: [EcosystemHero, BusinessSynergies, PortfolioCompanies, GrowthMetrics, EcosystemCta],
  templateUrl: './ecosystem.html',
  styleUrl: './ecosystem.css',
})
export class Ecosystem {}
