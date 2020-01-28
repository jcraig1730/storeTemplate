import React, { useEffect, useState } from "react";

import { useStateValue } from "../../../state/State";
import { types } from "../../../state/reducers";
import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/AddProduct";
import { getAllItems } from "../../../utilities";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({});
  const [{ products, vendors }, dispatch] = useStateValue();
  const { UPDATE_PRODUCTS, UPDATE_VENDORS } = types;

  const updateProducts = async () => {
    try {
      const products = await getAllItems({ category: "products" });
      if (products.status !== 200) {
        throw { error: true, message: "Server unavailable" };
      }
      dispatch({ type: UPDATE_PRODUCTS, payload: products.data });
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

      dispatch({ type: UPDATE_VENDORS, payload: vendors.data });
    } catch (err) {
      setIsError(err);
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
            {isLoading ? (
              <div>loading...</div>
            ) : (
              <ProductList
                products={products}
                updateProducts={updateProducts}
                setIsError={setIsError}
              />
            )}
          </div>
          <div className="col"></div>
          <div
            style={
              isError.error ? { left: "50%", top: "50px" } : { left: "50%" }
            }
            className="w-50 fixed-top"
          >
            {isLoading ? (
              <div>loading</div>
            ) : (
              <AddProduct
                vendors={vendors}
                updateProducts={updateProducts}
                setIsError={setIsError}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
