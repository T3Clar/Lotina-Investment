import { Component } from '@angular/core';
import { HomeHero } from "./components/home-hero/home-hero";
import { FeaturedCompanies } from "./components/featured-companies/featured-companies";
import { InvestmentFocus } from "./components/investment-focus/investment-focus";
import { StatsSection } from "./components/stats-section/stats-section";
import { HomeCta } from "./components/home-cta/home-cta";
import { AboutPreview } from "./components/about-preview/about-preview";

@Component({
  selector: 'app-home',
  imports: [HomeHero, FeaturedCompanies, InvestmentFocus, StatsSection, HomeCta, AboutPreview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
