const mongoose = require("mongoose");
const connectionString = require("./devSetup");

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connection = mongoose.connect(connectionString, connectionOptions);

module.exports = connection;
