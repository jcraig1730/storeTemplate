const express = require("express");
const { Vendor } = require("../../db");

const router = express.Router();

const createVendor = async (req, res) => {
  try {
    const vendorData = req.body;
    const newVendor = await new Vendor(vendorData).save();
    res.status(201).json(newVendor);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body;
    const updatedVendor = await Vendor.findByIdAndUpdate(id, updatedInfo);
    res.status(200).json(updatedVendor);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getAllVendors = async (req, res) => {
  try {
    const results = await Vendor.find();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getVendorById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await Vendor.findById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// Needs documentatation in readme
//-=-
const getVendor = async (req, res) => {
  try {
    const { lookupField } = req.query;
    const { lookupValue } = req.query;
    const results = await Vendor.find({ [lookupField]: lookupValue });
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteVendor = async (req, res) => {
  try {
    const { id } = req.params;
    await Vendor.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

router.put("/:id", updateVendor);
router.post("/", createVendor);
router.get("/:id", getVendorById);
router.get(/\/?/, getVendor);
router.get("/", getAllVendors);
router.delete("/:id", deleteVendor);

module.exports = router;
