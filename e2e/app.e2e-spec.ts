import { Angular2animateTutorialPage } from './app.po';

describe('angular-2-animate-tutorial App', function() {
  let page: Angular2animateTutorialPage;

  beforeEach(() => {
    page = new Angular2animateTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
