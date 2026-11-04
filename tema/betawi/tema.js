/* ===== Tema Betawi: merah-hijau-kuning, gigi balang, ondel-ondel, kembang kelapa, roti buaya ===== */
(function () {
  var gigi = function (cls) { return '<div class="gigi ' + (cls || "") + '"></div>'; };
  var kembang = function (cls) {
    var w = ["#d62839", "#f2a900", "#1f8a4c", "#ff7aa2", "#2f80ed", "#f2a900"], o = "";
    for (var i = 0; i < 18; i++) {
      var a = -90 + (i - 8.5) * 9, r = a * Math.PI / 180, x = 60 + Math.cos(r) * 52, y = 96 + Math.sin(r) * 80;
      o += '<path d="M60 96 Q' + (60 + Math.cos(r) * 26 + 6).toFixed(1) + ' ' + (96 + Math.sin(r) * 40).toFixed(1) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="' + w[i % w.length] + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3.4" fill="' + w[(i + 2) % w.length] + '"/>';
    }
    return '<svg class="kembang ' + (cls || "") + '" viewBox="0 0 120 100" aria-hidden="true">' + o + '</svg>';
  };
  var ondel = function (cls, muka, baju) {
    return '<svg class="ondel ' + cls + '" viewBox="0 0 160 360" aria-hidden="true">' +
      '<g transform="translate(20 0)">' + kembang().replace(/<svg[^>]*>|<\/svg>/g, "") + '</g>' +
      '<path d="M30 110 Q80 70 130 110 L126 126 H34Z" fill="#1d1d1d"/>' +
      '<ellipse cx="80" cy="150" rx="38" ry="44" fill="' + muka + '"/>' +
      '<g fill="#1d1d1d"><path d="M56 136 q8 -6 16 0" stroke="#1d1d1d" stroke-width="3" fill="none"/><path d="M88 136 q8 -6 16 0" stroke="#1d1d1d" stroke-width="3" fill="none"/><circle cx="64" cy="146" r="4"/><circle cx="96" cy="146" r="4"/></g>' +
      '<path d="M66 172 Q80 182 94 172" stroke="#1d1d1d" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M40 196 Q80 180 120 196 L150 360 H10Z" fill="' + baju + '"/>' +
      '<path d="M40 196 Q80 214 120 196 L118 210 Q80 228 42 210Z" fill="#f2a900"/>' +
      '<g fill="#f2a900"><path d="M18 330 L30 312 L42 330 L54 312 L66 330 L78 312 L90 330 L102 312 L114 330 L126 312 L138 330 L144 350 H14Z" opacity=".9"/></g>' +
      '<path d="M50 230 V300 M110 230 V300" stroke="rgba(0,0,0,.15)" stroke-width="4"/></svg>';
  };
  var rotiBuaya = '<svg class="roti-buaya" viewBox="0 0 220 70" aria-hidden="true"><path d="M8 40 Q30 20 70 26 Q120 14 170 28 Q196 34 214 26 Q204 42 176 44 Q130 58 80 52 Q40 56 8 40Z" fill="#c9843d" stroke="#8a5622" stroke-width="2"/>' +
    '<g fill="none" stroke="#8a5622" stroke-width="2" stroke-linecap="round"><path d="M80 30 l6 8 l6 -8 l6 8 l6 -8 l6 8 l6 -8 l6 8 l6 -8 l6 8"/><path d="M60 50 l-6 12 M96 54 l-4 12 M140 52 l4 12 M168 46 l8 10"/></g><circle cx="30" cy="34" r="3" fill="#3b2412"/></svg>';
  var hias = '<svg class="hias-betawi" viewBox="0 0 150 22" aria-hidden="true"><g><path d="M0 4 H150" stroke="#d62839" stroke-width="2"/>' +
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return '<path d="M' + (i * 15) + ' 5 L' + (i * 15 + 7.5) + ' 18 L' + (i * 15 + 15) + ' 5Z" fill="' + ["#d62839", "#1f8a4c", "#f2a900"][i % 3] + '"/>'; }).join("") + '</g></svg>';

  window.TEMA = {
    id: "betawi",
    hitung: "betawi",
    galeri: "betawi",
    urutan: ["ayat", "mempelai", "galeri", "acara", "video", "cerita", "hadiah", "ucapan"],
    partikel: { jenis: "kelopak", warna: ["#d62839", "#f2a900", "#1f8a4c", "#ff7aa2"], min: 6, max: 10, jumlah: 20 },
    label: {
      mempelai: ["Penganten", "Abang &amp; None"], acara: ["Hari Bahagia", "Waktu &amp; Tempat"], cerita: ["Cerita Kite", "Dari kenal sampe nikah"],
      video: ["Video", "Tonton dulu ye"], galeri: ["Galeri", "Poto-poto kite"], hadiah: ["Tanda Kasih", "Amplop digital"], ucapan: ["Ucapan", "Doa &amp; kehadiran"]
    },
    nav: ["Penganten", "Acara", "Galeri", "Hadiah", "Ucapan"],
    kata: {
      buka: "Buka Undangan", kepada: "Kepada Abang/Empok/Encang/Encing", terima: "Makasih banyak ye!",
      salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
      pembuka: "Dengan memohon rahmat Allah SWT, kami sekeluarga ngundang Abang, Empok, Encang, Encing semua buat dateng ke acara pernikahan anak kami:",
      hadiah: "Doa dari Abang dan Empok udah jadi hadiah paling indah. Kalo mau ngasih tanda kasih, bisa lewat:",
      penutup: "Kehadiran dan doa restu Abang, Empok, Encang, Encing semua jadi kebahagiaan buat kami. Jangan lupa dateng ye!"
    },
    jedaBuka: 900, lamaBuka: 1700,
    sampul: function (c) {
      return '<div class="belah atas">' + gigi("bawah-gigi") + '</div><div class="belah bawah">' + gigi("atas-gigi") + '</div>' +
        ondel("kiri", "#d62839", "#1f8a4c") + ondel("kanan", "#fff4e6", "#d62839") +
        '<div class="cover-text"><div class="eyebrow">Undangan Pernikahan</div>' + kembang("puncak") +
        '<div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return gigi("atas-layar") + ondel("kiri", "#d62839", "#1f8a4c") + ondel("kanan", "#fff4e6", "#d62839") +
        '<div class="side-text">' + kembang("puncak") + '<div class="names">' + c.duaNama + '</div>' + hias + '<p>' + c.esc(c.tanggalPanjang) + '</p>' + rotiBuaya + '</div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + kembang("k1") + kembang("k2") +
        '<div class="rumah">' + gigi("lisplang") + '<div class="foto-kotak">' + c.siluet + c.fotoPasangan + '</div></div>' +
        '<div class="title-block"><div class="eyebrow">Kite mau nikah!</div><div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div>' + rotiBuaya + '</div></div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '">' + kembang("lingkar") + '<div class="bulat">' + isi + '</div></div>'; },
    hiasBagian: function () { return hias; },
    hiasAcara: function () { return gigi("acara-gigi"); }
  };
})();
