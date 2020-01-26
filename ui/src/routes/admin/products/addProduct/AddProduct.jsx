import React, { useState } from "react";
import Axios from "axios";

const AddProduct = ({ vendors }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const [vendor, setVendor] = useState("");

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
    const result = await Axios.post(`${window.apiUrl}/products`, {
      title,
      description,
      quantity,
      cost,
      vendor
    });
  };
  return (
    <form className="border p-3 mr-3 mt-3 rounded" onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          onChange={handleChange}
          value={title}
        />
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
        <select className="form-control" id="vendor" onChange={handleChange}>
          <option className="inactive" disabled selected>
            Please choose
          </option>
          {vendors.length &&
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

export default AddProduct;
