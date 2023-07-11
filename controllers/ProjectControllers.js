const ProjectModel=require("../models/ProjectModel")

module.exports.getProjects = async (req, res) => {
    try {
      const projects = await ProjectModel.find();
      res.send(projects);
      console.log("hluck")
      console.log(projects);
      console.log("heyyy")
    } catch (err) {
      console.log(err);
      res.send({ error: err, msg: "helptask!" });
    }
  };

module.exports.saveProject = async (req, res) => {
    try {
        const {
          taskmember,
          taskname,
          priority,
          taskend
        } = req.body;
    
        const projectData = {
          //task,
          taskmember,
          taskname,
          priority,
          taskend
        };
        console.log("before model create")
        const createdProject = await ProjectModel.create(projectData);
        console.log("Saved Successfully");
        res.status(201).send(createdProject);
      } catch (err) {
        console.log(err);
        res.send({ error: err, msg: "booptask!" });
      }
  };
  module.exports.updateProject = async (req, res) => {
    try {
      const { id } = req.params;
      const { project_projectName } = req.body;
  
      await ProjectModel.findByIdAndUpdate(id, { project_projectName });
      res.send("Updated Successfully");
    } catch (err) {
      console.log(err);
      res.send({ error: err, msg: "beep" });
    }
  };
  module.exports.deleteProject = async (req, res) => {
    try {
      const { id } = req.params;
  
      await ProjectModel.findByIdAndDelete(id);
      res.send("Deleted Successfully");
    } catch (err) {
      console.log(err);
      res.send({ error: err, msg: "bloop!" });
    }
  };