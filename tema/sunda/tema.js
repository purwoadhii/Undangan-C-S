/* ===== Tema Sunda: merah marun & emas, siger, awi (bambu), angklung, kere bambu ===== */
(function () {
  var E = "#d4ac55";
  var siger = function (cls) {
    var p = "";
    for (var i = 0; i < 7; i++) {
      var x = 30 + i * 40, h = 40 + (3 - Math.abs(i - 3)) * 16;
      p += '<path d="M' + (x - 16) + ' 92 Q' + (x - 10) + ' ' + (92 - h * 0.6) + ' ' + x + ' ' + (92 - h) + ' Q' + (x + 10) + ' ' + (92 - h * 0.6) + ' ' + (x + 16) + ' 92Z"/>' +
        '<circle cx="' + x + '" cy="' + (88 - h) + '" r="3.4"/>';
    }
    return '<svg class="siger ' + (cls || "") + '" viewBox="0 0 300 130" aria-hidden="true"><g fill="' + E + '" stroke="#8a6420" stroke-width="1">' + p + '</g>' +
      '<path d="M8 92 Q150 74 292 92 L282 112 Q150 96 18 112Z" fill="' + E + '" stroke="#8a6420"/>' +
      '<g fill="#7b1e2b"><circle cx="150" cy="98" r="5"/><circle cx="100" cy="100" r="3.4"/><circle cx="200" cy="100" r="3.4"/><circle cx="54" cy="104" r="2.6"/><circle cx="246" cy="104" r="2.6"/></g>' +
      '<path d="M18 112 Q150 96 282 112" fill="none" stroke="#fff3cf" stroke-width="1" opacity=".7"/></svg>';
  };
  var awi = function (cls) {
    var ruas = ""; for (var y = 40; y < 800; y += 90) ruas += '<rect x="0" y="' + y + '" width="36" height="5" rx="2" fill="#5f7f3e"/>';
    var daun = '<g fill="#7aa152"><path d="M36 130 q40 -10 64 10 q-34 0 -64 -10Z"/><path d="M36 310 q44 -4 70 18 q-36 -2 -70 -18Z"/><path d="M0 220 q-40 -8 -62 12 q34 -2 62 -12Z"/><path d="M0 480 q-44 -6 -66 16 q36 -2 66 -16Z"/></g>';
    return '<svg class="awi ' + cls + '" viewBox="-70 0 180 800" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><rect x="0" y="0" width="36" height="800" fill="url(#awiG)"/>' + ruas + daun +
      '<defs><linearGradient id="awiG" x1="0" x2="1"><stop offset="0" stop-color="#6f9447"/><stop offset=".45" stop-color="#a8c76d"/><stop offset="1" stop-color="#5f7f3e"/></linearGradient></defs></svg>';
  };
  var angklung = function (cls) {
    return '<svg class="angklung ' + cls + '" viewBox="0 0 80 110" aria-hidden="true"><g fill="none" stroke="#8a6420" stroke-width="3" stroke-linecap="round"><path d="M6 100 H74 M6 12 H74 M10 12 V100 M70 12 V100"/></g>' +
      '<g fill="#d9bf7c" stroke="#8a6420" stroke-width="1.2"><rect x="20" y="24" width="14" height="70" rx="6"/><rect x="44" y="40" width="12" height="54" rx="5"/></g>' +
      '<g stroke="#8a6420" stroke-width="1"><path d="M20 44 H34 M20 70 H34 M44 60 H56 M44 80 H56"/></g></svg>';
  };
  var hias = '<svg class="hias-sunda" viewBox="0 0 140 28" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.3"><path d="M0 14 H48 M92 14 H140"/><path d="M70 2 Q60 14 70 26 Q80 14 70 2Z"/><path d="M56 14 Q62 6 66 14 Q62 22 56 14Z M84 14 Q78 6 74 14 Q78 22 84 14Z"/></g></svg>';

  window.TEMA = {
    id: "sunda",
    hitung: "angklung",
    galeri: "bilik",
    urutan: ["ayat", "mempelai", "acara", "cerita", "galeri", "video", "hadiah", "ucapan"],
    partikel: { jenis: "daun", warna: ["#7aa152", "#a8c76d", "#d4ac55"], min: 9, max: 15, jumlah: 14 },
    label: {
      mempelai: ["Panganten", "Kedua Mempelai"], acara: ["Acara", "Waktos sareng Tempat"], cerita: ["Carita Urang", "Perjalanan Kami"],
      video: ["Video", "Kenangan"], galeri: ["Galeri", "Mangsa Bagja"], hadiah: ["Tanda Kanyaah", "Hadiah"], ucapan: ["Du'a &amp; Ucapan", "Kahadiran"]
    },
    nav: ["Panganten", "Acara", "Galeri", "Hadiah", "Ucapan"],
    kata: {
      buka: "Buka Uleman", kepada: "Ka Bapak/Ibu/Saderek", terima: "Hatur Nuhun",
      salam: "Sampurasun. Assalamu'alaikum Warahmatullahi Wabarakatuh",
      pembuka: "Kalayan nyuhunkeun rahmat sareng ridho Allah SWT, simkuring sakulawargi bade ngayakeun walimah pernikahan putra-putri simkuring:",
      penutup: "Mangrupi kabagjaan sareng kahormatan kanggo simkuring, upami Bapak/Ibu/Saderek kersa sumping sareng masihan du'a restu ka panganten."
    },
    jedaBuka: 1000, lamaBuka: 1900,
    sampul: function (c) {
      return '<div class="kere"></div>' + awi("kiri") + awi("kanan") +
        '<div class="cover-text"><div class="eyebrow">Wilujeng Sumping</div>' + siger("goyang") +
        '<div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return '<div class="kere"></div>' + awi("kiri") + awi("kanan") + '<div class="side-text"><div class="eyebrow">Wilujeng Sumping</div>' + siger() + '<div class="names">' + c.duaNama + '</div>' + hias + '<p>' + c.esc(c.tanggalPanjang) + '</p></div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + angklung("a1") + angklung("a2") +
        '<div class="siger-frame">' + siger("atas") + '<div class="foto-lengkung">' + c.siluet + c.fotoPasangan + '</div></div>' +
        '<div class="title-block"><div class="eyebrow">Walimatul \'Ursy</div><div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div></div></div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '">' + siger("mini") + '<div class="lengkung">' + isi + '</div></div>'; },
    hiasBagian: function () { return hias; },
    hiasAcara: function (i) { return '<div class="pita">' + (i ? "Resepsi" : "Akad") + '</div>'; }
  };
})();
