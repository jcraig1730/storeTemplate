import Axios from "axios";

const apiUrl = "http://localhost:8000/api";

export const createItem = async ({ category, data }) => {
  try {
    const { images, productData } = data;
    const dataResult = await Axios.post(`${apiUrl}/${category}`, productData);
    const id = dataResult.data._id;
    if (images) {
      const formData = new FormData();
      formData.append("images", images);
      await Axios.post(`${apiUrl}/${category}/${id}/image`, formData, {
        "content-type": "multipart/form-data"
      });
    }
    return dataResult;
  } catch (err) {
    return err;
  }
};

export const getItemById = async ({ category, data }) => {
  const { id } = data;
  try {
    const result = await Axios.get(`${apiUrl}/${category}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
};

export const getItemByLookup = async ({ category, data }) => {
  try {
    const result = await Axios.get(`${apiUrl}/${category}/data`);
  } catch (err) {
    return err;
  }
};

export const getAllItems = async ({ category }) => {
  try {
    const result = await Axios.get(`${apiUrl}/${category}`);
    return result;
  } catch (err) {
    return err;
  }
};

export const updateItem = async ({ category, data }, id) => {
  try {
    const { images, productData } = data;
    const result = await Axios.put(`${apiUrl}/${category}/${id}`, productData);
    if (images) {
      const formData = new FormData();
      formData.append("images", images);
      await Axios.put(`${apiUrl}/${category}/${id}/image`, formData, {
        "content-type": "multipart/form-data"
      });
    }

    return result;
  } catch (err) {
    return err;
  }
};

export const deleteItem = async ({ category, data }) => {
  const { id } = data;
  try {
    const result = await Axios.delete(`${apiUrl}/${category}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
};

export const verifyProduct = product => {
  const error = {};
  if (!product.title) {
    error.title = "Product Title Required";
    error.message = "Please enter a title";
    error.error = true;
    error.productTitle = true;
  }
  return error;
};
