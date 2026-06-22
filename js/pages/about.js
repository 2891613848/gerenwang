/* ═══════════════════════════════════════════════════════
   关于我页面 v3 — Ghibli 头像
   ═══════════════════════════════════════════════════════ */

export const AboutPage = {
  template: `
  <section class="section" style="padding-top:calc(var(--nav-height) + 40px)">
    <div class="container">
      <div class="about-grid">
        <aside class="about-sidebar reveal reveal-up">
          <div class="about-avatar-wrap ghibli-avatar-large">
            <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="abg" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#FFF8F0"/><stop offset="100%" stop-color="#F0E6FF"/></radialGradient>
                <radialGradient id="ask" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#FFF0E8"/><stop offset="100%" stop-color="#FDDCC8"/></radialGradient>
                <radialGradient id="ahr" cx="50%" cy="30%" r="55%"><stop offset="0%" stop-color="#6B4226"/><stop offset="100%" stop-color="#3D2214"/></radialGradient>
                <linearGradient id="abd" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8B9DC3"/><stop offset="40%" stop-color="#A0B4D8"/><stop offset="100%" stop-color="#7B8FB5"/></linearGradient>
                <filter id="asf"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#4A3C6E" flood-opacity="0.12"/></filter>
              </defs>
              <circle cx="100" cy="90" r="90" fill="url(#abg)" filter="url(#asf)"/>
              <path d="M75 130 Q100 142 125 130 Q130 132 132 140 L132 180 Q132 188 120 192 L80 192 Q68 188 68 180 L68 140 Q70 132 75 130 Z" fill="url(#abd)"/>
              <path d="M78 130 Q100 146 122 130" stroke="#6B7A9A" stroke-width="1.8" fill="none" opacity="0.4" stroke-linecap="round"/>
              <path d="M85 118 Q100 128 115 118 L112 132 Q100 138 88 132 Z" fill="url(#ask)"/>
              <ellipse cx="100" cy="82" rx="42" ry="48" fill="url(#ask)"/>
              <ellipse cx="56" cy="82" rx="8" ry="13" fill="url(#ask)"/><ellipse cx="144" cy="82" rx="8" ry="13" fill="url(#ask)"/>
              <ellipse cx="62" cy="110" rx="16" ry="30" fill="url(#ahr)"/><ellipse cx="138" cy="110" rx="16" ry="30" fill="url(#ahr)"/>
              <path d="M58 82 Q56 52 68 36 Q78 22 100 18 Q122 22 132 36 Q144 52 142 82 Q142 48 132 40 Q122 32 100 30 Q78 32 68 40 Q58 48 58 82 Z" fill="url(#ahr)"/>
              <path d="M58 82 Q56 44 70 30 Q80 18 100 14 Q120 18 130 30 Q144 44 142 82 Q144 56 132 44 Q118 32 100 28 Q82 32 68 44 Q56 56 58 82 Z" fill="url(#ahr)"/>
              <path d="M56 80 Q54 38 72 28 Q84 20 100 18 Q116 20 128 28 Q146 38 144 80 Q140 56 128 46 Q116 36 100 34 Q84 36 72 46 Q60 56 56 80 Z" fill="url(#ahr)"/>
              <path d="M58 76 Q60 48 74 36 Q86 28 100 26 Q114 28 126 36 Q140 48 142 76 Q136 54 124 44 Q112 36 100 34 Q88 36 76 44 Q64 54 58 76 Z" fill="#7B4A2E"/>
              <path d="M56 80 Q52 90 54 108 Q56 118 62 124 Q58 112 58 98 Q58 86 56 80 Z" fill="url(#ahr)"/>
              <path d="M144 80 Q148 90 146 108 Q144 118 138 124 Q142 112 142 98 Q142 86 144 80 Z" fill="url(#ahr)"/>
              <path d="M72 68 Q78 64 86 68" stroke="#3D2214" stroke-width="2" fill="none" stroke-linecap="round"/>
              <path d="M114 68 Q122 64 128 68" stroke="#3D2214" stroke-width="2" fill="none" stroke-linecap="round"/>
              <ellipse cx="79" cy="78" rx="13" ry="16" fill="#2C1810"/><ellipse cx="79" cy="78" rx="12" ry="15" fill="#1A0E08"/>
              <circle cx="75" cy="72" r="5.5" fill="#fff" opacity="0.95"/><circle cx="82" cy="76" r="3" fill="#fff" opacity="0.85"/><circle cx="77" cy="82" r="1.5" fill="#fff" opacity="0.6"/>
              <ellipse cx="121" cy="78" rx="13" ry="16" fill="#2C1810"/><ellipse cx="121" cy="78" rx="12" ry="15" fill="#1A0E08"/>
              <circle cx="117" cy="72" r="5.5" fill="#fff" opacity="0.95"/><circle cx="124" cy="76" r="3" fill="#fff" opacity="0.85"/><circle cx="119" cy="82" r="1.5" fill="#fff" opacity="0.6"/>
              <path d="M66 76 Q70 70 76 68" stroke="#1A0E08" stroke-width="1.8" fill="none" stroke-linecap="round"/>
              <path d="M124 68 Q130 70 134 76" stroke="#1A0E08" stroke-width="1.8" fill="none" stroke-linecap="round"/>
              <ellipse cx="62" cy="92" rx="12" ry="8" fill="#FFB8B8" fill-opacity="0.35"/>
              <ellipse cx="138" cy="92" rx="12" ry="8" fill="#FFB8B8" fill-opacity="0.35"/>
              <path d="M97 86 Q100 90 103 86" stroke="#E8B8A0" stroke-width="1.2" fill="none" stroke-linecap="round"/>
              <path d="M92 102 Q96 108 100 107 Q104 108 108 102" stroke="#D4786A" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.7"/>
              <circle cx="65" cy="54" r="3" fill="#fff" opacity="0.25"/><circle cx="135" cy="56" r="2" fill="#fff" opacity="0.2"/>
              <circle cx="165" cy="35" r="2.5" fill="#FFEAA7" opacity="0.8"/><circle cx="38" cy="40" r="1.8" fill="#FFEAA7" opacity="0.6"/>
              <circle cx="155" cy="50" r="1.5" fill="#FFEAA7" opacity="0.5"/><circle cx="48" cy="30" r="2" fill="#FFEAA7" opacity="0.55"/>
            </svg>
          </div>
          <h2 class="about-name">小熊</h2>
          <p class="about-role">全栈开发者 · 产品建造者</p>
          <div class="about-social">
            <a href="https://github.com/" target="_blank" title="GitHub">🐙</a>
            <a href="mailto:hello@ubti.top" title="Email">📧</a>
          </div>
        </aside>
        <div class="about-main">
          <div class="card reveal reveal-right"><h3>👋 关于我</h3><p style="font-size:15px;color:var(--c-text-secondary);line-height:2;text-align:justify">你好！我是小熊，一个热爱用代码创造东西的人。我相信好的产品不是被「设计」出来的，而是在不断建造、测试、推翻、重建的过程中长出来的。<br><br>我目前的兴趣集中在教育科技和工具型产品，喜欢思考「怎么让复杂的事情变得简单」和「怎么帮人做出更好的选择」。UBTI 就是我践行这个理念的产物——把一个关于大学选择的复杂问题，拆解成四个维度、四十八道题，用清晰直观的方式呈现结果。<br><br>不写代码的时候，我可能在读书、思考人生、或者琢磨下一个项目。</p></div>
          <div class="card reveal reveal-right reveal-d2"><h3>🛠 技能栈</h3><div class="skill-cloud"><span class="skill-tag">JavaScript / TypeScript</span><span class="skill-tag">Vue 3</span><span class="skill-tag">React</span><span class="skill-tag">Node.js</span><span class="skill-tag">Python</span><span class="skill-tag">HTML / CSS</span><span class="skill-tag">SVG</span><span class="skill-tag">Git / GitHub</span><span class="skill-tag">Figma</span><span class="skill-tag">产品设计</span><span class="skill-tag">交互设计</span><span class="skill-tag">技术写作</span></div></div>
          <div class="card reveal reveal-right reveal-d3"><h3>📅 时间线</h3><div class="timeline"><div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-date">2026</div><div class="timeline-title">UBTI 大学适配测试上线</div><div class="timeline-desc">独立设计、开发和部署了完整的性格-大学匹配测试工具，已对外服务。</div></div><div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-date">2026</div><div class="timeline-title">搭建个人网站</div><div class="timeline-desc">用 Vue 3 从零搭建了零构建依赖的个人网站，整合所有项目和内容。</div></div><div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-date">更早</div><div class="timeline-title">对编程和创造产生了不可逆的兴趣</div><div class="timeline-desc">从此走上了一条「看到问题就想用代码解决」的不归路。</div></div></div></div>
        </div>
      </div>
    </div>
  </section>`
};
