import express from "express";
import { connection } from "./database/db.js";
import Routes from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

connection();

//setting up routes

// const allowedOrigins = [
//   'https://bloging-website-client.vercel.app/login',
//   'http://localhost:3000'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));

app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/", Routes);



export default app;