import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemHero } from './ecosystem-hero';

describe('EcosystemHero', () => {
  let component: EcosystemHero;
  let fixture: ComponentFixture<EcosystemHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemHero],
    }).compileComponents();

    fixture = TestBed.createComponent(EcosystemHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
