/* ==========================================================================
   Ahmed Cheikh Rouhou: personal site behaviour
   Renders everything from window.SITE (assets/js/data.js).
   ========================================================================== */
(function () {
  "use strict";

  var D = window.SITE;
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var OTHER = { research: "engineering", engineering: "research" };
  var ME = D.profile.name;

  var lens = root.getAttribute("data-lens");
  var expandedRoles = {};          // role index -> true when the folded details are open
  var openProjects = {};           // project id -> true when open
  var pubFilter = "All";
  var pubQuery = "";

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function plural(n, w) { return n + " " + w + (n === 1 ? "" : "s"); }
  function email() { return D.profile.email.user + "@" + D.profile.email.host; }

  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  function copy(text, okMsg) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast(okMsg); } catch (e) { toast("Copy failed. Select the text and copy it."); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, fallback);
    } else { fallback(); }
  }

  /* ---------- renderers ---------- */
  function renderHero() {
    var L = D.lenses[lens];
    $("#hero-role").textContent = L.role;
    $("#hero-statement").textContent = L.statement;
    var l = D.profile.links;
    $("#hero-links").innerHTML =
      '<a href="' + l.linkedin + '" rel="me noopener">LinkedIn</a>' +
      '<a href="' + l.github + '" rel="me noopener">GitHub</a>' +
      '<a href="' + l.scholar + '" rel="me noopener">Google Scholar</a>';
  }

  function renderAbout() {
    var L = D.lenses[lens];
    $("#about-copy").innerHTML = L.about.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    $("#ledger").innerHTML = L.glance.map(function (g) {
      return "<div><dt>" + esc(g[0]) + "</dt><dd>" + esc(g[1]) + "</dd></div>";
    }).join("");
  }

  function renderWork() {
    var inst = D.experience.instadeep;
    var other = OTHER[lens];
    var html = '<div class="org"><div class="org-head"><h3>' + esc(inst.org) + "</h3><span>" + esc(inst.span) + ", " + esc(inst.location) + "</span></div>";

    inst.roles.forEach(function (r, i) {
      var main = r.bullets.filter(function (b) { return b.lens.indexOf(lens) > -1; });
      var off = r.bullets.filter(function (b) { return b.lens.indexOf(lens) === -1; });
      var open = !!expandedRoles[i];
      html += '<article class="role"><div class="role-top"><h4>' + esc(r.title) + '</h4><span class="role-dates">' + esc(r.dates) + "</span></div>" +
        '<p class="role-scope">' + esc(r.scope) + "</p>";
      if (main.length) {
        html += '<ul class="bullets">' + main.map(function (b) { return "<li>" + b.t + "</li>"; }).join("") + "</ul>";
      }
      if (off.length) {
        var label = main.length
          ? "Show " + plural(off.length, "more detail") + " (" + D.lenses[other].label.toLowerCase() + ")"
          : "Show " + plural(off.length, "detail") + " (" + D.lenses[other].label.toLowerCase() + ")";
        html += '<ul class="bullets off-list" id="off-' + i + '"' + (open ? "" : " hidden") + ">" +
          off.map(function (b) { return '<li class="off">' + b.t + "</li>"; }).join("") + "</ul>" +
          '<div class="more"><button type="button" class="link-btn more-btn" data-role="' + i + '" data-label="' + esc(label) + '" aria-expanded="' + open + '" aria-controls="off-' + i + '">' +
          (open ? "Hide details" : esc(label)) + "</button></div>";
      }
      html += "</article>";
    });
    html += "</div>";

    html += '<h3 class="earlier-title">Before InstaDeep, and alongside it</h3>';
    var earlier = D.experience.earlier.slice().sort(function (a, b) {
      return (b.lens.indexOf(lens) > -1) - (a.lens.indexOf(lens) > -1);
    });
    html += earlier.map(function (e) {
      var match = e.lens.indexOf(lens) > -1;
      return '<div class="row' + (match ? "" : " quiet") + '"><div class="row-when">' + esc(e.dates) + "</div><div>" +
        "<h4>" + esc(e.title) + '</h4><p class="org-name">' + esc(e.org) + ", " + esc(e.location) + "</p>" +
        '<ul class="bullets">' + e.bullets.map(function (b) { return "<li>" + esc(b.t) + "</li>"; }).join("") + "</ul></div></div>";
    }).join("");

    $("#work-body").innerHTML = html;
  }

  function renderProjects() {
    var list = D.projects.slice().sort(function (a, b) { return a.order[lens] - b.order[lens]; });
    $("#projects-body").innerHTML = list.map(function (p) {
      var open = !!openProjects[p.id];
      var links = (p.links || []).map(function (l) { return '<a href="' + l.href + '" rel="noopener">' + esc(l.label) + "</a>"; }).join("");
      return '<div class="acc-item"><button class="acc-btn" type="button" aria-expanded="' + open + '" aria-controls="proj-' + p.id + '" data-proj="' + p.id + '">' +
        '<span class="acc-title">' + esc(p.title) + '</span><span class="acc-ico" aria-hidden="true"></span>' +
        '<span class="acc-line">' + esc(p.line) + "</span></button>" +
        '<div class="acc-panel" id="proj-' + p.id + '" role="region" aria-label="' + esc(p.title) + '"><div><div class="acc-inner">' +
        "<div><h5>The problem</h5><p>" + p.problem + "</p></div>" +
        "<div><h5>What I did</h5><p>" + p.did + "</p></div>" +
        '<div><h5>Tools</h5><div class="chips">' + p.tech.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div></div>" +
        "<div><h5>Outcome</h5><p>" + p.outcome + "</p></div>" +
        (links ? '<div class="wide links">' + links + "</div>" : "") +
        '<div class="wide"><div class="tags chips">' + p.tags.map(function (t) { return '<span class="chip chip-accent">' + esc(t) + "</span>"; }).join("") + "</div></div>" +
        "</div></div></div></div>";
    }).join("");
  }

  var FILTERS = ["All", "Document AI", "Keyword spotting", "NLP", "Continual learning", "First author", "Code available"];

  function renderPubFilters() {
    $("#pub-filters").innerHTML = FILTERS.map(function (f) {
      return '<button type="button" class="filter" data-filter="' + esc(f) + '" aria-pressed="' + (f === pubFilter) + '">' + esc(f) + "</button>";
    }).join("");
  }

  function citation(p) {
    var doi = (p.links.filter(function (l) { return l.label === "DOI"; })[0] || {}).href || "";
    return p.authors.join(", ") + " (" + p.year + "). " + p.title + ". " + p.venue + "." + (doi ? " " + doi : "");
  }

  function renderPubIntro() {
    $("#pubs-intro").textContent = lens === "research"
      ? "Twelve peer-reviewed papers on document analysis, handwriting and language models. My name is in bold."
      : "The research behind the systems I have built and led. Filter for the papers that shipped code.";
  }

  function renderPubs() {
    var q = pubQuery.trim().toLowerCase();
    var list = D.publications.filter(function (p) {
      var okTag = pubFilter === "All" || p.tags.indexOf(pubFilter) > -1;
      var hay = (p.title + " " + p.authors.join(" ") + " " + p.venue + " " + p.year).toLowerCase();
      return okTag && (!q || hay.indexOf(q) > -1);
    });
    $("#pub-count").textContent = "Showing " + list.length + " of " + D.publications.length + " papers";
    if (!list.length) {
      $("#pubs-body").innerHTML = '<p class="empty">No paper matches. <button type="button" class="link-btn" id="clear-pubs">Clear the filters</button></p>';
      return;
    }
    $("#pubs-body").innerHTML = list.map(function (p) {
      var idx = D.publications.indexOf(p);
      var authors = p.authors.map(function (a) { return a === ME ? "<strong>" + esc(a) + "</strong>" : esc(a); }).join(", ");
      var links = p.links.map(function (l) { return '<a href="' + l.href + '" rel="noopener">' + esc(l.label) + "</a>"; }).join("");
      var chips = p.tags.map(function (t) {
        var acc = (t === "First author" || t === "Code available") ? " chip-accent" : "";
        return '<span class="chip' + acc + '">' + esc(t) + "</span>";
      }).join("");
      return '<article class="pub"><div class="pub-year">' + p.year + "</div><div>" +
        "<h4>" + esc(p.title) + '</h4><p class="authors">' + authors + '</p><p class="venue">' + esc(p.venue) + "</p>" +
        '<div class="pub-foot"><div class="chips">' + chips + '</div><div class="links">' + links +
        '<button type="button" class="link-btn" data-cite="' + idx + '">Copy citation</button></div></div></div></article>';
    }).join("");
  }

  function renderCommunity() {
    var order = lens === "research"
      ? ["Teaching", "Committees and talks", "Judging and mentoring"]
      : ["Judging and mentoring", "Teaching", "Committees and talks"];
    $("#community-body").innerHTML = order.map(function (g) {
      var items = D.community.filter(function (c) { return c.group === g; });
      return '<div class="group"><h3>' + esc(g) + "</h3>" + items.map(function (c) {
        return '<div class="row"><div class="row-when">' + esc(c.when) + "</div><div><h4>" + esc(c.what) + '</h4><p style="margin:2px 0 0;color:var(--muted)">' + esc(c.where) + "</p></div></div>";
      }).join("") + "</div>";
    }).join("");
  }

  function renderSkills() {
    var list = D.skills.slice().sort(function (a, b) { return a.rank[lens] - b.rank[lens]; });
    $("#skills-body").innerHTML = list.map(function (s) {
      return '<div class="skill-row"><h3>' + s.name + '</h3><div class="chips">' + s.items.map(function (i) { return '<span class="chip">' + i + "</span>"; }).join("") + "</div></div>";
    }).join("");
  }

  function renderCreds() {
    $("#edu-body").innerHTML = D.education.map(function (e) {
      return '<div class="edu"><strong>' + esc(e.title) + '</strong><span class="sub">' + esc(e.school) + ", " + esc(e.place) + ", " + esc(e.dates) + "</span>" +
        (e.note ? "<p>" + e.note + "</p>" : "") + "</div>";
    }).join("");
    $("#cert-body").innerHTML = D.certifications.map(function (c) {
      var acts = "";
      if (c.href) acts += '<a href="' + c.href + '" rel="noopener">Verify</a>';
      if (c.id) acts += '<button type="button" class="link-btn" data-copyid="' + esc(c.id) + '">Copy ID</button>';
      return '<div class="cert"><div><strong>' + esc(c.title) + '</strong><div class="sub">' + esc(c.issuer) + (c.date ? ", " + esc(c.date) : "") + "</div>" +
        (c.id ? '<div class="id">Credential ID ' + esc(c.id) + "</div>" : "") + "</div>" +
        (acts ? '<div class="cert-actions">' + acts + "</div>" : "") + "</div>";
    }).join("");
  }

  function renderStatic() {
    var l = D.profile.links;
    var links = '<a href="' + l.linkedin + '" rel="me noopener">LinkedIn</a><a href="' + l.github + '" rel="me noopener">GitHub</a><a href="' + l.scholar + '" rel="me noopener">Google Scholar</a>' +
      '<a href="' + D.profile.cv.short.href + '" download>2-page CV</a><a href="' + D.profile.cv.full.href + '" download>Full CV</a>';
    $("#foot-links").className = "foot-links";
    $("#foot-links").innerHTML = links;
    $("#dlg-links").innerHTML = '<a href="' + l.linkedin + '" rel="me noopener">LinkedIn</a><a href="' + l.github + '" rel="me noopener">GitHub</a><a href="' + l.scholar + '" rel="me noopener">Google Scholar</a>';
    $("#year").textContent = new Date().getFullYear();
  }

  function renderLensParts() {
    renderHero();
    renderAbout();
    renderWork();
    renderProjects();
    renderPubIntro();
    renderCommunity();
    renderSkills();
  }

  /* ---------- lens ---------- */
  function updateSwitch() {
    $$("#lens button").forEach(function (b) { b.setAttribute("aria-checked", String(b.getAttribute("data-lens") === lens)); b.tabIndex = b.getAttribute("data-lens") === lens ? 0 : -1; });
  }

  function replay(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
  }

  function playFigure() {
    if (lens === "research") { replay($("#fig-research"), "reset"); requestAnimationFrame(function () { $("#fig-research").classList.remove("reset"); }); }
    else { replay($("#fig-engineering"), "play"); }
  }

  function setLens(next) {
    if (next === lens) return;
    var apply = function () {
      lens = next;
      root.setAttribute("data-lens", next);
      store.set("lens", next);
      try { var u = new URL(location.href); u.searchParams.set("lens", next); history.replaceState(null, "", u); } catch (e) {}
      updateSwitch();
      renderLensParts();
      playFigure();
    };
    if (document.startViewTransition && !reduced) { document.startViewTransition(apply); } else { apply(); }
    $("#announce").textContent = "Now showing the " + next + " reading.";
  }

  /* ---------- theme ---------- */
  function updateThemeIcon() {
    var dark = root.getAttribute("data-theme") === "dark";
    $(".i-moon").style.display = dark ? "none" : "";
    $(".i-sun").style.display = dark ? "" : "none";
    $("#theme-toggle").setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  /* ---------- events ---------- */
  function bind() {
    // lens switch
    $("#lens").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-lens]");
      if (b) setLens(b.getAttribute("data-lens"));
    });
    $("#lens").addEventListener("keydown", function (e) {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].indexOf(e.key) > -1) {
        e.preventDefault();
        var next = OTHER[lens];
        setLens(next);
        $('#lens button[data-lens="' + next + '"]').focus();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target, tag = t && t.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (t && t.isContentEditable)) return;
      if ($("#contact-dialog").open) return;
      if (e.key === "r" || e.key === "R") setLens("research");
      if (e.key === "e" || e.key === "E") setLens("engineering");
    });

    // theme
    $("#theme-toggle").addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store.set("theme", next);
      updateThemeIcon();
    });

    // work: fold / unfold details in place
    $("#work-body").addEventListener("click", function (e) {
      var b = e.target.closest(".more-btn");
      if (!b) return;
      var i = b.getAttribute("data-role");
      var list = $("#off-" + i);
      var open = list.hasAttribute("hidden");
      if (open) list.removeAttribute("hidden"); else list.setAttribute("hidden", "");
      expandedRoles[i] = open;
      b.setAttribute("aria-expanded", String(open));
      b.textContent = open ? "Hide details" : b.getAttribute("data-label");
    });

    // projects accordion
    $("#projects-body").addEventListener("click", function (e) {
      var b = e.target.closest(".acc-btn");
      if (!b) return;
      var id = b.getAttribute("data-proj");
      var open = b.getAttribute("aria-expanded") !== "true";
      openProjects[id] = open;
      b.setAttribute("aria-expanded", String(open));
    });

    // publications
    $("#pub-filters").addEventListener("click", function (e) {
      var b = e.target.closest(".filter");
      if (!b) return;
      pubFilter = b.getAttribute("data-filter");
      $$("#pub-filters .filter").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      renderPubs();
    });
    $("#pub-search").addEventListener("input", function (e) { pubQuery = e.target.value; renderPubs(); });
    $("#pubs-body").addEventListener("click", function (e) {
      var c = e.target.closest("[data-cite]");
      if (c) { copy(citation(D.publications[+c.getAttribute("data-cite")]), "Citation copied"); return; }
      if (e.target.closest("#clear-pubs")) {
        pubFilter = "All"; pubQuery = ""; $("#pub-search").value = "";
        renderPubFilters(); renderPubs();
      }
    });

    // certificates
    $("#cert-body").addEventListener("click", function (e) {
      var c = e.target.closest("[data-copyid]");
      if (c) copy(c.getAttribute("data-copyid"), "Credential ID copied");
    });

    // CV menu
    var menu = $("#cv-menu"), mbtn = $("button", menu), pop = $("#cv-pop");
    function closeMenu(focus) { pop.hidden = true; mbtn.setAttribute("aria-expanded", "false"); if (focus) mbtn.focus(); }
    mbtn.addEventListener("click", function () {
      var open = pop.hidden;
      pop.hidden = !open;
      mbtn.setAttribute("aria-expanded", String(open));
      if (open) $("a", pop).focus();
    });
    document.addEventListener("click", function (e) { if (!menu.contains(e.target)) closeMenu(false); });
    menu.addEventListener("keydown", function (e) { if (e.key === "Escape" && !pop.hidden) { e.preventDefault(); closeMenu(true); } });
    pop.addEventListener("click", function () { closeMenu(false); toast("Downloading your CV"); });

    // contact dialog
    var dlg = $("#contact-dialog");
    $$("[data-open-contact]").forEach(function (b) {
      b.addEventListener("click", function () {
        $("#email-text").textContent = email();
        if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
      });
    });
    $("#contact-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    $("#copy-email").addEventListener("click", function () {
      var btn = this;
      copy(email(), "Email copied");
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = "Copy email"; }, 1800);
    });
    $("#contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var f = e.target;
      var name = f.name.value.trim(), from = f.from.value.trim(), msg = f.message.value.trim();
      var body = msg + "\n\n" + name + (from ? " (" + from + ")" : "");
      var subject = "Hello from your website, " + name;
      window.location.href = "mailto:" + email() + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      toast("Opening your email app");
    });

    // scroll spy
    var links = {};
    $$(".nav a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && en.target.id === "top") {
            $$(".nav a").forEach(function (a) { a.removeAttribute("aria-current"); });
          } else if (en.isIntersecting && links[en.target.id]) {
            $$(".nav a").forEach(function (a) { a.removeAttribute("aria-current"); });
            links[en.target.id].setAttribute("aria-current", "true");
          }
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      Object.keys(links).concat(["top"]).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ---------- init ---------- */
  function init() {
    // open the lead project of the starting lens
    var first = D.projects.slice().sort(function (a, b) { return a.order[lens] - b.order[lens]; })[0];
    openProjects[first.id] = true;

    renderStatic();
    renderLensParts();
    renderPubFilters();
    renderPubs();
    renderCreds();
    updateSwitch();
    updateThemeIcon();
    bind();
    setTimeout(playFigure, 250);
  }

  init();
})();
