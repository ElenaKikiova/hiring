
//Require Mongoose
const mongoose = require('mongoose');

const HiringSchema = mongoose.Schema({
  "developerId": { type: mongoose.Schema.Types.ObjectId, ref: 'Developer' },
  "startDate": String,
  "endDate": String,
},
{ collection: "hiring"}
);

const Hiring = mongoose.model('Hiring', HiringSchema);

module.exports = Hiring;
