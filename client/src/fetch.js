import axios from "axios";
import { getAccessToken } from "./utils/common-function.js";


// const base = "https://bloging-website-api.vercel.app";

const base = "http://localhost:8080";
//login user api calling
export const logginUser = async (data) => {
  try {
    let r = await axios.post(base.concat("/login"), data);
    if (r) {
      return r;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
// creating new user api
export const siggnupUser = async (data) => {
  try {
    return await axios.post(base.concat("/signUp"), data);
  } catch (error) {
    console.log(error);
  }
};
// fetching all the post
export const getAllPOst = async (category) => {
  try {
    return await axios.get(base.concat("/posts"), category, {
      authorization: getAccessToken(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (id) => {
  try {
    console.log(id)
    const response = await axios.get(base.concat(`/post/${id}`));
    // Handle the successful response here
    console.log("Response:", response.data);
    return response
  } catch (error) {
    console.log(error);
  }
};
//fetching all the comments 
export const getAllComents = async (_id) => {
  try {
    return await axios.get(base.concat(`/comments/${_id}`));
  } catch (error) {
    console.log(error);
  }
};
//adding new comment to post
export const newComment = async (data) => {
  try {
    return await axios.post(base.concat("/comment/new"), data);
  } catch (error) {
    console.log(error);
  }
};

//deleting comment 
 export const deletComment=(id)=>{
  try {
    return axios.delete(base.concat(`/comment/delet/${id}`))
  } catch (error) {
    console.log(error)
  }
 }

// uploading image

export const uploadFile = (data) => {
  try {
    return axios.post(base.concat("/file/upload"), data);
  } catch (error) {
    console.log(error);
  }
};

// create post api
export const createPost = (data)=>{
  try {
     return axios.post(base.concat("/create"),data)
  } catch (error) {
    console.log(error)
  }
}


// updating post

export const updatePost = (data,id)=>{
  try {
    return axios.put(base.concat(`/update/${id}`),data)
  } catch (error) {
    console.log(error)
  }
}

// delet post operation
export const deletePostRequest = (id)=>{
  try {
    return axios.delete(base.concat(`/delet/${id}`))
  } catch (error) {
    console.log(error)
  }
}