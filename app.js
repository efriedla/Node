var express = require("express");
var app = express();
var request = require("request");
//helps grab form 
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
// renders home.ejs as home already knows to add ejs
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});

// "error message" 
app.get("*", function(req, res){
    res.send("Hey beautiful, make a wrong turn?");
    console.log("someones lost");
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));