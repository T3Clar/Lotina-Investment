import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthMetrics } from './growth-metrics';

describe('GrowthMetrics', () => {
  let component: GrowthMetrics;
  let fixture: ComponentFixture<GrowthMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthMetrics],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowthMetrics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
