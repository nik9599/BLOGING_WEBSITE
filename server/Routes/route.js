import express from "express";

import { signUpUser, loginUser } from "../Controller/user-controller.js";

import { uploadImage , getImage } from "../Controller/Image-controller.js";

import {creatPost , getAllPost , getPost , updatePost , deletPost} from "../Controller/post-controller.js"

import { authenticateToken } from "../Controller/jwt-controller.js";

import {newComment , getComments , deletComment} from "../Controller/comment-controller.js"

// importing midelwware function

import upload from "../utils/upload.js";

const Routes = express.Router();

Routes.post("/signUp", signUpUser);
Routes.post("/login", loginUser);
Routes.post('/file/upload', upload.single('file'), uploadImage);
Routes.get('/file/:filename', getImage)
Routes.post('/create' ,authenticateToken, creatPost)
Routes.get('/posts'  , getAllPost)
Routes.get('/post/:id' , getPost)
Routes.put('/update/:id' , authenticateToken , updatePost)
Routes.delete('/delet/:id' , authenticateToken , deletPost)
Routes.post('/comment/new' , authenticateToken , newComment)
Routes.get('/comments/:id' , authenticateToken , getComments)
Routes.delete('/comment/delet/:id' , authenticateToken , deletComment)
export default Routes;
