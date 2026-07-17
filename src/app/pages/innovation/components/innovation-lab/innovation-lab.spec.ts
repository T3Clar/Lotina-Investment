import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationLab } from './innovation-lab';

describe('InnovationLab', () => {
  let component: InnovationLab;
  let fixture: ComponentFixture<InnovationLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationLab],
    }).compileComponents();

    fixture = TestBed.createComponent(InnovationLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
