import React, { useEffect,useState ,useContext} from 'react';
import './Dashboard.css'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';
import { useLocation} from 'react-router-dom';
import Footer from '../footer/footer'
import {BsThreeDotsVertical} from "react-icons/bs"
import {FaUsers} from "react-icons/fa"
import {IoMdTrash} from 'react-icons/io'
import {GiThreeFriends} from "react-icons/gi"
import {GiProgression} from "react-icons/gi"
import {TiTick} from "react-icons/ti"
import {AuthProvider} from "../../AuthContext"
import Addnewproject from '../addnew/Addnewproject'
import Taskbar from '../taskbar/Taskbar';
const Dashboard = ({ userEmail }) => {
  const location = useLocation();
  const [tasksprojectName,setTasksProjectName]=useState([]);
  const [updateUI,setUpdateUI]=useState(false);
  const [tasks, setTasks] = useState([]);
  const email=useContext(AuthProvider);
  const [teamMemberEmail, setTeamMemberEmail] = useState('');
  useEffect(()=>{
    axios.get(`${baseURL}/get?task_Member=userEmail`)
    .then((res) =>{
      console.log("hey",res.data);
      const filteredTasks = res.data.filter((task) => {
      
      return task.task_Member === userEmail || task.task_Leader === userEmail;});
      setTasks(filteredTasks);
      console.log(filteredTasks);
    })
    .catch((error)=> {
      console.error("error fetching task data",error);
    })
  },[]);
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`${baseURL}/delete/${taskId}`);
      console.log('Data deleted successfully');
      // Refresh the project list
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting project data:', error);
    }
  };
  return (
    <body >
      <Taskbar userEmail={userEmail}/>
        <section>
        {/* <div className="split right1">
          <div className='cards'>
            <FaUsers style={{fontSize:'40px',color:'#02055A'}}/>
            <p><span style={{fontSize:'30px'}}>15000000</span><br/>USERS REGISTERED</p>
            
          </div>
          <div className='cards'>
            <GiThreeFriends style={{fontSize:'40px',color:'#02055A'}}/>
            <p><span style={{fontSize:'30px'}}>150</span><br/>TEAMS ASSIGNED</p>
          </div>
          <div className='cards'>
            <GiProgression style={{fontSize:'40px',color:'#02055A'}}/>
            <p><span style={{fontSize:'30px'}}>1500</span><br/>TO BE COMPLETED</p>
          </div>
          <div className='cards'>
            <TiTick style={{fontSize:'40px',color:'#02055A'}}/>
            <p><span style={{fontSize:'30px'}}>15000</span><br/>COMPLETED</p>
          </div>
        </div> */}
        <div className="split left1">
          <div className="ongoing">
            <form>
                <span>Ongoing Projects</span>

              <table>
                <div className='table'>
                {tasks.map((task) => (
                  <tr key={task._id}>
                    
                    <th className='details' style={{paddingLeft:'20px'}}>
                      <Link to={{pathname:'/projectDetails',state:{ projectName:task.task_projectName}}}>{task.task_projectName}</Link>
                    </th>
                    <td className='details'>{task.task_projectStart}</td>
                    <td className='details'>{task.task_projectEnd}</td>
                    <td className='details'>{task.task_Leader}</td>
                    <td><IoMdTrash className='trash' onClick={() => handleDelete(task._id)}/></td>
                    <td className='details'><BsThreeDotsVertical/></td>
                  </tr>
                ))}
                </div>
              </table>
            </form>
          </div>
        </div>
        <Footer/>
        </section>
    </body>
  )
}

export default Dashboard