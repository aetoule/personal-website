require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const session = require('express-session');

const controller = require('./controller');
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
  console.log('database running');
}).catch(error => {
  console.log('------------database issue', error);
});

app.post('/send', controller.send);

// endpoints for projects thumbnails
app.get('/api/codeprojects', controller.getCodeProjects);
app.get('/api/designprojects', controller.getDesignProjects);
app.get('/api/onecodeproject/:id', controller.getOneCodeProject);

const PORT = 4001;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));

app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})