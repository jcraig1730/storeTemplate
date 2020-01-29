import React, { useState, useEffect } from "react";
import { createItem, verifyProduct, updateItem } from "../../../utilities";
import PropTypes from "prop-types";
import AlertBanner from "../../common/alertBanners/AlertBanner";
import TextField from "../../common/forms/TextField";
import Select from "../../common/forms/Select";
import { useStateValue } from "../.././../state/State";

const ProductForm = ({ updateProducts, fields, productData }) => {
  const [{ vendors }, dispatch] = useStateValue();

  let initialFormData;
  let type;
  if (productData !== undefined) {
    const { title, description, quantity, cost, vendor } = productData;
    initialFormData = {
      title,
      description,
      quantity,
      cost,
      vendor
    };
    type = "update";
  } else {
    initialFormData = {
      title: "",
      description: "",
      quantity: "",
      cost: "",
      vendor: ""
    };
    type = "create";
  }

  const [formData, setFormData] = useState(initialFormData);
  const { title, description, quantity, cost, vendor } = formData;

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    on: "",
    info: {
      title: "",
      message: ""
    }
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const productData = { title, description, quantity, cost, vendor };
    const apiCallData = {
      category: "products",
      data: productData
    };

    try {
      const dataValidationCheck = verifyProduct(productData);
      if (dataValidationCheck.error) {
        throw {
          title: dataValidationCheck.title,
          message: dataValidationCheck.message,
          on: "title"
        };
      }

      let result;
      if (type === "create") {
        result = await createItem(apiCallData);
      } else {
        result = await updateItem(apiCallData);
      }
      if (result.status === 201 || result.status === 204) {
        updateProducts();
        setFormData(initialFormData);
        setAlert({
          status: true,
          type: "success",
          info: { title: `Item ${type === "create" ? "added" : "edited"}` }
        });
      } else {
        throw {
          title: "Server unavailable",
          message: "Server cannot be reached"
        };
      }
    } catch (err) {
      setAlert({
        status: true,
        type: "error",
        info: { title: err.title, message: err.message },
        on: err.on
      });
    }
  };

  return (
    <form className="border p-3 mr-3 mt-3 rounded" onSubmit={handleSubmit}>
      <AlertBanner
        type={alert.type}
        shouldDisplay={alert.status}
        info={alert.info}
      />
      <h3>{type === "update" ? "Edit" : "Add"} Product</h3>
      <TextField
        options={{
          type: "text",
          id: "title",
          onChange: handleChange,
          value: title,
          label: "Title",
          alert
        }}
      />
      <TextField
        options={{
          type: "text",
          id: "description",
          onChange: handleChange,
          value: description,
          label: "Description",
          alert
        }}
      />
      <TextField
        options={{
          type: "text",
          id: "quantity",
          onChange: handleChange,
          value: description,
          label: "Quantity",
          alert
        }}
      />
      <TextField
        options={{
          type: "text",
          id: "cost",
          onChange: handleChange,
          value: cost,
          label: "Cost",
          alert
        }}
      />
      <Select
        options={{
          label: "Vendor",
          id: "vendor",
          value: vendor,
          onChange: handleChange,
          selectOptions: vendors
        }}
      />
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

ProductForm.propTypes = {
  updateProducts: PropTypes.func.isRequired,
  productData: PropTypes.object
};

export default ProductForm;
