/* Prospectus flipbook: StPageFlip (MIT) over page images rendered from the PDF. */
(function () {
  "use strict";
  var el = document.getElementById("book");
  if (!el || !window.St || !window.St.PageFlip) return;

  var N = 12;
  var pages = [];
  for (var i = 1; i <= N; i++) pages.push("/assets/prospectus/pages/p-" + (i < 10 ? "0" + i : i) + ".jpg");

  // Fit the open book (two A4 pages side by side) inside the visible height.
  function fit() {
    var wrap = document.getElementById("book-wrap");
    var availH = Math.max(320, window.innerHeight - (document.fullscreenElement ? 150 : 250));
    var spread = window.innerWidth >= 700 ? 2 * 794 / 1123 : 794 / 1123;
    document.getElementById("book-size").style.width = Math.min(wrap.clientWidth - 8, Math.floor(availH * spread)) + "px";
  }
  fit();

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var book = new St.PageFlip(el, {
    width: 520,              // one A4 page, base size
    height: 735,
    size: "stretch",
    minWidth: 260,
    maxWidth: 820,
    minHeight: 368,
    maxHeight: 1160,
    showCover: true,         // cover and back cover stand alone, inside pages open as spreads
    drawShadow: true,
    maxShadowOpacity: 0.45,
    flippingTime: reduce ? 250 : 900,
    usePortrait: true,       // one page at a time on narrow screens
    mobileScrollSupport: false,
    showPageCorners: true
  });
  // HTML mode (not canvas) so the empty half beside the cover stays transparent.
  var nodes = pages.map(function (src, i) {
    var d = document.createElement("div");
    d.className = "book-page" + (i === 0 || i === N - 1 ? " is-hard" : "");
    if (i === 0 || i === N - 1) d.setAttribute("data-density", "hard");
    var img = document.createElement("img");
    img.src = src; img.alt = "Page " + (i + 1); img.draggable = false;
    img.loading = i < 3 ? "eager" : "lazy";
    d.appendChild(img);
    el.appendChild(d);
    return d;
  });
  book.loadFromHTML(nodes);

  var count = document.getElementById("book-count");
  var prev = document.getElementById("book-prev");
  var next = document.getElementById("book-next");

  function update() {
    var idx = book.getCurrentPageIndex();
    var orient = book.getOrientation();
    var label = String(idx + 1);
    if (orient === "landscape" && idx > 0 && idx < N - 1) {
      var a = idx % 2 === 1 ? idx + 1 : idx;           // spreads are 2-3, 4-5, ...
      label = a + "–" + Math.min(a + 1, N);
    }
    count.textContent = label + " / " + N;
    prev.disabled = idx === 0;
    next.disabled = idx >= N - 1 || (orient === "landscape" && idx >= N - 2 && idx % 2 === 1);
  }
  book.on("flip", update);
  book.on("changeOrientation", update);
  book.on("init", update);
  window.addEventListener("resize", function () { fit(); book.update && book.update(); });
  document.addEventListener("fullscreenchange", function () { setTimeout(function () { fit(); book.update && book.update(); }, 50); });

  prev.addEventListener("click", function () { book.flipPrev(); });
  next.addEventListener("click", function () { book.flipNext(); });
  document.addEventListener("keydown", function (e) {
    var t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    if (e.key === "ArrowRight") book.flipNext();
    if (e.key === "ArrowLeft") book.flipPrev();
  });

  var full = document.getElementById("book-full");
  var stage = document.querySelector(".book-stage");
  if (full && stage && stage.requestFullscreen) {
    full.addEventListener("click", function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else stage.requestFullscreen();
    });
    document.addEventListener("fullscreenchange", function () {
      full.textContent = document.fullscreenElement
        ? (document.documentElement.lang === "id" ? "Keluar layar penuh" : "Exit full screen")
        : (document.documentElement.lang === "id" ? "Layar penuh" : "Full screen");
    });
  } else if (full) {
    full.hidden = true;
  }
})();
