import express from "express";
import { connection } from "./database/db.js";
import Routes from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

connection();


const corsOptions = {
  origin: 'https://bloging-website-client.vercel.app', // or [/^https:\/\/bloging-website-client\.vercel\.app$/] or (origin, callback) => { ... }
};

// Use the cors middleware with the origin option
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.get('/welcome',()=>{
  window.alert('getted')
})
app.use("/", Routes);



export default app;