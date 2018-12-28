require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const nodemailer = require('nodemailer');
const creds = require('./config');

app.use(bodyParser.json());

// app.get('/', (req, res) => {
// res.send('endpoint live')
// });

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

  app.post('/send', (req, res, next) => {
    console.log(req.body);
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
      text: `${content}`
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
  })

const PORT = 3333;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));
