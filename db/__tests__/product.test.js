const product = require("../product/product");

describe("Product Tests:", () => {
  const testProductDetails = {
    title: "Test title",
    description: "Test description",
    price: 19.99,
    cost: 15.0,
    quantity: 10
  };
  describe("Create Product", () => {
    test("should assign correct data to product", async () => {
      const testProduct = await product.createProduct(testProductDetails);
      expect(testProduct.title).toBe("Test title");
      expect(testProduct.description).toBe("Test description");
      expect(testProduct.price).toBe(19.99);
      expect(testProduct.cost).toBe(15.0);
      expect(testProduct.quantity).toBe(10);
    });
  });
  describe("Read Product", () => {
    test("should find a product by it's id", async () => {
      const testProduct = await product.createProduct(testProductDetails);
      const result = await product.readProduct(testProduct.id);
      expect(result.title).toBe("Test title");
      expect(result.description).toBe("Test description");
      expect(result.price).toBe(19.99);
      expect(result.cost).toBe(15.0);
      expect(result.quantity).toBe(10);
    });
  });
  describe("Read All Products", () => {
    test("should find all products", async () => {
      const result = await product.readAllProducts();
      expect(result.length > 0).toBe(true);
    });
  });
  describe("Update Product", () => {
    test("should update database and return updated object", async () => {
      const testProduct = await product.createProduct(testProductDetails);
      const updatedProduct = await product.updateProduct(testProduct.id, {
        price: 25,
        cost: 17
      });
      expect(updatedProduct.price).toBe(25);
    });
  });
  describe("Delete Product", () => {
    test("should delete a product from the database", async () => {
      const testProduct = await product.createProduct(testProductDetails);
      await product.deleteProduct(testProduct.id);
      const result = await product.readProduct(testProduct.id);
      expect(result).toBe(null);
    });
  });
});
