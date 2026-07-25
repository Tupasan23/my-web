import React from 'react';
import Services from '../Home/Services';
import Solutions from '../Home/Solutions';

const ServicesPage = () => (
  <>
    <div className="page-header">
      <h1>Our Services</h1>
      <p>Explore our full range of services for modern growth.</p>
    </div>
    <main>
      <Services />
      <Solutions />
    </main>
  </>
);

export default ServicesPage;
