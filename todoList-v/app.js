const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    var today = new Date();

    res.render("list", { kindOfDay: week });
});

app.listen(4000, function(req, res) {


    console.log("server started at port 4000");
});