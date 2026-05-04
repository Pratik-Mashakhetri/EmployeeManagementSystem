import React from 'react'
import './css/marquee.css'
import './css/admindashboard.css'
import AdminNavbar from './AdminNavbar'
import { Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
    let navigate=useNavigate();
    return (
          <div className="container-fluid">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">
          <h1>
            Welcome to <br />
            <span>Employee Management System</span>
          </h1>
          <p>
            Manage your organization's employees, leaves, departments and
            performance efficiently.
          </p>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="illustration"
        />
      </div>

      {/* STATS SECTION */}
      <div className="stats">
        <div className="card">
          <div className="icon blue">👥</div>
          <div>
            <h2>128</h2>
            <p>Total Employees</p>
          </div>
        </div>

        <div className="card">
          <div className="icon green">📅</div>
          <div>
            <h2>8</h2>
            <p>Leaves Today</p>
          </div>
        </div>

        <div className="card">
          <div className="icon orange">🏢</div>
          <div>
            <h2>12</h2>
            <p>Departments</p>
          </div>
        </div>

        <div className="card">
          <div className="icon purple">📊</div>
          <div>
            <h2>5</h2>
            <p>Pending Approvals</p>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="actions">
        <h3>Quick Actions</h3>

        <div className="action-grid" onClick={navigate("/addemp")}>
          <div className="action-card">
            <div className="icon blue">➕</div>
            <div>
              <h4>Add Employee</h4>
              <p>Add a new employee</p>
            </div>
          </div>

          <div className="action-card">
            <div className="icon green">📝</div>
            <div>
              <h4>Apply Leave</h4>
              <p>Submit a leave request</p>
            </div>
          </div>

          <div className="action-card">
            <div className="icon orange">📂</div>
            <div>
              <h4>View Leaves</h4>
              <p>Check all leave records</p>
            </div>
          </div>

          <div className="action-card">
            <div className="icon purple">📈</div>
            <div>
              <h4>Reports</h4>
              <p>View system reports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
