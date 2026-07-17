import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemDiagram } from './ecosystem-diagram';

describe('EcosystemDiagram', () => {
  let component: EcosystemDiagram;
  let fixture: ComponentFixture<EcosystemDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemDiagram],
    }).compileComponents();

    fixture = TestBed.createComponent(EcosystemDiagram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
