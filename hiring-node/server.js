const express = require('express');
const app = express();
const cors = require('cors');

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

  let del = await Developer.deleteOne(
    { _id: ObjectId(id)}
  )

  if(del.err) throw del.err;
  else res.send();
  
})


app.post("/hireDevelopers", async (req, res) => {


  let data = req.body.data;

  let hiring = [];

  for(let i = 0; i < data.developers.length; i++){
     hiring[i] = new Hiring({
      developerId: ObjectId(data.developers[i]._id),
      startDate: data.startDate,
      endDate: data.endDate
    })

    hiring[i].save()
  }

  res.send();
  
})


app.post("/checkDevelopersAvailability", async (req, res) => {

  let developerIds = req.body.developerIds;
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;

  let busyDevs = [];

 
  for(let i = 0; i < developerIds.length; i++){

    let matchingDates = await Hiring.find({
        developerId: ObjectId(developerIds[i]),
        $or: [ 
          {  // Selected period is inside
            startDate: {$lte: startDate},
            endDate: {$gte: endDate}
          },
          { // Selected period starts inside and continues after
            startDate: {$lte: startDate},
            endDate: {$lte: endDate, $gte: startDate}
          },
          { // Selected period starts before and ends inside
            startDate: {$gte: startDate, $lte: endDate},
            endDate: {$gte: endDate}
          },
          {  // Selected period is starts before, continues inside and ends after
            startDate: {$gte: startDate},
            endDate: {$lte: endDate}
          },
        ]
      })


    if(matchingDates.length > 0){
      busyDevs.push(developerIds[i])
    }

  }

  res.send({ "busyDevs": busyDevs});
})


// -------------------Listen--------------------- //

let server = app.listen(port, function(){
  
  let host = server.address().address;
  let port = server.address().port;

  console.log("Prime hiring on " + host + " on port " + port);
})
