import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureStatement } from './future-statement';

describe('FutureStatement', () => {
  let component: FutureStatement;
  let fixture: ComponentFixture<FutureStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureStatement],
    }).compileComponents();

    fixture = TestBed.createComponent(FutureStatement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
