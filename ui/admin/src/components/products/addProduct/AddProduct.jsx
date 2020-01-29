import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductForm from "../productForm/ProductForm";
import { useStateValue } from "../.././../state/State";

const AddProduct = ({ updateProducts }) => {
  return <ProductForm updateProducts={updateProducts} />;
};

AddProduct.propTypes = {
  updateProducts: PropTypes.func.isRequired
};

export default AddProduct;
