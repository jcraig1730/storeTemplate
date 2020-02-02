import React, { useEffect, useState } from "react";

import { useStateValue } from "../../../state/State";
import { types } from "../../../state/reducers";
import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/AddProduct";
import LoadingSpinner from "../../common/LoadingSpinner";
import { getAllItems } from "../../../utilities";
import AlertBanner from "../../common/alertBanners/AlertBanner";

const Products = props => {
  const [isLoading, setIsLoading] = useState(true);

  const [productPagination, setProductPagination] = useState({
    prev: null,
    next: null,
    numPages: null,
    offset: null,
    limit: null
  });

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

  const parseQueryParams = () => {
    const limitRegEx = new RegExp("limit=[0-9]*", "i");
    const offsetRegEx = new RegExp("offset=[0-9]*", "i");
    let limit = props.location.search.match(limitRegEx);
    if (limit) {
      limit = limit[0].split("=")[1];
    } else {
      limit = null;
    }
    let offset = props.location.search.match(offsetRegEx);
    if (offset) {
      offset = offset[0].split("=")[1];
    } else {
      offset = null;
    }
    return { limit: null, offset: null };
  };

  const updateProducts = async () => {
    try {
      const queryParams = parseQueryParams();
      const products = await getAllItems({
        route: "products",
        limit: queryParams.limit,
        offset: queryParams.offset
      });
      const { data } = products.data;
      if (products.status === 200) {
        dispatch({ type: UPDATE_PRODUCTS, payload: data });
        setProductPagination({
          numPages: products.data.numPages,
          offset: products.data.offset,
          limit: products.data.limit
        });
      } else {
        throw { title: "Server unavailable", message: "Server unavailable" };
      }
    } catch (err) {
      setAlert({ status: true, type: "error", info: err });
    }
  };

  const updateVendors = async () => {
    try {
      const vendors = await getAllItems({ route: "vendors" });
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
          <div className="col-12 col-md-8">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="p-0">
                <ProductList
                  updateProducts={updateProducts}
                  productPagination={productPagination}
                />
              </div>
            )}
          </div>
          <div
            className="d-none d-md-block col-md-4 fixed-top mt-3"
            style={{ left: "66.66%" }}
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
