const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
//   task: {
//     type: String,
//     required: true
//   },
  task_Leader: {
    type: String,
    required: true
  },
  task_Member: {
    type: String,
    required: true
  },
  task_projectName: {
    type: String,
    required: true
  },
  task_projectDescription: {
    type: String,
    required: true
  },
  task_projectStart: {
    type: Date,
    required: true
  },
  task_projectEnd: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
