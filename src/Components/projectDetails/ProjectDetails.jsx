import React, { useEffect, useState } from 'react'
import { ToList } from '../ToList/ToList'
import { baseURL } from '../../utils/constant';
import './projectDetails.css'
import axios from "axios"
const ProjectDetails = () => {
    const [todoinput , setToDoInput]=useState("")
    const [todos , setToDos]=useState([]);
    const [updateUI,setUpdateUI]=useState(false)
    const[updateId,setUpdateId]=useState("");
    useEffect(()=>{
        axios.get(`${baseURL}/gettodo`)
        .then((res) => {
            console.log(res.data);
            setToDos(res.data);
        });
    },[updateUI]);

    const addToDo =()=> {
        axios.post(`${baseURL}/savetodo`,{todolist: todoinput})
        .then((res => {
            console.log("here");
            console.log(res.data);
            setToDoInput("");
            setUpdateUI((prevState)=> !prevState)
        }))
    }
    const updateMode =(id,todolist) =>{
        console.log(todolist);
        setToDoInput(todolist);
        setUpdateId(id)
    }
    const updateTodo =() =>{
        axios.put(`${baseURL}/updatetodo/${updateId}`, { todolist: todoinput }).then((res)=>{
            console.log(todoinput);
            setUpdateUI((prevState)=> !prevState)
            setUpdateId(null)
            setToDoInput("")
        })
    }
  return (
    <div className="projectdetails">
        <h1>TO DO LIST </h1>
        <div className='input-holder'>
            <input className="todoinput" type="text" value={todoinput} onChange={(e) => setToDoInput(e.target.value)}/>
            <button className='todobutton' type="submit" onClick={updateId ? updateTodo :addToDo}>{updateId ? "Update Task":"Add Task"}</button>
        </div>
        <ul>
            {todos.map((todo) => (
            <ToList key={todo._id} id ={todo._id} todo={todo.todolist} setUpdateUI={setUpdateUI} updateMode={updateMode}/>
            ))}
        </ul>
    </div>
    
  )
}

export default ProjectDetails