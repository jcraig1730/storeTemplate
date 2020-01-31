import React from "react";

const ProductThumbnail = ({ image }) => {
  console.log(image);
  return (
    <div>
      <img src={image} alt="Product image" className="img-thumbnail" />
    </div>
  );
};

export default ProductThumbnail;
