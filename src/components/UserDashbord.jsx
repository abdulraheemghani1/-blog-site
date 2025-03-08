import React from "react";
import "../CssFiles/UserDashbord.css"; // Import the CSS file for styling

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      {/* Dashboard Title */}
      <h1 className="dashboard-title">User Dashboard</h1>

      {/* Stats Cards Section */}
      <div className="stats-section">
        {/* Earned Coins Card */}
        <div className="stats-card">
          <h3 className="stats-title">Earned Coins</h3>
          <p className="stats-value">1,250</p>
          <div className="stats-icon">💰</div>
        </div>

        {/* Total Ads Card */}
        <div className="stats-card">
          <h3 className="stats-title">Total Ads</h3>
          <p className="stats-value">45</p>
          <div className="stats-icon">📢</div>
        </div>

        {/* Review Count Card */}
        <div className="stats-card">
          <h3 className="stats-title">Review Count</h3>
          <p className="stats-value">120</p>
          <div className="stats-icon">⭐</div>
        </div>

        {/* Completed Tasks Card */}
        <div className="stats-card">
          <h3 className="stats-title">Completed Tasks</h3>
          <p className="stats-value">85</p>
          <div className="stats-icon">✅</div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;