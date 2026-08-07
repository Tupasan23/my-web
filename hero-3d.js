(() => {
  const mount = () => {
    if (location.pathname.replace(/\/$/, '') !== '') return;
    const main = document.querySelector('main');
    if (!main) return;
    const currentHero = [...main.children].find((node) => node.querySelector('h1'));
    if (!currentHero || document.querySelector('.aj-hero-3d')) return;

    const portrait = currentHero.querySelector('img')?.getAttribute('src') || '/uploads/hero-photo.png';
    currentHero.replaceWith(Object.assign(document.createElement('section'), {
      className: 'aj-hero-3d',
      innerHTML: `
        <div class="aj-ambient aj-ambient-one"></div><div class="aj-ambient aj-ambient-two"></div>
        <div class="aj-hero-wrap">
          <div class="aj-copy">
            <span class="aj-kicker"><i></i> BUSINESS GROWTH ARCHITECT</span>
            <h1>Turning vision into<br><em>measurable results.</em></h1>
            <p>Helping businesses build, scale, and transform through strategic solutions, operational excellence, AI-powered innovation, structured systems, and people-first leadership.</p>
            <div class="aj-actions"><a href="/contact">Connect With Me <b>→</b></a><a class="aj-secondary" href="/skills">Explore Skills <b>↗</b></a></div>
            <div class="aj-trust"><span>7+<small>Years of global business experience</small></span><span>50M+<small>Client value delivered</small></span><span>800+<small>Projects and people impacted</small></span></div>
          </div>
          <div class="aj-stage" aria-label="Interactive 3D business growth visual">
            <div class="aj-orbit aj-orbit-a"></div><div class="aj-orbit aj-orbit-b"></div><div class="aj-orbit aj-orbit-c"></div>
            <div class="aj-globe"><span></span><span></span><span></span></div>
            <div class="aj-portrait"><img src="${portrait}" alt="Allan James Tupasan"></div>
            <div class="aj-panel aj-panel-growth"><strong>Growth outlook</strong><b>+63%</b><svg viewBox="0 0 160 55" aria-hidden="true"><path d="M1 48 L32 41 L61 44 L90 27 L118 32 L159 5"/></svg></div>
            <div class="aj-panel aj-panel-scale"><strong>Client retention</strong><b>98%</b><i>Trusted partnerships</i></div>
            <div class="aj-panel aj-panel-network"><strong>Global reach</strong><b>40+</b><i>Clients worldwide</i></div>
            <div class="aj-node aj-node-one"></div><div class="aj-node aj-node-two"></div><div class="aj-node aj-node-three"></div>
          </div>
        </div>`
    }));

    const style = document.createElement('style');
    style.textContent = `
      .aj-hero-3d{--teal:#0f766e;--aqua:#14b8a6;--ink:#07131a;position:relative;isolation:isolate;overflow:hidden;min-height:calc(100vh - 1px);display:grid;align-items:center;background:linear-gradient(135deg,#fbfdfc 0%,#eff8f6 55%,#e1f4ef 100%);color:#0a1b22;padding:110px 5vw 70px;font-family:Inter,system-ui,sans-serif}.aj-hero-3d:before{content:"";position:absolute;inset:0;opacity:.35;background-image:linear-gradient(rgba(15,118,110,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(15,118,110,.08) 1px,transparent 1px);background-size:44px 44px;mask-image:linear-gradient(90deg,#000,transparent 68%);z-index:-1}.aj-ambient{position:absolute;border-radius:999px;filter:blur(20px);z-index:-1}.aj-ambient-one{width:55vw;height:55vw;right:-17vw;top:-17vw;background:radial-gradient(circle,#58d3bf55,transparent 68%);animation:ajBreathe 8s ease-in-out infinite}.aj-ambient-two{width:25vw;height:25vw;left:-13vw;bottom:-15vw;background:#f18f3055;filter:blur(70px)}.aj-hero-wrap{width:min(1400px,100%);margin:auto;display:grid;grid-template-columns:minmax(330px,.86fr) minmax(520px,1.14fr);gap:4vw;align-items:center}.aj-copy{position:relative;z-index:4}.aj-kicker{display:flex;align-items:center;gap:10px;color:var(--teal);font-size:12px;font-weight:800;letter-spacing:.16em}.aj-kicker i{width:42px;height:2px;background:linear-gradient(90deg,var(--teal),#f18f30)}.aj-copy h1{font-size:clamp(3.25rem,5.4vw,6.3rem);letter-spacing:-.07em;line-height:.92;margin:22px 0;color:#10202a}.aj-copy h1 em{font-family:Georgia,serif;font-weight:400;color:var(--teal);letter-spacing:-.05em}.aj-copy p{max-width:550px;color:#49616a;font-size:17px;line-height:1.7}.aj-actions{display:flex;gap:13px;flex-wrap:wrap;margin:32px 0}.aj-actions a{display:inline-flex;align-items:center;gap:24px;padding:15px 22px;border-radius:999px;background:var(--teal);box-shadow:0 14px 30px #0f766e33;color:white;font-size:14px;font-weight:800;text-decoration:none;transition:transform .25s,box-shadow .25s}.aj-actions a:hover{transform:translateY(-3px);box-shadow:0 19px 35px #0f766e44}.aj-actions .aj-secondary{color:#14303a;background:#ffffffaa;border:1px solid #b7d9d3;box-shadow:none}.aj-trust{display:flex;gap:18px;flex-wrap:wrap;border-top:1px solid #b8dcd5;padding-top:22px}.aj-trust span{color:var(--teal);font-size:22px;font-weight:800}.aj-trust small{display:block;color:#587078;font-size:10px;font-weight:600;max-width:115px;line-height:1.35;margin-top:3px}.aj-stage{height:650px;min-width:0;position:relative;perspective:1200px;transform-style:preserve-3d;--rx:0deg;--ry:0deg;transform:rotateX(var(--rx)) rotateY(var(--ry));transition:transform .25s ease-out}.aj-globe{position:absolute;right:6%;top:7%;width:min(35vw,470px);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 34% 29%,#dcfff8 0 2%,#37c8b3 3%,#0d8179 28%,#07505a 64%,#043642 100%);box-shadow:inset -42px -32px 80px #021f2caa,0 0 0 1px #a8fff144,0 35px 80px #064f5d44;transform:translateZ(30px);overflow:hidden;animation:ajFloat 8s ease-in-out infinite}.aj-globe:after{content:"";position:absolute;inset:12%;border-radius:50%;background:repeating-linear-gradient(12deg,transparent 0 13px,#cefff522 14px 15px),repeating-linear-gradient(93deg,transparent 0 16px,#cefff522 17px 18px);mix-blend-mode:screen}.aj-globe span{position:absolute;border:1px solid #dafff477;border-radius:50%;inset:20%;transform:rotate(25deg) scaleY(.4)}.aj-globe span:nth-child(2){inset:8%;transform:rotate(-43deg) scaleY(.48)}.aj-globe span:nth-child(3){inset:32%;transform:rotate(90deg) scaleY(.34)}.aj-orbit{position:absolute;right:-3%;top:2%;width:min(46vw,620px);aspect-ratio:1;border:1px solid #148b8566;border-radius:50%;transform:rotateX(70deg) rotateZ(22deg);animation:ajOrbit 14s linear infinite}.aj-orbit-b{right:1%;top:4%;transform:rotateX(67deg) rotateZ(-38deg);animation-duration:18s}.aj-orbit-c{right:4%;top:9%;transform:rotateX(72deg) rotateZ(86deg);animation-duration:22s}.aj-portrait{position:absolute;right:13%;bottom:0;width:min(30vw,410px);height:82%;z-index:2;mask-image:linear-gradient(#000 78%,transparent 100%);filter:drop-shadow(0 26px 20px #053c4255);transform:translateZ(80px)}.aj-portrait img{width:100%;height:100%;object-fit:contain;object-position:bottom}.aj-panel{position:absolute;z-index:5;min-width:150px;padding:15px 17px;border:1px solid #ffffffaa;border-radius:15px;background:linear-gradient(135deg,#ffffffd9,#dcf8f2ad);backdrop-filter:blur(14px);box-shadow:0 18px 35px #075c5840;color:#25444b;transform:translateZ(120px);animation:ajPanel 7s ease-in-out infinite}.aj-panel strong,.aj-panel i{display:block;font-size:10px;font-style:normal;font-weight:700;letter-spacing:.04em;color:#55747a}.aj-panel b{display:block;margin:5px 0;color:var(--teal);font-size:28px;letter-spacing:-.05em}.aj-panel svg{width:130px;height:38px}.aj-panel path{fill:none;stroke:#0f998e;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}.aj-panel-growth{left:2%;top:23%}.aj-panel-scale{right:0;top:48%;animation-delay:-2s}.aj-panel-network{left:11%;bottom:14%;animation-delay:-4s}.aj-node{position:absolute;z-index:6;width:10px;height:10px;border-radius:50%;background:#f18f30;box-shadow:0 0 0 7px #f18f3033,0 0 22px #f18f30;animation:ajPulse 2s infinite}.aj-node-one{right:17%;top:8%}.aj-node-two{right:1%;bottom:28%}.aj-node-three{left:18%;top:42%}@keyframes ajFloat{50%{transform:translate3d(0,-16px,55px) rotate(2deg)}}@keyframes ajOrbit{to{transform:rotateX(70deg) rotateZ(382deg)}}@keyframes ajPanel{50%{transform:translate3d(0,-12px,135px)}}@keyframes ajBreathe{50%{transform:scale(1.12);opacity:.65}}@keyframes ajPulse{50%{transform:scale(1.4);opacity:.72}}@media(max-width:900px){.aj-hero-3d{padding-top:110px}.aj-hero-wrap{grid-template-columns:1fr;gap:15px}.aj-stage{height:520px;order:-1}.aj-copy{padding-top:10px}.aj-globe{right:11%;width:min(74vw,390px)}.aj-portrait{right:17%;width:min(61vw,330px)}.aj-panel-network{left:0}.aj-panel-growth{left:0}.aj-panel-scale{right:0}.aj-trust{margin-bottom:15px}}@media(max-width:560px){.aj-hero-3d{padding:95px 22px 50px}.aj-stage{height:420px}.aj-panel{min-width:112px;padding:10px 11px}.aj-panel b{font-size:20px}.aj-panel svg{width:90px}.aj-panel-network{display:none}.aj-copy h1{font-size:3.2rem}.aj-copy p{font-size:15px}.aj-trust{gap:12px}.aj-trust span{font-size:18px}.aj-portrait{height:85%}.aj-actions a{padding:13px 16px;gap:12px}}
    `;
    document.head.append(style);
    const stage = document.querySelector('.aj-stage');
    stage.addEventListener('pointermove', (event) => {
      const r = stage.getBoundingClientRect();
      stage.style.setProperty('--ry', `${((event.clientX-r.left)/r.width-.5)*5}deg`);
      stage.style.setProperty('--rx', `${((event.clientY-r.top)/r.height-.5)*-4}deg`);
    });
    stage.addEventListener('pointerleave', () => { stage.style.setProperty('--rx','0deg'); stage.style.setProperty('--ry','0deg'); });
  };
  const boot = () => { mount(); setTimeout(mount, 450); setTimeout(mount, 1300); };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', boot) : boot();
  addEventListener('popstate', boot);
})();
