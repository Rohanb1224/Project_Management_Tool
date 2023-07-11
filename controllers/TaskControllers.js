const TaskModel=require("../models/TaskModel")

module.exports.getTasks = async (req, res) => {
    try {
      const tasks = await TaskModel.find();
      res.send(tasks);
      console.log("heyy")
      console.log(tasks);
      console.log("heyyy")
    } catch (err) {
      console.log(err);
      res.send({ error: err, msg: "help!" });
    }
  };

module.exports.saveTask = async (req, res) => {
    try {
        const {
          //task,
          task_Leader,
          task_Member,
          task_projectName,
          task_projectDescription,
          task_projectStart,
          task_projectEnd
        } = req.body;
    
        const taskData = {
          //task,
          task_Leader,
          task_Member,
          task_projectName,
          task_projectDescription,
          task_projectStart,
          task_projectEnd
        };
    
        const createdTask = await TaskModel.create(taskData);
        console.log("Saved Successfully");
        res.status(201).send(createdTask);
      } catch (err) {
        console.log(err);
        res.send({ error: err, msg: "boop!" });
      }
  };
  module.exports.updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { task_projectName } = req.body;
  
      await TaskModel.findByIdAndUpdate(id, { task_projectName });
      res.send("Updated Successfully");
    } catch (err) {
      console.log(err);
      res.send({ error: err, msg: "beep" });
    }
  };
  module.exports.deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
  
      await TaskModel.findByIdAndDelete(id);
      res.send("Deleted Successfully");
    } catch (err) {
      console.log(err);
      res.send({ error: err, msg: "bloop!" });
    }
  };