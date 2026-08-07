(() => {
  const apply = () => {
    if (!location.pathname.replace(/\/$/, '').endsWith('/about')) return;
    const heading = [...document.querySelectorAll('h1,h2,h3')].find((node) => /my path|journey of growth|my journey/i.test(node.textContent));
    const section = heading?.closest('section');
    if (!section || section.classList.contains('aj-journey-slide')) return;
    section.classList.add('aj-journey-slide');
    const style = document.createElement('style'); style.textContent = `.aj-journey-slide{position:relative!important;min-height:100vh!important;display:grid!important;align-content:center!important;padding:120px 7vw!important;margin:0!important;isolation:isolate;overflow:hidden;background:radial-gradient(circle at 50% 40%,#123c52 0,#071a32 50%,#03101e 100%)!important}.aj-journey-slide:before{content:"";position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(90deg,transparent 0 55px,#33cbbd0c 56px 57px)}.aj-journey-slide:after{content:"";position:absolute;top:0;left:50%;width:1px;height:100%;background:linear-gradient(transparent,#32d9ca,#f58b2a,#32d9ca,transparent);box-shadow:0 0 18px #25d9c4}@media(max-width:700px){.aj-journey-slide{min-height:auto!important;padding:90px 22px!important}}`; document.head.append(style);
  };
  const run = () => { apply(); setTimeout(apply,500); setTimeout(apply,1300); };
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',run):run(); addEventListener('popstate',run);
})();
