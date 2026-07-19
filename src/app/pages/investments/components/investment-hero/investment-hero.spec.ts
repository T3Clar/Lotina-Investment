import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentHero } from './investment-hero';

describe('InvestmentHero', () => {
  let component: InvestmentHero;
  let fixture: ComponentFixture<InvestmentHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentHero],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
