const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'leylali@qq.com',
  from: 'leylali@qq.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);