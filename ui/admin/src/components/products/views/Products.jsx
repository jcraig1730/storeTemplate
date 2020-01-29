import React, { useEffect, useState } from "react";

import { useStateValue } from "../../../state/State";
import { types } from "../../../state/reducers";
import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/AddProduct";
import LoadingSpinner from "../../common/LoadingSpinner";
import { getAllItems } from "../../../utilities";
import AlertBanner from "../../common/alertBanners/AlertBanner";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState({
    status: false,
    type: "",
    on: "",
    info: {
      title: "",
      message: ""
    }
  });
  const [{ products, vendors }, dispatch] = useStateValue();
  const { UPDATE_PRODUCTS, UPDATE_VENDORS } = types;

  const updateProducts = async () => {
    try {
      const products = await getAllItems({ category: "products" });
      if (products.status === 200) {
        dispatch({ type: UPDATE_PRODUCTS, payload: products.data });
      } else {
        throw { title: "Server unavailable", message: "Server unavailable" };
      }
    } catch (err) {
      setAlert({ status: true, type: "error", info: err });
    }
  };

  const updateVendors = async () => {
    try {
      const vendors = await getAllItems({ category: "vendors" });
      if (vendors.status === 200) {
        dispatch({ type: UPDATE_VENDORS, payload: vendors.data });
      } else {
        throw { title: "Server unavailable", message: "Server unavailable" };
      }
    } catch (err) {
      setAlert({ status: true, type: "error", info: err });
    }
  };

  useEffect(
    () =>
      (async () => {
        setIsLoading(true);
        await updateProducts();
        await updateVendors();
        setIsLoading(false);
      })(),
    []
  );

  return (
    <div>
      <AlertBanner
        type={alert.type}
        shouldDisplay={alert.status}
        info={alert.info}
      />
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col" style={{ top: "-15px" }}>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <ProductList updateProducts={updateProducts} />
            )}
          </div>
          <div className="col"></div>
          <div
            style={
              alert.status ? { left: "50%", top: "50px" } : { left: "50%" }
            }
            className="w-50 fixed-top"
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <AddProduct updateProducts={updateProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
