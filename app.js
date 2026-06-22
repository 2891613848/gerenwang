/* ═══════════════════════════════════════════════════════
   小熊的个人网站 — 特效引擎
   粒子背景 · 打字机 · 视差 · 返回顶部
   ═══════════════════════════════════════════════════════ */

/* ===== 粒子背景 ===== */
function initParticles() {
  var canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var w, h, particles = [];
  var mouse = { x: -999, y: -999 };
  var count = window.innerWidth < 768 ? 30 : 55;
  var color = '108,92,231';

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = w; canvas.height = h;
  }

  function init() {
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2.5 + 1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      var dx = mouse.x - p.x, dy = mouse.y - p.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        var force = (150 - dist) / 150;
        p.vx -= (dx / dist) * force * 0.08;
        p.vy -= (dy / dist) * force * 0.08;
      }
      p.x += p.vx; p.y += p.vy;
      p.vx *= 0.998; p.vy *= 0.998;
      if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + color + ',' + (0.5 + p.r * 0.15) + ')'; ctx.fill();
      for (var j = i + 1; j < particles.length; j++) {
        var q = particles[j];
        var dx2 = p.x - q.x, dy2 = p.y - q.y;
        var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (dist2 < 130) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(' + color + ',' + (0.08 * (1 - dist2 / 130)) + ')';
          ctx.lineWidth = 0.8; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize(); init(); draw();
  var parent = canvas.parentElement;
  parent.addEventListener('mousemove', function(e) {
    var rect = parent.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
  });
  parent.addEventListener('mouseleave', function() { mouse.x = -999; mouse.y = -999; });
  window.addEventListener('resize', function() { resize(); init(); });
}

/* ===== 打字机效果 ===== */
function initTypewriter() {
  var el = document.getElementById('heroTypewriter');
  if (!el) return;
  var texts = ['用好奇心建造，用代码创造','让复杂的事情变得简单','帮助人们做出更好的选择','相信好的产品是长出来的'];
  var textIdx = 0, charIdx = 0, isDeleting = false;
  function type() {
    var current = texts[textIdx];
    if (isDeleting) { charIdx--; el.textContent = current.substring(0, charIdx); }
    else { charIdx++; el.textContent = current.substring(0, charIdx); }
    var delay = isDeleting ? 28 : 55;
    if (!isDeleting && charIdx === current.length) { delay = 2500; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; textIdx = (textIdx + 1) % texts.length; delay = 400; }
    setTimeout(type, delay);
  }
  type();
}

/* ===== 页面切换 ===== */
function showPage(name) {
  var pages = document.querySelectorAll('.section-page');
  for (var i = 0; i < pages.length; i++) pages[i].classList.remove('active');
  var links = document.querySelectorAll('.nav-links a');
  for (var i = 0; i < links.length; i++) links[i].classList.remove('active');
  var page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  var link = document.querySelector('[data-page="' + name + '"]');
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== 鼠标视差 ===== */
function initParallax() {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  var floats = hero.querySelectorAll('.hero-float');
  if (!floats.length) return;
  hero.addEventListener('mousemove', function(e) {
    var rect = hero.getBoundingClientRect();
    var cx = rect.width / 2, cy = rect.height / 2;
    var mx = e.clientX - rect.left - cx, my = e.clientY - rect.top - cy;
    for (var i = 0; i < floats.length; i++) {
      var depth = 0.02 + i * 0.01;
      floats[i].style.transform = 'translate(' + (mx * depth) + 'px,' + (my * depth) + 'px) rotate(' + (mx * 0.05) + 'deg)';
    }
  });
  hero.addEventListener('mouseleave', function() {
    for (var i = 0; i < floats.length; i++) floats[i].style.transform = '';
  });
}

/* ===== 滚动渐入动画 ===== */
function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  var elements = document.querySelectorAll('.reveal');
  for (var i = 0; i < elements.length; i++) observer.observe(elements[i]);
}

/* ===== 初始化 ===== */
document.addEventListener('DOMContentLoaded', function() {
  initParticles();
  initTypewriter();
  initParallax();
  initScrollReveal();

  // 导航栏滚动阴影
  window.addEventListener('scroll', function() {
    var nav = document.getElementById('topNav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
    var btn = document.getElementById('back-to-top');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  });
});
