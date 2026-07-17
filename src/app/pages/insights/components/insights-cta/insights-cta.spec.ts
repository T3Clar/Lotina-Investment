import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsCta } from './insights-cta';

describe('InsightsCta', () => {
  let component: InsightsCta;
  let fixture: ComponentFixture<InsightsCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsCta],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
