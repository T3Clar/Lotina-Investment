import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInsights } from './all-insights';

describe('AllInsights', () => {
  let component: AllInsights;
  let fixture: ComponentFixture<AllInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllInsights],
    }).compileComponents();

    fixture = TestBed.createComponent(AllInsights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
