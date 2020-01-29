import React from "react";
import PropTypes from "prop-types";
import { useStateValue } from "../../../state/State";

import ListItem from "./ListItem";

const ProductList = ({ updateProducts }) => {
  const [{ products }, dispatch] = useStateValue();
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
  updateProducts: PropTypes.func.isRequired
};

export default ProductList;
