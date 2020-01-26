import React, { useState } from "react";

import ConfirmDelete from "./ConfirmDelete";

const ListItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(!isHovered);
  const handleDeleteClick = () => {};

  return (
    <div
      className="list-group-item"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <div
        className={`${isHovered ? "visible" : "invisible"} float-right`}
        onClick={handleDeleteClick}
      >
        <div
          // class="btn btn-primary"
          data-toggle="modal"
          data-target="#deleteProductModal"
        >
          <i className="fas fa-trash text-danger pr-3"></i>
        </div>
      </div>
      <div className={`${isHovered ? "visible" : "invisible"} float-right`}>
        <i className="fas fa-edit pr-3 text-primary"></i>
      </div>
      <div>Title: {product.title}</div>
      <div>Description: {product.description}</div>
      <div>Qty: {product.quantity}</div>
      <ConfirmDelete product={product} confirmDelete={handleDeleteClick} />
    </div>
  );
};

export default ListItem;
