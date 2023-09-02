const mongoose = require("mongoose");

const { MONGO_URL } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Database connection is successful...");
    })
    .catch((error) => {
      console.log("Database connection not successful...");
      console.error(error);
      process.exit(1);
    });
};
