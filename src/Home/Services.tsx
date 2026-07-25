import React from 'react';

const Services = () => (
  <section className="section" id="services">
    <div className="section-label">What We Offer</div>
    <h2>Services That Drive Results</h2>
    <p>
      We offer a comprehensive suite of consulting services designed to help your
      business grow, optimize, and scale with confidence.
    </p>
    <div className="services-grid">
      {[
        { icon: '📊', bg: '#0ea5a0', title: 'Sales & Revenue Strategy', desc: 'Data-driven strategies to accelerate revenue growth and maximize profitability across your business.' },
        { icon: '👥', bg: '#0a1628', title: 'Team Building & Leadership', desc: 'Build high-performing teams with proven hiring frameworks, leadership development, and culture design.' },
        { icon: '⚙️', bg: '#f97316', title: 'Operations Optimization', desc: 'Streamline processes, reduce waste, and improve efficiency through systematic operational improvements.' },
        { icon: '', bg: '#0ea5a0', title: 'AI & Digital Transformation', desc: 'Leverage AI and modern technology to automate workflows and gain competitive advantages.' },
        { icon: '🚀', bg: '#0a1628', title: 'Business Development', desc: 'Identify new opportunities, forge strategic partnerships, and expand your market reach.' },
        { icon: '📈', bg: '#f97316', title: 'Growth Consulting', desc: 'End-to-end growth strategies that combine marketing, sales, and operations for maximum impact.' },
      ].map((item, i) => (
        <div className="service-card" key={i}>
          <div className="sc-icon" style={{ background: item.bg, color: 'white' }}>{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
