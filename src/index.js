const app = require("./server");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Store API running on ${PORT}`));
