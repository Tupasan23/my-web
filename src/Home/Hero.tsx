import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <>
    <div className="hero-wrapper">
      <img src="/hero-bg.jpg" alt="" className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-gradient-bottom" />

      <div className="tagline-bar">
        <span className="star">★</span> DRIVING GROWTH.{' '}
        <span className="highlight">BUILDING TEAMS.</span> CREATING LEGACIES.
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-greeting">
            Hi, I'm <span className="name-teal">Allan James</span>{' '}
            <span className="name-orange">Tupasan</span>
          </h1>

          <div className="hero-roles">
            <span>Sales & Revenue Growth Strategist</span>
            <span className="sep">|</span>
            <span>Business Development Expert</span>
            <span className="sep">|</span>
            <span>AI & Digital Transformation Partner</span>
            <span className="sep">|</span>
            <span>Operations Leader</span>
          </div>

          <p className="hero-desc">
            I help businesses build high-performing teams, streamline operations,
            and scale sustainably through strategy, systems, and people.
            Proven results. Lasting impact.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              Book Consultation →
            </Link>
            <a href="#about" className="btn-secondary">
              ▶ Watch My Story
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src="/person.png" alt="Allan James Tupasan" className="person-img" />

          {/* Floating stat cards */}
          <div className="float-card fc-revenue">
            <div className="fc-icon">📈</div>
            <div className="fc-label">📊 Revenue Supported</div>
            <div className="fc-value">$50M+</div>
            <div className="fc-sub">Across 40+ Clients</div>
            <div className="fc-chart"></div>
          </div>

          <div className="float-card fc-retention">
            <div className="fc-icon">👥</div>
            <div className="fc-label">Client Retention</div>
            <div className="fc-value">95%</div>
            <div className="fc-chart" style={{ color: '#22c55e' }}>+25% this year ↗</div>
          </div>

          <div className="float-card fc-projects">
            <div className="fc-icon">💼</div>
            <div className="fc-label">Projects Completed</div>
            <div className="fc-value">50+</div>
            <div className="fc-sub">Successful Projects</div>
            <div className="fc-chart">↗</div>
          </div>

          <div className="float-card fc-team">
            <div className="fc-icon">👥</div>
            <div className="fc-label">Team Built</div>
            <div className="fc-value">800+</div>
            <div className="fc-sub">Team Members</div>
            <div className="fc-chart">↗</div>
          </div>

          {/* Business card overlay */}
          <div className="business-card-overlay">
            <div>
              <div className="bc-name">Allan James Tupasan</div>
              <div className="bc-role">Business Consultant</div>
              <div className="bc-role">Sales & Revenue Growth Strategist</div>
            </div>
            <img src="/business-card.png" alt="" className="bc-badge" />
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="stats-bar">
      <div className="stat-item">
        <div className="stat-icon navy">👑</div>
        <div>
          <div className="stat-value">7+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon teal">💲</div>
        <div>
          <div className="stat-value">$50M+</div>
          <div className="stat-label">Revenue Supported</div>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon navy">👥</div>
        <div>
          <div className="stat-value">800+</div>
          <div className="stat-label">Team Members Built</div>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon orange">📊</div>
        <div>
          <div className="stat-value">50+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon teal">🏆</div>
        <div>
          <div className="stat-value">95%</div>
          <div className="stat-label">Client Retention</div>
        </div>
      </div>
    </div>

    {/* Trusted By */}
    <div className="trusted-section">
      <div className="trusted-label">Trusted by Businesses Worldwide</div>
      <div className="trusted-logos">
        <div className="trusted-logo">
          <span className="logo-name">ELEVEAL</span>
          <span className="logo-sub">BPO</span>
        </div>
        <div className="trusted-logo">
          <span className="logo-name">FORGE</span>
          <span className="logo-sub">Talent Partners</span>
        </div>
        <div className="trusted-logo">
          <span className="logo-name">VERITAS</span>
          <span className="logo-sub">Core BPO Solutions</span>
        </div>
        <div className="trusted-logo">
          <span className="logo-name">Staff Domain</span>
          <span className="logo-sub">Incorporated</span>
        </div>
        <div className="trusted-logo">
          <span className="logo-name">BruntWork</span>
          <span className="logo-sub">Global</span>
        </div>
        <div className="trusted-logo">
          <span className="logo-name">Remote</span>
          <span className="logo-sub">CoWorker</span>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
