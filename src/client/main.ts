import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {Ng2TourOfHerosApp} from './app/ng2-tour-of-heros.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2TourOfHerosApp);
