import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightCategories } from './insight-categories';

describe('InsightCategories', () => {
  let component: InsightCategories;
  let fixture: ComponentFixture<InsightCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightCategories],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightCategories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
