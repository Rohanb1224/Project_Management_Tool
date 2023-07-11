const express=require("express")


const mongoose=require("mongoose")
require("dotenv").config()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const routes= require("./routes/TaskRoute")
const todoroute=require("./routes/todolistRoute")
const projectroute= require("./routes/ProjectRoute")
const loginRoute=require("./routes/Loginroute");
const cors=require("cors")
const RegisterRoute = require('./routes/RegisterRoute');
const app=express();
const PORT=process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MONGODB CONNECTED....'))
.catch((err)=> console.log(err));



app.use('/api', RegisterRoute);
// Login route
app.use('/api', loginRoute);
app.use("/api", routes);
app.use("/api",todoroute);
app.use('/api',projectroute)
app.listen(PORT,()=>console.log(`Listening at ${PORT}`))