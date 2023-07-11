import React, { useState } from 'react';
import Taskbar from '../taskbar/Taskbar';
import './Account.css';
import {AiOutlineGoogle} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
const Account = ({ userEmail }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [connectedAccounts, setConnectedAccounts] = useState({
    facebook: false,
    google: false,
    twitter: false,
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [designation, setDesignation] = useState('');
  const [state, setState] = useState('');
  const [isTeamLeader, setIsTeamLeader] = useState(false);

  const handleTabClick = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Perform password change logic here
    console.log('Password changed successfully!');
  };

  const handleConnectAccount = (account) => {
    setConnectedAccounts((prevConnectedAccounts) => ({
      ...prevConnectedAccounts,
      [account]: true,
    }));
  };

  const handleDisconnectAccount = (account) => {
    setConnectedAccounts((prevConnectedAccounts) => ({
      ...prevConnectedAccounts,
      [account]: false,
    }));
  };

  const handleDeleteConfirmation = () => {
    setDeleteConfirmation(true);
  };

  const handleDeleteAccount = () => {
    // Perform delete account logic here
    console.log('Account deleted successfully!');
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleTeamLeaderChange = (e) => {
    setIsTeamLeader(e.target.checked);
  };

  return (
    <div className="container-account">
      <Taskbar userEmail={userEmail}/>
      <div className="row">
        <div className="account-left">
          <div className="tabs">
            <div
              className={`tab ${currentTab === 1 ? 'active' : ''}`}
              onClick={() => handleTabClick(1)}
            >
              Password
            </div>
            <div
              className={`tab ${currentTab === 2 ? 'active' : ''}`}
              onClick={() => handleTabClick(2)}
            >
              Social Media
            </div>
            <div
              className={`tab ${currentTab === 3 ? 'active' : ''}`}
              onClick={() => handleTabClick(3)}
            >
              Delete Account
            </div>
            <div
              className={`tab ${currentTab === 4 ? 'active' : ''}`}
              onClick={() => handleTabClick(4)}
            >
              Account Settings
            </div>
          </div>
        </div>
        <div className="account-right">
          <div className="tab-content">
            {currentTab === 1 && (
              <div>
                <h2>Password</h2>
                <form onSubmit={handlePasswordSubmit}>
                  <div>
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </div>
                  <button type="submit">Change Password</button>
                </form>
              </div>
            )}
            {currentTab === 2 && (
              <div>
                <h2>Social Media</h2>
                <div>
                  <h3><GrFacebookOption/> Facebook</h3>
                  {connectedAccounts.facebook ? (
                    <div>
                      <p>Connected</p>
                      <button onClick={() => handleDisconnectAccount('facebook')}>
                        Disconnect
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleConnectAccount('facebook')}>
                        Connect with Facebook
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <h3><AiOutlineGoogle/> Google</h3>
                  {connectedAccounts.google ? (
                    <div>
                      <p>Connected</p>
                      <button onClick={() => handleDisconnectAccount('google')}>
                        Disconnect
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleConnectAccount('google')}>
                        Connect with Google
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <h3><AiOutlineTwitter/> Twitter</h3>
                  {connectedAccounts.twitter ? (
                    <div>
                      <p>Connected</p>
                      <button onClick={() => handleDisconnectAccount('twitter')}>
                        Disconnect
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleConnectAccount('twitter')}>
                        Connect with Twitter
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            {currentTab === 3 && (
              <div>
                <h2>Delete Account</h2>
                {!deleteConfirmation ? (
                  <div>
                    <p>Are you sure you want to delete your account?</p>
                    <button onClick={handleDeleteConfirmation}>Delete Account</button>
                  </div>
                ) : (
                  <div>
                    <p>Account deleted successfully!</p>
                  </div>
                )}
              </div>
            )}
            {currentTab === 4 && (
              <div>
                <h2>Account Settings</h2>
                <div>
                  <label htmlFor="profilePicture">Add Profile Picture</label>
                  <input
                    type="file"
                    id="profilePicture"
                    value={profilePicture}
                    onChange={handleProfilePictureChange}
                  />
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div>
                  <label htmlFor="bio">Short Bio</label>
                  <textarea
                    id="bio"
                    value={bio}
                    onChange={handleBioChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="designation">Designation</label>
                  <input
                    type="text"
                    id="designation"
                    value={designation}
                    onChange={handleDesignationChange}
                  />
                </div>
                <div>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    value={state}
                    onChange={handleStateChange}
                  />
                </div>
                <div>
                  <label htmlFor="isTeamLeader">Team Member/Team Leader</label>
                  <input
                    type="checkbox"
                    id="isTeamLeader"
                    checked={isTeamLeader}
                    onChange={handleTeamLeaderChange}
                  />
                  <label htmlFor="isTeamLeader">
                    {isTeamLeader ? 'Team Leader' : 'Team Member'}
                  </label>
                </div>
                <button>Save Settings</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
