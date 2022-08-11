const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

var items = ["cook a food", "buy items", "Eat Food"];
var workItems = ["wake up", "study", "learn"];
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function(req, res) {
    let day = date.getDay();
    res.render("list", { listTitle: day, newListItems: items });
});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});
app.post("/", function(req, res) {
    var Item = req.body.newItem;
    console.log(req.body);
    if (req.body.list === "Work") {
        workItems.push(Item);
        res.redirect("/work");
    } else {
        items.push(Item);
        res.redirect("/");
    }
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(4000, function(req, res) {
    console.log("server started at port 4000");
});