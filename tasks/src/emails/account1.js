const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = 'xxxxxxxxxxxxx'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'info@itsali.com',
    from: 'info@itsali.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})