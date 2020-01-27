// import express from "express";
// import path from "path";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom";
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Admin page running on port ${port}`));
