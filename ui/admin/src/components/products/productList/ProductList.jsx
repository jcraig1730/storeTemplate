import React, { useEffect } from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem";

const ProductList = ({ products, updateProducts }) => {
  useEffect(() => {}, []);
  return (
    <ul className="list-group mt-3">
      {products &&
        products &&
        products.map(product => (
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
