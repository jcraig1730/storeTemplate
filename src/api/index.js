const express = require("express");

const router = express.Router();

router.use("/products", require("./products"));
router.use("/vendors", require("./vendors"));
router.use("/purchases", require("./purchases"));
router.use("/customers", require("./customers"));
router.use("/sales", require("./sales"));

module.exports = router;
