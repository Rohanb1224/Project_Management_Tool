import React, { useState } from 'react';
import './popupformproject.css';
const Popupformproject = ({ onClose, onSave }) => {
  const [teamLeader, setTeamLeader] = useState('');
  const [teamMemberCount, setTeamMemberCount] = useState(0);
  const [teamMembers, setTeamMembers] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectStartDate, setProjectStartDate] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');

  const handleTeamLeaderChange = (e) => {
    setTeamLeader(e.target.value);
  };

  const handleTeamMemberCountChange = (e) => {
    setTeamMemberCount(parseInt(e.target.value));
  };

  const handleTeamMemberNameChange = (e, index) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index] = e.target.value;
    setTeamMembers(updatedTeamMembers);
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
      teamMembers,
      projectName,
      projectDescription,
      projectStartDate,
      projectDeadline,
    };
    console.log(formData);

    // Clear form inputs
    setTeamLeader('');
    setTeamMemberCount(0);
    setTeamMembers([]);
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
            <label htmlFor="teamMemberCount">Team Member Count</label>
            <input
              type="number"
              id="teamMemberCount"
              value={teamMemberCount}
              onChange={handleTeamMemberCountChange}
              required
            />
          </div>
          {teamMemberCount > 0 && (
            <div>
              <label>Team Members</label>
              {Array.from({ length: teamMemberCount }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  value={teamMembers[index] || ''}
                  onChange={(e) => handleTeamMemberNameChange(e, index)}
                  required
                />
              ))}
            </div>
          )}
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
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Popupformproject;