import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSynergies } from './business-synergies';

describe('BusinessSynergies', () => {
  let component: BusinessSynergies;
  let fixture: ComponentFixture<BusinessSynergies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSynergies],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessSynergies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
