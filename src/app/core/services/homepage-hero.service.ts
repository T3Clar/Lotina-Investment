import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HomepageHero {

  id: number;

  title: string;
  subtitle: string;

  primaryButtonText: string;
  primaryButtonLink: string;

  secondaryButtonText: string | null;
  secondaryButtonLink: string | null;

  backgroundImage: string | null;

  overlayOpacity: number;

  alignment: string;

  isVisible: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class HomepageHeroService {

  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/homepage-hero';

  getHero(): Observable<HomepageHero> {
    return this.http.get<HomepageHero>(this.api);
  }

}