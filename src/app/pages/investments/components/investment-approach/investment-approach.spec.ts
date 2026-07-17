import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentApproach } from './investment-approach';

describe('InvestmentApproach', () => {
  let component: InvestmentApproach;
  let fixture: ComponentFixture<InvestmentApproach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentApproach],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentApproach);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
