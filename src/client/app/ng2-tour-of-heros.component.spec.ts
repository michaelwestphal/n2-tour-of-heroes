import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2TourOfHerosApp} from '../app/ng2-tour-of-heros.component';

beforeEachProviders(() => [Ng2TourOfHerosApp]);

describe('App: Ng2TourOfHeros', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2TourOfHerosApp], (app: Ng2TourOfHerosApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2TourOfHerosApp], (app: Ng2TourOfHerosApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

