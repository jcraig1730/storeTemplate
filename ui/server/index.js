const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const port = 3003;

app.listen(port, () => console.log(`ui listening on port ${port}`));
