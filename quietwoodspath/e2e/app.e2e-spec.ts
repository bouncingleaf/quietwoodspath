import { QuietwoodspathPage } from './app.po';

describe('quietwoodspath App', () => {
  let page: QuietwoodspathPage;

  beforeEach(() => {
    page = new QuietwoodspathPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
