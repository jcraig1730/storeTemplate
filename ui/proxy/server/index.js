const express = require("express");
const path = require("path");

const adminRouter = require("./admin.js");
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

const handleAdminRoute = router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../dist/index.html"))
);

app.get("/admin/*", handleAdminRoute);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Store running on port ${port}`));
