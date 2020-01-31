import React, { useState } from "react";
import PropTypes from "prop-types";

import ConfirmDelete from "./ConfirmDelete";
import EditItem from "./EditItem";
import AlertBanner from "../../common/alertBanners/AlertBanner";
import { deleteItem } from "../../../utilities";
import ProductThumbnail from "./ProductImage";
import ImageCluster from "./ImageCluster";

const ListItem = ({ product, updateProducts }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
      onMouseEnter={() => handleMouseOver("enter")}
      onMouseLeave={handleMouseOver}
    >
      <AlertBanner
        type={alert.type}
        shouldDisplay={alert.status}
        info={alert.info}
      />
      <div className="list-group-item m-0 p-0 h-100">
        <div className="row">
          <div className="col-6 pr-0 align-self-start">
            <div className="col list-group p-0">
              <li className="list-group-item h-25 m-0 pt-1 pl-1 text-wrap text-break">
                Title: {product.title}
              </li>
              <li className="list-group-item h-50 m-0 pt-1 pl-1 overflow-auto overflow-auto  text-wrap text-break">
                Description: {product.description}
              </li>
              <li className="list-group-item h-25 m-0 pt-1 pl-1 text-wrap  text-break">
                Qty: {product.quantity}
              </li>
            </div>
          </div>

          <div className="col-3 h-100 px-0 d-flex align-self-start mb-0">
            <div className="card">
              {product.images.length && (
                <ProductThumbnail
                  image={product.images[product.mainImage].location}
                />
              )}
            </div>
          </div>
          <div className="col-2 d-flex align-self-start h-100">
            <ImageCluster
              images={product.images}
              mainImgIdx={product.mainImage}
            />
          </div>
          <div
            className={`${
              isHovered ? "visible" : "invisible"
            } d-flex flex-column justify-content-center align-items-center col-1 pl-0 align-self-middle`}
          >
            <a href={`#confirm-delete-${product._id}`} data-toggle={`modal`}>
              <i className="fas fa-trash text-danger text-right"></i>
            </a>
            <a
              href={`#edit-item-${product._id}`}
              onClick={() => setIsEditing(true)}
              data-toggle={`modal`}
            >
              <i className="fas fa-edit text-primary text-right"></i>
            </a>
          </div>
        </div>
        {(isHovered || isEditing) && (
          <EditItem
            item={product}
            updateProducts={updateProducts}
            onClose={() => setIsEditing(false)}
          />
        )}
        <ConfirmDelete product={product} deleteProduct={deleteProduct} />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  product: PropTypes.object.isRequired,
  updateProducts: PropTypes.func.isRequired
};

export default ListItem;
