import { Injectable } from '@angular/core';
import { IHero } from './interfaces/hero';
import { HEROS } from './mock/mock-hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<IHero[]> {
    this.messageService.add('HeroService: Fetched heroes')
    const heroes = of(HEROS)
    return heroes
  }
}
