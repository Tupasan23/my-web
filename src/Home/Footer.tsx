import React from 'react';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <div className="footer-brand">
        <div className="brand-name">CONSULT</div>
        <p>
          Strategy. Systems. People. Growth.<br />
          Empowering businesses to build high-performing teams,
          streamline operations, and scale sustainably.
        </p>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-col">
        <h4>Services</h4>
        <a href="/services">Revenue Strategy</a>
        <a href="/services">Team Building</a>
        <a href="/services">AI & Digital</a>
        <a href="/services">Growth Consulting</a>
      </div>
      <div className="footer-col">
        <h4>Connect</h4>
        <a href="/contact">Book a Call</a>
        <a href="/contact">Send Message</a>
        <a href="/blog">Read Blog</a>
        <a href="/portfolio">Case Studies</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Consult AJ Tupasan. All rights reserved.</span>
      <span>
        <a href="#">Privacy</a> · <a href="#">Terms</a>
      </span>
    </div>
  </footer>
);

export default Footer;
