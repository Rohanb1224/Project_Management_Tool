const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
//   task: {
//     type: String,
//     required: true
//   },

  taskmember: {
    type: String,
    required: true
  },
  taskname: {
    type: String,
    required: true
  },
  priority:{
    type:String,
    required:true,
  },
  taskend: {
    type: Date,
    required: true,
  }
});

const ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;
