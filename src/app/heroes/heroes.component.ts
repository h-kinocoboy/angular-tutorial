import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/hero';
import { HEROS } from '../mock/mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  heros: IHero[] = HEROS
  selectedHero?: IHero;

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
