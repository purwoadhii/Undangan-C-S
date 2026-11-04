/* Pemuat tema: membaca tema pilihan di data.js (UNDANGAN.tema), lalu memuat huruf, gaya, dan skrip tema itu.
   Untuk melihat tema lain tanpa mengubah data, tambahkan ?tema=nama di link (contoh: ?tema=pantai). */
(function () {
  var D = window.UNDANGAN || {}, L = window.DAFTAR_TEMA || [];
  var id = D.tema || "taman";
  try { var q = new URLSearchParams(location.search).get("tema"); if (q) id = q; } catch (e) {}
  var t = L.filter(function (x) { return x.id === id; })[0] || L[0];
  D.tema = t.id;
  var me = document.currentScript && document.currentScript.src;
  var base = me ? me.replace(/inti\/muat\.js.*$/, "") : "../tema/";
  document.write(
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?' + t.huruf + '&display=swap">' +
    '<link rel="stylesheet" href="' + base + 'inti/inti.css">' +
    (t.dasar ? '<link rel="stylesheet" href="' + base + t.dasar + '/tema.css">' : '') +
    '<link rel="stylesheet" href="' + base + t.id + '/tema.css">' +
    (t.dasar ? '<script src="' + base + t.dasar + '/tema.js"><\/script>' : '') +
    '<script src="' + base + t.id + '/tema.js"><\/script>' +
    '<script src="' + base + 'inti/inti.js"><\/script>'
  );
})();
