import React, { useState } from "react";
import PropTypes from "prop-types";

import ConfirmDelete from "./ConfirmDelete";
import AlertBanner from "../../common/alertBanners/AlertBanner";
import { deleteItem } from "../../../utilities";

const ListItem = ({ product, updateProducts, setIsError }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [alert, setAlert] = useState({
    status: false,
    type: "",
    on: "",
    info: {
      title: "",
      message: ""
    }
  });
  const handleMouseOver = e =>
    e === "enter" ? setIsHovered(true) : setIsHovered(false);

  const deleteProduct = async e => {
    try {
      const result = await deleteItem({
        category: "products",
        data: { id: product._id }
      });
      if (result.status !== 204) {
        throw {
          title: "An error has occured in deleting this item. Please try again."
        };
      }
      updateProducts();
    } catch (err) {
      setAlert({ type: "error", status: true, info: err });
    }
  };

  return (
    <div
      className="list-group-item"
      onMouseEnter={() => handleMouseOver("enter")}
      onMouseLeave={handleMouseOver}
    >
      <AlertBanner
        type="error"
        shouldDisplay={alert.status}
        info={alert.info}
      />
      <div className={`${isHovered ? "visible" : "invisible"} float-right`}>
        <a href={`#confirm-delete-${product._id}`} data-toggle={`modal`}>
          <i className="fas fa-trash text-danger"></i>
        </a>
      </div>
      <a className={`${isHovered ? "visible" : "invisible"} float-right`}>
        <i className="fas fa-edit pr-3 text-primary"></i>
      </a>
      <div>Title: {product.title}</div>
      <div>Description: {product.description}</div>
      <div>Qty: {product.quantity}</div>
      <ConfirmDelete product={product} deleteProduct={deleteProduct} />
    </div>
  );
};

ListItem.propTypes = {
  product: PropTypes.object.isRequired,
  updateProducts: PropTypes.func.isRequired
};

export default ListItem;
