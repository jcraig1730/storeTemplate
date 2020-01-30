import React, { useState, useEffect } from "react";
import { createItem, verifyProduct, updateItem } from "../../../utilities";
import PropTypes from "prop-types";
import AlertBanner from "../../common/alertBanners/AlertBanner";
import TextField from "../../common/forms/TextField";
import Select from "../../common/forms/Select";
import SearchFilter from "../../common/search/SearchFilter";
import CheckBoxSelect from "../../common/forms/CheckBoxSelect";
import { useStateValue } from "../.././../state/State";

const ProductForm = ({ updateProducts, productData, id }) => {
  const [{ vendors }, dispatch] = useStateValue();
  let initialFormData;
  let type;
  if (productData !== undefined) {
    const { title, description, quantity, cost } = productData;
    initialFormData = {
      title,
      description,
      quantity,
      cost,
      vendorList: productData.vendors
    };
    type = "update";
  } else {
    initialFormData = {
      title: "",
      description: "",
      quantity: "",
      cost: "",
      vendorList: []
    };
    type = "create";
  }

  const [formData, setFormData] = useState(initialFormData);
  const { title, description, quantity, cost, vendorList } = formData;

  const [filteredVendors, setFilteredVendors] = useState(null);

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

  const handleVendorSearch = str => {
    if (str.length === 0) {
      return setFilteredVendors();
    }
    const regex = new RegExp(`${str.toLowerCase()}`, "i");
    const filtered = vendors.filter(vendor =>
      vendor.name ? vendor.name.match(regex) : false
    );
    setFilteredVendors(filtered);
  };

  const handleVendorSelect = async e => {
    const { vendorList } = formData;
    let idxOfVal = vendorList.indexOf(e.target.id);
    if (idxOfVal > -1) {
      let newList = vendorList
        .slice(0, idxOfVal)
        .concat(vendorList.slice(idxOfVal + 1));
      setFormData({ ...formData, vendorList: newList });
    } else {
      vendorList.push(e.target.id);
      setFormData({ ...formData, vendorList });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const productData = {
      title,
      description,
      quantity,
      cost,
      vendors: vendorList
    };
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
        result = await updateItem(apiCallData, id);
      }
      if (result.status === 201 || result.status === 204) {
        updateProducts();

        setAlert({
          status: true,
          type: "success",
          info: { title: `Item ${type === "create" ? "added" : "edited"}` }
        });
        if (type === "create") {
          setFormData(initialFormData);
        }
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
          value: quantity,
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
      <SearchFilter callback={handleVendorSearch} label="Vendors" />
      <CheckBoxSelect
        selectOptions={filteredVendors || vendors}
        currentlySelected={vendorList}
        onCheck={handleVendorSelect}
      />
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

ProductForm.propTypes = {
  updateProducts: PropTypes.func.isRequired,
  productData: PropTypes.object,
  id: PropTypes.string
};

export default ProductForm;
