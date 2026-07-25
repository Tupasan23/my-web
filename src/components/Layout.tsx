import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header className="site-header">
      <div className="brand-group">
        <img src="/logo-icon.png" alt="Consult Logo" className="brand-logo" />
        <div className="brand-text">
          <span className="brand-name">CONSULT</span>
          <span className="brand-tagline">Strategy. Systems. People. Growth.</span>
        </div>
      </div>
      <nav className="site-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/contact" className="btn-consultation">
          Book Consultation →
        </NavLink>
      </nav>
    </header>

    <Outlet />
  </>
);

export default Layout;
