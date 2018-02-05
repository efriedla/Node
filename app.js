var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/practice');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
/**
 * renders home.ejs as home already knows to add ejs
 */ 
app.set("view engine", "ejs");

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId; 

var taskSchema = new Schema({
task: String
});

var Task = mongoose.model('Task', taskSchema);

// Task.create({
//     task: "sleep"
      
// }, function(err, task){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(task);
//     }
// });

// Task.find({}, function(err, tasks){
//     if(err){
//         console.log("nooo");
//         console.log(err)
//     }else{
//         console.log("here are my tasks");
//         console.log(tasks);
//     }
// });


app.get("/", function(req, res){
    res.render("home");
});

app.get("/todo", function(req, res){
    Task.find({}, function(err, todos){
        if(err){
            console.log(err);
        }else{
            res.render("todo", {todos: todos});
        }
    });
});
/**
 * add to todo
 */
app.post("/addtodo", function(req, res){
    var newTodo = req.body.newtodo;
    var myTodo = {task: newTodo};
    Task.create(myTodo, function(err, newTask){
        if(err){
            console.log(err);
        }else{
            res.redirect("/todo");
        }
    }); 
});
/**
 * Show todo
 */
app.get("/todo/:id", function(req, res){
    Task.findById(req.params.id, function(err, found){
        if(err){
            console.log(err);
        }else{
            res.render("show", {todo: found});
            console.log(found);
        }
    })
});

/** 
* "error message" 
*/
app.get("*", function(req, res){
    res.send("Hey beautiful, make a wrong turn?");
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));