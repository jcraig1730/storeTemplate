import React from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem";

const ProductList = ({ products, updateProducts }) => {
  return (
    <ul className="list-group mt-3">
      {products.map(product => (
        <ListItem
          product={product}
          updateProducts={updateProducts}
          key={product._id}
        />
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  updateProducts: PropTypes.func.isRequired
};

export default ProductList;
