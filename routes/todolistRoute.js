const {Router} = require("express")

const {getTodo, saveTodo ,deleteTodo,updateTodo }=require("../controllers/todolistController");

const todorouter=Router()

todorouter.get("/gettodo",getTodo);
todorouter.post("/savetodo",saveTodo);
todorouter.put("/updatetodo/:id",updateTodo);
todorouter.delete("/deletetodo/:id",deleteTodo);

module.exports = todorouter