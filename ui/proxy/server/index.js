const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/admin*", (req, res) => {
  app.use(express.static(path.join(__dirname, "../dist")));
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, "../customerDist")));
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Store running on port ${port}`));
