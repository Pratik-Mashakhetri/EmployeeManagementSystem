import React from 'react'
import './css/contactus.css'
export default function ContactUs() {
  return (
    <div>
         <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out anytime.</p>
      </section>

      {/* MAIN SECTION */}
      <div className="contact-wrapper">

        {/* LEFT SIDE - INFO */}
        <div className="contact-left">

          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>Pune, Maharashtra, India</p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 9518501807</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>support@ems.com</p>
          </div>

          <div className="contact-social">
            <h4>Follow Us</h4>
            <div className="icons">
              <span>🌐</span>
              <span>💼</span>
              <span>📱</span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-right">
          <h2>Send Message</h2>

          <form className="contact-form">
            <div className="input-group">
              <input type="text" required />
              <label>Full Name</label>
            </div>

            <div className="input-group">
              <input type="email" required />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input type="text" />
              <label>Subject</label>
            </div>

            <div className="input-group">
              <textarea rows="4" required></textarea>
              <label>Message</label>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* MAP SECTION */}
      <section className="contact-map">
  <h2>Our Location</h2>

  <div className="map-box">
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.301927726338!2d73.85436941193728!3d18.46997808254136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb2005244527%3A0xd57368a39eb42be4!2sHefShine%20Softwares!5e0!3m2!1sen!2sin!4v1776451312397!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>

    </div>
    </div>
  )
}
