import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsGrid } from './insights-grid';

describe('InsightsGrid', () => {
  let component: InsightsGrid;
  let fixture: ComponentFixture<InsightsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
