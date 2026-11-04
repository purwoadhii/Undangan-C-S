/* ===== Tema Minang: hitam, merah, emas, rumah gadang bergonjong, ukiran kaluak paku ===== */
(function () {
  var E = "#e0ad45";
  var rumahGadang = function (cls) {
    var atap = "";
    [[60, 110], [160, 130], [250, 150], [340, 130], [440, 110]].forEach(function (g, i) {
      var x = g[0], w = g[1];
      atap += '<path d="M' + (x - w / 2) + ' 40 Q' + (x - w / 4) + ' ' + (110 + i % 2 * 6) + ' ' + x + ' ' + (118 + (i === 2 ? 8 : 0)) + ' Q' + (x + w / 4) + ' ' + (110 + i % 2 * 6) + ' ' + (x + w / 2) + ' 40 Q' + (x + w / 4) + ' ' + (150) + ' ' + x + ' ' + (150) + ' Q' + (x - w / 4) + ' 150 ' + (x - w / 2) + ' 40Z"/>';
    });
    return '<svg class="rumah-gadang ' + (cls || "") + '" viewBox="0 0 500 330" aria-hidden="true">' +
      '<g fill="#1a1414" stroke="' + E + '" stroke-width="2">' + atap + '</g>' +
      '<g fill="' + E + '"><circle cx="5" cy="40" r="4"/><circle cx="95" cy="40" r="3"/><circle cx="125" cy="40" r="3"/><circle cx="175" cy="40" r="4"/><circle cx="325" cy="40" r="4"/><circle cx="375" cy="40" r="3"/><circle cx="405" cy="40" r="3"/><circle cx="495" cy="40" r="4"/></g>' +
      '<path d="M30 150 H470 L456 250 H44Z" fill="#a3161f" stroke="' + E + '" stroke-width="2"/>' +
      '<g fill="none" stroke="' + E + '" stroke-width="1.4"><path d="M44 170 H456 M48 230 H452"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { var x = 70 + i * 40; return '<rect x="' + (x - 12) + '" y="180" width="24" height="40" rx="2"/><path d="M' + (x - 12) + ' 200 Q' + x + ' 186 ' + (x + 12) + ' 200"/>'; }).join("") + '</g>' +
      '<path d="M44 250 H456 V262 H44Z" fill="#1a1414" stroke="' + E + '" stroke-width="1.4"/>' +
      '<g stroke="' + E + '" stroke-width="5">' + [0, 1, 2, 3, 4, 5, 6].map(function (i) { return '<path d="M' + (70 + i * 60) + ' 262 V320"/>'; }).join("") + '</g>' +
      '<path d="M220 262 L230 320 H270 L280 262" fill="#1a1414" stroke="' + E + '" stroke-width="1.4"/></svg>';
  };
  var paku = '<svg class="paku" viewBox="0 0 200 26" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">' +
    [0, 1, 2, 3, 4].map(function (i) { var x = 20 + i * 40; return '<path d="M' + (x - 20) + ' 20 C' + (x - 10) + ' 20 ' + x + ' 14 ' + x + ' 8 C' + x + ' 2 ' + (x + 9) + ' 2 ' + (x + 9) + ' 8 C' + (x + 9) + ' 12 ' + (x + 3) + ' 12 ' + (x + 3) + ' 8"/>'; }).join("") +
    '<path d="M0 22 H200"/></g></svg>';

  window.TEMA = {
    id: "minang",
    hitung: "gonjong",
    galeri: "minang",
    urutan: ["ayat", "mempelai", "acara", "galeri", "cerita", "video", "hadiah", "ucapan"],
    partikel: { jenis: "kelopak", warna: ["#a3161f", "#e0ad45", "#f6d58a", "#7a0f16"], min: 7, max: 12, jumlah: 16 },
    label: {
      mempelai: ["Marapulai &amp; Anak Daro", "Kedua Mempelai"], acara: ["Alek", "Waktu &amp; Tempat"], cerita: ["Kisah Kami", "Perjalanan cinta"],
      video: ["Video", "Kenangan"], galeri: ["Galeri", "Kenangan"], hadiah: ["Tanda Kasih", "Hadiah"], ucapan: ["Ucapan", "Doa &amp; Kehadiran"]
    },
    nav: ["Mempelai", "Alek", "Galeri", "Hadiah", "Ucapan"],
    kata: {
      buka: "Buka Undangan", kepada: "Kapado Bapak/Ibu/Dunsanak", terima: "Tarimo Kasih",
      salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
      pembuka: "Jo maharok-an ridho Allah SWT, kami mamintak kahadiran Bapak/Ibu/Dunsanak di alek baralek anak kami:",
      penutup: "Ateh kahadiran jo doa restu Bapak/Ibu/Dunsanak sadonyo, kami ucapkan tarimo kasih nan sabanyak-banyaknyo."
    },
    jedaBuka: 1000, lamaBuka: 1900,
    sampul: function (c) {
      return '<div class="songket"></div>' + rumahGadang("bawah") +
        '<div class="cover-text"><div class="eyebrow">Baralek Gadang</div>' + paku +
        '<div class="mono" aria-hidden="true">' + c.monoHtml + '</div><div class="names">' + c.duaNama + '</div><div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return '<div class="songket"></div><div class="side-text"><div class="eyebrow">Baralek Gadang</div>' + paku + '<div class="names">' + c.duaNama + '</div><p>' + c.esc(c.tanggalPanjang) + '</p></div>' + rumahGadang("bawah");
    },
    pembuka: function (c) {
      return '<div class="hero"><div class="pelaminan"><div class="tirai-l"></div><div class="tirai-r"></div></div>' +
        '<div class="frame-gonjong"><div class="foto-gonjong">' + c.siluet + c.fotoPasangan + '</div></div>' +
        '<div class="title-block"><div class="eyebrow">Baralek Gadang</div><div class="names">' + c.duaNama + '</div>' + paku + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div></div></div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '"><div class="pelana">' + isi + '</div></div>'; },
    hiasBagian: function () { return paku; },
    hiasAcara: function () { return '<svg class="atap-acara" viewBox="0 0 300 64" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 Q80 40 150 42 Q220 40 300 0 V22 Q220 64 150 64 Q80 64 0 22Z" fill="#1a1414" stroke="' + E + '" stroke-width="2"/></svg>'; }
  };
})();
