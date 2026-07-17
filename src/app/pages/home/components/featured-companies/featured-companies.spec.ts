import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCompanies } from './featured-companies';

describe('FeaturedCompanies', () => {
  let component: FeaturedCompanies;
  let fixture: ComponentFixture<FeaturedCompanies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCompanies],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedCompanies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
