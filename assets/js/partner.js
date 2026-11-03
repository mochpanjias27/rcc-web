/* Partnership page: package buttons preselect the form; the form builds a WhatsApp message. */
(function () {
  "use strict";
  var WA = "6285287694386";
  var I = window.RCC_I18N || { lang: function () { return "en"; } };
  var T = {
    en: {
      intro: "Hello RCC, we would like to discuss a partnership.",
      inst: "Institution", name: "Contact person", role: "Position", pkg: "Package",
      size: "Estimated participants", when: "Preferred time", note: "Notes",
      pkgs: { ws: "Workshop and coaching clinic for Scopus publication", conf: "Co-hosted seminar or international conference", mou: "MoU and MoA partnership", other: "Not sure yet, would like advice" }
    },
    id: {
      intro: "Halo RCC, kami ingin mendiskusikan kerja sama.",
      inst: "Institusi", name: "Narahubung", role: "Jabatan", pkg: "Paket",
      size: "Perkiraan peserta", when: "Waktu yang diinginkan", note: "Catatan",
      pkgs: { ws: "Workshop dan coaching clinic publikasi Scopus", conf: "Co-host seminar atau konferensi internasional", mou: "Kerja sama MoU dan MoA", other: "Belum yakin, ingin konsultasi" }
    }
  };

  var form = document.getElementById("partner-form");
  if (!form) return;

  document.querySelectorAll("[data-pkg]").forEach(function (b) {
    b.addEventListener("click", function () {
      form.pkg.value = b.getAttribute("data-pkg");
      setTimeout(function () { form.inst.focus({ preventScroll: true }); }, 400);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = T[I.lang() === "id" ? "id" : "en"];
    var lines = [t.intro, ""];
    function add(label, v) { v = (v || "").trim(); if (v) lines.push(label + ": " + v); }
    add(t.inst, form.inst.value);
    add(t.name, form.name.value);
    add(t.role, form.role.value);
    add(t.pkg, t.pkgs[form.pkg.value]);
    add(t.size, form.size.value);
    add(t.when, form.when.value);
    add(t.note, form.note.value);
    window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });
})();
