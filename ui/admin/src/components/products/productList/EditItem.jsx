import React from "react";
import PropTypes from "prop-types";
import ProductForm from "../productForm/ProductForm";

const EditItem = ({ item, updateProducts, onClose }) => {
  return (
    <div
      className="modal"
      id={`edit-item-${item._id}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit {item.title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ProductForm
              updateProducts={updateProducts}
              productData={item}
              id={item._id}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EditItem.propTypes = {
  item: PropTypes.object.isRequired,
  updateProducts: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default EditItem;
