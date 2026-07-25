document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.createElement('footer');
  footer.style.textAlign = 'center';
  footer.style.padding = '1rem 0 2rem';
  footer.style.color = '#aebbd0';
  footer.innerHTML = `© ${year} My Web. All rights reserved.`;
  document.body.appendChild(footer);
});
