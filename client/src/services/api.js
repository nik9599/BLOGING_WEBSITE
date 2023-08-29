import axios from "axios";
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/configs";
import { getAccessToken , getType} from "../utils/common-function";

const API_URL = 'https://bloging-website-api.vercel.app/';
// const API_URL = 'http://localhost:5000/'

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  function(config) {

    if(config.TYPE.params){
       config.params = config.TYPE.params;
    }else if(config.TYPE.query){
      config.url = config.url + '/' + config.TYPE.query
    }

    return config;
  },
  function(error)  {

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function(response) {
    return processResponse(response);
  },
   function (error) {
    return Promise.reject(ProcessError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const ProcessError = (error) => {
  if (error.response) {
    console.log("ERROR IN RESPONSE : ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    console.log("ERROR IN REQUEST : ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: "",
    };
  } else {
    console.log("ERROR IN NETWORK : ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkFailure,
      code: "",
    };
  }
};

const API = {};

for (const[key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
  axiosInstance({
      method: value.method,
      url: value.url,
      data: value.method==='DELET'?{}:body,
      responseType: value.responseType,
      headers:{
        authorization : getAccessToken(),
       
      },
      TYPE : getType(value , body),
      onUploadProgress: (progressEvent) => {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: (progressEvent) => {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
}

export { API };


