'use strict';
// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
const nodeMailer = async (order) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'missouri42@ethereal.email',
      pass: 'CCxZ2pbFpnWCVNMhZh',
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: order.user.email, // list of receivers
    subject: order.id, // Subject line
    text: 'Here is your order details', // plain text body
    html: `<b> Hey ${order.user.name} thanks! , Here are  your order details </b> ${order.orderItems.name} ${order.orderItems.name}`, // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

// main().catch(console.error);

export default nodeMailer;
