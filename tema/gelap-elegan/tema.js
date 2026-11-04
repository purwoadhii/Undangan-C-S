/* ===== Tema Gelap Elegan: hitam, emas, art deco ===== */
(function () {
  var kipas = function (cls) {
    return '<svg class="kipas ' + (cls || "") + '" viewBox="0 0 200 60" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1">' +
      '<path d="M100 58 L40 8 M100 58 L60 4 M100 58 L80 2 M100 58 L100 0 M100 58 L120 2 M100 58 L140 4 M100 58 L160 8"/>' +
      '<path d="M30 58 Q100 -20 170 58"/><path d="M0 58 H70 M130 58 H200"/></g><circle cx="100" cy="58" r="3" fill="currentColor"/></svg>';
  };
  var pintu = function (sisi) {
    return '<div class="door ' + sisi + '"><svg viewBox="0 0 200 600" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="#c9a45c" stroke-width="1.2">' +
      '<rect x="14" y="14" width="172" height="572"/><rect x="24" y="24" width="152" height="552"/>' +
      '<path d="M24 160 H176 M24 440 H176"/>' +
      '<path d="M100 24 V160 M60 24 L100 160 L140 24 M40 24 L100 160 L160 24"/>' +
      '<path d="M100 576 V440 M60 576 L100 440 L140 576 M40 576 L100 440 L160 576"/>' +
      '<rect x="44" y="190" width="112" height="220"/><path d="M44 300 H156 M100 190 V410"/>' +
      '<path d="M44 190 L100 240 L156 190 M44 410 L100 360 L156 410"/></g>' +
      '<circle cx="' + (sisi === "l" ? 190 : 10) + '" cy="300" r="6" fill="#c9a45c"/></svg></div>';
  };
  var bingkaiDeco = '<svg class="deco-frame" viewBox="0 0 300 400" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="#c9a45c">' +
    '<path class="draw" stroke-width="1.5" d="M30 4 H270 L296 30 V370 L270 396 H30 L4 370 V30 Z"/>' +
    '<path class="draw d2" stroke-width=".8" d="M40 14 H260 L286 40 V360 L260 386 H40 L14 360 V40 Z"/>' +
    '<path class="draw d3" stroke-width=".8" d="M4 30 H30 V4 M270 4 V30 H296 M296 370 H270 V396 M30 396 V370 H4"/></g></svg>';
  var sinar = '<svg class="rays" viewBox="-100 -100 200 200" aria-hidden="true"><g stroke="#c9a45c" stroke-width=".4" opacity=".55">' +
    Array.apply(null, Array(36)).map(function (_, i) { var a = i * 10 * Math.PI / 180; return '<line x1="0" y1="0" x2="' + (Math.cos(a) * 100).toFixed(1) + '" y2="' + (Math.sin(a) * 100).toFixed(1) + '"/>'; }).join("") +
    '</g></svg>';
  var lampu = '<svg class="chandelier" viewBox="0 0 120 120" aria-hidden="true"><g fill="none" stroke="#c9a45c" stroke-width="1"><path d="M60 0 V40"/><path d="M20 60 Q60 90 100 60"/><path d="M30 52 Q60 74 90 52"/><path d="M60 40 L20 60 M60 40 L100 60 M60 40 L30 52 M60 40 L90 52"/></g>' +
    '<g fill="#e8cf94"><circle cx="20" cy="64" r="2.4"/><circle cx="100" cy="64" r="2.4"/><circle cx="60" cy="78" r="2.4"/><circle cx="30" cy="56" r="2"/><circle cx="90" cy="56" r="2"/></g>' +
    '<g class="flame" fill="#f7dfa0"><ellipse cx="20" cy="58" rx="1.6" ry="3.4"/><ellipse cx="100" cy="58" rx="1.6" ry="3.4"/><ellipse cx="60" cy="72" rx="1.6" ry="3.4"/></g></svg>';

  window.TEMA = {
    id: "gelap-elegan",
    hitung: "belah",
    galeri: "grid",
    partikel: { jenis: "debu", warna: ["#e8cf94", "#c9a45c", "#fff3d1"], min: 3, max: 7, jumlah: 34 },
    label: {
      mempelai: ["The Couple", "Bride &amp; Groom"], acara: ["Save The Date", "Rangkaian Acara"], cerita: ["Our Journey", "Perjalanan Kami"],
      video: ["Our Film", "Video Kami"], galeri: ["Moments", "Galeri"], hadiah: ["Wedding Gift", "Tanda Kasih"], ucapan: ["Wishes", "Ucapan &amp; Kehadiran"]
    },
    nav: ["Couple", "Event", "Moments", "Gift", "Wishes"],
    kata: { buka: "Open Invitation", terima: "With love" },
    lamaBuka: 2000, jedaBuka: 900,
    sampul: function (c) {
      return pintu("l") + pintu("r") +
        '<div class="cover-text"><div class="eyebrow">The Wedding of</div>' + kipas("top") +
        '<div class="mono-box"><div class="mono" aria-hidden="true">' + c.monoHtml + '</div></div>' +
        '<div class="names sub">' + c.duaNama + '</div><div class="date">' + c.esc(c.tanggalPendek) + '</div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return '<div class="side-in">' + sinar + '<div class="side-text">' + kipas() + '<div class="mono">' + c.monoHtml + '</div><div class="names">' + c.duaNama + '</div><p>' + c.esc(c.tanggalPanjang) + '</p>' + kipas("flip") + '</div></div>';
    },
    pembuka: function (c) {
      return '<div class="hero">' + sinar + lampu +
        '<div class="frame-wrap"><div class="photo">' + c.siluet + c.fotoPasangan + '</div>' + bingkaiDeco + '</div>' +
        '<div class="title-block"><div class="eyebrow">The Wedding of</div><div class="names">' + c.duaNama + '</div>' + kipas("flip small") + '<div class="date">' + c.esc(c.tanggalPanjang) + '</div></div></div>';
    },
    bingkaiOrang: function (isi, cls) {
      return '<div class="pic ' + cls + '"><div class="oct">' + isi + '</div></div>';
    },
    hiasBagian: function (key) { return key === "ayat" ? "" : kipas("sec"); },
    hiasAcara: function () { return '<span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>'; }
  };
})();
