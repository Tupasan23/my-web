import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home';

const HomePage = () => (
  <>
    <section className="hero">
      <div>
        <p>Strategic consulting that helps businesses grow with clarity</p>
        <h1>Turn your digital goals into measurable results.</h1>
        <p>
          We help teams modernize operations, improve customer experience, and build a strong online presence.
        </p>
        <div className="button-row">
          <Link to="/services">Explore Services</Link>
          <Link className="secondary" to="/contact">Book a Consultation</Link>
        </div>
      </div>
      <div className="card">
        <h2>What we do</h2>
        <ul>
          <li>Business strategy and planning</li>
          <li>Web design and development</li>
          <li>Digital transformation support</li>
        </ul>
      </div>
    </section>
    <Home />
  </>
);

export default HomePage;
