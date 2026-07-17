import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsCta } from './investments-cta';

describe('InvestmentsCta', () => {
  let component: InvestmentsCta;
  let fixture: ComponentFixture<InvestmentsCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsCta],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentsCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
