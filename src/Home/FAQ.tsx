import React from 'react';

const FAQ = () => (
  <section className="section" id="faq">
    <div className="section-label">Common Questions</div>
    <h2>Frequently Asked Questions</h2>
    <p>
      Find answers to the most common questions about our consulting services and process.
    </p>
    <div className="faq-list">
      {[
        { q: 'What types of businesses do you work with?', a: 'We work with startups, scale-ups, and established companies across BPO, technology, professional services, and e-commerce industries. If you have a growth challenge, we can help.' },
        { q: 'How long does a typical engagement last?', a: 'Most engagements range from 3 to 12 months depending on the scope. Strategy projects may be shorter, while transformation and team-building programs typically require longer commitments for lasting impact.' },
        { q: 'What results can I expect?', a: 'Our clients typically see measurable improvements in revenue (50-200% growth), operational efficiency (30-40% improvement), and team performance within the first 6 months.' },
        { q: 'How do we get started?', a: 'Simply book a consultation through our contact page. We will discuss your goals, assess your current situation, and propose a tailored solution within 48 hours.' },
      ].map((item, i) => (
        <div className="faq-item" key={i}>
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
