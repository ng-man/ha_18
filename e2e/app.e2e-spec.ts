import { Ha18Page } from './app.po';

describe('ha18 App', () => {
  let page: Ha18Page;

  beforeEach(() => {
    page = new Ha18Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
