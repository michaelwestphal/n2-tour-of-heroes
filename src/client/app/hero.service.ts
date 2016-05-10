import { Injectable } from 'angular2/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000)
    );
  }

  getHero(id: number): Promise<Hero> {
    // let hero = HEROES.find(nextHero => nextHero.id === id);
    // if (hero) {
    //   return Promise.resolve(hero);
    // }
    // return Promise.reject('Hero not found for id: ${id}');
    return Promise.resolve(HEROES)
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
