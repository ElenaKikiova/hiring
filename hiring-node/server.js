const express = require('express');
const app = express();
const cors = require('cors');
var fs = require('fs');
const ObjectId = require('mongodb').ObjectID;

const dbConnection = require('./dbConnection');

const Developer = require('./schemas/developerSchema');
const Hiring = require('./schemas/hiringSchema');

const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(cors());


// -------------------ROUTES--------------------- //

app.get("/getDevelopers", async (req, res) => {

  let developers = await Developer.find({});

  res.send(developers);
})


app.post("/addDeveloper", async (req, res) => {
  
  let developer = req.body.developer;

  let add = await new Developer(
    {
      "name": developer.name,
      "email": developer.email,
      "phone": developer.phone,
      "location": developer.location,
      "pfp": developer.pfp,
      "price": developer.price,
      "technology": developer.technology,
      "description": developer.description,
      "years": developer.years,
      "native_lang": developer.native_lang,
      "linkedIn": developer.linkedIn,
    }
  ).save().then((savedDeveloper, err) => {

    if(err) throw err;
    
    console.log(savedDeveloper)

    res.send(savedDeveloper);
  });
  
})


app.post("/editDeveloper", async (req, res) => {

  
  let developer = req.body.developer;

  let update = await Developer.updateOne(
    { _id: ObjectId(developer._id)},
    { 
      "name": developer.name,
      "email": developer.email,
      "phone": developer.phone,
      "location": developer.location,
      "pfp": developer.pfp,
      "price": developer.price,
      "technology": developer.technology,
      "description": developer.description,
      "years": developer.years,
      "native_lang": developer.native_lang,
      "linkedIn": developer.linkedIn,
    }
  )

  if(update.err) throw update.err;
  else res.send(developer);
  
})


app.post("/deleteDeveloper", async (req, res) => {

  
  let id = req.body.id;

  console.log(id);

  let del = await Developer.deleteOne(
    { _id: ObjectId(id)}
  )

  if(del.err) throw del.err;
  else res.send();
  
})


app.post("/hireDevelopers", async (req, res) => {

  
  let data = req.body.data;
  console.log(data)

  let hiring = [];

  for(let i = 0; i < data.developers.length; i++){
     hiring[i] = new Hiring({
      developerId: data.developers[i]._id,
      startDate: data.startDate,
      endDate: data.endDate
    })
  }

  console.log(hiring);

  res.send();
  
})



// -------------------Listen--------------------- //

let server = app.listen(port, function(){
  
  let host = server.address().address;
  let port = server.address().port;

  console.log("Prime hiring on " + host + " on port " + port);
})
