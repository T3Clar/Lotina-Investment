import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentSector } from './investment-sector';

describe('InvestmentSector', () => {
  let component: InvestmentSector;
  let fixture: ComponentFixture<InvestmentSector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentSector],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentSector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
