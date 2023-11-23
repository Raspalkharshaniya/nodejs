// var nodeMailer=require('nodemailer');
// var transport=nodeMailer.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth:
//     {
//         user:'raspalkharshania@gmail.com',
//         pass:''
//     }
// });

// var mailOptions = {
//     from:'raspalkharshania@gmail.com',
//     to: 'jimmypark802@gmail.com',
//     subject:'node mail',
//     text:"Welcome to the dark world"
// }
// transport.sendMail(mailOptions,function(error,info)
// {
//     if(error)
//     {
//         console.warn(error);
//     }
//     else{
//         console.warn('email has been send',info.response);
//     }

// });

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raspalkharshania@gmail.com',
    pass: 'fzqo thxd bomx wnau '
  }
});

var mailOptions = {
  from: 'raspalkharshania@gmail.com',
  to: 'jimmypark802@gmail.com',
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
