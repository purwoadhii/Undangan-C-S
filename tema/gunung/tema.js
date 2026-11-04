/* ===== Tema Gunung: pegunungan berlapis, kabut, pinus, matahari terbit ===== */
(function () {
  var pinus = function (x, y, s, f) {
    return '<path fill="' + f + '" d="M' + x + ' ' + (y - 60 * s) + ' L' + (x + 14 * s) + ' ' + (y - 30 * s) + ' H' + (x + 7 * s) + ' L' + (x + 20 * s) + ' ' + (y - 6 * s) + ' H' + (x + 3 * s) + ' V' + y + ' H' + (x - 3 * s) + ' V' + (y - 6 * s) + ' H' + (x - 20 * s) + ' L' + (x - 7 * s) + ' ' + (y - 30 * s) + ' H' + (x - 14 * s) + 'Z"/>';
  };
  var hutan = function (y, s, f, n, step, off) { var o = ""; for (var i = 0; i < n; i++) o += pinus(off + i * step + (i % 3) * 7, y + (i % 2) * 6, s * (0.8 + (i % 4) * 0.12), f); return o; };
  var lapis = function () {
    return '<div class="lapis l1"><svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><path fill="#a9bcc0" d="M0 380 L160 250 L300 330 L470 170 L640 320 L780 210 L960 330 L1120 150 L1290 300 L1440 220 L1600 320 V600 H0Z"/><path fill="#fff" opacity=".8" d="M470 170 L430 210 L455 205 L470 222 L490 200 L512 210Z M1120 150 L1078 192 L1104 188 L1120 204 L1140 184 L1162 194Z"/></svg></div>' +
      '<div class="kabut k1"></div>' +
      '<div class="lapis l2"><svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><path fill="#7d9a8e" d="M0 420 L200 300 L360 380 L540 260 L720 390 L900 280 L1080 400 L1260 290 L1420 370 L1600 300 V600 H0Z"/></svg></div>' +
      '<div class="kabut k2"></div>' +
      '<div class="lapis l3"><svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><path fill="#4f6f5f" d="M0 470 Q200 390 400 450 T800 440 T1200 450 T1600 430 V600 H0Z"/>' + hutan(470, 1, "#4f6f5f", 26, 62, 10) + '</svg></div>' +
      '<div class="lapis l4"><svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><path fill="#2f4a3c" d="M0 540 Q300 480 600 530 T1200 520 T1600 510 V600 H0Z"/>' + hutan(560, 1.7, "#2f4a3c", 11, 150, 30) + '</svg></div>';
  };
  var burung = '<svg class="burung-v" viewBox="0 0 120 50" aria-hidden="true"><g fill="none" stroke="#3a4a42" stroke-width="2" stroke-linecap="round"><path d="M50 20 l8 5 l8 -5"/><path d="M34 30 l6 4 l6 -4"/><path d="M74 30 l6 4 l6 -4"/><path d="M18 40 l5 3 l5 -3"/><path d="M92 40 l5 3 l5 -3"/></g></svg>';
  var puncak = '<svg class="hias-puncak" viewBox="0 0 120 30" aria-hidden="true"><path d="M0 28 H30 L48 8 L58 18 L70 2 L90 28 H120" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="96" cy="8" r="4" fill="currentColor" opacity=".6"/></svg>';
  var kontur = '<svg class="kontur" viewBox="0 0 300 300" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1">' +
    '<path d="M150 40 C220 40 260 100 250 160 C240 230 170 260 120 250 C60 238 40 180 50 130 C60 80 100 40 150 40Z"/><path d="M150 70 C200 70 228 112 222 156 C214 206 168 226 130 218 C88 208 74 170 80 134 C88 96 112 70 150 70Z"/>' +
    '<path d="M150 100 C182 100 198 126 194 152 C188 184 162 196 138 190 C112 184 104 160 108 138 C114 114 128 100 150 100Z"/><path d="M150 128 C164 128 172 140 170 152 C166 166 154 170 144 168 C134 164 130 154 132 144 C134 134 140 128 150 128Z"/></g></svg>';

  window.TEMA = {
    id: "gunung",
    hitung: "gunung",
    galeri: "film",
    urutan: ["ayat", "acara", "mempelai", "cerita", "galeri", "video", "hadiah", "ucapan"],
    partikel: { jenis: "daun", warna: ["#c47a3a", "#d99a4e", "#7d9a6a", "#a8642e"], min: 10, max: 18, jumlah: 14 },
    label: {
      mempelai: ["Mempelai", "Dua pendaki, satu tujuan"], acara: ["Hari H", "Catat tanggalnya"], cerita: ["Jejak Kami", "Perjalanan bersama"],
      video: ["Video", "Rekaman perjalanan"], galeri: ["Galeri", "Geser untuk melihat"], hadiah: ["Tanda Kasih", "Bekal perjalanan"], ucapan: ["Ucapan", "Kehadiran &amp; doa"]
    },
    nav: ["Mempelai", "Acara", "Galeri", "Hadiah", "Ucapan"],
    kata: { buka: "Mulai Perjalanan", terima: "Sampai jumpa di puncak bahagia", pembuka: "Setinggi apa pun gunung, akan terasa ringan bila didaki bersama. Dengan memohon rahmat Tuhan Yang Maha Esa, kami mengundang Anda di hari pernikahan kami:" },
    jedaBuka: 1000, lamaBuka: 2100,
    sampul: function (c) {
      return '<div class="langit"><div class="mentari"></div>' + burung + '</div>' + lapis() +
        '<div class="cover-text"><div class="eyebrow">Undangan Pernikahan</div><div class="names">' + c.duaNama + '</div>' +
        '<div class="date"><span>' + c.esc(c.tanggalPendek) + '</span></div>' +
        '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
        '<button class="btn-open" id="openBtn" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 20 L9 8 L13 14 L16 10 L22 20Z"/></svg>' + c.tombolBuka + '</button></div></div>';
    },
    samping: function (c) {
      return '<div class="langit"><div class="mentari"></div>' + burung + '</div>' + lapis() +
        '<div class="side-text"><div class="eyebrow">Undangan Pernikahan</div><div class="names">' + c.duaNama + '</div><p>' + c.esc(c.tanggalPanjang) + '</p></div>';
    },
    pembuka: function (c) {
      return '<div class="hero"><div class="langit"><div class="mentari"></div>' + burung + '</div>' +
        '<div class="title-block"><div class="eyebrow">Kami akan menikah</div><div class="names">' + c.duaNama + '</div></div>' +
        '<div class="peak-wrap"><div class="peak-garis"></div><div class="peak">' + c.siluet + c.fotoPasangan + '</div></div>' +
        '<div class="date-tag">' + c.esc(c.tanggalPanjang) + '</div>' + lapis() + '</div>';
    },
    bingkaiOrang: function (isi, cls) { return '<div class="pic ' + cls + '"><div class="kompas"></div><div class="bulat">' + isi + '</div></div>'; },
    hiasBagian: function () { return puncak; },
    hiasAcara: function () { return kontur; }
  };
})();
