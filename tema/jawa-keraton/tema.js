/* ===== Tema Jawa Keraton: hijau tua & emas, gapura keraton, pendapa joglo, batik kawung ===== */
(function () {
  var E = "#d6b25e";
  var gapura = '<svg class="gapura" viewBox="0 0 400 600" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' +
    '<defs><linearGradient id="emasK" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4dc98"/><stop offset="1" stop-color="#a77d2e"/></linearGradient></defs>' +
    '<g fill="#0c2618" stroke="url(#emasK)" stroke-width="2.4">' +
    '<path d="M0 600 V250 H70 V600Z M330 600 V250 H400 V600Z"/>' +
    '<path d="M-10 250 L35 200 L80 250Z M320 250 L365 200 L410 250Z"/>' +
    '<path d="M70 600 V260 Q200 150 330 260 V600 H300 V300 Q200 210 100 300 V600Z"/>' +
    '<path d="M40 150 H360 L330 110 H70Z"/><path d="M90 110 H310 L270 60 H130Z"/><path d="M150 60 H250 L215 18 H185Z"/>' +
    '<path d="M60 150 H340 V176 H60Z"/></g>' +
    '<g fill="' + E + '"><circle cx="200" cy="14" r="6"/><circle cx="35" cy="196" r="4"/><circle cx="365" cy="196" r="4"/></g>' +
    '<g fill="none" stroke="' + E + '" stroke-width="1.2" opacity=".8"><path d="M14 300 H56 M14 340 H56 M14 380 H56 M344 300 H386 M344 340 H386 M344 380 H386"/>' +
    '<path d="M110 163 H290" stroke-dasharray="4 6"/><path d="M200 120 V100 M180 110 L200 96 L220 110"/></g></svg>';
  var atap = '<svg class="atap" viewBox="0 0 300 110" aria-hidden="true"><g fill="#0c2618" stroke="' + E + '" stroke-width="2"><path d="M4 106 L60 62 H240 L296 106Z"/><path d="M60 62 L100 26 H200 L240 62Z"/><path d="M110 26 L135 4 H165 L190 26Z"/></g>' +
    '<g stroke="' + E + '" stroke-width="1" opacity=".7"><path d="M30 96 H270 M80 50 H220"/></g><circle cx="150" cy="4" r="4" fill="' + E + '"/></svg>';
  var ting = function (cls) {
    return '<svg class="ting ' + cls + '" viewBox="0 0 40 110" aria-hidden="true"><path d="M20 0 V40" stroke="' + E + '" stroke-width="1.4"/>' +
      '<path d="M8 46 L20 38 L32 46 V78 L20 86 L8 78Z" fill="rgba(255,214,120,.25)" stroke="' + E + '" stroke-width="1.6"/><ellipse cx="20" cy="62" rx="4" ry="8" fill="#ffe7a6" class="nyala"/>' +
      '<path d="M20 86 V100 M14 100 H26" stroke="' + E + '" stroke-width="1.4"/></svg>';
  };
  var hias = '<svg class="hias-keraton" viewBox="0 0 160 30" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.3"><path d="M0 15 H56 M104 15 H160"/><ellipse cx="80" cy="7" rx="4" ry="7"/><ellipse cx="80" cy="23" rx="4" ry="7"/><ellipse cx="72" cy="15" rx="7" ry="4"/><ellipse cx="88" cy="15" rx="7" ry="4"/></g><circle cx="80" cy="15" r="1.8" fill="currentColor"/></svg>';

  window.TEMA = {
    id: "jawa-keraton",
    hitung: "keraton",
    galeri: "keraton",
    urutan: ["ayat", "mempelai", "acara", "video", "galeri", "cerita", "hadiah", "ucapan"],
    partikel: { jenis: "bintang", warna: ["#f4dc98", "#d6b25e", "#fff2c8"], min: 4, max: 8, jumlah: 28 },
    label: {
      mempelai: ["Sang Temanten", "Kedua Mempelai"], acara: ["Adicara", "Rangkaian Acara"], cerita: ["Lampahing Tresna", "Perjalanan Kami"],
      video: ["Video", "Kenangan Kami"], galeri: ["Galeri", "Kenangan"], hadiah: ["Tanda Kasih", "Hadiah"], ucapan: ["Pangandika", "Ucapan &amp; Doa"]
    },
    nav: ["Temanten", "Adicara", "Galeri", "Hadiah", "Ucapan"],
    kata: {
      buka: "Sugeng Rawuh", kepada: "Kagem Bapak/Ibu/Sedherek", terima: "Matur Nuwun",
      salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
      pembuka: "Kanthi sih rahmat saha ridho Gusti Ingkang Maha Kuwaos, kula ngaturaken uninga bilih badhe ngawontenaken pawiwahan putra-putri kula:",
      penutup: "Mugi rawuh saha donga pangestu Bapak/Ibu/Sedherek saged dados kabagyan ingkang tanpa upami tumrap kekalih temanten."
    },
    jedaBuka: 1100, lamaBuka: 2100,
    sampul: function (c) {
      return gapura + ting("t1") + ting("t2") +
        '<div class="cover-text"><div class="eyebrow">Pawiwahan</div><div class="mono" aria-hidden="true">' + c.monoHtml + '</div>' +
        '<div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return gapura + ting("t1") + ting("t2") + '<div class="side-text"><div class="eyebrow">Pawiwahan</div><div class="mono">' + c.monoHtml + '</div><div class="names">' + c.duaNama + '</div>' + hias + '<p>' + c.esc(c.tanggalPanjang) + '</p></div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + ting("t1") + ting("t2") +
        '<div class="pendapa">' + atap + '<div class="saka l"></div><div class="saka r"></div><div class="bingkai-foto">' + c.siluet + c.fotoPasangan + '</div></div>' +
        '<div class="title-block"><div class="eyebrow">Pawiwahan</div><div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div></div></div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '"><div class="joglo">' + isi + '</div></div>'; },
    hiasBagian: function () { return hias; },
    hiasAcara: function () { return '<div class="atap-kecil">' + atap + '</div>'; }
  };
})();
