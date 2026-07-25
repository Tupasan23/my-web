import React from 'react';

const Contact = () => (
  <section className="section" id="contact">
    <div className="section-label">Get In Touch</div>
    <h2>Let's Start Your Next Project</h2>
    <p>
      Ready to transform your business? Reach out and let's discuss how we can
      help you achieve your goals.
    </p>
    <div className="contact-grid">
      <div className="contact-info">
        {[
          { icon: '', bg: '#0ea5a0', label: 'Email', value: 'allan@consult-ajt.com' },
          { icon: '📱', bg: '#0a1628', label: 'Phone', value: '+63 912 345 6789' },
          { icon: '📍', bg: '#f97316', label: 'Location', value: 'Davao City, Philippines' },
          { icon: '🕐', bg: '#0ea5a0', label: 'Availability', value: 'Mon - Fri, 9AM - 6PM PHT' },
        ].map((item, i) => (
          <div className="contact-item" key={i}>
            <div className="ci-icon" style={{ background: item.bg, color: 'white' }}>{item.icon}</div>
            <div>
              <div className="ci-label">{item.label}</div>
              <div className="ci-value">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Tell us about your project..." />
        <button type="submit" className="btn-submit">Send Message →</button>
      </form>
    </div>
  </section>
);

export default Contact;
