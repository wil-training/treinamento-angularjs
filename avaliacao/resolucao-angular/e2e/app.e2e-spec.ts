import { ResolucaoAngularPage } from './app.po';

describe('resolucao-angular App', () => {
  let page: ResolucaoAngularPage;

  beforeEach(() => {
    page = new ResolucaoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
