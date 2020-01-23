const express = require("express");
const { Purchase } = require("../../db");

const router = express.Router();

const createPurchase = async (req, res) => {
  try {
    const purchaseData = req.body;
    const newPurchase = await new Purchase(purchaseData).save();
    res.status(204);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updatePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body;
    const updatedPurchase = await Purchase.findByIdAndUpdate(id, updatedInfo);
    res.status(200).json(updatedPurchase);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getAllPurchases = async (req, res) => {
  try {
    const results = await Purchase.find();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getPurchaseById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await Purchase.findById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// Needs documentatation in readme
//-=-
const getPurchase = async (req, res) => {
  try {
    const { lookupField } = req.query;
    const { lookupValue } = req.query;
    const results = await Purchase.find({ [lookupField]: lookupValue });
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deletePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    await Purchase.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

router.put("/:id", updatePurchase);
router.post("/", createPurchase);
router.get("/:id", getPurchaseById);
router.get(/\/?/, getPurchase);
router.get("/", getAllPurchases);
router.delete("/:id", deletePurchase);

module.exports = router;
