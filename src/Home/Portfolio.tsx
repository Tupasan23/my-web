import React from 'react';

const Portfolio = () => (
  <section className="section" id="portfolio">
    <div className="section-label">Our Work</div>
    <h2>Featured Projects & Success Stories</h2>
    <p>
      A selection of recent client engagements where we delivered measurable results.
    </p>
    <div className="portfolio-grid">
      {[
        { icon: '🏢', title: 'EleveAl BPO', desc: 'Revenue growth strategy — 200% increase in 12 months', gradient: 'linear-gradient(135deg, #0a1628, #0ea5a0)' },
        { icon: '💼', title: 'Forge Talent Partners', desc: 'Team building program — 150+ hires in 6 months', gradient: 'linear-gradient(135deg, #0ea5a0, #f97316)' },
        { icon: '', title: 'Veritas Core BPO', desc: 'Operations optimization — 40% cost reduction', gradient: 'linear-gradient(135deg, #f97316, #0a1628)' },
        { icon: '🌐', title: 'Staff Domain Inc.', desc: 'Digital transformation — full AI integration', gradient: 'linear-gradient(135deg, #0a1628, #1e293b)' },
        { icon: '🚀', title: 'BruntWork Global', desc: 'Market expansion — entered 3 new markets', gradient: 'linear-gradient(135deg, #0ea5a0, #0a1628)' },
        { icon: '👥', title: 'Remote CoWorker', desc: 'Growth consulting — $5M+ revenue supported', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
      ].map((item, i) => (
        <div className="portfolio-card" key={i}>
          <div className="portfolio-thumb" style={{ background: item.gradient }}>{item.icon}</div>
          <div className="portfolio-info">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
