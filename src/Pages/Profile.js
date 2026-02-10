import React from "react";
import "./Profile.css";

const Profile = ({ profile }) => {
  if (!profile) {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <p>Loading profile...</p>
            </div>
        </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
           <div className="profile-avatar">
              {profile.name ? profile.name.charAt(0).toUpperCase() : "U"}
           </div>
           <h2>My Profile</h2>
        </div>
        
        <div className="profile-details">
            <div className="profile-group">
                <label>Full Name</label>
                <p className="profile-value">{profile.name}</p>
            </div>
            <div className="profile-group">
                <label>Email Address</label>
                 <p className="profile-value">{profile.email}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
