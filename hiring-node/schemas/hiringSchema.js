
//Require Mongoose
const mongoose = require('mongoose');

const HiringSchema = mongoose.Schema({
  "startDate": String,
  "endDate": String,
  "delevoperId": { type: mongoose.Schema.Types.ObjectId, ref: 'Developer' }
},
{ collection: "hiring"}
);

const Hiring = mongoose.model('Hiring', HiringSchema);

module.exports = Hiring;
