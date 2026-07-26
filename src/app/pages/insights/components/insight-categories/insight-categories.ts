import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InsightCategory } from '../../../../models/insight.model';
import { InsightService } from '../../../../services/insight.service';
@Component({
  selector: 'app-insight-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
 templateUrl: './insight-categories.html',
  styleUrl: './insight-categories.css',
})
export class InsightCategories {
  categories: InsightCategory[] = [];
  constructor(private insightService: InsightService) {
    this.categories = this.insightService.categories;
  }
    
}