import { ItelligenceTestPage } from './app.po';

describe('itelligence-test App', function() {
  let page: ItelligenceTestPage;

  beforeEach(() => {
    page = new ItelligenceTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
