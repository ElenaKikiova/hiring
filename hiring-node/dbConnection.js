// Url of the database

const mongoose = require('mongoose');

let baseUrl = "mongodb://admin:admEleKi_02.20@cluster0-shard-00-00.wln1h.mongodb.net:27017,cluster0-shard-00-01.wln1h.mongodb.net:27017,cluster0-shard-00-02.wln1h.mongodb.net:27017/hiring?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectParams = { dbName: "hiring", useNewUrlParser: true };

// Connect to mongoose
mongoose.connect(baseUrl, connectParams);
let db = mongoose.connection;
db.on('error', (err) => {
  console.error.bind(console, 'connection error:');
  throw err;
});
