import axios from "axios";

// const baseUrl = "http://localhost:8080/api/v1";

// Function for making GET requests
export const getRequest = async (param = null, url, token = null) => {

  try {
    const config = {
      params: param,
      headers: token && { authorization: `Bearer ${token}` },
    };

    const response = await axios.get(`${baseUrl}${url}`, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Function for making POST requests
export const postRequest = async (data, url, token = null) => {
  try {
    const config = token ? { headers: { authorization: `Bearer ${token}` } } : {};
    const response = await axios.post(`${baseUrl}${url}`, data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Function for making PUT requests
export const putRequest = async (data, url, token) => {
  try {
    const response = await axios.put(`${baseUrl}${url}`, data, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Helper function to handle request errors
const handleRequestError = (error) => {
  if (error.response && (error.response.status === 500 || error.response.status === 400 || error.response.status === 404 )) {
    const errorMessage = error.response.data.msg;
    return { success: false, msg: errorMessage };
  } else {
    console.error(error);
    return { success: false, message: "An error occurred while processing your request" };
  }
};
