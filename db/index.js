require("./connection");

const Product = require("./product/productSchema");
const Vendor = require("./vendor/vendorSchema");
const Purchase = require("./purchase/purchaseSchema");
const Sale = require("./sale/saleSchema");
const Customer = require("./customer/customerSchema");

const db = { Product, Vendor, Purchase, Sale, Customer };

module.exports = db;
