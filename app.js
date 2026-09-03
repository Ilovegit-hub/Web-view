/* ============================================================
   WEB DESIGNER — interactive showroom logic
   ============================================================ */

(function () {
  'use strict';

  const showcase = document.getElementById('showcase');
  const chooserGrid = document.getElementById('chooserGrid');
  const selectedPanel = document.getElementById('selectedPanel');
  const selectedName = document.getElementById('selectedName');
  const selectedDesc = document.getElementById('selectedDesc');
  const wantDesign = document.getElementById('wantDesign');
  const resetChoice = document.getElementById('resetChoice');
  const progressIndex = document.getElementById('progressIndex');
  const progressName = document.getElementById('progressName');
  const progressBar = document.getElementById('progressBar');

  /* ---------- Build 26 showcase sections ---------- */
  function browserUrl(design) {
    return `https://${design.id}.designer.show`;
  }

  function buildSection(design, i) {
    const section = document.createElement('section');
    section.className = 'showcase-section';
    section.id = `design-${design.id}`;
    section.dataset.index = String(i);
    section.style.setProperty('--sec-bg', design.bg);
    section.style.setProperty('--sec-fg', design.fg);
    section.style.setProperty('--sec-accent', design.accent);

    section.innerHTML = `
      <div class="showcase-grid">
        <div class="showcase-meta">
          <span class="showcase-num">${design.number} / 26</span>
          <h2 class="showcase-name">${design.name}</h2>
          <p class="showcase-desc">${design.desc}</p>
          <span class="showcase-tag-chip">${design.short}</span>
        </div>
        <div class="browser">
          <div class="browser-outer">
            <div class="browser-bar">
              <span class="browser-dot red"></span>
              <span class="browser-dot yellow"></span>
              <span class="browser-dot green"></span>
              <span class="browser-url">${browserUrl(design)}</span>
            </div>
            <div class="browser-body">${design.preview()}</div>
          </div>
        </div>
      </div>
    `;
    return section;
  }

  DESIGNS.forEach((design, i) => {
    showcase.appendChild(buildSection(design, i));
  });

  /* ---------- Build chooser grid ---------- */
  DESIGNS.forEach((design) => {
    const card = document.createElement('button');
    card.className = 'choice-card';
    card.type = 'button';
    card.dataset.id = design.id;
    card.setAttribute('aria-label', `Select ${design.name} design`);
    card.innerHTML = `
      <span class="thumb"><span class="thumb-zoom">${design.preview()}</span></span>
      <span class="check choice-check">✓</span>
      <span class="choice-body">
        <span class="choice-num">${design.number} / 26</span>
        <span class="choice-name">${design.name}</span>
        <span class="choice-short">${design.short}</span>
      </span>
    `;
    chooserGrid.appendChild(card);
  });

  /* ---------- Selection ---------- */
  let selectedDesign = null;

  function selectDesign(designId) {
    selectedDesign = DESIGNS.find((d) => d.id === designId) || null;

    const cards = chooserGrid.querySelectorAll('.choice-card');
    cards.forEach((card) => {
      const isSelected = card.dataset.id === designId;
      card.classList.toggle('is-selected', isSelected);
      card.classList.toggle('is-dimmed', Boolean(selectedDesign) && !isSelected);
    });

    if (!selectedDesign) {
      selectedPanel.setAttribute('hidden', '');
      return;
    }

    selectedPanel.removeAttribute('hidden');
    selectedName.textContent = `Selected Design: ${selectedDesign.name}`;
    selectedDesc.textContent = selectedDesign.desc;
    wantDesign.href = buildMailto(selectedDesign);
    wantDesign.dataset.design = selectedDesign.name;

    setTimeout(() => {
      selectedPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 250);
  }

  function buildMailto(design) {
    const subject = encodeURIComponent(`I want this design — ${design.name}`);
    const body = encodeURIComponent(
      `Hi,\n\nI'd like to build my website in the "${design.name}" direction.\n\n${design.short}\n\n–`
    );
    return `mailto:hello@webdesigner.studio?subject=${subject}&body=${body}`;
  }

  chooserGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.choice-card');
    if (!card) return;
    selectDesign(card.dataset.id);
  });

  resetChoice.addEventListener('click', () => {
    selectDesign(null);
    document.getElementById('choose').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  wantDesign.addEventListener('click', () => {
    showToast(`Great choice! We'll craft your website in the "${wantDesign.dataset.design}" direction.`);
  });

  /* ---------- Scroll tracking ---------- */
  const sections = Array.from(document.querySelectorAll('.showcase-section'));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          section.classList.add('in-view');
        }
      });
    },
    { threshold: [0.3], rootMargin: '0px 0px -10% 0px' }
  );
  sections.forEach((s) => observer.observe(s));

  let progressIdx = -1;
  function setProgress(idx) {
    const design = DESIGNS[idx];
    if (!design) return;
    progressIndex.textContent = `${design.number} / 26`;
    progressName.textContent = design.name;
    progressIdx = idx;
  }

  /* Subtle scroll-driven parallax / scale per design */
  function updateMotion() {
    const vh = window.innerHeight;
    const center = vh * 0.5;
    let closestIdx = 0;
    let closestDist = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const secCenter = rect.top + rect.height / 2;
      const dist = Math.abs(secCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = Number(section.dataset.index);
      }

      // 0 when far outside, ~1 near the center
      // 0 when far outside, ~1 near the center
      const k = Math.max(0, Math.min(1, 1 - (dist / (vh * 0.9))));
      const browser = section.querySelector('.browser');
      const meta = section.querySelector('.showcase-meta');
      if (browser) {
        browser.style.transition = 'none';
        browser.style.opacity = (0.28 + 0.72 * k).toFixed(3);
        browser.style.transform = `translateY(${((1 - k) * 30).toFixed(1)}px) scale(${(0.92 + 0.08 * k).toFixed(3)})`;
      }
      if (meta) {
        meta.style.transition = 'none';
        meta.style.opacity = (0.2 + 0.8 * k).toFixed(3);
        meta.style.transform = `translateY(${((1 - k) * 40).toFixed(1)}px)`;
      }
    });

    if (closestIdx !== progressIdx) setProgress(closestIdx);
  }

  function updateProgressBar() {
    const doc = document.documentElement;
    const total = doc.scrollHeight - window.innerHeight;
    const value = total <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / total));
    progressBar.style.width = `${(value * 100).toFixed(2)}%`;
  }

  let raf = null;
  function scheduleFrame() {
    if (!raf) {
      raf = requestAnimationFrame(() => {
        updateProgressBar();
        updateMotion();
        raf = null;
      });
    }
  }
  window.addEventListener('scroll', scheduleFrame, { passive: true });
  window.addEventListener('resize', scheduleFrame, { passive: true });
  setProgress(0);
  updateProgressBar();
  updateMotion();

  /* ---------- Toast ---------- */
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('is-visible'), 4200);
  }

  // Add toast styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    .toast {
      position: fixed;
      left: 50%;
      bottom: 28px;
      transform: translate(-50%, 20px);
      z-index: 2000;
      background: rgba(20,20,24,.95);
      color: #f4f1ec;
      border: 1px solid rgba(255,255,255,.14);
      padding: 14px 22px;
      border-radius: 999px;
      font-size: 13px;
      max-width: min(90vw, 560px);
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,.45);
      opacity: 0;
      pointer-events: none;
      transition: opacity .35s var(--ease-out), transform .35s var(--ease-out);
    }
    .toast.is-visible { opacity: 1; transform: translate(-50%, 0); }
  `;
  document.head.appendChild(style);
})();
