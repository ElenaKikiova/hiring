const express = require('express');
const app = express();
const cors = require('cors');
var fs = require('fs');
const ObjectId = require('mongodb').ObjectID;

const dbConnection = require('./dbConnection');

const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(cors());


// -------------------ROUTES--------------------- //


// -------------------Listen--------------------- //

let server = app.listen(port, function(){
  
  let host = server.address().address;
  let port = server.address().port;

  console.log("Prime hiring on " + host + " on port " + port);
})
