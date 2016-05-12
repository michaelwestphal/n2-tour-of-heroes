import { Injectable } from 'angular2/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return Promise.resolve(HEROES)
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
