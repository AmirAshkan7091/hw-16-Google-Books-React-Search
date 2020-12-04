const mongoose = require("mongoose");

const db_url = `mongodb+srv://user:user@mycluster-i5mnv.mongodb.net/books?retryWrites=true&w=majority`;

const createConnection = () => {
  try {
    mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    mongoose.connection.once("open", () => {
      console.log("[database]: is connected to MongoDB");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = createConnection;
