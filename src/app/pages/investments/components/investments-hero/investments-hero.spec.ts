import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsHero } from './investments-hero';

describe('InvestmentsHero', () => {
  let component: InvestmentsHero;
  let fixture: ComponentFixture<InvestmentsHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsHero],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentsHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
