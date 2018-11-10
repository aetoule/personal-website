require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');

app.use(bodyParser.json());

// app.get('/', (req, res) => {
// res.send('endpoint live')
// });

const PORT = 3333;
app.listen(PORT, ()=> console.log(`Server listening on port PORT`));
