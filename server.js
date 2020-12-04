const express = require("express");
const cors = require("cors");

const searchRoute = require("./routes/search");
const booksRoute = require("./routes/books");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
app.use(express.static("client/build"));

// Create the connection to our mongo server
require("./database")();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.use("/api/books", booksRoute);
app.use("/api/search", searchRoute);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () =>
  console.log(`API Server now listening on PORT ${PORT}!`)
);
