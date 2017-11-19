import Page from './page';

class ForgotPasswordPage extends Page {

  get retrievePassword() { return browser.element('#forgot_password #form_submit'); }
  get email() { return browser.element('#forgot_password #email'); }

  open() {
    super.open('forgot_password');
  }

  retrievePasswordFor(emailAddress) {
    this.email.setValue(emailAddress);
    this.retrievePassword.click();
  }
}

export default new ForgotPasswordPage();