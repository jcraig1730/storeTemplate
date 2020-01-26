import React, { useState } from "react";
import { createItem, verifyProduct } from "../../../../apiCalls";
import PropTypes from "prop-types";

const AddProduct = ({ vendors, updateProducts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const [vendor, setVendor] = useState("defaultSelect");
  const [isError, setIsError] = useState({});
  const [addProductSuccess, setAddProductSuccess] = useState(false);

  const handleChange = e => {
    const { id, value } = e.target;
    switch (id) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "cost":
        setCost(value);
        break;
      case "vendor":
        setVendor(value);
        break;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const productData = { title, description, quantity, cost, vendor };
    const apiCallData = {
      category: "products",
      data: productData
    };
    const dataValidationCheck = verifyProduct(productData);
    setIsError(dataValidationCheck);
    if (dataValidationCheck.error) return;
    try {
      const result = await createItem(apiCallData);
      console.log(result);
      if (result.status === 201) {
        updateProducts();
        setTitle("");
        setDescription("");
        setCost("");
        setQuantity("");
        setVendor("defaultSelect");
        setAddProductSuccess(true);
      } else {
        throw {
          error: true,
          title: "Server unavailable",
          message: "Server cannot be reached"
        };
      }
    } catch (err) {
      setIsError(err);
    }
  };
  return (
    <form className="border p-3 mr-3 mt-3 rounded" onSubmit={handleSubmit}>
      <div
        class={`mt-0 ml-0 alert alert-danger ${
          isError.error ? "d-block" : "d-none"
        }`}
      >
        <strong>{isError.title}!</strong>
      </div>
      <div
        class={`alert alert-success ${
          addProductSuccess ? "d-block" : "d-none"
        }`}
      >
        <strong>Item added!</strong>
      </div>
      <h3>Add Product</h3>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          onChange={handleChange}
          value={title}
        />{" "}
        <div
          className={`text-danger ${
            isError.productTitle ? "d-block" : "d-none"
          }`}
        >
          {isError.message}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          onChange={handleChange}
          value={description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          className="form-control"
          id="quantity"
          onChange={handleChange}
          value={quantity}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cost">Cost</label>
        <input
          type="text"
          className="form-control"
          id="cost"
          onChange={handleChange}
          value={cost}
        />
      </div>
      <div className="form-group">
        <label htmlFor="vendor">Vendor</label>
        <select
          className="form-control"
          id="vendor"
          value={vendor}
          onChange={handleChange}
        >
          <option className="inactive" value="defaultSelect" disabled selected>
            Please choose
          </option>
          {vendors &&
            vendors.length &&
            vendors.map(vendor => (
              <option className="" value={vendor._id} key={vendor._id}>
                {vendor._id}
              </option>
            ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add
      </button>
    </form>
  );
};

AddProduct.propTypes = {
  vendors: PropTypes.array.isRequired,
  updateProducts: PropTypes.func.isRequired
};

export default AddProduct;
