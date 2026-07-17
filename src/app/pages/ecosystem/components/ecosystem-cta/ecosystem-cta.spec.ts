import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemCta } from './ecosystem-cta';

describe('EcosystemCta', () => {
  let component: EcosystemCta;
  let fixture: ComponentFixture<EcosystemCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemCta],
    }).compileComponents();

    fixture = TestBed.createComponent(EcosystemCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
