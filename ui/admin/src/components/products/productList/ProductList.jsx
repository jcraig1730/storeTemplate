import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useStateValue } from "../../../state/State";

import ListItem from "./ListItem";
import Pagination from "../../common/pagination/Pagination";

const ProductList = ({ updateProducts, productPagination }) => {
  const [{ products }, dispatch] = useStateValue();
  return (
    <div>
      <ul className="list-group p-0">
        <div className="list-group-item">
          <h3 className="lead-text">Inventory</h3>
        </div>
        {products.map(product => (
          <ListItem
            product={product}
            updateProducts={updateProducts}
            key={product._id}
          />
        ))}
      </ul>
      <div className="container mw-100">
        <Pagination
          pagination={productPagination}
          route="products"
          callback={updateProducts}
        />
      </div>
    </div>
  );
};

ProductList.propTypes = {
  updateProducts: PropTypes.func.isRequired,
  productPagination: PropTypes.object.isRequired
};

export default ProductList;
