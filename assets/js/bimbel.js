/* RCC tutoring (bimbel) page: programme data, filters, and WhatsApp sign-up.
   Edit prices here. Prices are in rupiah per session (min, max). */
(function () {
  "use strict";

  var WA = "6285287694386";

  var PROGRAMS = [
    {
      id: "sd", level: "SD", tone: "sun",
      badge: { en: "Grades 1–6", id: "Kelas 1–6" },
      title: { en: "Elementary school tutoring", id: "Bimbel SD" },
      text: {
        en: "Strong foundations in English, numbers, and science, so lessons at school feel easier.",
        id: "Membangun dasar yang kuat dalam Bahasa Inggris, berhitung, dan IPA agar pelajaran di sekolah terasa lebih mudah."
      },
      groups: [{ en: ["English", "Mathematics", "Science (IPA)"], id: ["Bahasa Inggris", "Matematika", "IPA"] }],
      price: [50000, 80000]
    },
    {
      id: "smp", level: "SMP", tone: "mint",
      badge: { en: "Grades 7–9", id: "Kelas 7–9" },
      title: { en: "Junior high tutoring", id: "Bimbel SMP" },
      text: {
        en: "Keep up with school, finish homework with confidence, and prepare for semester exams.",
        id: "Mengikuti pelajaran sekolah, mengerjakan PR dengan percaya diri, dan bersiap menghadapi ujian semester."
      },
      groups: [{ en: ["English", "Mathematics", "Science (IPA)"], id: ["Bahasa Inggris", "Matematika", "IPA"] }],
      price: [60000, 100000]
    },
    {
      id: "sma", level: "SMA", tone: "sky",
      badge: { en: "Grades 10–12", id: "Kelas 10–12" },
      title: { en: "Senior high tutoring", id: "Bimbel SMA" },
      text: {
        en: "Core subjects plus the science electives, from daily lessons to exam preparation.",
        id: "Mata pelajaran inti dan peminatan sains, dari materi harian hingga persiapan ujian."
      },
      groups: [
        { label: { en: "Core", id: "Inti" }, en: ["English", "Mathematics", "Science (IPA)"], id: ["Bahasa Inggris", "Matematika", "IPA"] },
        { label: { en: "Science electives", id: "Peminatan" }, en: ["Physics", "Chemistry", "Biology"], id: ["Fisika", "Kimia", "Biologi"] }
      ],
      price: [80000, 130000]
    },
    {
      id: "utbk", level: "UTBK", tone: "lilac",
      badge: { en: "Grade 12 and gap-year students", id: "Kelas 12 & alumni" },
      title: { en: "UTBK-SNBT preparation", id: "Bimbel UTBK-SNBT" },
      text: {
        en: "Focused practice for the state university entrance test, from reasoning to literacy and mathematics.",
        id: "Latihan terarah untuk seleksi masuk PTN, dari penalaran hingga literasi dan matematika."
      },
      groups: [{
        en: ["Scholastic aptitude (TPS)", "Indonesian literacy", "English literacy", "Mathematical reasoning"],
        id: ["Tes Potensi Skolastik", "Literasi Bahasa Indonesia", "Literasi Bahasa Inggris", "Penalaran Matematika"]
      }],
      price: [100000, 160000]
    },
    {
      id: "cpns", level: "CPNS", tone: "rose",
      badge: { en: "Civil service applicants", id: "Pelamar CPNS" },
      title: { en: "CPNS test preparation", id: "Bimbel CPNS" },
      text: {
        en: "Preparation for the basic competency test (SKD), with practice on every question type.",
        id: "Persiapan Seleksi Kompetensi Dasar (SKD), dengan latihan untuk setiap jenis soal."
      },
      groups: [{
        en: ["National insight (TWK)", "General intelligence (TIU)", "Personal characteristics (TKP)"],
        id: ["Tes Wawasan Kebangsaan (TWK)", "Tes Intelegensia Umum (TIU)", "Tes Karakteristik Pribadi (TKP)"]
      }],
      price: [100000, 160000]
    }
  ];

  var STR = {
    en: {
      all: "All programs",
      from: "per session",
      enrol: "Sign up on WhatsApp",
      ask: "Hello RCC, I am interested in {title}.",
      consult: "Hello RCC, I would like a free consultation about {level} tutoring.",
      consultName: " My name is {name}.",
      currency: function (n) { return "IDR " + n.toLocaleString("en-US"); },
      none: "Choose a level"
    },
    id: {
      all: "Semua program",
      from: "per pertemuan",
      enrol: "Daftar via WhatsApp",
      ask: "Halo RCC, saya tertarik dengan {title}.",
      consult: "Halo RCC, saya ingin konsultasi gratis tentang bimbel {level}.",
      consultName: " Nama saya {name}.",
      currency: function (n) { return "Rp" + n.toLocaleString("id-ID"); },
      none: "Pilih jenjang"
    }
  };

  var I = window.RCC_I18N || { lang: function () { return "en"; }, onChange: function () {} };
  function L() { return I.lang() === "id" ? "id" : "en"; }
  function S(k) { return STR[L()][k]; }
  function fill(s, v) { return s.replace(/\{(\w+)\}/g, function (_, k) { return v[k] || ""; }); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function wa(text) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(text); }

  var grid = document.getElementById("program-grid");
  var tabs = document.querySelectorAll("[data-level-tab]");
  var current = "all";

  function card(p) {
    var l = L();
    var groups = p.groups.map(function (g) {
      return (g.label ? '<p class="pg-group">' + esc(g.label[l]) + "</p>" : "") +
        '<ul class="pg-subjects">' + g[l].map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>";
    }).join("");
    return '<li class="pg-card" data-tone="' + p.tone + '" data-level="' + p.id + '">' +
      '<div class="pg-top">' +
        '<span class="pg-badge">' + esc(p.badge[l]) + "</span>" +
        '<span class="pg-level" aria-hidden="true">' + p.level + "</span>" +
        "<h3>" + esc(p.title[l]) + "</h3>" +
        "<p>" + esc(p.text[l]) + "</p>" +
      "</div>" +
      '<div class="pg-body">' +
        groups +
        '<p class="pg-price"><strong>' + S("currency")(p.price[0]) + " – " + S("currency")(p.price[1]) + "</strong><span>" + S("from") + "</span></p>" +
        '<a class="btn btn-primary pg-cta" href="' + wa(fill(S("ask"), { title: p.title[l] })) + '" target="_blank" rel="noopener">' + S("enrol") + "</a>" +
      "</div>" +
    "</li>";
  }

  function render() {
    if (!grid) return;
    var list = PROGRAMS.filter(function (p) { return current === "all" || p.id === current; });
    grid.innerHTML = list.map(card).join("");
    grid.setAttribute("data-count", list.length);
    tabs.forEach(function (t) { t.setAttribute("aria-pressed", String(t.getAttribute("data-level-tab") === current)); });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      current = t.getAttribute("data-level-tab");
      render();
      if (t.hasAttribute("data-scroll")) document.getElementById("programs").scrollIntoView();
    });
  });

  /* Hero consultation form: builds a WhatsApp message instead of collecting data on the site. */
  var form = document.getElementById("consult-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var level = form.level.value;
      var name = form.name.value.trim();
      var p = PROGRAMS.filter(function (x) { return x.id === level; })[0];
      var msg = fill(S("consult"), { level: p ? p.level : "" }) + (name ? fill(S("consultName"), { name: name }) : "");
      window.open(wa(msg), "_blank", "noopener");
    });
  }

  render();
  I.onChange(render);
})();
