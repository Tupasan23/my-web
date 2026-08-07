(() => {
  const isHome = () => location.pathname.replace(/\/$/, '') === '';
  const removeHomeServices = () => {
    if (!isHome()) return;
    document.querySelectorAll('h1,h2,h3').forEach((heading) => {
      if (heading.textContent.replace(/\s+/g, ' ').trim().toLowerCase() === 'comprehensive consulting services') {
        heading.closest('section')?.remove();
      }
    });
  };
  const boot = () => {
    if (!isHome()) return;
    const main = document.querySelector('main');
    if (!main || main.querySelector('.aj-about-hero')) return;
    const video = main.querySelector('iframe[src*="youtube"],iframe[src*="youtu.be"]');
    const target = video?.closest('section') || [...main.children][1] || main.lastElementChild;
    if (!target) return;
    if (video) {
      target.querySelectorAll('h1,h2,h3,p').forEach((node) => node.remove());
      target.classList.add('aj-video-fullbleed');
      const url = new URL(video.src, location.href);
      url.searchParams.set('autoplay', '1'); url.searchParams.set('mute', '1');
      url.searchParams.set('playsinline', '1'); url.searchParams.set('rel', '0');
      video.src = url.toString(); video.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      video.setAttribute('title', 'Allan James Tupasan story video');
    }
    const portrait = main.querySelector('img')?.getAttribute('src') || '/uploads/hero-photo.png';
    const paragraphs = `<p>Not because business owners lack experience or dedication—growth often hides inefficiencies in plain sight. Repetitive tasks, manual processes, and operational bottlenecks can quietly become “just the way things are.”</p><p>My role is to help identify those hidden patterns, streamline operations, and build systems that empower leaders to focus on what matters most: growing the business.</p>`;
    const section = document.createElement('section');
    section.className = 'aj-about-hero';
    section.innerHTML = `
      <div class="aj-about-grid"></div><div class="aj-about-sun"></div>
      <div class="aj-about-wrap">
        <div class="aj-about-copy">
          <span class="aj-about-kicker">THE GROWTH CHALLENGE <i></i></span>
          <h1>When growth starts feeling harder than it should.</h1>
          <div class="aj-problem-stack">
            <span>Growth gets stuck in repeated manual work.</span>
            <span>Important decisions wait too long.</span>
            <span>Strong ideas need a clear system to scale.</span>
          </div>
          <div class="aj-about-message">${paragraphs}</div>
        </div>
        <div class="aj-about-stage" aria-label="Allan James Tupasan at work">
          <div class="aj-stage-ring r1"></div><div class="aj-stage-ring r2"></div>
          <div class="aj-speech"><span class="aj-speech-dot"></span><strong>“Many business owners don’t realize they’re solving the same problems every day.”</strong></div>
          <div class="aj-orbit-card"><b>Clarity</b><span>Strategy before noise</span></div>
          <div class="aj-orbit-card card-two"><b>Systems</b><span>Built to scale</span></div>
          <div class="aj-person"><img src="${portrait}" alt="Allan James Tupasan"></div>
          <div class="aj-desk"></div><span class="aj-spark s1"></span><span class="aj-spark s2"></span><span class="aj-spark s3"></span>
        </div>
      </div>`;
    target.after(section);
    if (document.querySelector('#aj-about-hero-style')) return;
    const style = document.createElement('style'); style.id = 'aj-about-hero-style';
    style.textContent = `
      .aj-about-hero{--teal:#078c88;--navy:#071a32;--orange:#f58b2a;position:relative;isolation:isolate;overflow:hidden;min-height:calc(100vh - 1px);padding:118px 5vw 68px;background:linear-gradient(132deg,#fbfdfc 0%,#e5f7f4 58%,#d5f0ea 100%);font-family:Inter,system-ui,sans-serif;color:var(--navy)}.aj-about-grid{position:absolute;inset:0;z-index:-2;background-image:linear-gradient(#078c880c 1px,transparent 1px),linear-gradient(90deg,#078c880c 1px,transparent 1px);background-size:46px 46px}.aj-about-sun{position:absolute;z-index:-1;right:-10vw;top:-16vw;width:50vw;height:50vw;border-radius:50%;background:radial-gradient(circle,#0ab2a33b,transparent 68%);filter:blur(16px)}.aj-about-wrap{width:min(1360px,100%);margin:auto;display:grid;grid-template-columns:minmax(330px,.92fr) minmax(500px,1.08fr);gap:3vw;align-items:center}.aj-about-copy{position:relative;z-index:4}.aj-about-kicker{display:flex;align-items:center;gap:10px;color:var(--teal);font-size:12px;font-weight:900;letter-spacing:.17em}.aj-about-kicker i{width:48px;height:2px;background:linear-gradient(90deg,var(--teal),var(--orange))}.aj-about-copy h1{max-width:620px;margin:18px 0 24px;font-size:clamp(3.3rem,5.8vw,6.8rem);line-height:.9;letter-spacing:-.075em;color:var(--navy)}.aj-problem-stack{display:grid;gap:9px;max-width:510px;margin:0 0 25px}.aj-problem-stack span{position:relative;display:block;padding:13px 25px 13px 22px;border-radius:12px 36px 36px 12px;background:linear-gradient(100deg,#ffffffef,#e0f5f0e8);border-left:4px solid var(--orange);box-shadow:12px 13px 0 #0b374d1c,0 10px 23px #08675e1c;color:#244652;font-size:14px;font-weight:700;transform:translateZ(20px);animation:ajProblem 6s ease-in-out infinite}.aj-problem-stack span:nth-child(2){margin-left:18px;animation-delay:-2s}.aj-problem-stack span:nth-child(3){margin-left:5px;animation-delay:-4s}.aj-about-message{max-width:520px;border-left:2px solid #14aaa0;padding:4px 0 4px 19px;color:#486771;font-size:14px;line-height:1.65}.aj-about-message p{margin:0 0 10px}.aj-about-stage{position:relative;min-height:610px;perspective:1200px;transform-style:preserve-3d;--x:0deg;--y:0deg;transform:rotateX(var(--x)) rotateY(var(--y));transition:transform .25s ease}.aj-stage-ring{position:absolute;left:11%;top:20%;width:80%;aspect-ratio:1;border:1px solid #07948a66;border-radius:50%;transform:rotateX(68deg) rotateZ(18deg);animation:ajAboutOrbit 16s linear infinite}.aj-stage-ring.r2{left:4%;top:24%;width:91%;border-color:#f58b2a55;transform:rotateX(69deg) rotateZ(-42deg);animation-direction:reverse;animation-duration:22s}.aj-person{position:absolute;z-index:4;right:11%;bottom:6%;width:min(34vw,390px);height:87%;filter:drop-shadow(0 28px 22px #07343e55);mask-image:linear-gradient(#000 80%,transparent);transform:translateZ(70px)}.aj-person img{width:100%;height:100%;object-fit:contain;object-position:bottom}.aj-desk{position:absolute;z-index:1;right:2%;bottom:4%;width:88%;height:27%;border-radius:50% 50% 12px 12px;background:linear-gradient(145deg,#0d314b,#071a32 59%,#0f786f);box-shadow:0 28px 45px #072f3a44;transform:rotateX(57deg) rotateZ(-8deg)}.aj-speech{position:absolute;z-index:6;right:0;top:6%;width:min(32vw,370px);padding:25px 27px;border:5px solid #4cd7ce;border-radius:20px;background:#0b3154;color:white;box-shadow:0 20px 34px #06364a3d;transform:translateZ(130px);animation:ajSpeech 7s ease-in-out infinite}.aj-speech:after{content:"";position:absolute;bottom:-30px;left:54%;border:18px solid transparent;border-top-color:#4cd7ce;border-left-width:25px}.aj-speech:before{content:"";position:absolute;z-index:1;bottom:-18px;left:55.3%;border:13px solid transparent;border-top-color:#0b3154;border-left-width:19px}.aj-speech strong{display:block;font-size:16px;line-height:1.4;letter-spacing:-.025em}.aj-speech-dot{display:block;width:8px;height:8px;margin-bottom:9px;border-radius:50%;background:var(--orange);box-shadow:0 0 0 5px #f58b2a33}.aj-orbit-card{position:absolute;z-index:5;left:4%;top:36%;min-width:145px;padding:15px 17px;border:1px solid #fff;background:#ffffffd9;border-radius:16px;box-shadow:0 17px 31px #074c5540;color:var(--navy);backdrop-filter:blur(10px);transform:translateZ(100px);animation:ajCard 6s ease-in-out infinite}.aj-orbit-card b{display:block;color:var(--teal);font-size:20px}.aj-orbit-card span{font-size:10px;font-weight:700;color:#51717a}.card-two{left:8%;top:65%;animation-delay:-3s}.aj-spark{position:absolute;z-index:7;width:9px;height:9px;border-radius:50%;background:var(--orange);box-shadow:0 0 0 7px #f58b2a28,0 0 20px var(--orange);animation:ajSpark 2s infinite}.s1{right:18%;top:25%}.s2{left:17%;top:26%;animation-delay:-.7s}.s3{right:5%;bottom:28%;animation-delay:-1.4s}@keyframes ajProblem{50%{transform:translate3d(0,-7px,18px)}}@keyframes ajAboutOrbit{to{transform:rotateX(68deg) rotateZ(378deg)}}@keyframes ajSpeech{50%{transform:translate3d(0,-12px,148px)}}@keyframes ajCard{50%{transform:translate3d(0,-10px,115px)}}@keyframes ajSpark{50%{transform:scale(1.4);opacity:.67}}@media(max-width:900px){.aj-about-wrap{grid-template-columns:1fr}.aj-about-stage{min-height:510px;order:-1}.aj-person{right:21%;width:min(54vw,350px)}.aj-speech{right:1%;width:min(54vw,340px)}.aj-orbit-card{left:3%}.card-two{left:9%}}@media(max-width:550px){.aj-about-hero{padding:95px 21px 50px}.aj-about-stage{min-height:410px}.aj-about-copy h1{font-size:3.2rem}.aj-problem-stack span{font-size:12px;padding:11px 16px}.aj-about-message{font-size:13px}.aj-person{right:16%;width:65vw}.aj-speech{padding:15px 16px;border-width:3px;border-radius:14px;width:56vw}.aj-speech strong{font-size:12px}.aj-orbit-card{display:none}.aj-stage-ring{width:110%;left:-5%}}
    `;
    style.textContent += `.aj-about-hero .aj-about-copy{opacity:0;transform:translate3d(-48px,0,0);transition:opacity .85s ease,transform .85s cubic-bezier(.2,.8,.2,1)}.aj-about-hero .aj-about-stage{opacity:0;transition:opacity 1s .16s ease}.aj-about-hero.aj-in .aj-about-copy{opacity:1;transform:translate3d(0,0,0)}.aj-about-hero.aj-in .aj-about-stage{opacity:1}.aj-about-hero.aj-in .aj-problem-stack span{animation-duration:4.8s}.aj-about-hero.aj-in .aj-speech{animation-duration:5.8s}@media(prefers-reduced-motion:reduce){.aj-about-hero *{animation:none!important;transition:none!important}.aj-about-hero .aj-about-copy,.aj-about-hero .aj-about-stage{opacity:1;transform:none}}`;
    document.head.append(style);
    if (!document.querySelector('#aj-video-fullbleed-style')) {
      const videoStyle = document.createElement('style'); videoStyle.id = 'aj-video-fullbleed-style';
      videoStyle.textContent = `.aj-video-fullbleed{position:relative!important;display:block!important;width:100%!important;min-height:100vh!important;margin:0!important;padding:0!important;overflow:hidden!important;background:#071a32!important}.aj-video-fullbleed iframe{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;border:0!important;border-radius:0!important;max-width:none!important}.aj-video-fullbleed>*:not(:has(iframe)){display:none!important}.aj-video-fullbleed>*:has(iframe){position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;padding:0!important}@media(max-width:700px){.aj-video-fullbleed{min-height:68vh!important}}`;
      document.head.append(videoStyle);
    }
    const stage = section.querySelector('.aj-about-stage');
    stage.addEventListener('pointermove', (event) => { const box=stage.getBoundingClientRect(); stage.style.setProperty('--y', `${((event.clientX-box.left)/box.width-.5)*5}deg`); stage.style.setProperty('--x', `${((event.clientY-box.top)/box.height-.5)*-4}deg`); });
    stage.addEventListener('pointerleave', () => { stage.style.setProperty('--x','0deg'); stage.style.setProperty('--y','0deg'); });
    const reveal = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { section.classList.add('aj-in'); reveal.unobserve(section); } }); }, { threshold: .18 });
    reveal.observe(section);
  };
  const rerun = () => { removeHomeServices(); boot(); setTimeout(() => { removeHomeServices(); boot(); }, 450); setTimeout(() => { removeHomeServices(); boot(); }, 1200); };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', rerun) : rerun();
  addEventListener('popstate', rerun);
})();
