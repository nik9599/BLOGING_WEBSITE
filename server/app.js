import express from "express";
import { connection } from "./database/db.js";
import Routes from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

connection();

//setting up routes

// app.use(cors());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://bloging-website-client.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',()=>{
  res.json('Hello')
})

app.use("/", Routes);


const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log("Server intialise properly");
});

module.exports  = app;