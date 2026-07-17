import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedInsight } from './featured-insight';

describe('FeaturedInsight', () => {
  let component: FeaturedInsight;
  let fixture: ComponentFixture<FeaturedInsight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedInsight],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedInsight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
