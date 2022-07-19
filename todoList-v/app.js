const express = require("express");
const bodyParser=require("body-parser");
const app=express();
app.use("view-engine","ejs");
app.get("/",function(req,res){
    var today = new Date();
    var day =today.getDay();
    var week="";
    if(day==6 || day==0){
         week="weekend"
        res.render("list",{kindOfDay:week});
    }
    else{
        week="weekdays"
        res.render("list",{kindOfDay:week});
        res.send(__dirnamee+"/weekdays.html")
    }
    res.send("Hello");
});

app.listen(4000,function(req,res){


    console.log("server started at port 4000");
});