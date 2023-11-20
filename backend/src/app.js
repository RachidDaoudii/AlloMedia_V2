const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const routes = require("./frameworks/expressSpecific/routes");
const mongoose = require("./frameworks/database/mongo/index");

app.use(bodyParser.json());
app.use(cookieParser());
//this is for form data  urlencoded is meaning of form data extended is false means only string and array
app.use(bodyParser.urlencoded({ extended: false }));
const apiRoutes = routes();
app.use("/api/v1", apiRoutes);

module.exports = {
  start: () => {
    app.listen(PORT, () => {
      console.log(`Succeess app is running under port ${PORT}`);
const ErrorHandler = require("./frameworks/expressSpecific/middlewares");
const { connect: connectMongo } = require("./frameworks/database/mongo");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cookieParser());
const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const apiRoutes = routes();

module.exports = {
  start: () => {
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use(bodyParser.urlencoded({ extended: false }));
    const apiRoutes = routes();
    app.use("/api/v1", apiRoutes);
    //app.use(ErrorHandler)

    //this is for form data  urlencoded is meaning of form data extended is false means only string and array

    app.listen(PORT, () => {
      console.log(`Succeess FUcking running under port ${PORT}`);
      connectMongo();
    });
  },
};
