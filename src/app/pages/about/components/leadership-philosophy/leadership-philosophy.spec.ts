import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipPhilosophy } from './leadership-philosophy';

describe('LeadershipPhilosophy', () => {
  let component: LeadershipPhilosophy;
  let fixture: ComponentFixture<LeadershipPhilosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipPhilosophy],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadershipPhilosophy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
