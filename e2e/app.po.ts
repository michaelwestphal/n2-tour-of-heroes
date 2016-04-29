export class Ng2TourOfHerosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-tour-of-heros-app p')).getText();
  }
}
