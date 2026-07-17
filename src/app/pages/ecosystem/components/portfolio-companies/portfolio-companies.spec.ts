import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCompanies } from './portfolio-companies';

describe('PortfolioCompanies', () => {
  let component: PortfolioCompanies;
  let fixture: ComponentFixture<PortfolioCompanies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCompanies],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioCompanies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
