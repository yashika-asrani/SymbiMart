const mongoose = require("mongoose");

const MongoURI = "mongodb://localhost:27017/symbimart";

const connect = () => {
  mongoose.connect(MongoURI, () => {
    console.log("Connected to mongo successfully");
  });
};

if (!connect) {
  console.log("Not connected to mongo");
}

module.exports = connect;