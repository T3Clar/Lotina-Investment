import { Component } from '@angular/core';
import { InsightsHero } from "./components/insights-hero/insights-hero";
import { FeaturedInsight } from "./components/featured-insight/featured-insight";
import { InvestmentPerspectives } from "./components/investment-perspectives/investment-perspectives";
import { InsightsGrid } from "./components/insights-grid/insights-grid";
import { NewsletterBanner } from "./components/newsletter-banner/newsletter-banner";
import { InsightsCta } from "./components/insights-cta/insights-cta";
import { InsightModal } from "../../components/insight-modal/insight-modal";
import { Insight } from '../../models/insight.model';
import { InsightService } from '../../services/insight.service';
@Component({
  selector: 'app-insights',
  imports: [InsightsHero, FeaturedInsight, InvestmentPerspectives, InsightsGrid, NewsletterBanner, InsightsCta, InsightModal],
  templateUrl: './insights.html',
  styleUrl: './insights.css',
})
export class Insights {
  showModal = false;

  selectedInsight: Insight | null = null;
  constructor(private insightService: InsightService) {
    this.insightService.loadInsights();
  }
  get insights(): Insight[] {
  return this.insightService.insights;
}
  currentIndex =0;

openInsight(insight: Insight): void {

  this.currentIndex = this.insights.findIndex(
    item => item.id === insight.id
  );

  this.selectedInsight = insight;

  this.showModal = true;

  document.body.style.overflow = 'hidden';
}

  closeModal(): void {
    this.showModal = false;
    this.selectedInsight = null;

    document.body.style.overflow = 'auto';
  }
  previousInsight(): void {

  if (this.currentIndex > 0) {

    this.currentIndex--;

    this.selectedInsight =
      this.insights[this.currentIndex];

  }

}
nextInsight(): void {

  if (this.currentIndex < this.insights.length - 1) {

    this.currentIndex++;

    this.selectedInsight =
      this.insights[this.currentIndex];

  }

}
get hasPrevious(): boolean {
  return this.currentIndex > 0;
}

get hasNext(): boolean {
  return this.currentIndex < this.insights.length - 1;
}
}
