import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InsightCategory } from '../../../models/insight.model';
import { InsightService } from '../../../services/insight.service';

@Component({
  selector: 'app-all-insights',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-insights.html',
  styleUrl: './all-insights.css'
})
export class AllInsights {
 constructor(
  private insightService: InsightService
 ) {}

 get categories(): InsightCategory[] {
  return this.insightService.getCategories();
 }

 

}