import { useState } from 'react';

export default function Contact() {
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate sending email api call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="section" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          
          {/* Left: Contact Info Cards */}
          <div className="contact-info-area animate-slide delay-1">
            <div className="contact-info-title">
              <h3>Let's Collaborate</h3>
              <p className="contact-desc">
                Whether you have an upcoming project query, a developer position offer, or just want to connect, feel free to drop a message. I will respond to your inquiry as soon as possible!
              </p>
            </div>

            <div className="contact-methods">
              {/* Method: Phone */}
              <div className="contact-method-card">
                <div className="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.7 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h5>Phone</h5>
                  <p><a href="tel:0702315229">070 231 5229</a></p>
                </div>
              </div>

              {/* Method: Email */}
              <div className="contact-method-card">
                <div className="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-details">
                  <h5>Email</h5>
                  <p><a href="mailto:kavinduchirath2@gmail.com">kavinduchirath2@gmail.com</a></p>
                </div>
              </div>

              {/* Method: LinkedIn */}
              <div className="contact-method-card">
                <div className="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h5>LinkedIn</h5>
                  <p><a href="https://linkedin.com/in/kavindu-chirath" target="_blank" rel="noopener noreferrer">linkedin.com/in/kavindu-chirath</a></p>
                </div>
              </div>

              {/* Method: Address */}
              <div className="contact-method-card">
                <div className="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-details">
                  <h5>Address</h5>
                  <p>153/E/1 Gintota, Galle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="contact-form-wrapper animate-slide delay-2">
            {formSuccess ? (
              <div className="form-success-overlay">
                <div className="success-icon-ring">✓</div>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out, Kavindu. Your message has been sent successfully. I will get back to you shortly.</p>
                <button className="btn btn-secondary" onClick={() => setFormSuccess(false)}>Send Another Message</button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className={`form-input ${formErrors.name ? 'error-border' : ''}`}
                  placeholder="John Doe" 
                />
                {formErrors.name && <span className="error-text" style={{ fontSize: '0.8rem', color: '#ef4444' }}>{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className={`form-input ${formErrors.email ? 'error-border' : ''}`}
                  placeholder="john@example.com" 
                />
                {formErrors.email && <span className="error-text" style={{ fontSize: '0.8rem', color: '#ef4444' }}>{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className={`form-input ${formErrors.message ? 'error-border' : ''}`}
                  placeholder="Hi Kavindu, I'd love to discuss..."
                ></textarea>
                {formErrors.message && <span className="error-text" style={{ fontSize: '0.8rem', color: '#ef4444' }}>{formErrors.message}</span>}
              </div>

              <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
