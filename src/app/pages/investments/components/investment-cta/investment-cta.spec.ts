import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCta } from './investment-cta';

describe('InvestmentCta', () => {
  let component: InvestmentCta;
  let fixture: ComponentFixture<InvestmentCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentCta],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
