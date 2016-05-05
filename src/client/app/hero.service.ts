import {Injectable} from 'angular2/core';
// import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  // getHeros(): Hero[] {
  getHeroes() {
    return HEROES;
  }
}
