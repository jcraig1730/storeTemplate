require("../connection");
const Vendor = require("./vendorSchema");

module.exports = {
  createVendor: async vendorInfo => {
    try {
      if (!vendorInfo.name) throw { error: "Vendor name is required" };
      const newVendor = new Vendor(vendorInfo);
      await newVendor.save();
      return newVendor;
    } catch (error) {
      return error;
    }
  },
  readVendor: async id => {
    try {
      const vendor = await Vendor.findById(id);
      return vendor;
    } catch (error) {
      return error;
    }
  },
  readAllVendors: async () => {
    try {
      const vendors = await Vendor.find();
      return vendors;
    } catch (error) {
      return error;
    }
  },
  updateVendor: async (id, newData) => {
    try {
      await Vendor.findByIdAndUpdate(id, newData);
      const updatedVendor = await Vendor.findById(id);
      return updatedVendor;
    } catch (error) {
      return error;
    }
  },
  deleteVendor: async (id, newData) => {
    try {
      return await Vendor.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }
};
