/* ===== Tema Jawa Melati: putih & emas lembut, ronce melati yang terurai ===== */
(function () {
  var bunga = function (x, y, r) {
    var p = ""; for (var i = 0; i < 5; i++) { var a = (i * 72 - 90) * Math.PI / 180; p += '<circle cx="' + (x + Math.cos(a) * r).toFixed(1) + '" cy="' + (y + Math.sin(a) * r).toFixed(1) + '" r="' + (r * 0.85).toFixed(1) + '"/>'; }
    return '<g class="mb"><g fill="#fffdf6" stroke="#e8dcc0" stroke-width=".6">' + p + '</g><circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.5).toFixed(1) + '" fill="#efd98f"/></g>';
  };
  var ronce = function (n, cls, style) {
    var g = '<path d="M10 0 V' + (n * 22 + 6) + '" stroke="#b5c79a" stroke-width="1"/>';
    for (var i = 0; i < n; i++) g += (i % 3 === 2 ? '<ellipse cx="10" cy="' + (14 + i * 22) + '" rx="3.4" ry="6" fill="#f7f3e3" stroke="#d9cfa8" stroke-width=".6"/>' : bunga(10, 14 + i * 22, 4.2));
    g += '<path d="M10 ' + (n * 22 + 6) + ' l-4 10 M10 ' + (n * 22 + 6) + ' l4 10" stroke="#b99a5b" stroke-width="1"/>';
    return '<svg class="ronce ' + (cls || "") + '" style="' + (style || "") + '" viewBox="0 0 20 ' + (n * 22 + 18) + '" aria-hidden="true">' + g + '</svg>';
  };
  var tirai = function () {
    var o = '<div class="tirai">', N = 14;
    for (var i = 0; i < N; i++) {
      var sisi = i < N / 2 ? "kiri" : "kanan", jarak = Math.abs(i - (N - 1) / 2);
      o += ronce(Math.round(4 + jarak * 1.6), sisi, "left:" + (i * 100 / (N - 1)).toFixed(1) + "%;animation-delay:-" + (i * 0.37).toFixed(2) + "s");
    }
    return o + '</div>';
  };
  var karangan = function (cls, n, r) {
    var o = ""; n = n || 18; r = r || 88;
    for (var i = 0; i < n; i++) { var a = i * 2 * Math.PI / n; o += bunga(100 + Math.cos(a) * r, 100 + Math.sin(a) * r, i % 2 ? 5 : 6.4); }
    for (i = 0; i < n; i++) { var b = (i + 0.5) * 2 * Math.PI / n; o += '<ellipse cx="' + (100 + Math.cos(b) * (r + 9)).toFixed(1) + '" cy="' + (100 + Math.sin(b) * (r + 9)).toFixed(1) + '" rx="2.6" ry="6" fill="#9bb586" transform="rotate(' + (b * 180 / Math.PI + 90).toFixed(0) + ' ' + (100 + Math.cos(b) * (r + 9)).toFixed(1) + ' ' + (100 + Math.sin(b) * (r + 9)).toFixed(1) + ')"/>'; }
    return '<svg class="karangan ' + (cls || "") + '" viewBox="0 0 200 200" aria-hidden="true">' + o + '</svg>';
  };
  var hias = '<svg class="hias-melati" viewBox="0 0 120 30" aria-hidden="true"><path d="M0 15 H40 M80 15 H120" stroke="#cdb784" stroke-width="1"/>' + bunga(60, 15, 6) + bunga(46, 15, 3.6) + bunga(74, 15, 3.6) + '</svg>';

  window.TEMA = {
    id: "jawa-melati",
    hitung: "melati",
    galeri: "lengkung",
    urutan: ["ayat", "mempelai", "cerita", "acara", "video", "galeri", "hadiah", "ucapan"],
    partikel: { jenis: "melati", warna: ["#ffffff", "#fffaf0", "#f6f1de"], min: 10, max: 15, jumlah: 18 },
    label: {
      mempelai: ["Mempelai", "Putra &amp; Putri"], acara: ["Wiwaha", "Waktu &amp; Tempat"], cerita: ["Kisah Kami", "Merangkai cerita"],
      video: ["Video", "Kenangan kami"], galeri: ["Galeri", "Sekar kenangan"], hadiah: ["Tanda Kasih", "Hadiah"], ucapan: ["Donga Pangestu", "Ucapan &amp; Doa"]
    },
    nav: ["Mempelai", "Wiwaha", "Galeri", "Hadiah", "Ucapan"],
    kata: {
      buka: "Buka Undangan", terima: "Matur sembah nuwun", salam: "Bismillahirrahmanirrahim",
      pembuka: "Laksana melati yang dironce satu demi satu, kami merangkai niat suci dalam ikatan pernikahan. Dengan memohon ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:"
    },
    jedaBuka: 1000, lamaBuka: 2000,
    sampul: function (c) {
      return tirai() +
        '<div class="cover-text"><div class="eyebrow">Undangan Pernikahan</div>' +
        '<div class="wreath">' + karangan("putar") + '<div class="mono" aria-hidden="true">' + c.monoHtml + '</div></div>' +
        '<div class="names">' + c.duaNama + '</div><div class="date">' + c.esc(c.tanggalPanjang) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return tirai() + '<div class="side-text"><div class="wreath">' + karangan("putar") + '<div class="mono">' + c.monoHtml + '</div></div><div class="names">' + c.duaNama + '</div><p>' + c.esc(c.tanggalPanjang) + '</p></div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + tirai() +
        '<div class="oval-wrap">' + karangan("putar besar", 26, 94) + '<div class="oval-foto">' + c.siluet + c.fotoPasangan + '</div></div>' +
        '<div class="title-block"><div class="eyebrow">Undangan Pernikahan</div><div class="names">' + c.duaNama + '</div>' + hias + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div></div></div>';
    },
    bingkaiOrang: function (isi, cls) {
      return '<div class="pic ' + cls + '">' + ronce(8, "sisi a") + ronce(8, "sisi b") + '<div class="lengkung">' + isi + '</div></div>';
    },
    hiasBagian: function () { return hias; },
    hiasAcara: function () { return ronce(5, "acara-ronce a") + ronce(5, "acara-ronce b"); }
  };
})();
