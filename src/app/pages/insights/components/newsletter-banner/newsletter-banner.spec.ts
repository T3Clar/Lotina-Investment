import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterBanner } from './newsletter-banner';

describe('NewsletterBanner', () => {
  let component: NewsletterBanner;
  let fixture: ComponentFixture<NewsletterBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
