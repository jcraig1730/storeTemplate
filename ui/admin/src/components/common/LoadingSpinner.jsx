import React from "react";

const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center">
    <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
