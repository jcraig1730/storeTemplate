const express = require("express");
const { Product } = require("../../db");

const router = express.Router();

const getProducts = async (req, res) => {
  try {
    let { limit, offset } = req.params;
    if (limit === undefined) {
      limit = 100;
    }
    if (offset === undefined) {
      offset = 0;
    }

    const results = await Product.find()
      .skip(offset)
      .limit(limit);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json(err);
  }
};

router.get("/", getProducts);

module.exports = router;
