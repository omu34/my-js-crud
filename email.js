// Install required packages:
// npm install nodemailer

// Import required modules
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bernardomuse22@gmail.com',
    pass: '5599emoyo1',
  },
});

// Define the email details
const mailOptions = {
  from: 'bernardomuse22@gmail.com',
  to: 'bernard@belvadigital.com',
  subject: 'Hello from Guys',
  text: 'Welcome to here.',
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
