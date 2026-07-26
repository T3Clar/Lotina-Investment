import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Insight } from '../../../../models/insight.model';
import { InsightService } from '../../../../services/insight.service';

@Component({
  selector: 'app-insights-grid',
  imports: [RouterLink],
  templateUrl: './insights-grid.html',
  styleUrl: './insights-grid.css',
})
export class InsightsGrid {
  @Output() insightSelected = new EventEmitter<Insight>();
  
  sectionTitle = 'Latest Insights';
  constructor(private insightService: InsightService) {}
  get insights(): Insight[] {
    return this.insightService.getInsights();
  }
   openInsight(insight: Insight): void {
    this.insightSelected.emit(insight);
   }
}
