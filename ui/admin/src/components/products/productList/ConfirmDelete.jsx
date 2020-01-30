import React from "react";
import PropTypes from "prop-types";

const ConfirmDelete = ({ product, deleteProduct }) => {
  return (
    <div
      className="modal fade"
      id={`confirm-delete-${product._id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="deleteProduct"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteProduct">
              Delete Product
            </h5>
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
            Are you sure you want to delete {product.title}? It will be
            permanently deleted.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={deleteProduct}
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ConfirmDelete.propTypes = {
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired
};

export default ConfirmDelete;
