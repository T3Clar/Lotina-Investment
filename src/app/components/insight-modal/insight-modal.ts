import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Insight } from '../../models/insight.model';

@Component({
  selector: 'app-insight-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insight-modal.html',
  styleUrl: './insight-modal.css',
})
export class InsightModal {
  @HostListener('document: keydown.escape')
  onEscape(): void {
    if(this.show) {
      this.closeModal();
    }
  }
    @Input() show = false;

  @Input() insight: Insight | null = null;
  @Input() hasPrevious = false;

@Input() hasNext = false;

  @Output() close = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

@Output() next = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  previousInsight(): void {
  this.previous.emit();
}

nextInsight(): void {
  this.next.emit();
}
}
