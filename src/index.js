const app = require("./server");
const api = require("./api");
const PORT = process.env.PORT || 8000;

console.log("index page");

app.get("/", (req, res) => res.status(200).json({ check: "Sanity" }));

app.use("/api", api);

app.listen(PORT, () => console.log(`Store API running on ${PORT}`));
