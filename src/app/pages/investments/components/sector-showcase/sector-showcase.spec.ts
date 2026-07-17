import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorShowcase } from './sector-showcase';

describe('SectorShowcase', () => {
  let component: SectorShowcase;
  let fixture: ComponentFixture<SectorShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorShowcase],
    }).compileComponents();

    fixture = TestBed.createComponent(SectorShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
