import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureVentures } from './future-ventures';

describe('FutureVentures', () => {
  let component: FutureVentures;
  let fixture: ComponentFixture<FutureVentures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureVentures],
    }).compileComponents();

    fixture = TestBed.createComponent(FutureVentures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
