import React, { useState } from "react";
import PropTypes from "prop-types";

import ConfirmDelete from "./ConfirmDelete";
import { deleteItem } from "../../../../apiCalls";

const ListItem = ({ product, updateProducts }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = e =>
    e === "enter" ? setIsHovered(true) : setIsHovered(false);

  const deleteProduct = async e => {
    try {
      await deleteItem({ category: "products", data: { id: product._id } });
      updateProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="list-group-item"
      onMouseEnter={() => handleMouseOver("enter")}
      onMouseLeave={handleMouseOver}
    >
      <div className={`${isHovered ? "visible" : "invisible"} float-right`}>
        <div data-toggle="modal" data-target={`#confirm-delete-${product._id}`}>
          <i className="fas fa-trash text-danger"></i>
        </div>
      </div>
      <div className={`${isHovered ? "visible" : "invisible"} float-right`}>
        <i className="fas fa-edit pr-3 text-primary"></i>
      </div>
      <div>Title: {product.title}</div>
      <div>Description: {product.description}</div>
      <div>Qty: {product.quantity}</div>
      {<ConfirmDelete product={product} deleteProduct={deleteProduct} />}
    </div>
  );
};

ConfirmDelete.propTypes = {
  product: PropTypes.object.isRequired,
  updateProducts: PropTypes.func.isRequired
};

export default ListItem;
