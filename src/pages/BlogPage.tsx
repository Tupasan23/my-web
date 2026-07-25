import React from 'react';

const BlogPage = () => (
  <>
    <div className="page-header">
      <h1>Blog & Insights</h1>
      <p>Thoughts on strategy, growth, and digital transformation.</p>
    </div>
    <main>
      <section className="section">
        <div className="section-label">Latest Articles</div>
        <h2>Stay Updated</h2>
        <p>Our blog covers the latest trends in business strategy, team building, AI adoption, and revenue growth. Check back soon for new articles.</p>
        <div className="services-grid">
          {[
            { icon: '📊', bg: '#0ea5a0', title: '5 Strategies to Double Your Revenue in 2026', desc: 'Proven frameworks that our clients use to accelerate growth and scale sustainably.' },
            { icon: '🤖', bg: '#0a1628', title: 'How AI is Transforming Business Operations', desc: 'Real-world examples of AI integration that saved thousands of hours and boosted efficiency.' },
            { icon: '👥', bg: '#f97316', title: 'Building High-Performing Remote Teams', desc: 'Lessons learned from helping companies build and manage teams of 800+ members.' },
          ].map((item, i) => (
            <div className="service-card" key={i}>
              <div className="sc-icon" style={{ background: item.bg, color: 'white' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  </>
);

export default BlogPage;
