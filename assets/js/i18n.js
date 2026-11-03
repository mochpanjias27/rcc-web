/* RCC bilingual support (English / Bahasa Indonesia).
   English lives in the HTML. Elements marked data-i18n="key" get their Indonesian
   HTML from PAGE below; data-i18n-attr="placeholder:key|aria-label:key" does the same
   for attributes. STR holds strings that JavaScript builds at runtime. */
(function () {
  "use strict";

  var PAGE = {
    /* ---- shared chrome ---- */
    "meta.title.home": "Research Collaboration Community (RCC)",
    "meta.desc.home": "Sepuluh jurnal internasional bertelaah sejawat dan berakses terbuka di bidang matematika, bisnis, pendidikan, kesehatan, hukum, dan pengabdian masyarakat, diterbitkan oleh RCC, IORA, dan CRP.",
    "meta.title.team": "Tim Manajemen | Research Collaboration Community",
    "meta.desc.team": "Tim manajemen Research Collaboration Community (RCC), penerbit sepuluh jurnal internasional di bawah RCC, IORA, dan CRP.",
    "skip": "Langsung ke konten",
    "brand.sub": "Jurnal RCC, IORA, dan CRP",
    "nav.label": "Menu utama",
    "nav.journals": "Jurnal",
    "nav.cfp": "Call for papers",
    "nav.events": "Workshop",
    "nav.team": "Tim manajemen",
    "nav.submit": "Kirim naskah",
    "lang.label": "Pilih bahasa",
    "wa.text": "Chat dengan kami",
    "wa.label": "Chat dengan RCC via WhatsApp",
    "wa.href": "https://wa.me/6285287694386?text=Halo%20RCC%2C%20saya%20ingin%20bertanya.",

    /* ---- hero ---- */
    "hero.title": "Temukan jurnal yang tepat untuk penelitian Anda.",
    "hero.lede": "Sepuluh jurnal internasional bertelaah sejawat dan berakses terbuka di bidang matematika, bisnis, pendidikan, kesehatan, hukum, dan pengabdian masyarakat, diterbitkan oleh RCC, IORA, dan CRP.",
    "search.label": "Cari jurnal berdasarkan judul, bidang, atau singkatan",
    "search.placeholder": "Bidang atau nama jurnal",
    "search.button": "Cari",
    "filter.label": "Saring berdasarkan akreditasi SINTA",
    "filter.title": "Akreditasi:",
    "filter.all": "Semua",
    "search.hint": 'Bidang populer: <button type="button" data-suggest="riset operasi">riset operasi</button>, <button type="button" data-suggest="pendidikan">pendidikan</button>, <button type="button" data-suggest="ekonomi">ekonomi</button>, <button type="button" data-suggest="statistika">statistika</button>, <button type="button" data-suggest="kesehatan">kesehatan</button>',
    "fact.journals": "<strong>10</strong>jurnal internasional",
    "fact.sinta": "<strong>9</strong>terakreditasi SINTA",
    "fact.issues": "<strong>40</strong>terbitan setiap tahun",
    "fact.founded": "<strong>2019</strong>berdiri di Bandung",

    /* ---- what we do ---- */
    "svc.title": "Lingkup kerja kami",
    "svc.lede": "RCC mendampingi pelajar dan peneliti di setiap tahap, dari matematika sekolah hingga artikel di jurnal internasional.",
    "svc.pub.title": "Publikasi jurnal",
    "svc.pub.text": "Sepuluh jurnal internasional bertelaah sejawat dan berakses terbuka di bidang matematika, bisnis, pendidikan, kesehatan, hukum, dan pengabdian masyarakat. Sembilan di antaranya terakreditasi SINTA.",
    "svc.pub.tags": "<li>10 jurnal</li><li>SINTA 2 hingga 5</li><li>DOI Crossref</li>",
    "svc.pub.link1": "Lihat daftar jurnal",
    "svc.pub.link2": "Call for papers yang dibuka",
    "svc.ws.title": "Workshop dan pelatihan",
    "svc.ws.text": "Penulisan ilmiah, pendampingan publikasi di jurnal terindeks Scopus, serta keterampilan olah data riset seperti SPSS dan tools AI, di kampus maupun daring.",
    "svc.ws.tags": "<li>Workshop di kampus</li><li>Coaching clinic</li><li>Webinar</li>",
    "svc.ws.link1": "Lihat workshop terbaru",
    "svc.ws.link2": "Undang kami ke kampus Anda",
    "svc.tut.title": "Bimbingan belajar",
    "svc.tut.text": "Pendampingan belajar Matematika, Bahasa Inggris, dan IPA untuk siswa SD, SMP, dan SMA, serta persiapan UTBK-SNBT dan tes CPNS.",
    "svc.tut.facts": "<dt>Jenjang</dt><dd>SD, SMP, SMA, UTBK, CPNS</dd><dt>Mata pelajaran</dt><dd>Matematika, Bahasa Inggris, IPA</dd>",
    "svc.tut.page": "Lihat program dan biaya",
    "svc.tut.link": "Tanya kelas lewat WhatsApp",

    /* ---- call for papers ---- */
    "cfp.title": "Call for papers",
    "cfp.lede": "Jurnal-jurnal berikut sedang menerima naskah untuk terbitan berikutnya. Naskah ditelaah sesuai urutan masuk, jadi kirimkan lebih awal agar peluang terbit di edisi yang Anda incar lebih besar.",
    "cfp.ask": "Tanya jurnal yang cocok",

    /* ---- journals ---- */
    "dir.title": "Jurnal kami",
    "dir.lede": "Semua jurnal berakses terbuka, bertelaah sejawat, dan memberikan DOI Crossref untuk setiap artikel.",

    /* ---- calendar ---- */
    "cal.title": "Terbitan baru setiap bulan",
    "cal.lede": "Setiap jurnal terbit empat kali setahun dengan jadwal yang saling melengkapi, sehingga selalu ada edisi yang segera terbit. Rencanakan pengiriman naskah sesuai bulan yang Anda butuhkan.",
    "cal.swipe": "Geser tabel ke samping untuk melihat kedua belas bulan.",
    "cal.scroll": "Kalender terbit, dapat digeser",
    "cal.note": "Hubungi editor masing-masing jurnal untuk tenggat pengiriman naskah.",

    /* ---- indexing ---- */
    "idx.title": "Terindeks di tempat peneliti mencari",
    "idx.lede": "Artikel kami dapat ditemukan melalui berbagai pengindeks nasional dan internasional, dan setiap jurnal mengikuti standar editorial yang sama.",
    "idx.policies": "<li>Telaah sejawat sebelum setiap keputusan penerimaan</li><li>Akses terbuka, gratis dibaca siapa saja</li><li>DOI terdaftar di Crossref untuk setiap artikel</li><li>Gaya sitasi APA di semua jurnal</li><li>Terbit empat kali setahun dengan jadwal tetap</li>",
    "idx.sinta": "9 dari 10 jurnal terakreditasi",
    "idx.all": "Semua jurnal",
    "idx.doi": "DOI untuk setiap artikel",
    "idx.rcciora": "Jurnal RCC dan IORA",
    "idx.doaj": "IJBESD, juga di EBSCO",

    /* ---- events ---- */
    "ev.title": "Workshop dan webinar",
    "ev.lede": "Kami membantu peneliti dari olah data hingga artikel terbit, melalui webinar gratis dan pendampingan langsung bersama kampus mitra.",
    "ev.tag.upcoming": "Webinar mendatang, pendaftaran gratis",
    "ev.spss.title": "Pengolahan Data pada SPSS dengan Bantuan AI di Era Penelitian Modern",
    "ev.spss.alt": "Poster webinar Pengolahan Data pada SPSS dengan Bantuan AI di Era Penelitian Modern, Rabu 4 November 2026, narasumber Dr. Hilda Azkiyah Surya",
    "ev.spss.details": "<dt>Tanggal</dt><dd>Rabu, 4 November 2026</dd><dt>Waktu</dt><dd>19.00–21.00 WIB, via Zoom</dd><dt>Narasumber</dt><dd>Dr. Hilda Azkiyah Surya<span>Dosen paruh waktu, Politeknik Negeri Bandung</span></dd><dt>Bahasa</dt><dd>Bahasa Indonesia</dd>",
    "ev.spss.extra": "Paket berbayar opsional: sertifikat 2 JP, materi lengkap, rekaman sesi, dan voucher diskon APC untuk jurnal internasional RCC.",
    "ev.register": "Daftar gratis",
    "ev.askwa": "Tanya via WhatsApp",
    "ev.past": "Kegiatan sebelumnya",
    "ev.oct": "Okt 2026",
    "ev.jun": "Jun 2026",
    "ev.ai.title": "Pemanfaatan Tools AI untuk Riset dan Penulisan Artikel Ilmiah (seri 1)",
    "ev.ai.desc": "Webinar bersama Dr. Moch Panji Agung Saputra, dosen Universitas Padjadjaran",
    "ev.ai.alt": "Poster webinar pemanfaatan tools AI untuk riset, 21 Oktober 2026",
    "ev.pakuan.title": "Workshop &amp; Coaching Clinic Publikasi Jurnal Terindeks Scopus",
    "ev.pakuan.desc": "Diselenggarakan oleh UP3M FMIPA, Universitas Pakuan, Bogor",
    "ev.pakuan.alt1": "Kolase foto peserta workshop publikasi Scopus, Universitas Pakuan, 1–2 Oktober 2026",
    "ev.pakuan.alt2": "Kolase foto ucapan terima kasih kepada UP3M FMIPA Universitas Pakuan",
    "ev.pakuan.alt3": "Publikasi FMIPA Universitas Pakuan: Workshop Publikasi Jurnal Terindeks Scopus, 1 Oktober 2026",
    "ev.ummi.title": "Workshop Penulisan Artikel Ilmiah",
    "ev.ummi.desc": "Bekerja sama dengan Universitas Muhammadiyah Sukabumi",
    "ev.ummi.alt": "Narasumber workshop penulisan artikel ilmiah di Universitas Muhammadiyah Sukabumi, 2 Juni 2026",
    "ev.cta": 'Ingin mengadakan workshop di fakultas Anda? <a href="/training">Lihat program pelatihan kami</a> atau <a href="https://wa.me/6285287694386?text=Halo%20RCC%2C%20kami%20ingin%20mengadakan%20workshop" target="_blank" rel="noopener">hubungi kami via WhatsApp</a>.',

    /* ---- about & footer ---- */
    "about.title": "Tentang Research Collaboration Community",
    "about.text": "Research Collaboration Community (Rescollacomm) didirikan di Bandung pada 25 Mei 2019 untuk memajukan riset kuantitatif dan pemodelan matematika di Indonesia. Kini RCC mengelola sepuluh jurnal internasional di bawah tiga unit penerbitan, yaitu RCC, IORA, dan CRP, menyelenggarakan workshop penulisan dan publikasi bersama berbagai universitas, serta membuka bimbingan belajar untuk siswa sekolah.",
    "about.logo": "Logo Research Collaboration Community",
    "about.team": "Kenali tim manajemen",
    "about.contact": "Hubungi kami",
    "foot.address": 'Jl. Riung Ampuh No. 3, Riung Bandung<br>Bandung 40295, Jawa Barat, Indonesia<br><a href="mailto:ejournalrescollacomm@gmail.com">ejournalrescollacomm@gmail.com</a><br><a href="https://wa.me/6285287694386" target="_blank" rel="noopener">WhatsApp +62 852-8769-4386</a>',
    "foot.rcc": "Jurnal RCC",
    "foot.crp": "Jurnal CRP",
    "foot.iora": "Jurnal IORA",
    "foot.follow": "Ikuti kami",
    "foot.oa": "Seluruh artikel terbit dengan akses terbuka.",
    "foot.home": "Beranda",

    /* ---- tutoring page ---- */
    "nav.bimbel": "Bimbel",
    "meta.title.bimbel": "Bimbel RCC | Research Collaboration Community",
    "meta.desc.bimbel": "Bimbel RCC untuk siswa SD, SMP, dan SMA (Bahasa Inggris, Matematika, IPA, Fisika, Kimia, Biologi), serta persiapan UTBK-SNBT dan CPNS.",
    "bb.kicker": "Bimbel RCC",
    "bb.title": "Belajar lebih terarah, dari SD sampai tes CPNS.",
    "bb.lede": "Bimbingan belajar Bahasa Inggris, Matematika, dan IPA untuk siswa SD, SMP, dan SMA, serta persiapan UTBK-SNBT dan tes CPNS. Kelas privat atau kelompok kecil, online maupun tatap muka di Bandung.",
    "bb.form.title": "Konsultasi gratis",
    "bb.form.level": "Jenjang",
    "bb.form.choose": "Pilih jenjang",
    "bb.form.name": "Nama Anda",
    "bb.form.namePh": "Nama Anda (opsional)",
    "bb.form.submit": "Chat via WhatsApp",
    "bb.form.note": "Membuka WhatsApp dengan pesan yang siap dikirim. Tidak ada data yang disimpan di situs ini.",
    "bb.levels.label": "Program per jenjang",
    "bb.lv.sd": "Kelas 1–6",
    "bb.lv.smp": "Kelas 7–9",
    "bb.lv.sma": "Kelas 10–12",
    "bb.lv.utbk": "Masuk PTN",
    "bb.lv.cpns": "Seleksi ASN",
    "bb.prog.title": "Program dan biaya",
    "bb.prog.lede": "Biaya dihitung per pertemuan. Biaya akhir bergantung pada format kelas, privat atau kelompok, dan dikonfirmasi admin bersama jadwal sebelum belajar dimulai.",
    "bb.tabs.label": "Saring program",
    "bb.tab.all": "Semua",
    "bb.why.title": "Kenapa belajar di RCC",
    "bb.why1.t": "Didukung tim akademisi",
    "bb.why1.p": "Bimbel RCC dikelola oleh Research Collaboration Community, komunitas dosen dan peneliti yang juga mengelola sepuluh jurnal internasional.",
    "bb.why2.t": "Mengikuti kurikulum sekolah",
    "bb.why2.p": "Materi mengikuti pelajaran di sekolah serta kisi-kisi terbaru UTBK-SNBT dan Seleksi Kompetensi Dasar CPNS.",
    "bb.why3.t": "Konsultasi gratis lebih dulu",
    "bb.why3.p": "Ceritakan kebutuhan belajar siswa lewat WhatsApp, dan kami rekomendasikan program yang tepat sebelum Anda memutuskan.",
    "bb.why4.t": "Biaya jelas per pertemuan",
    "bb.why4.p": "Setiap program menampilkan kisaran biayanya sejak awal, dan admin mengonfirmasi biaya pastinya sebelum pertemuan pertama.",
    "bb.steps.title": "Cara mendaftar",
    "bb.step1.t": "Chat dengan kami",
    "bb.step1.p": "Kirim pesan WhatsApp berisi jenjang siswa dan mata pelajaran yang dibutuhkan.",
    "bb.step2.t": "Sepakati rencana belajar",
    "bb.step2.p": "Admin merekomendasikan program serta mengonfirmasi jadwal dan biaya bersama Anda.",
    "bb.step3.t": "Mulai belajar",
    "bb.step3.p": "Belajar dimulai sesuai jadwal yang disepakati, dan Anda bisa bertanya kepada admin kapan saja.",
    "bb.banner.kicker": "Masih punya pertanyaan?",
    "bb.banner.title": "Tanyakan program yang cocok ke admin kami",
    "bb.banner.btn": "Chat admin",
    "bb.banner.href": "https://wa.me/6285287694386?text=Halo%20RCC%2C%20saya%20ingin%20bertanya%20tentang%20bimbel.",
    "bb.faq.title": "Pertanyaan yang sering diajukan",
    "bb.q1": "Bagaimana cara mendaftar?",
    "bb.a1": "Pilih program di atas lalu ketuk \u201cDaftar via WhatsApp\u201d, atau gunakan formulir konsultasi di bagian atas halaman. Admin akan membalas dan membantu proses selanjutnya.",
    "bb.q2": "Berapa biaya bimbelnya?",
    "bb.a2": "Setiap program menampilkan kisaran biaya per pertemuan, mulai Rp50.000 untuk jenjang SD. Admin mengonfirmasi biaya pasti untuk program Anda sebelum pertemuan pertama.",
    "bb.q3": "Mata pelajaran apa saja yang tersedia?",
    "bb.a3": "Bahasa Inggris, Matematika, dan IPA untuk SD, SMP, dan SMA, ditambah Fisika, Kimia, dan Biologi untuk SMA. Kami juga menyiapkan siswa untuk UTBK-SNBT dan pelamar untuk Seleksi Kompetensi Dasar CPNS (TWK, TIU, TKP).",
    "bb.q4": "Kapan dan di mana belajarnya?",
    "bb.a4": "Jadwal disepakati bersama admin saat mendaftar, menyesuaikan waktu luang siswa. Belajar bisa secara online, di rumah siswa, atau di RCC, Riung Bandung.",
    "bb.q5": "Bolehkah bertanya dulu sebelum memutuskan?",
    "bb.a5": "Tentu. Konsultasi gratis dan tidak ada kewajiban untuk mendaftar.",

    "bb.form.format": "Format kelas",
    "bb.form.fmt0": "Format kelas",
    "bb.fmt.po": "Privat, online",
    "bb.fmt.pt": "Privat, tatap muka",
    "bb.fmt.go": "Kelompok, online",
    "bb.fmt.gt": "Kelompok, tatap muka",
    "bb.fmt.title": "Pilih cara belajar",
    "bb.fmt.lede": "Setiap program tersedia dalam kelas privat maupun kelompok kecil, secara online atau tatap muka.",
    "bb.fmt.who": "Siapa saja di kelas",
    "bb.fmt.private": "Privat",
    "bb.fmt.private.p": "Satu siswa dengan satu tutor, mengikuti kecepatan belajar siswa.",
    "bb.fmt.group": "Kelompok kecil",
    "bb.fmt.group.p": "Maksimal 10 siswa per kelompok, belajar bersama teman.",
    "bb.fmt.where": "Tempat belajar",
    "bb.fmt.online": "Online",
    "bb.fmt.online.p": "Belajar dari rumah melalui panggilan video.",
    "bb.fmt.home": "Di rumah siswa",
    "bb.fmt.home.p": "Tutor datang ke rumah, untuk siswa di sekitar Bandung.",
    "bb.fmt.center": "Di RCC, Riung Bandung",
    "bb.fmt.center.p": "Belajar di tempat belajar RCC.",
    "bb.place.title": "Lokasi belajar",
    "bb.place.city": "Bandung 40295, Jawa Barat",
    "bb.place.map": "Buka di Google Maps",
    "bb.tutor.title": "Kenali para tutor",
    "bb.tutor.lede": "Pembelajaran dipandu oleh anggota tim RCC, para dosen dan lulusan matematika serta bidang terkait.",
    "bb.tutor.panji.role": "Tutor Matematika",
    "bb.tutor.panji.facts": "<li>S1, S2, dan S3 Matematika, Universitas Padjadjaran</li><li>Dosen Departemen Matematika, Universitas Padjadjaran</li>",
    "bb.tutor.hilda.role": "Tutor",
    "bb.tutor.hilda.facts": "<li>Dosen paruh waktu, Politeknik Negeri Bandung</li><li>Narasumber pengolahan data riset dengan SPSS dan AI</li>",
    "bb.tutor.astrid.role": "Tutor Matematika dan koordinator program",
    "bb.tutor.astrid.facts": "<li>S1 dan S2 Matematika</li><li>Memimpin program bimbel RCC</li>",
    "bb.tutor.rizki.role": "Tutor Matematika",
    "bb.tutor.rizki.facts": "<li>S1 dan S2 Matematika</li><li>Chief Operating Officer, RCC</li>",
    "bb.testi.title": "Kata siswa kami",
    "bb.testi.draft": "<strong>Draf.</strong> Kutipan di bawah ini masih isian sementara. Ganti dengan kata-kata asli setiap siswa, atas izin mereka, sebelum halaman ini dipublikasikan.",
    "bb.testi.q": "[Kata-kata asli siswa tentang belajar di RCC]",
    "bb.testi.program": "[Program dan jenjang]",
    "bb.q6": "Berapa jumlah siswa per kelompok?",
    "bb.a6": "Satu kelompok maksimal 10 siswa. Jika ingin pendampingan satu lawan satu, pilih kelas privat.",

    /* ---- training page ---- */
    "nav.training": "Pelatihan",
    "svc.ws.page": "Lihat program pelatihan dan trainer",
    "meta.title.training": "Pelatihan dan Workshop | Research Collaboration Community",
    "meta.desc.training": "Workshop publikasi Scopus, coaching clinic, webinar olah data riset, serta seminar dan konferensi internasional dengan luaran publikasi, bersama trainer RCC.",
    "tr.kicker": "Pelatihan dan Workshop RCC",
    "tr.title": "Dari draf hingga artikel terindeks Scopus.",
    "tr.lede": "Workshop, coaching clinic, dan webinar yang membantu dosen dan peneliti menembus jurnal internasional bereputasi, dipandu oleh trainer yang juga aktif publikasi di Scopus. Kami juga menyelenggarakan seminar dan konferensi internasional dengan luaran publikasi ilmiah.",
    "tr.cta": "Undang kami ke kampus Anda",
    "tr.cta.href": "https://wa.me/6285287694386?text=Halo%20RCC%2C%20kami%20ingin%20mengadakan%20pelatihan%20atau%20workshop.",
    "tr.cta2": "Lihat kegiatan sebelumnya",
    "tr.f1": "trainer dengan profil Scopus",
    "tr.f2": "h-index tertinggi di tim",
    "tr.f3": "jurnal internasional dikelola RCC",
    "tr.past.title": "Kegiatan yang telah kami laksanakan",
    "tr.past.lede": "Workshop dan webinar terbaru bersama kampus mitra dan para peneliti di berbagai daerah.",
    "tr.ev1.title": "Workshop &amp; Coaching Clinic Publikasi Jurnal Terindeks Scopus",
    "tr.ev1.host": "Diselenggarakan oleh UP3M FMIPA, Universitas Pakuan",
    "tr.ev1.text": "Program dua hari untuk dosen: memilih jurnal Scopus yang tepat, menyusun struktur naskah, dan menggarap draf milik peserta sendiri dalam sesi coaching clinic.",
    "tr.ev1.tags": "<li>Workshop</li><li>Coaching clinic</li><li>Di kampus</li>",
    "tr.ev2.title": "Workshop Penulisan Artikel Ilmiah",
    "tr.ev2.host": "Bekerja sama dengan Universitas Muhammadiyah Sukabumi",
    "tr.ev3.title": "Pemanfaatan Tools AI untuk Riset dan Penulisan Artikel Ilmiah (seri 1)",
    "tr.ev3.host": "Webinar bersama Dr. Moch Panji Agung Saputra",
    "tr.ev4.title": "Pengolahan Data pada SPSS dengan Bantuan AI",
    "tr.ev4.host": "Webinar bersama Dr. Hilda Azkiyah Surya",
    "tr.upcoming": "Akan datang",
    "tr.prog.title": "Program yang bisa kami selenggarakan",
    "tr.prog.lede": "Setiap program disesuaikan dengan peserta, bidang keilmuan, dan luaran yang dibutuhkan institusi Anda.",
    "tr.p1.label": "Program utama kami",
    "tr.p1.title": "Workshop dan coaching clinic publikasi Scopus",
    "tr.p1.text": "Untuk dosen dan peneliti yang sedang menyiapkan artikel ke jurnal terindeks Scopus, dengan waktu khusus untuk menggarap naskah sendiri bersama trainer.",
    "tr.p1.points": "<li>Memilih jurnal Scopus yang tepat dan menghindari jurnal predator</li><li>Menyusun naskah: judul, abstrak, metode, dan pembahasan</li><li>Menanggapi reviewer dan merevisi naskah</li><li>Pendampingan satu lawan satu untuk draf peserta</li>",
    "tr.p2.title": "Workshop penulisan ilmiah",
    "tr.p2.text": "Dari ide penelitian hingga artikel yang tersusun rapi, untuk dosen, mahasiswa pascasarjana, dan peneliti pemula.",
    "tr.p3.title": "Olah data riset dan tools AI",
    "tr.p3.text": "Sesi praktik mengolah data dengan SPSS dan memanfaatkan tools AI secara bertanggung jawab untuk kajian pustaka dan penulisan.",
    "tr.p4.title": "Seminar dan konferensi internasional",
    "tr.p4.text": "Kami membantu institusi menyelenggarakan seminar dan konferensi internasional, dengan makalah terpilih diterbitkan di jurnal internasional RCC atau prosiding konferensi ORICS.",
    "tr.p4.link": "Lihat jurnal dan prosiding",
    "tr.mode1.t": "In-house, di institusi Anda",
    "tr.mode1.p": "Di kampus atau daring untuk fakultas, unit riset, atau program studi Anda, dengan jadwal yang disepakati bersama.",
    "tr.mode2.t": "Webinar terbuka",
    "tr.mode2.p": "Sesi daring gratis atau berbiaya ringan yang diumumkan di Instagram @rcc.academic, terbuka untuk semua peneliti.",
    "tr.conf.title": "Seminar dan konferensi dengan luaran publikasi",
    "tr.conf.lede": "Berencana menggelar seminar atau konferensi internasional? RCC dapat menangani sisi publikasinya, sehingga pemakalah pulang dengan artikel yang terbit.",
    "tr.c1.t": "Rencanakan bersama",
    "tr.c1.p": "Tema, cakupan, jadwal, dan wadah publikasi yang sesuai dengan makalah.",
    "tr.c2.t": "Call for papers",
    "tr.c2.p": "Kami membantu menyebarkan call for papers dan mengelola naskah yang masuk.",
    "tr.c3.t": "Telaah sejawat",
    "tr.c3.p": "Makalah ditelaah oleh editor dan reviewer dari jaringan jurnal RCC.",
    "tr.c4.t": "Publikasi",
    "tr.c4.p": "Makalah yang diterima terbit di prosiding ORICS atau jurnal internasional RCC, masing-masing dengan DOI Crossref.",
    "tr.t.title": "Trainer kami",
    "tr.t.lede": "Setiap trainer adalah peneliti aktif dengan profil penulis di Scopus. Metrik dari Scopus, November 2026.",
    "tr.m.docs": "Dokumen",
    "tr.m.cites": "Sitasi",
    "tr.role.sukono": "Direktur RCC",
    "tr.role.aceng": "Wakil Direktur dan CEO RCC",
    "tr.role.panji": "Chief Technology Officer RCC",
    "tr.role.hilda": "Chief Human Resources Officer RCC",
    "tr.role.astrid": "Chief Marketing Officer RCC",
    "tr.role.rizki": "Chief Operating Officer RCC",
    "tr.how.title": "Cara bekerja sama dengan kami",
    "tr.h1.t": "Sampaikan kebutuhan Anda",
    "tr.h1.p": "Kirim pesan WhatsApp berisi nama institusi, peserta, dan luaran yang diharapkan.",
    "tr.h2.t": "Sepakati agenda",
    "tr.h2.p": "Kami mengusulkan format, durasi, trainer, dan penawaran biaya untuk Anda setujui.",
    "tr.h3.t": "Laksanakan program",
    "tr.h3.p": "Trainer membawakan sesi di kampus atau secara daring, sesuai kesepakatan.",
    "tr.b.kicker": "Berencana mengadakan workshop atau konferensi?",
    "tr.b.title": "Diskusikan program Anda bersama kami",
    "tr.b.btn": "Chat via WhatsApp",

    /* ---- team page ---- */
    "team.crumbs": '<a href="/">Beranda</a> / Tentang / Tim manajemen',
    "team.title": "Tim manajemen",
    "team.lede": "Orang-orang yang memimpin Research Collaboration Community dan tiga unit penerbitannya, yaitu RCC, IORA, dan CRP.",
    "team.draft": "<strong>Draf.</strong> Biografi ini masih berupa templat. Teks yang disorot adalah isian sementara yang perlu diganti dengan data terverifikasi, dan foto akan diperbarui bila diperlukan.",
    "team.role.director": "Direktur",
    "team.role.deputy": "Wakil Direktur dan Chief Executive Officer",
    "team.photo.sukono": "Foto Prof. Dr. Sukono",
    "team.photo.aceng": "Foto Aceng Sambas",
    "team.photo.panji": "Foto Dr. Moch Panji Agung Saputra",
    "team.photo.astrid": "Foto Astrid Sulistya",
    "team.photo.rizki": "Foto Rizki Apriva Hidayana",
    "team.photo.hilda": "Foto Dr. Hilda Azkiyah Surya",
    "team.bio.sukono": "Prof. Dr. Sukono adalah Direktur sekaligus pendiri Research Collaboration Community (RCC), yang ia dirikan pada Mei 2019. Ia merupakan Guru Besar bidang [Matematika Keuangan dan Aktuaria] di Departemen Matematika, Fakultas Matematika dan Ilmu Pengetahuan Alam, [Universitas Padjadjaran]. Ia menempuh [pendidikan sarjana di ___, magister di ___, dan doktor di ___]. Sebagai Direktur, ia menetapkan arah strategis RCC dan unit-unit penerbitannya, mengawasi kebijakan editorial kesepuluh jurnal, serta memimpin kemitraan dengan universitas dan organisasi ilmiah. Minat risetnya meliputi [pemodelan risiko, ilmu aktuaria, dan riset operasi], dengan [___] publikasi terindeks Scopus.",
    "team.bio.aceng": "Aceng Sambas adalah Wakil Direktur dan Chief Executive Officer RCC. Ia meraih [gelar sarjana bidang ___ dari ___], gelar magister bidang [___ dari ___], dan gelar Ph.D. bidang [___ dari ___]. Saat ini ia menjabat sebagai [jabatan] di [institusi]. Ia bergabung dengan RCC pada [tahun] dan, sebagai CEO, bertanggung jawab atas kepemimpinan operasional sehari-hari, pengembangan usaha, dan koordinasi tim eksekutif. Risetnya berfokus pada [___], dengan [___] publikasi di jurnal internasional.",
    "team.bio.panji": "Dr. Moch Panji Agung Saputra adalah Chief Technology Officer RCC. Ia menempuh pendidikan sarjana, magister, dan doktor bidang Matematika di Universitas Padjadjaran, dan menyelesaikan program doktornya pada 2026. Ia adalah dosen di Departemen Matematika, Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Padjadjaran. Ia bergabung dengan RCC pada [tahun] dan memimpin infrastruktur teknologi, termasuk platform Open Journal Systems ketiga unit penerbitan dan pengembangan situs web RCC. Ia juga menjabat sebagai [managing editor] IJBESD dan IJLCB. Risetnya mencakup pemodelan dan optimisasi risiko perbankan, Value-at-Risk, obligasi bencana (catastrophe bond), teori himpunan fuzzy, dan model matematika untuk ekonomi sirkular, yang terbit di jurnal terindeks Scopus.",
    "team.bio.rizki": "Rizki Apriva Hidayana adalah Chief Operating Officer RCC. Ia meraih gelar sarjana dan magister Matematika dari [Universitas Padjadjaran]. Ia bergabung dengan RCC pada [tahun] sebagai [peran awal] dan diangkat menjadi COO pada [tahun]. Dalam peran ini, ia mengelola operasional penerbitan dan alur kerja editorial jurnal-jurnal RCC, serta bertanggung jawab atas IJRCS, IJGOR, dan IJBESD. Minat risetnya meliputi [___].",
    "team.bio.adi": "Adi Suryo Pratomo adalah Chief Financial Officer RCC. Ia meraih gelar sarjana Psikologi dari [___] dan Master of Science bidang [___] dari [___]. Ia bergabung dengan RCC pada [tahun] dan mengelola keuangan organisasi, termasuk administrasi biaya pemrosesan artikel (APC), penganggaran, dan pelaporan keuangan. Ia juga bertanggung jawab atas IJHLP dan IJBESD serta turut mengembangkan situs web jurnal. Minat profesionalnya meliputi [___].",
    "team.bio.astrid": "Astrid Sulistya adalah Chief Marketing Officer RCC. Ia meraih gelar sarjana dan magister Matematika dari [Universitas Padjadjaran]. Ia bergabung dengan RCC pada [tahun] dan memimpin pemasaran serta penjangkauan, termasuk call for papers, komunikasi digital, dan kemitraan institusi. Ia juga bertanggung jawab atas IJMSC, IJHMS, dan IJBESD, serta memimpin program bimbingan belajar RCC. Minat risetnya meliputi [___].",
    "team.bio.hilda": "Dr. Hilda Azkiyah Surya adalah Chief Human Resources Officer RCC. Ia menempuh [pendidikan sarjana, magister, dan doktor bidang ___ di ___]. Saat ini ia menjabat sebagai [jabatan] di [institusi]. Ia bergabung dengan RCC pada [tahun] dan bertanggung jawab atas sumber daya manusia, pengembangan tim, serta koordinasi editor dan reviewer. Ia juga mengoordinasikan IJBESD dan IJQRM, menjadi penghubung antara editor dan penulis, serta memimpin program workshop dan pelatihan RCC, termasuk klinik penulisan dan publikasi bersama universitas mitra. Keahliannya meliputi [___].",
    "team.foot": 'Dewan redaksi setiap jurnal tercantum di situs jurnal masing-masing. <a href="/#journals">Lihat daftar jurnal</a>'
  };

  var STR = {
    en: {
      menu: "Menu", close: "Close",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      monthsLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      opensSinta: " (opens SINTA profile)",
      sintaPending: "Accreditation in progress",
      searchIn: "Search articles in {code} for “{q}”",
      publishedBy: "Published by {imprint}, quarterly: {months}",
      subjects: "Subjects",
      accreditation: "Accreditation",
      apc: "Article processing charge",
      submitTo: "Submit to {code}",
      currentIssue: "Current issue",
      noMatch: "No journal matches “{q}”{sinta}.",
      atSinta: " at SINTA {n}",
      noMatchHelp: "Try a broader subject such as statistics, education, law, or health, or clear the filters to browse all ten journals.",
      showing: "Showing {n} of {total} journals",
      forQ: " for “{q}”",
      clear: "Clear filters",
      allSorted: "All {n} journals, sorted by accreditation",
      nextIssue: "Next issue:",
      viewPoster: "View poster",
      posterAlt: "Call for papers poster for {name}",
      journal: "Journal",
      thisMonth: "this month",
      publishesIn: "{code} publishes in {month}",
      calCaption: "Issue months for each journal",
      publishingIn: "Publishing in {month}",
      nextUp: "Next up in {month}",
      pastWebinar: "Past webinar",
      pauseVideo: "Pause background video",
      playVideo: "Play background video"
    },
    id: {
      menu: "Menu", close: "Tutup",
      months: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
      monthsLong: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
      opensSinta: " (membuka profil SINTA)",
      sintaPending: "Akreditasi dalam proses",
      searchIn: "Cari artikel “{q}” di {code}",
      publishedBy: "Diterbitkan oleh {imprint}, terbit: {months}",
      subjects: "Bidang",
      accreditation: "Akreditasi",
      apc: "Biaya pemrosesan artikel (APC)",
      submitTo: "Kirim ke {code}",
      currentIssue: "Edisi terbaru",
      noMatch: "Tidak ada jurnal yang cocok dengan “{q}”{sinta}.",
      atSinta: " di SINTA {n}",
      noMatchHelp: "Coba bidang yang lebih umum seperti statistika, pendidikan, hukum, atau kesehatan, atau hapus filter untuk melihat kesepuluh jurnal.",
      showing: "Menampilkan {n} dari {total} jurnal",
      forQ: " untuk “{q}”",
      clear: "Hapus filter",
      allSorted: "Semua {n} jurnal, diurutkan berdasarkan akreditasi",
      nextIssue: "Edisi berikutnya:",
      viewPoster: "Lihat poster",
      posterAlt: "Poster call for papers {name}",
      journal: "Jurnal",
      thisMonth: "bulan ini",
      publishesIn: "{code} terbit pada {month}",
      calCaption: "Bulan terbit setiap jurnal",
      publishingIn: "Terbit bulan {month}",
      nextUp: "Berikutnya, {month}",
      pastWebinar: "Webinar telah berlalu",
      pauseVideo: "Jeda video latar",
      playVideo: "Putar video latar"
    }
  };

  var KEY = "rcc-lang";
  var original = new WeakMap();   // element -> English innerHTML
  var originalAttr = new WeakMap(); // element -> {attr: English value}
  var listeners = [];

  function pickInitial() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q === "id" || q === "en") return q;
    // English by default; Indonesian only after the visitor picks it (remembered in this browser).
    try { var s = localStorage.getItem(KEY); if (s === "id" || s === "en") return s; } catch (e) {}
    return "en";
  }

  var lang = pickInitial();

  function t(key, vars) {
    var s = (STR[lang] && STR[lang][key] !== undefined) ? STR[lang][key] : STR.en[key];
    if (typeof s === "string" && vars) {
      s = s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] !== undefined ? vars[k] : ""; });
    }
    return s;
  }

  function markPlaceholders() {
    document.querySelectorAll(".bio, .ph-block, .testi-who").forEach(function (p) {
      p.innerHTML = p.innerHTML.replace(/\[([^\]]+)\]/g, '<span class="ph">$1</span>');
    });
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!original.has(el)) original.set(el, el.innerHTML);
      var key = el.getAttribute("data-i18n");
      el.innerHTML = (lang === "id" && PAGE[key] !== undefined) ? PAGE[key] : original.get(el);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      if (!originalAttr.has(el)) originalAttr.set(el, {});
      var store = originalAttr.get(el);
      el.getAttribute("data-i18n-attr").split("|").forEach(function (pair) {
        var p = pair.split(":"), attr = p[0], key = p[1];
        if (!(attr in store)) store[attr] = el.getAttribute(attr);
        el.setAttribute(attr, (lang === "id" && PAGE[key] !== undefined) ? PAGE[key] : store[attr]);
      });
    });
    markPlaceholders();
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    listeners.forEach(function (fn) { fn(lang); });
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    var url = new URL(window.location.href);
    if (url.searchParams.has("lang")) { url.searchParams.set("lang", lang); history.replaceState(null, "", url); }
    apply();
  }

  window.RCC_I18N = {
    t: t,
    lang: function () { return lang; },
    setLang: setLang,
    onChange: function (fn) { listeners.push(fn); }
  };

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-lang]");
    if (b) setLang(b.getAttribute("data-lang"));
  });

  apply();
})();
