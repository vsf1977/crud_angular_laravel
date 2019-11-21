import { AdministracionPage } from './app.po';

describe('administracion App', function() {
  let page: AdministracionPage;

  beforeEach(() => {
    page = new AdministracionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
