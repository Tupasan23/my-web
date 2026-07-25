import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header className="site-header">
      <div className="brand">Consult AJ Tupasan</div>
      <nav className="site-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>

    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
