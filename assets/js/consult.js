/* Consulting page: service buttons preselect the form; the form builds a WhatsApp message. */
(function () {
  "use strict";
  var WA = "6285287694386";
  var I = window.RCC_I18N || { lang: function () { return "en"; } };
  var T = {
    en: {
      intro: "Hello RCC, I would like to book a research consultation.",
      name: "Name", status: "Status", svc: "Service", field: "Field of study", when: "Deadline", note: "About the project",
      st: { lect: "Lecturer or researcher", grad: "Master's or doctoral student", ug: "Undergraduate student", other: "Other" },
      svcs: { data: "Data analysis consulting", article: "Research article and SLR writing consulting", slr: "SLR consulting for articles and final theses", other: "Not sure yet, would like advice" }
    },
    id: {
      intro: "Halo RCC, saya ingin konsultasi riset.",
      name: "Nama", status: "Status", svc: "Layanan", field: "Bidang ilmu", when: "Tenggat", note: "Tentang proyek",
      st: { lect: "Dosen atau peneliti", grad: "Mahasiswa S2 atau S3", ug: "Mahasiswa S1", other: "Lainnya" },
      svcs: { data: "Konsultasi pengolahan data", article: "Konsultasi penulisan artikel riset dan SLR", slr: "Konsultasi SLR untuk artikel dan tugas akhir", other: "Belum yakin, ingin konsultasi dulu" }
    }
  };

  var form = document.getElementById("consult-form");
  if (!form) return;

  document.querySelectorAll("[data-svc]").forEach(function (b) {
    b.addEventListener("click", function () {
      form.svc.value = b.getAttribute("data-svc");
      document.getElementById("request").scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(function () { form.name.focus({ preventScroll: true }); }, 500);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = T[I.lang() === "id" ? "id" : "en"];
    var lines = [t.intro, ""];
    function add(label, v) { v = (v || "").trim(); if (v) lines.push(label + ": " + v); }
    add(t.name, form.name.value);
    add(t.status, t.st[form.status.value]);
    add(t.svc, t.svcs[form.svc.value]);
    add(t.field, form.field.value);
    add(t.when, form.when.value);
    add(t.note, form.note.value);
    window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });
})();
