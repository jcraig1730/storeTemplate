import React from "react";

const ConfirmDelete = ({ product }) => {
  return (
    <div
      class="modal fade"
      id="deleteProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteProduct"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteProduct">
              Delete Product
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete {product.title}? It will be
            permanently deleted.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-danger">
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
