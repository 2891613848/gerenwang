/* ═══════════════════════════════════════════════════════
   Vue 3 应用入口 — Hash Router + 特效绑定
   ═══════════════════════════════════════════════════════ */

import { NavBar } from './components/nav-bar.js';
import { SiteFooter } from './components/site-footer.js';
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ProjectsPage } from './pages/projects.js';
import { BlogPage } from './pages/blog.js';
import { ProductsPage } from './pages/products.js';

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/projects': ProjectsPage,
  '/blog': BlogPage,
  '/products': ProductsPage,
};

function getRoute() {
  return window.location.hash.slice(1).replace(/\/+$/, '') || '/';
}

const app = Vue.createApp({
  data() {
    return { currentRoute: getRoute() };
  },
  computed: {
    currentComponent() {
      return routes[this.currentRoute] || HomePage;
    }
  },
  methods: {
    onHashChange() {
      this.currentRoute = getRoute();
      this.loadEffects();
    },
    loadEffects() {
      setTimeout(() => {
        import('./effects.js').then(m => {
          if (m.refreshEffects) m.refreshEffects();
        }).catch(() => {});
      }, 200);
    }
  },
  mounted() {
    window.addEventListener('hashchange', this.onHashChange);
    this.loadEffects();
  }
});

app.component('nav-bar', NavBar);
app.component('site-footer', SiteFooter);

try {
  app.mount('#app');
} catch(e) {
  console.error('Vue mount error:', e);
  document.getElementById('app').innerHTML = '<div style="text-align:center;padding:80px;font-size:18px;color:#999;">⚠️ 加载失败，请刷新页面</div>';
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
});

window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
