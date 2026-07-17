import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentFocus } from './investment-focus';

describe('InvestmentFocus', () => {
  let component: InvestmentFocus;
  let fixture: ComponentFixture<InvestmentFocus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentFocus],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentFocus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
