import { Component } from '@angular/core';
import { Insight } from '../../../../models/insight.model';
import { Output, EventEmitter } from '@angular/core';
import { InsightService } from '../../../../services/insight.service';


@Component({
  selector: 'app-featured-insight',
  templateUrl: './featured-insight.html',
  styleUrl: './featured-insight.css',
})
export class FeaturedInsight {
  @Output() readInsight = new EventEmitter<Insight>();
  
  featuredInsight!: Insight;
  constructor(
    private insightService: InsightService
  ) {}

  ngOnInit(): void {

    this.featuredInsight =
      this.insightService.getFeaturedInsight();

  }
openInsight(): void {

  this.readInsight.emit(this.featuredInsight);

}
}
