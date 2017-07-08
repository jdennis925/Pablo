import { RockPaperScissorsAngularPage } from './app.po';

describe('rock-paper-scissors-angular App', () => {
  let page: RockPaperScissorsAngularPage;

  beforeEach(() => {
    page = new RockPaperScissorsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
