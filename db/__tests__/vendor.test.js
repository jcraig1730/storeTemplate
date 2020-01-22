const vendor = require("../vendor");

describe("Vendor Tests:", () => {
  const testVendorDetails = {
    name: "Test vendor",
    phone: 123456789,
    contact: "Jane Doe",
    address: {
      street: "77 Germania",
      city: "San Francisco",
      state: "CA",
      zip: 94117
    },
    owed: 0
  };
  describe("Create Vendor", () => {
    test("should assign correct data to vendor", async () => {
      const testVendor = await vendor.createVendor(testVendorDetails);
      expect(testVendor.name).toBe(testVendorDetails.name);
      expect(testVendor.phone).toBe(testVendorDetails.phone);
      expect(testVendor.contact).toBe(testVendorDetails.contact);
      expect(testVendor.address).toEqual(testVendorDetails.address);
      expect(testVendor.owed).toBe(testVendorDetails.owed);
    });
  });
  describe("Read Vendor", () => {
    test("should find a product by it's id", async () => {
      const testVendor = await vendor.createVendor(testVendorDetails);
      const result = await vendor.readVendor(testVendor.id);
      expect(result.name).toBe(testVendorDetails.name);
      expect(result.phone).toBe(testVendorDetails.phone);
      expect(result.contact).toBe(testVendorDetails.contact);
      expect(result.address.city).toBe(testVendorDetails.address.city);
      expect(result.address.state).toBe(testVendorDetails.address.state);
      expect(result.address.street).toBe(testVendorDetails.address.street);
      expect(result.owed).toBe(testVendorDetails.owed);
    });
  });
  describe("Read All Products", () => {
    test("should find all products", async () => {
      const result = await vendor.readAllVendors();
      expect(result.length > 0).toBe(true);
    });
  });
  describe("Update Vendor", () => {
    test("should update database and return updated object", async () => {
      const testVendor = await vendor.createVendor(testVendorDetails);
      const updatedProduct = await vendor.updateVendor(testVendor.id, {
        owed: 25
      });
      expect(updatedProduct.owed).toBe(25);
    });
  });
  describe("Delete Vendor", () => {
    test("should delete a product from the database", async () => {
      const testVendor = await vendor.createVendor(testVendorDetails);
      await vendor.deleteVendor(testVendor.id);
      const result = await vendor.readVendor(testVendor.id);
      expect(result).toBe(null);
    });
  });
});
