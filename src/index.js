const app = require("./server");
const api = require("./api");
const customerApi = require("./customerApi");
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => res.status(200).json({ check: "Sanity" }));

app.use("/api", api);

app.use("/api/customer", customerApi);

app.listen(PORT, () => console.log(`Store API running on ${PORT}`));
