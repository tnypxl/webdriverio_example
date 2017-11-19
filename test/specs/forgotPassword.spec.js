// var expect = require('chai').expect;
// var ForgotPasswordPage = require('../site/forgotPassword.page');
// var EmailSentPage = require('../site/emailSent.page');

import { expect } from "chai";
import ForgotPasswordPage from "../site/forgotPassword.page";
import EmailSentPage from "../site/emailSent.page";

describe('Forgot Password', () => {

  it('redirects to confirmation page when I retrieve my password', () => {
    ForgotPasswordPage.open();
    ForgotPasswordPage.retrievePasswordFor('someone@example.derp');
    expect(browser.getUrl()).to.eq('http://the-internet.herokuapp.com/email_sent');
    expect(EmailSentPage.confirmationMessage.getText()).to.contain("Your e-mail's been sent!");
  });

});