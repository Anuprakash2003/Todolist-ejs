const express = require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");


const app=express();

app.set('view engine','ejs');

app.get("/",function(req,res){
    var today = new Date();
    var day =today.getDay();
    var week="";
   switch(day){
       case 0:
         week="Sunday";
         break;
       case 1:
          week="Monday";
          break;
        case 2:
          week="Tuesday";
          break;
       case 3:
          week="Wednesday";
          break;
       case 4:
          week="Thursday";
          break;   
       case 5:
          week="Friday";
          break;  
       case 6:
          week="Saturday";
          break;  
   }
    res.render("list",{kindOfDay:week});
});

app.listen(4000,function(req,res){


    console.log("server started at port 4000");
});