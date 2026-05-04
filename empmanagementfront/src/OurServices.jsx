import React from 'react'
import './css/ourservices.css'

export default function OurServices() {
  return (
    <div>
  <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Everything you need to manage employees efficiently</p>
      </section>

      {/* CORE SERVICES */}
      <section className="services-section">
        <h2>Core Features</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>👨‍💼 Employee Management</h3>
            <p>Complete employee profile handling and updates.</p>
            <ul>
              <li>Add / Edit Employees</li>
              <li>Document Management</li>
              <li>Profile Tracking</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>⏱ Attendance System</h3>
            <p>Track employee attendance and working hours.</p>
            <ul>
              <li>Daily Logs</li>
              <li>Leave Requests</li>
              <li>Shift Scheduling</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>💰 Payroll Management</h3>
            <p>Automated salary and tax calculations.</p>
            <ul>
              <li>Salary Processing</li>
              <li>Payslip Generation</li>
              <li>Tax Handling</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>📊 Reports & Analytics</h3>
            <p>Generate insights and reports easily.</p>
            <ul>
              <li>Performance Reports</li>
              <li>Attendance Reports</li>
              <li>Custom Dashboards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ADVANCED FEATURES */}
      <section className="services-advanced">
        <h2>Advanced Capabilities</h2>

        <div className="advanced-grid">
          <div className="advanced-box">🔒 Role-Based Access</div>
          <div className="advanced-box">☁️ Cloud Integration</div>
          <div className="advanced-box">📱 Mobile Friendly</div>
          <div className="advanced-box">⚡ Real-time Updates</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="services-process">
        <h2>How It Works</h2>

        <div className="process-steps">
          <div className="step">
            <span>1</span>
            <p>Add Employees</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Track Activity</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Generate Reports</p>
          </div>
          <div className="step">
            <span>4</span>
            <p>Optimize Workflow</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Start Managing Your Workforce Today</h2>
        <button>Explore System</button>
      </section>

    </div>
    </div>
  )
}
