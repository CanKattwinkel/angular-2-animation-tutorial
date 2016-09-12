import { Angular2AniamteTutorialPage } from './app.po';

describe('angular-2-aniamte-tutorial App', function() {
  let page: Angular2AniamteTutorialPage;

  beforeEach(() => {
    page = new Angular2AniamteTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
