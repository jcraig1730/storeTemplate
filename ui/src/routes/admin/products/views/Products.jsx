import React, { useEffect, useState } from "react";

import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/AddProduct";
import { getAllItems } from "../../../../apiCalls";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [isError, setIsError] = useState({});

  const updateProducts = async () => {
    try {
      const products = await getAllItems({ category: "products" });
      console.log(products.status, "hi");
      if (products.status !== 200) {
        throw { error: true, message: "Server unavailable" };
      }
      setProductList(products.data);
      console.log(products);
    } catch (err) {
      console.log(err);
      setIsError(err);
      console.log(err);
    }
  };

  const updateVendors = async () => {
    try {
      const vendors = await getAllItems({ category: "vendors" });
      setVendorList(vendors.data);
    } catch (err) {
      console.log("in vendor error");
      setProductList(["An error has occured on this pages"]);
      console.log(err);
    }
  };

  useEffect(() => {
    updateProducts();
    updateVendors();
  }, []);

  return (
    <div>
      <div
        class={`alert alert-danger ${isError.error ? "d-block" : "d-none"} `}
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
            />
          </div>
          <div className="col"></div>
          <div
            style={
              isError.error ? { left: "50%", top: "50px" } : { left: "50%" }
            }
            className="w-50 fixed-top"
          >
            <AddProduct vendors={vendorList} updateProducts={updateProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
