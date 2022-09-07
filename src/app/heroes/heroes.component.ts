import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { IHero } from '../interfaces/hero';
import { MessageService } from '../message.service';
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
    this.messageService.add('on selected hero.')
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    })
  }

}
