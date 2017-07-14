import { Injectable } from '@angular/core';
import { HeroModel } from './hero-model';
import { HEROES } from './heroes-dummy';

@Injectable()
export class HeroService {
  
  constructor() { }

  getHeroes(): Promise<HeroModel[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<HeroModel> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}
