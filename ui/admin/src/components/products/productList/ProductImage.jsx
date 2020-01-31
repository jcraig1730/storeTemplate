import React from "react";

const ProductThumbnail = ({ image }) => {
  return (
    <div>
      <img src={image} alt="Product image" className="img-thumbnail" />
    </div>
  );
};

export default ProductThumbnail;
