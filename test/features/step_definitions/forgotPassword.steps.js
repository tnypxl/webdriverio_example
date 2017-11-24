import {defineSupportCode} from 'cucumber';
import ForgotPasswordPage from '../../site/forgotPassword.page';
import EmailSentPage from '../../site/emailSent.page';


defineSupportCode(({Given, When, Then}) => {
  Given(/^I have forgotten my password$/, () =>  {
    ForgotPasswordPage.open();
  });

  When(/^I retrieve my password using email "([^"]*)"$/, emailAddress => {
    ForgotPasswordPage.retrievePasswordFor(emailAddress);
  });

  Then(/^I confirm an email was sent with my lost password$/, () => {
    expect(browser.getUrl()).to.eq('http://the-internet.herokuapp.com/email_sent');
    expect(EmailSentPage.confirmationMessage.getText()).to.contain("Your e-mail's been sent!");
  });
});