import React from 'react';

const Testimonials = () => (
  <section className="section" id="testimonials">
    <div className="section-label">Client Feedback</div>
    <h2>What Our Clients Say</h2>
    <p>
      Hear from the businesses and leaders who have partnered with us to achieve
      extraordinary results.
    </p>
    <div className="testimonials-grid">
      {[
        { quote: "Allan's strategic vision transformed our entire approach to sales. We went from struggling to hit targets to exceeding them by 200%.", author: 'Maria Santos', role: 'CEO, EleveAl BPO' },
        { quote: "The team building framework he implemented helped us hire and retain top talent. Our culture has never been stronger.", author: 'David Chen', role: 'Founder, Forge Talent Partners' },
        { quote: "Working with Consult was a game-changer. The AI integration alone saved us thousands of hours annually.", author: 'Sarah Williams', role: 'COO, Staff Domain Inc.' },
      ].map((item, i) => (
        <div className="testimonial-card" key={i}>
          <div className="stars">★★★★★</div>
          <p className="quote">"{item.quote}"</p>
          <div className="author">{item.author}</div>
          <div className="author-role">{item.role}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
