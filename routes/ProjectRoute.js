const {Router} = require("express")

const {getProjects , saveProject ,deleteProject,updateProject }=require("../controllers/ProjectControllers");

const prorouter=Router()
console.log("lucks")
prorouter.get("/getpro",getProjects);
prorouter.post("/savepro",saveProject);
prorouter.put("/update/:id",updateProject);
prorouter.delete("/deletepro/:id",deleteProject);

module.exports = prorouter