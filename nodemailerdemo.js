var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shivanimehtakhushi@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'shivanimehta@gmail.com',
  to: 'shivani@webcluesinfotech.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});