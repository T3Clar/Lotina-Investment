import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentMetrics } from './investment-metrics';

describe('InvestmentMetrics', () => {
  let component: InvestmentMetrics;
  let fixture: ComponentFixture<InvestmentMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentMetrics],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentMetrics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
