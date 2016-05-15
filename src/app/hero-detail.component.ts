import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeSegment: RouteSegment) { }

  ngOnInit() {
    let id = +this.routeSegment.getParam('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
