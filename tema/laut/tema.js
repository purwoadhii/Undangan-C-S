/* ===== Tema Bawah Laut: samudra biru, ikan, ubur-ubur, rumput laut, jendela kapal ===== */
(function () {
  var ikan = function (cls, warna) {
    return '<svg class="ikan ' + cls + '" viewBox="0 0 80 40" aria-hidden="true"><path fill="' + warna + '" d="M10 20 Q30 0 56 14 L76 4 L70 20 L76 36 L56 26 Q30 40 10 20Z"/>' +
      '<path d="M34 10 Q38 20 34 30" stroke="rgba(255,255,255,.5)" stroke-width="2" fill="none"/><circle cx="20" cy="18" r="2.6" fill="#052335"/></svg>';
  };
  var ubur = function (cls) {
    return '<svg class="ubur ' + cls + '" viewBox="0 0 60 110" aria-hidden="true"><path d="M4 34 Q30 -16 56 34 Q48 30 42 36 Q36 30 30 36 Q24 30 18 36 Q12 30 4 34Z" fill="rgba(255,182,220,.55)"/>' +
      '<g fill="none" stroke="rgba(255,190,225,.55)" stroke-width="2" stroke-linecap="round"><path class="tent" d="M14 36 Q8 60 16 80 T14 106"/><path class="tent" d="M26 38 Q32 62 24 84 T28 104"/><path class="tent" d="M36 38 Q30 62 38 84 T34 104"/><path class="tent" d="M48 36 Q54 60 46 80 T50 102"/></g></svg>';
  };
  var rumput = function (cls) {
    return '<svg class="rumput ' + cls + '" viewBox="0 0 200 220" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' +
      '<path class="r1" fill="#1f7a63" d="M40 220 C20 170 60 140 36 90 C24 64 44 40 40 10 C58 44 50 70 60 96 C76 140 44 170 56 220Z"/>' +
      '<path class="r2" fill="#2a9a78" d="M90 220 C80 180 110 150 96 110 C88 84 104 64 110 40 C120 70 112 92 120 116 C130 150 104 180 108 220Z"/>' +
      '<path class="r3" fill="#e2725b" d="M140 220 V170 M140 190 L124 168 M140 182 L158 160 M140 170 L132 150 M158 160 L166 146 M124 168 L116 156" stroke="#e2725b" stroke-width="7" stroke-linecap="round"/>' +
      '<ellipse cx="120" cy="218" rx="80" ry="10" fill="#0d4a5c"/></svg>';
  };
  var sinar = '<div class="sinar"><i></i><i></i><i></i><i></i><i></i></div>';
  var laut = function () { return sinar + ikan("f1", "#ffb385") + ikan("f2", "#ffd36e") + ikan("f3", "#7fd8e8") + ubur("u1") + ubur("u2") + rumput("kiri") + rumput("kanan"); };
  var jendela = function (isi) {
    var baut = ""; for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4; baut += '<span class="baut" style="left:' + (50 + 46.5 * Math.cos(a)).toFixed(1) + '%;top:' + (50 + 46.5 * Math.sin(a)).toFixed(1) + '%"></span>'; }
    return '<div class="jendela">' + baut + '<div class="kaca">' + isi + '</div></div>';
  };
  var gelembungHias = '<svg class="hias-gelembung" viewBox="0 0 60 50" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="30" cy="34" r="12"/><circle cx="14" cy="18" r="6"/><circle cx="44" cy="12" r="8"/></g><circle cx="26" cy="29" r="2.5" fill="currentColor"/></svg>';

  window.TEMA = {
    id: "laut",
    hitung: "gelembung",
    galeri: "gelembung",
    urutan: ["ayat", "mempelai", "acara", "galeri", "video", "cerita", "hadiah", "ucapan"],
    partikel: { jenis: "gelembung", warna: ["#bff3f6", "#ffffff", "#8fe3ea"], min: 6, max: 18, jumlah: 26 },
    label: {
      mempelai: ["Mempelai", "Sedalam samudra cinta kami"], acara: ["Hari Bahagia", "Waktu &amp; Tempat"], cerita: ["Kisah Kami", "Arus yang mempertemukan"],
      video: ["Video", "Kenangan kami"], galeri: ["Galeri", "Mutiara kenangan"], hadiah: ["Tanda Kasih", "Hadiah"], ucapan: ["Ucapan", "Kehadiran &amp; doa"]
    },
    nav: ["Mempelai", "Acara", "Galeri", "Hadiah", "Ucapan"],
    kata: { buka: "Selami Undangan", terima: "Terima kasih", pembuka: "Seperti samudra yang tak pernah kering, semoga cinta kami pun begitu. Dengan memohon rahmat Tuhan Yang Maha Esa, kami mengundang Anda di hari pernikahan kami:" },
    jedaBuka: 900, lamaBuka: 1800,
    sampul: function (c) {
      return laut() +
        '<div class="cover-text"><div class="eyebrow">Undangan Pernikahan</div>' +
        '<div class="mutiara"><div class="mono" aria-hidden="true">' + c.monoHtml + '</div></div>' +
        '<div class="names">' + c.duaNama + '</div><div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return laut() + '<div class="side-text"><div class="eyebrow">Undangan Pernikahan</div><div class="mutiara"><div class="mono">' + c.monoHtml + '</div></div><div class="names">' + c.duaNama + '</div><p>' + c.esc(c.tanggalPanjang) + '</p></div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + sinar + ikan("f1", "#ffb385") + ikan("f3", "#7fd8e8") + ubur("u1") +
        '<div class="hero-jendela">' + jendela(c.siluet + c.fotoPasangan) + '</div>' +
        '<div class="title-block"><div class="eyebrow">Kami akan menikah</div><div class="names">' + c.duaNama + '</div><div class="date">' + c.esc(c.tanggalPendek) + '</div></div>' +
        rumput("kiri") + rumput("kanan") + '</div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '">' + jendela(isi) + '</div>'; },
    hiasBagian: function () { return gelembungHias; },
    hiasAcara: function () { return '<svg class="ombak-atas" viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden="true"><path d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 T250 10 T300 10 T350 10 T400 10 V0 H0Z" fill="rgba(127,216,232,.35)"/></svg>'; }
  };
})();
