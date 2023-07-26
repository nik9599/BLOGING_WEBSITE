import express from "express";

import { signUpUser, loginUser } from "../Controller/user-controller.js";

import { uploadImage , getImage } from "../Controller/Image-controller.js";

import {creatPost , getAllPost , getPost} from "../Controller/post-controller.js"

import { authenticateToken } from "../Controller/jwt-controller.js";

// importing midelwware function

import upload from "../utils/upload.js";

const Routes = express.Router();

Routes.post("/signUp", signUpUser);
Routes.post("/login", loginUser);
Routes.post('/file/upload', upload.single('file'), uploadImage);
Routes.get('/file/:filename', getImage)
Routes.post('/create' ,authenticateToken, creatPost)
Routes.get('/posts' , authenticateToken , getAllPost)
Routes.get('/post/:id' , authenticateToken , getPost)

export default Routes;
