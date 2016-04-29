import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-tour-of-heros-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'ng2-tour-of-heros.component.html',
  styleUrls: ['ng2-tour-of-heros.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
])
export class Ng2TourOfHerosApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
