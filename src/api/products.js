const express = require("express");
const { Product } = require("../../db");

const router = express.Router();

const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await new Product(productData).save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body;
    await Product.findByIdAndUpdate(id, updatedInfo);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const results = await Product.find();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await Product.findById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// Needs documentatation in readme
//-=-
const getProduct = async (req, res) => {
  try {
    const { lookupField } = req.query;
    const { lookupValue } = req.query;
    const results = await Product.find({ [lookupField]: lookupValue });
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

router.put("/:id", updateProduct);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.get(/\/?/, getProduct);
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);

module.exports = router;
