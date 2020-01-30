const express = require("express");
const { Sale } = require("../../db");

const router = express.Router();

const createSale = async (req, res) => {
  try {
    const saleData = req.body;
    const newSale = await new Sale(saleData).save();
    res.status(201).json(newSale);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body;
    await Sale.findByIdAndUpdate(id, updatedInfo);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getAllSales = async (req, res) => {
  try {
    const results = await Sale.find();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await Sale.findById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// Needs documentatation in readme
//-=-
const getSale = async (req, res) => {
  try {
    const { lookupField } = req.query;
    const { lookupValue } = req.query;
    const results = await Sale.find({ [lookupField]: lookupValue });
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    await Sale.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

router.put("/:id", updateSale);
router.post("/", createSale);
router.get("/:id", getSaleById);
router.get(/\/?/, getSale);
router.get("/", getAllSales);
router.delete("/:id", deleteSale);

module.exports = router;
