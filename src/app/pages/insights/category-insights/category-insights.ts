import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InsightService } from '../../../services/insight.service';
import { Insight } from '../../../models/insight.model';
import { InsightModal } from '../../../components/insight-modal/insight-modal';

@Component({
  selector: 'app-category-insights',
  standalone: true,
  imports: [CommonModule, RouterLink, InsightModal],
  templateUrl: './category-insights.html',
  styleUrl: './category-insights.css'
})
export class CategoryInsights implements OnInit {
  category = '';
  showModal = false;

selectedInsight!: Insight;

currentIndex = 0;

insights: Insight[] = [];
  constructor(
    private route: ActivatedRoute, 
    private insightService: InsightService
  ) {}
  openInsight(insight: Insight) {

    this.currentIndex = this.insights.findIndex(
        item => item.id === insight.id
    );

    this.selectedInsight = insight;

    this.showModal = true;

    document.body.style.overflow = 'hidden';

}

closeModal() {

    this.showModal = false;

    document.body.style.overflow = 'auto';

}

previousInsight() {

    if (this.currentIndex > 0) {

        this.currentIndex--;

        this.selectedInsight = this.insights[this.currentIndex];

    }

}

nextInsight() {

    if (this.currentIndex < this.insights.length - 1) {

        this.currentIndex++;

        this.selectedInsight = this.insights[this.currentIndex];

    }

}

get hasPrevious(): boolean {

    return this.currentIndex > 0;

}

get hasNext(): boolean {

    return this.currentIndex < this.insights.length - 1;

}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.category = params.get('category') ?? '';
      this.insights = 
      this.insightService.insights.filter(
        insight => 
          insight.category.toLowerCase() ===
        this.category.toLowerCase()
      );

    });

  }
  

}