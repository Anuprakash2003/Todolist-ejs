const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const mongoose =require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser: true});

const itemsSchema = new mongoose.Schema({
     name: String
});
const Item = new mongoose.model(
    "Item",itemsSchema
);

const item1 =new Item({
    name:"Welcome to todoList"
});
const item2 =new Item({
    name:"Hit the + icon"
});
const item3 =new Item({
    name:"welcome to my app"
});

const defaultItems =[item1,item2,item3];


app.get("/", function(req, res) {

    Item.find({},function(err,foundItems){
        if(foundItems.length===0){
            Item.insertMany(defaultItems,function(err){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Sucessfully inserted");
                }
            });
            res.redirect("/");
        }
    
        else{
            res.render("list", { listTitle: "Today", newListItems: foundItems });
        }
    });
});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});
app.post("/", function(req, res) {
    var itemName = req.body.newItem;
     const item = new Item({
        name : itemName
     });

     item.save();
     res.redirect("/");
 
   
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(4000, function(req, res) {
    console.log("server started at port 4000");
});