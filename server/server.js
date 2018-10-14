const apiController = require('./../controller/apiController');
const bodyParser = require('body-parser'); 
const express = require('express');
const path = require('path');
const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './../client')));

app.post('/getResturants', apiController.getResturants); 

app.get('/js', (req, res) => { 
  res.sendFile(path.join(__dirname, './../client/index.js')); 
});

app.get('/css', (req, res) => { 
  res.sendFile(path.join(__dirname, './../client/style.css')); 
});

app.listen(3000, () => { 
  console.log('Listening on port 3000');  
});