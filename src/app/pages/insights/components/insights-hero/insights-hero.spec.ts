import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsHero } from './insights-hero';

describe('InsightsHero', () => {
  let component: InsightsHero;
  let fixture: ComponentFixture<InsightsHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsHero],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
