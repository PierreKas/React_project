import React, { useState } from "react";
import "./login.css"
import { Link } from "react-router-dom";
function EditProfile({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleSave = () => {
    // To save the edited profile data
    onSave(editedUser);
  };

  return (
    <div className="profile-edit">
      <h2>Edit Profile</h2>
      <input
        className="input"
        type="text"
        placeholder="Name"
        value={editedUser.name}
        onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
      />
      <input
        className="input"
        type="text"
        placeholder="Username"
        value={editedUser.username}
        onChange={(e) =>
          setEditedUser({ ...editedUser, username: e.target.value })
        }
      />
      <input
        className="input"
        type="email"
        placeholder="Email"
        value={editedUser.email}
        onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={editedUser.password}
        onChange={(e) =>
          setEditedUser({ ...editedUser, password: e.target.value })
        }
      />
      <div className="btn">
        <button classname="save" onClick={handleSave}>Save</button>
        <button classname="cancel" onClick={onCancel}>Cancel</button>
      </div>
      {/* <Link to="/Dashboard">Dashboard</Link> */}
    </div>
  );
}

export default EditProfile;
