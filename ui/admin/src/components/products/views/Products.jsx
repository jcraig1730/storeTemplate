import React, { useEffect, useState } from "react";

import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/AddProduct";
import { getAllItems } from "../../../apiCalls";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [isError, setIsError] = useState({});

  const updateProducts = async () => {
    try {
      const products = await getAllItems({ category: "products" });
      if (products.status !== 200) {
        throw { error: true, message: "Server unavailable" };
      }
      setProductList(products.data);
    } catch (err) {
      setIsError(err);
    }
  };

  const updateVendors = async () => {
    try {
      const vendors = await getAllItems({ category: "vendors" });
      if (vendors.status !== 200) {
        throw { error: true, message: "Server unavailable" };
      }
      setVendorList(vendors.data);
    } catch (err) {
      setIsError(err);
    }
  };

  useEffect(() => {
    updateProducts();
    updateVendors();
  }, []);

  return (
    <div>
      <div
        className={`alert alert-danger ${
          isError.error ? "d-block" : "d-none"
        } `}
        role="alert"
      >
        {isError.message}
      </div>
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col" style={{ top: "-15px" }}>
            <ProductList
              products={productList}
              updateProducts={updateProducts}
              setIsError={setIsError}
            />
          </div>
          <div className="col"></div>
          <div
            style={
              isError.error ? { left: "50%", top: "50px" } : { left: "50%" }
            }
            className="w-50 fixed-top"
          >
            <AddProduct
              vendors={vendorList}
              updateProducts={updateProducts}
              setIsError={setIsError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
