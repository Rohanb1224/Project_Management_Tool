import {React,useState,useEffect} from 'react'
import profile from '../profile.png'
import { TiTick } from 'react-icons/ti'
import {IoMdTrash} from 'react-icons/io'
import Check from '../check.png'
import Taskbar from '../taskbar/Taskbar'
import './ToDoList.css'
import { BiEditAlt } from 'react-icons/bi'
import axios from "axios"
import { baseURL } from '../../utils/constant';
const ToDoList = ({ userEmail }) => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        axios.get(`${baseURL}/getpro?taskmember=userEmail`)
        .then((res) =>{
          console.log("hey",res.data);
          const filteredProjects = res.data.filter((project) => {
          console.log(project.taskmember);
          return project.taskmember === userEmail ;});
          setProjects(filteredProjects);
          console.log(filteredProjects);
        })
        .catch((error)=> {
          console.error("error fetching task data",error);
        })
      },[]);
      const handleDelete = async (projectId) => {
        try {
          await axios.delete(`${baseURL}/deletepro/${projectId}`);
          console.log('Data deleted successfully');
          // Refresh the project list
          const updatedProjects = projects.filter((project) => project._id !== projectId);
          setProjects(updatedProjects);
        } catch (error) {
          console.error('Error deleting project data:', error);
        }
      };
    //const [projectDetails, setProjectDetails] = useState([]);
  return (
    <div className='ListTable'>
        <Taskbar userEmail={userEmail}/>
        <img src={Check} alt="Gif" className='checkimg'></img>
        <h1>Task List</h1>
        <table>
            <div className='todotable'>
                <tr className='headings'>
                    <th>Deadline</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th style={{paddingRight:'50px'}}>Action</th>
                </tr>
                {projects.map((project)=> (
                <tr className="deets" key={project._id}>
                    <td><span>{project.taskend}</span></td>
                    <td><span>{project.taskname}</span></td>
                    <td><div className={`priority ${project.priority.toLowerCase()}`}>
                        {project.priority} Priority
                    </div></td>
                    
                    <td style={{paddingRight:'100px'}}><span><IoMdTrash className='trash' onClick={() => handleDelete(project._id)}/></span></td>
                </tr>
                ))}
                </div>
                
            </table>
    </div>
  )
}

export default ToDoList