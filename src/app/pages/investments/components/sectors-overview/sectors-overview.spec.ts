import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsOverview } from './sectors-overview';

describe('SectorsOverview', () => {
  let component: SectorsOverview;
  let fixture: ComponentFixture<SectorsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorsOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(SectorsOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
