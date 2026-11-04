/* ===== Tema Jawa Klasik: coklat sogan & emas, gunungan, batik parang ===== */
(function () {
  var cabang = function (y, w, arah) {
    var x = 100 + arah * w;
    return '<path d="M100 ' + y + ' C' + (100 + arah * w * 0.4) + ' ' + (y - 14) + ' ' + x + ' ' + (y - 16) + ' ' + x + ' ' + (y - 2) + ' C' + x + ' ' + (y + 9) + ' ' + (x - arah * 12) + ' ' + (y + 8) + ' ' + (x - arah * 10) + ' ' + (y - 1) + '" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>' +
      '<circle cx="' + (x - arah * 4) + '" cy="' + (y - 20) + '" r="2.4" fill="currentColor"/>';
  };
  var gunungan = function (cls) {
    var s = "";
    for (var i = 0; i < 6; i++) { var y = 72 + i * 25, w = 16 + i * 10; s += cabang(y, w, 1) + cabang(y, w, -1); }
    return '<svg class="gunungan ' + (cls || "") + '" viewBox="0 0 200 300" aria-hidden="true">' +
      '<defs><linearGradient id="emasG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3d58c"/><stop offset=".5" stop-color="#c39447"/><stop offset="1" stop-color="#8a5e22"/></linearGradient></defs>' +
      '<path d="M100 6 C118 40 150 80 172 130 C192 176 190 232 176 272 H24 C10 232 8 176 28 130 C50 80 82 40 100 6Z" fill="#4a2a17" stroke="url(#emasG)" stroke-width="5"/>' +
      '<path d="M100 22 C114 50 140 86 158 130 C174 172 172 222 162 258 H38 C28 222 26 172 42 130 C60 86 86 50 100 22Z" fill="none" stroke="#c39447" stroke-width="1.2" stroke-dasharray="2 4"/>' +
      '<g color="#e2bd6a">' + s + '</g><path d="M100 250 V60" stroke="#e2bd6a" stroke-width="3"/>' +
      '<path d="M60 272 V222 H140 V272" fill="#2e180c" stroke="#e2bd6a" stroke-width="2"/><path d="M52 224 L100 192 L148 224Z" fill="#7a4a24" stroke="#e2bd6a" stroke-width="2"/>' +
      '<path d="M88 272 V240 H112 V272" fill="none" stroke="#e2bd6a" stroke-width="2"/><circle cx="100" cy="214" r="5" fill="#e2bd6a"/>' +
      '<path d="M26 286 H174" stroke="url(#emasG)" stroke-width="5" stroke-linecap="round"/><path d="M90 272 L80 296 H120 L110 272" fill="#8a5e22"/></svg>';
  };
  var garisEmas = '<svg class="garis-emas" viewBox="0 0 240 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4"><path d="M0 12 H86 M154 12 H240"/><path d="M120 2 L132 12 L120 22 L108 12Z"/><path d="M96 12 C100 4 108 4 108 12 M144 12 C140 4 132 4 132 12"/><circle cx="120" cy="12" r="2.5" fill="currentColor"/></g></svg>';
  var sudut = '<svg class="sudut" viewBox="0 0 80 80" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 76 V4 H76"/><path d="M12 68 V12 H68"/><path d="M12 30 C26 30 30 26 30 12 M20 40 C36 40 40 36 40 20 C40 12 32 12 32 18"/></g><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>';

  window.TEMA = {
    id: "jawa-klasik",
    hitung: "jawa",
    galeri: "mozaik",
    urutan: ["ayat", "mempelai", "acara", "galeri", "video", "cerita", "hadiah", "ucapan"],
    partikel: { jenis: "kelopak", warna: ["#c39447", "#e2bd6a", "#8a2f23", "#f3d58c"], min: 7, max: 12, jumlah: 16 },
    label: {
      mempelai: ["Temanten", "Kedua Mempelai"], acara: ["Pahargyan", "Rangkaian Acara"], cerita: ["Lelampahan", "Perjalanan Kami"],
      video: ["Video", "Kenangan Kami"], galeri: ["Galeri", "Kenangan"], hadiah: ["Tanda Kasih", "Hadiah"], ucapan: ["Pangestu", "Ucapan &amp; Doa"]
    },
    nav: ["Temanten", "Acara", "Galeri", "Hadiah", "Ucapan"],
    kata: {
      buka: "Bukak Undangan", kepada: "Dhumateng Bapak/Ibu/Sedherek", terima: "Matur Nuwun",
      salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
      pembuka: "Kanthi nyuwun sih rahmat saha ridho Gusti Allah SWT, kula sekeluarga badhe ngawontenaken pahargyan dhaup putra-putri kula:",
      penutup: "Satemah dados kabagyan saha kamulyan kula sekeluarga, menawi Bapak/Ibu/Sedherek kersa rawuh saha paring donga pangestu dhumateng kekalih temanten."
    },
    jedaBuka: 1100, lamaBuka: 2200,
    sampul: function (c) {
      return '<div class="panel l"></div><div class="panel r"></div>' +
        '<div class="cover-text"><div class="eyebrow">Pahargyan Dhaup</div>' + gunungan("goyang") +
        '<div class="names">' + c.duaNama + '</div>' + garisEmas + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return '<div class="side-in">' + gunungan("besar") + '<div class="side-text"><div class="eyebrow">Pahargyan Dhaup</div><div class="names">' + c.duaNama + '</div>' + garisEmas + '<p>' + c.esc(c.tanggalPanjang) + '</p></div></div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + sudut.replace('class="sudut"', 'class="sudut tl"') + sudut.replace('class="sudut"', 'class="sudut tr"') +
        '<div class="eyebrow grow">Pahargyan Dhaup</div>' +
        '<div class="g-frame grow d1"><div class="g-foto">' + c.siluet + c.fotoPasangan + '</div></div>' +
        '<div class="title-block grow d2"><div class="names">' + c.duaNama + '</div>' + garisEmas + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div></div></div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '"><div class="oval">' + isi + '</div></div>'; },
    hiasBagian: function () { return garisEmas; },
    hiasAcara: function () { return sudut.replace('class="sudut"', 'class="sudut a1"') + sudut.replace('class="sudut"', 'class="sudut a2"'); }
  };
})();
