var mongoose = require("mongoose");

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId; 

var taskSchema = new Schema({
    task: String
    });
    
// var Task = mongoose.model('Task', taskSchema);

module.exports = mongoose.model('Task', taskSchema);