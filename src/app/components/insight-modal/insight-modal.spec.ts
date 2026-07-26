import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightModal } from './insight-modal';

describe('InsightModal', () => {
  let component: InsightModal;
  let fixture: ComponentFixture<InsightModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightModal],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
