import React from "react";

import ListItem from "./ListItem";

const ProductList = ({ products }) => {
  return (
    <ul className="list-group mt-3">
      {products.length &&
        products.map(product => (
          <ListItem product={product} key={product._id} />
        ))}
    </ul>
  );
};

export default ProductList;
