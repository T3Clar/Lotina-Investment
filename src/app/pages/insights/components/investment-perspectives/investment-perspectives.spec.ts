import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPerspectives } from './investment-perspectives';

describe('InvestmentPerspectives', () => {
  let component: InvestmentPerspectives;
  let fixture: ComponentFixture<InvestmentPerspectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentPerspectives],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentPerspectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
