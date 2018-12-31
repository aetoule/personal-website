const creds = require('./config');
const nodemailer = require('nodemailer');

var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
}
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });


module.exports = {
    
    send: (req, res) => {
        var name = req.body.name
        var email = req.body.email
        var message = req.body.message
        var content = `name: ${name} \n email: ${email} \n message: ${content} `
    
        console.log('name', name);
      console.log('email', email);
      console.log('message', message);
      
        var mail = {
          from: name,
          to: creds.USER,  
          subject: 'New Message from Contact Form',
          text: content,
          html: `${content}`
        }
      
        transporter.sendMail(mail, (err, data) => {
          if (err) {
            console.log('transporter.sendMail error',err)
    
            res.json({
              msg: 'fail'
            })
          } else {
            res.json({
              msg: 'success'
            })
          }
        })
    }

}