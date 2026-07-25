import React from 'react';

const NotFoundPage = () => (
  <div className="page-header" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{ fontSize: '5rem' }}>404</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Page not found</p>
    <a href="/" className="btn-primary" style={{ textDecoration: 'none' }}>← Back to Home</a>
  </div>
);

export default NotFoundPage;
