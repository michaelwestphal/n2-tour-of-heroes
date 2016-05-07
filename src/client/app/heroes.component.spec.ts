import {
  beforeEachProviders,
  describe,
  // ddescribe,
  // expect,
  // iit,
  it,
  inject,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
// import {provide} from 'angular2/core';
import { HeroesComponent } from './heroes.component';

describe('MyApp Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(HeroesComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
