import React from 'react';

const About = () => (
  <section className="section" id="about">
    <div className="section-label">About Us</div>
    <h2>Who We Are</h2>
    <p>
      We are a strategic consulting firm dedicated to helping businesses transform,
      grow, and thrive in today's competitive landscape. With over 7 years of experience,
      we've supported 40+ clients in generating $50M+ in revenue while building
      high-performing teams of 800+ members.
    </p>
    <div className="services-grid" style={{ marginTop: '2rem' }}>
      {[
        { icon: '', bg: '#0ea5a0', title: 'Our Mission', desc: 'Empower businesses with the strategy, systems, and people to achieve sustainable growth.' },
        { icon: '🔭', bg: '#0a1628', title: 'Our Vision', desc: 'Be the most trusted consulting partner for businesses seeking transformation and lasting impact.' },
        { icon: '💎', bg: '#f97316', title: 'Our Values', desc: 'Integrity, innovation, excellence, and unwavering commitment to our clients success.' },
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

export default About;
