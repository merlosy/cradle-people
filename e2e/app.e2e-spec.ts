import { CradlePeoplePage } from './app.po';

describe('cradle-people App', () => {
  let page: CradlePeoplePage;

  beforeEach(() => {
    page = new CradlePeoplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
