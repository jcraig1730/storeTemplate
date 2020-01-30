export const types = {
  UPDATE_PRODUCTS: "UPDATE_PRODUCTS",
  UPDATE_VENDORS: "UPDATE_VENDORS",
  UPDATE_SALES: "UPDATE_SALES",
  UPDATE_PURCHASES: "UPDATE_PURCHASES",
  UPDATE_CUSTOMERS: "UPDATE_CUSTOMERS",
  UPDATE_LOGIN: "UPDATE_LOGIN",
  UPDATE_ERROR: "UPDATE_ERROR"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: action.payload };
    case "UPDATE_VENDORS":
      return { ...state, vendors: action.payload };
    case "UPDATE_SALES":
      return { ...state, sales: action.payload };
    case "UPDATE_PURCHASES":
      return { ...state, purchases: action.payload };
    case "UPDATE_CUSTOMERS":
      return { ...state, customers: action.payload };
    case "UPDATE_LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      };
    case "UPDATE_ERROR":
      return { ...state, isError: action.payload };
  }
};

export default reducer;
