const mongoose = require("mongoose");
const mongoDBConnectionString =
  process.env.DB_CONNECTION || `mongodb://localhost:27017/testStore`;
module.exports = mongoose.connect(mongoDBConnectionString);
