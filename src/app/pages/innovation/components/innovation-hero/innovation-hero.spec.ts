import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationHero } from './innovation-hero';

describe('InnovationHero', () => {
  let component: InnovationHero;
  let fixture: ComponentFixture<InnovationHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationHero],
    }).compileComponents();

    fixture = TestBed.createComponent(InnovationHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
