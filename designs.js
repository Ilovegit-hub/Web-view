/* ============================================================
   WEB DESIGNER — 26 website design directions
   Each entry: metadata + a hand-built mini website preview
   ============================================================ */

const DESIGNS = [
  /* 01 ------------------------------------------------------ */
  {
    id: 'portfolio',
    number: '01',
    name: 'Portfolio',
    short: 'Show your craft with confidence.',
    desc: 'A personal portfolio with editorial typography, a strong hero, and a curated work grid.',
    accent: '#ff5c35',
    bg: '#f4f1ec',
    fg: '#16130f',
    preview: () => `
      <div class="site site-portfolio" style="--accent:#ff5c35;--bg:#f4f1ec;--fg:#16130f">
        <div class="sp-nav">
          <span class="sp-logo">mara<span>voss</span></span>
          <span class="sp-links"><i>Work</i><i>About</i><i>Contact</i></span>
        </div>
        <div class="sp-hero">
          <div class="sp-hero-copy">
            <span class="sp-kicker">Independent designer · Berlin</span>
            <h1>I make brands<br/><em>unforgettable.</em></h1>
            <div class="sp-hero-row">
              <p>Digital design, identity and art direction for people who care about the details.</p>
              <button class="sp-btn">See work →</button>
            </div>
          </div>
          <div class="sp-hero-art">
            <img src="https://picsum.photos/seed/portfolio-hero/720/820" alt="Portrait" loading="lazy"/>
            <span class="sp-badge">12+ yrs</span>
          </div>
        </div>
        <div class="sp-strip">
          <span>Branding</span><span>Web</span><span>Motion</span><span>Art direction</span><span>Type</span>
        </div>
        <div class="sp-grid">
          <figure><img src="https://picsum.photos/seed/pf1/520/640" alt="Project" loading="lazy"/><figcaption><b>Noma Coffee</b><span>Identity</span></figcaption></figure>
          <figure><img src="https://picsum.photos/seed/pf2/520/640" alt="Project" loading="lazy"/><figcaption><b>Atlas Health</b><span>Digital</span></figcaption></figure>
        </div>
      </div>
    `
  },

  /* 02 ------------------------------------------------------ */
  {
    id: 'apple',
    number: '02',
    name: 'Apple / Product',
    short: 'Product-first, beautiful and precise.',
    desc: 'A product launch page with generous space, hardware photography, and a single confident message.',
    accent: '#0a84ff',
    bg: '#f5f5f7',
    fg: '#1d1d1f',
    preview: () => `
      <div class="site site-apple" style="--accent:#0a84ff;--bg:#f5f5f7;--fg:#1d1d1f">
        <div class="ap-nav">
          <span class="ap-links"><i>Shop</i><i>Support</i><i>Store</i></span>
          <span class="ap-bag"></span>
        </div>
        <section class="ap-hero">
          <small>New</small>
          <h2>iPhone<br/>17 <span>Pro</span></h2>
          <p class="ap-tag">Titanium. Redefined.</p>
          <div class="ap-product">
            <div class="ap-phone ap-phone-back"></div>
            <div class="ap-phone"></div>
            <div class="ap-ring"></div>
          </div>
          <div class="ap-buy">
            <button class="ap-btn">Buy from $1,199</button>
            <button class="ap-btn ghost">Learn more</button>
          </div>
        </section>
        <div class="ap-feature">
          <span>A18 <em>Pro</em></span>
          <p>The fastest chip we've ever shipped.</p>
        </div>
      </div>
    `
  },

  /* 03 ------------------------------------------------------ */
  {
    id: 'three-d',
    number: '03',
    name: '3D Interactive',
    short: 'A world you can feel.',
    desc: 'An interactive 3D playground with orbiting geometry, HUD labels, and a responsive sculptural hero.',
    accent: '#7c5cff',
    bg: '#07070d',
    fg: '#ece7ff',
    preview: () => `
      <div class="site site-3d" style="--accent:#7c5cff;--bg:#07070d;--fg:#ece7ff">
        <div class="d3-nav"><span>ORBITAL</span><span>LAB</span><span class="d3-menu">menu</span></div>
        <div class="d3-stage">
          <div class="d3-orbit orbit-a"></div>
          <div class="d3-orbit orbit-b"></div>
          <div class="d3-grid-floor"></div>
          <div class="d3-cube">
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
          <span class="d3-hud h1">OBJ_01 · 0.4s</span>
          <span class="d3-hud h2">POLY 2,048</span>
          <span class="d3-hud h3">DRAG TO ROTATE</span>
        </div>
        <div class="d3-banner">
          <small>WEBGL · REALTIME</small>
          <h2>Build worlds</h2>
          <p>Immersive product experiences that stay 60&nbsp;fps on any device.</p>
        </div>
      </div>
    `
  },

  /* 04 ------------------------------------------------------ */
  {
    id: 'scroll-animation',
    number: '04',
    name: 'Scroll Animation',
    short: 'Every pixel responds to your scroll.',
    desc: 'A kinetic editorial page where words fold, blur, and reveal as you move through the story.',
    accent: '#12b886',
    bg: '#f6fbf8',
    fg: '#0f1b15',
    preview: () => `
      <div class="site site-scroll" style="--accent:#12b886;--bg:#f6fbf8;--fg:#0f1b15">
        <div class="sc-nav"><span>Kinetic<em>&nbsp;Studio</em></span><span>Scroll ↓</span></div>
        <div class="sc-hero">
          <h2>Motion<br/><span class="sc-script">tells</span><br/>the story.</h2>
          <p>We build websites that unfold — not just load.</p>
        </div>
        <div class="sc-line"><span class="sc-word">DESIGN</span><span class="sc-word">THAT</span><span class="sc-word">MOVES</span></div>
        <div class="sc-chips"><span>Reveal on scroll</span><span>Stagger</span><span>Replay</span></div>
        <div class="sc-blocks">
          <span class="sc-block" style="--d:0"></span>
          <span class="sc-block" style="--d:1"></span>
          <span class="sc-block" style="--d:2"></span>
        </div>
      </div>
    `
  },

  /* 05 ------------------------------------------------------ */
  {
    id: 'video',
    number: '05',
    name: 'Scroll-Driven Video',
    short: 'Film that moves with you.',
    desc: 'A scroll-scrubbed video experience with chapter markers and a cinematic player core.',
    accent: '#f43f5e',
    bg: '#0c0f13',
    fg: '#f5f3f0',
    preview: () => `
      <div class="site site-video" style="--accent:#f43f5e;--bg:#0c0f13;--fg:#f5f3f0">
        <div class="sv-nav"><span>CUT</span><span>FRAME</span><span class="sv-menu">Chapters</span></div>
        <div class="sv-player">
          <div class="sv-frame">
            <img src="https://picsum.photos/seed/video-frame/900/540" alt="Film still" loading="lazy"/>
            <div class="sv-grain"></div>
            <button class="sv-play">▶</button>
            <span class="sv-time">02:18 / 05:40</span>
          </div>
          <div class="sv-scrub"><i></i></div>
          <div class="sv-chapters">
            <span class="is-active">01 / Origin</span>
            <span>02 / Process</span>
            <span>03 / Launch</span>
          </div>
        </div>
        <div class="sv-caption">
          <small>SCROLL TO SCRUB</small>
          <h2>One video.<br/>A whole story.</h2>
        </div>
      </div>
    `
  },

  /* 06 ------------------------------------------------------ */
  {
    id: 'cinematic',
    number: '06',
    name: 'Cinematic',
    short: 'An opening sequence for your brand.',
    desc: 'Full-bleed visuals, letterboxing, and cinematic type that make the brand feel like a film.',
    accent: '#ffb000',
    bg: '#090a0c',
    fg: '#f0e9d9',
    preview: () => `
      <div class="site site-cine" style="--accent:#ffb000;--bg:#090a0c;--fg:#f0e9d9">
        <div class="cc-bars top"></div>
        <div class="cc-bars bottom"></div>
        <div class="cc-image">
          <img src="https://picsum.photos/seed/cine/1200/675" alt="Film frame" loading="lazy"/>
        </div>
        <div class="cc-title">
          <small>A FILM BY SECOND HORIZON</small>
          <h1>MIDNIGHT</h1>
          <span>ONLY IN THEATERS · 2026</span>
        </div>
        <div class="cc-credits">
          <span>Director</span><b>E. Harlow</b>
          <span>Cinematography</span><b>J. Aoki</b>
          <span>Score</span><b>R. Meyer</b>
        </div>
      </div>
    `
  },

  /* 07 ------------------------------------------------------ */
  {
    id: 'agency',
    number: '07',
    name: 'Creative Agency',
    short: 'Loud ideas, honest craft.',
    desc: 'A bold multinational studio site with scroll marquees, poster collage, and oversized editorial type.',
    accent: '#ff2b00',
    bg: '#f6f1e8',
    fg: '#121212',
    preview: () => `
      <div class="site site-agency" style="--accent:#ff2b00;--bg:#f6f1e8;--fg:#121212">
        <div class="ag-nav"><span>GRID</span><strong>STUDIO&nbsp;NØVA</strong><span>EN/DE</span></div>
        <div class="ag-marquee"><span>STRATEGY — BRAND — WEB — MOTION —</span><span>STRATEGY — BRAND — WEB — MOTION —</span></div>
        <div class="ag-hero">
          <h2>We make<br/><em>bold</em> ideas<br/>move.</h2>
          <div class="ag-collage">
            <div class="ag-post p1"><img src="https://picsum.photos/seed/ag1/360/440" alt="Poster" loading="lazy"/></div>
            <div class="ag-post p2"><img src="https://picsum.photos/seed/ag2/360/440" alt="Poster" loading="lazy"/></div>
            <span class="ag-sticker">EST. 2014</span>
          </div>
        </div>
        <div class="ag-clients"><span>NIKE</span><span>ARC'TERYX</span><span>SPOTIFY</span><span>OFF-WHITE</span></div>
      </div>
    `
  },

  /* 08 ------------------------------------------------------ */
  {
    id: 'dark-luxury',
    number: '08',
    name: 'Dark Luxury',
    short: 'Quiet power in every detail.',
    desc: 'An aristocratic e-commerce experience: black, gold, serif type, and unhurried negative space.',
    accent: '#c9a24b',
    bg: '#0a0a0a',
    fg: '#f4e9d0',
    preview: () => `
      <div class="site site-luxury" style="--accent:#c9a24b;--bg:#0a0a0a;--fg:#f4e9d0">
        <div class="lx-nav"><span>MAISON&nbsp;AZUL</span><span>Collection&nbsp;————</span><span>Bag&nbsp;(0)</span></div>
        <div class="lx-hero">
          <span class="lx-rule"></span>
          <small>THE ATELIER COLLECTION · FW26</small>
          <h2>Quiet<br/>Luxury.</h2>
          <p>Made by hand. Worn forever.</p>
          <div class="lx-cta"><span>Discover the collection</span><span>→</span></div>
        </div>
        <div class="lx-product">
          <div class="lx-pic"><img src="https://picsum.photos/seed/luxury/520/560" alt="Product" loading="lazy"/></div>
          <div class="lx-info">
            <span>01</span>
            <h4>Cashmere Amara Coat</h4>
            <p>Midnight · 100% cashmere · €2,450</p>
            <button>Add to bag</button>
          </div>
        </div>
        <div class="lx-footer"><span>Private appointments</span><span>Worldwide shipping</span><span>Since 1998</span></div>
      </div>
    `
  },

  /* 09 ------------------------------------------------------ */
  {
    id: 'minimal',
    number: '09',
    name: 'Minimal',
    short: 'Less, but better.',
    desc: 'A disciplined single idea, small type, one column, and breathing room that feels expensive.',
    accent: '#111111',
    bg: '#ffffff',
    fg: '#111111',
    preview: () => `
      <div class="site site-minimal" style="--accent:#111111;--bg:#ffffff;--fg:#111111">
        <div class="mn-nav"><span>M&nbsp;ATELIER</span><span>Work&nbsp;·&nbsp;About&nbsp;·&nbsp;Contact</span></div>
        <div class="mn-body">
          <span class="mn-index">001</span>
          <h2>Less,<br/>but better.</h2>
          <p>We reduce until only the essential remains.</p>
          <span class="mn-ruler"></span>
          <div class="mn-row">
            <span>Design</span><span>Architecture</span><span>Objects</span>
          </div>
        </div>
        <div class="mn-meter"><span>01</span><span>02</span><span>03</span></div>
      </div>
    `
  },

  /* 10 ------------------------------------------------------ */
  {
    id: 'bento',
    number: '10',
    name: 'Bento Grid',
    short: 'Information, served beautifully.',
    desc: 'A modular bento layout with tiled cards, playful illustrations, and clear hierarchy.',
    accent: '#5b8def',
    bg: '#faf6ee',
    fg: '#1d2530',
    preview: () => `
      <div class="site site-bento" style="--accent:#5b8def;--bg:#faf6ee;--fg:#1d2530">
        <div class="bt-nav"><strong>Bento<span>box</span></strong><span>Features · Pricing</span></div>
        <div class="bt-grid">
          <div class="bt-card bt-a">
            <small>MOBILE</small>
            <h3>All your tasks, one home.</h3>
            <div class="bt-mock">
              <i class="bt-avatar"></i>
              <span class="bt-line"></span><span class="bt-line s"></span>
              <span class="bt-chip">Done</span>
            </div>
          </div>
          <div class="bt-card bt-b"><small>TODAY</small><h2>4</h2><p>meetings left</p></div>
          <div class="bt-card bt-c"><small>FOCUS</small><h4>Deep work</h4><span class="bt-ring"></span></div>
          <div class="bt-card bt-d"><small>TEAM</small><div class="bt-avatars"><i></i><i></i><i></i><i></i></div><p>Everyone's online</p></div>
          <div class="bt-card bt-e"><small>SHIPPED</small><i class="bt-pizza"></i><h4>+128%</h4><p>faster week</p></div>
          <div class="bt-card bt-f"><small>NEXT</small><h4>Launch party</h4><p>Fri · 6pm</p></div>
        </div>
      </div>
    `
  },

  /* 11 ------------------------------------------------------ */
  {
    id: 'glass',
    number: '11',
    name: 'Glassmorphism',
    short: 'Depth made of light.',
    desc: 'Translucent frosted panels float over a vivid ambient backdrop for a modern 3D feel.',
    accent: '#22a6ff',
    bg: '#1d1b3d',
    fg: '#ffffff',
    preview: () => `
      <div class="site site-glass" style="--accent:#22a6ff;--bg:#1d1b3d;--fg:#ffffff">
        <div class="gl-blob blob-1"></div>
        <div class="gl-blob blob-2"></div>
        <div class="gl-blob blob-3"></div>
        <div class="gl-nav glass"><span>LUMEN</span><span>Features · Studio · About</span></div>
        <div class="gl-hero glass">
          <span class="gl-eyebrow">A beautiful way to work</span>
          <h2>Your ideas,<br/>in clear focus.</h2>
          <button class="gl-btn">Get started</button>
        </div>
        <div class="gl-cards">
          <div class="glass gl-card"><span>01</span><h4>Motion</h4><p>Fluid, effortless transitions everywhere.</p></div>
          <div class="glass gl-card"><span>02</span><h4>Focus</h4><p>One calm surface for every workflow.</p></div>
          <div class="glass gl-card"><span>03</span><h4>Speed</h4><p>Fast by design, smooth on every device.</p></div>
        </div>
      </div>
    `
  },

  /* 12 ------------------------------------------------------ */
  {
    id: 'parallax',
    number: '12',
    name: 'Parallax',
    short: 'Layered worlds that shift.',
    desc: 'A scrolling landscape where foreground, midground, and background drift at different speeds.',
    accent: '#f07f3b',
    bg: '#8fb7d4',
    fg: '#fff8ee',
    preview: () => `
      <div class="site site-parallax" style="--accent:#f07f3b;--bg:#8fb7d4;--fg:#fff8ee">
        <div class="px-sky">
          <span class="px-sun"></span>
          <div class="px-cloud c1"></div>
          <div class="px-cloud c2"></div>
        </div>
        <div class="px-mountain m1"></div>
        <div class="px-mountain m2"></div>
        <div class="px-title"><small>EXPLORE</small><h2>The wild<br/>calls.</h2><p>Mountains · Rivers · Keepers of the land</p><button>Begin journey</button></div>
        <div class="px-grass"></div>
      </div>
    `
  },

  /* 13 ------------------------------------------------------ */
  {
    id: 'saas',
    number: '13',
    name: 'SaaS',
    short: 'A product your team will love.',
    desc: 'The canonical SaaS landing page: clear value, product screenshot, logos, and a pricing table.',
    accent: '#3b82f6',
    bg: '#f8fafc',
    fg: '#0f172a',
    preview: () => `
      <div class="site site-saas" style="--accent:#3b82f6;--bg:#f8fafc;--fg:#0f172a">
        <div class="sa-nav"><span class="sa-logo">flowbase</span><span><i>Product</i><i>Pricing</i><i>Docs</i><button>Sign up</button></span></div>
        <div class="sa-hero">
          <span class="sa-badge">● New — Realtime analytics</span>
          <h2>Run your whole company</h2>
          <p>flowbase brings tracking, billing, and growth into one calm dashboard.</p>
          <div class="sa-cta"><button>Start free trial</button><button class="ghost">Book a demo</button></div>
          <div class="sa-logos"><span>Acme</span><span>North</span><span>Gig</span><span>Orbit</span></div>
          <div class="sa-dash">
            <aside><i></i><i></i><i></i><i></i></aside>
            <main>
              <div class="sa-chart"><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div>
              <div class="sa-stats"><span>MRR <strong>$48k</strong></span><span>Users <strong>12,408</strong></span></div>
            </main>
          </div>
        </div>
        <div class="sa-features">
          <div><span>01</span><h4>Automate</h4><p>Workflows that run themselves.</p></div>
          <div><span>02</span><h4>Measure</h4><p>Dashboards your whole team reads.</p></div>
          <div><span>03</span><h4>Ship</h4><p>Launch faster with built-in insight.</p></div>
        </div>
      </div>
    `
  },

  /* 14 ------------------------------------------------------ */
  {
    id: 'ecommerce',
    number: '14',
    name: 'E-commerce',
    short: 'From browse to buy, frictionless.',
    desc: 'A modern storefront with a sale banner, product grid, quick-add, and a stylish filter bar.',
    accent: '#e63946',
    bg: '#fffdf8',
    fg: '#231f20',
    preview: () => `
      <div class="site site-ecom" style="--accent:#e63946;--bg:#fffdf8;--fg:#231f20">
        <div class="ec-nav"><span class="ec-logo">MAKER&nbsp;GOODS</span><span class="ec-links"><i>Shop</i><i>New</i><i>Sale</i></span><span class="ec-bag">Bag&nbsp;3</span></div>
        <div class="ec-banner">FREE WORLDWIDE SHIPPING ON ORDERS OVER $80</div>
        <div class="ec-hero">
          <div class="ec-copy"><small>NEW SEASON</small><h2>Objects<br/>of desire.</h2><button>Shop the drop</button></div>
          <div class="ec-hero-img"><img src="https://picsum.photos/seed/ecom-hero/560/520" alt="Product" loading="lazy"/></div>
        </div>
        <div class="ec-grid">
          <div class="ec-card"><img src="https://picsum.photos/seed/e1/360/430" alt="Product" loading="lazy"/><div><b>Fjord Lamp</b><span>$129</span></div><button>+</button></div>
          <div class="ec-card"><img src="https://picsum.photos/seed/e2/360/430" alt="Product" loading="lazy"/><div><b>Terra Mug</b><span>$42</span></div><button>+</button></div>
          <div class="ec-card"><img src="https://picsum.photos/seed/e3/360/430" alt="Product" loading="lazy"/><div><b>Arden Chair</b><span>$799</span></div><button>+</button></div>
          <div class="ec-card"><img src="https://picsum.photos/seed/e4/360/430" alt="Product" loading="lazy"/><div><b>Vera Vase</b><span>$58</span></div><button>+</button></div>
        </div>
      </div>
    `
  },

  /* 15 ------------------------------------------------------ */
  {
    id: 'restaurant',
    number: '15',
    name: 'Restaurant',
    short: 'A table set for your brand.',
    desc: 'A warm, appetizing restaurant site with a hero dish, tasting menu, and reservation flow.',
    accent: '#e07b39',
    bg: '#1c1410',
    fg: '#f9ead8',
    preview: () => `
      <div class="site site-resto" style="--accent:#e07b39;--bg:#1c1410;--fg:#f9ead8">
        <div class="rs-nav"><span class="rs-logo">OAK<span>&nbsp;&amp;&nbsp;EMBER</span></span><span><i>Menu</i><i>Story</i><i>Visit</i><button>Reserve</button></span></div>
        <div class="rs-hero">
          <div class="rs-copy">
            <small>MICHELIN GUIDE · 2026</small>
            <h2>Fire,<br/>flavor,<br/>&amp; ritual.</h2>
            <p>Seasonal tasting menus around an open hearth.</p>
            <div class="rs-cta"><button>Reserve a table</button><span>Open Thu–Sun · 6pm</span></div>
          </div>
          <div class="rs-dish"><img src="https://picsum.photos/seed/resto/640/720" alt="Dish" loading="lazy"/><span class="rs-price">$185</span></div>
        </div>
        <div class="rs-menu">
          <span><b>Amuse</b><i>charred pear</i></span>
          <span><b>Main</b><i>wood-grilled duck</i></span>
          <span><b>Dessert</b><i>burnt honey</i></span>
        </div>
      </div>
    `
  },

  /* 16 ------------------------------------------------------ */
  {
    id: 'realestate',
    number: '16',
    name: 'Real Estate',
    short: 'Show the place, sell the feeling.',
    desc: 'A residential brokerage site with cinematic property photography and a modern map.',
    accent: '#1f6f5c',
    bg: '#eef2ef',
    fg: '#15312b',
    preview: () => `
      <div class="site site-realestate" style="--accent:#1f6f5c;--bg:#eef2ef;--fg:#15312b">
        <div class="re-nav"><span class="re-logo">HAVEN</span><span><i>Buy</i><i>Sell</i><i>Agents</i></span></div>
        <div class="re-hero">
          <div class="re-copy"><small>HAVEN RESIDENTIAL · EST. 1984</small><h2>Find the home<br/>that finds you.</h2><p>Curated homes in the world's most livable cities.</p><div class="re-search"><input placeholder="City, neighborhood, or address"/><button>Search</button></div></div>
          <div class="re-map"><div class="re-pin p1">€1.2M</div><div class="re-pin p2">€840K</div><div class="re-pin p3">€2.1M</div></div>
        </div>
        <div class="re-cards">
          <figure><img src="https://picsum.photos/seed/re1/420/300" alt="Home" loading="lazy"/><figcaption><b>Villa Serene</b><span>Lisbon · €1.2M</span></figcaption></figure>
          <figure><img src="https://picsum.photos/seed/re2/420/300" alt="Home" loading="lazy"/><figcaption><b>The Glass House</b><span>Amsterdam · €2.1M</span></figcaption></figure>
        </div>
      </div>
    `
  },

  /* 17 ------------------------------------------------------ */
  {
    id: 'architecture',
    number: '17',
    name: 'Architecture',
    short: 'Structure, light, and restraint.',
    desc: 'A cold, precise studio site with monumental photography and a disciplined grid.',
    accent: '#9aa0a6',
    bg: '#f0f0f0',
    fg: '#111111',
    preview: () => `
      <div class="site site-arch" style="--accent:#9aa0a6;--bg:#f0f0f0;--fg:#111111">
        <div class="ar-nav"><span>ATELIER&nbsp;KANE</span><span>Projects · Studio · Journal</span></div>
        <div class="ar-big"><img src="https://picsum.photos/seed/arch1/1200/560" alt="Architecture" loading="lazy"/><span>01&nbsp;/&nbsp;Museum of Memory · 2024</span></div>
        <div class="ar-grid">
          <figure><img src="https://picsum.photos/seed/arch2/420/520" alt="Building" loading="lazy"/><figcaption><b>Fog House</b><span>2023</span></figcaption></figure>
          <figure class="ar-middle"><img src="https://picsum.photos/seed/arch3/420/520" alt="Building" loading="lazy"/><figcaption><b>Linear Tower</b><span>2025</span></figcaption></figure>
          <figure><img src="https://picsum.photos/seed/arch4/420/520" alt="Building" loading="lazy"/><figcaption><b>Vault 09</b><span>2022</span></figcaption></figure>
        </div>
        <div class="ar-stats"><span>32&nbsp;built</span><span>11&nbsp;awards</span><span>2&nbsp;continents</span></div>
      </div>
    `
  },

  /* 18 ------------------------------------------------------ */
  {
    id: 'photography',
    number: '18',
    name: 'Photography',
    short: 'A gallery with no walls.',
    desc: 'A dark, borderless photographic portfolio with a masonry grid and warm film tones.',
    accent: '#e0a458',
    bg: '#0d0d0d',
    fg: '#f5ede0',
    preview: () => `
      <div class="site site-photo" style="--accent:#e0a458;--bg:#0d0d0d;--fg:#f5ede0">
        <div class="ph-nav"><span class="ph-name">JAMES&nbsp;OWEN</span><span>PHOTOGRAPHER</span><span>Index</span></div>
        <div class="ph-gallery">
          <figure class="ph t1"><img src="https://picsum.photos/seed/ph1/560/720" alt="Photo" loading="lazy"/><figcaption>Barents Sea · N°12</figcaption></figure>
          <figure class="ph t2"><img src="https://picsum.photos/seed/ph2/520/600" alt="Photo" loading="lazy"/><figcaption>Iceland · N°08</figcaption></figure>
          <figure class="ph t3"><img src="https://picsum.photos/seed/ph3/520/700" alt="Photo" loading="lazy"/><figcaption>Alps · N°19</figcaption></figure>
          <figure class="ph t4"><img src="https://picsum.photos/seed/ph4/520/560" alt="Photo" loading="lazy"/><figcaption>Desert · N°03</figcaption></figure>
        </div>
        <div class="ph-foot"><span>Print sales open</span><span>Scrolling gallery</span></div>
      </div>
    `
  },

  /* 19 ------------------------------------------------------ */
  {
    id: 'fashion',
    number: '19',
    name: 'Fashion',
    short: 'Editorial style, shot to be seen.',
    desc: 'A haughty fashion house experience with oversized model photography and asymmetric type.',
    accent: '#d4a5a0',
    bg: '#efe9e4',
    fg: '#1a1417',
    preview: () => `
      <div class="site site-fashion" style="--accent:#d4a5a0;--bg:#efe9e4;--fg:#1a1417">
        <div class="fa-nav"><span>MAISON&nbsp;RIVIERA</span><span>Womenswear · Menswear · Archive</span><span>Cart</span></div>
        <div class="fa-hero">
          <div class="fa-copy"><small>SPRING/SUMMER 2026</small><h2>The<br/><em>até</em>lier<br/>look.</h2><button>Explore the collection</button></div>
          <div class="fa-model"><img src="https://picsum.photos/seed/fashion/520/740" alt="Model" loading="lazy"/></div>
          <div class="fa-aside"><span>Look 1</span><span>Look 2</span><span>Look 3</span></div>
        </div>
        <div class="fa-strip"><span>NEW ARRIVALS</span><span>RUNWAY</span><span>ICONS</span><span>EDITORIAL</span></div>
      </div>
    `
  },

  /* 20 ------------------------------------------------------ */
  {
    id: 'gaming',
    number: '20',
    name: 'Gaming',
    short: 'Enter a new world.',
    desc: 'A game landing page with a neon HUD, animated character silhouette, and immediate call to play.',
    accent: '#00e5ff',
    bg: '#090a14',
    fg: '#eaffff',
    preview: () => `
      <div class="site site-gaming" style="--accent:#00e5ff;--bg:#090a14;--fg:#eaffff">
        <div class="gm-nav"><span class="gm-logo">NEON&nbsp;REALM</span><span><i>Play</i><i>Evolve</i><i>World</i></span><button>Download</button></div>
        <div class="gm-world">
          <div class="gm-grid"></div>
          <span class="gm-sun"></span>
          <div class="gm-character"><span class="gm-head"></span><span class="gm-body"></span><span class="gm-leg l"></span><span class="gm-leg r"></span></div>
          <div class="gm-hud">
            <span>HP&nbsp;100</span><span>Lv.&nbsp;27</span><span>XP&nbsp;12,480</span>
          </div>
          <div class="gm-title"><small>SEASON 4 · NOW LIVE</small><h2>Rule the<br/>grid.</h2><button class="gm-cta">Play free</button><span class="gm-platforms">PC · PS5 · XBOX</span></div>
        </div>
        <div class="gm-bar"><span>01</span><span>02</span><span>03</span></div>
      </div>
    `
  },

  /* 21 ------------------------------------------------------ */
  {
    id: 'event',
    number: '21',
    name: 'Event',
    short: 'The countdown is the campaign.',
    desc: 'A festival site with a bold date, lineup cards, and a one-click ticket action.',
    accent: '#ff4fd8',
    bg: '#151230',
    fg: '#fff3ff',
    preview: () => `
      <div class="site site-event" style="--accent:#ff4fd8;--bg:#151230;--fg:#fff3ff">
        <div class="ev-nav"><span>WAVE&nbsp;26</span><span>Lineup · Info · FAQ</span></div>
        <div class="ev-hero">
          <small>3 DAYS · 2 STAGES · 1 BEACH</small>
          <h2>WAVE<br/><em>'26</em></h2>
          <div class="ev-date"><span>JUL</span><strong>17–19</strong><span>AYIA NAPA</span></div>
          <button class="ev-ticket">Get tickets</button>
        </div>
        <div class="ev-lineup">
          <span class="is-live">Headliners</span>
          <span>ODESZA</span><span>RUFUS DU SOL</span><span>KAYTRANADA</span><span>JUNGLE</span>
        </div>
        <div class="ev-count">T-MINUS 03:14:56:32</div>
      </div>
    `
  },

  /* 22 ------------------------------------------------------ */
  {
    id: 'storytelling',
    number: '22',
    name: 'Interactive Storytelling',
    short: 'A story you scroll through.',
    desc: 'A chaptered narrative experience where each screen advances a visual story.',
    accent: '#ff7a59',
    bg: '#fbe6da',
    fg: '#3e1d16',
    preview: () => `
      <div class="site site-story" style="--accent:#ff7a59;--bg:#fbe6da;--fg:#3e1d16">
        <div class="st-nav"><span>THE&nbsp;LONG&nbsp;WALK</span><span>Chapter III</span></div>
        <div class="st-scene">
          <span class="st-moon"></span>
          <span class="st-hill h1"></span>
          <span class="st-hill h2"></span>
          <span class="st-char"><i></i><i></i></span>
          <div class="st-text">
            <small>CHAPTER III</small>
            <h2>the river<br/>speaks.</h2>
            <p>She followed the water until the road disappeared, and kept going.</p>
            <span class="st-continue">Continue the story ↓</span>
          </div>
        </div>
        <div class="st-dots"><span class="is-active"></span><span></span><span></span><span></span></div>
      </div>
    `
  },

  /* 23 ------------------------------------------------------ */
  {
    id: 'dashboard',
    number: '23',
    name: 'Dashboard / Web App',
    short: 'Your product, at a glance.',
    desc: 'A product admin dashboard with live charts, sidebar navigation, and a tight data hierarchy.',
    accent: '#6366f1',
    bg: '#f3f4f6',
    fg: '#111827',
    preview: () => `
      <div class="site site-dash" style="--accent:#6366f1;--bg:#f3f4f6;--fg:#111827">
        <aside class="db-side">
          <strong>pulse</strong>
          <span>Overview</span><span class="is-active">Analytics</span><span>Revenue</span><span>Users</span><span>Settings</span>
        </aside>
        <main class="db-main">
          <div class="db-top"><b>Good morning, Alex</b><span>Last 30 days</span></div>
          <div class="db-kpis">
            <div><small>Revenue</small><strong>$84,120</strong><em class="up">+12.4%</em></div>
            <div><small>Active users</small><strong>18,402</strong><em class="up">+8.1%</em></div>
            <div><small>Conversion</small><strong>3.9%</strong><em class="down">-0.2%</em></div>
          </div>
          <div class="db-chart">
            <div class="db-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div class="db-labels"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>
          </div>
          <div class="db-table">
            <span><b>Plan</b><i>Pro</i><em>834</em></span>
            <span><b>Plan</b><i>Team</i><em>512</em></span>
          </div>
        </main>
      </div>
    `
  },

  /* 24 ------------------------------------------------------ */
  {
    id: 'configurator',
    number: '24',
    name: '3D Product Configurator',
    short: 'Make it yours in real time.',
    desc: 'A product configurator with live orbits, material swatches, and instant purchase updates.',
    accent: '#e8895b',
    bg: '#f2eeea',
    fg: '#2a211d',
    preview: () => `
      <div class="site site-config" style="--accent:#e8895b;--bg:#f2eeea;--fg:#2a211d">
        <div class="cf-nav"><span>LUMEN&nbsp;CHAIR</span><span>Configurator</span></div>
        <div class="cf-body">
          <div class="cf-stage">
            <div class="cf-light"></div>
            <div class="cf-chair">
              <span class="cf-seat"></span><span class="cf-back"></span><span class="cf-leg l1"></span><span class="cf-leg l2"></span><span class="cf-leg r1"></span><span class="cf-leg r2"></span>
            </div>
            <span class="cf-drag">drag to rotate</span>
          </div>
          <div class="cf-panel">
            <small>LUMEN CHAIR · FRAME 01</small>
            <h3>Choose your<br/><em>materials</em>.</h3>
            <span class="cf-label">Fabric</span>
            <div class="cf-swatches"><i class="is-active" style="--c:#d9b98a"></i><i style="--c:#7c8a77"></i><i style="--c:#454c63"></i><i style="--c:#b78e86"></i></div>
            <div class="cf-price"><span>$2,450</span><button>Add to cart</button></div>
          </div>
        </div>
      </div>
    `
  },

  /* 25 ------------------------------------------------------ */
  {
    id: 'ai-product',
    number: '25',
    name: 'AI Product',
    short: 'Intelligence you can talk to.',
    desc: 'A futuristic AI product page with an animated neural visual and conversational interface.',
    accent: '#8b5cf6',
    bg: '#100d1e',
    fg: '#f4f1ff',
    preview: () => `
      <div class="site site-ai" style="--accent:#8b5cf6;--bg:#100d1e;--fg:#f4f1ff">
        <div class="ai-nav"><span class="ai-logo">AURA</span><span>Pricing · Demo · Research</span><button>Get access</button></div>
        <div class="ai-hero">
          <div class="ai-copy"><small>INTELLIGENCE, HUMANIZED</small><h2>Meet your<br/><em>second</em> mind.</h2><p>AURA thinks, remembers, and works beside you.</p><div class="ai-input"><span>Ask AURA anything…</span><i>↑</i></div></div>
          <div class="ai-visual">
            <svg viewBox="0 0 320 240" class="ai-net" aria-hidden="true"><g fill="none" stroke="rgba(139,92,246,.55)" stroke-width="1"><path d="M60 60 L120 120 L200 70"/><path d="M60 60 L140 40 M140 40 L200 70 M120 120 L260 140"/><circle cx="60" cy="60" r="7" fill="#8b5cf6"/><circle cx="140" cy="40" r="7" fill="#a78bfa"/><circle cx="200" cy="70" r="7" fill="#8b5cf6"/><circle cx="120" cy="120" r="9" fill="#fff"/><circle cx="260" cy="140" r="7" fill="#a78bfa"/></g></svg>
            <div class="ai-chat"><span>What did I leave in my calendar tomorrow?</span><span class="ai-sys">AI · You have a design review at 9:30.</span></div>
          </div>
        </div>
        <div class="ai-cap"><span>Work</span><span>Learn</span><span>Remember</span><span>Create</span></div>
      </div>
    `
  },

  /* 26 ------------------------------------------------------ */
  {
    id: 'experimental',
    number: '26',
    name: 'Experimental / Award-Winning',
    short: 'Break the rules on purpose.',
    desc: 'An avant-garde interactive piece that refuses to look like a website — glitch, collage, and courage.',
    accent: '#b0ff1f',
    bg: '#101010',
    fg: '#eaffff',
    preview: () => `
      <div class="site site-experimental" style="--accent:#b0ff1f;--bg:#101010;--fg:#eaffff">
        <div class="xp-noise"></div>
        <div class="xp-nav"><span>©&nbsp;FIELD&nbsp;NOTES</span><span>INDEX_01</span><span>ENTER</span></div>
        <div class="xp-hero">
          <span class="xp-shape s1"></span>
          <span class="xp-shape s2"></span>
          <span class="xp-shape s3"></span>
          <h2 class="xp-title">hello,_<br/><em>future.</em></h2>
          <p class="xp-sub">an experiment in internet feeling</p>
          <div class="xp-glitch" data-text="SCROLL_">SCROLL_</div>
        </div>
        <div class="xp-marquee"><span>MAKE&nbsp;IT&nbsp;WEIRD&nbsp;·&nbsp;MAKE&nbsp;IT&nbsp;YOURS&nbsp;·&nbsp;MAKE&nbsp;IT&nbsp;WEIRD&nbsp;·&nbsp;MAKE&nbsp;IT&nbsp;YOURS&nbsp;·</span></div>
      </div>
    `
  }
];
