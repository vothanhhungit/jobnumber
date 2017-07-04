import { JobnumberPage } from './app.po';

describe('jobnumber App', () => {
  let page: JobnumberPage;

  beforeEach(() => {
    page = new JobnumberPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
