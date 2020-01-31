import React from "react";

const ImageCluster = ({ images, mainImgIdx }) => {
  const imagesToCluster = images.filter((image, idx) => idx !== mainImgIdx);

  const mapToRows = imageRow => {
    return imageRow.map(image => {
      return (
        <img
          src={image.location}
          alt="Product image"
          className="p-0 m-0 col-6 img-thumbnail"
        />
      );
    });
  };

  const cluster = (
    <div className="w-100 h-100 background-primary">
      <div className="row border border-rounded">
        {mapToRows(imagesToCluster)}
      </div>
    </div>
  );

  console.log(cluster);
  return cluster;
};

export default ImageCluster;
