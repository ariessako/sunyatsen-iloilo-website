(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const logoSrc = document.querySelector(".brand img").getAttribute("src");
  const thisYear = new Date().getFullYear();
  const HAN = { Academic: "學", Sports: "獅", Arts: "藝", Leadership: "德", School: "校" };

  document.querySelectorAll(".yrs").forEach((el) => { el.textContent = thisYear - SCHOOL.founded; });
  document.querySelectorAll(".this-year").forEach((el) => { el.textContent = thisYear; });

  // ---------- Programs (a real sequence, so numbered)
  $("program-list").innerHTML = PROGRAMS.map((p, i) => `
    <li class="lift">
      <span class="step-num">${i + 1}</span>
      <p class="grades">${esc(p.grades)}</p>
      <h3>${esc(p.level)}</h3>
      <p class="desc">${esc(p.description)}</p>
      ${p.strands ? `<div class="strands">${p.strands.map((s) => `<div class="strand"><strong>${esc(s.name)}</strong><span>${esc(s.text)}</span></div>`).join("")}</div>` : ""}
      <ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
    </li>`).join("");

  // ---------- News and honors
  const photoHTML = (n, label) => n.photo
    ? `<img src="${esc(n.photo)}" alt="${esc(n.title)}" loading="lazy"${n.photoFit === "contain" ? ' class="doc"' : ""} onerror="this.outerHTML='<div class=&quot;ph&quot;><img src=&quot;${logoSrc}&quot; alt=&quot;&quot;><span>${label}</span></div>'">`
    : `<div class="ph" data-han="${HAN[n.category] || "獅"}"><img src="${logoSrc}" alt=""><span>${label}</span></div>`;
  const metaHTML = (n) => `<div class="meta"><span class="lvl">${esc(n.level)}</span><span>${esc(n.category)}</span><span>${esc(n.date)}</span></div>`;
  const tbc = (n) => (n.verified ? "" : '<span class="tbc">Details to be confirmed</span>');

  function card(n, featured) {
    return `
      <a class="story${featured ? " featured" : ""} lift" href="#news-${esc(n.id)}">
        <div class="photo">${photoHTML(n, "Photo coming soon")}</div>
        <div class="text">
          ${featured ? '<span class="badge">Latest</span>' : ""}
          ${metaHTML(n)}
          <h3>${esc(n.title)}</h3>
          <p class="sum">${esc(n.summary)}</p>
          ${tbc(n)}
          <span class="more">Read the story →</span>
        </div>
      </a>`;
  }

  function renderNews(filter) {
    const list = NEWS.filter((n) => filter === "All" || n.category === filter);
    const [first, ...rest] = list;
    $("featured").innerHTML = first ? card(first, true) : "";
    $("news-list").innerHTML = rest.map((n) => card(n, false)).join("");
    $("no-news").hidden = list.length > 0;
    document.querySelectorAll("#honors .lift").forEach((el) => el.classList.add("in"));
  }
  document.querySelectorAll(".chip").forEach((btn) => btn.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderNews(btn.dataset.filter);
  }));
  renderNews("All");

  // ---------- Article page
  function renderArticle(n) {
    const others = NEWS.filter((x) => x.id !== n.id).slice(0, 3);
    $("article-body").innerHTML = `
      ${metaHTML(n)}
      <h1>${esc(n.title)}</h1>
      <p class="dek">${esc(n.summary)}</p>
      <figure class="hero-photo">${photoHTML(n, "Photo to be added by the school")}</figure>
      <div class="article-cols">
        <div class="body">
          ${(() => { let lede = false; return n.body.map((p) => {
            const isHead = p.length < 140 && p === p.toUpperCase() && /[A-Z]/.test(p);
            if (isHead) return `<p class="post-head">${esc(p)}</p>`;
            const cls = lede ? "" : ' class="lede"'; lede = true;
            return `<p${cls}>${esc(p)}</p>`;
          }).join(""); })()}
          ${n.verified ? "" : '<p class="tbc">Some details of this story are still being confirmed by the school.</p>'}
          ${n.link ? `<p class="source"><a class="btn navy" href="${esc(n.link)}" target="_blank" rel="noopener">${esc(n.linkLabel || "View the original post")} ↗</a></p>` : ""}
        </div>
        <dl class="facts">
          <dt>Awardee</dt><dd>${esc(n.who)}</dd>
          <dt>Competition</dt><dd>${esc(n.event)}</dd>
          <dt>Level</dt><dd>${esc(n.level)}</dd>
          <dt>Date</dt><dd>${esc(n.date)}</dd>
        </dl>
      </div>
      ${others.length ? `<section class="more-stories"><h2>More from the Hall of Honors</h2><div class="news-grid">${others.map((o) => card(o, false)).join("")}</div></section>` : ""}`;
    document.querySelectorAll("#article-body .lift").forEach((el) => el.classList.add("in"));
    document.title = n.title + " · Sun Yat Sen High School of Iloilo";
  }

  // ---------- Simple page routing on the link's #name
  const baseTitle = document.title;
  function route() {
    const h = location.hash.slice(1);
    const story = h.startsWith("news-") && NEWS.find((n) => "news-" + n.id === h);
    $("site").hidden = !!story;
    $("article-view").hidden = !story;
    if (story) {
      renderArticle(story);
      window.scrollTo(0, 0);
    } else {
      document.title = baseTitle;
      const target = h && document.getElementById(h);
      if (target) requestAnimationFrame(() => target.scrollIntoView());
    }
  }
  window.addEventListener("hashchange", route);

  // Always open at the top section, unless the link points to a story page
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash && !location.hash.startsWith("#news-")) {
    try { history.replaceState(null, "", location.href.split("#")[0]); } catch (e) {}
  }
  route();
  // Jump (not glide) to the very top: the hero
  const toTop = () => {
    if (location.hash.startsWith("#news-")) return;
    const root = document.documentElement, prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = prev;
  };
  toTop();
  window.addEventListener("load", toTop);
  window.addEventListener("pageshow", toTop);
  // Keep the page still under the opening screen
  document.documentElement.classList.add("intro");

  // ---------- Contact
  const notYet = '<span class="muted">To be added</span>';
  $("c-address").textContent = SCHOOL.address;
  $("c-phone").innerHTML = SCHOOL.phone ? esc(SCHOOL.phone) : notYet;
  $("c-email").innerHTML = SCHOOL.email ? esc(SCHOOL.email) : notYet;
  $("c-hours").textContent = SCHOOL.officeHours;
  if (SCHOOL.facebook) { $("c-fb").href = SCHOOL.facebook; $("c-fb").hidden = false; }

  // ---------- Opening animation
  const splash = $("splash");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    document.documentElement.classList.remove("intro");
    toTop();
    splash.classList.add("hide"); document.body.classList.add("loaded");
    // Count the years of service up from 0
    document.querySelectorAll(".count-up").forEach((el) => {
      const target = thisYear - SCHOOL.founded;
      if (reduce) { el.textContent = target; return; }
      const t0 = performance.now(), dur = 1600;
      const step = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };
  setTimeout(finish, reduce ? 0 : 2100);
  splash.addEventListener("click", finish);

  // ---------- Gentle lift as sections scroll in (content is always visible)
  const lifts = document.querySelectorAll(".lift:not(.in)");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    lifts.forEach((el) => io.observe(el));
  } else { lifts.forEach((el) => el.classList.add("in")); }

  // ---------- Mobile menu
  const btn = document.querySelector(".menu-btn");
  const menu = $("menu");
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }));
})();
