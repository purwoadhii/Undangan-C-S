/* ===== Tema Pantai: senja di tepi laut, ombak, pohon kelapa, burung camar ===== */
(function () {
  var ombak = function (cls, fill) {
    return '<svg class="ombak ' + cls + '" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"><path fill="' + fill + '" d="M0 50 Q75 15 150 50 T300 50 T450 50 T600 50 T750 50 T900 50 T1050 50 T1200 50 V120 H0Z"/></svg>';
  };
  var laut = function () {
    return '<div class="laut">' + ombak("o1", "#7cc6cf") + ombak("o2", "#3d9ab0") + ombak("o3", "#2a7d93") + ombak("buih", "#f4fbfb") + '<div class="pasir"></div></div>';
  };
  var palem = function (cls) {
    return '<svg class="palem ' + cls + '" viewBox="0 0 220 420" aria-hidden="true"><path d="M118 420 C108 330 96 230 126 128" stroke="#5c4433" stroke-width="13" fill="none" stroke-linecap="round"/>' +
      '<path d="M118 420 C108 330 96 230 126 128" stroke="#7a5b44" stroke-width="13" stroke-dasharray="3 14" fill="none"/>' +
      '<g class="pelepah" fill="#2e6b52"><path d="M126 128 Q70 70 6 104 Q66 88 126 128Z"/><path d="M126 128 Q90 40 30 30 Q92 58 126 128Z"/>' +
      '<path d="M126 128 Q140 40 196 22 Q150 60 126 128Z"/><path d="M126 128 Q190 80 216 128 Q176 100 126 128Z"/><path d="M126 128 Q170 140 190 196 Q160 150 126 128Z"/>' +
      '<path d="M126 128 Q80 140 56 196 Q90 148 126 128Z"/></g><g fill="#6b4a2e"><circle cx="122" cy="134" r="7"/><circle cx="132" cy="138" r="6"/></g></svg>';
  };
  var camar = '<svg class="camar" viewBox="0 0 200 60" aria-hidden="true"><g fill="none" stroke="#34495a" stroke-width="2.4" stroke-linecap="round">' +
    '<path class="c1" d="M10 30 Q20 20 30 30 Q40 20 50 30"/><path class="c2" d="M90 14 Q98 6 106 14 Q114 6 122 14"/><path class="c3" d="M150 40 Q157 33 164 40 Q171 33 178 40"/></g></svg>';
  var bintangLaut = '<svg class="hias-laut" viewBox="0 0 60 60" aria-hidden="true"><path fill="currentColor" d="M30 3 L37 22 L57 22 L41 34 L47 54 L30 42 L13 54 L19 34 L3 22 L23 22Z" opacity=".85"/><circle cx="30" cy="30" r="3" fill="#fff" opacity=".6"/></svg>';
  var kerang = '<svg class="hias-laut" viewBox="0 0 60 60" aria-hidden="true"><path fill="currentColor" d="M30 52 L6 24 Q30 -2 54 24Z" opacity=".85"/><g stroke="#fff" stroke-width="1.4" opacity=".6"><path d="M30 52 L30 10 M30 52 L18 14 M30 52 L42 14 M30 52 L10 22 M30 52 L50 22"/></g></svg>';
  var langit = function () { return '<div class="langit"></div><div class="matahari"></div>' + camar; };

  window.TEMA = {
    id: "pantai",
    hitung: "pantai",
    galeri: "polaroid",
    urutan: ["ayat", "mempelai", "video", "acara", "galeri", "cerita", "hadiah", "ucapan"],
    partikel: { jenis: "kelopak", warna: ["#ffffff", "#ffd9c7", "#f6a98f", "#fff1b8"], min: 9, max: 15, jumlah: 16 },
    label: {
      mempelai: ["Bride &amp; Groom", "Dua hati, satu pantai"], acara: ["Save the Date", "Waktu &amp; Tempat"], cerita: ["Our Story", "Cerita Kami"],
      video: ["Our Video", "Sepenggal cerita"], galeri: ["Beach Days", "Galeri"], hadiah: ["Wedding Gift", "Tanda Kasih"], ucapan: ["Send Wishes", "Ucapan &amp; Kehadiran"]
    },
    nav: ["Couple", "Date", "Photos", "Gift", "Wishes"],
    kata: { buka: "Buka Undangan", terima: "See you by the sea", pembuka: "Seperti ombak yang selalu kembali ke pantai, kami memutuskan untuk saling pulang. Dengan memohon rahmat Tuhan, kami mengundang Anda di hari bahagia kami:" },
    jedaBuka: 1200, lamaBuka: 2100,
    sampul: function (c) {
      return langit() + palem("kiri") + palem("kanan") + laut() +
        '<div class="cover-text"><div class="eyebrow">The Wedding of</div><div class="names">' + c.duaNama + '</div>' +
        '<div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 15c2 0 2-1.5 4-1.5S8 15 10 15s2-1.5 4-1.5S16 15 18 15s2-1.5 4-1.5V17c-2 0-2 1.5-4 1.5S16 17 14 17s-2 1.5-4 1.5S8 17 6 17s-2 1.5-4 1.5zM12 3l4 7H8z"/></svg>' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return langit() + palem("kiri") + palem("kanan") + laut() +
        '<div class="side-text"><div class="eyebrow">The Wedding of</div><div class="names">' + c.duaNama + '</div><p>' + c.esc(c.tanggalPanjang) + '</p></div>';
    },
    pembuka: function (c) {
      return '<div class="hero"><div class="langit"></div><div class="matahari"></div>' + camar +
        '<div class="blob grow"><div class="foto-in">' + c.siluet + c.fotoPasangan + '</div></div>' +
        palem("kiri sway") + palem("kanan sway alt") +
        '<div class="title-block grow d2"><div class="eyebrow">We are getting married</div><div class="names">' + c.duaNama + '</div><div class="date">' + c.esc(c.tanggalPendek) + '</div></div>' +
        ombak("h1", "#bfe3e6") + ombak("h2", "var(--bg)") + '</div>';
    },
    bingkaiOrang: function (isi, cls) {
      return '<div class="pic ' + cls + '"><span class="selotip"></span><div class="ph">' + isi + '</div></div>';
    },
    hiasBagian: function (key) { return key === "ayat" ? ombak("garis", "var(--accent-soft)") : (key === "acara" || key === "galeri" || key === "ucapan" ? bintangLaut : kerang); },
    hiasAcara: function (i) {
      return '<div class="perangko"><svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="22" r="11" fill="#f6a98f"/><path d="M0 40 Q15 32 30 40 T60 40 V60 H0Z" fill="#3d9ab0"/></svg></div><div class="cap">' + (i ? "Reception" : "Ceremony") + '</div>';
    }
  };
})();
