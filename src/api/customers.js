const express = require("express");
const { Customer } = require("../../db");

const router = express.Router();

const createCustomer = async (req, res) => {
  try {
    const customerData = req.body;
    const newCustomer = await new Customer(customerData).save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body;
    await Customer.findByIdAndUpdate(id, updatedInfo);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const results = await Customer.find();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await Customer.findById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

// Needs documentatation in readme
//-=-
const getCustomer = async (req, res) => {
  try {
    const { lookupField } = req.query;
    const { lookupValue } = req.query;
    const results = await Customer.find({ [lookupField]: lookupValue });
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ err });
  }
};

router.put("/:id", updateCustomer);
router.post("/", createCustomer);
router.get("/:id", getCustomerById);
router.get(/\/?/, getCustomer);
router.get("/", getAllCustomers);
router.delete("/:id", deleteCustomer);

module.exports = router;
