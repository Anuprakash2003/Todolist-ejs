const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


var items = ["cook a food", "buy items", "Eat Food"]
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", function(req, res) {
    var today = new Date();
    var option = {

        day: "numeric",
        weekday: "long",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", option);
    res.render("list", { kindOfDay: day, newListItems: items })


    res.render("list", { kindOfDay: day });
});
app.post("/", function(req, res) {
    var Item = req.body.newItem;
    items.push(Item);
    res.redirect("/");
});

app.listen(4000, function(req, res) {


    console.log("server started at port 4000");
});