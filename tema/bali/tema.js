/* ===== Tema Bali: candi bentar, penjor, bunga kamboja, kain poleng ===== */
(function () {
  var kamboja = function (cls) {
    var p = ""; for (var i = 0; i < 5; i++) p += '<path transform="rotate(' + (i * 72) + ' 50 50)" d="M50 50 C40 38 38 18 50 8 C64 14 66 34 50 50Z" fill="#fffdf6" stroke="#eadfc4" stroke-width="1"/>';
    return '<svg class="kamboja ' + (cls || "") + '" viewBox="0 0 100 100" aria-hidden="true">' + p + '<circle cx="50" cy="50" r="12" fill="#f6c94a"/><circle cx="50" cy="50" r="6" fill="#f2a83b"/></svg>';
  };
  var candiSetengah = function (sisi) {
    return '<div class="candi ' + sisi + '"><svg viewBox="0 0 200 700" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">' +
      '<defs><linearGradient id="batu' + sisi + '" x1="0" x2="1"><stop offset="0" stop-color="#6f675d"/><stop offset="1" stop-color="#9a9184"/></linearGradient></defs>' +
      '<path fill="url(#batu' + sisi + ')" d="M200 700 V40 H186 V70 H170 V110 H150 V150 H130 V200 H118 V250 H100 V300 H82 V360 H64 V420 H40 V500 H20 V580 H0 V700Z"/>' +
      '<g fill="none" stroke="#4e4840" stroke-width="2" opacity=".7"><path d="M186 70 H200 M170 110 H200 M150 150 H200 M130 200 H200 M118 250 H200 M100 300 H200 M82 360 H200 M64 420 H200 M40 500 H200 M20 580 H200"/>' +
      '<path d="M150 470 Q170 450 190 470 Q170 490 150 470Z M120 540 Q150 515 180 540 Q150 565 120 540Z"/></g>' +
      '<path d="M120 620 H200 V700 H120Z" fill="url(#polengPat)"/>' +
      '<defs><pattern id="polengPat" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#f4f1e8"/><rect width="8" height="8" fill="#2b2622"/><rect x="8" y="8" width="8" height="8" fill="#2b2622"/></pattern></defs></svg>' +
      kamboja("kc1") + kamboja("kc2") + '</div>';
  };
  var penjor = function (cls) {
    return '<svg class="penjor ' + cls + '" viewBox="0 0 160 600" aria-hidden="true"><path d="M30 600 C30 360 40 160 140 40" fill="none" stroke="#c9a764" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M140 40 q16 30 4 64 q-10 -24 -4 -64Z" fill="#e9d38f"/><path d="M140 40 q-2 40 -18 70" stroke="#c9a764" stroke-width="2" fill="none"/>' +
      '<g fill="#e9d38f" stroke="#b08a43" stroke-width="1">' + [0, 1, 2, 3, 4, 5].map(function (i) { var y = 520 - i * 70, x = 32 + i * i * 2.2; return '<path d="M' + x + ' ' + y + ' l-16 26 h32Z"/>'; }).join("") + '</g>' +
      '<g fill="#4f7a4a">' + [0, 1, 2, 3].map(function (i) { return '<path d="M' + (36 + i * 6) + ' ' + (470 - i * 90) + ' q26 -6 40 10 q-24 2 -40 -10Z"/>'; }).join("") + '</g></svg>';
  };
  var hias = '<svg class="hias-bali" viewBox="0 0 160 30" aria-hidden="true"><path d="M0 15 H60 M100 15 H160" stroke="currentColor" stroke-width="1.2"/><path d="M64 15 h8 v-6 h16 v6 h8 M64 15 h8 v6 h16 v-6 h8" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="80" cy="15" r="3" fill="#f2a83b"/></svg>';

  window.TEMA = {
    id: "bali",
    hitung: "kamboja",
    galeri: "candi",
    urutan: ["ayat", "mempelai", "acara", "video", "cerita", "galeri", "hadiah", "ucapan"],
    partikel: { jenis: "kelopak", warna: ["#fffdf6", "#fff3c6", "#f6c94a", "#fbe2ea"], min: 10, max: 16, jumlah: 15 },
    label: {
      mempelai: ["Mempelai", "Pawiwahan"], acara: ["Rangkaian Upacara", "Waktu &amp; Tempat"], cerita: ["Kisah Kami", "Perjalanan cinta"],
      video: ["Video", "Kenangan kami"], galeri: ["Galeri", "Kenangan"], hadiah: ["Punia", "Tanda Kasih"], ucapan: ["Ucapan", "Doa &amp; Kehadiran"]
    },
    nav: ["Mempelai", "Upacara", "Galeri", "Punia", "Ucapan"],
    kata: {
      buka: "Buka Undangan", terima: "Suksma", salam: "Om Swastyastu",
      pembuka: "Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara Manusa Yadnya Pawiwahan putra-putri kami:",
      penutup: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Om Shanti Shanti Shanti Om."
    },
    jedaBuka: 1100, lamaBuka: 2000,
    sampul: function (c) {
      return candiSetengah("kiri") + candiSetengah("kanan") + penjor("p1") + penjor("p2") +
        '<div class="cover-text"><div class="eyebrow">Om Swastyastu</div>' + kamboja("utama") +
        '<div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return candiSetengah("kiri") + candiSetengah("kanan") + penjor("p1") + penjor("p2") +
        '<div class="side-text"><div class="eyebrow">Pawiwahan</div>' + kamboja("utama") + '<div class="names">' + c.duaNama + '</div>' + hias + '<p>' + c.esc(c.tanggalPanjang) + '</p></div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + penjor("p1") + penjor("p2") +
        '<div class="candi-foto"><div class="cf-in">' + c.siluet + c.fotoPasangan + '</div></div><div class="poleng-band"></div>' +
        kamboja("h1") + kamboja("h2") +
        '<div class="title-block"><div class="eyebrow">Pawiwahan</div><div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div></div></div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '"><div class="poleng-ring"></div><div class="bulat">' + isi + '</div>' + kamboja("selip") + '</div>'; },
    hiasBagian: function () { return hias; },
    hiasAcara: function () { return kamboja("acara-k1") + kamboja("acara-k2"); }
  };
})();
