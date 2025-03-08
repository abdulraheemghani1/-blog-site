import React from "react";
import "../CssFiles/AdminPanel.css"; // Import the CSS file for styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Dashboard Title */}
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Quick Stats Section */}
      <div className="quick-stats">
        <div className="stats-card">
          <h3 className="stats-title">Total Users</h3>
          <p className="stats-value">1,250</p>
          <div className="stats-icon">👥</div>
        </div>
        <div className="stats-card">
          <h3 className="stats-title">Active Sessions</h3>
          <p className="stats-value">45</p>
          <div className="stats-icon">🖥️</div>
        </div>
        <div className="stats-card">
          <h3 className="stats-title">Tasks Completed</h3>
          <p className="stats-value">85</p>
          <div className="stats-icon">✅</div>
        </div>
        <div className="stats-card">
          <h3 className="stats-title">Revenue</h3>
          <p className="stats-value">$12,500</p>
          <div className="stats-icon">💰</div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="recent-activities">
        <h2 className="section-title">Recent Activities</h2>
        <ul className="activities-list">
          <li className="activity-item">
            <span className="activity-icon">📝</span>
            <p className="activity-text">User JohnDoe updated their profile.</p>
          </li>
          <li className="activity-item">
            <span className="activity-icon">🛒</span>
            <p className="activity-text">New order placed by JaneDoe.</p>
          </li>
          <li className="activity-item">
            <span className="activity-icon">📊</span>
            <p className="activity-text">Report generated for Q1 2023.</p>
          </li>
          <li className="activity-item">
            <span className="activity-icon">🔒</span>
            <p className="activity-text">System security updated.</p>
          </li>
        </ul>
      </div>

      {/* User Management Section */}
      <div className="user-management">
        <h2 className="section-title">User Management</h2>
        <div className="user-table">
          <div className="table-header">
            <span className="header-item">Name</span>
            <span className="header-item">Email</span>
            <span className="header-item">Role</span>
            <span className="header-item">Actions</span>
          </div>
          <div className="table-row">
            <span className="row-item">JohnDoe</span>
            <span className="row-item">john@example.com</span>
            <span className="row-item">Admin</span>
            <span className="row-item">
              <button className="action-button">Edit</button>
              <button className="action-button delete">Delete</button>
            </span>
          </div>
          <div className="table-row">
            <span className="row-item">JaneDoe</span>
            <span className="row-item">jane@example.com</span>
            <span className="row-item">User</span>
            <span className="row-item">
              <button className="action-button">Edit</button>
              <button className="action-button delete">Delete</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;