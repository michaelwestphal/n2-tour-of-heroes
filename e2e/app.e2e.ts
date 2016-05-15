import { Ng2CliUpgradePage } from './app.po';

describe('ng2-tour-of-heroes App', function() {
  let page: Ng2CliUpgradePage;

  beforeEach(() => {
    page = new Ng2CliUpgradePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-tour-of-heroes works!');
  });
});
