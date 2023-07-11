import React, { useEffect, useState } from 'react';
import './Addnew.css'
import axios from "axios"
import Taskbar from '../taskbar/Taskbar';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';


const PopupForm = ({ onClose, onSave }) => {
  const [teamLeader, setTeamLeader] = useState('');
  const [teamMember, setTeamMember] = useState('');
  const [projectName, setProjectName] = useState("");
  const [tasksprojectName,setTasksProjectName]=useState([]);
  const [updateUI,setUpdateUI]=useState(false)
  const [projectDescription, setProjectDescription] = useState('');
  const [projectStartDate, setProjectStartDate] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');

  useEffect(()=>{
    axios.get(`${baseURL}/get`)
    .then((res) =>{
      console.log("insideprojecteffect")
      console.log(res.data);
      setTasksProjectName(res.data)
    })
  },[updateUI]);

  const addProjectName = () => {
    const formData = {
      task_Leader: teamLeader,
      task_Member: teamMember,
      task_projectName: projectName,
      task_projectDescription: projectDescription,
      task_projectStart: projectStartDate,
      task_projectEnd: projectDeadline,
    };
  
    axios.post(`${baseURL}/save`, formData)
      .then((res) => {
        console.log("hi");
        console.log(res.data);
        setProjectName("");
      })
      .catch((error) => {
        console.error("Error saving project data:", error);
      });
  };
  const handleTeamLeaderChange = (e) => {
    setTeamLeader(e.target.value);
  };

  const handleTeamMemberChange = (e, index) => {
    setTeamMember(e.target.value);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleProjectStartDateChange = (e) => {
    setProjectStartDate(e.target.value);
  };

  const handleProjectDeadlineChange = (e) => {
    setProjectDeadline(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Store form data in the database or perform any other necessary action
    const formData = {
      teamLeader,
      teamMember,
      projectName,
      projectDescription,
      projectStartDate,
      projectDeadline,
    };
    console.log(formData);
    //{tasks.map((task) => (<List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI}/>))}
    // Clear form inputs
    setTeamLeader('');
    setTeamMember('');
    setProjectName('');
    setProjectDescription('');
    setProjectStartDate('');
    setProjectDeadline('');

    // Call the onSave callback to handle further actions
    onSave();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Enter Project Details</h2>
        <form onSubmit={handleSave}>
          <div>
            <label htmlFor="teamLeader">Team Leader</label>
            <input
              type="text"
              id="teamLeader"
              value={teamLeader}
              onChange={handleTeamLeaderChange}
              required
            />
          </div>
          <div>
            <label htmlFor="teamMember">Team Member</label>
            <input
              type="text"
              id="teamMember"
              value={teamMember}
              onChange={handleTeamMemberChange}
              required
            />
          </div>
          <div>
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={handleProjectNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="projectDescription">Project Description</label>
            <textarea
              id="projectDescription"
              value={projectDescription}
              onChange={handleProjectDescriptionChange}
              required
            />
          </div>
          <div>
            <label htmlFor="projectStartDate">Project Start Date</label>
            <input
              type="date"
              id="projectStartDate"
              value={projectStartDate}
              onChange={handleProjectStartDateChange}
              required
            />
          </div>
          <div>
            <label htmlFor="projectDeadline">Project Deadline</label>
            <input
              type="date"
              id="projectDeadline"
              value={projectDeadline}
              onChange={handleProjectDeadlineChange}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" onClick={addProjectName}>Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const PopupFormTask = ({ onClose, onSave }) => {
  const [TaskName, setTaskName] = useState('');
  const [Priority, setPriority] = useState('');
  const [TaskDeadline, setTaskDeadline] = useState('');
  const [TaskMember,setTaskMember] = useState('');
  const [projecttasksName,setProjectTasksName]=useState([]);
  const [taskupdateUI,settaskUpdateUI]=useState(false)

  useEffect(()=>{
    axios.get(`${baseURL}/getpro`)
    .then((res) =>{
      console.log("inside1stuseeffect")
      console.log(res.data);
      setProjectTasksName(res.data)
    })
  },[taskupdateUI]);

  const addTaskName = () => {
    const formDataTasks = {
      taskmember:TaskMember,
      taskname:TaskName,
      priority:Priority,
      taskend: TaskDeadline,
    };
  
    axios.post(`${baseURL}/savepro`, formDataTasks)
      .then((res) => {
        console.log("hi");
        console.log(res.data);
        setTaskName("");
      })
      .catch((error) => {
        console.error("Error saving task data:", error);
      });
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };
  const handleTaskMemberChange = (e) => {
    setTaskMember(e.target.value);
  }
  const handleTaskDeadlineChange = (e) => {
    setTaskDeadline(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("happpp");
    if (!TaskName || !Priority || !TaskDeadline || !TaskMember) {
      console.error('Missing required fields');
      return;
    }

    // Store form data in the database or perform any other necessary action
    const formDataTasks = {
      TaskName,
      Priority,
      TaskMember,
      TaskDeadline,
    };
    console.log(formDataTasks);

    // Clear form inputs
    setTaskName('');
    setTaskMember('');
    setPriority('');
    setTaskDeadline('');

    // Call the onSave callback to handle further actions
    onSave(formDataTasks);
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Enter Task Details</h2>
        <form onSubmit={handleSave}>
    
        <div>
            <label htmlFor="TaskMember">Task Member</label>
            <input
              type="text"
              id="TaskMember"
              value={TaskMember}
              onChange={handleTaskMemberChange}
              required/>
          </div>
          <div>
            <label htmlFor="TaskName">Task Name</label>
            <input
              type="text"
              id="TaskName"
              value={TaskName}
              onChange={handleTaskNameChange}
              required/>
          </div>
          <div>
            <label htmlFor="Priority">Priority</label>
            <input
              type="text"
              id="Priority"
              value={Priority}
              onChange={handlePriorityChange}
              required/>
          </div>
              <div>
            <label htmlFor="TaskDeadline">Project Deadline</label>
            <input
              type="date"
              id="TaskDeadline"
              value={TaskDeadline}
              onChange={handleTaskDeadlineChange}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" onClick={addTaskName}>Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const Addnewproject = ({ userEmail }) => {
  const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState('Project');
  const [tasks, setTasks] = useState([]);
  const[projects,setProjects]=useState([]);
  const openOptions = (OptionsName) => {
    setActiveTab(OptionsName);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const handleSaveFormPro = () => {
    // Handle actions after saving the form data
    console.log('Form data saved successfully!');
    closePopup();
    navigate('/ToDoList', { state: projects });
    
  };
  useEffect(() => {
    axios.get(`${baseURL}/getpro`)
      .then((res) => {
        console.log("tasks");
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks data:", error);
      });
  }, []);
  const handleSaveForm = () => {
    // Handle actions after saving the form data
    console.log('Form data saved successfully!');
    closePopup();
    navigate('/Dashboard', { state: tasks });
    
  };
  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks data:", error);
      });
  }, []);
  
  return (
    <div>
      <Taskbar userEmail={userEmail}/>
      <div className="tab">
          <button
            className={`tablinks ${activeTab === 'Project' ? 'active' : ''}`}
            onClick={() => openOptions('Project')}>
            Project
          </button>
          <button
              className={`tablinks ${activeTab === 'Task' ? 'active' : ''}`}
              onClick={() => openOptions('Task')}>
              Task
          </button>
      </div>
      <div id="Project" className={`tabcontent ${activeTab === 'Project' ? 'active' : ''}`}>
        <button className="addnewbutton" style={{marginLeft:'100px'}} onClick={openPopup}>Add new project</button>
        {isPopupOpen && <PopupForm onClose={closePopup} onSave={handleSaveForm} />}
      </div>
      <div id="Task" className={`tabcontent ${activeTab === 'Task' ? 'active' : ''}`}>
        <button className="addnewbutton" style={{marginLeft:'100px'}} onClick={openPopup}>Add new task</button>
        {isPopupOpen && <PopupFormTask onClose={closePopup} onSave={handleSaveFormPro} />}
      </div>
        
      <Link to={{ pathname: '/Dashboard', state: { tasks } }}>Go to Task Table</Link>
    </div>
  );
};

export default Addnewproject;