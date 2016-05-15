export class Ng2CliUpgradePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-tour-of-heroes-app h1')).getText();
  }
}
