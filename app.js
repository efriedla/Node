var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
/**
 * renders home.ejs as home already knows to add ejs
 */ 
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});

var todos = [
    {task: "eat"},
    {task: "sleep"},
    {task: "blink"}
];
app.get("/todo", function(req, res){
    res.render("todo", {todos: todos});
    console.log(todos.task);
});
/**
 * add to todo
 */
app.post("/addtodo", function(req, res){
    var newTodo = req.body.newtodo;
    todos.push(newTodo);
    res.redirect("/todo");
});

/** 
* "error message" 
*/
app.get("*", function(req, res){
    res.send("Hey beautiful, make a wrong turn?");
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));