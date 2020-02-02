import Axios from "axios";

const apiUrl = "http://localhost:8000/api";

export const createItem = async ({ route, data }) => {
  try {
    const { images, productData } = data;
    const dataResult = await Axios.post(`${apiUrl}/${route}`, productData);
    const id = dataResult.data._id;
    if (images) {
      const formData = new FormData();
      formData.append("images", images);
      await Axios.post(`${apiUrl}/${route}/${id}/image`, formData, {
        "content-type": "multipart/form-data"
      });
    }
    return dataResult;
  } catch (err) {
    return err;
  }
};

export const getItemById = async ({ route, data }) => {
  const { id } = data;
  try {
    const result = await Axios.get(`${apiUrl}/${route}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
};

export const getItemByLookup = async ({ route, data }) => {
  try {
    const result = await Axios.get(`${apiUrl}/${route}/data`);
  } catch (err) {
    return err;
  }
};

export const getAllItems = async ({ route, limit, offset }) => {
  try {
    let queryString = `${apiUrl}/${route}`;
    if (limit) {
      queryString += `/?limit=${limit}&offset=${offset}`;
    }
    const result = await Axios.get(queryString);
    return result;
  } catch (err) {
    return err;
  }
};

export const updateItem = async ({ route, data }, id) => {
  try {
    const { images, productData } = data;
    const result = await Axios.put(`${apiUrl}/${route}/${id}`, productData);
    if (images) {
      const formData = new FormData();
      formData.append("images", images);
      await Axios.put(`${apiUrl}/${route}/${id}/image`, formData, {
        "content-type": "multipart/form-data"
      });
    }

    return result;
  } catch (err) {
    return err;
  }
};

export const deleteItem = async ({ route, data }) => {
  const { id } = data;
  try {
    const result = await Axios.delete(`${apiUrl}/${route}/${id}`);
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
