import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-growth-metrics',
  standalone: true,
  templateUrl: './growth-metrics.html',
  styleUrl: './growth-metrics.css'
})
export class GrowthMetrics implements AfterViewInit {

  visible = false;

  @ViewChild('section')
  section!: ElementRef<HTMLElement>;

  ngAfterViewInit() {

    const observer = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {

        this.visible = true;

        observer.disconnect();

      }

    });

    observer.observe(this.section.nativeElement);

  }

}