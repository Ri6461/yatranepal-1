import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container contact-container">
        <div className="contact-info">
            <h1>Get in Touch</h1>
            <p>Have questions? We'd love to hear from you.</p>
            
            <div className="info-item">
                <h3>Address</h3>
                <p>Pokhara, Nepal</p>
            </div>
             <div className="info-item">
                <h3>Email</h3>
                <p>info@yatranepal.com</p>
            </div>
             <div className="info-item">
                <h3>Phone</h3>
                <p>+977 1234567890</p>
            </div>
        </div>

        <div className="contact-form-wrapper">
            <form className="contact-form">
                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-input" placeholder="Name" />
                </div>
                 <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" className="form-input" placeholder="Email" />
                </div>
                 <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-input" rows="5" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
