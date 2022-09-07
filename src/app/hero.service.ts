import { Injectable } from '@angular/core';
import { IHero } from './interfaces/hero';
import { HEROS } from './mock/mock-hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROS)
    return heroes
  }
}
