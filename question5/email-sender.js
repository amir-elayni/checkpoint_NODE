var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maisolaamir@hotmail.fr',
    pass: '**********'
  }
});

var mailOptions = {
  from: 'maisolaamir@hotmail.fr',
  to: 'maisolaamir@hotmail.fr',
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