(function () {
  "use strict";

  var I = window.RCC_I18N || { t: function (k) { return k; }, lang: function () { return "en"; }, onChange: function () {} };
  var t = I.t;

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  function syncToggle() {
    if (toggle && nav) toggle.textContent = nav.classList.contains("open") ? t("close") : t("menu");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      syncToggle();
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        syncToggle();
      }
    });
    syncToggle();
  }

  /* ---------- Services dropdown ---------- */
  var drop = document.querySelector(".nav-drop");
  if (drop) {
    var setDrop = function (open) { drop.setAttribute("aria-expanded", String(open)); };
    drop.addEventListener("click", function (e) {
      e.stopPropagation();
      setDrop(drop.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-group")) setDrop(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drop.getAttribute("aria-expanded") === "true") { setDrop(false); drop.focus(); }
    });
    // Links in the menu: close it after choosing (also for same-page anchors like /#journals)
    document.querySelectorAll(".nav-menu a").forEach(function (a) {
      a.addEventListener("click", function () { setDrop(false); });
    });
  }

  var now = new Date();
  var yr = document.getElementById("year");
  if (yr) yr.textContent = now.getFullYear();

  /* ---------- Hero background video ---------- */
  var video = document.getElementById("hero-video");
  var pauseBtn = document.getElementById("hero-pause");
  function syncPause() {
    if (!pauseBtn || !video) return;
    var paused = video.paused;
    pauseBtn.setAttribute("aria-pressed", String(paused));
    pauseBtn.setAttribute("aria-label", paused ? t("playVideo") : t("pauseVideo"));
  }
  if (video && pauseBtn) {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var saveData = navigator.connection && navigator.connection.saveData;
    pauseBtn.hidden = false;
    if (!reduce && !saveData) {
      var p = video.play();
      if (p && p.catch) p.catch(function () { syncPause(); });
    }
    video.addEventListener("play", syncPause);
    video.addEventListener("pause", syncPause);
    pauseBtn.addEventListener("click", function () { video.paused ? video.play() : video.pause(); });
    syncPause();
    I.onChange(syncPause);
  }

  var J = window.RCC_JOURNALS;
  if (!J) { I.onChange(syncToggle); return; }

  var thisMonth = now.getMonth() + 1;
  var nextMonth = thisMonth === 12 ? 1 : thisMonth + 1;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function highlight(text, q) {
    var safe = esc(text);
    if (!q) return safe;
    var terms = q.split(/\s+/).filter(function (x) { return x.length > 1; }).map(function (x) {
      return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    });
    if (!terms.length) return safe;
    return safe.replace(new RegExp("(" + terms.map(esc).join("|") + ")", "gi"), "<mark>$1</mark>");
  }
  function subjects(j) { return I.lang() === "id" && j.subjectsId ? j.subjectsId : j.subjects; }
  function haystack(j) {
    // Search both languages, whichever is on screen.
    return [j.code, j.name, j.imprint, j.subjects.join(" "), (j.subjectsId || []).join(" "),
      j.sinta ? "SINTA " + j.sinta : ""].join(" ").toLowerCase();
  }

  /* ---------- Directory ---------- */
  var list = document.getElementById("journal-list");
  var status = document.getElementById("dir-status");
  var input = document.getElementById("q");
  var form = document.getElementById("search-form");
  var chips = document.querySelectorAll("[data-sinta]");
  var state = { q: "", sinta: "all" };

  function matches(j) {
    if (state.sinta !== "all" && String(j.sinta) !== state.sinta) return false;
    if (!state.q) return true;
    var h = haystack(j);
    return state.q.toLowerCase().split(/\s+/).every(function (x) { return h.indexOf(x) !== -1; });
  }

  function row(j) {
    var q = state.q;
    var M = t("months");
    var sinta = j.sinta
      ? (j.sintaUrl
          ? '<a class="sinta" data-level="' + j.sinta + '" href="' + j.sintaUrl + '" target="_blank" rel="noopener">SINTA ' + j.sinta + '<span class="visually-hidden">' + t("opensSinta") + "</span></a>"
          : '<span class="sinta" data-level="' + j.sinta + '">SINTA ' + j.sinta + "</span>")
      : '<span class="sinta" data-level="none">' + t("sintaPending") + "</span>";
    var schedule = j.months.map(function (m) { return M[m - 1]; }).join(", ");
    var articleSearch = q
      ? '<a class="j-search-link" href="' + j.url + "/search/search?query=" + encodeURIComponent(q) + '" target="_blank" rel="noopener">' + t("searchIn", { code: j.code, q: esc(q) }) + "</a>"
      : "";
    return (
      '<li class="journal" data-imprint="' + j.imprint + '">' +
        '<div class="j-brand" aria-hidden="true">' +
          '<div class="j-code">' + j.code + "</div>" +
          '<img class="j-logo" src="/assets/journals/' + j.code.toLowerCase() + '.png" alt="" width="160" height="160" loading="lazy">' +
        "</div>" +
        '<div class="j-main">' +
          '<h3 class="j-name"><a href="' + j.url + '/index" target="_blank" rel="noopener">' + highlight(j.name, q) + " (" + highlight(j.code, q) + ")</a></h3>" +
          '<p class="j-meta">' + t("publishedBy", { imprint: esc(window.RCC_IMPRINTS[j.imprint]), months: schedule }) + (j.eissn ? ". e-ISSN " + j.eissn : "") + "</p>" +
          '<ul class="j-subjects" aria-label="' + t("subjects") + '">' + subjects(j).map(function (s) { return "<li>" + highlight(s, q) + "</li>"; }).join("") + "</ul>" +
          articleSearch +
        "</div>" +
        '<div class="j-sinta"><span class="j-label">' + t("accreditation") + "</span>" + sinta + "</div>" +
        '<div class="j-apc"><span class="j-label">' + t("apc") + '</span><span class="j-value">USD ' + j.apc + "</span></div>" +
        '<div class="j-actions">' +
          '<a class="btn btn-primary" href="' + j.url + '/about/submissions" target="_blank" rel="noopener">' + t("submitTo", { code: j.code }) + "</a>" +
          '<a class="btn btn-ghost" href="' + j.url + '/issue/current" target="_blank" rel="noopener">' + t("currentIssue") + "</a>" +
        "</div>" +
      "</li>"
    );
  }

  function renderDirectory() {
    if (!list) return;
    var found = J.filter(matches);
    var atSinta = state.sinta !== "all" ? t("atSinta", { n: state.sinta }) : "";
    if (!found.length) {
      list.innerHTML =
        '<li class="empty"><h3>' + t("noMatch", { q: esc(state.q), sinta: atSinta }) + "</h3>" +
        "<p>" + t("noMatchHelp") + "</p></li>";
    } else {
      list.innerHTML = found.map(row).join("");
    }
    var filtered = state.q || state.sinta !== "all";
    status.innerHTML = filtered
      ? "<span>" + t("showing", { n: found.length, total: J.length }) +
        (state.q ? t("forQ", { q: esc(state.q) }) : "") + atSinta +
        '</span><button type="button" id="clear-filters">' + t("clear") + "</button>"
      : "<span>" + t("allSorted", { n: J.length }) + "</span>";
    var clear = document.getElementById("clear-filters");
    if (clear) clear.addEventListener("click", function () { setState("", "all"); input.focus(); });
  }

  function setState(q, sinta) {
    state.q = q.trim();
    state.sinta = sinta;
    if (input) input.value = state.q;
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-sinta") === sinta)); });
    renderDirectory();
    var url = new URL(window.location.href);
    state.q ? url.searchParams.set("q", state.q) : url.searchParams.delete("q");
    state.sinta !== "all" ? url.searchParams.set("sinta", state.sinta) : url.searchParams.delete("sinta");
    history.replaceState(null, "", url);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setState(input.value, state.sinta);
      document.getElementById("journals").scrollIntoView();
    });
    var timer;
    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { setState(input.value, state.sinta); }, 150);
    });
    chips.forEach(function (c) {
      c.addEventListener("click", function () { setState(input.value, c.getAttribute("data-sinta")); });
    });
    // Delegated, because the suggestion buttons are re-rendered when the language changes.
    form.addEventListener("click", function (e) {
      var b = e.target.closest("[data-suggest]");
      if (!b) return;
      setState(b.getAttribute("data-suggest"), "all");
      document.getElementById("journals").scrollIntoView();
    });
    var params = new URLSearchParams(window.location.search);
    setState(params.get("q") || "", params.get("sinta") || "all");
  }

  /* ---------- Call for papers ---------- */
  var cfpList = document.getElementById("cfp-list");
  function nextIssue(j) {
    var y = now.getFullYear(), L = t("monthsLong");
    for (var k = 1; k <= 12; k++) {
      var m = ((thisMonth - 1 + k) % 12) + 1;
      if (j.months.indexOf(m) !== -1) return L[m - 1] + " " + (m <= thisMonth ? y + 1 : y);
    }
  }
  function renderCfp() {
    if (!cfpList) return;
    cfpList.innerHTML = J.filter(function (j) { return j.callForPapers; }).map(function (j) {
      var code = j.code.toLowerCase();
      var sinta = j.sinta ? '<span class="sinta" data-level="' + j.sinta + '">SINTA ' + j.sinta + "</span>" : "";
      return '<li class="cfp-card">' +
        '<a class="cfp-poster" href="/assets/cfp/' + code + '.jpg" target="_blank" rel="noopener">' +
          '<img src="/assets/cfp/' + code + '.jpg" alt="' + esc(t("posterAlt", { name: j.name })) + '" width="710" height="902" loading="lazy">' +
        "</a>" +
        '<div class="cfp-body">' +
          '<h3><span class="cfp-code">' + j.code + "</span>" + esc(j.name) + "</h3>" +
          '<p class="cfp-next">' + t("nextIssue") + " <strong>" + nextIssue(j) + "</strong></p>" +
          '<div class="cfp-meta">' + sinta + '<span class="cfp-apc">APC USD ' + j.apc + "</span></div>" +
          '<div class="cfp-actions">' +
            '<a class="btn btn-primary" href="' + j.url + '/about/submissions" target="_blank" rel="noopener">' + t("submitTo", { code: j.code }) + "</a>" +
            '<a class="btn btn-ghost" href="/assets/cfp/' + code + '.jpg" target="_blank" rel="noopener">' + t("viewPoster") + "</a>" +
          "</div>" +
        "</div>" +
      "</li>";
    }).join("");
  }

  /* ---------- Publishing calendar ---------- */
  var cal = document.getElementById("cal");
  function chipsFor(m) {
    return J.filter(function (j) { return j.months.indexOf(m) !== -1; }).map(function (j) {
      return '<li><a href="' + j.url + '/index" target="_blank" rel="noopener" title="' + esc(j.name) + '">' + j.code + "</a></li>";
    }).join("");
  }
  function renderCalendar() {
    if (!cal) return;
    var M = t("months"), L = t("monthsLong");
    var head = '<thead><tr><th scope="col"><span class="visually-hidden">' + t("journal") + "</span></th>" +
      M.map(function (m, i) {
        var isNow = i + 1 === thisMonth;
        return '<th scope="col"' + (isNow ? ' class="is-now"' : "") + ">" + m + (isNow ? "<span>" + t("thisMonth") + "</span>" : "") + "</th>";
      }).join("") + "</tr></thead>";
    var bySchedule = J.slice().sort(function (a, b) { return a.months[0] - b.months[0]; });
    var body = "<tbody>" + bySchedule.map(function (j) {
      return '<tr><th scope="row"><a href="' + j.url + '/index" target="_blank" rel="noopener" title="' + esc(j.name) + '">' + j.code + "</a></th>" +
        M.map(function (m, i) {
          var pub = j.months.indexOf(i + 1) !== -1;
          var cls = [i + 1 === thisMonth ? "is-now" : "", pub ? "" : "empty-cell"].filter(Boolean).join(" ");
          return "<td" + (cls ? ' class="' + cls + '"' : "") + ">" +
            (pub ? '<span class="dot" role="img" aria-label="' + t("publishesIn", { code: j.code, month: L[i] }) + '"></span>' : "") + "</td>";
        }).join("") + "</tr>";
    }).join("") + "</tbody>";
    cal.innerHTML = '<caption class="visually-hidden">' + t("calCaption") + '</caption><colgroup><col class="c-name">' + "<col>".repeat(12) + "</colgroup>" + head + body;
    document.getElementById("now-title").textContent = t("publishingIn", { month: L[thisMonth - 1] });
    document.getElementById("next-title").textContent = t("nextUp", { month: L[nextMonth - 1] });
    document.getElementById("now-list").innerHTML = chipsFor(thisMonth);
    document.getElementById("next-list").innerHTML = chipsFor(nextMonth);
  }

  /* ---------- Events: retire the featured event once it has ended ---------- */
  function renderEvents() {
    document.querySelectorAll("[data-ends]").forEach(function (ev) {
      if (new Date() > new Date(ev.getAttribute("data-ends"))) {
        var tag = ev.querySelector("[data-status]");
        if (tag) { tag.textContent = t("pastWebinar"); tag.classList.add("is-past"); }
        var reg = ev.querySelector("[data-register]");
        if (reg) reg.hidden = true;
      }
    });
  }

  renderCfp();
  renderCalendar();
  renderEvents();

  I.onChange(function () {
    syncToggle();
    renderDirectory();
    renderCfp();
    renderCalendar();
    renderEvents();
  });
})();
