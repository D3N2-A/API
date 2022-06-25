const express = reqiure("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

// <--------------------------------------------------->

// <--------------------------------------------------->

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
