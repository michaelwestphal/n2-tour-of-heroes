import { Component } from 'angular2/core';

import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@Component({
  // moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
  directives: [HeroesComponent],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
