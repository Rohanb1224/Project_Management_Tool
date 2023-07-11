const TodoModel=require("../models/todolistModel")

module.exports.getTodo = async (req, res) => {
      const todolist = await TodoModel.find();
      res.send(todolist);
  };

module.exports.saveTodo = async (req, res) => {
        const {todolist} = req.body;
        TodoModel.create({todolist})
        .then((data)=>{
            console.log("Saved successfully");
            res.status(201).send(data)
        }).catch((err)=>{
            console.log(err);
            res.send({error:err,msg:"something went wrong"})
        })
}
  module.exports.updateTodo = async (req, res) => {
      const { id } = req.params;
      const { todolist } = req.body;
      TodoModel.findByIdAndUpdate(id,{todolist})
      .then(()=>{ res.send("Updated successfully")})
      .catch ((err)=>  {
      console.log(err);
      res.send({ error: err, msg: "something went wrong" });
    })
  }
  module.exports.deleteTodo = async (req, res) => {
    try{
      const { id } = req.params;
      await TodoModel.findByIdAndDelete(id)
      res.send("deleted successfully")
    }
    catch (err) {
    console.log(err);
    res.send({ error: err, msg: "something went wrong" });
  };
};