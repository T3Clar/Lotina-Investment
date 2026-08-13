import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomepageHeroService } from '../../../../core/services/homepage-hero.service';
import { HomepageHero } from '../../../../core/services/homepage-hero.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero {

  private cdr = inject(ChangeDetectorRef);

  private heroService = inject(HomepageHeroService);

  hero: HomepageHero = {
    id: 0,
    title: '',
    subtitle: '',
    primaryButtonText: '',
    primaryButtonLink: '',
    secondaryButtonText: '',
    secondaryButtonLink: '',
    backgroundImage: '',
    overlayOpacity: 50,
    alignment: 'left',
    isVisible: true
  };

  ngOnInit() {
    this.heroService.getHero().subscribe(hero => {
      this.hero = hero;
      this.cdr.detectChanges();
    });
  }

}