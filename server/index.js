import express from "express";
import { connection } from "./database/db.js";
import Routes from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

connection();

//setting up routes

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type , Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header(
      "Acess-Control-Allow-Methods",
      "PUT, PATCH , DELET , POST , GET"
    );
    return res.status(200).json({});
  }
  next();
});
app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes);

app.listen("5000", () => {
  console.log("Server intialise properly");
});
