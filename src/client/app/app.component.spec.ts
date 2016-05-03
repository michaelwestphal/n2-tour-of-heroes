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
import {AppComponent} from './app.component';

describe('MyApp Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(AppComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
