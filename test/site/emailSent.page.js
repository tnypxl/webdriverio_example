import Page from './page';

class EmailSentPage extends Page {

  get confirmationMessage() { return browser.element('#content'); }

  open() {
    super.open('email_sent');
  }
}

export default new EmailSentPage();