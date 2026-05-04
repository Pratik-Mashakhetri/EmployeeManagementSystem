import React from 'react'
import './css/aboutus.css';

export default function AboutUs() {
    return (
        <div>
            <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Our Employee Management System</h1>
        <p>Smart solutions to simplify workforce management</p>
      </section>

      {/* STORY */}
      <section className="about-story">
        <h2>Who We Are</h2>
        <p>
          We provide a powerful Employee Management System that helps
          organizations manage employees, automate HR processes, and
          improve productivity with modern technology.
        </p>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        <div className="feature-box">
          <h3>⚡ Fast</h3>
          <p>Lightning fast performance and smooth UI.</p>
        </div>
        <div className="feature-box">
          <h3>🔒 Secure</h3>
          <p>Advanced data protection and role-based access.</p>
        </div>
        <div className="feature-box">
          <h3>📊 Smart Analytics</h3>
          <p>Insights and reports for better decision making.</p>
        </div>
        <div className="feature-box">
          <h3>☁️ Cloud Ready</h3>
          <p>Access your system from anywhere.</p>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div><h2>1000+</h2><p>Employees Managed</p></div>
        <div><h2>100+</h2><p>Companies</p></div>
        <div><h2>99.9%</h2><p>Uptime</p></div>
        <div><h2>24/7</h2><p>Support</p></div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span>2023</span>
            <p>Project Started</p>
          </div>
          <div className="timeline-item">
            <span>2024</span>
            <p>First Version Released</p>
          </div>
          <div className="timeline-item">
            <span>2025</span>
            <p>100+ Clients Onboarded</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <h4>HR Manager</h4>
            <p>Manages employee lifecycle</p>
          </div>
          <div className="team-card">
            <h4>Developers</h4>
            <p>Build and maintain system</p>
          </div>
          <div className="team-card">
            <h4>Support Team</h4>
            <p>24/7 customer assistance</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to simplify your HR?</h2>
        <button>Get Started</button>
      </section>

    </div>
        </div>
    )
}
