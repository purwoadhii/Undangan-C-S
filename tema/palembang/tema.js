/* ===== Tema Melayu Palembang: songket lepus emas, rumah limas, mahkota aesan gede, bunga tanjung ===== */
(function () {
  var E = "#e8b84f";
  var tanjung = function (x, y, r) {
    var p = "";
    for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4, b = a + Math.PI / 8; p += (i ? " L" : "M") + (x + Math.cos(a) * r).toFixed(1) + " " + (y + Math.sin(a) * r).toFixed(1) + " L" + (x + Math.cos(b) * r * 0.45).toFixed(1) + " " + (y + Math.sin(b) * r * 0.45).toFixed(1); }
    return '<path d="' + p + 'Z"/>';
  };
  var mahkota = function (cls) {
    var tangkai = "";
    [[150, 10, 0], [118, 26, -14], [182, 26, 14], [88, 46, -26], [212, 46, 26], [62, 68, -38], [238, 68, 38]].forEach(function (t) {
      tangkai += '<path d="M150 120 Q' + ((150 + t[0]) / 2) + ' ' + (t[1] + 50) + ' ' + t[0] + ' ' + (t[1] + 14) + '" stroke="' + E + '" stroke-width="2.2" fill="none"/>' + tanjung(t[0], t[1] + 8, 9);
    });
    return '<svg class="mahkota ' + (cls || "") + '" viewBox="0 0 300 150" aria-hidden="true"><g fill="' + E + '">' + tangkai + '</g>' +
      '<path d="M40 112 Q150 92 260 112 L250 140 Q150 124 50 140Z" fill="' + E + '" stroke="#9a6b1c" stroke-width="1.4"/>' +
      '<g fill="#8e1b1b">' + [70, 110, 150, 190, 230].map(function (x, i) { return '<circle cx="' + x + '" cy="' + (124 - (i === 2 ? 3 : 0)) + '" r="' + (i === 2 ? 6 : 4) + '"/>'; }).join("") + '</g></svg>';
  };
  var limas = '<svg class="limas" viewBox="0 0 300 120" aria-hidden="true"><g fill="none" stroke="' + E + '" stroke-width="2"><path d="M20 116 L80 80 H220 L280 116Z"/><path d="M80 80 L115 50 H185 L220 80Z"/><path d="M115 50 L140 24 H160 L185 50Z"/><path d="M140 24 L150 4 L160 24"/>' +
    '<path d="M40 116 V108 M260 116 V108"/></g><g fill="' + E + '">' + tanjung(150, 66, 7) + tanjung(150, 100, 6) + '</g></svg>';
  var bingkai = function () {
    return '<div class="bingkai-songket"><span class="bt tl"></span><span class="bt tr"></span><span class="bt bl"></span><span class="bt br"></span></div>';
  };
  var hias = '<svg class="hias-plg" viewBox="0 0 170 26" aria-hidden="true"><g fill="currentColor"><path d="M0 12 H60 V14 H0Z M110 12 H170 V14 H110Z"/>' + tanjung(85, 13, 11) + tanjung(68, 13, 5) + tanjung(102, 13, 5) + '</g></svg>';

  window.TEMA = {
    id: "palembang",
    hitung: "koin",
    galeri: "lepus",
    urutan: ["ayat", "mempelai", "video", "acara", "galeri", "cerita", "hadiah", "ucapan"],
    partikel: { jenis: "bintang", warna: ["#e8b84f", "#f6d98c", "#ffffff", "#d4482f"], min: 4, max: 8, jumlah: 26 },
    label: {
      mempelai: ["Pengantin", "Kedua Mempelai"], acara: ["Walimatul 'Ursy", "Waktu &amp; Tempat"], cerita: ["Kisah Kito", "Perjalanan Kami"],
      video: ["Video", "Kenangan"], galeri: ["Galeri", "Kenangan"], hadiah: ["Tanda Kasih", "Hadiah"], ucapan: ["Ucapan", "Doa &amp; Kehadiran"]
    },
    nav: ["Pengantin", "Acara", "Galeri", "Hadiah", "Ucapan"],
    kata: {
      buka: "Buka Undangan", kepada: "Kepado Yth. Bapak/Ibu/Saudara/i", terima: "Terimo Kasih",
      salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
      pembuka: "Dengan memohon rahmat dan ridho Allah SWT, kami sekeluarga bermaksud menyelenggarakan Walimatul 'Ursy putra-putri kami:",
      penutup: "Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu."
    },
    jedaBuka: 1000, lamaBuka: 1800,
    sampul: function (c) {
      return '<div class="lepus"></div>' + bingkai() +
        '<div class="cover-text"><div class="eyebrow">Walimatul \'Ursy</div>' + limas +
        '<div class="mono" aria-hidden="true">' + c.monoHtml + '</div><div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return '<div class="lepus"></div>' + bingkai() + '<div class="side-text"><div class="eyebrow">Walimatul \'Ursy</div>' + limas + '<div class="names">' + c.duaNama + '</div>' + hias + '<p>' + c.esc(c.tanggalPanjang) + '</p></div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + mahkota("atas") +
        '<div class="foto-songket"><div class="fs-in">' + c.siluet + c.fotoPasangan + '</div></div>' +
        '<div class="title-block"><div class="eyebrow">Walimatul \'Ursy</div><div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div></div></div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '">' + mahkota("mini") + '<div class="lengkung">' + isi + '</div></div>'; },
    hiasBagian: function () { return hias; },
    hiasAcara: function () { return '<div class="limas-acara">' + limas + '</div>'; }
  };
})();
