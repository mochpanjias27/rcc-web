(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  var J = window.RCC_JOURNALS;
  if (!J) return;

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var now = new Date();
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
    var terms = q.split(/\s+/).filter(function (t) { return t.length > 1; }).map(function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    });
    if (!terms.length) return safe;
    return safe.replace(new RegExp("(" + terms.map(esc).join("|") + ")", "gi"), "<mark>$1</mark>");
  }
  function sintaLabel(j) { return j.sinta ? "SINTA " + j.sinta : "SINTA in progress"; }
  function haystack(j) {
    return [j.code, j.name, j.imprint, j.subjects.join(" "), sintaLabel(j)].join(" ").toLowerCase();
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
    return state.q.toLowerCase().split(/\s+/).every(function (t) { return h.indexOf(t) !== -1; });
  }

  function row(j) {
    var q = state.q;
    var sinta = j.sinta
      ? (j.sintaUrl
          ? '<a class="sinta" data-level="' + j.sinta + '" href="' + j.sintaUrl + '" target="_blank" rel="noopener">SINTA ' + j.sinta + '<span class="visually-hidden"> (opens SINTA profile)</span></a>'
          : '<span class="sinta" data-level="' + j.sinta + '">SINTA ' + j.sinta + "</span>")
      : '<span class="sinta" data-level="none">Accreditation in progress</span>';
    var schedule = j.months.map(function (m) { return MONTHS[m - 1]; }).join(", ");
    var articleSearch = q
      ? '<a class="j-search-link" href="' + j.url + "/search/search?query=" + encodeURIComponent(q) + '" target="_blank" rel="noopener">Search articles in ' + j.code + " for “" + esc(q) + "”</a>"
      : "";
    return (
      '<li class="journal" data-imprint="' + j.imprint + '">' +
        '<div class="j-code" aria-hidden="true">' + j.code + "</div>" +
        '<div class="j-main">' +
          '<h3 class="j-name"><a href="' + j.url + '/index" target="_blank" rel="noopener">' + highlight(j.name, q) + " (" + highlight(j.code, q) + ")</a></h3>" +
          '<p class="j-meta">Published by ' + esc(window.RCC_IMPRINTS[j.imprint]) + ", quarterly: " + schedule + "</p>" +
          '<ul class="j-subjects" aria-label="Subjects">' + j.subjects.map(function (s) { return "<li>" + highlight(s, q) + "</li>"; }).join("") + "</ul>" +
          articleSearch +
        "</div>" +
        '<div class="j-sinta"><span class="j-label">Accreditation</span>' + sinta + "</div>" +
        '<div class="j-apc"><span class="j-label">Article processing charge</span><span class="j-value">USD ' + j.apc + "</span></div>" +
        '<div class="j-actions">' +
          '<a class="btn btn-primary" href="' + j.url + '/about/submissions" target="_blank" rel="noopener">Submit to ' + j.code + "</a>" +
          '<a class="btn btn-ghost" href="' + j.url + '/issue/current" target="_blank" rel="noopener">Current issue</a>' +
        "</div>" +
      "</li>"
    );
  }

  function render() {
    if (!list) return;
    var found = J.filter(matches);
    if (!found.length) {
      list.innerHTML =
        '<li class="empty"><h3>No journal matches “' + esc(state.q) + "”" + (state.sinta !== "all" ? " at SINTA " + state.sinta : "") + ".</h3>" +
        "<p>Try a broader subject such as statistics, education, law, or health, or clear the filters to browse all ten journals.</p></li>";
    } else {
      list.innerHTML = found.map(row).join("");
    }
    var filtered = state.q || state.sinta !== "all";
    status.innerHTML = filtered
      ? "<span>Showing " + found.length + " of " + J.length + " journals" +
        (state.q ? " for “" + esc(state.q) + "”" : "") +
        (state.sinta !== "all" ? " at SINTA " + state.sinta : "") +
        '</span><button type="button" id="clear-filters">Clear filters</button>'
      : "<span>All " + J.length + " journals, sorted by accreditation</span>";
    var clear = document.getElementById("clear-filters");
    if (clear) clear.addEventListener("click", function () { setState("", "all"); input.focus(); });
  }

  function setState(q, sinta) {
    state.q = q.trim();
    state.sinta = sinta;
    if (input) input.value = state.q;
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-sinta") === sinta)); });
    render();
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
    var t;
    input.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () { setState(input.value, state.sinta); }, 150);
    });
    chips.forEach(function (c) {
      c.addEventListener("click", function () { setState(input.value, c.getAttribute("data-sinta")); });
    });
    document.querySelectorAll("[data-suggest]").forEach(function (b) {
      b.addEventListener("click", function () {
        setState(b.getAttribute("data-suggest"), "all");
        document.getElementById("journals").scrollIntoView();
      });
    });
    var params = new URLSearchParams(window.location.search);
    setState(params.get("q") || "", params.get("sinta") || "all");
  }

  /* ---------- Publishing calendar ---------- */
  var cal = document.getElementById("cal");
  if (cal) {
    var head = "<thead><tr><th scope=\"col\"><span class=\"visually-hidden\">Journal</span></th>" +
      MONTHS.map(function (m, i) {
        var isNow = i + 1 === thisMonth;
        return '<th scope="col"' + (isNow ? ' class="is-now"' : "") + ">" + m + (isNow ? "<span>this month</span>" : "") + "</th>";
      }).join("") + "</tr></thead>";
    var bySchedule = J.slice().sort(function (a, b) { return a.months[0] - b.months[0]; });
    var body = "<tbody>" + bySchedule.map(function (j) {
      return '<tr><th scope="row"><a href="' + j.url + '/index" target="_blank" rel="noopener" title="' + esc(j.name) + '">' + j.code + "</a></th>" +
        MONTHS.map(function (m, i) {
          var pub = j.months.indexOf(i + 1) !== -1;
          var cls = [i + 1 === thisMonth ? "is-now" : "", pub ? "" : "empty-cell"].filter(Boolean).join(" ");
          return "<td" + (cls ? ' class="' + cls + '"' : "") + ">" +
            (pub ? '<span class="dot" role="img" aria-label="' + j.code + " publishes in " + MONTHS_LONG[i] + '"></span>' : "") + "</td>";
        }).join("") + "</tr>";
    }).join("") + "</tbody>";
    cal.innerHTML = "<caption class=\"visually-hidden\">Issue months for each journal</caption><colgroup><col class=\"c-name\">" + "<col>".repeat(12) + "</colgroup>" + head + body;

    function chipsFor(m) {
      return J.filter(function (j) { return j.months.indexOf(m) !== -1; }).map(function (j) {
        return '<li><a href="' + j.url + '/index" target="_blank" rel="noopener" title="' + esc(j.name) + '">' + j.code + "</a></li>";
      }).join("");
    }
    document.getElementById("now-title").textContent = "Publishing in " + MONTHS_LONG[thisMonth - 1];
    document.getElementById("next-title").textContent = "Next up in " + MONTHS_LONG[nextMonth - 1];
    document.getElementById("now-list").innerHTML = chipsFor(thisMonth);
    document.getElementById("next-list").innerHTML = chipsFor(nextMonth);
  }

  /* ---------- Events: retire the featured event once it has ended ---------- */
  document.querySelectorAll("[data-ends]").forEach(function (ev) {
    if (new Date() > new Date(ev.getAttribute("data-ends"))) {
      var tag = ev.querySelector("[data-status]");
      if (tag) { tag.textContent = "Past webinar"; tag.classList.add("is-past"); }
      var reg = ev.querySelector("[data-register]");
      if (reg) reg.hidden = true;
    }
  });

  var yr = document.getElementById("year");
  if (yr) yr.textContent = now.getFullYear();
})();
