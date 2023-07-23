export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "loading....",
    message: "Data is being loaded, Please wait",
  },
  success: {
    title: "Success",
    message: "Data successfully loaded",
  },
  responseFailure: {
    title: "ERROR",
    message: "An error occured while fetching response from server ",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing request data",
  },
  networkError: {
    title: "Error",
    message:
      "Unabel to connect with the server. Please check your internet connection",
  },
};

export const SERVICE_URLS = {
  userSignup: { url: "/signUp", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: { url: "/file/upload", method: "POST" },
  createPost :{url : "/create" , method : 'POST'},
  getAllPost :{url:"/posts" , method : 'GET', params : true}
};
