const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


var items = ["cook a food", "buy items", "Eat Food"]
var workItems = [];
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
    res.render("list", { listTitle: day, newListItems: items })

});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});
app.post("/", function(req, res) {
    var Item = req.body.newItem;
    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(Item);
        res.redirect("/");
    }

});

app.listen(4000, function(req, res) {


    console.log("server started at port 4000");
});