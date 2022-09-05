import { Injectable } from '@angular/core';
import { IHero } from './interfaces/hero';
import { HEROS } from './mock/mock-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): IHero[] {
    return HEROS
  }
}
