/* Renders projects, the project dialog and gallery, GitHub repos and optional posts from data/site.js */
(function () {
  var SITE = window.SITE;
  if (!SITE) return;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }
  var IMG = "assets/img/projects/";

  /* ---------- Projects ---------- */
  var grid = document.getElementById("project-grid");
  var dialog = document.getElementById("project-dialog");
  var dialogTitle = document.getElementById("dialog-title");
  var dialogBody = document.getElementById("dialog-body");
  var lastTrigger = null;

  SITE.projects.forEach(function (p) {
    var tags = el("ul", { class: "tags", "aria-label": "Tools" }, p.tools.map(function (t) { return el("li", { text: t }); }));
    var btn = el("button", { class: "btn btn-primary", type: "button", "data-project": p.id });
    btn.appendChild(document.createTextNode("View project"));
    btn.appendChild(el("span", { class: "visually-hidden", text: ": " + p.title }));
    var thumb = el("img", { src: IMG + p.images[0].src + "-thumb.webp", alt: "", width: "640", height: "360", loading: "lazy" });
    var body = el("div", { class: "project-body" }, [
      el("p", { class: "project-kind", text: p.kind }),
      el("h3", { text: p.title }),
      el("p", { text: p.summary }),
      tags,
      btn
    ]);
    grid.appendChild(el("article", { class: "card project-card reveal" }, [thumb, body]));
  });

  grid.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-project]");
    if (!b) return;
    var p = SITE.projects.filter(function (x) { return x.id === b.getAttribute("data-project"); })[0];
    if (p) openProject(p, b);
  });

  function openProject(p, trigger) {
    lastTrigger = trigger;
    dialogTitle.textContent = p.title;
    dialogBody.textContent = "";
    var index = 0;
    var n = p.images.length;

    var img = el("img", { width: "1300", height: "740" });
    var frame = el("div", { class: "gallery-frame" }, [img]);
    var caption = el("p", { class: "gallery-caption" });
    var count = el("span", { class: "gallery-count", "aria-live": "polite" });
    var prev = el("button", { class: "btn btn-outline", type: "button" }, [el("span", { "aria-hidden": "true", text: "\u2190" }), document.createTextNode(" Previous")]);
    var next = el("button", { class: "btn btn-outline", type: "button" }, [document.createTextNode("Next "), el("span", { "aria-hidden": "true", text: "\u2192" })]);
    var controls = el("div", { class: "gallery-controls" }, [prev, count, next]);

    function show(i) {
      index = (i + n) % n;
      var im = p.images[index];
      img.src = IMG + im.src + ".webp";
      img.alt = p.title + ", screenshot " + (index + 1) + " of " + n;
      caption.textContent = im.alt;
      count.textContent = "Screenshot " + (index + 1) + " of " + n;
    }
    prev.addEventListener("click", function () { show(index - 1); });
    next.addEventListener("click", function () { show(index + 1); });

    var gallery = el("div", { class: "gallery" }, [frame]);
    if (n > 1) gallery.appendChild(controls);
    else count.textContent = "";
    gallery.appendChild(el("h3", { text: "What this view shows", class: "visually-hidden" }));
    gallery.appendChild(caption);
    dialogBody.appendChild(gallery);

    p.description.forEach(function (para) { dialogBody.appendChild(el("p", { text: para })); });
    dialogBody.appendChild(el("ul", { class: "tags", "aria-label": "Tools" }, p.tools.map(function (t) { return el("li", { text: t }); })));
    show(0);
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    dialog.scrollTop = 0;
  }

  dialog.addEventListener("close", function () {
    document.documentElement.style.overflow = "";
    if (lastTrigger) lastTrigger.focus();
  });
  document.getElementById("dialog-close").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close(); /* click on the backdrop */
  });

  /* ---------- AI and product projects ---------- */
  var pgrid = document.getElementById("product-grid");
  var NEWTAB = " (opens in a new tab)";
  function extLink(cls, label, url) {
    var a = el("a", { href: url, target: "_blank", rel: "noopener" });
    if (cls) a.className = cls;
    a.appendChild(document.createTextNode(label));
    a.appendChild(el("span", { class: "visually-hidden", text: NEWTAB }));
    return a;
  }
  (SITE.products || []).forEach(function (pr) {
    var img = el("img", { src: "assets/img/products/" + pr.image.src + ".webp", alt: pr.image.alt, width: "1000", height: "625", loading: "lazy" });
    var tags = el("ul", { class: "tags", "aria-label": "Tools" }, pr.tools.map(function (t) { return el("li", { text: t }); }));
    var body = el("div", { class: "project-body" }, [
      el("p", { class: "project-kind", text: pr.status }),
      el("h3", { text: pr.title }),
      el("p", { text: pr.summary }),
      el("p", { class: "note", text: pr.note }),
      tags
    ]);
    if (pr.links && pr.links.length) {
      body.appendChild(el("ul", { class: "more-links" }, pr.links.map(function (l) {
        return el("li", {}, [extLink("", l.label, l.url)]);
      })));
    }
    /* the main button is added last so it sits at the bottom of every card, aligned across cards */
    body.appendChild(extLink("btn btn-primary", pr.primary.label, pr.primary.url));
    pgrid.appendChild(el("article", { class: "card product-card reveal" }, [img, body]));
  });

  /* ---------- LinkedIn (only if a URL is set) ---------- */
  if (SITE.links.linkedin) {
    var li = document.getElementById("linkedin-link");
    li.href = SITE.links.linkedin;
    document.getElementById("linkedin-item").hidden = false;
  }

  /* ---------- Featured posts (only if any are listed) ---------- */
  if (SITE.featuredPosts && SITE.featuredPosts.length) {
    var pg = document.getElementById("post-grid");
    SITE.featuredPosts.forEach(function (post) {
      pg.appendChild(el("article", { class: "card reveal" }, [
        el("h3", {}, [el("a", { href: post.url, text: post.title })]),
        el("p", { text: post.summary })
      ]));
    });
    document.getElementById("writing").hidden = false;
  }

  /* ---------- GitHub repos (public API, no login) ---------- */
  var repoGrid = document.getElementById("repo-grid");
  var status = document.getElementById("repo-status");
  var CACHE_KEY = "repos-" + SITE.links.githubUser;

  function renderRepos(repos) {
    repoGrid.textContent = "";
    repos.forEach(function (r) {
      var meta = [];
      if (r.language) meta.push(r.language);
      if (r.stargazers_count) meta.push(r.stargazers_count + (r.stargazers_count === 1 ? " star" : " stars"));
      meta.push("Updated " + new Date(r.pushed_at || r.updated_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" }));
      repoGrid.appendChild(el("article", { class: "card repo" }, [
        el("h3", {}, [el("a", { href: r.html_url, text: r.name })]),
        el("p", { text: r.description || "No description yet." }),
        el("p", { class: "meta", text: meta.join(" · ") })
      ]));
    });
    status.textContent = repos.length ? "" : "No public repositories to show yet.";
  }

  function pick(all) {
    var pins = SITE.pinnedRepos || [];
    var list = all.filter(function (r) { return !r.fork && !r.archived; });
    if (pins.length) {
      return pins.map(function (name) { return list.filter(function (r) { return r.name === name; })[0]; }).filter(Boolean);
    }
    return list.sort(function (a, b) { return new Date(b.pushed_at) - new Date(a.pushed_at); }).slice(0, 6);
  }

  function loadRepos() {
    try {
      var cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
      if (cached) { renderRepos(pick(cached)); return; }
    } catch (e) { /* storage unavailable, carry on */ }
    fetch("https://api.github.com/users/" + SITE.links.githubUser + "/repos?per_page=100&sort=pushed")
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(function (data) {
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch (e) { /* ignore */ }
        renderRepos(pick(data));
      })
      .catch(function () {
        status.textContent = "Repositories could not be loaded right now. Please use the link below to see them on GitHub.";
      });
  }
  loadRepos();

  /* ---------- Scroll fade-in (skipped for reduced motion) ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-fade");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (n) { io.observe(n); });
    /* repo cards are added later */
    new MutationObserver(function () {
      document.querySelectorAll(".reveal:not(.in)").forEach(function (n) { io.observe(n); });
    }).observe(repoGrid, { childList: true });
  }
})();
