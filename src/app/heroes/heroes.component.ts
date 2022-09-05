import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { IHero } from '../interfaces/hero';
import { HEROS } from '../mock/mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  heroes: IHero[] = []
  selectedHero?: IHero

  onSelect(hero: IHero): void {
    this.selectedHero = hero
  }

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }

}
