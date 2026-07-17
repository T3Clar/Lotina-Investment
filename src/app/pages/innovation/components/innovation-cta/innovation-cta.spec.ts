import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationCta } from './innovation-cta';

describe('InnovationCta', () => {
  let component: InnovationCta;
  let fixture: ComponentFixture<InnovationCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationCta],
    }).compileComponents();

    fixture = TestBed.createComponent(InnovationCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
