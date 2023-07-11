const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
//   task: {
//     type: String,
//     required: true
//   },
  todolist: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model("Todo", todoSchema);
