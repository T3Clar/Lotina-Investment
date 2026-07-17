import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreValues } from './core-values';

describe('CoreValues', () => {
  let component: CoreValues;
  let fixture: ComponentFixture<CoreValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreValues],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreValues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
