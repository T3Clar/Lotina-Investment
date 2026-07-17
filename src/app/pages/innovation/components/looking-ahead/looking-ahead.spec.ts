import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingAhead } from './looking-ahead';

describe('LookingAhead', () => {
  let component: LookingAhead;
  let fixture: ComponentFixture<LookingAhead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookingAhead],
    }).compileComponents();

    fixture = TestBed.createComponent(LookingAhead);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
