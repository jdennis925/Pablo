import { browser, by, element } from 'protractor';

export class RockPaperScissorsAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
