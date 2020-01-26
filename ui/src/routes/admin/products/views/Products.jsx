import React, { useEffect, useState } from "react";

import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/AddProduct";
import Axios from "axios";

const Products = () => {
  const { apiUrl } = window;
  const [productList, setProductList] = useState([]);
  const [vendorList, setVendorList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await Axios.get(`${apiUrl}/products`);
        const vendors = await Axios.get(`${apiUrl}/vendors`);
        setProductList(products.data);
        setVendorList(vendors.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductList products={productList} />
        </div>
        <div className="col"></div>
        <div style={{ left: "50%" }} className="w-50 fixed-top">
          <AddProduct vendors={vendorList} />
        </div>
      </div>
    </div>
  );
};

export default Products;
