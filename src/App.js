import { BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css';
import React, { useState } from 'react';
import Taskbar from './Components/taskbar/Taskbar';
import Dashboard from './Components/dashboard/Dashboard';
//import ReactCalendar from './Components/Calendar/Calendar';
import ToDoList from './Components/TodoList/ToDoList';
import Userlist from './Components/UserList/userlist';
import Chatbox from './Components/Chatbox/Chatbox';
import UProfile from './Components/UProfile/UProfile';
import Account from './Components/Account/Account';
import Addnewproject from './Components/addnew/Addnewproject'
import Landing from './Components/landingpage/Landingpage';
import About from './Components/About/About'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ProjectDetails from './Components/projectDetails/ProjectDetails';
const App=()=> {
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setUserEmail(email);
  };
  return (
    <BrowserRouter>
      <Routes>
            <Route index element={<Landing />}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Landing" element={<Landing/>}/>
            <Route path="/Login" element={<Login handleLogin={handleLogin}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/About/Register" element={<Register/>}/>
            <Route path="/Dashboard" element={<Dashboard  userEmail={userEmail}/>} />
            
            <Route path="/ToDoList" element={<ToDoList userEmail={userEmail}/>}/>
            <Route path="/Userlist" element={<Userlist />} userEmail={userEmail}/>
            <Route path="/Chatbox" element={<Chatbox />} userEmail={userEmail}/>
            <Route path="/Userlist/UProfile" element={<UProfile userEmail={userEmail}/>} />
            <Route path="/Account" element={<Account />} userEmail={userEmail}/>
            <Route path="/Addnewproject" element={<Addnewproject userEmail={userEmail}/>} />
            <Route path="/ProjectDetails" element={<ProjectDetails userEmail={userEmail}/>}/>
          </Routes>
</BrowserRouter>
  );
}

export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Taskbar from './Components/taskbar/Taskbar';
// import Dashboard from './Components/dashboard/Dashboard';
// import ReactCalendar from './Components/Calendar/Calendar';
// import ToDoList from './Components/TodoList/ToDoList';
// import Userlist from './Components/UserList/userlist';
// import Chatbox from './Components/Chatbox/Chatbox';
// import UProfile from './Components/UProfile/UProfile';
// import Account from './Components/Account/Account';
// import Addnewproject from './Components/addnew/Addnewproject'
// import Landing from './Components/landingpage/Landingpage';
// import About from './Components/About/About'
// import Login from './Components/Login/Login'
// import Register from './Components/Register/Register'
// import Project_table from './Components/project_table/Tasktable'

// const App = () => {
//   const [userEmail, setUserEmail] = useState('');

//   const handleLogin = (email) => {
//     setUserEmail(email);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login handleLogin={handleLogin} />} />
//         <Route path="/dashboard" element={<Dashboard userEmail={userEmail} />} />
//         <Route path="/react-calendar" element={<ReactCalendar />} />
//         <Route path="/to-do-list" element={<ToDoList />} />
//         <Route path="/userlist" element={<Userlist />} />
//         <Route path="/chatbox" element={<Chatbox />} />
//         <Route path="/uprofile" element={<UProfile />} />
//         <Route path="/account" element={<Account />} />
//         <Route path="/addnewproject" element={<Addnewproject />} />
//         <Route path="/landing" element={<Landing />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };

//export default App;
