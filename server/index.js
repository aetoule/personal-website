require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const session = require('express-session');

// const nodemailer = require('nodemailer');
// const creds = require('./config');
const controller = require('./controller');
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.redirect('/');
// });

// massive(process.env.CONNECTION_STRING).then(database => {
//   app.set('db', database);
//   console.log('database running');
// }).catch(error => {
//   console.log('------------database issue', error);
// });

app.post('/send', controller.send);

const PORT = 3333;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));
