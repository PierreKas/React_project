import React, { useState } from "react";
import EditProfile from "./EditProfile.jsx";
import { Link } from "react-router-dom";
function Dashboard() {
  const [user, setUser] = useState({
    name: "Pierre KASANANI",
    username: "kasapierre",
    email: "kasa@gmail.com",
    profilePicture:"../pictures/profile.jpg",
    password: "000",
  });



  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = (editedUser) => {
    // To save edited data
    setUser(editedUser);
    setIsEditing(false); // to clase edit model
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // To close edit model without saving(to cancel)
  };


  return (
    <div className="dashboard">
      <div className="user-profile">
        <div className="profile-picture">
          <img src={user.profilePicture} alt="Profile picture" />
        </div>
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
        <button onClick={handleEditProfile}>Edit Profile</button>
      </div>
      {isEditing && (
        <EditProfile user={user} onSave={handleSaveProfile} onCancel={handleCancelEdit} />
      )}
      <Link to="/editprofile">Edit Profile</Link>
    </div>
  );
}

export default Dashboard;

