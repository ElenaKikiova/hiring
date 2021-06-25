
//Require Mongoose
const mongoose = require('mongoose');

const DeveloperSchema = mongoose.Schema({
  "name": String,
  "email": String,
  "phone": String,
  "location": String,
  "pfp": String,
  "price": Number,
  "technology": Number,
  "description": String,
  "years": Number,
  "native_lang": Number,
  "linkedIn": String,
},
{ collection: "developers"}
);

const Developer = mongoose.model('Developer', DeveloperSchema);

module.exports = Developer;
