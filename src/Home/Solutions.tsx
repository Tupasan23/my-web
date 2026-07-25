import React from 'react';

const Solutions = () => (
  <section className="section" id="solutions">
    <div className="section-label">How We Help</div>
    <h2>Custom Solutions for Your Goals</h2>
    <p>
      Every business is unique. We design tailored solutions that address your
      specific challenges and opportunities.
    </p>
    <div className="solutions-grid">
      {[
        { title: 'Startup Acceleration', desc: 'Go from idea to revenue with structured frameworks for product, team, and market fit.' },
        { title: 'Scale-Up Strategy', desc: 'Break through plateaus with systems that support 10x growth without breaking your operations.' },
        { title: 'Digital Overhaul', desc: 'Modernize your tech stack, automate key processes, and unlock data-driven decision making.' },
        { title: 'Team Transformation', desc: 'Reskill, restructure, and rebuild your team for the challenges of tomorrow.' },
      ].map((item, i) => (
        <div className="solution-card" key={i}>
          <div className="sol-num">{String(i + 1).padStart(2, '0')}</div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Solutions;
